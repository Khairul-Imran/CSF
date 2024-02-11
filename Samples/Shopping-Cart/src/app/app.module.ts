import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/Shopping-Cart/shopping-cart.component';
import { InventoryComponent } from './components/Inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
