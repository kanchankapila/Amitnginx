import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendModule } from 'ngx-trend';

import { DatePipe } from '@angular/common';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { SidebarModule } from 'primeng/sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgChartsModule } from 'ng2-charts';
    
import { HttpClientModule, HttpErrorResponse ,HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ButtonModule } from 'primeng/button';
import { NgxEchartsModule } from 'ngx-echarts';
import { StockChartAllModule, ChartAnnotationService, RangeNavigatorAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService, DateTimeService,PeriodSelectorService,RangeTooltipService} from '@syncfusion/ej2-angular-charts';





@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    CommonModule,
    
    ShareRoutingModule,
    NgbModule,
    //ChartModule,
    MatCardModule,
    DialogModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule, 
    FlexLayoutModule,
    MatButtonModule,
   
    ButtonModule,
    HttpClientModule,
    SidebarModule,
    TrendModule,
    TabViewModule,
    NgChartsModule,
    StockChartAllModule,
    RangeNavigatorAllModule,
    ChartAllModule,
    HttpClientJsonpModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    NgApexchartsModule
   
  ],
  schemas: [],
  providers: [DatePipe, CategoryService, LineSeriesService, DateTimeService,PeriodSelectorService,RangeTooltipService]
})
export class ShareModule { }
