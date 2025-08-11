import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { Component, signal, computed, effect, inject, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap, shareReplay, map, catchError, startWith } from 'rxjs';
import { JrPaginatorComponent } from '@jr/ui';

import { Product } from '@jr/api';
import { ProductsApi } from './products.api';
import { ProductsService } from './products.service';
import { normalizeParams } from './product';

const Product: Product = {
  id: '1',
  name: 'Sample Product',
  price: 100,
  description: 'This is a sample product.',
};

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, JrPaginatorComponent],
})
export class ProductListComponent implements OnInit {
  private api = inject(ProductsApi);
  private productService = inject(ProductsService);

  ngOnInit(): void {
    // Lifecycle hook added intentionally; initialization is handled by signals.
    console.log('ProductListComponent initialized', {
      page: this.page,
      product: this.product,
    });
  }

  // Inputs (single source of truth)
  q = signal('');
  sort = signal<'name' | 'price'>('name');
  page = signal(1);
  product = signal<Product | null>(Product);

  // Derived state
  params = computed(() => normalizeParams({
    q: this.q(),
    sort: this.sort(),
  }));

  // Effect boundary: one pipeline for fetching
  readonly result$ = toObservable(this.params).pipe(
    debounceTime(250),
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    switchMap(p =>
      this.api.search(p).pipe(
        map(res => ({ kind: 'ok' as const, res })),
        catchError(err => [({ kind: 'err' as const, err })]),
        startWith({ kind: 'loading' as const })
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  // Simple selectors for template
  readonly loading$ = this.result$.pipe(map(s => s.kind === 'loading'));
  readonly items$ = this.result$.pipe(map(s => s.kind === 'ok' ? s.res.items : []));
  readonly total$ = this.result$.pipe(map(s => s.kind === 'ok' ? s.res.total : 0));
  readonly error$ = this.result$.pipe(map(s => s.kind === 'err'  ? s.err : null));

  // Event handlers (purely update inputs)
  onQueryChange(v: string) { this.q.set(v); this.page.set(1); }
  onSortChange(v: 'name'|'price') { this.sort.set(v); this.page.set(1); }
  onPageChange(v: number) { this.page.set(v); }
}
