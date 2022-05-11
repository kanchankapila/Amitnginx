import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import {CookieService} from 'ngx-cookie-service';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import 'chartjs-adapter-date-fns';
import 'chartjs-chart-financial';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}


@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    NgbModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    TabViewModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
   
  ],
  schemas: [],
  providers: [CookieService]
})
export class ShareModule { }
