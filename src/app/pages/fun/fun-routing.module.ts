import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunPage } from './fun.page';

const routes: Routes = [
  {
    path: '',
    component: FunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunPageRoutingModule {}
