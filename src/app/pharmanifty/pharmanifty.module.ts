import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartAllModule, AccumulationChartAllModule, DateTimeService,DateTimeCategoryService,RangeNavigatorAllModule,MultiColoredLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { PharmaniftyRoutingModule } from './pharmanifty-routing.module';
import { PharmaniftyComponent } from './pharmanifty.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseChartDirective } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    PharmaniftyComponent
  ],
  imports: [
    CommonModule,
    PharmaniftyRoutingModule,
    FlexLayoutModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    NgChartsModule,
    TabViewModule,
    ChartModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule

  ],
  providers:[MultiColoredLineSeriesService,DateTimeCategoryService,DateTimeService]
})
export class PharmaniftyModule { }
