import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewHowToPage } from './preview-how-to.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewHowToPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewHowToPageRoutingModule {}
