import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorsComponent } from './errors/errors.component';
import {appHttpInterceptor} from './app-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    DashboardComponent,
    NavbarComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([appHttpInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
