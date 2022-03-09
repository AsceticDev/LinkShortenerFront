import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunPageRoutingModule } from './fun-routing.module';

import { FunPage } from './fun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunPageRoutingModule
  ],
  declarations: [FunPage]
})
export class FunPageModule {}
