import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenersComponent } from './screeners.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule  } from 'ng2-charts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: ScreenersComponent },
  
];
@NgModule({
  declarations: [ScreenersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []

})



export class ScreenersModule { }
