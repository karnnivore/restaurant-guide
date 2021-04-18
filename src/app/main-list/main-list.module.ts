import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainListPageRoutingModule } from './main-list-routing.module';

import { MainListPage } from './main-list.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainListPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MainListPage]
})
export class MainListPageModule {}
