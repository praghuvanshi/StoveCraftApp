import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CookWareComponent } from './home-page/cook-ware/cook-ware.component';
import { KitchenAppliancesComponent } from './home-page/kitchen-appliances/kitchen-appliances.component';
import { KitchenSetsComponent } from './home-page/cook-ware/kitchen-sets/kitchen-sets.component';
import { BachelorsComponent } from './home-page/cook-ware/bachelors/bachelors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CookWareComponent,
    KitchenAppliancesComponent,
    KitchenSetsComponent,
    BachelorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
