import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewPartnerPageRoutingModule } from './preview-partner-routing.module';

import { PreviewPartnerPage } from './preview-partner.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviewPartnerPageRoutingModule,
        HomePageModule
    ],
    exports: [],
    declarations: [PreviewPartnerPage]
})
export class PreviewPartnerPageModule {}
