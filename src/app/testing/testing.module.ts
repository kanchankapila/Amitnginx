import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import 'chartjs-adapter-date-fns';
import 'chartjs-chart-financial';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { enUS } from 'date-fns/locale';
import { add, parseISO } from 'date-fns';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';
import { NgChartsModule } from 'ng2-charts';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    NgChartsModule
  ],
  schemas: [],
})
export class TestingModule { }
