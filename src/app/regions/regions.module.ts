import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { IonicModule } from '@ionic/angular';

import { RegionsPageRoutingModule } from './regions-routing.module';

import { RegionsPage } from './regions.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    RegionsPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [RegionsPage]

})
export class RegionsPageModule {}
