import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { ChartOptions } from 'chart.js';
//import 'chartjs-chart-financial';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { StockChart } from 'angular-highcharts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import * as  stocks from '../lists/stocklist'
import * as bqstock from '../lists/bqlist'
import * as etsector from '../lists/etsectorlist'
import * as etindex from '../lists/etindexlist'
import * as mcindex from '../lists/mcsectorlist'
//import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';

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
export interface stocksentimentstiles
{
    text1: string;
  text2: string;
}
export interface stockhcdatatile{
  x: number;
  y: number;
}
export interface stockcrossovertile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface stockcrossoverwtile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface stockcrossovermtile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
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
  stockcrossover: stockcrossovertile[] = [];
  stockcrossoverw: stockcrossoverwtile[] = [];
  stockcrossoverm: stockcrossovermtile[] = [];
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
  public stockdata: Array<number> = [];
  
  stockhcdata: stockhcdatatile[] = [];
  stocksentiments: stocksentimentstiles[] = [];
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<number> = [];
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
  public stockChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
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
    // this.getmcstock(this.mcsymbol, this.eqsymbol, this.stockid);
    // this.getmcstockfrequent(this.mcsymbol, this.eqsymbol);
    // setInterval(() => { this.getmcstockfrequent(this.mcsymbol, this.eqsymbol) }, 30000);
    // setInterval(() => { this. gettrendlynestocks2(this.tlid,this.tlname,this.eqsymbol) }, 10000);
    // this.gettrendlynestocks1(this.tlid, this.tlname, this.eqsymbol)
    // this. gettrendlynestocks2(this.tlid,this.tlname,this.eqsymbol)
    // this.gettrendlynestocks3(this.tlid)
     this.loadData(this.eqsymbol)
    // this.getmmmacd(this.stockid)
    this.getstocktoday(this.mcsymbol)
    this.getstockmaema(this.eqsymbol)
    setInterval(() => { this.getstocktoday(this.mcsymbol) }, 30000);
     this.getstocksentiments(this.mcsymbol);
    // this.getmmrsi(this.stockid)
    // this.getmmma(this.stockid)
    // this.getmmstockinfo(this.stockid)
    // this.getmmbb(this.stockid)
    // this.getmmkst(this.stockid)
    // this.getmmobv(this.stockid)
    // this.getmmdow(this.stockid)
    this.getniftysentiments()

    
  }

 
  
 
   
  
  loadData(eqsymbol): void {
    
    
 
    this.http.get('https://api.niftytrader.in/webapi/Live/livechartsBySymbol?symbol='+this.eqsymbol).subscribe(data5 => {
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

    getstocksentiments(mcsymbol) {
      this.stocksentiments.length = 0;
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/'+this.mcsymbol+'?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        console.log(nestedItems)
        this.stocksentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Daily"})
      }, err => {
        console.log(err)
      })
  
        this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/W/'+this.mcsymbol+'?field=RSI').subscribe(data5 => {
          let nestedItems = Object.keys(data5).map(key => {
            return data5[key];
          });
          
      this.stocksentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Weekly"}) 
       
    }, err => {
      console.log(err)
    })
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/M/'+this.mcsymbol+'?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
      });
      
        
        this.stocksentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Monthly"})
      }, err => {
        console.log(err)
      })
    }
    getstocktoday(mcsymbol) {
      ////////////To get Share Today Price///////////////////////
  
  this.http.get('https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId='+this.mcsymbol+'&resolution=1D').subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    console.log(nestedItems)
    this.stockdata.length = 0;
    this.stockLabels.length = 0;
    for (let val in nestedItems[6]) {
      this.stockdata.push(nestedItems[6][val]["value"])
      this.stockLabels.push(new Date(nestedItems[6][val]["time"] * 1000).toLocaleTimeString("en-IN"))
     // this.stockhcdate.push({x:(nestedItems[1].values[val]["_time"]),y:(nestedItems[1].values[val]["_value"])})     
    
    }
    console.log(this.stockLabels)
  }, err => {
    console.log(err)
  })
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/'+this.mcsymbol+'?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
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
          this.stockindicators.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
        }
      }
        
      
    
    
   
  
    this.lineChartData = [{
      label: 'Price',
      data: this.stockdata,
      borderWidth: 1,
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
    }];
 
    this.lineChartLabels = this.stockLabels;
 
 
    
  }, err => {
    console.log(err)
  })
    }
    getstockmaema(eqsymbol) {
      this.http.get('https://mo.streak.tech/api/tech_analysis/?timeFrame=day&stock=NSE%3A'+this.eqsymbol).subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        /////////////////////////////EMA/SMA from Kite //////////////////////
      
        this.stockema.length = 0;
        this.stocksma.length = 0;
  
        this.stockema.push({ text1: nestedItems[10], text2: nestedItems[5], text3: nestedItems[7], text4: nestedItems[9], text5: nestedItems[11], text6: nestedItems[6], text7: nestedItems[8] })
        this.stocksma.push({ text1: nestedItems[37], text2: nestedItems[32], text3: nestedItems[34], text4: nestedItems[36], text5: nestedItems[38], text6: nestedItems[33], text7: nestedItems[35] })
  
       
      }, err => {
        console.log(err)
      })
    }
   
}


  
  




 



 
