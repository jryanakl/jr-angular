import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Params } from './product';

@Injectable({ providedIn: 'root' })
export class ProductsApi {
  search(params: Params): Observable<{ items: any[]; total: number }> {
    // @todo: Replace this with your real API call
    return of({ items: [], total: 0 });
  }
}