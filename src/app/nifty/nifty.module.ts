import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiftyRoutingModule } from './nifty-routing.module';
import { NiftyComponent } from './nifty.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule } from 'primeng/chart';

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
    MatButtonModule,
    ChartsModule,
    TabViewModule,
    ChartModule

  ]
})
export class NiftyModule { }
