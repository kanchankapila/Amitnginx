import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { SidebarModule } from 'primeng/sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgChartsModule } from 'ng2-charts';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ButtonModule } from 'primeng/button';
import { NgxEchartsModule } from 'ngx-echarts';





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
    FlexLayoutModule,
    MatButtonModule,
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    SidebarModule,
    TabViewModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    NgApexchartsModule
   
  ],
  schemas: [],
  providers: [DatePipe]
})
export class ShareModule { }
