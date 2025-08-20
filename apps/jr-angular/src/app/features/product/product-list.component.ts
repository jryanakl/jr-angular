import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { Component, signal, computed, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, of, tap } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, shareReplay, map, catchError, startWith } from 'rxjs';
import { IProduct } from '@jr/api';
import { normalizeParams } from '../../shared/utils';
import { ProductsService } from './products.service';

type SearchParams = ReturnType<typeof normalizeParams>;
type ProductsResponse = { items: IProduct[]; total: number };
type Result =
  | { kind: 'ok'; res: ProductsResponse }
  | { kind: 'err'; err: unknown }
  | { kind: 'loading' };

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgFor],
})
export class ProductListComponent implements OnInit {
  q = signal('');
  sort = signal<'name' | 'price'>('name');
  page = signal(1);
  product = signal<IProduct | null>(null);
  products: IProduct[] = [];
  params = computed(() => normalizeParams({
    q: this.q(),
    sort: this.sort(),
  }));

  //@todo
  result$: Observable<Result> = toObservable(this.params).pipe(
    debounceTime(250),
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    switchMap((p: SearchParams) =>
      this.productsService.search(p).pipe(
        map((res: ProductsResponse) => ({ kind: 'ok' as const, res })),
        catchError((err: unknown) => of({ kind: 'err' as const, err })),
        startWith({ kind: 'loading' as const })
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );
  loading$: Observable<boolean> = this.result$.pipe(map(s => s.kind === 'loading'));
  items$: Observable<IProduct[]> = this.result$.pipe(map(s => s.kind === 'ok' ? s.res.items : []));
  total$: Observable<number> = this.result$.pipe(map(s => s.kind === 'ok' ? s.res.total : 0));
  error$: Observable<unknown | null> = this.result$.pipe(map(s => s.kind === 'err' ? s.err : null));

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadProducts().subscribe((res) => {
      console.log('ProductListComponent.loadProducts()', {
        page: this.page,
        product: this.product,
        productsService: this.productsService,
        res: res,
      });
    });
  }

  loadProducts(): Observable<IProduct[]> {
    return this.productsService.all().pipe(
      tap((res: IProduct[]) => {
        this.products = res;
      }, (err) => {
        console.error('Error loading products:', err);
      })
    );
  }

  // @todo: Event handlers (purely update inputs)
  onQueryChange(v: string) { this.q.set(v); this.page.set(1); }
  onSortChange(v: 'name'|'price') { this.sort.set(v); this.page.set(1); }
  onPageChange(v: number) { this.page.set(v); }
}
