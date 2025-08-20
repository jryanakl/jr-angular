import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@jr/api';
import { Observable, of } from 'rxjs';
import { Params } from '../../shared/utils';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  private getUrl() {
    return `${API_ENDPOINT}/products`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<IProduct[]>(this.getUrl());
  }

  create(product: IProduct) {
    return this.http.post<IProduct>(this.getUrl(), product);
  }

  delete(product: IProduct) {
    return this.http.delete(`${this.getUrlWithId(product.id)}`);
  }

  find(id: string) {
    return this.http.get<IProduct>(`${this.getUrlWithId(id)}`);
  }

  search(params: Params): Observable<{ items: IProduct[]; total: number }> {
    // @todo: Replace this with your real API call
    debugger;
    return of({ items: [], total: 0 });
  }

  update(product: IProduct) {
    return this.http.put<IProduct>(this.getUrlWithId(product.id), product);
  }
}
