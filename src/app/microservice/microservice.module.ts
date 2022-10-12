import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicroservicePageRoutingModule } from './microservice-routing.module';

import { MicroservicePage } from './microservice.page';
import {HomePageModule} from '../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MicroservicePageRoutingModule,
        HomePageModule
    ],
  declarations: [MicroservicePage]
})
export class MicroservicePageModule {}
