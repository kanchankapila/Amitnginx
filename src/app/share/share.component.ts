import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { ChartType, ChartOptions } from 'chart.js';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { StockChart } from 'angular-highcharts';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as  stocks from '../lists/stocklist'
import * as bqstock from '../lists/bqlist'
import * as etsector from '../lists/etsectorlist'
import * as etindex from '../lists/etindexlist'
import * as mcindex from '../lists/mcsectorlist'

//import { seriesData, seriesDataLinear } from "./ohlc";
import {from,Observable} from 'rxjs';



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
export interface hmsgtile {
  text: string;
  text1: string;
  text2: string;
  }
  export interface scoretile {
  text: string;
  text1: string;
  
  }
  export interface scorettile {
  text: string;
  text1: string;
  
  }
  export interface techscoretile {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  
  }
  export interface vscoretile {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  
  }
  export interface fscoretile {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  
  }
  export interface qscoretile {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
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
export interface stockhcdatatile{
  x: number;
  y: number;
}


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
  
export class ShareComponent implements OnInit {
  stockhighcharts: StockChart;
  totalAngularPackages;

  constructor( private http: HttpClient, private primengConfig: PrimeNGConfig, private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) {
    
  }
  
  public stockhcdate: Array<any> = [];
  
  public stockhcvalue: Array<any> = [];
  public stockdata1: Array<number> = [];
  public stockLabels: Array<any> = [];
  public stockChartData: Array<any> = [];
  public stockChartLabels: Array<number> = [];
  public stockpcrdata: Array<number> = [];
  public stockpcrtime: Array<any> = [];
  public stockvixdata: Array<number> = [];
  public stockvixtime: Array<any> = [];
  public stockData1: Array<any> = [];
  public stockOptions: any;
  public stock5ddata: Array<number> = [];
  public stock5dLabels: Array<any> = [];
  public stock5dData: Array<any> = [];
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
  public lineChartmacdmLabels: Array<any> = [];
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
  vscore: vscoretile[] = [];
  fscore: fscoretile[] = [];
  qscore: qscoretile[] = [];
  techscore: techscoretile[] = [];
  score: scoretile[] = [];
  scoret: scorettile[] = [];
  hmsg: hmsgtile[] = [];

  basicData: any;
  weatherdata: any;
  mmdelivcomp: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  companyname: string;
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
  stockhcdata: stockhcdatatile[] = [];
 
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
  public stockChartOptions:ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
     position: 'top'
              },
    
    elements: {
      point: {
        radius: 0
      }
    }
   
  };
  public stockChartColors = [
    {
      borderColor: '#2d0365'
    }
   ];
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
  periods: any
  options1: any;
  options2: any;

  options3: any;
  options4: any;
  options5: any;
  options6: any;
  options7: any;
  users = [];

  
  

  ngOnInit(): void {
    this.primengConfig.ripple = true;
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
      this.stockisin = this.stockList.filter(i => i.isin == params.stock)[0].isin
      this.mcsymbol = this.stockList.filter(i => i.isin == params.stock)[0].mcsymbol
      this.mcsymbolname = this.stockList.filter(i => i.isin == params.stock)[0].mcsymbol
      this.stockid = this.stockList.filter(i => i.isin == params.stock)[0].stockid
      this.bqnames = this.stockList.filter(i => i.isin == params.stock)[0].bqname
      this.companyid = this.stockList.filter(i => i.isin == params.stock)[0].companyid
      
    });
    this.getmcshare(this.mcsymbol, this.eqsymbol, this.stockid);
    this.getmcsharefrequent(this.mcsymbol, this.eqsymbol);
    setInterval(() => { this.getmcsharefrequent(this.mcsymbol, this.eqsymbol) }, 30000);
    setInterval(() => { this. gettrendlynestocks2(this.tlid,this.tlname,this.eqsymbol) }, 10000);
    this.gettrendlynestocks1(this.tlid, this.tlname, this.eqsymbol)
    this. gettrendlynestocks2(this.tlid,this.tlname,this.eqsymbol)
    this.gettrendlynestocks3(this.tlid)
    this.loadData()
    this.getmmmacd(this.stockid)
    this.getmmrsi(this.stockid)
    this.getmmma(this.stockid)
    this.getmmstockinfo(this.stockid)
    this.getmmbb(this.stockid)
    this.getmmkst(this.stockid)
    this.getmmobv(this.stockid)
    this.getmmdow(this.stockid)
    this.getniftysentiments()

    
  }

 
  
 
   
  
  loadData(): void {
    
    
 
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=1yr&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
    })
    
  }
  getniftysentiments() {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '^');
    
    this.http.get<any>('https://www.marketsmojo.com/technical_card/getCardInfo?sid=363433&se=nse&cardlist=sectRsi_rsi_w', { headers }).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
    });
    }
 
  getmcshare(mcsymbol,eqsymbol,stockid) {
    this.dataApi.getmcshare(this.mcsymbol,this.eqsymbol,this.stockid).subscribe(data5 => {
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
      
    
   
 


//  ///////////////////Nifty 1 year/////////////////////////////////////

      this.stock1yrdata.length = 0;
      this.stock1yrLabels.length = 0;
      for (let val in nestedItems[7]['data']['1Y']['data']) {
        this.stock1yrdata.push(nestedItems[7]['data']['1Y']['data'][val].price)
        this.stock1yrLabels.push(nestedItems[7]['data']['1Y']['data'][val].dt)
     
      }
    
  
      this.stock1yrData = [{
        label: 'Price',
        data: this.stock1yrdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.stock1yrLabels = this.stock1yrLabels;
     
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
      this.stockcrossover.length = 0;
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
      this.stockhcdata.length = 0;
      
for (let val in nestedItems[6]['query']['results']['quotedata']) {
 this.stockdata1.unshift(nestedItems[6]['query']['results']['quotedata'][val][1])
 this.stockLabels.unshift((new Date(nestedItems[6]['query']['results']['quotedata'][val][0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })))
  var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
  var offset= ISToffSet*60*1000;
  this.stockhcdata.unshift({x:(new Date((nestedItems[6]['query']['results']['quotedata'][val][0])).getTime()+offset),y:(nestedItems[6]['query']['results']['quotedata'][val][1])})     
  this.companyname=(nestedItems[6]['query']['results']['companydata']['companyname'])
}
      

      this.stockhighcharts = new StockChart({
        rangeSelector: {
          selected: 1
        },
        title: {
          text: this.companyname,
        },
     
        legend: {
          enabled: true,
          itemStyle: {
            fontSize: '11px',
            fontWeight: 'normal'
            }
        },    
  
      //   series: [{
      //     type: 'line',
      //     data: this.stockhcvalue,
      // }]
        series: [{
          tooltip: {
            valueDecimals: 2
          },
          name: this.companyname,	
          type: undefined,
          data: this.stockhcdata
        }]
      });
      
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
 

  gettrendlynestocks2(tlid,tlname,eqsymbol) {
    this.dataApi.gettrendlynestocks2(tlid,tlname,eqsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      // this.dscore.push({ text1:nestedItems[1]['stockData'][6],text2:nestedItems[1]['stockData'][9] })
      // this.volscore.push({ text1:nestedItems[1]['stockData'][7],text2:nestedItems[1]['stockData'][10]  })
      // this.mscore.push({ text1:nestedItems[1]['stockData'][8],text2:nestedItems[1]['stockData'][11]  })
      // this.tllink="https://trendlyne.com/alerts/stock-alerts/"+this.eqsymbol+"/"+this.tlid+"/"+this.tlname
        
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
  ////////////////////////////////Market Mojo///////////////////////////////
  getmmmacd(stockid) {
    this.dataApi.getmmmacd(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDatamacdm.push(nestedItems[0]["stock"][val].macd)
        this.lineChartDatasignalm.push(nestedItems[0]["stock"][val].signal)
        this.lineChartDatapricemacdm.push(nestedItems[0]["stock"][val].price)
        this.lineChartmacdmLabels.push(nestedItems[0]["stock"][val].date)
        this.lineChartDatagrademacdm.push(nestedItems[0]["stock"][val].grade)
      }
      this.options1 = {
        legend: {
          data: ['macd', 'signal', 'price'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartmacdmLabels,
  
  
        },
        yAxis: {},
        series: [
          {
            name: 'macd',
            type: 'line',
            data: this.lineChartDatamacdm,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'signal',
            type: 'line',
            data: this.lineChartDatasignalm,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'price',
            type: 'line',
            data: this.lineChartDatapricemacdm,
            animationDelay: (idx) => idx * 10 + 100,
          },
  
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
  
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmrsi(stockid) {
    this.dataApi.getmmrsi(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDatarsim.push(nestedItems[0]["stock"][val].rsi)
        this.lineChartDataubandm.push(nestedItems[0]["stock"][val].uband)
        this.lineChartDatalbandm.push(nestedItems[0]["stock"][val].lband)
        this.lineChartDatapricersim.push(nestedItems[0]["stock"][val].price)
        this.lineChartrsimLabels.push(nestedItems[0]["stock"][val].date)
      }
      this.options2 = {
        legend: {
          data: ['rsi', 'uband', 'lband'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartrsimLabels,
  
        },
        yAxis: {},
        series: [
          {
            name: 'rsi',
            type: 'line',
            data: this.lineChartDatarsim,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'uband',
            type: 'line',
            data: this.lineChartDataubandm,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'lband',
            type: 'line',
            data: this.lineChartDatalbandm,
            animationDelay: (idx) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
  
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmbb(stockid) {
    this.dataApi.getmmbb(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDatabbuband.push(nestedItems[0]["stock"][val].uband)
        this.lineChartDatabblband.push(nestedItems[0]["stock"][val].lband)
        this.lineChartDatabbdma20.push(nestedItems[0]["stock"][val].dma20)
        this.lineChartDatabbdate.push(nestedItems[0]["stock"][val].date)
        this.lineChartDatabbprice.push(nestedItems[0]["stock"][val].price)
      }
      this.options4 = {
        legend: {
          data: ['dma20', 'price', 'uband', 'lband'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartDatabbdate,
  
        },
        yAxis: {},
        series: [
          {
            name: 'dma20',
            type: 'line',
            data: this.lineChartDatabbdma20,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'price',
            type: 'line',
            data: this.lineChartDatabbprice,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'lband',
            type: 'line',
            data: this.lineChartDatabblband,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'uband',
            type: 'line',
            data: this.lineChartDatabbuband,
            animationDelay: (idx) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
  
  
  
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmma(stockid) {
    this.dataApi.getmmma(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDatamaday50m.push(nestedItems[0]["stock"][val].day50)
        this.lineChartDatamaday200m.push(nestedItems[0]["stock"][val].day200)
        this.lineChartDatamapricem.push(nestedItems[0]["stock"][val].price)
        this.lineChartDatamadate.push(nestedItems[0]["stock"][val].date)
        this.lineChartDatamaflag.push(nestedItems[0]["stock"][val].flag)
      }
      this.options3 = {
        legend: {
          data: ['day50', 'day200', 'price'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartDatamadate,
          //silent: false,
          //splitLine: {
          //show: false,
          //},
        },
        yAxis: {},
        series: [
          {
            name: 'day50',
            type: 'line',
            data: this.lineChartDatamaday50m,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'day200',
            type: 'line',
            data: this.lineChartDatamaday200m,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'price',
            type: 'line',
            data: this.lineChartDatamapricem,
            animationDelay: (idx) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
  
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmkst(stockid) {
    this.dataApi.getmmkst(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDatakst.push(nestedItems[0]["stock"][val].kst)
        this.lineChartDatakstsignal.push(nestedItems[0]["stock"][val].signal)
        this.lineChartDatakstprice.push(nestedItems[0]["stock"][val].price)
        this.lineChartDatakstdate.push(nestedItems[0]["stock"][val].date)
        //   this.lineChartrsimLabels.push(nestedItems[0]["stock"][val].date)
      }
      this.options5 = {
        legend: {
          data: ['kst', 'price', 'signal'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartDatakstdate,
          //silent: false,
          //splitLine: {
          //show: false,
          //},
        },
        yAxis: {},
        series: [
          {
            name: 'kst',
            type: 'line',
            data: this.lineChartDatakst,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'signal',
            type: 'line',
            data: this.lineChartDatakstsignal,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'price',
            type: 'line',
            data: this.lineChartDatakstprice,
            animationDelay: (idx) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
  
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmdow(stockid) {
    this.dataApi.getmmdow(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDatadowdate.push(nestedItems[0]["stock"][val].date)
        this.lineChartDatadowprice.push(nestedItems[0]["stock"][val].price)
        this.lineChartDatadowscore.push(nestedItems[0]["stock"][val].score)
        this.lineChartDatadowflag.push(nestedItems[0]["stock"][val].flag)
        //   this.lineChartrsimLabels.push(nestedItems[0]["stock"][val].date)
      }
      this.options7 = {
        legend: {
          data: ['score', 'price', 'flag'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartDatadowdate
        },
        //silent: false,
        //splitLine: {
        //show: false,
        //},
  
        yAxis: {},
        series: [
          {
            name: 'score',
            type: 'bar',
            data: this.lineChartDatadowscore,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'price',
            type: 'line',
            data: this.lineChartDatadowprice,
            animationDelay: (idx) => idx * 10 + 100,
          },
          {
            name: 'flag',
            type: 'line',
            data: this.lineChartDatadowflag,
            animationDelay: (idx) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmobv(stockid) {
    this.dataApi.getmmobv(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
      for (let val in nestedItems[0]["stock"]) {
  
        this.lineChartDataobvdate.push(nestedItems[0]["stock"][val].date)
        this.lineChartDataobv.push(nestedItems[0]["stock"][val].obv)
        this.lineChartDataobvprice.push(nestedItems[0]["stock"][val].price)
        //   this.lineChartDatapricersim.push(nestedItems[0]["stock"][val].price)
        //   this.lineChartrsimLabels.push(nestedItems[0]["stock"][val].date)
      }
      this.options6 = {
        legend: {
          data: ['obv', 'price'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: this.lineChartDataobvdate,
          //silent: false,
          //splitLine: {
          //show: false,
          //},
        },
        yAxis: {},
        series: [
          {
            name: 'obv',
            type: 'line',
            data: this.lineChartDataobv,
            animationDelay: (idx) => idx * 10,
          },
          {
            name: 'price',
            type: 'line',
            data: this.lineChartDataobvprice,
            animationDelay: (idx) => idx * 10 + 100,
          },
  
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };
  
  
  
  
    }, err => {
      console.log(err)
    }
    )
  }
  getmmstockinfo(stockid) {
    this.dataApi.getmmstockinfo(stockid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
  
  console.log(nestedItems)
  
      for (let val in nestedItems[5]) {
        this.hmsg.push({ text: nestedItems[5][val].header, text1: nestedItems[5][val].msg, text2: nestedItems[5][val].dir })
      }
      for (let val in nestedItems[4]["popup"]) {
        this.mmdelivcomp=nestedItems[4]["popup"][val] 
      }
      this.score.push({ text: nestedItems[2].score, text1: "Score" })
      this.scoret.push({ text: nestedItems[2].scoreText, text1: "Reco" })
  
      this.fscore.push({ text: nestedItems[2].f_clr, text1: nestedItems[2].f_dir, text2: nestedItems[2].f_pts, text3: nestedItems[2].f_txt, text4: "Financial" })
      this.qscore.push({ text: nestedItems[2].q_clr, text1: nestedItems[2].q_dir, text2: nestedItems[2].q_rank, text3: nestedItems[2].q_txt, text4: "Quality" })
      this.vscore.push({ text: nestedItems[2].v_clr, text1: nestedItems[2].v_rank, text2: nestedItems[2].v_txt, text3: "Valuation" })
      this.techscore.push({ text: nestedItems[2].tech_clr, text1: nestedItems[2].tech_score, text2: nestedItems[2].tech_txt, text3: "Tech" })
  
    }, err => {
      console.log(err)
    }
    )
  }
  
  
  
}



 



 
