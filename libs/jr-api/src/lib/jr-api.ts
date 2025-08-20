export interface IProductSearch {
  id: string;
  [key: string]: any; // TODO: replace with the real shape once the shared model is available
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const Product: IProduct = {
  id: '1',
  name: 'Sample Product',
  price: 100,
  description: 'This is a sample product.',
}
