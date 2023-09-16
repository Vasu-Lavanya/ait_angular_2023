import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { CreateUserComponent } from './sample-module/create-user/create-user.component';
import { UpdateUserComponent } from './sample-module/update-user/update-user.component';
import { LoggerComponent } from './logger/logger.component';
import { NotificationsComponent } from './home/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    WishListComponent,
    CartComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoggerComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
