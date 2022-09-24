import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewHowToPageRoutingModule } from './preview-how-to-routing.module';

import { PreviewHowToPage } from './preview-how-to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewHowToPageRoutingModule
  ],
  declarations: [PreviewHowToPage]
})
export class PreviewHowToPageModule {}
