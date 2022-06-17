import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenersRoutingModule } from './screeners-routing.module';
import { ScreenersComponent } from './screeners.component';


@NgModule({
  declarations: [
    ScreenersComponent
  ],
  imports: [
    CommonModule,
    ScreenersRoutingModule
  ]
})
export class ScreenersModule { }
