import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component'
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from 'primeng/chart';


  const routes: Routes = [
    { path: '', component: DashboardComponent },
  ];
  
  


  @NgModule({
    declarations: [DashboardComponent],
    imports: [
      CommonModule,
      ChartModule,
      MatCardModule,
      
      ChartsModule,
      NgbModule,
      RouterModule.forChild(routes),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[]
  
  })
  export class DashboardModule { }