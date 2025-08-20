declare module '@jr/api' {
  export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    // ...add other fields used in your app as needed...
  }

  export type IProduct = Product;

  export interface ProductsResponse {
    items: Product[];
    total: number;
  }
}
