import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    NgChartsModule,
    NgApexchartsModule,
   
   

  ],
  providers: [ ],
})
export class HomepageModule { }
