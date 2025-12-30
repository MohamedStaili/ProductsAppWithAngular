import { Component } from '@angular/core';
import {AppStateService} from '../services/app-state.service';
import {LoadingService} from '../services/loading.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentRoute: any;
  actions: Array<any>= [
    {title: 'Home', route: '/home', icon: 'house-door-fill'},
    {title: 'Products', route: '/products', icon: 'cart-fill'},
    {title: 'New Product', route: '/new-product', icon: 'cart-plus-fill'},
  ];
  constructor(public stateService: AppStateService,public loadingService: LoadingService) {
  }
  setCurrentAction(action: any) {
    this.currentRoute = action;
  }

}
