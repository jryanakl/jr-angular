import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: string;
  [key: string]: any; // TODO: replace with the real shape once the shared model is available
}

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
    return this.http.get<Product[]>(this.getUrl());
  }

  create(product: Product) {
    return this.http.post<Product>(this.getUrl(), product);
  }

  delete(product: Product) {
    return this.http.delete(`${this.getUrlWithId(product.id)}`);
  }

  find(id: string) {
    return this.http.get<Product>(`${this.getUrlWithId(id)}`);
  }

  update(product: Product) {
    return this.http.put<Product>(this.getUrlWithId(product.id), product);
  }
}
