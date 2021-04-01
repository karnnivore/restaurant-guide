import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TonyPizzaPage } from './tony-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: TonyPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TonyPizzaPageRoutingModule {}
