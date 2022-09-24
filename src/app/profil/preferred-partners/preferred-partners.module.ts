import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferredPartnersPageRoutingModule } from './preferred-partners-routing.module';

import { PreferredPartnersPage } from './preferred-partners.page';
import {MiniaturePartnerComponent} from "../../shared/miniature-partner/miniature-partner.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferredPartnersPageRoutingModule
  ],
  exports: [
    MiniaturePartnerComponent
  ],
  declarations: [PreferredPartnersPage, MiniaturePartnerComponent]
})
export class PreferredPartnersPageModule {}
