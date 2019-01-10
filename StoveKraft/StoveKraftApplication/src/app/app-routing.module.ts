
import { NgModule } from '@angular/core';
import { IndexPageComponent } from './index-page/index-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CookWareComponent } from './home-page/cook-ware/cook-ware.component';
import { KitchenSetsComponent } from './home-page/cook-ware/kitchen-sets/kitchen-sets.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'cookware', component: CookWareComponent },
  { path: 'kitchenset', component: KitchenSetsComponent },
  { path: 'home',        component: HomePageComponent },
  { path: 'index', component: IndexPageComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
