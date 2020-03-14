import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import {ActivatedRoute} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ClothesComponent } from './clothes/clothes.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { WatchesComponent } from './watches/watches.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { NecklaseComponent } from './necklase/necklase.component';
import { RingsComponent } from './rings/rings.component';
import { BagsComponent } from './bags/bags.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { Subcategory2Component } from './subcategory2/subcategory2.component';
import { Subcategory3Component } from './subcategory3/subcategory3.component';
import { Subcategory4Component } from './subcategory4/subcategory4.component';

import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { Product8Component } from './product8/product8.component';
import { Product1Component } from './product1/product1.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
    ContactComponent,
    ClothesComponent,
    GroceriesComponent,
    WatchesComponent,
    MobilesComponent,
    TvComponent,
    VegetablesComponent,
    FruitsComponent,
    NecklaseComponent,
    RingsComponent,
    BagsComponent,
    CartComponent,
    CheckoutComponent,
    AddCategoryComponent,
    SellerSignupComponent,
    OrderComponent,
    PaymentComponent,
    SubcategoriesComponent,
    Subcategory2Component,
    Subcategory3Component,
    Subcategory4Component,
    AddproductComponent,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    Product7Component,
    Product8Component,
    Product1Component
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
