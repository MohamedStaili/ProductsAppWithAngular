import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../services/product-service.service';
import {ProductModel} from '../../model/product.model';
import {Router} from '@angular/router';
import {AppStateService} from '../services/app-state.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductServiceService,
              private router: Router,
              public stateService: AppStateService) {
  }
    ngOnInit(): void {
      this.searchProducts();
    }

  // get pages(): number[] {
  //   return Array.from({ length: this.totalPages }, (_, i) => i+1);
  // }
  handleDelete(product: ProductModel) {
    console.log(product);
    if(confirm("etes vous sure?")){
      this.productService.deleteProduct(product).subscribe({
        next: ()=> {
          //this.getAllProducts(); on est pas besoin de recharger toutes les données,
          // c'est parmi les points fort de csr par rapport à ssr
          let products= this.stateService.appState.products.filter(p => p.id !== product.id);
          let totalCount=this.stateService.appState.totalCount--;
          this.stateService.setAppState({
            products: products,
            totalCount:totalCount,
          })
        },
        error: (err)=> {
          console.log(err);
        }
      })
    }

  }

  searchProducts(){
    this.stateService.setAppState({
      status: "LOADING",
    })
    this.productService.searchProducts(this.stateService.appState.keyword
      ,this.stateService.appState.currentPage,
      this.stateService.appState.size).subscribe({
      next: data => {
        let products = data.body;
        let totalCount= Number(data.headers.get('X-Total-Count') ?? 0);
        let totalPages = Math.ceil(totalCount / this.stateService.appState.size);
        this.stateService.setAppState({
          products: products,
          totalCount: totalCount,
          totalPages: totalPages,
          status: "LOADED",
        })
      },
      error: err => {
        this.stateService.setAppState({
          status: "ERROR",
          errorMessage: err
        })
      }
    })
  }
    //une deuxieme methode
  //   this.products$= this.productService.getAllProducts().pipe(
  //     catchError(err => {
  //       console.log(err);
  //       return of([]);
  //     })
  //   );

  goPage(page: number) {
    this.stateService.appState.currentPage = page;
    this.searchProducts();

  }

  handleUpdate(product: ProductModel) {
    this.router.navigateByUrl("edit-product/" + product.id);
  }
}
