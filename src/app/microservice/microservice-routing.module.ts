import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroservicePage } from './microservice.page';

const routes: Routes = [
  {
    path: '',
    component: MicroservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroservicePageRoutingModule {}
