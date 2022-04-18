import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StockRoutingModule } from './stock-routing.module';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockComponent } from './stock.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    NgbModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    NgModule,
    HttpClientModule,
    TabViewModule,
    ChartsModule,
    StockRoutingModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  
})
export class StockModule { }
