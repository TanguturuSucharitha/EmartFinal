import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';

import { ContactComponent } from './contact/contact.component';
import { ClothesComponent } from './clothes/clothes.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { WatchesComponent } from './watches/watches.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { NecklaseComponent } from './necklase/necklase.component';
import { RingsComponent } from './rings/rings.component';
import { BagsComponent } from './bags/bags.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
    {path:'newuser',component:RegistrationComponent},
    {path:'existinguser',component:LoginComponent},
    {path:'cat',component:CategoryComponent},
    {path:'contact',component:ContactComponent},
    {path: 'prd',component:ProductComponent},
    {path:'cat',component:CategoryComponent},
    {path:'subcat',component:SubcategoriesComponent},
    {path:'subcat2',component:Subcategory2Component},
    {path:'subcat3',component:Subcategory3Component},
    {path:'subcat4',component:Subcategory4Component},
    {path:'adp',component:AddproductComponent},
    {path:'prdt1',component:Product1Component},
    {path:'prdt2',component:Product2Component},
    {path:'prdt3',component:Product3Component},
    {path:'prdt4',component:Product4Component},
    {path:'prdt5',component:Product5Component},
    {path:'prdt6',component:Product6Component},
    {path:'prdt7',component:Product7Component},
    {path:'prdt8',component:Product8Component},
    {path:'clth',component:ClothesComponent},
    {path:'gro',component:GroceriesComponent},
    {path:'watch',component:WatchesComponent},
    {path:'mb',component:MobilesComponent},
    {path:'tv',component:TvComponent},
    {path:'fru',component:FruitsComponent},
    {path:'veg',component:VegetablesComponent},
    {path:'ne',component:NecklaseComponent},
    {path:'ri',component:RingsComponent},
    {path:'ba',component:BagsComponent},
    {path:'cart',component:CartComponent},
    {path:'check',component:CheckoutComponent},
    {path:'adc',component:AddCategoryComponent},
    {path:'sup',component:SellerSignupComponent},
    {path:'pay',component:PaymentComponent},
    {path:'con',component:ContactComponent},
    {path:'order',component:OrderComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
