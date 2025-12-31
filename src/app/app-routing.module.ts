import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {LoginComponent} from './login/login.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {authenticationGuard} from './guards/authentication.guard';
import {autorizationGuard} from './guards/autorization.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

const routes: Routes = [
  {path: "admin", component: AdminTemplateComponent,canActivate: [authenticationGuard], children: [
      {path: 'products', component: ProductsComponent},
      {path: "new-product", canActivate: [autorizationGuard], data: {requiredRole: "ADMIN"}, component: NewProductComponent},
      {path: "edit-product/:id", canActivate: [autorizationGuard], data: {requiredRole: "ADMIN"}, component: EditProductComponent},
      {path: 'home', component: HomeComponent},
      {path: "not-authorized", component: NotAuthorizedComponent},
    ]},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "login", pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
