import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsDetailsPage } from './regions-details.page';

const routes: Routes = [
  {
    path: '',
    component: RegionsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsDetailsPageRoutingModule {}
