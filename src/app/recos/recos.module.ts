import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecosComponent } from './recos.component';
import { Routes, RouterModule } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: RecosComponent },
  
];
@NgModule({
  declarations: [RecosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RecosModule { }
