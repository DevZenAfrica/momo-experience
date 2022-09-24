import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewServicePageRoutingModule } from './preview-service-routing.module';

import { PreviewServicePage } from './preview-service.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviewServicePageRoutingModule,
        HomePageModule
    ],
  declarations: [PreviewServicePage]
})
export class PreviewServicePageModule {}
