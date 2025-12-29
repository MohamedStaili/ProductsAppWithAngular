import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) { }

  searchProducts(keyword: string="",page: number=1, size: number=3) {
    return this.httpClient.get(`http://localhost:8085/products`,{
      params: {name_like:keyword, _page: page, _limit: size},
      observe: "response"
    });
  }

  deleteProduct(product:any) {
    return this.httpClient.delete("http://localhost:8085/products/"+product.id);
  }

  saveNewProduct(product: ProductModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>("http://localhost:8085/products", product);
  }
  // searchProducts(keyword: string, page: number = 1, size: number = 3) {
  //   return this.httpClient.get("http://localhost:8085/products",{
  //     params: {name_like: keyword, _page: page, _limit: size},
  //     observe: "response"
  //   });
  // }
  getProductById(productId: number): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>("http://localhost:8085/products/"+productId);

  }

  updateProduct(product: ProductModel) {
    return this.httpClient.put<ProductModel>("http://localhost:8085/products/"+product.id, product);
  }
}
