import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiftyRoutingModule } from './nifty-routing.module';
import { NiftyComponent } from './nifty.component';


@NgModule({
  declarations: [
    NiftyComponent
  ],
  imports: [
    CommonModule,
    NiftyRoutingModule
  ]
})
export class NiftyModule { }
