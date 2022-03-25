import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuturesComponent } from './futures.component';
import { Routes, RouterModule } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: FuturesComponent },
  
];
@NgModule({
  declarations: [FuturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FuturesModule { }
