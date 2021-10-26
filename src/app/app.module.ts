import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { CartToCartMapPipe } from './pipes/cart-to-cart-map.pipe';
import { ItemIdToNamePipe } from './pipes/item-id-to-name.pipe';
import { routesComponent } from './app-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DiscountPipe,
    CartToCartMapPipe,
    ItemIdToNamePipe,
    routesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DiscountPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
