import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockComponent } from './stock.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
//import { ChartModule } from 'primeng/chart';
//import { PeriodSelector } from '@syncfusion/ej2-angular-charts';
//import { ChartModule } from '@syncfusion/ej2-angular-charts';
//import { ChartAllModule, RangeNavigatorAllModule} from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService,ColumnSeriesService, CategoryService} from '@syncfusion/ej2-angular-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, PeriodSelectorService} from '@syncfusion/ej2-angular-charts';
// import { Browser } from '@syncfusion/ej2-base';
const routes: Routes = [
  
  { path: '', component: StockComponent },
];

@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    ChartModule,
    NgbModule,
    MatCardModule,
    ChartModule,
    RangeNavigatorModule,
    StockChartAllModule,
    ChartAllModule,
    
    FlexLayoutModule,
    MatButtonModule,
    ChartAllModule, 
    NgbModule,
    TabViewModule,
    NgApexchartsModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CandleSeriesService, ColumnSeriesService, CategoryService, AreaSeriesService, DateTimeService, PeriodSelectorService],
  exports: [RouterModule]
})
export class StockModule { }
