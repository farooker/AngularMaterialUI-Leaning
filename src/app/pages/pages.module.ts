import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ECommerceShopComponent } from './e-commerce-shop/e-commerce-shop.component';
import { ECommerceDetailComponent } from './e-commerce-detail/e-commerce-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    UserComponent,
    ECommerceShopComponent,
    ECommerceDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialModule
  ]
})
export class PagesModule { }
