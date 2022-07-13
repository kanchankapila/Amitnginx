import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';


const routes : Routes = [
  { path: '', component: Sidebar1Component },
  { path: '', component: NavbarComponent }
]

@NgModule({
  declarations: [Sidebar1Component,NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    CommonModule,
    NgbModule,
    TabViewModule,
    MDBBootstrapModule,
    NgChartsModule,
    HttpClientModule,
    ChartModule,
    ButtonModule,
    CardModule,
    //Sidebar1Module,
    MatButtonModule,
   // OwlClockModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
  exports:[Sidebar1Component,NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[]
  
})
export class SharedModule { }
