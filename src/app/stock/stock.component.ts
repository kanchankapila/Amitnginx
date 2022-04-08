import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { BaseChartDirective } from 'ng2-charts';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { createChart } from 'lightweight-charts';

import * as  stocks from '../lists/stocklist'
import * as bqstock from '../lists/bqlist'
import * as etsector from '../lists/etsectorlist'
import * as etindex from '../lists/etindexlist'
import * as mcindex from '../lists/mcsectorlist'
import { NgApexchartsModule } from "ng-apexcharts";
//import { seriesData, seriesDataLinear } from "./ohlc";


export interface stockcrossover {

  text1: any;
  text2: any;
  text3: any;
  
}
export interface stockindicatorstile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface stockDatatiles{
  x: number;
  open: any;
  high: any;
  low: any;
  close: any;
  volume: any;
 
}
export interface stockindicatorswtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface stockindicatorsmtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface mcaptile{
  text1: string;
  text2: string;
  text3: string;
}
export interface nptile{
  text1: string;
  text2: string;
  text3: string;
}
export interface pbvtile{
  text1: string;
  text2: string;
  text3: string;
}
export interface pegttmtile{
  text1: string;
  text2: string;
  text3: string;
}
export interface pettmtile{
  text1: string;
  text2: string;
  text3: string;
}
export interface srtile{
  text1: string;
  text2: string;
  text3: string;
}
export interface beta1tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface ema26tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface ema50tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface ema100tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface ema200tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface macdtile{
  text1: string;
  text2: string;
  text3: string;
}
export interface macdstile{
  text1: string;
  text2: string;
  text3: string;
}
export interface mfitile{
  text1: string;
  text2: string;
  text3: string;
}
export interface rsitile{
  text1: string;
  text2: string;
  text3: string;
}
export interface sma30tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface sma50tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface sma100tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface sma200tile{
  text1: string;
  text2: string;
  text3: string;
}
export interface yr1rtrntile{
  text1: string;
  text2: string;
  text3: string;
}
export interface rtrn1yvsnftytile{
  text1: string;
  text2: string;
  text3: string;
}
export interface positivetile{
  text1: string;
  text2: string;
  text3: string;
}
export interface negativetile{
  text1: string;
  text2: string;
  text3: string;
}
export interface neutraltile{
  text1: string;
  text2: string;
  text3: string;
}


export interface stockematile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
}
export interface stocksmatile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  
 
}


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
  
export class StockComponent implements OnInit {
  @ViewChild('chart-container')

  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public rows: Object;
  public axes: Object;

  constructor(private primengConfig: PrimeNGConfig,private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) {
    
  }
  
  
  public stockdata1: Array<number> = [];
  public stockLabels: Array<any> = [];
  public stockChartData: Array<any> = [];
  public stockChartLabels: Array<number> = [];
  public stockChartOptions: any;
  public stockChartColors: any;
  public stockpcrdata: Array<number> = [];
  public stockpcrtime: Array<any> = [];
  public stockvixdata: Array<number> = [];
  public stockvixtime: Array<any> = [];
  public stockData1: Array<any> = [];
  public stockOptions: any;
  public stockColors: any;
  public stock5ddata: Array<number> = [];
  public stock5dLabels: Array<any> = [];
  public stock5dData: Array<any> = [];
  public stock5dOptions: any;
  public stock5dColors: any;
  public stock1mdata: Array<number> = [];
  public stock1mLabels: Array<any> = [];
  public stock1mData: Array<any> = [];
  public stock1mOptions: any;
  public stock1mColors: any;
  public stock3mdata: Array<number> = [];
  public stock3mLabels: Array<any> = [];
  public stock3mData: Array<any> = [];
  public stock3mOptions: any;
  public stock3mColors: any;
  public stock6mdata: Array<number> = [];
  public stock6mLabels: Array<any> = [];
  public stock6mData: Array<any> = [];
  public stock6mOptions: any;
  public stock6mColors: any;
  public stock1yrdata: Array<number> = [];
  public stock1yrLabels: Array<any> = [];
  public stock1yrData: Array<any> = [];
  public stock1yrOptions: any;
  public stock1yrColors: any;
  public stockpcrData: Array<any> = [];
  public stockpcrLabels:Array<number>= [];
  public stockpcrOptions: any;
  public stockpcrColors: any;
  public stockvixData: Array<any> = [];
  public stockvixLabels:Array<number>= [];
  public stockvixOptions: any;
  public stockvixColors: any;
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  //chart: any;
  stockcrossover: stockcrossover[] = [];
  stockindicators: stockindicatorstile[] = [];
  stockindicatorsw: stockindicatorswtile[] = [];
  stockindicatorsm: stockindicatorsmtile[] = [];
  stockData: stockDatatiles[] = [];
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
  macd: macdstile[] = [];
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
  //public stockData: object[]
//     = [

//     { x: new Date("2012-04-02"), open: 85.975716, high: 88.395714, low: 85.76857, close: 88.375717, volume: 14958790 },
    
//     { x: new Date("2012-04-03"), open: 89.614288, high: 90.315712, low: 88.93, close: 89.902855, volume: 20863990 },
    
//     { x: new Date("2012-04-04"), open: 89.192856, high: 89.408569, low: 88.14286, close: 89.187141, volume: 14324520 },
    
//     { x: new Date("2012-04-05"), open: 89.568573, high: 90.665718, low: 89.057144, close: 90.525711, volume: 16032450 },
    
//     { x: new Date("2012-04-09"), open: 89.447144, high: 91.405716, low: 89.328575, close: 90.889999, volume: 14938420 },
    
//     { x: new Date("2012-04-10"), open: 91.418571, high: 92, low: 89.428574, close: 89.777145, volume: 22243130 },
//     { x: new Date("2012-05-02"), open: 85.975716, high: 88.395714, low: 85.76857, close: 88.375717, volume: 14958790 },
    
//     { x: new Date("2012-05-03"), open: 89.614288, high: 90.315712, low: 88.93, close: 89.902855, volume: 20863990 },
    
//     { x: new Date("2012-05-04"), open: 89.192856, high: 89.408569, low: 88.14286, close: 89.187141, volume: 14324520 },
    
//     { x: new Date("2012-05-05"), open: 89.568573, high: 90.665718, low: 89.057144, close: 90.525711, volume: 16032450 },
    
//     { x: new Date("2012-05-09"), open: 89.447144, high: 91.405716, low: 89.328575, close: 90.889999, volume: 14938420 },
    
//     { x: new Date("2012-05-10"), open: 91.418571, high: 92, low: 89.428574, close: 89.777145, volume: 22243130 },
//     { x: new Date("2012-06-02"), open: 85.975716, high: 88.395714, low: 85.76857, close: 88.375717, volume: 14958790 },
    
//     { x: new Date("2012-06-03"), open: 89.614288, high: 90.315712, low: 88.93, close: 89.902855, volume: 20863990 },
    
//     { x: new Date("2012-06-04"), open: 89.192856, high: 89.408569, low: 88.14286, close: 89.187141, volume: 14324520 },
    
//     { x: new Date("2012-06-05"), open: 89.568573, high: 90.665718, low: 89.057144, close: 90.525711, volume: 16032450 },
    
//     { x: new Date("2012-06-09"), open: 89.447144, high: 91.405716, low: 89.328575, close: 90.889999, volume: 14938420 },
    
//     { x: new Date("2012-06-10"), open: 91.418571, high: 92, low: 89.428574, close: 89.777145, volume: 22243130 },
    
    
// ]

  //public apexohlc: Array<any> 
//   public apexohlc: {
//     x: Date;
//     y: number;
//   }[]
//   public apexvolume:[ {
//     x: Date;
//     y: number[];
// }]

  
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
  stockname: any
  stockisin: any
  mcsymbol: any
  mcsymbolname: any
  stockid: any
  bqnames: any
  companyid: any
  periods:any
  

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.stockList = stocks.default.Data
    this.stock = stocks.default.Data
    this.bqstocks = bqstock.default.Data
    this.etsectors = etsector.default.Data
    this.etindexs = etindex.default.Data
    this.mcindexs = mcindex.default.Data
    this.primaryYAxis = {

      plotOffset: 25,
      
      rowIndex: 1, opposedPosition: true,
      
      rangePadding: 'None',
      
      };
      
      this.primaryXAxis = { valueType: 'DateTime' };
      
      this.rows = [
      
      { height: '15%' },
      
      { height: '85%' }
      
      ];
      
      this.axes = [{
      
      name: 'secondary', opposedPosition: true, rowIndex: 0,
      
      }];
      
        
        
        
      
    this.route.queryParams.subscribe(params => {

      this.eqsymbol = this.stockList.filter(i => i.isin == params.stock)[0].symbol
      this.tlid = this.stockList.filter(i => i.isin == params.stock)[0].tlid
      this.tlname = this.stockList.filter(i => i.isin == params.stock)[0].tlname
      this.stockname = this.stockList.filter(i => i.isin == params.stock)[0].name
      this.stockisin = this.stockList.filter(i => i.isin == params.stock)[0].isin
      this.mcsymbol = this.stockList.filter(i => i.isin == params.stock)[0].mcsymbol
      this.mcsymbolname = this.stockList.filter(i => i.isin == params.stock)[0].mcsymbol
      this.stockid = this.stockList.filter(i => i.isin == params.stock)[0].stockid
      this.bqnames = this.stockList.filter(i => i.isin == params.stock)[0].bqname
      this.companyid = this.stockList.filter(i => i.isin == params.stock)[0].companyid
      
    });  
    this.getmcshare(this.mcsymbol,this.eqsymbol);
    this.getmcsharefrequent(this.mcsymbol,this.eqsymbol); 
    setInterval(() => { this.getmcsharefrequent(this.mcsymbol, this.eqsymbol) }, 30000);
    setInterval(() => { this.gettrendlynestocks2(this.tlid) }, 10000);
    this.gettrendlynestocks1(this.tlid,this.tlname,this.eqsymbol)
    this.gettrendlynestocks2(this.tlid)
    this.gettrendlynestocks3(this.tlid)
   
    
      
    
     }

     
//   buildpcrgraph() {
    
    
//     this.basicData1 = {
      
//       labels: this.niftypcrtime,
      
      
//       datasets: [
//         {
//           label: "value",
//           //backgroundColor: this.getRandomColor(),
//           backgroundColor: '#ebedef',
//           data: this.niftypcrdata,
//           fill: false
//         },
//       ]
//     };
//     var footerLine14 = this.niftypcrdata
//     //console.log(footerLine1 )
   
//     this.basicOptions1 = {
      
//       responsive: true,
//       tooltips: {
//         callbacks: {
//           beforeFooter: function (tooltipItems, data) {
//             return 'Current Pcr:' + footerLine14[tooltipItems[0].index];
//           }
//         },
//           plugins: {
//             legend: {
//               labels: {
//                 color: '#495057'
//               }
//             }
//           },
//           scales: {
//             x: {
//               ticks: {
//                 color: '#D98880'
//               },
//               grid: {
//                 color: '#D98880'
//               }
//             },
//             y: {
//               ticks: {
//                 color: '#D98880'
//               },
//               grid: {
//                 color: '#D98880'
//               }
//             }}},}}
// buildvixgraph() {
    
    
//               this.basicData = {
                
//                 labels: this.niftyvixtime,
                
                
//                 datasets: [
//                   {
//                     label: "value",
//                     //backgroundColor: this.getRandomColor(),
//                     backgroundColor: '#ebedef',
//                     data: this.niftyvixdata,
//                     fill: false
//                   },
//                 ]
//               };
//               var footerLine14 = this.niftyvixdata
//               //console.log(footerLine1 )
             
//               this.basicOptions = {
                
//                 responsive: true,
//                 tooltips: {
//                   callbacks: {
//                     beforeFooter: function (tooltipItems, data) {
//                       return 'Current Vix:' + footerLine14[tooltipItems[0].index];
//                     }
//                   },
//                     plugins: {
//                       legend: {
//                         labels: {
//                           color: '#495057'
//                         }
//                       }
//                     },
//                     scales: {
//                       x: {
//                         ticks: {
//                           color: '#D98880'
//                         },
//                         grid: {
//                           color: '#D98880'
//                         }
//                       },
//                       y: {
//                         ticks: {
//                           color: '#D98880'
//                         },
//                         grid: {
//                           color: '#D98880'
//                         }
//                       }}},}}
           

 
 
  getmcshare(mcsymbol,eqsymbol) {
    this.dataApi.getmcshare(this.mcsymbol,this.eqsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
 
  console.log(nestedItems)


      ///////////////////////////////////////////////////////////////
       ////////////To get Nifty 5day Resistances and Indicators/////////////
      
       let val5 = 0;
       while (val5 != 2000) {
         val5 = val5 + 1
         this.stockDatasnrr1w.push(nestedItems[0]['data']['pivotLevels'][0].pivotLevel.r1),
         this.stockDatasnrr2w.push(nestedItems[0]['data']['pivotLevels'][0].pivotLevel.r2),
         this.stockDatasnrr3w.push(nestedItems[0]['data']['pivotLevels'][0].pivotLevel.r3),
         this.stockDatasnrs3w.push(nestedItems[0]['data']['pivotLevels'][0].pivotLevel.s3),
         this.stockDatasnrs2w.push(nestedItems[0]['data']['pivotLevels'][0].pivotLevel.s2),
         this.stockDatasnrs1w.push(nestedItems[0]['data']['pivotLevels'][0].pivotLevel.s1)
       }
       
       
       for (let val in nestedItems[0]['data']['crossover']) {
         this.stockindicatorsw.push({text1:nestedItems[0]['data']['crossover'][val]['displayValue'],text3:nestedItems[0]['data']['crossover'][val]['indication'],text2:nestedItems[0]['data']['crossover'][val]['period'],text4:nestedItems[0]['data']['crossover'][val]['period']})
       }
     
      for (let val1 in nestedItems[0]['data']['indicators']) {
        if (nestedItems[0]['data']['indicators'][val1]['id'] != 'bollinger') {
          this.stockindicatorsw.push({ text1: nestedItems[0]['data']['indicators'][val1].displayName, text2: nestedItems[0]['data']['indicators'][val1].id, text3: nestedItems[0]['data']['indicators'][val1].indication, text4: nestedItems[0]['data']['indicators'][val1].value })
        }
      }
        
        
       
     
  
      

//       ////////////To get Nifty 5 day Price///////////////////////
     
      this.stock5ddata.length = 0;
      this.stock5dLabels.length = 0;
      for (let val in nestedItems[2]['query']['results']['quotedata']) {
        this.stock5ddata.unshift(nestedItems[2]['query']['results']['quotedata'][val][1])
        this.stock5dLabels.unshift((new Date(nestedItems[2]['query']['results']['quotedata'][val][0])).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
       
      }
      
     
      this.stock5dData = [{
        label: 'Price',
        data: this.stock5ddata,
        borderWidth: 1,
        fill: false
      },{ label: 'R1',
      data: this.stockDatasnrr1w,
      borderWidth: 1,
      bordercolor:'#D98880',
          fill: false
        },
        {
        label: 'R2',
        data: this.stockDatasnrr2w,
        borderWidth: 1,
        borderColor: '#e3256b',
          fill: false
        }
        , {
          label: 'R3',
      data: this.stockDatasnrr3w,
          borderWidth: 1,
          borderColor: '#c84343',
      fill: false}, {
        label: 'S1',
    data: this.stockDatasnrs1w,
        borderWidth: 1,
        borderColor: '#90b590',
    fill: false}, {
      label: 'S2',
  data: this.stockDatasnrs2w,
      borderWidth: 1,
      borderColor: '#09c51b',
  fill: false}, {
    label: 'S3',
data: this.stockDatasnrs3w,
    borderWidth: 1,
    borderColor: '#375f00',
fill: false}];
    
      this.stock5dLabels = this.stock5dLabels;
      this.stock5dOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: true
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
    
      this.stock5dColors = [
        {
          borderColor: '#2d0365'
        }
      ];
//   /////////////////////////////////////////////////////////////////
      
//        ////////////To get Nifty 1 month Resistances and Indicators/////////////
      
       let val1m = 0;
       while (val1m != 12000) {
         val1m = val1m + 1
         this.stockDatasnrr1m.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r1),
         this.stockDatasnrr2m.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r2),
         this.stockDatasnrr3m.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r3),
         this.stockDatasnrs3m.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s3),
         this.stockDatasnrs2m.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s2),
         this.stockDatasnrs1m.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s1)
       }
       
       
       for (let val in nestedItems[1]['data']['crossover']) {
         this.stockindicatorsm.push({text1:nestedItems[1]['data']['crossover'][val]['displayValue'],text3:nestedItems[1]['data']['crossover'][val]['indication'],text2:nestedItems[1]['data']['crossover'][val]['period'],text4:nestedItems[1]['data']['crossover'][val]['period']})
       }
     
      for (let val1 in nestedItems[1]['data']['indicators']) {
        if (nestedItems[1]['data']['indicators'][val1]['id'] != 'bollinger') {
          this.stockindicatorsm.push({ text1: nestedItems[1]['data']['indicators'][val1].displayName, text2: nestedItems[1]['data']['indicators'][val1].id, text3: nestedItems[1]['data']['indicators'][val1].indication, text4: nestedItems[1]['data']['indicators'][val1].value })
        }
      }
        
        
       
     
  
      

//       ////////////To get Nifty 1 month Price///////////////////////
     
      this.stock1mdata.length = 0;
      this.stock1mLabels.length = 0;
      for (let val in nestedItems[3]['query']['results']['quotedata']) {
        this.stock1mdata.unshift(nestedItems[3]['query']['results']['quotedata'][val][1])
        this.stock1mLabels.unshift(new Date(nestedItems[3]['query']['results']['quotedata'][val][0]).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
       
      }
      
     
      this.stock1mData = [{
        label: 'Price',
        data: this.stock1mdata,
        borderWidth: 1,
        fill: false
      },{ label: 'R1',
      data: this.stockDatasnrr1m,
      borderWidth: 1,
      bordercolor:'#D98880',
          fill: false
        },
        {
        label: 'R2',
        data: this.stockDatasnrr2m,
        borderWidth: 1,
        borderColor: '#e3256b',
          fill: false
        }
        , {
          label: 'R3',
      data: this.stockDatasnrr3m,
          borderWidth: 1,
          borderColor: '#c84343',
      fill: false}, {
        label: 'S1',
    data: this.stockDatasnrs1m,
        borderWidth: 1,
        borderColor: '#90b590',
    fill: false}, {
      label: 'S2',
  data: this.stockDatasnrs2m,
      borderWidth: 1,
      borderColor: '#09c51b',
  fill: false}, {
    label: 'S3',
data: this.stockDatasnrs3m,
    borderWidth: 1,
    borderColor: '#375f00',
fill: false}];
    
      this.stock1mLabels = this.stock1mLabels;
      this.stock1mOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: true
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
    
      this.stock1mColors = [
        {
          borderColor: '#2d0365'
        }
      ];
// //////////////////////////////////////////////////////////////////
//       ////////////////Nifty 3 months/////////////////////////////
      for (let val in nestedItems[4]['query']['results']['quotedata']) {
        this.stock3mdata.unshift(nestedItems[4]['query']['results']['quotedata'][val][1])
        this.stock3mLabels.unshift(new Date(nestedItems[4]['query']['results']['quotedata'][val][0]).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
     
      }
    
     
      this.stock3mData = [{
        label: 'Price',
        data: this.stock3mdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.stock3mLabels = this.stock3mLabels;
      this.stock3mOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
  
      this.stock3mColors = [
        {
          borderColor: '#115dcd'
        }
      ];
//   ////////////////////////////////////////////////////////////////////
//       //////////////////NIfty 6 months///////////////////////////////

      this.stock6mdata.length = 0;
      this.stock6mLabels.length = 0;
      for (let val in nestedItems[5]['query']['results']['quotedata']) {
        this.stock6mdata.unshift(nestedItems[5]['query']['results']['quotedata'][val][1])
        this.stock6mLabels.unshift(new Date(nestedItems[5]['query']['results']['quotedata'][val][0]).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
       
      }
      
     
      this.stock6mData = [{
        label: 'Price',
        data: this.stock6mdata,
        borderWidth: 1,
        fill: false
      }];
    
      this.stock6mLabels = this.stock6mLabels;
      this.stock6mOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
    
      this.stock6mColors = [
        {
          borderColor: '#5a7f84'
        }
      ];
    
   
 


//  ///////////////////Nifty 1 year/////////////////////////////////////

      this.stock1yrdata.length = 0;
      this.stock1yrLabels.length = 0;
      for (let val in nestedItems[6]['query']['results']['quotedata']) {
        this.stock1yrdata.unshift(nestedItems[6]['query']['results']['quotedata'][val][1])
        this.stock1yrLabels.unshift(new Date(nestedItems[6]['query']['results']['quotedata'][val][0]).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
     
      }
    
  
      this.stock1yrData = [{
        label: 'Price',
        data: this.stock1yrdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.stock1yrLabels = this.stock1yrLabels;
      this.stock1yrOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
  
      this.stock1yrColors = [
        {
          borderColor: '#c154c1'
        }
      ];

     }, err => {
       console.log(err)
     })
   }

  
   getmcsharefrequent(mcsymbol,eqsymbol) {
    this.dataApi.getmcsharefrequent(this.mcsymbol,this.eqsymbol).subscribe(data6 => {
      let nestedItems = Object.keys(data6).map(key => {
        return data6[key];
      });
      
       /////////////To get Stock Today Resistances and Indicators/////////////
     this.stockDatasnrr1.length = 0;
     this.stockDatasnrr2.length = 0;
     this.stockDatasnrr3.length = 0;
     this.stockDatasnrs1.length = 0;
     this.stockDatasnrs2.length = 0;
     this.stockDatasnrs3.length = 0;

     let val = 0;
     while (val != 400) {
       val = val + 1
       this.stockDatasnrr1.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r1),
       this.stockDatasnrr2.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r2),
       this.stockDatasnrr3.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r3),
       this.stockDatasnrs3.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s3),
       this.stockDatasnrs2.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s2),
       this.stockDatasnrs1.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s1)
     }
  
     this.stockindicators.length = 0;
     for (let val in nestedItems[1]['data']['crossover']) {
       this.stockindicators.push({text1:nestedItems[1]['data']['crossover'][val]['displayValue'],text3:nestedItems[1]['data']['crossover'][val]['indication'],text2:nestedItems[1]['data']['crossover'][val]['period'],text4:nestedItems[1]['data']['crossover'][val]['period']})
     }
     
    for (let val1 in nestedItems[1]['data']['indicators']) {
      if (nestedItems[1]['data']['indicators'][val1]['id'] != 'bollinger') {
        this.stockindicators.push({ text1: nestedItems[1]['data']['indicators'][val1].displayName, text2: nestedItems[1]['data']['indicators'][val1].id, text3: nestedItems[1]['data']['indicators'][val1].indication, text4: nestedItems[1]['data']['indicators'][val1].value })
      }
    }

      //  ////////////To get Nifty Today Price///////////////////////
     
     
this.stockdata1.length = 0;
this.stockLabels.length = 0;
for (let val in nestedItems[6]['query']['results']['quotedata']) {
 this.stockdata1.unshift(nestedItems[6]['query']['results']['quotedata'][val][1])
 this.stockLabels.unshift((new Date(nestedItems[6]['query']['results']['quotedata'][val][0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })))

}


this.stockChartData = [{
 label: 'Price',
 data: this.stockdata1,
 borderWidth: 1,
 fill: false
},{ label: 'R1',
data: this.stockDatasnrr1,
borderWidth: 1,
bordercolor:'#D98880',
   fill: false
 },
 {
 label: 'R2',
 data: this.stockDatasnrr2,
 borderWidth: 1,
 borderColor: '#e3256b',
   fill: false
 }
 , {
   label: 'R3',
data: this.stockDatasnrr3,
   borderWidth: 1,
   borderColor: '#c84343',
fill: false}, {
 label: 'S1',
data: this.stockDatasnrs1,
 borderWidth: 1,
 borderColor: '#90b590',
fill: false}, {
label: 'S2',
data: this.stockDatasnrs2,
borderWidth: 1,
borderColor: '#09c51b',
fill: false}, {
label: 'S3',
data: this.stockDatasnrs3,
borderWidth: 1,
borderColor: '#375f00',
fill: false}];

this.stockChartLabels = this.stockLabels;
this.stockChartOptions = {
 scales: {
   yAxes: [{
     ticks: {
       beginAtZero: false
     }
   }]
 },
 legend: {
   display: true
 },
 elements: {
   point: {
     radius: 0
   }
 }
};

this.stockChartColors = [
 {
   borderColor: '#2d0365'
 }
];
    
      

  // /////////////////////////////EMA/SMA from Kite //////////////////////
  
 this.stockema.length = 0;
 this.stocksma.length = 0;

   this.stockema.push({ text1: nestedItems[0]['ema5'], text2: nestedItems[0]['ema10'], text3: nestedItems[0]['ema20'], text4: nestedItems[0]['ema30'], text5: nestedItems[0]['ema50'], text6: nestedItems[0]['ema100'], text7: nestedItems[0]['ema200'] })
   this.stocksma.push({text1:nestedItems[0]['sma5'],text2:nestedItems[0]['sma10'],text3:nestedItems[0]['sma20'],text4:nestedItems[0]['sma30'],text5:nestedItems[0]['sma50'],text6:nestedItems[0]['sma100'],text7:nestedItems[0]['sma200']})


     
  }, err => {
    console.log(err)
  })
}

gettrendlynestocks1(tlid,tlname,eqsymbol) {
  this.dataApi.gettrendlynestocks1(tlid,tlname,eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    //console.log(nestedItems)
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

    if (nestedItems[1]['macdsignal']['lt1']) {
      if (nestedItems[1]['macdsignal']['color1'] == 'positive') {
        this.positive.push({ text1: nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['value'] })
      }
      else if (nestedItems[1]['macdsignal']['color1'] == 'negative') {
        this.negative.push({ text1: nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['value'] })
      }
      else if (nestedItems[1]['macdsignal']['color1'] == 'neutral') {
        this.neutral.push({ text1: nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['value'] })
      }
    }

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

  
  //   this.brokertarget.push({ text1: nestedItems[1]['broker_avg_target']['lt1'], text2: nestedItems[1]['broker_avg_target']['st1'], text3: nestedItems[1]['broker_avg_target']['color1'] })
  //   console.log(this.brokertarget)
  //   this.ema_26.push({ text1: nestedItems[1]['ema_26']['lt1'], text2: nestedItems[1]['ema_26']['st1'], text3: nestedItems[1]['ema_26']['color1'], text4: nestedItems[1]['ema_26']['value'] })
  //   this.ema_50.push({text1:nestedItems[1]['ema_50']['lt1'], text2: nestedItems[1]['ema_50']['st1'], text3: nestedItems[1]['ema_50']['color1'],text4: nestedItems[1]['ema_50']['value']  })
  //   this.ema_100.push({text1:nestedItems[1]['ema_100']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['color1'],text4: nestedItems[1]['ema_100']['value']  })
  //   this.ema_200.push({text1:nestedItems[1]['ema_200']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['color1'],text4: nestedItems[1]['ema_200']['value']  })
  //   this.sma_30.push({text1:nestedItems[1]['sma_30']['lt1'], text2: nestedItems[1]['sma_30']['st1'], text3: nestedItems[1]['sma_30']['color1'],text4: nestedItems[1]['sma_30']['value'] })
  //   this.sma_50.push({text1:nestedItems[1]['sma_50']['lt1'], text2: nestedItems[1]['sma_50']['st1'], text3: nestedItems[1]['sma_50']['color1'],text4: nestedItems[1]['sma_50']['value']  })
  //   this.sma_100.push({text1:nestedItems[1]['sma_100']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['color1'],text4: nestedItems[1]['sma_100']['value']  })
  //   this.sma_200.push({text1:nestedItems[1]['sma_200']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['color1'],text4: nestedItems[1]['sma_200']['value']  })
  //   this.macd.push({text1:nestedItems[1]['macd']['lt1'], text2: nestedItems[1]['macd']['st1'], text3: nestedItems[1]['macd']['color1'],text4: nestedItems[1]['macd']['value']  })
  //   this.macdsignal.push({text1:nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['color1'],text4: nestedItems[1]['macdsignal']['value']  })
  //   this.rsi.push({text1:nestedItems[1]['rsi']['lt1'], text2: nestedItems[1]['rsi']['st1'], text3: nestedItems[1]['rsi']['color1'],text4: nestedItems[1]['rsi']['value']  })
  //   this.mfi.push({text1:nestedItems[1]['mfi']['lt1'], text2: nestedItems[1]['mfi']['st1'], text3: nestedItems[1]['mfi']['color1'],text4: nestedItems[1]['mfi']['value']  })
  //   if (nestedItems[1]['broker_recodown_6M']['lt1']) {
  //     this.brokerrecodowngrade.push({ text1: nestedItems[1]['broker_recodown_6M']['lt1'], text2: nestedItems[1]['broker_recodown_6M']['st1'], text3: nestedItems[1]['broker_recodown_6M']['color1'] })
  //  }
  //  else if (nestedItems[1]['broker_recoup_6M']['lt1']) {
  //    this.brokerrecoupgrade.push({ text1: nestedItems[1]['broker_recoup_6M']['lt1'], text2: nestedItems[1]['broker_recoup_6M']['st1'], text3: nestedItems[1]['broker_recoup_6M']['color1'] })
  //  }
  //  else if(nestedItems[1]['broker_targetup_6M']['lt1']){
  //    this.brokertargetupgrade.push({text1:nestedItems[1]['broker_targetup_6M']['lt1'], text2: nestedItems[1]['broker_targetup_6M']['st1'], text3: nestedItems[1]['broker_targetup_6M']['color1'] })
  //  }
  //  else if (nestedItems[1]['broker_targetdown_6M']['lt1']) {
  //    this.brokertargetdowngrade.push({ text1: nestedItems[1]['broker_targetdown_6M']['lt1'], text2: nestedItems[1]['broker_targetdown_6M']['st1'], text3: nestedItems[1]['broker_targetdown_6M']['color1'] })
  //  }
   }, err => {
    console.log(err)
  })
  }
 

gettrendlynestocks2(tlid) {
  this.dataApi.gettrendlynestocks2(tlid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    // this.dscore.push({ text1:nestedItems[1]['stockData'][6],text2:nestedItems[1]['stockData'][9] })
    // this.volscore.push({ text1:nestedItems[1]['stockData'][7],text2:nestedItems[1]['stockData'][10]  })
    // this.mscore.push({ text1:nestedItems[1]['stockData'][8],text2:nestedItems[1]['stockData'][11]  })
    // this.tllink="https://trendlyne.com/alerts/stock-alerts/"+this.eqsymbol+"/"+this.tlid+"/"+this.tlname
    console.log(nestedItems)
    this.stockData.length = 0;
    for (let val in (nestedItems[1]['eodData'])) {
      //let cal = 0;
      //while (val != 100) {
      //cal = cal + 1
      //while (new Date(nestedItems[1]['eodData'][val][0]).getTime() != 1635760860000) {
      
       // this.apexvolume.push([new Date(nestedItems[1]['eodData'][val][0]).getTime(), ])
      //this.apexohlc.push({ x: new Date(nestedItems[1]['eodData'][val][0]).getTime(), nestedItems[1]['eodData'][val][2], nestedItems[1]['eodData'][val][3], nestedItems[1]['eodData'][val][4], nestedItems[1]['eodData'][val][5],nestedItems[1]['eodData'][val][6] })
      this.stockData.push({x: new Date(nestedItems[1]['eodData'][val][0]).getTime(),open:nestedItems[1]['eodData'][val][2],high:nestedItems[1]['eodData'][val][3],low:nestedItems[1]['eodData'][val][4],close:nestedItems[1]['eodData'][val][5],volume:nestedItems[1]['eodData'][val][6]})
    }
    
    console.log(this.stockData)
   
  }, err => {
    console.log(err)
  })
}


gettrendlynestocks3(tlid) {
  this.dataApi.gettrendlynestocks3(tlid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    //console.log(nestedItems)
        
      
  }, err => {
    console.log(err)
  })
}

  
  
}



 



 