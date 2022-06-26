import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  FormsModule } from '@angular/forms';
import { ScreenersRoutingModule } from './screeners-routing.module';
import { ScreenersComponent } from './screeners.component';


@NgModule({
  declarations: [
    ScreenersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
    ScreenersRoutingModule
  ]
})
export class ScreenersModule { }
