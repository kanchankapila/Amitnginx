import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import jsonp from 'jsonp-modernized';
import { DialogComponent, ButtonPropsModel } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { DataapiService } from '../../dataapi.service'
import { PeriodsModel,ITooltipRenderEventArgs, IStockChartEventArgs, ChartTheme,IAxisLabelRenderEventArgs,ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { PrimeNGConfig } from 'primeng/api';
import { DatePipe } from '@angular/common'
import { Injectable } from '@angular/core';
import axios from "axios";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as  stocks from '../lists/stocklist'
import * as bqstock from '../lists/bqlist'
import * as etsector from '../lists/etsectorlist'
import * as etindex from '../lists/etindexlist'
import * as mcindex from '../lists/mcsectorlist'
import { Chart, ChartOptions, ChartConfiguration, ChartType } from 'chart.js';
import {  Observable } from 'rxjs';
import { map } from'rxjs/operators'
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexPlotOptions, ApexDataLabels, ApexStroke } from "ng-apexcharts";
import { resourceLimits } from 'worker_threads';
export type ChartOptions1 = { series: ApexAxisChartSeries; chart: ApexChart; xaxis: ApexXAxis; yaxis: ApexYAxis; plotOptions: ApexPlotOptions; dataLabels: ApexDataLabels; stroke: ApexStroke; };
export interface stockcrossover { text1: any; text2: any; text3: any; }
export interface stockindicatorstile { text1: string; text2: string; text3: string; text4: string; }
export interface stockDatatiles { x: number; open: any; high: any; low: any; close: any; volume: any; }


export interface mcaptile { text1: string; text2: string; text3: string; }
export interface nptile { text1: string; text2: string; text3: string; }
export interface newscardtile { text1: string; text2: string; text3: string; text4: string; text5: string; }
export interface pbvtile { text1: string; text2: string; text3: string; }
export interface pegttmtile { text1: string; text2: string; text3: string; }
export interface pettmtile { text1: string; text2: string; text3: string; }
export interface scoretile { text: string; text1: string; } export interface scorettile { text: string; text1: string; }
export interface techscoretile { text: string; text1: string; text2: string; }
export interface vscoretile { text: string; text1: string; text2: string; }
export interface fscoretile { text: string; text1: string; text2: string; }
export interface qscoretile { text: string; text1: string; text2: string; }
export interface dscoretile { text1: any; text2: any; } export interface volscoretile { text1: any; text2: any; } export interface mscoretile { text1: any; text2: any; } export interface srtile { text1: string; text2: string; text3: string; }
export interface beta1tile { text1: string; text2: string; text3: string; }
export interface ema26tile { text1: string; text2: string; text3: string; }
export interface ema50tile { text1: string; text2: string; text3: string; }
export interface ema100tile { text1: string; text2: string; text3: string; }
export interface ema200tile { text1: string; text2: string; text3: string; }
export interface macd1tile { text1: string; text2: string; text3: string; }
export interface macdtile { text1: string; text2: string; text3: string; } export interface macdstile { text1: string; text2: string; text3: string; } export interface mfitile { text1: string; text2: string; text3: string; }
export interface rsitile { text1: string; text2: string; text3: string; }
export interface rsi1tile { text1: string; text2: string; text3: string; } export interface sma30tile { text1: string; text2: string; text3: string; } export interface sma50tile { text1: string; text2: string; text3: string; } export interface sma100tile { text1: string; text2: string; text3: string; } export interface sma200tile { text1: string; text2: string; text3: string; } export interface yr1rtrntile { text1: string; text2: string; text3: string; } export interface rtrn1yvsnftytile { text1: string; text2: string; text3: string; }
export interface positivetile { text1: string; text2: string; text3: string; } export interface negativetile { text1: string; text2: string; text3: string; } export interface neutraltile { text1: string; text2: string; text3: string; } export interface stockematile { text1: string; text2: string; text3: string; text4: string; text5: string; text6: string; text7: string; }
export interface stocksmatile { text1: string; text2: string; text3: string; text4: string; text5: string; text6: string; text7: string; }
export interface stocksentimentstiles { text1: string; text2: string; }
export interface stockhcdatatile { x: number; y: number; }
export interface stockcrossovertile { text1: any; text2: any; text3: any; text4: any; }
export interface stockcrossoverwtile { text1: any; text2: any; text3: any; text4: any; }
export interface stockcrossovermtile { text1: any; text2: any; text3: any; text4: any; }
export interface stockohlctile { x: number; y: [any]; }
export interface stockohlc1yrtile { x: any; open: number,high:number,low:number,close:number,volume:number; }
export interface stockohlc1dtile { x: any; open: number,high:number,low:number,close:number,volume:number; }
export interface stockohlcvolumetile { x: any; y: number; }
export interface stockohlc1wtile { c: number; o: number; h: number; l: number; x: number; }
export interface etstockohlctodaytile { c: number; o: number; h: number; l: number; x: number; }
export interface brokerrecodowngradetile { text1: string; text2: string; text3: string; }
export interface brokerrecoupgradetile { text1: string; text2: string; text3: string; }
export interface brokertargettile { text1: string; text2: string; text3: string; }
export interface ema_26tile { text1: string; text2: string; text3: string; text4: string; }
export interface ema_50tile { text1: string; text2: string; text3: string; text4: string; }
export interface ema_100tile { text1: string; text2: string; text3: string; text4: string; }
export interface ema_200tile { text1: string; text2: string; text3: string; text4: string; }
export interface sma_30tile { text1: string; text2: string; text3: string; text4: string; }
export interface sma_50tile { text1: string; text2: string; text3: string; text4: string; }
export interface sma_100tile { text1: string; text2: string; text3: string; text4: string; }
export interface sma_200tile { text1: string; text2: string; text3: string; text4: string; }
export interface macd1tile { text1: string; text2: string; text3: string; text4: string; }
export interface macdsignal1tile { text1: string; text2: string; text3: string; text4: string; }
export interface rsi1tile { text1: string; text2: string; text3: string; text4: string; }
export interface newscardtile { text1: string; text2: string; text3: string; text4: string; text5: string; }
export interface mfi1tile { text1: string; text2: string; text3: string; text4: string; }
export interface brokertargetdowngradetile { text1: string; text2: string; text3: string; }
export interface brokertargetupgradetile { text1: string; text2: string; text3: string; }
export interface divscoretile { text1: string; text2: string; }
export interface rbsscoretile { text1: string; text2: string; }
export interface kvscoretile { text1: string; text2: string; }
export interface kqscoretile { text1: string; text2: string; }
export interface omrscoretile { text1: string; text2: string; }
export interface growthscoretile { text1: string; text2: string; }
export interface healthscoretile { text1: string; text2: string; }
export interface ppscoretile { text1: string; text2: string; }
export interface sectorstockstile { text1: string; text2: string; text3: string; }
export interface stockdetailstile { text1: any; text2: any; text3: any; text4: any; }
export interface stockpcrtile { text1: any; text2: any; }
export interface maxpaintile { text1: any; text2: any; }
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
@Injectable()
export class ShareComponent implements OnInit {
  visibleSidebar5;
  @ViewChild("chart") chart: ChartComponent;
 
  // The Dialog shows within the target element.
  public targetElement;

  public chartCandleOptions: Partial<ChartOptions1>;
  public chartBarOptions: Partial<ChartOptions1>;
  public series1: Object[] = [];
  public point1: Object;
  
  public defaultDialog: DialogComponent;
  public defaultDialog1: DialogComponent;
  public defaultDialog2: DialogComponent;
  public dialogHeader: string = 'Good/Bad/Neutral';
  public dialogHeader1: string = 'Insights';
  public dialogHeader2: string = 'Stock News';
  public position2: object={ X: 10, Y: 240 };
  public dialogCloseIcon: Boolean = true;
  public dialogWidth: string = '1350px';
  public dialogHeight: string = '800px';
  public animationSettings: Object = { effect: 'Zoom' };
  public isModal: Boolean = true;
  public target: string = '.control-section';
  public target1: string = '.control-section';
  public target2: string = '.control-section';
  public showCloseIcon: Boolean = false;
  public visible: Boolean = false;
  public visible1: Boolean = false;
  public visible2: Boolean = false;

  public dlgButtonClick = (): void => {
    this.defaultDialog.hide();
    this.visible=false
  }
  
  public dialogBtnClick: EmitType<Object> = (args: any) => {
    this.visible=true
      const effects = args.target.id;
      let txt = args.target.parentElement.innerText;
      txt = (txt === 'Zoom In/Out') ? 'Zoom In or Out' : txt;
      this.defaultDialog.content = '';
      this.defaultDialog.animationSettings = { effect: effects, duration: 400 };
      this.defaultDialog.show();
  }
  public dialogBtnClick1: EmitType<Object> = (args: any) => {
    this.visible1=true
      const effects = args.target.id;
      let txt = args.target.parentElement.innerText;
      txt = (txt === 'Zoom In/Out') ? 'Zoom In or Out' : txt;
      //this.defaultDialog1.content = '';
      this.defaultDialog1.animationSettings = { effect: effects, duration: 400 };
      this.defaultDialog1.show();
  }
  public dialogBtnClick2: EmitType<Object> = (args: any) => {
    this.visible2=true
      const effects = args.target.id;
      let txt = args.target.parentElement.innerText;
      txt = (txt === 'Zoom In/Out') ? 'Zoom In or Out' : txt;
      //this.defaultDialog2.content = '';
      this.defaultDialog2.animationSettings = { effect: effects, duration: 400 };
      this.defaultDialog2.show();
  }

  
  

  constructor(private datePipe: DatePipe, private http: HttpClient, private primengConfig: PrimeNGConfig, private dataApi: DataapiService, private route: ActivatedRoute, private router: Router) { }
  public stockhcdate: Array<any> = [];
  public stockohlc: Array<any> = [];
  public stockohlc1yr: stockohlc1yrtile[] = [];
  public stockohlc1d: stockohlc1dtile[] = [];
  public stockohlcvolume: stockohlcvolumetile[] = [];
  public stockohlc1w: stockohlc1wtile[] = [];
  public etstockohlctoday: etstockohlctodaytile[] = [];
  public stockhcvalue: Array<any> = [];
  public stockdata1: Array<number> = [];
  //public stockLabels: Array<any> = [];
  public stockChartLabels: Array<number> = [];
  public stockpcrdata: Array<number> = [];
  public stockpcrtime: Array<any> = [];
  public stockvixdata: Array<number> = [];
  public stockvixtime: Array<any> = [];
  public stockData1: Array<any> = [];
  public stockOptions: any;
  public stock1wdata: Array<number> = [];
  public stock1wLabels: Array<any> = [];
  public stock1wData: Array<any> = [];
  public stock1ddata: Array<number> = [];
  public stock1dLabels: Array<any> = [];
  public stockLabels: Array<any> = [];
  public stockData: Array<any> = [];
  public stock1mdata: Array<number> = [];
  public stock1mLabels: Array<any> = [];
  public stock1mData: Array<any> = [];
  public stock3mdata: Array<number> = [];
  public stock3mLabels: Array<any> = [];
  public stock3mData: Array<any> = [];
  public stock6mdata: Array<number> = [];
  public stock6mLabels: Array<any> = [];
  public stock6mData: Array<any> = [];
  public stock1yrdata: Array<number> = [];
  public stock1yrLabels: Array<any> = [];
  public stock1yrData: Array<any> = [];
  public stockpcrData: Array<any> = [];
  public stockpcrLabels: Array<number> = [];
  public stockvixData: Array<any> = [];
  public stockvixLabels: Array<number> = [];
  public lineChartmacdwLabels: Array<any> = [];
  public lineChartmacdmLabels: Array<number> = [];;
  public lineChartDatamacdm: Array<number> = [];
  public lineChartDatasignalm: Array<number> = [];
  public lineChartDatapricemacdm: Array<number> = [];
  public lineChartDatamaday50m: Array<number> = [];
  public lineChartDatamaday200m: Array<number> = [];
  public lineChartDatamapricem: Array<number> = [];
  public lineChartDatamadate: Array<number> = [];
  public lineChartDatamaflag: Array<number> = [];
  public lineChartDatabbuband: Array<number> = [];
  public lineChartDatabblband: Array<number> = [];
  public lineChartDatabbdma20: Array<number> = [];
  public lineChartDatabbdate: Array<number> = [];
  public lineChartDatabbprice: Array<number> = [];
  public lineChartDatakst: Array<number> = [];
  public lineChartDatakstprice: Array<number> = [];
  public lineChartDatakstsignal: Array<number> = [];
  public lineChartDatakstdate: Array<number> = [];
  public lineChartDataobvdate: Array<number> = [];
  public lineChartDataobv: Array<number> = [];
  public lineChartDataobvprice: Array<number> = [];
  public lineChartDatadowdate: Array<number> = [];
  public lineChartDatadowprice: Array<number> = [];
  public lineChartDatadowscore: Array<number> = [];
  public lineChartDatadowflag: Array<number> = [];
  public lineChartDatamacdw: Array<number> = [];
  public lineChartDatagrademacdm: Array<number> = [];
  public lineChartDatasignalw: Array<number> = [];
  public lineChartDatapricemacdw: Array<number> = [];
  public lineChartDatapricersiw: Array<number> = [];
  public lineChartDatapricersim: Array<number> = [];
  public lineChartrsimLabels: Array<any> = [];
  public lineChartrsiwLabels: Array<any> = [];
  public lineChartDatarsiw: Array<number> = [];
  public lineChartDataubandw: Array<number> = [];
  public lineChartDatalbandw: Array<number> = [];
  public lineChartDatarsim: Array<number> = [];
  public lineChartDataubandm: Array<number> = [];
  public lineChartDatalbandm: Array<number> = [];
  
  
  
  public columnTooltip: boolean = false;
  public primaryXAxis: Object = { majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } };

  public primaryYAxis: Object = {
    lineStyle: { color: 'transparent' },
    majorTickLines: { color: 'transparent', width: 0 },
  };
  public crosshair: Object = {
    enable: true
  };
  public tooltipRender(args: ITooltipRenderEventArgs): void {
    if (args.text.split('<br/>')[4]) {
      let target: number = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], 10);
      let value: string = (target / 100000000).toFixed(1) + 'B';
      args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
    }
  };
  // custom code start
  public load(args: IStockChartEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.stockChart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };
  // custom code end
  

  public tooltip: object = { enable: true };
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public enable: boolean = true;
  
  public primaryXAxis1: Object = {
    valueType: 'DateTime', majorGridLines: { color: 'transparent' },
    crosshairTooltip: { enable: true }
  };

  public primaryYAxis1: Object = {
    lineStyle: { color: 'transparent' },
    majorTickLines: { color: 'transparent', width: 0 },
    crosshairTooltip: { enable: true }
  };
  public axisLabelRender(args: IAxisLabelRenderEventArgs): void {
    let text: number = parseInt(args.text, 10);
    if (args.axis.name === 'primaryYAxis1') {
      args.text = text / 100000000 + 'B';
    }
  };
  public periods: PeriodsModel[] = [
    { intervalType: 'Minutes', interval: 1, text: '1m' },
    { intervalType: 'Minutes', interval: 15, text: '15m' },
    { intervalType: 'Minutes', interval: 30, text: '30m' },
    { intervalType: 'Minutes', interval: 45, text: '45m' },
    { intervalType: 'Hours', interval: 1, text: '1H' },
    { intervalType: 'Hours', interval: 2, text: '2H' },
    { intervalType: 'Hours', interval: 4, text: '4H' },
    { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
    { intervalType: 'Auto', text: '1D' }
  ];
  public periods1: PeriodsModel[] = [
    
    { intervalType: 'Weeks', interval: 1, text: '1w' },
    { intervalType: 'Months', interval: 1, text: '1M' },
    { intervalType: 'Months', interval: 3, text: '3M', selected: true },
    { intervalType: 'Months', interval: 6, text: '6M' },
    { intervalType: 'Months', interval: 9, text: '9M' },
    { intervalType: 'Years', interval: 1, text: '1Y' },
    { intervalType: 'Auto', text: '1W' }
  ];
  public seriesType: string[] = [];
  public indicatorType: string[] = [];
  public trendlineType: string[] = [];
  public exportType: string[] = [];
  stockcrossover: stockcrossovertile[] = [];
  stockcrossoverw: stockcrossoverwtile[] = [];
  stockcrossoverm: stockcrossovermtile[] = [];
  vscore: vscoretile[] = [];
  fscore: fscoretile[] = [];
  qscore: qscoretile[] = [];
  dscore: dscoretile[] = [];
  previousclose: Array<number> = [];
  pclose:any;
  volscore: volscoretile[] = [];
  mscore: mscoretile[] = [];
  techscore: techscoretile[] = [];
  score: scoretile[] = [];
  scoret: scorettile[] = [];
  divscore: divscoretile[] = [];
  rbsscore: rbsscoretile[] = [];
  kvscore: kvscoretile[] = [];
  kqscore: kqscoretile[] = [];
  ppscore: ppscoretile[] = [];
  growthscore: growthscoretile[] = [];
  healthscore: healthscoretile[] = [];
  omrscore: omrscoretile[] = [];
  sectorstocks: sectorstockstile[] = [];
  stockpcr: stockpcrtile[] = [];
  maxpain: maxpaintile[] = [];
  newscard: newscardtile[] = [];
  hmsg: any;
  brokertarget: brokertargettile[] = [];
  brokertargetdowngrade: brokertargetdowngradetile[] = [];
  brokerrecoupgrade: brokerrecoupgradetile[] = [];
  brokerrecodowngrade: brokerrecodowngradetile[] = [];
  brokertargetupgrade: brokertargetupgradetile[] = [];
  ema_26: ema_26tile[] = [];
  ema_50: ema_50tile[] = [];
  ema_100: ema_100tile[] = [];
  ema_200: ema_200tile[] = [];
  sma_30: sma_30tile[] = [];
  sma_50: sma_50tile[] = [];
  sma_100: sma_100tile[] = [];
  sma_200: sma_200tile[] = [];
  macd1: macd1tile[] = [];
  macdsignal1: macdsignal1tile[] = [];
  rsi1: rsi1tile[] = [];
  // rsi:rsitile[] = [];
  mfi1: mfi1tile[] = [];
  // mfi:mfitile[] = [];
  nr7: any;
  basicData: any;
  weatherdata: any;
  mmdelivcomp: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  companyname: string;
  sectorid: any;
  today: any;
  datetoday: any;
  dateyearback:any

  dateyesterday: any
  date5: any
  dateday5: any
  //chart: any;
  stockindicators: stockindicatorstile[] = [];

  //stockData: stockDatatiles[] = [];
  mcap: mcaptile[] = [];
  np: nptile[] = [];
  pbv: pbvtile[] = [];
  pegttm: pegttmtile[] = [];
  pettm: pettmtile[] = [];
  sr: srtile[] = [];
  beta1: beta1tile[] = [];
  ema26: ema26tile[] = [];
  ema50: ema50tile[] = [];
  ema100: ema100tile[] = [];
  ema200: ema200tile[] = [];
  mfi: mfitile[] = [];
  rsi: rsitile[] = [];
  macd: macdtile[] = [];
  macds: macdstile[] = [];
  sma30: sma30tile[] = [];
  sma50: sma50tile[] = [];
  sma100: sma100tile[] = [];
  sma200: sma200tile[] = [];
  yr1rtrn: yr1rtrntile[] = [];
  rtrn1yvsnfty: rtrn1yvsnftytile[] = [];
  positive: positivetile[] = [];
  negative: negativetile[] = [];
  neutral: neutraltile[] = [];
  stockema: stockematile[] = [];
  stocksma: stocksmatile[] = [];
  stockdetails1: stockdetailstile[] = [];
  public data1: Object[] = [];
  public data2: Object[] = [];
  // public stockdata: Array<number> = [];
  public delivperc: Array<number> = [];
  public delivperctime: Array<number> = [];
  public volume: Array<number> = [];
  public volumetime: Array<number> = [];
  stockhcdata: stockhcdatatile[] = [];
  stocksentiments: stocksentimentstiles[] = [];
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<number> = [];
  public DelivData: Array<any> = [];
  public DelivLabels: Array<number> = [];
  public VolumeData: Array<any> = [];
  public VolumeLabels: Array<number> = [];
  public stockDatasnrr1: Array<number> = [];
  public stockDatasnrr2: Array<number> = [];
  public stockDatasnrr3: Array<number> = [];
  public stockDatasnrs1: Array<number> = [];
  public stockDatasnrs2: Array<number> = [];
  public stockDatasnrs3: Array<number> = [];
  public stockLabelssnrr1: Array<any> = [];
  public stockLabelsnrr3: Array<any> = [];
  public stockLabelssnrr2: Array<any> = [];
  public stockLabelssnrs1: Array<any> = [];
  public stockLabelssnrs2: Array<any> = [];
  public stockLabelssnrs3: Array<any> = [];
  public stockDatasnrr1w: Array<number> = [];
  public stockDatasnrr2w: Array<number> = [];
  public stockDatasnrr3w: Array<number> = [];
  public stockDatasnrs1w: Array<number> = [];
  public stockDatasnrs2w: Array<number> = [];
  public stockDatasnrs3w: Array<number> = [];
  public stockLabelssnrr1w: Array<any> = [];
  public stockLabelsnrr3w: Array<any> = [];
  public stockLabelssnrr2w: Array<any> = [];
  public stockLabelssnrs1w: Array<any> = [];
  public stockLabelssnrs2w: Array<any> = [];
  public stockLabelssnrs3w: Array<any> = [];
  public stockDatasnrr1m: Array<number> = [];
  public stockDatasnrr2m: Array<number> = [];
  public stockDatasnrr3m: Array<number> = [];
  public stockDatasnrs1m: Array<number> = [];
  public stockDatasnrs2m: Array<number> = [];
  public stockDatasnrs3m: Array<number> = [];
  public stockLabelssnrr1m: Array<any> = [];
  public stockLabelsnrr3m: Array<any> = [];
  public stockLabelssnrr2m: Array<any> = [];
  public stockLabelssnrs1m: Array<any> = [];
  public stockLabelssnrs2m: Array<any> = [];
  public stockLabelssnrs3m: Array<any> = [];
  public apexohlc = [];
  
  public apexvolume: Array<any> = [];
  public stockChartType: ChartType = 'line';
  public DelivChartType: ChartType = 'bar';
  public stockChartData1y: ChartConfiguration['data']
  public macdChartData: ChartConfiguration['data']
  public rsiChartData: ChartConfiguration['data']
  public maChartData: ChartConfiguration['data']
  public bbChartData: ChartConfiguration['data']
  public kstChartData: ChartConfiguration['data']
  public dowChartData: ChartConfiguration['data']
  public obvChartData: ChartConfiguration['data']
  public stockChartData1w: ChartConfiguration['data']
  public etstockChartData: ChartConfiguration['data']
  public stockChartOptions: ChartOptions = {
    scales: {
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  basicData3: any;
  basicOptions3: any;
  stockList: any
  etsectors: any
  etindexs: any
  stock: any
  bqstocks: any
  mcindexs: any
  eqsymbol: any
  tlid: any
  tlname: any
  bbmsg: any
  dowmsg: any
  title: string;
  kstmsg: any
  mamsg: any
  macdmsg: any
  obvmsg: any
  rsimsg: any
  stockname: any
  stockisin: any
  mcsymbol: any
  mcsymbolname: any
  stockid: any
  all_cookies: any;
  bqnames: any
  companyid: any
  todayepoch: any
  yesterday: any
  yesterdayepoch: any
  date: any
  yearback: any
  yearbackepoch: any
  firstDay: any
  lastDay: any
  monthLastDay:any
  // periods: any
  
  public lineChartType: ChartType = 'line';
  public lineChartOptions: ChartOptions = {
    scales: {
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  ngOnInit(): void {
   
    this.primengConfig.ripple = true;
    
    
    this.date = new Date();
    console.log("date=" + this.date)
    this.todayepoch = Math.floor(this.date.getTime() / 1000);
    console.log("today="+this.todayepoch)
    this.yesterday = (new Date(this.date.getFullYear(), this.date.getMonth(), new Date().getDate() - 1))
    this.yearback = (new Date(this.date.getFullYear(), this.date.getMonth(), new Date().getDate() - 365))
    this.yesterdayepoch = Math.floor(this.yesterday.getTime() / 1000);
    this.yearbackepoch= Math.floor(this.yearback.getTime()/1000);
    console.log("yesterday=" + this.yesterdayepoch)
    console.log("yearback="+this.yearbackepoch)
    this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    console.log("firstday"+this.firstDay)
    this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    console.log("lastDay"+this.lastDay)
    this.monthLastDay = Math.floor(this.lastDay.getTime()/1000);
    console.log(this.monthLastDay);
  

    this.stockList = stocks.default.Data
    this.stock = stocks.default.Data
    this.bqstocks = bqstock.default.Data
    this.etsectors = etsector.default.Data
    this.etindexs = etindex.default.Data
    this.mcindexs = mcindex.default.Data
    this.route.queryParams.subscribe(params => {
      this.eqsymbol = this.stockList.filter(i => i.isin == params.stock)[0].symbol
      this.tlid = this.stockList.filter(i => i.isin == params.stock)[0].tlid
      
      this.tlname = this.stockList.filter(i => i.isin == params.stock)[0].tlname
      this.stockname = this.stockList.filter(i => i.isin == params.stock)[0].name
      this.title = this.stockname;
      this.stockisin = this.stockList.filter(i => i.isin == params.stock)[0].isin
      this.mcsymbol = this.stockList.filter(i => i.isin == params.stock)[0].mcsymbol
      this.mcsymbolname = this.stockList.filter(i => i.isin == params.stock)[0].mcsymbol
      this.stockid = this.stockList.filter(i => i.isin == params.stock)[0].stockid
      this.bqnames = this.stockList.filter(i => i.isin == params.stock)[0].bqname
      this.companyid = this.stockList.filter(i => i.isin == params.stock)[0].companyid
    });
    
    this.gettrendlynestocks2(this.tlid)
    //this.gettrendlynestocks3(this.tlid)
    this.getshare3m(this.eqsymbol)
    this.getzerodha()
    this.getkotak()
    this.gettrendlynestocksti(this.tlid)
    this.getkotakview(this.eqsymbol)
    this.getshare1m(this.eqsymbol)
    this.getmmdata(this.stockid)
    this.getshare6m(this.eqsymbol)
    this.getshare1w(this.eqsymbol)
    this.getntstock1yr(this.eqsymbol)
    this.getmcstockohlc1yr(this.eqsymbol,this.yearbackepoch,this.todayepoch)
    this.getgnewsapi(this.bqnames, this.dateday5, this.datetoday)
   
    this.getntstockpcrdetails(this.eqsymbol)
    this.getmcstockrealtime(this.mcsymbol)
    this.getstocktoday(this.mcsymbol, this.eqsymbol)
    this.getstockmaema(this.eqsymbol)
    this.getstocksentiments(this.mcsymbol);
    this.gettrendlynestocks1(this.tlid, this.eqsymbol, this.tlname)
    //  this.getmcstocktodayohlc(this.mcsymbol)
    // this.getetsharetoday(this.eqsymbol)
    setInterval(() => { this.getstocktoday(this.mcsymbol, this.eqsymbol) }, 30000);
    //setInterval(() => { this.getetsharetoday(this.mcsymbol) }, 60000);
    setInterval(() => { this.getmcstockrealtime(this.mcsymbol) }, 3000);
    this.getntstockdetails(this.eqsymbol)
  }
  
  
 
  
 getkotakview(eqsymbol) {
    this.dataApi.getkotakview(eqsymbol).subscribe(data => {
      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
      this.divscore.push({ text1: nestedItems[0].dividendscore, text2: "Dividend" }),
        this.growthscore.push({ text1: nestedItems[0].growthscore, text2: "Growth" }),
        this.healthscore.push({ text1: nestedItems[0].healthscore, text2: "Health" }),
        this.omrscore.push({ text1: nestedItems[0].overallmarketrank, text2: "Market Rank" }),
        this.kqscore.push({ text1: nestedItems[0].qualityscore, text2: "Quality" }),
        this.rbsscore.push({ text1: nestedItems[0].rankbysector, text2: "Sector Rank" }),
        this.kvscore.push({ text1: nestedItems[0].valuescore, text2: "Value" }),
        this.ppscore.push({ text1: nestedItems[0].pastperformancescore, text2: "Past Performance" })
      this.sectorid = nestedItems[0].sectorid
      this.dataApi.getkotaksectorview(this.sectorid).subscribe(data => {
        let nestedItems = Object.keys(data).map(key => {
          return data[key];
        });
        this.sectorstocks.push({ text1: nestedItems[0].companyshortname, text2: nestedItems[0].rankbysector, text3: nestedItems[0].overallmarketrank })
        console.log(this.sectorstocks)
      });
    }, err => {
      console.log(err)
    })
  }
  getkotak() {
    this.http.get<any>('https://kayal.trendlyne.com/broker-webview/all-in-one-screener-get/kayal/?perPageCount=25&pageNumber=0&screenpk=82596&groupType=all&groupName=').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      // console.log(nestedItems) To be explored
    })
  }
  async getgnewsapi(bqnames,dateday5,datetoday) {
    try {
     
      const response = await fetch('https://newsapi.org/v2/everything?q=' + this.bqnames + '&from=' + this.dateday5 + '&to=' + this.datetoday + '&sortBy=popularity&apiKey=28bda70739cc4024ba3f30223e8c25a8', {
        method: 'GET',
        headers: {
         
        }
      });
    
      if (response.ok) {
        const result = await response.json();
       
        
      
 this.newscard.length = 0;
      for (let val in result.articles) {
        this.newscard.push({text1:result.articles[val].title,text2:result.articles[val].url,text3:result.articles[val].urlToImage,text4:result.articles[val].description,text5:result.articles[val].content})
        }
       
      }
    } catch (err) {
            console.error(err);
          }
    
     
    
       
  }  
    
   


   
  
  gettrendlynestocksti(tlid) {
    axios.get('https://trendlyne.com/mapp/v1/stock/adv-technical-analysis/' + this.tlid + '/24/')
      .then((response) => {
        let nestedItems = Object.keys((response.data)).map(key => {
          return (response.data)[key];
        });;
        console.log(nestedItems)
      });
  }
  async getmcstockrealtime(mcsymbol) {
    try {
      const response = await fetch("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/"+this.mcsymbol, {
        method: 'GET',
        headers: {
         
        }
      });
    
      if (response.ok) {
        const result = await response.json();
       
       
      this.stockdetails1.length = 0;
      this.stockdetails1.push({ text1: result.data['SC_FULLNM'], text2: result.data['pricechange'], text3: result.data['pricepercentchange'], text4: result.data['pricecurrent'] })
    
     
    }
  } catch (err) {
    console.error(err);
  }
  }
  async getmcstockohlc1yr(eqsymbol,yearbackepoch,todayepoch) {
    try {
        console.log('https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?symbol='+this.eqsymbol+'&resolution=1D&from='+this.yearbackepoch+'&to='+this.todayepoch)
      const response = await fetch('https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?symbol='+this.eqsymbol+'&resolution=1D&from='+this.yearbackepoch+'&to='+this.todayepoch, {
        method: 'GET',
        headers: {
         
        }
      });
    
      if (response.ok) {
        const result = await response.json();
        console.log(result);
       
      this.stockohlc1yr.length = 0;
      
      
        for (let val in result.c) {
          this.stockohlc1yr.push({ x: new Date((result.t[val])*1000), open: result.o[val], high: result.h[val], low: result.l[val], close: result.c[val], volume: result.v[val] })
        
        
        }
     
   
    
      this.data1=this.stockohlc1yr
     console.log(this.data1)
    
      }
    
  } catch (err) {
    console.error(err);
  }
  
    
  }
  

  getntstock1yr(eqsymbol) {
    this.stockohlc.length = 0;
    this.http.get('https://api.niftytrader.in/webapi/Live/livechartsBySymbol?symbol=' + this.eqsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.stockohlc.length = 0;
      this.stockohlcvolume.length = 0;
      for (let val in nestedItems[3]) {
        this.stockohlc.push({ x: new Date(nestedItems[3][val]['created_at']).getTime(), y: [nestedItems[3][val].open, nestedItems[3][val].high, nestedItems[3][val].low, nestedItems[3][val].close] })
        this.stockohlcvolume.push({ x: new Date(nestedItems[3][val]['created_at']).getTime(), y: nestedItems[3][val].volume })
      }

      this.stockohlc1yr.length = 0;
      
      
     
     
    
      this.chartCandleOptions = {
        series: [
          {
           
            data: this.stockohlc
          }
        ],
        chart: {
          type: "candlestick",
          height: 390,
          id: "candles",
          toolbar: {
            autoSelected: "pan",
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#3C90EB",
              downward: "#DF7D46"
            }
          }
        },
        xaxis: {
          type: "datetime"
        }
      };
      this.chartBarOptions = {
        series: [
          {
            
          
            data: this.stockohlcvolume
          }
        ],
        chart: {
          height: 160,
          type: "bar",
          brush: {
            enabled: true,
            target: "candles"
          },
          selection: {
            enabled: true,
            xaxis: {
            },
            fill: {
              color: "#ccc",
              opacity: 0.4
            },
            stroke: {
              color: "#0D47A1"
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
            colors: {
              ranges: [
                {
                  from: -1000,
                  to: 0,
                  color: "#F15B46"
                },
                {
                  from: 1,
                  to: 10000,
                  color: "#FEB019"
                }
              ]
            }
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            offsetX: 13
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        }
      };
    })
  }
  getshare3m(eqsymbol) {
    ////////////////Nifty 3 months/////////////////////////////
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode=' + this.eqsymbol + 'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=3m').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[0]['results']['quotedata']) {
        this.stock3mdata.unshift(nestedItems[0]['results']['quotedata'][val][1])
        this.stock3mLabels.unshift(new Date(nestedItems[0]['results']['quotedata'][val][0]).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
      }
    }), err => {
      console.log(err)
    }
    this.stock3mData = [{
      label: 'Price',
      data: this.stock3mdata,
      borderWidth: 1,
      fill: false
    }];
    this.stock3mLabels = this.stock3mLabels;
  }
  getzerodha() {
    this.http.get('https://stockreports.zerodha.com/api/pdf/').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      //console.log(nestedItems) explore
    });
  }
  getmmdata(stockid) {
    this.http.get('https://www.trading80.com/technical_card/getCardInfo?sid=' + this.stockid + '&se=bse&cardlist=sectPrice_techScore,sectPrice_indiScale,sectIndigraph_graph,sectMacd_macd_w,sectRsi_rsi_w,sectBb_bb_w,sectMa_ma_w,sectKst_kst_w,sectDow_dow_w,sectObv_obv_w').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.hmsg = (nestedItems[2].sectPrice_techScore['header_msg'])
      //this.hmsg.push({ text:nestedItems[2].sectPrice_techScore['header_msg'], text1: nestedItems[2].sectPrice_techScore['score'], text2: nestedItems[2].sectPrice_techScore['tech_text'] })
      this.fscore.push({ text: nestedItems[2]['sectPrice_indiScale'][0].fin_trend_clr, text1: nestedItems[2]['sectPrice_indiScale'][0].fin_trend_points, text2: nestedItems[2]['sectPrice_indiScale'][0].fin_trend_text })
      this.qscore.push({ text: nestedItems[2]['sectPrice_indiScale'][0].quality_clr, text1: nestedItems[2]['sectPrice_indiScale'][0].quality_rank, text2: nestedItems[2]['sectPrice_indiScale'][0].quality_text })
      this.techscore.push({ text: nestedItems[2]['sectPrice_indiScale'][0].tech_clr, text1: nestedItems[2]['sectPrice_indiScale'][0].tech_score, text2: nestedItems[2]['sectPrice_indiScale'][0].tech_text })
      this.vscore.push({ text: nestedItems[2]['sectPrice_indiScale'][0].valuation_clr, text1: nestedItems[2]['sectPrice_indiScale'][0].valuation_rank, text2: nestedItems[2]['sectPrice_indiScale'][0].valuation_text })
      this.lineChartDatamacdm.length = 0;
      this.lineChartDatasignalm.length = 0;
      this.lineChartDatapricemacdm.length = 0;
      this.lineChartDatagrademacdm.length = 0;
      // this.msg = nestedItems[2]['sectBb_bb_m'].text
      for (let val in nestedItems[2]['sectMacd_macd_w']["stock"]) {
        this.lineChartDatamacdm.push(nestedItems[2]['sectMacd_macd_w']["stock"][val].macd)
        this.lineChartDatasignalm.push(nestedItems[2]['sectMacd_macd_w']["stock"][val].signal)
        this.lineChartDatapricemacdm.push(nestedItems[2]['sectMacd_macd_w']["stock"][val].price)
        this.lineChartmacdmLabels.push(nestedItems[2]['sectMacd_macd_w']["stock"][val].date)
        this.lineChartDatagrademacdm.push(nestedItems[2]['sectMacd_macd_w']["stock"][val].grade)
      }
      this.macdmsg = nestedItems[2]['sectMacd_macd_w']['text']
      this.macdChartData = {
        datasets: [
          {
            label: 'macd',
            data: this.lineChartDatamacdm
          },
          {
            label: 'signal',
            data: this.lineChartDatasignalm
          },
          {
            label: 'price',
            data: this.lineChartDatapricemacdm
          }],
        labels: this.lineChartmacdmLabels
      };
      this.lineChartDatarsim.length = 0;
      this.lineChartDataubandm.length = 0;
      this.lineChartDatalbandm.length = 0;
      this.lineChartDatapricersim.length = 0;
      this.lineChartrsimLabels.length = 0;
      for (let val in nestedItems[2]['sectRsi_rsi_w']["stock"]) {
        this.lineChartDatarsim.push(nestedItems[2]['sectRsi_rsi_w']["stock"][val].rsi)
        this.lineChartDataubandm.push(nestedItems[2]['sectRsi_rsi_w']["stock"][val].uband)
        this.lineChartDatalbandm.push(nestedItems[2]['sectRsi_rsi_w']["stock"][val].lband)
        this.lineChartDatapricersim.push(nestedItems[2]['sectRsi_rsi_w']["stock"][val].price)
        this.lineChartrsimLabels.push(nestedItems[2]['sectRsi_rsi_w']["stock"][val].date)
      }
      this.rsimsg = nestedItems[2]['sectRsi_rsi_w']['text']
      this.rsiChartData = {
        datasets: [
          {
            label: 'RSI',
            data: this.lineChartDatarsim
          },
          {
            label: 'uband',
            data: this.lineChartDataubandm
          },
          {
            label: 'lband',
            data: this.lineChartDatalbandm
          }],
        labels: this.lineChartrsimLabels
      };
      this.lineChartDatamaday50m.length = 0;
      this.lineChartDatamaday200m.length = 0;
      this.lineChartDatamapricem.length = 0;
      this.lineChartDatamadate.length = 0;
      this.lineChartDatamaflag.length = 0;
      for (let val in nestedItems[2]['sectMa_ma_w']["stock"]) {
        this.lineChartDatamaday50m.push(nestedItems[2]['sectMa_ma_w']["stock"][val].day50)
        this.lineChartDatamaday200m.push(nestedItems[2]['sectMa_ma_w']["stock"][val].day200)
        this.lineChartDatamapricem.push(nestedItems[2]['sectMa_ma_w']["stock"][val].price)
        this.lineChartDatamadate.push(nestedItems[2]['sectMa_ma_w']["stock"][val].date)
        this.lineChartDatamaflag.push(nestedItems[2]['sectMa_ma_w']["stock"][val].flag)
      }
      this.mamsg = nestedItems[2]['sectMa_ma_w']['text']
      this.maChartData = {
        datasets: [
          {
            label: 'Price',
            data: this.lineChartDatamapricem,
          },
          {
            label: '200d MA',
            data: this.lineChartDatamaday200m
          },
          {
            label: '50d MA',
            data: this.lineChartDatamaday50m
          }],
        labels: this.lineChartDatamadate
      };
      this.lineChartDatabbuband.length = 0;
      this.lineChartDatabblband.length = 0;
      this.lineChartDatabbdma20.length = 0;
      this.lineChartDatabbdate.length = 0;
      this.lineChartDatabbprice.length = 0;
      for (let val in nestedItems[2]['sectBb_bb_w']["stock"]) {
        this.lineChartDatabbuband.push(nestedItems[2]['sectBb_bb_w']["stock"][val].uband)
        this.lineChartDatabblband.push(nestedItems[2]['sectBb_bb_w']["stock"][val].lband)
        this.lineChartDatabbdma20.push(nestedItems[2]['sectBb_bb_w']["stock"][val].dma20)
        this.lineChartDatabbdate.push(nestedItems[2]['sectBb_bb_w']["stock"][val].date)
        this.lineChartDatabbprice.push(nestedItems[2]['sectBb_bb_w']["stock"][val].price)
      }
      this.bbmsg = nestedItems[2]['sectBb_bb_w']['text']
      this.bbChartData = {
        datasets: [
          {
            label: 'BB uband',
            data: this.lineChartDatabbuband,
          },
          {
            label: 'BB lband',
            data: this.lineChartDatabblband
          },
          {
            label: 'Price',
            data: this.lineChartDatabbprice
          },
          {
            label: 'dma20',
            data: this.lineChartDatabbdma20
          }],
        labels: this.lineChartDatabbdate
      };
      this.lineChartDatakst.length = 0;
      this.lineChartDatakstsignal.length = 0;
      this.lineChartDatakstprice.length = 0;
      this.lineChartDatakstdate.length = 0;
      for (let val in nestedItems[2]['sectKst_kst_w']["stock"]) {
        this.lineChartDatakst.push(nestedItems[2]['sectKst_kst_w']["stock"][val].kst)
        this.lineChartDatakstsignal.push(nestedItems[2]['sectKst_kst_w']["stock"][val].signal)
        this.lineChartDatakstprice.push(nestedItems[2]['sectKst_kst_w']["stock"][val].price)
        this.lineChartDatakstdate.push(nestedItems[2]['sectKst_kst_w']["stock"][val].date)
        //   this.lineChartrsimLabels.push(nestedItems[2]['sectKst_kst_w']["stock"][val].date)
      }
      this.kstmsg = nestedItems[2]['sectKst_kst_w']['text']
      this.kstChartData = {
        datasets: [
          {
            label: 'KST',
            data: this.lineChartDatakst,
          },
          {
            label: 'Signal',
            data: this.lineChartDatakstsignal
          },
          {
            label: 'Price',
            data: this.lineChartDatakstprice
          }
        ],
        labels: this.lineChartDatakstdate
      };
      this.lineChartDatadowdate.length = 0;
      this.lineChartDatadowprice.length = 0;
      this.lineChartDatadowscore.length = 0;
      this.lineChartDatadowflag.length = 0;
      for (let val in nestedItems[2]['sectDow_dow_w']["stock"]) {
        this.lineChartDatadowdate.push(nestedItems[2]['sectDow_dow_w']["stock"][val].date)
        this.lineChartDatadowprice.push(nestedItems[2]['sectDow_dow_w']["stock"][val].price)
        this.lineChartDatadowscore.push(nestedItems[2]['sectDow_dow_w']["stock"][val].score)
        this.lineChartDatadowflag.push(nestedItems[2]['sectDow_dow_w']["stock"][val].flag)
        //   this.lineChartrsimLabels.push(nestedItems[2]['sectDow_dow_w']["stock"][val].date)
      }
      this.dowmsg = nestedItems[2]['sectDow_dow_w']['text']
      this.dowChartData = {
        datasets: [
          {
            label: 'score',
            data: this.lineChartDatadowscore
          },
          {
            label: 'Price',
            data: this.lineChartDatadowprice
          },
          {
            label: 'flag',
            data: this.lineChartDatadowflag
          }],
        labels: this.lineChartDatadowdate
      };
      this.lineChartDataobvdate.length = 0;
      this.lineChartDataobv.length = 0;
      this.lineChartDataobvprice.length = 0;
      for (let val in nestedItems[2]['sectObv_obv_w']["stock"]) {
        this.lineChartDataobvdate.push(nestedItems[2]['sectObv_obv_w']["stock"][val].date)
        this.lineChartDataobv.push(nestedItems[2]['sectObv_obv_w']["stock"][val].obv)
        this.lineChartDataobvprice.push(nestedItems[2]['sectObv_obv_w']["stock"][val].price)
        //   this.lineChartDatapricersim.push(nestedItems[2]['sectObv_obv_w']["stock"][val].price)
        //   this.lineChartrsimLabels.push(nestedItems[2]['sectObv_obv_w']["stock"][val].date)
      }
      this.obvmsg = nestedItems[2]['sectObv_obv_w']['text']
      this.obvChartData = {
        datasets: [
          {
            label: 'OBV',
            data: this.lineChartDataobv,
          },
          {
            label: 'Price',
            data: this.lineChartDataobvprice
          },
        ],
        labels: this.lineChartDataobvdate
      };
    }), err => {
      console.log(err)
    }
  }
  trackByFuntion(index, item) {return item.text2}
  trackByFuntion1(index1, item1) {return item1.text1}
  trackByFuntion2(index2, item2) {return item2.text1}
  trackByFuntion3(index3, item3) {return item3.text1;}
  trackByFuntion4(index4, item4) {return item4.text2;}
  trackByFuntion5(index5, item5) {return item5.text1;}
  trackByFuntion6(index6, item6) {return item6.text1;}
  trackByFuntion7(index7, item7) {return item7.text1;}
  trackByFuntion8(index8, item8) {return item8.text3;}
  trackByFuntion9(index9, item9) {return item9.text3;}
  trackByFuntion10(index10, item10) {return item10.text1;}
  trackByFuntion11(index11, item11) {return item11.text3;}
  trackByFuntion12(index12, item12) {return item12.text1}
  trackByFuntion13(index13, item13) {return item13.text1;}
  trackByFuntion14(index14, item14) {item14.text2;}
  trackByFuntion15(index15, item15) {return item15.text1;}
  trackByFuntion16(index16, item16) {return item16.text1;}
  trackByFuntion17(index17, item17) {return item17.text1;}
  trackByFuntion18(index18, item18) {return item18.text3;}
  trackByFuntion19(index19, item19) {return item19.text3;}
  trackByFuntion20(index20, item20) {return item20.text3;}
  trackByFuntion21(index21, item21) { return item21.text3; }
  trackByFuntion22(index22, item22) {return item22.text2}
  trackByFuntion23(index23, item23) {return item23.text1}
  trackByFuntion24(index24, item24) {return item24.text1}
  trackByFuntion25(index25, item25) {return item25.text1;}
  trackByFuntion26(index26, item26) {return item26.text2;}
  trackByFuntion27(index27, item27) {return item27.text1;}
  trackByFuntion28(index28, item28) {return item28.text1}
  trackByFuntion29(index29, item29) {return item29.text1;}
  trackByFuntion30(index30, item30) {return item30.text3;}
  trackByFuntion31(index31, item31) {return item31.text3;}
  trackByFuntion32(index32, item32) {return item32.text3;}
  trackByFuntion33(index33, item33) {return item33.text3;}
  trackByFuntion34(index34, item34) {return item34.divscore;}
  trackByFuntion35(index35, item35) {return item35.text3;}
  trackByFuntion36(index36, item36) {return item36.text3;}
  trackByFuntion37(index37, item37) {return item37.text3;}
  trackByFuntion38(index38, item38) {return item38.text3;}
  trackByFuntion39(index39, item39) {return item39.text3; }
  trackByFuntion40(index40, item40) {return item40.text3;}
  trackByFuntion41(index41, item41) {return item41.text3;}
  trackByFuntion42(index42, item42) {return item42.text1;}
  trackByFuntion43(index43, item43) {return item43.text2;}
  trackByFuntion44(index44, item44) {return item44.text2;}
  getshare1w(eqsymbol) {
    ////////////////Nifty 1 Week/////////////////////////////
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode=' + this.eqsymbol + 'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1w').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[0]['results']['quotedata']) {
        this.stock1wdata.unshift(nestedItems[0]['results']['quotedata'][val][1])
        this.stock1wLabels.unshift(new Date(nestedItems[0]['results']['quotedata'][val][0]).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
      }
    }), err => {
      console.log(err)
    }
    this.stock1wData = [{
      label: 'Price',
      data: this.stock1wdata,
      borderWidth: 1,
      fill: false
    }];
    this.stock1wLabels = this.stock1wLabels;
  }
  getshare1m(eqsymbol) {
    ////////////////Nifty 3 months/////////////////////////////
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode=' + this.eqsymbol + 'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1m').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[0]['results']['quotedata']) {
        this.stock1mdata.unshift(nestedItems[0]['results']['quotedata'][val][1])
        this.stock1mLabels.unshift(new Date(nestedItems[0]['results']['quotedata'][val][0]).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
      }
    }), err => {
      console.log(err)
    }
    this.stock1mData = [{
      label: 'Price',
      data: this.stock1mdata,
      borderWidth: 1,
      fill: false
    }];
    this.stock1mLabels = this.stock1mLabels;
  }
  getshare6m(eqsymbol) {
    ////////////////Nifty 3 months/////////////////////////////
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode=' + this.eqsymbol + 'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=6m').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[0]['results']['quotedata']) {
        this.stock6mdata.unshift(nestedItems[0]['results']['quotedata'][val][1])
        this.stock6mLabels.unshift(new Date(nestedItems[0]['results']['quotedata'][val][0]).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
      }
    }), err => {
      console.log(err)
    }
    this.stock6mData = [{
      label: 'Price',
      data: this.stock6mdata,
      borderWidth: 1,
      fill: false
    }];
    this.stock6mLabels = this.stock6mLabels;
  }
  getstocksentiments(mcsymbol) {
    this.stocksentiments.length = 0;
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + this.mcsymbol + '?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.stocksentiments.push({ text1: nestedItems[2]['sentiments']['indication'], text2: "Daily" })
    }, err => {
      console.log(err)
    })
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/W/' + this.mcsymbol + '?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.stocksentiments.push({ text1: nestedItems[2]['sentiments']['indication'], text2: "Weekly" })
    }, err => {
      console.log(err)
    })
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/M/' + this.mcsymbol + '?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.stocksentiments.push({ text1: nestedItems[2]['sentiments']['indication'], text2: "Monthly" })
    }, err => {
      console.log(err)
    })
  }
   getstocktoday(mcsymbol,eqsymbol) {
   
    
    this.http.get('https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId=' + this.mcsymbol + '&resolution=1D').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
      this.stock1ddata.length = 0;
      this.stock1dLabels.length = 0;
      for (let val in nestedItems[5]) {
        if(nestedItems[5][val]["value"] )
        this.stock1ddata.push(nestedItems[5][val]["value"])
        this.stock1dLabels.push(new Date(nestedItems[5][val]["time"] * 1000).toLocaleTimeString("en-IN"))

      }
    }, err => {
      console.log(err)
    })
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + this.mcsymbol + '?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    //  console.log(nestedItems)
     this.pclose=nestedItems[2].pclose; 
      ////////////To get Nifty Today Resistances and Indicators/////////////
      this.stockDatasnrr1.length = 0;
      this.stockDatasnrr2.length = 0;
      this.stockDatasnrr3.length = 0;
      this.stockDatasnrs1.length = 0;
      this.stockDatasnrs2.length = 0;
      this.stockDatasnrs3.length = 0;
      let val = 0;
      while (val != 400) {
        val = val + 1
        this.previousclose.push(nestedItems[2].pclose),
        this.stockDatasnrr1.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
          this.stockDatasnrr2.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
          this.stockDatasnrr3.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
          this.stockDatasnrs3.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
          this.stockDatasnrs2.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
          this.stockDatasnrs1.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
      }
      this.stockindicators.length = 0;
      this.stockcrossover.length = 0;
      for (let val in nestedItems[2]['crossover']) {
        this.stockcrossover.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
      }
      for (let val1 in nestedItems[2]['indicators']) {
        if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
          if (nestedItems[2]['indicators'][val1]['id'] == 'beta_nse') {
            this.stockindicators.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].value, text4: nestedItems[2]['indicators'][val1] })
          }
          else if (nestedItems[2]['indicators'][val1]['id'] == 'beta_bse') {
            this.stockindicators.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].value, text4: nestedItems[2]['indicators'][val1] })
          }
          else {
            this.stockindicators.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
          }
        }
      }
      this.stockData = [{
        label: 'Price',
        data: this.stock1ddata,
        borderWidth: 1,
        borderColor: this.stock1ddata.map((v) => (v > this.pclose ? "red" : "green")),
        fill: false
      },
      {
        label: 'Previous close',
        data: this.previousclose,
        borderWidth: 3,
        borderColor: '#040FFA',
        fill: false
      }];
      this.stockLabels = this.stock1dLabels;
      this.lineChartData = [{
        label: 'Price',
        data: this.stock1ddata,
        borderWidth: 3,
        borderColor: this.stock1ddata.map((v) => (v > this.pclose ? "red" : "green")),
        fill: false
      },
      {
        label: 'R2',
        data: this.stockDatasnrr2,
        borderWidth: 1,
        borderColor: '#e3256b',
        fill: false
      },
      {
        label: 'R1',
        data: this.stockDatasnrr1,
        borderWidth: 1,
        bordercolor: '#d3766c',
        fill: false
      }
        , {
        label: 'R3',
        data: this.stockDatasnrr3,
        borderWidth: 1,
        borderColor: '#c84343',
        fill: false
      }, {
        label: 'S1',
        data: this.stockDatasnrs1,
        borderWidth: 1,
        borderColor: '#90b590',
        fill: false
      }, {
        label: 'S2',
        data: this.stockDatasnrs2,
        borderWidth: 1,
        borderColor: '#09c51b',
        fill: false
      }, {
        label: 'S3',
        data: this.stockDatasnrs3,
        borderWidth: 1,
        borderColor: '#375f00',
        fill: false
      },
      {
        label: 'Previous close',
        data: this.previousclose,
        borderWidth: 3,
        borderColor: '#040FFA',
        fill: false
      }];
      this.lineChartLabels = this.stockLabels;
    }, err => {
      console.log(err)
    })
   
    
    try {
      
       jsonp('https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode='+this.eqsymbol+'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company')
    .then((responseData =>{
        // Response is parsed json
       
    
      
         
      this.stockohlc1d.length = 0;
      for (let val in responseData.query.results.quote) {
            
        this.stockohlc1d.push({ x: new Date((responseData.query.results.quote[val].Date)), open: responseData.query.results.quote[val].Open, high: responseData.query.results.quote[val].High, low: responseData.query.results.quote[val].Low, close: responseData.query.results.quote[val].Close, volume: responseData.query.results.quote[val].Volume })
      }
          
          this.data2 = this.stockohlc1d
         
    
  }))
  .catch((error => {
      // Error contains message and previous if applicable
      console.log(error);
  }));
                
          }catch (err) {
         console.error(err);
       }
  }
  getstockmaema(eqsymbol) {
    this.http.get('https://mo.streak.tech/api/tech_analysis/?timeFrame=day&stock=NSE%3A' + this.eqsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     
      this.stockema.length = 0;
      this.stocksma.length = 0;
      this.stockema.push({ text1: nestedItems[10], text2: nestedItems[5], text3: nestedItems[7], text4: nestedItems[9], text5: nestedItems[11], text6: nestedItems[6], text7: nestedItems[8] })
      this.stocksma.push({ text1: nestedItems[37], text2: nestedItems[32], text3: nestedItems[34], text4: nestedItems[36], text5: nestedItems[38], text6: nestedItems[33], text7: nestedItems[35] })
    }, err => {
      console.log(err)
    })
  }
  async getntstockdetails(eqsymbol) {
    try {
      const response = await fetch("https://api.niftytrader.in/webapi/Live/stockAnalysis", {
        "method": "POST",
        "headers": {
          
          "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"},
        "referrer": "https://www.niftytrader.in/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": '{\"symbol\":\"'+this.eqsymbol+'\"}',
        //"method": "POST",
        "mode": "cors",
        "credentials": "omit"
      })
      if (response.ok) {
        const result = await response.json();
          this.nr7 = (result['resultData'].stocktrend['nr7_today'])
      this.delivperc.length = 0;
      this.delivperctime.length = 0;
      for (let val in result['resultData'].priceTable) {
        
        this.delivperc.unshift(result['resultData'].priceTable[val].delivery_percentage)
        this.delivperctime.unshift(result['resultData'].priceTable[val].created_at)
      }
      this.DelivData = [{
        label: 'Delivery Percentage',
        data: this.delivperc,
        borderWidth: 1,
        fill: false
      }];
      this.DelivLabels = this.delivperctime;
      for (let val in result['resultData'].priceTable) {
        this.volume.unshift(result['resultData'].priceTable[val].volume)
        this.volumetime.unshift(result['resultData'].priceTable[val].created_at)
      }
      this.VolumeData = [{
        label: 'Volume',
        data: this.volume,
        borderWidth: 1,
        fill: false
      }];
        this.VolumeLabels = this.volumetime;
      }
  } catch (err) {
    console.error(err);
  }
  }
  
   async getntstockpcrdetails(eqsymbol) {
   
    try {
      const response = await fetch("https://api.niftytrader.in/webapi/Live/kiteInstrumentNfoListNew", {
        "method": "POST",
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NDMzOCIsImp0aSI6IjU5MjUwODYxLWRlNWYtNGFkZS1hZWY0LWRlMzg1YjcwYWQ1ZCIsImV4cCI6MTY1ODUwMjk1MSwiaXNzIjoiTmlmdHl0cmFkZXJoZWxwLmNvbSIsImF1ZCI6Ik5pZnR5dHJhZGVyaGVscC5jb20ifQ.RQyIer2CdUUd2Ge5pLlU8MJJCM-49W0aF3iuDJmZBb0",
          "content-type": "application/json",
          "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "Referer": "https://www.niftytrader.in/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": '{\"symbol\":\"'+eqsymbol+'\"}',
        //"method": "POST"
      })
        
      
      if (response.ok) {
        const result = await response.json();
        
     
         this.maxpain.push({ text1: 'max pain', text2: result['resultData']['futureOption'].max_pain })
        this.stockpcr.push({ text1: 'PCR', text2: result['resultData']['futureOption'].pcr })
      }
    } catch (err) {
     console.error(err);
   }
  }
   gettrendlynestocks1(tlid, eqsymbol, tlname) {
     
  
        this.dataApi.gettrendlynestocks1(tlid, eqsymbol, tlname).subscribe(data5 => {
          let nestedItems = Object.keys(data5).map(key => {
            return data5[key];
          });
          this.brokertarget.push({ text1: nestedItems[1]['broker_avg_target']['lt1'], text2: nestedItems[1]['broker_avg_target']['st1'], text3: nestedItems[1]['broker_avg_target']['color1'] })
          this.ema_26.push({ text1: nestedItems[1]['ema_26']['lt1'], text2: nestedItems[1]['ema_26']['st1'], text3: nestedItems[1]['ema_26']['color1'], text4: nestedItems[1]['ema_26']['value'] })
          this.ema_50.push({ text1: nestedItems[1]['ema_50']['lt1'], text2: nestedItems[1]['ema_50']['st1'], text3: nestedItems[1]['ema_50']['color1'], text4: nestedItems[1]['ema_50']['value'] })
          this.ema_100.push({ text1: nestedItems[1]['ema_100']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['color1'], text4: nestedItems[1]['ema_100']['value'] })
          this.ema_200.push({ text1: nestedItems[1]['ema_200']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['color1'], text4: nestedItems[1]['ema_200']['value'] })
          this.sma_30.push({ text1: nestedItems[1]['sma_30']['lt1'], text2: nestedItems[1]['sma_30']['st1'], text3: nestedItems[1]['sma_30']['color1'], text4: nestedItems[1]['sma_30']['value'] })
          this.sma_50.push({ text1: nestedItems[1]['sma_50']['lt1'], text2: nestedItems[1]['sma_50']['st1'], text3: nestedItems[1]['sma_50']['color1'], text4: nestedItems[1]['sma_50']['value'] })
          this.sma_100.push({ text1: nestedItems[1]['sma_100']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['color1'], text4: nestedItems[1]['sma_100']['value'] })
          this.sma_200.push({ text1: nestedItems[1]['sma_200']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['color1'], text4: nestedItems[1]['sma_200']['value'] })
          this.macd1.push({ text1: nestedItems[1]['macd']['lt1'], text2: nestedItems[1]['macd']['st1'], text3: nestedItems[1]['macd']['color1'], text4: nestedItems[1]['macd']['value'] })
          this.rsi1.push({ text1: nestedItems[1]['rsi']['lt1'], text2: nestedItems[1]['rsi']['st1'], text3: nestedItems[1]['rsi']['color1'], text4: nestedItems[1]['rsi']['value'] })
          this.mfi1.push({ text1: nestedItems[1]['mfi']['lt1'], text2: nestedItems[1]['mfi']['st1'], text3: nestedItems[1]['mfi']['color1'], text4: nestedItems[1]['mfi']['value'] })
          if (nestedItems[1]['broker_recodown_6M']['lt1']) {
            this.brokerrecodowngrade.push({ text1: nestedItems[1]['broker_recodown_6M']['lt1'], text2: nestedItems[1]['broker_recodown_6M']['st1'], text3: nestedItems[1]['broker_recodown_6M']['color1'] })
          }
          if (nestedItems[1]['broker_recoup_6M']['lt1']) {
            this.brokerrecoupgrade.push({ text1: nestedItems[1]['broker_recoup_6M']['lt1'], text2: nestedItems[1]['broker_recoup_6M']['st1'], text3: nestedItems[1]['broker_recoup_6M']['color1'] })
          }
          if (nestedItems[1]['broker_targetup_6M']['lt1']) {
            this.brokertargetupgrade.push({ text1: nestedItems[1]['broker_targetup_6M']['lt1'], text2: nestedItems[1]['broker_targetup_6M']['st1'], text3: nestedItems[1]['broker_targetup_6M']['color1'] })
          }
          if (nestedItems[1]['broker_targetdown_6M']['lt1']) {
            this.brokertargetdowngrade.push({ text1: nestedItems[1]['broker_targetdown_6M']['lt1'], text2: nestedItems[1]['broker_targetdown_6M']['st1'], text3: nestedItems[1]['broker_targetdown_6M']['color1'] })
          }
          if (nestedItems[1]['MCAP_Q']['lt1']) {
            if (nestedItems[1]['MCAP_Q']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['MCAP_Q']['lt1'], text2: nestedItems[1]['MCAP_Q']['title'], text3: nestedItems[1]['MCAP_Q']['value'] })
            }
            else if (nestedItems[1]['MCAP_Q']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['MCAP_Q']['lt1'], text2: nestedItems[1]['MCAP_Q']['title'], text3: nestedItems[1]['MCAP_Q']['value'] })
            }
            else if (nestedItems[1]['MCAP_Q']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['MCAP_Q']['lt1'], text2: nestedItems[1]['MCAP_Q']['title'], text3: nestedItems[1]['MCAP_Q']['value'] })
            }
          }
          if (nestedItems[1]['NP_Q']['lt2']) {
            if (nestedItems[1]['NP_Q']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['NP_Q']['value'], text2: nestedItems[1]['NP_Q']['lt2'], text3: nestedItems[1]['NP_Q']['st2'] })
            }
            else if (nestedItems[1]['NP_Q']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['NP_Q']['value'], text2: nestedItems[1]['NP_Q']['lt2'], text3: nestedItems[1]['NP_Q']['st2'] })
            }
            else if (nestedItems[1]['NP_Q']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['NP_Q']['value'], text2: nestedItems[1]['NP_Q']['lt2'], text3: nestedItems[1]['NP_Q']['st2'] })
            }
          }
          if (nestedItems[1]['PBV_A']['st1']) {
            if (nestedItems[1]['PBV_A']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['PBV_A']['lt1'], text2: nestedItems[1]['PBV_A']['st1'], text3: nestedItems[1]['PBV_A']['value'] })
            }
            else if (nestedItems[1]['PBV_A']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['PBV_A']['lt1'], text2: nestedItems[1]['PBV_A']['st1'], text3: nestedItems[1]['PBV_A']['value'] })
            }
            else if (nestedItems[1]['PBV_A']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['PBV_A']['lt1'], text2: nestedItems[1]['PBV_A']['st1'], text3: nestedItems[1]['PBV_A']['value'] })
            }
          }
          if (nestedItems[1]['PE_TTM']['lt1']) {
            if (nestedItems[1]['PE_TTM']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['PE_TTM']['lt1'], text2: nestedItems[1]['PE_TTM']['title'], text3: nestedItems[1]['PE_TTM']['value'] })
            }
            else if (nestedItems[1]['PE_TTM']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['PE_TTM']['lt1'], text2: nestedItems[1]['PE_TTM']['title'], text3: nestedItems[1]['PE_TTM']['value'] })
            }
            else if (nestedItems[1]['PE_TTM']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['PE_TTM']['lt1'], text2: nestedItems[1]['PE_TTM']['title'], text3: nestedItems[1]['PE_TTM']['value'] })
            }
          }
          if (nestedItems[1]['SR_Q']['lt1']) {
            if (nestedItems[1]['SR_Q']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['SR_Q']['lt2'], text2: nestedItems[1]['SR_Q']['st2'], text3: nestedItems[1]['SR_Q']['value'] })
            }
            else if (nestedItems[1]['SR_Q']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['SR_Q']['lt2'], text2: nestedItems[1]['SR_Q']['st2'], text3: nestedItems[1]['SR_Q']['value'] })
            }
            else if (nestedItems[1]['SR_Q']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['SR_Q']['lt2'], text2: nestedItems[1]['SR_Q']['st2'], text3: nestedItems[1]['SR_Q']['value'] })
            }
          }
          if (nestedItems[1]['beta_1Y']['lt1']) {
            if (nestedItems[1]['beta_1Y']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['beta_1Y']['lt1'], text2: nestedItems[1]['beta_1Y']['st1'], text3: nestedItems[1]['beta_1Y']['value'] })
            }
            else if (nestedItems[1]['beta_1Y']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['beta_1Y']['lt1'], text2: nestedItems[1]['beta_1Y']['st1'], text3: nestedItems[1]['beta_1Y']['value'] })
            }
            else if (nestedItems[1]['beta_1Y']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['beta_1Y']['lt1'], text2: nestedItems[1]['beta_1Y']['st1'], text3: nestedItems[1]['beta_1Y']['value'] })
            }
          }
          if (nestedItems[1]['ema_26']['lt1']) {
            if (nestedItems[1]['ema_26']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['ema_26']['lt1'], text2: nestedItems[1]['ema_26']['st1'], text3: nestedItems[1]['ema_26']['value'] })
            }
            else if (nestedItems[1]['ema_26']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['ema_26']['lt1'], text2: nestedItems[1]['ema_26']['st1'], text3: nestedItems[1]['ema_26']['value'] })
            }
            else if (nestedItems[1]['ema_26']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['ema_26']['lt1'], text2: nestedItems[1]['ema_26']['st1'], text3: nestedItems[1]['ema_26']['value'] })
            }
          }
          if (nestedItems[1]['ema_50']['lt1']) {
            if (nestedItems[1]['ema_50']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['ema_50']['lt1'], text2: nestedItems[1]['ema_50']['st1'], text3: nestedItems[1]['ema_50']['value'] })
            }
            else if (nestedItems[1]['ema_50']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['ema_50']['lt1'], text2: nestedItems[1]['ema_50']['st1'], text3: nestedItems[1]['ema_50']['value'] })
            }
            else if (nestedItems[1]['ema_50']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['ema_50']['lt1'], text2: nestedItems[1]['ema_50']['st1'], text3: nestedItems[1]['ema_50']['value'] })
            }
          }
          if (nestedItems[1]['ema_100']['lt1']) {
            if (nestedItems[1]['ema_100']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['ema_100']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['value'] })
            }
            else if (nestedItems[1]['ema_100']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['ema_100']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['value'] })
            }
            else if (nestedItems[1]['ema_100']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['ema_100']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['value'] })
            }
          }
          if (nestedItems[1]['ema_200']['lt1']) {
            if (nestedItems[1]['ema_200']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['ema_200']['lt1'], text2: nestedItems[1]['ema_200']['st1'], text3: nestedItems[1]['ema_200']['value'] })
            }
            else if (nestedItems[1]['ema_200']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['ema_200']['lt1'], text2: nestedItems[1]['ema_200']['st1'], text3: nestedItems[1]['ema_200']['value'] })
            }
            else if (nestedItems[1]['ema_200']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['ema_200']['lt1'], text2: nestedItems[1]['ema_200']['st1'], text3: nestedItems[1]['ema_200']['value'] })
            }
          }
          if (nestedItems[1]['sma_30']['lt1']) {
            if (nestedItems[1]['sma_30']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['sma_30']['lt1'], text2: nestedItems[1]['sma_30']['st1'], text3: nestedItems[1]['sma_30']['value'] })
            }
            else if (nestedItems[1]['sma_30']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['sma_30']['lt1'], text2: nestedItems[1]['sma_30']['st1'], text3: nestedItems[1]['sma_30']['value'] })
            }
            else if (nestedItems[1]['sma_30']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['sma_30']['lt1'], text2: nestedItems[1]['sma_30']['st1'], text3: nestedItems[1]['sma_30']['value'] })
            }
          }
          if (nestedItems[1]['sma_50']['lt1']) {
            if (nestedItems[1]['sma_50']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['sma_50']['lt1'], text2: nestedItems[1]['sma_50']['st1'], text3: nestedItems[1]['sma_50']['value'] })
            }
            else if (nestedItems[1]['sma_50']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['sma_50']['lt1'], text2: nestedItems[1]['sma_50']['st1'], text3: nestedItems[1]['sma_50']['value'] })
            }
            else if (nestedItems[1]['sma_50']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['sma_50']['lt1'], text2: nestedItems[1]['sma_50']['st1'], text3: nestedItems[1]['sma_50']['value'] })
            }
          }
          if (nestedItems[1]['sma_100']['lt1']) {
            if (nestedItems[1]['sma_100']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['sma_100']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['value'] })
            }
            else if (nestedItems[1]['sma_100']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['sma_100']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['value'] })
            }
            else if (nestedItems[1]['sma_100']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['sma_100']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['value'] })
            }
          }
          if (nestedItems[1]['sma_200']['lt1']) {
            if (nestedItems[1]['sma_200']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['sma_200']['lt1'], text2: nestedItems[1]['sma_200']['st1'], text3: nestedItems[1]['sma_200']['value'] })
            }
            else if (nestedItems[1]['sma_200']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['sma_200']['lt1'], text2: nestedItems[1]['sma_200']['st1'], text3: nestedItems[1]['sma_200']['value'] })
            }
            else if (nestedItems[1]['sma_200']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['sma_200']['lt1'], text2: nestedItems[1]['sma_200']['st1'], text3: nestedItems[1]['sma_200']['value'] })
            }
          }
          if (nestedItems[1]['macd']['lt1']) {
            if (nestedItems[1]['macd']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['macd']['lt1'], text2: nestedItems[1]['macd']['st1'], text3: nestedItems[1]['macd']['value'] })
            }
            else if (nestedItems[1]['macd']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['macd']['lt1'], text2: nestedItems[1]['macd']['st1'], text3: nestedItems[1]['macd']['value'] })
            }
            else if (nestedItems[1]['macd']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['macd']['lt1'], text2: nestedItems[1]['macd']['st1'], text3: nestedItems[1]['macd']['value'] })
            }
          }
          // if (nestedItems[1]['macdsignal']['lt1']) {
          //   if (nestedItems[1]['macdsignal']['color1'] == 'positive') {
          //     this.positive.push({ text1: nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['value'] })
          //   }
          //   else if (nestedItems[1]['macdsignal']['color1'] == 'negative') {
          //     this.negative.push({ text1: nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['value'] })
          //   }
          //   else if (nestedItems[1]['macdsignal']['color1'] == 'neutral') {
          //     this.neutral.push({ text1: nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['value'] })
          //   }
          // }
          if (nestedItems[1]['mfi']['lt1']) {
            if (nestedItems[1]['mfi']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['mfi']['lt1'], text2: nestedItems[1]['mfi']['st1'], text3: nestedItems[1]['mfi']['value'] })
            }
            else if (nestedItems[1]['mfi']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['mfi']['lt1'], text2: nestedItems[1]['mfi']['st1'], text3: nestedItems[1]['mfi']['value'] })
            }
            else if (nestedItems[1]['mfi']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['mfi']['lt1'], text2: nestedItems[1]['mfi']['st1'], text3: nestedItems[1]['mfi']['value'] })
            }
          }
          if (nestedItems[1]['rsi']['lt1']) {
            if (nestedItems[1]['rsi']['color1'] == 'positive') {
              this.positive.push({ text1: nestedItems[1]['rsi']['lt1'], text2: nestedItems[1]['rsi']['st1'], text3: nestedItems[1]['rsi']['value'] })
            }
            else if (nestedItems[1]['rsi']['color1'] == 'negative') {
              this.negative.push({ text1: nestedItems[1]['rsi']['lt1'], text2: nestedItems[1]['rsi']['st1'], text3: nestedItems[1]['rsi']['value'] })
            }
            else if (nestedItems[1]['rsi']['color1'] == 'neutral') {
              this.neutral.push({ text1: nestedItems[1]['rsi']['lt1'], text2: nestedItems[1]['rsi']['st1'], text3: nestedItems[1]['rsi']['value'] })
            }
          }
        }, err => {
          console.log(err)
        })
      

  
  }
  
  gettrendlynestocks2(tlid) {
    axios.get('https://trendlyne.com/mapp/v1/stock/chart-data/' + this.tlid + '/SMA/')
      .then((response) => {
        let nestedItems = Object.keys((response.data)).map(key => {
          return (response.data)[key];
        });;
       // console.log(nestedItems)
        this.dscore.push({ text1: nestedItems[1]['stockData'][6], text2: nestedItems[1]['stockData'][9] })
        this.volscore.push({ text1: nestedItems[1]['stockData'][7], text2: nestedItems[1]['stockData'][10] })
        this.mscore.push({ text1: nestedItems[1]['stockData'][8], text2: nestedItems[1]['stockData'][11] })
        // this.tllink="https://trendlyne.com/alerts/stock-alerts/"+this.eqsymbol+"/"+this.tlid+"/"+this.tlname
      }, err => {
        console.log(err)
      })
  }
  
  ////////////////////////////////Market Mojo///////////////////////////////
  getmmstockinfo(stockid) {
    this.http.get('https://frapi.marketsmojo.com/stocks_stocksid/header_info?sid=' + this.stockid + '&exchange=1').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      // for (let val in nestedItems[5]) {
      //   this.hmsg.push({ text: nestedItems[5][val].header, text1: nestedItems[5][val].msg, text2: nestedItems[5][val].dir })
      // }
      // for (let val in nestedItems[4]["popup"]) {
      //   this.mmdelivcomp=nestedItems[4]["popup"][val] 
      // }
      // this.score.push({ text: nestedItems[2].score, text1: "Score" })
      // this.scoret.push({ text: nestedItems[2].scoreText, text1: "Reco" })
      // this.fscore.push({ text: nestedItems[2].f_clr, text1: nestedItems[2].f_dir, text2: nestedItems[2].f_pts, text3: nestedItems[2].f_txt, text4: "Financial" })
      // this.qscore.push({ text: nestedItems[2].q_clr, text1: nestedItems[2].q_dir, text2: nestedItems[2].q_rank, text3: nestedItems[2].q_txt, text4: "Quality" })
      // this.vscore.push({ text: nestedItems[2].v_clr, text1: nestedItems[2].v_rank, text2: nestedItems[2].v_txt, text3: "Valuation" })
      // this.techscore.push({ text: nestedItems[2].tech_clr, text1: nestedItems[2].tech_score, text2: nestedItems[2].tech_txt, text3: "Tech" })
    }, err => {
      console.log(err)
    }
    )
  }
}



