import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionsDetailsPageRoutingModule } from './regions-details-routing.module';

import { RegionsDetailsPage } from './regions-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionsDetailsPageRoutingModule
  ],
  declarations: [RegionsDetailsPage]
})
export class RegionsDetailsPageModule {}
