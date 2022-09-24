import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewPartnerPageRoutingModule } from './preview-partner-routing.module';

import { PreviewPartnerPage } from './preview-partner.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviewPartnerPageRoutingModule
    ],
    exports: [],
    declarations: [PreviewPartnerPage]
})
export class PreviewPartnerPageModule {}
