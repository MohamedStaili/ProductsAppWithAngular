import {ProductModel} from './product.model';

export interface AppStateModel {
  products: ProductModel[];
  keyword: string;
  currentPage: number;
  size: number;
  totalPages: number;
  totalCount: number;
  status: string;
  errorMessage: string;
}
