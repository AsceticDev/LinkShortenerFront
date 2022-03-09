import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortredirectPage } from './shortredirect.page';

const routes: Routes = [
  {
    path: '',
    component: ShortredirectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortredirectPageRoutingModule {}
