import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';

import axios from "axios";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { StockChart } from 'angular-highcharts';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as  stocks from '../lists/stocklist'
import * as bqstock from '../lists/bqlist'
import * as etsector from '../lists/etsectorlist'
import * as etindex from '../lists/etindexlist'
import * as mcindex from '../lists/mcsectorlist'
import 'chartjs-adapter-date-fns';
import 'chartjs-chart-financial';
import { BaseChartDirective } from 'ng2-charts';
import { Chart,ChartOptions, ChartConfiguration, ChartType } from 'chart.js';
import { enUS } from 'date-fns/locale';
import { add, parseISO } from 'date-fns';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';

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
 
  
  }
export interface vscoretile {
  text: string;
  text1: string;
  text2: string;
}
  
  export interface fscoretile {
  text: string;
  text1: string;
  text2: string;

  
  }
  export interface qscoretile {
  text: string;
  text1: string;
  text2: string;
 
  }
  export interface dscoretile {
    text1: any;
    text2: any;
    }
    export interface volscoretile {
    text1: any;
    text2: any;
    }
    export interface mscoretile {
    text1: any;
    text2: any;
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
export interface macd1tile{
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
export interface rsi1tile{
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
export interface stockohlctile
{
  c: number;
  o: number;
  h: number;
  l: number;
  x: number;
  
  
}
export interface stockohlc1wtile
{
  c: number;
  o: number;
  h: number;
  l: number;
  x: number;
  
  
}
export interface etstockohlctodaytile
{
  c: number;
  o: number;
  h: number;
  l: number;
  x: number;
  
  
}
export interface brokerrecodowngradetile {

  text1: string;
  text2: string;
  text3: string;
  
  
  }
  export interface brokerrecoupgradetile {
  
  text1: string;
  text2: string;
  text3: string;
  
  
  }
  export interface brokertargettile {
  
  text1: string;
  text2: string;
  text3: string;
  
  
  }
  export interface ema_26tile {
  
  text1: string;
  text2: string;
    text3: string;
    text4: string;
  }
  export interface ema_50tile {
  
    text1: string;
    text2: string;
    text3: string;
    text4: string;
      
      
      }
  export interface ema_100tile {
  
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  }
  export interface ema_200tile {
  
  text1: string;
  text2: string;
    text3: string;
    text4: string;
  }
  export interface sma_30tile {
  
    text1: string;
    text2: string;
      text3: string;
      text4: string;
    }
    export interface sma_50tile {
    
      text1: string;
      text2: string;
      text3: string;
      text4: string;
        
        
        }
    export interface sma_100tile {
    
      text1: string;
      text2: string;
      text3: string;
      text4: string;
    }
    export interface sma_200tile {
    
    text1: string;
    text2: string;
      text3: string;
      text4: string;
  }
  export interface macd1tile {
  
    text1: string;
    text2: string;
      text3: string;
      text4: string;
    }
    export interface macdsignal1tile {
    
      text1: string;
      text2: string;
      text3: string;
      text4: string;
        
        
        }
    export interface rsi1tile {
    
      text1: string;
      text2: string;
      text3: string;
      text4: string;
  }
  export interface newscardtile {
    
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
  }
  export interface mfi1tile {
    
    text1: string;
    text2: string;
      text3: string;
      text4: string;
    }
  export interface brokertargetdowngradetile {
  
  text1: string;
  text2: string;
  text3: string;
  
  
  }
  export interface brokertargetupgradetile {
  
  text1: string;
  text2: string;
  text3: string;
  
  
  }
export interface divscoretile { text1: string; text2: string; }
export interface rbsscoretile {text1: string;text2: string;}
export interface kvscoretile { text1: string; text2: string; }
export interface kqscoretile { text1: string; text2: string; }
export interface omrscoretile {text1: string;text2: string;}
export interface growthscoretile { text1: string; text2: string; }
export interface healthscoretile {text1: string;text2: string;}
export interface ppscoretile {text1: string;text2: string;}
export interface sectorstockstile { text1: string; text2: string; text3: string; }
export interface stockdetailstile {text1: any;text2: any;text3: any;text4: any;}
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
  
export class ShareComponent implements OnInit {
  stockhighcharts: StockChart;
  visibleSidebar5;
  visibleSidebar6;
  cookieValue = '';


  public financialChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        time: {
          unit: 'day'
        },
        adapters: {
          date: {
            locale: enUS
          }
        },
        ticks: {
          source: 'auto'
        }
      }
    }
  };
  public financialChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public financialChartLegend = true;
  public financialChartType: ChartType = 'candlestick';
  public financialChartPlugins = [];

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  
  constructor(private cookieService:CookieService,private http: HttpClient, private primengConfig: PrimeNGConfig, private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) {
    Chart.register(CandlestickController, OhlcController, CandlestickElement, OhlcElement);
  
  
  
  }
  
  public stockhcdate: Array<any> = [];
  public stockohlc: stockohlctile[] = [];
  public stockohlc1w: stockohlc1wtile[] = [];
  public etstockohlctoday: etstockohlctodaytile[] =[] ;
  public stockhcvalue: Array<any> = [];
  public stockdata1: Array<number> = [];
  public stockLabels: Array<any> = [];
  
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
  stockcrossover: stockcrossovertile[] = [];
  stockcrossoverw: stockcrossoverwtile[] = [];
  stockcrossoverm: stockcrossovermtile[] = [];
  vscore: vscoretile[] = [];
  fscore: fscoretile[] = [];
  qscore: qscoretile[] = [];
  dscore: dscoretile[] = [];
volscore: volscoretile[] = [];
mscore: mscoretile[] = [];
  techscore: techscoretile[] = [];
  score: scoretile[] = [];
  scoret: scorettile[] = [];
  divscore: divscoretile[] = [];
  rbsscore: rbsscoretile[] = [];
  kvscore: kvscoretile[] = [];
  kqscore:kqscoretile[] = [];
  ppscore: ppscoretile[] = [];
  growthscore: growthscoretile[] = [];
  healthscore: healthscoretile[] = [];
  omrscore: omrscoretile[] = [];
  sectorstocks:sectorstockstile[] = [];
  
  
 
  hmsg: any;
  brokertarget: brokertargettile[] = [];
  brokertargetdowngrade: brokertargetdowngradetile[] = [];
  brokerrecoupgrade: brokerrecoupgradetile[] = [];
  brokerrecodowngrade: brokerrecodowngradetile[] = [];
  brokertargetupgrade: brokertargetupgradetile[] = [];
  ema_26:ema_26tile[] = [];
  ema_50:ema_50tile[] = [];
  ema_100:ema_100tile[] = [];
  ema_200: ema_200tile[] = [];
  sma_30:sma_30tile[] = [];
  sma_50:sma_50tile[] = [];
  sma_100:sma_100tile[] = [];
  sma_200: sma_200tile[] = [];
  macd1: macd1tile[] = [];
  macdsignal1:macdsignal1tile[] = [];
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
  stockdetails: stockdetailstile[] = [];
  public stockdata: Array<number> = [];
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
  public stockChartData: ChartConfiguration['data']
  public macdChartData: ChartConfiguration['data']
  public rsiChartData: ChartConfiguration['data']
  public maChartData: ChartConfiguration['data']
  public bbChartData: ChartConfiguration['data']
  public kstChartData: ChartConfiguration['data']
  public dowChartData: ChartConfiguration['data']
  public obvChartData: ChartConfiguration['data']
  public stockChartData1w: ChartConfiguration['data']
  public etstockChartData: ChartConfiguration['data']
  public stockChartOptions:ChartOptions = {
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
  kstmsg: any
  mamsg: any
  macdmsg: any
  obvmsg: any
  rsimsg:any
  stockname: any
  stockisin: any
  mcsymbol: any
  mcsymbolname: any
  stockid: any
  all_cookies: any;
  bqnames: any
  companyid: any
  periods: any
  

  
  

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
    this.gettrendlynestocks1(this.tlid,this.eqsymbol,this.tlname)
    this. gettrendlynestocks2(this.tlid,this.tlname,this.eqsymbol)
    this.gettrendlynestocks3(this.tlid)
    this.getshare3m(this.eqsymbol)
    this.getzerodha()
    this.getkotak()
    this.getkotakview(this.eqsymbol)
    this.getshare1m(this.eqsymbol)
    this.getmmdata(this.stockid)
    this.getshare6m(this.eqsymbol)
    this.getshare1w(this.eqsymbol)
    this.getstock1yr(this.eqsymbol)
    this.getntstockdetails()
    this.getmcstockrealtime() 
    this.getstocktoday(this.mcsymbol)
    this.getstockmaema(this.eqsymbol)
    setInterval(() => { this.getstocktoday(this.mcsymbol) }, 30000);
    this.getstocksentiments(this.mcsymbol);
    this.getmcstocktodayohlc(this.mcsymbol)
    this.getetsharetoday(this.eqsymbol)
   
    setInterval(() => { this.getetsharetoday(this.mcsymbol) }, 30000);
    setInterval(() => { this. getmcstockrealtime() }, 3000);
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
        this.kqscore.push({text1:nestedItems[0].qualityscore,text2:"Quality" }),
        this.rbsscore.push({ text1: nestedItems[0].rankbysector, text2: "Sector Rank" }),
        this.kvscore.push({ text1: nestedItems[0].valuescore, text2: "Value" }),
        this.ppscore.push({ text1: nestedItems[0].pastperformancescore, text2: "Past Performance" })
        this.sectorid = nestedItems[0].sectorid
      
      this.dataApi.getkotaksectorview(this.sectorid).subscribe(data => {
     

        let nestedItems = Object.keys(data).map(key => {
          return data[key];
        });
        console.log(nestedItems[0])
        this.sectorstocks.push({text1:nestedItems[0].companyshortname,text2:nestedItems[0].rankbysector,text3:nestedItems[0].overallmarketrank})
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
    getmcstockrealtime() {
   
      this.http.get<any>('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+this.mcsymbol).subscribe(data5 => {
      
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        this.stockdetails.length = 0;
        
       this.stockdetails.push({text1:nestedItems[2]['SC_FULLNM'],text2:nestedItems[2]['pricechange'],text3:nestedItems[2]['pricepercentchange'],text4:nestedItems[2]['pricecurrent']})
       
       
          
    
      })
   
      
      }
 

 
  getetsharetoday(eqsymbol) {
   
    this.http.get<any>('https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode='+this.eqsymbol+'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=10648&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company').subscribe(data5 => {
    
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.etstockohlctoday.length=0;
     
      for (let val in (nestedItems[0]['results']['quote'])){
        this.etstockohlctoday.push({x:new Date(nestedItems[0]['results']['quote'][val].Date).getTime(),o:nestedItems[0]['results']['quote'][val].Open,h:nestedItems[0]['results']['quote'][val].High,l:nestedItems[0]['results']['quote'][val].Low,c:nestedItems[0]['results']['quote'][val].Close})
      }

    this.etstockChartData  = {
      datasets: [ {
       label: this.stockname,
     data: this.etstockohlctoday
      } ]
     };
     
        
  
    })
 
    
    }
 
   
  
  getstock1yr(eqsymbol) {
   
   
    this.stockohlc.length = 0;
    
    this.http.get('https://api.niftytrader.in/webapi/Live/livechartsBySymbol?symbol='+this.eqsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      for (let val in nestedItems[3]) {
        this.stockohlc.push({ x: new Date(nestedItems[3][val]['created_at']).getTime(),o: nestedItems[3][val].open,h: nestedItems[3][val].high, l: nestedItems[3][val].low,c: nestedItems[3][val].close })
      }
      
        
        this.stockChartData  = {
     datasets: [ {
      label: this.stockname,
    data: this.stockohlc
     } ]
        };
      
       
          
    })
    
  }
  getshare3m(eqsymbol) {
    ////////////////Nifty 3 months/////////////////////////////
   
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+this.eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=3m').subscribe(data5 => {
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
      console.log(nestedItems)
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
      this.vscore.push ({text: nestedItems[2]['sectPrice_indiScale'][0].valuation_clr, text1: nestedItems[2]['sectPrice_indiScale'][0].valuation_rank, text2: nestedItems[2]['sectPrice_indiScale'][0].valuation_text})
      
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
      this.macdmsg=nestedItems[2]['sectMacd_macd_w']['text']
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
          labels:this.lineChartmacdmLabels
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
      this.rsimsg=nestedItems[2]['sectRsi_rsi_w']['text']
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
          labels:this.lineChartrsimLabels
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
      this.mamsg=nestedItems[2]['sectMa_ma_w']['text']
      
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
          labels:this.lineChartDatamadate
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
      this.bbmsg=nestedItems[2]['sectBb_bb_w']['text']
      
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
          labels:this.lineChartDatabbdate
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
      this.kstmsg=nestedItems[2]['sectKst_kst_w']['text']
      
  
      this.kstChartData = {
        
        datasets: [
          {
            label: 'KST',
            data: this.lineChartDatakst,
          },
          {
            label: 'Signal',
            data:this.lineChartDatakstsignal
          },
          {
            label: 'Price',
            data: this.lineChartDatakstprice
          }
         ],
          labels:this.lineChartDatakstdate
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
      this.dowmsg=nestedItems[2]['sectDow_dow_w']['text']
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
          labels:this.lineChartDatadowdate
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
      this.obvmsg=nestedItems[2]['sectObv_obv_w']['text']
      
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
          labels:this.lineChartDataobvdate
           };
     
  
  
  
    
    }), err => {
      console.log(err)
    }
    
  }
  trackByFuntion(index, item) {
    // console.log( 'TrackBy:', item.text2, 'at index', index );
     return item.text2
   }
   trackByFuntion1(index1, item1) {
     //console.log( 'TrackBy:', item1.text1, 'at index', index1);
     return item1.text1
    }
   trackByFuntion2(index2, item2) {
     //console.log( 'TrackBy:', item2.text1, 'at index', index2 );
     return item2.text1
    }
   trackByFuntion3(index3, item3) {
     //console.log( 'TrackBy:', item3.text1, 'at index', index3 );
     return item3.text1;
    }
   trackByFuntion4(index4, item4) {
     //console.log( 'TrackBy:', item4.text2, 'at index', index4 );
     item4.text2;
    }
   trackByFuntion5(index5, item5) {
     //console.log( 'TrackBy:', item5.text1, 'at index', index5 );
     return item5.text1;
    }
   trackByFuntion6(index6, item6) {
     //console.log( 'TrackBy:', item6.text1, 'at index', index6 );
      return item6.text1;
    }
   trackByFuntion7(index7, item7) {
     //console.log( 'TrackBy:', item7.text1, 'at index', index7 );
     return item7.text1;
    }
   trackByFuntion8(index8, item8) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item8.text3 ;
   }
   trackByFuntion9(index9, item9) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item9.text3 ;
   }
   trackByFuntion10(index10, item10) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item10.text3 ;
   }
   trackByFuntion11(index11, item11) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item11.text3 ;
    }
   
     
     trackByFuntion12(index12, item12) {
       //console.log( 'TrackBy:', item2.text1, 'at index', index2 );
       return item12.text1
      }
     trackByFuntion13(index13, item13) {
       //console.log( 'TrackBy:', item3.text1, 'at index', index3 );
       return item13.text1;
      }
     trackByFuntion14(index14, item14) {
       //console.log( 'TrackBy:', item4.text2, 'at index', index4 );
       item14.text2;
      }
     trackByFuntion15(index15, item15) {
       //console.log( 'TrackBy:', item5.text1, 'at index', index5 );
       return item15.text1;
      }
     trackByFuntion16(index16, item16) {
       //console.log( 'TrackBy:', item6.text1, 'at index', index6 );
        return item16.text1;
      }
     trackByFuntion17(index17, item17) {
       //console.log( 'TrackBy:', item7.text1, 'at index', index7 );
       return item17.text1;
      }
     trackByFuntion18(index18, item18) {
       //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
       return item18.text3 ;
     }
     trackByFuntion19(index19, item19) {
       //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
       return item19.text3 ;
     }
     trackByFuntion20(index20, item20) {
       //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
       return item20.text3 ;
     }
     trackByFuntion21(index21, item21) {
       //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
       return item21.text3 ;
      }trackByFuntion22(index22, item22) {
    // console.log( 'TrackBy:', item.text2, 'at index', index );
     return item22.text2
   }
   trackByFuntion23(index23, item23) {
     //console.log( 'TrackBy:', item1.text1, 'at index', index1);
     return item23.text1
    }
   trackByFuntion24(index24, item24) {
     //console.log( 'TrackBy:', item2.text1, 'at index', index2 );
     return item24.text1
    }
   trackByFuntion25(index25, item25) {
     //console.log( 'TrackBy:', item3.text1, 'at index', index3 );
     return item25.text1;
    }
   trackByFuntion26(index26, item26) {
     //console.log( 'TrackBy:', item4.text2, 'at index', index4 );
     item26.text2;
    }
   trackByFuntion27(index27, item27) {
     //console.log( 'TrackBy:', item5.text1, 'at index', index5 );
     return item27.text1;
    }
   trackByFuntion28(index28, item28) {
     //console.log( 'TrackBy:', item6.text1, 'at index', index6 );
      return item28.text1;
    }
   trackByFuntion29(index29, item29) {
     //console.log( 'TrackBy:', item7.text1, 'at index', index7 );
     return item29.text1;
    }
   trackByFuntion30(index30, item30) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item30.text3 ;
   }
   trackByFuntion31(index31, item31) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item31.text3 ;
   }
   trackByFuntion32(index32, item32) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item32.text3 ;
   }
   trackByFuntion33(index33, item33) {
     //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
     return item33.text3 ;
   }
   trackByFuntion34(index34, item34) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item34.divscore ;
   }
   trackByFuntion35(index35, item35) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item35.text3 ;
   }
   trackByFuntion36(index36, item36) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item36.text3 ;
   }
   trackByFuntion37(index37, item37) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item37.text3 ;
   }
   trackByFuntion38(index38, item38) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item38.text3 ;
   }
   trackByFuntion39(index39, item39) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item39.text3 ;
   }
   trackByFuntion40(index40, item40) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item40.text3 ;
   }
  
   trackByFuntion41(index41, item41) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item41.text3 ;
   }
   trackByFuntion42(index42, item42) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item42.text3 ;
   }
   
  getshare1w(eqsymbol) {
         ////////////////Nifty 1 Week/////////////////////////////
        
         this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+this.eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1w').subscribe(data5 => {
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
   
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+this.eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1m').subscribe(data5 => {
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
   
    this.http.get('https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+this.eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=6m').subscribe(data5 => {
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
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/'+this.mcsymbol+'?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        
      
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
    getmcstocktodayohlc(mcsymbol) {
    
      this.http.get('https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId=' + this.mcsymbol + '&resolution=1D').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
       
      });
      }
      getstocktoday(mcsymbol) {
      ////////////To get Share Today Price///////////////////////
  
  this.http.get('https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId='+this.mcsymbol+'&resolution=1D').subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
  
    this.stockdata.length = 0;
    this.stockLabels.length = 0;
    for (let val in nestedItems[6]) {
      this.stockdata.push(nestedItems[6][val]["value"])
      this.stockLabels.push(new Date(nestedItems[6][val]["time"] * 1000).toLocaleTimeString("en-IN"))
     // this.stockhcdate.push({x:(nestedItems[1].values[val]["_time"]),y:(nestedItems[1].values[val]["_value"])})     
    
    }

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
        if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger' ) {
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

  getntstockdetails() {
   
    
      this.dataApi.getntstockdetails(this.eqsymbol).subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
              return data5[key];
        });
        console.log(nestedItems)
        this.nr7=(nestedItems[3].stocktrend['nr7_today'])
        this.delivperc.length = 0;
        this.delivperctime.length = 0;
        for (let val in nestedItems[3].priceTable) {
          this.delivperc.unshift(nestedItems[3].priceTable[val].delivery_percentage)
          this.delivperctime.unshift(nestedItems[3].priceTable[val].created_at)
        }
        this.DelivData = [{
          label: 'Delivery Percentage',
          data: this.delivperc,
          borderWidth: 1,
          fill: false
        }];
     
        this.DelivLabels = this.delivperctime;
     
        for (let val in nestedItems[3].priceTable) {
          this.volume.unshift(nestedItems[3].priceTable[val].volume)
          this.volumetime.unshift(nestedItems[3].priceTable[val].created_at)
        }
        this.VolumeData = [{
          label: 'Volume',
          data: this.volume,
          borderWidth: 1,
          fill: false
        }];
     
        this.VolumeLabels = this.volumetime;
     
       
      }, err => {
        console.log(err)
      }
      )
    
  }
    gettrendlynestocks1(tlid,eqsymbol,tlname) {
      this.dataApi.gettrendlynestocks1(tlid,eqsymbol,tlname).subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
     
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
    
      
        this.brokertarget.push({ text1: nestedItems[1]['broker_avg_target']['lt1'], text2: nestedItems[1]['broker_avg_target']['st1'], text3: nestedItems[1]['broker_avg_target']['color1'] })
        console.log(this.brokertarget)
        this.ema_26.push({ text1: nestedItems[1]['ema_26']['lt1'], text2: nestedItems[1]['ema_26']['st1'], text3: nestedItems[1]['ema_26']['color1'], text4: nestedItems[1]['ema_26']['value'] })
        this.ema_50.push({text1:nestedItems[1]['ema_50']['lt1'], text2: nestedItems[1]['ema_50']['st1'], text3: nestedItems[1]['ema_50']['color1'],text4: nestedItems[1]['ema_50']['value']  })
        this.ema_100.push({text1:nestedItems[1]['ema_100']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['color1'],text4: nestedItems[1]['ema_100']['value']  })
        this.ema_200.push({text1:nestedItems[1]['ema_200']['lt1'], text2: nestedItems[1]['ema_100']['st1'], text3: nestedItems[1]['ema_100']['color1'],text4: nestedItems[1]['ema_200']['value']  })
        this.sma_30.push({text1:nestedItems[1]['sma_30']['lt1'], text2: nestedItems[1]['sma_30']['st1'], text3: nestedItems[1]['sma_30']['color1'],text4: nestedItems[1]['sma_30']['value'] })
        this.sma_50.push({text1:nestedItems[1]['sma_50']['lt1'], text2: nestedItems[1]['sma_50']['st1'], text3: nestedItems[1]['sma_50']['color1'],text4: nestedItems[1]['sma_50']['value']  })
        this.sma_100.push({text1:nestedItems[1]['sma_100']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['color1'],text4: nestedItems[1]['sma_100']['value']  })
        this.sma_200.push({text1:nestedItems[1]['sma_200']['lt1'], text2: nestedItems[1]['sma_100']['st1'], text3: nestedItems[1]['sma_100']['color1'],text4: nestedItems[1]['sma_200']['value']  })
        this.macd1.push({text1:nestedItems[1]['macd']['lt1'], text2: nestedItems[1]['macd']['st1'], text3: nestedItems[1]['macd']['color1'],text4: nestedItems[1]['macd']['value']  })
        this.macdsignal1.push({text1:nestedItems[1]['macdsignal']['lt1'], text2: nestedItems[1]['macdsignal']['st1'], text3: nestedItems[1]['macdsignal']['color1'],text4: nestedItems[1]['macdsignal']['value']  })
        this.rsi1.push({text1:nestedItems[1]['rsi']['lt1'], text2: nestedItems[1]['rsi']['st1'], text3: nestedItems[1]['rsi']['color1'],text4: nestedItems[1]['rsi']['value']  })
        this.mfi1.push({text1:nestedItems[1]['mfi']['lt1'], text2: nestedItems[1]['mfi']['st1'], text3: nestedItems[1]['mfi']['color1'],text4: nestedItems[1]['mfi']['value']  })
        if (nestedItems[1]['broker_recodown_6M']['lt1']) {
          this.brokerrecodowngrade.push({ text1: nestedItems[1]['broker_recodown_6M']['lt1'], text2: nestedItems[1]['broker_recodown_6M']['st1'], text3: nestedItems[1]['broker_recodown_6M']['color1'] })
       }
       else if (nestedItems[1]['broker_recoup_6M']['lt1']) {
         this.brokerrecoupgrade.push({ text1: nestedItems[1]['broker_recoup_6M']['lt1'], text2: nestedItems[1]['broker_recoup_6M']['st1'], text3: nestedItems[1]['broker_recoup_6M']['color1'] })
       }
       else if(nestedItems[1]['broker_targetup_6M']['lt1']){
         this.brokertargetupgrade.push({text1:nestedItems[1]['broker_targetup_6M']['lt1'], text2: nestedItems[1]['broker_targetup_6M']['st1'], text3: nestedItems[1]['broker_targetup_6M']['color1'] })
       }
       else if (nestedItems[1]['broker_targetdown_6M']['lt1']) {
         this.brokertargetdowngrade.push({ text1: nestedItems[1]['broker_targetdown_6M']['lt1'], text2: nestedItems[1]['broker_targetdown_6M']['st1'], text3: nestedItems[1]['broker_targetdown_6M']['color1'] })
       }
       }, err => {
        console.log(err)
      })
      }
     
    
    gettrendlynestocks2(tlid,tlname,eqsymbol) {
      this.dataApi.gettrendlynestocks2(tlid,tlname,eqsymbol).subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        
         
         this.dscore.push({ text1:nestedItems[1]['stockData'][6],text2:nestedItems[1]['stockData'][9] })
         this.volscore.push({ text1:nestedItems[1]['stockData'][7],text2:nestedItems[1]['stockData'][10]  })
         this.mscore.push({ text1:nestedItems[1]['stockData'][8],text2:nestedItems[1]['stockData'][11]  })
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
      getmmstockinfo(stockid) {
        this.http.get('https://frapi.marketsmojo.com/stocks_stocksid/header_info?sid='+this.stockid+'&exchange=1').subscribe(data5 => {
          let nestedItems = Object.keys(data5).map(key => {
            return data5[key];
          });
      
      console.log("mmstockinfo"+nestedItems)
      
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


  
  




 



 
