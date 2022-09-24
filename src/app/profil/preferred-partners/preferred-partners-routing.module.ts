import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferredPartnersPage } from './preferred-partners.page';

const routes: Routes = [
  {
    path: '',
    component: PreferredPartnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferredPartnersPageRoutingModule {}
