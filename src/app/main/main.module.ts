import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgChartsModule  } from 'ng2-charts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: MainComponent },
  
];
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[]
})
export class MainModule { }
