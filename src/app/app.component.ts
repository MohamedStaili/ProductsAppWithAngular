import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerceModule';
  constructor() {
  }

  // goHome() {
  //   this.currentRoute="home";
  //   this.router.navigateByUrl('/home');
  // }
  //
  // goProducts() {
  //   this.currentRoute="products";
  //   this.router.navigateByUrl('/products');
  // }
  // goNewProduct() {
  //   this.currentRoute="new-product";
  //   this.router.navigateByUrl('/new-product');
  // }

}
