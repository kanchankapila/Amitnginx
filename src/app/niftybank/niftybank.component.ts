import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-niftybank',
  templateUrl: './niftybank.component.html',
  styleUrls: ['./niftybank.component.scss']
})
export class NiftybankComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
