import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TonyPizzaPageRoutingModule } from './tony-pizza-routing.module';

import { TonyPizzaPage } from './tony-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TonyPizzaPageRoutingModule
  ],
  declarations: [TonyPizzaPage]
})
export class TonyPizzaPageModule {}
