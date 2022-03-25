import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiftybankComponent } from './niftybank.component';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const routes: Routes = [
  { path: '', component: NiftybankComponent },
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,
    

    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NiftybankModule { }
