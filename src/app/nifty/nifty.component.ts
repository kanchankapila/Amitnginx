import { Component, OnInit,ViewChild, Injectable } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ILoadedEventArgs, ChartTheme, ChartAnnotationSettingsModel, TechnicalIndicator } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs'
import axios from 'axios';
import {from} from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as  stocks from '../lists/stocklist'
//import { StockChart } from 'angular-highcharts';
import {ChartOptions } from 'chart.js';

export interface nifty50stockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  
}
export interface stockhcdatatile{
  x: number;
  y: number;
}
export interface nifty50crossovertile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface nifty50crossoverwtile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface nifty50crossovermtile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface nifty50indicatorstile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface nifty50indicatorswtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface nifty50indicatorsmtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface nifty50sentimentstiles
{
    text1: string;
  text2: string;
}

export interface nifty50bbtile{
  text1: string;
  text2: string;
  
 
}
export interface niftyematile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
}
export interface niftysmatile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  
 
}
export interface pcrtile{x: any;y: string;}
export interface niftytile{x: any;y: string;color:any;}


@Component({
  selector: 'app-nifty',
  templateUrl: './nifty.component.html',
  styleUrls: ['./nifty.component.scss']
})
export class NiftyComponent implements OnInit {
 
  a: any;
  b: any;
  c:any;
 
  constructor(private http: HttpClient, private dataApi: DataapiService, private window: Window, private primengConfig: PrimeNGConfig, private vps: ViewportScroller) {
    
    const instance = axios.create({
      //baseURL: 'https://www.nseindia.com/',
     // timeout: 1000,
     headers: {'Access-Control-Allow-Origin': '*'}
    });
  }
  
  //stockhighcharts: StockChart;
  public stockhcdate: Array<any> = [];
  public nifty50data: Array<number> = [];
  public nifty50Labels: Array<any> = [];
  public niftypcrdata: Array<number> = [];
  public niftypcrtime: Array<any> = [];
  public niftyvixdata: Array<number> = [];
  public niftyvixtime: Array<any> = [];
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<number> = [];
  
  public pointColorMapping:string;
  public nifty505ddata: Array<number> = [];
  public nifty505dLabels: Array<any> = [];
  public lineChart5dData: Array<any> = [];
  public lineChart5dLabels: Array<number> = [];
  public nifty501mdata: Array<number> = [];
  public nifty501mLabels: Array<any> = [];
  public lineChart1mData: Array<any> = [];
  public lineChart1mLabels: Array<number> = [];
  public nifty503mdata: Array<number> = [];
  public nifty503mLabels: Array<any> = [];
  public lineChart3mData: Array<any> = [];
  public lineChart3mLabels: Array<number> = [];
  public nifty506mdata: Array<number> = [];
  public nifty506mLabels: Array<any> = [];
  public lineChart6mData: Array<any> = [];
  public lineChart6mLabels: Array<number> = [];
  public nifty501yrdata: Array<number> = [];
  public nifty501yrLabels: Array<any> = [];
  public lineChart1yrData: Array<any> = [];
  public lineChart1yrLabels: Array<number> = [];
  public lineChartpcrData: Array<any> = [];
  public lineChartpcrLabels: Array<number> = [];
  public lineChartpcrOptions: any;
  public lineChartvixData: Array<any> = [];
  public lineChartvixLabels: Array<number> = [];
  public lineChartvixOptions: any;
  axis1:Object[];
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  chart: any;
  date: any;
  stockisin: any;
  //tlid:any
  tlid = '1887';
  tlname = 'NIFTY50';
  eqsymbol='nifty-50'
  nifty50sentiments: nifty50sentimentstiles[] = [];
  pcr:pcrtile[]=[];
  nifty:niftytile[]=[];
  nifty50stocks: nifty50stockstiles[] = [];
  nifty50crossover: nifty50crossovertile[] = [];
  nifty50crossoverw: nifty50crossoverwtile[] = [];
  nifty50crossoverm: nifty50crossovermtile[] = [];
  nifty50indicators: nifty50indicatorstile[] = [];
  nifty50indicatorsw: nifty50indicatorswtile[] = [];
  nifty50indicatorsm: nifty50indicatorsmtile[] = [];
  nifty50bb: nifty50bbtile[] = [];
  niftyema: niftyematile[] = [];
  niftysma: niftysmatile[] = [];
 
  public lineChartDatan50snrr1: Array<number> = [];
  public lineChartDatan50snrr2: Array<number> = [];
  public lineChartDatan50snrr3: Array<number> = [];
  public lineChartDatan50snrs1: Array<number> = [];
  public lineChartDatan50snrs2: Array<number> = [];
  public lineChartDatan50snrs3: Array<number> = [];
  public lineChartLabelsn50snrr1: Array<any> = [];
  public lineChartLabelsn50nrr3: Array<any> = [];
  public lineChartLabelsn50snrr2: Array<any> = [];
  public lineChartLabelsn50snrs1: Array<any> = [];
  public lineChartLabelsn50snrs2: Array<any> = [];
  public lineChartLabelsn50snrs3: Array<any> = [];
  public lineChartDatan50snrr1w: Array<number> = [];
  public lineChartDatan50snrr2w: Array<number> = [];
  public lineChartDatan50snrr3w: Array<number> = [];
  public lineChartDatan50snrs1w: Array<number> = [];
  public lineChartDatan50snrs2w: Array<number> = [];
  public lineChartDatan50snrs3w: Array<number> = [];
  public lineChartLabelsn50snrr1w: Array<any> = [];
  public lineChartLabelsn50nrr3w: Array<any> = [];
  public lineChartLabelsn50snrr2w: Array<any> = [];
  public lineChartLabelsn50snrs1w: Array<any> = [];
  public lineChartLabelsn50snrs2w: Array<any> = [];
  public lineChartLabelsn50snrs3w: Array<any> = [];
  public lineChartDatan50snrr1m: Array<number> = [];
  public lineChartDatan50snrr2m: Array<number> = [];
  public lineChartDatan50snrr3m: Array<number> = [];
  public lineChartDatan50snrs1m: Array<number> = [];
  public lineChartDatan50snrs2m: Array<number> = [];
  public lineChartDatan50snrs3m: Array<number> = [];
  public lineChartLabelsn50snrr1m: Array<any> = [];
  public lineChartLabelsn50nrr3m: Array<any> = [];
  public lineChartLabelsn50snrr2m: Array<any> = [];
  public lineChartLabelsn50snrs1m: Array<any> = [];
  public lineChartLabelsn50snrs2m: Array<any> = [];
  public lineChartLabelsn50snrs3m: Array<any> = [];
  public data2: Object[] = []; 
  public data3: Object[] = []; 
  public marker1:any;
  basicData3: any;
  basicOptions3: any;
  stockList: any
  public  lineChartColors = [
    {
      borderColor: '#2d0365'
    }
  ];
  
  public lineChartType: ChartType = 'line';
  public lineChartOptions:ChartOptions = {
    responsive: true,
    // maintainAspectRatio:false,
    scales: {
      
    },elements: {
      point: {
        radius: 0
      }
    }
    
  };
 
 




  ngOnInit(): void {
           


     
    this.primengConfig.ripple = true;
    this.stockList = stocks.default.Data
    this.getniftypcr();
    this.getmcnifty50stocks();
    this.getnifty50smaema();
    this.getnifty5d();
    this.getnifty1m();
    this.getnifty3m();
    this.getnifty6m();
    this.getniftytoday()
    this.getniftyvix()
    
    this.getniftysentiments()
    this.gettrendlynenifty()
    this.getnifty1yr();
    this.getniftytoday();
    setInterval(() => { this.getnifty50smaema() }, 30000);
    setInterval(() => { this.getmcnifty50stocks()}, 30000);
    setInterval(() => { this.getniftyvix() }, 30000);
     setInterval(() => { this.getniftypcr()}, 30000);
    
    setInterval(() => { this.getniftytoday() }, 30000);

  
  }
  public annotations: ChartAnnotationSettingsModel[] = [
    {
       
        coordinateUnits: 'Point',
        verticalAlignment: 'Top',
       
    }, {
       
        coordinateUnits: 'Point',
        yAxisName: 'yAxis'}
       
];
// public data2: Object[] =  [
//   { x: new Date(2017, 11, 20).getTime(), y: 1500 }, { x: new Date(2017, 11, 21).getTime(), y: 1300 },
//   { x: new Date(2017, 11, 22).getTime(), y: 1200 }, { x: new Date(2017, 11, 26).getTime(), y: 1450 },
//   { x: new Date(2017, 11, 27).getTime(), y: 1320 }, { x: new Date(2018, 0, 2).getTime(), y: 1470 },
//   { x: new Date(2018, 0, 3).getTime(), y: 1490 }, { x: new Date(2018, 0, 4).getTime(), y: 1390 },
//   { x: new Date(2018, 0, 5).getTime(), y: 1200 }, { x: new Date(2018, 0, 8).getTime(), y: 1320 }
// ];

//     public data1: Object[] = [
//         { x: 'Sun', y: 30 }, { x: 'Mon', y: 28 },
//         { x: 'Tue', y: 29 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 33 }, { x: 'Fri', y: 32 },
//         { x: 'Sat', y: 34 }
//     ];

    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        interval: 1,
        labelIntersectAction: 'Rotate90',
        majorGridLines: { width: 0 }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        // minimum: 0, maximum: 2, interval: 0.1,
        lineStyle: { width: 0 },
        labelFormat: '{value}'
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };

    // public width: string = Browser.isDevice ? '100%' : '90%';
    // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
    // custom code end
    public legend: Object = {
        visible: false
    }
    public marker: Object 
    public axis: Object[] 
    public majorGridLines: Object = {
        width: 0
    };
    public tooltip: Object = {
        enable: true
    };
    public title: string = 'Nifty vs PCR';
   
 
  gettrendlynenifty() {
    this.dataApi.gettrendlynenifty().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
   
      console.log(nestedItems);
     })
  
       
   
  }
  
  getniftysentiments() {
    this.nifty50sentiments.length = 0;
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3BNSX?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.nifty50sentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Daily"})
    }, err => {
      console.log(err)
    })

      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3BNSX?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        
    this.nifty50sentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Weekly"}) 
     
  }, err => {
    console.log(err)
  })
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3BNSX?field=RSI').subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
    return data5[key];
    });
    
      
      this.nifty50sentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Monthly"})
    }, err => {
      console.log(err)
    })
  }
  
  getniftyvix() {
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=36&range=1d&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
        /////////////////////Nifty Vix/////////////////////////////////
        this.niftyvixdata.length = 0;
        this.niftyvixtime.length = 0;
        for (let val in nestedItems[1]['values']) {
          this.niftyvixdata.push(nestedItems[1]['values'][val]['_value'])
          this.niftyvixtime.push(nestedItems[1]['values'][val]['_time'])
        }
        
        this.lineChartvixData = [{
          label: 'VIX',
          data: this.niftyvixdata,
          borderWidth: 1,
          fill: false
        }];
  
        this.lineChartvixLabels = this.niftyvixtime;
      
      }, err => {
        console.log(err)
      })
  }  
   getniftypcr() {
    
      this.dataApi.getntniftypcrdetails().subscribe(data5 => {
        let nestedItems= Object.keys(data5).map(key => {
          return data5[key];
        });

        console.log(nestedItems)
  
        // console.log(this.data2)
  //      /////////////////////NIfty PCR from niftytraders////////////////////
       this.niftypcrdata.length = 0;
        this.niftypcrtime.length = 0;
        this.pcr.length = 0;
        this.nifty.length = 0;
       for (let val in nestedItems[3]['data']) {
         this.pcr.push({x:new Date(nestedItems[3]['data'][val]['time']).getTime(),y:nestedItems[3]['data'][val]['pcr']})
         if (nestedItems[3]['data'][val]['index_close'] > 17600) {
         this.nifty.push({x:new Date(nestedItems[3]['data'][val]['time']).getTime(),y:nestedItems[3]['data'][val]['index_close'],color:'red'})
          this.pointColorMapping = 'color'; 
         this.axis1=[{
          majorGridLines: { width: 0 },
          majorTickLines: { width: 5 },
          rowIndex: 0, opposedPosition: true,
          minimum: this.a , maximum:this.b , interval: 30,
          lineStyle: { width: 10 ,color: 'red' },
         
          name: 'yAxis',
          labelFormat: '{value}'
      }];
     this.marker1={
      visible: true,
      width: 2,
      height: 2,
      border: { width: 2, color: 'red' }
  }; 
      this.marker=this.marker1;
      this.axis=this.axis1
        } else if (nestedItems[3]['data'][val]['index_close'] < 17600){
          this.nifty.push({x:new Date(nestedItems[3]['data'][val]['time']).getTime(),y:nestedItems[3]['data'][val]['index_close'],color:'green'})
           this.pointColorMapping = 'color';
          this.axis1=[{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 5 },
            rowIndex: 0, opposedPosition: true,
            minimum: this.a , maximum:this.b , interval: 30,
            lineStyle: { width: 10 ,color: 'green' },
           
            name: 'yAxis',
            labelFormat: '{value}'
        }];
        this.marker1={
          visible: true,
          width: 10,
          height: 10,
          border: { width: 5, color: 'green' }
      }; 
          this.marker1=this.marker;
       
    
        this.axis=this.axis1
         }
         this.niftypcrdata.push(nestedItems[3]['data'][val]['pcr'])
        this.niftypcrtime.push(new Date(nestedItems[3]['data'][val]['time']).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
        this.a=(nestedItems[3]['data'][val]['index_close']-100)
        
        this.b=(nestedItems[3]['data'][val]['index_close']+1000)
        
       }
    
      this.data2=this.pcr;
      this.data3=this.nifty;
      console.log(this.data3)
      
       this.lineChartpcrData = [{
        label: 'PCR',
        data: this.niftypcrdata,
        borderWidth: 1,
         fill: false,
         maintainAspectRatio: false
      }];

      this.lineChartpcrLabels = this.niftypcrtime;
    }
   
      , err => {
        console.log(err)
      })
    }
  
  getnifty50smaema() {
    this.http.get('https://mo.streak.tech/api/tech_analysis/?timeFrame=day&stock=INDICES%3ANIFTY%2050').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      /////////////////////////////EMA/SMA from Kite //////////////////////
    
      this.niftyema.length = 0;
      this.niftysma.length = 0;

      this.niftyema.push({ text1: nestedItems[10], text2: nestedItems[5], text3: nestedItems[7], text4: nestedItems[9], text5: nestedItems[11], text6: nestedItems[6], text7: nestedItems[8] })
      this.niftysma.push({ text1: nestedItems[37], text2: nestedItems[32], text3: nestedItems[34], text4: nestedItems[36], text5: nestedItems[38], text6: nestedItems[33], text7: nestedItems[35] })

     
    }, err => {
      console.log(err)
    })
  }
 
 
 
  getmcnifty50stocks() {
    this.http.get('https://etmarketsapis.indiatimes.com/ET_Stats/getIndexByIds?pagesize=50&exchange=50&sortby=percentChange&sortorder=desc&indexid=2369&company=true&indexname=Nifty%2050&marketcap=&pageno=1').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      

        //////////////////////////////Nifty 50 Stocks ////////////////////////
      this.nifty50stocks.length = 0;
      // console.log(nestedItems)
        for (let val in nestedItems[0][0]['companies']) {
          this.nifty50stocks.push({ text1: nestedItems[0][0]['companies'][val].companyShortName, text2: nestedItems[0][0]['companies'][val].change, text3: nestedItems[0][0]['companies'][val].percentChange, text4: nestedItems[0][0]['companies'][val].current,text5:nestedItems[0][0]['companies'][val].symbol })
        }
  
     
    }, err => {
      console.log(err)
    })
  }
   getnifty1yr() {
    
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=1yr&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.nifty501yrdata.push(nestedItems[1].values[val]["_value"])
        this.nifty501yrLabels.push(nestedItems[1].values[val]["_time"])
   
      }
  
      this.lineChart1yrData = [{
        label: 'Price',
        data: this.nifty501yrdata,
        borderWidth: 1,
        fill: false
      }];

      this.lineChart1yrLabels = this.nifty501yrLabels;
    
      
    }, err => {
      console.log(err)
    })
   
   
  }
  trackByFuntion(index, item) {
  return item.text2
  }
  trackByFuntion1(index1, item1) {
  return item1.text1
   }
  trackByFuntion2(index2, item2) {
  return item2.text1
   }
  trackByFuntion3(index3, item3) {
  return item3.text1;
   }
  trackByFuntion4(index4, item4) {
  return item4.text2;
   }
  trackByFuntion5(index5, item5) {
    return item5.text1;
   }
  trackByFuntion6(index6, item6) {
    return item6.text1;
   }
  trackByFuntion7(index7, item7) {
    return item7.text1;
   }
  trackByFuntion8(index8, item8) {
    return item8.text3 ;
  }
  trackByFuntion9(index9, item9) {
    return item9.text3 ;
  }
  trackByFuntion10(index10, item10) {
    return item10.text3 ;
  }
  trackByFuntion11(index11, item11) {
    return item11.text3 ;
   }
  

  getnifty6m() {
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=6m&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.nifty506mdata.push(nestedItems[1].values[val]["_value"])
        this.nifty506mLabels.push(nestedItems[1].values[val]["_time"])
   
      }
  

      this.lineChart6mData = [{
        label: 'Price',
        data: this.nifty506mdata,
        borderWidth: 1,
        fill: false
      }];

      this.lineChart6mLabels = this.nifty506mLabels;
    
      
    }, err => {
      console.log(err)
    })
  
  }
  getnifty3m() {
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=3m&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.nifty503mdata.push(nestedItems[1].values[val]["_value"])
        this.nifty503mLabels.push(nestedItems[1].values[val]["_time"])
   
      }
  

      this.lineChart3mData = [{
        label: 'Price',
        data: this.nifty503mdata,
        borderWidth: 1,
        fill: false
      }];

      this.lineChart3mLabels = this.nifty503mLabels;
    
     
    }, err => {
      console.log(err)
    })
  
  }
  getnifty5d() {
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3BNSX?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      ////////////To get Nifty 5day Resistances and Indicators/////////////
      
      let val5 = 0;
      while (val5 != 2400) {
        val5 = val5 + 1
        this.lineChartDatan50snrr1w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
          this.lineChartDatan50snrr2w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
          this.lineChartDatan50snrr3w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
          this.lineChartDatan50snrs3w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
          this.lineChartDatan50snrs2w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
          this.lineChartDatan50snrs1w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
      }
   
      this.nifty50crossoverw.length = 0;
      for (let val in nestedItems[2]['crossover']) {
        this.nifty50crossoverw.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
      }
      this.nifty50indicatorsw.length = 0;
      for (let val1 in nestedItems[2]['indicators']) {
        if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
          this.nifty50indicatorsw.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
        }
      }
      
      
    }, err => {
      console.log(err)
    })
     ////////////To get Nifty 1 week Price///////////////////////
      
     this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=5d&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
  this.nifty505ddata.length = 0;
  this.nifty505dLabels.length = 0;
  for (let val in nestedItems[1].values) {
    this.nifty505ddata.push(nestedItems[1].values[val]["_value"])
    this.nifty505dLabels.push(nestedItems[1].values[val]["_time"])
  
  }
 

  this.lineChart5dData = [{
    label: 'Price',
    data: this.nifty505ddata,
    borderWidth: 1,
    fill: false
  }, {
    label: 'R1',
    data: this.lineChartDatan50snrr1w,
    borderWidth: 1,
    bordercolor: '#d3766c',
    fill: false
  },
  {
    label: 'R2',
    data: this.lineChartDatan50snrr2w,
    borderWidth: 1,
    borderColor: '#e3256b',
    fill: false
  }
    , {
    label: 'R3',
    data: this.lineChartDatan50snrr3w,
    borderWidth: 1,
    borderColor: '#c84343',
    fill: false
  }, {
    label: 'S1',
    data: this.lineChartDatan50snrs1w,
    borderWidth: 1,
    borderColor: '#90b590',
    fill: false
  }, {
    label: 'S2',
    data: this.lineChartDatan50snrs2w,
    borderWidth: 1,
    borderColor: '#09c51b',
    fill: false
  }, {
    label: 'S3',
    data: this.lineChartDatan50snrs3w,
    borderWidth: 1,
    borderColor: '#375f00',
    fill: false
  }];

  this.lineChart5dLabels = this.nifty505dLabels;
 

}, err => {
  console.log(err)
})
 
  }  
   
    getnifty1m() {
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3BNSX?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
       
        ////////////To get Nifty 1 month Resistances and Indicators/////////////
        this.lineChartDatan50snrr1m.length = 0;
        this.lineChartDatan50snrr2m.length = 0;
        this.lineChartDatan50snrr3m.length = 0;
        this.lineChartDatan50snrs1m.length = 0;
        this.lineChartDatan50snrs2m.length = 0;
        this.lineChartDatan50snrs3m.length = 0;
        let val5 = 0;
        while (val5 != 2000) {
          val5 = val5 + 1
          this.lineChartDatan50snrr1m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
            this.lineChartDatan50snrr2m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
            this.lineChartDatan50snrr3m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
            this.lineChartDatan50snrs3m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
            this.lineChartDatan50snrs2m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
            this.lineChartDatan50snrs1m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
        }
   
        this.nifty50crossoverm.length = 0;
        for (let val in nestedItems[2]['crossover']) {
          this.nifty50crossoverm.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
        }
        this.nifty50indicatorsm.length = 0;
        for (let val1 in nestedItems[2]['indicators']) {
          if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
            this.nifty50indicatorsm.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
          }
        }
       
      }, err => {
        console.log(err)
      })
       
      
     
  

      ////////////To get Nifty 1 month Price///////////////////////
      
        this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=1m&type=area').subscribe(data5 => {
          let nestedItems = Object.keys(data5).map(key => {
            return data5[key];
          });
         
      this.nifty501mdata.length = 0;
      this.nifty501mLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty501mdata.push(nestedItems[1].values[val]["_value"])
        this.nifty501mLabels.push(nestedItems[1].values[val]["_time"])
      
      }
     
    
      this.lineChart1mData = [{
        label: 'Price',
        data: this.nifty501mdata,
        borderWidth: 1,
        fill: false
      }, {
        label: 'R1',
        data: this.lineChartDatan50snrr1m,
        borderWidth: 1,
        bordercolor: '#d3766c',
        fill: false
      },
      {
        label: 'R2',
        data: this.lineChartDatan50snrr2m,
        borderWidth: 1,
        borderColor: '#e3256b',
        fill: false
      }
        , {
        label: 'R3',
        data: this.lineChartDatan50snrr3m,
        borderWidth: 1,
        borderColor: '#c84343',
        fill: false
      }, {
        label: 'S1',
        data: this.lineChartDatan50snrs1m,
        borderWidth: 1,
        borderColor: '#90b590',
        fill: false
      }, {
        label: 'S2',
        data: this.lineChartDatan50snrs2m,
        borderWidth: 1,
        borderColor: '#09c51b',
        fill: false
      }, {
        label: 'S3',
        data: this.lineChartDatan50snrs3m,
        borderWidth: 1,
        borderColor: '#375f00',
        fill: false
      }];
   
      this.lineChart1mLabels = this.nifty501mLabels;
    
    }, err => {
      console.log(err)
    })
  }
 
  getniftytoday() {
        ////////////To get Nifty Today Price///////////////////////
    
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=1d&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
      this.nifty50data.length = 0;
      this.nifty50Labels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty50data.push(nestedItems[1].values[val]["_value"])
        this.nifty50Labels.push((nestedItems[1].values[val]["_time"]))
        this.stockhcdate.push({x:(nestedItems[1].values[val]["_time"]),y:(nestedItems[1].values[val]["_value"])})     
      }
    }, err => {
      console.log(err)
    })
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3BNSX?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
      
        ////////////To get Nifty Today Resistances and Indicators/////////////
        this.lineChartDatan50snrr1.length = 0;
        this.lineChartDatan50snrr2.length = 0;
        this.lineChartDatan50snrr3.length = 0;
        this.lineChartDatan50snrs1.length = 0;
        this.lineChartDatan50snrs2.length = 0;
        this.lineChartDatan50snrs3.length = 0;
   
        let val = 0;
        while (val != 400) {
          val = val + 1
          this.lineChartDatan50snrr1.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
            this.lineChartDatan50snrr2.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
            this.lineChartDatan50snrr3.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
            this.lineChartDatan50snrs3.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
            this.lineChartDatan50snrs2.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
            this.lineChartDatan50snrs1.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
        }
         
        this.nifty50indicators.length = 0;
        this.nifty50crossover.length = 0;
        for (let val in nestedItems[2]['crossover']) {
          this.nifty50crossover.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
        }
         
        for (let val1 in nestedItems[2]['indicators']) {
          if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
            this.nifty50indicators.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
          }
        }
          
        
      
      
     
    
      this.lineChartData = [{
        label: 'Price',
        data: this.nifty50data,
        borderWidth: 1,
        fill: false
      }, 
      {
        label: 'R2',
        data: this.lineChartDatan50snrr2,
        borderWidth: 1,
        borderColor: '#e3256b',
        fill: false
      },
      {
        label: 'R1',
        data: this.lineChartDatan50snrr1,
        borderWidth: 1,
        bordercolor: '#d3766c',
        fill: false
      }
        , {
        label: 'R3',
        data: this.lineChartDatan50snrr3,
        borderWidth: 1,
        borderColor: '#c84343',
        fill: false
      }, {
        label: 'S1',
        data: this.lineChartDatan50snrs1,
        borderWidth: 1,
        borderColor: '#90b590',
        fill: false
      }, {
        label: 'S2',
        data: this.lineChartDatan50snrs2,
        borderWidth: 1,
        borderColor: '#09c51b',
        fill: false
      }, {
        label: 'S3',
        data: this.lineChartDatan50snrs3,
        borderWidth: 1,
        borderColor: '#375f00',
        fill: false
      }];
   
      this.lineChartLabels = this.nifty50Labels;
   
   
      
    }, err => {
      console.log(err)
    })
  }
  changestockpage(symbol) {
     

    this.stockisin = this.stockList.filter(i => i.symbol == symbol)[0].isin
    this.window.open("/Share?stock=" + this.stockisin, "_blank")
  }
}



 



 