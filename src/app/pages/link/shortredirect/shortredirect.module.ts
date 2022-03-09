import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortredirectPageRoutingModule } from './shortredirect-routing.module';

import { ShortredirectPage } from './shortredirect.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortredirectPageRoutingModule,
    SharedModule
  ],
  declarations: [ShortredirectPage]
})
export class ShortredirectPageModule {}
