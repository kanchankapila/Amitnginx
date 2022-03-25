import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnRComponent } from './sn-r.component';
import { Routes, RouterModule } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: SnRComponent },
  
];
@NgModule({
  declarations: [SnRComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SnRModule { }
