import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import {HomePageModule} from "../home/home.module";
import {PrintCategoryPartnerComponent} from "../shared/print-category-partner/print-category-partner.component";
import {MapPartnerComponent} from "../shared/map-partner/map-partner.component";
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,
    HomePageModule,
    GoogleMapsModule
  ],
  declarations: [ShopPage, PrintCategoryPartnerComponent, MapPartnerComponent]
})
export class ShopPageModule {}
