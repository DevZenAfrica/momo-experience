import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewServicePage } from './preview-service.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewServicePageRoutingModule {}
