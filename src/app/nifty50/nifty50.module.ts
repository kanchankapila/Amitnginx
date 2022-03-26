import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Nifty50Component } from './nifty50.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule } from 'primeng/chart';

const routes: Routes = [
  
  { path: '', component: Nifty50Component },
];

@NgModule({
  declarations: [Nifty50Component],
  imports: [
    CommonModule,
    ChartModule,
    NgbModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    NgbModule,
    TabViewModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[]

})
export class Nifty50Module { }
