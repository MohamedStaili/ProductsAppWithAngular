import { Component } from '@angular/core';
import {AppStateService} from '../services/app-state.service';
import {LoadingService} from '../services/loading.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentRoute: any;
  actions: Array<any>= [
    {title: 'Home', route: '/admin/home', icon: 'house-door-fill'},
    {title: 'Products', route: '/admin/products', icon: 'cart-fill'},
    {title: 'New Product', route: '/admin/new-product', icon: 'cart-plus-fill'},
  ];
  constructor(public stateService: AppStateService,public loadingService: LoadingService, private router: Router) {
  }
  setCurrentAction(action: any) {
    this.currentRoute = action;
  }

  logout() {
    this.stateService.authState= {
      isAuthenticated: false,
      username:"",
      roles:[],
      token: ""
    };
    this.router.navigateByUrl('/login');

  }

  login() {
    this.router.navigateByUrl('/login');
  }
}
