import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './pages/user/user.component';
import { ECommerceShopComponent } from './pages/e-commerce-shop/e-commerce-shop.component';
import { ECommerceDetailComponent } from './pages/e-commerce-detail/e-commerce-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent  },
  { path: 'shop', component: ECommerceShopComponent   },
  { path: 'detail/:id', component: ECommerceDetailComponent  },
  // { path: 'edit-book/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
