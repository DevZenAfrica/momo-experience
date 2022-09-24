import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {PrintFaqComponent} from "../shared/print-faq/print-faq.component";
import {MiniatureFaqComponent} from "../shared/miniature-faq/miniature-faq.component";
import {ChooseCountryComponent} from "../shared/choose-country/choose-country.component";
import {PrintNewsComponent} from "../shared/print-news/print-news.component";
import {MiniatureNewsComponent} from "../shared/miniature-news/miniature-news.component";
import {HeaderComponent} from '../shared/header/header.component';
import {PrintTopMicroServiceComponent} from '../shared/print-top-micro-service/print-top-micro-service.component';
import {MiniatureMicroServiceComponent} from '../shared/miniature-micro-service/miniature-micro-service.component';
import {PrintTopPoolsComponent} from "../shared/print-top-pools/print-top-pools.component";
import {
  PrintGroupMicroServicesComponent
} from '../shared/print-group-micro-services/print-group-micro-services.component';
import {MiniaturePollComponent} from "../shared/miniature-poll/miniature-poll.component";
import {MiniatureGroupPartnerComponent} from "../shared/miniature-group-partner/miniature-group-partner.component";
import {MiniatureFeesComponent} from "../shared/miniature-fees/miniature-fees.component";
import {PrintHowToComponent} from "../shared/print-how-to/print-how-to.component";
import {MiniatureHowToComponent} from "../shared/miniature-how-to/miniature-how-to.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    exports: [
        ChooseCountryComponent,
        HeaderComponent,
        MiniatureMicroServiceComponent,
        PrintGroupMicroServicesComponent,
        MiniatureGroupPartnerComponent,
        MiniatureFeesComponent,
        MiniatureHowToComponent
    ],
    declarations: [HomePage, PrintFaqComponent, MiniatureFaqComponent, ChooseCountryComponent, PrintNewsComponent, MiniatureNewsComponent, HeaderComponent, MiniatureMicroServiceComponent, PrintTopMicroServiceComponent, PrintTopPoolsComponent, PrintGroupMicroServicesComponent, MiniaturePollComponent, MiniatureGroupPartnerComponent, MiniatureFeesComponent, PrintHowToComponent, MiniatureHowToComponent]
})
export class HomePageModule {}
