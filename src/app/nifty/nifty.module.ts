import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NiftyRoutingModule } from './nifty-routing.module';
import { NiftyComponent } from './nifty.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseChartDirective } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule } from 'primeng/chart';
import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs'
import axios from 'axios';
import {from} from 'rxjs';

@NgModule({
  declarations: [
    NiftyComponent
  ],
  imports: [
    CommonModule,
    NiftyRoutingModule,
    FlexLayoutModule,
    NgbModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    NgChartsModule,
    TabViewModule,
    ChartModule

  ]
})
export class NiftyModule { }
