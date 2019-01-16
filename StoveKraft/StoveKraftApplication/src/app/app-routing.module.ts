import { BillingSummaryPageComponent } from './billing-summary-page/billing-summary-page.component';
import { CustomizePageComponent } from './customize-page/customize-page.component';
import { BachelorsComponent } from './home-page/cook-ware/bachelors/bachelors.component';

import { NgModule, Component } from '@angular/core';
import { IndexPageComponent } from './index-page/index-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CookWareComponent } from './home-page/cook-ware/cook-ware.component';
import { KitchenSetsComponent } from './home-page/cook-ware/kitchen-sets/kitchen-sets.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { AppComponent } from './app.component';
import { CookWeekendsComponent } from './home-page/cook-ware/bachelors/cook-weekends/cook-weekends.component';

const routes: Routes = [
  { path: 'cookware', component: CookWareComponent },
  { path: 'kitchenset', component: KitchenSetsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'index', component: IndexPageComponent },
  { path: 'bachelor', component: BachelorsComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'summary', component: BillingSummaryPageComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'customize', component: CustomizePageComponent },
  { path: 'ticket', component: TicketPageComponent },
  { path: 'bachelor', component: BachelorsComponent },
  { path: 'cookonweekend', component: CookWeekendsComponent },
  { path: 'compareproducts', component: CompareProductsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
