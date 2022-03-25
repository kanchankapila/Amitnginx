import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreemapsComponent } from './treemaps.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: TreemapsComponent },
  
];
@NgModule({
  declarations: [TreemapsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TreemapsModule { }
