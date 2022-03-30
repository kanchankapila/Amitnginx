import { Component, OnInit } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from "@angular/common/http";
import { formatDate } from '@angular/common';


//import { OwlClockModule } from 'owl-ng';
//import { OwlFanMenuModule } from 'owl-ng';
import * as mdb from 'mdb-ui-kit'; // lib

import { ChartType } from 'chart.js';
import { Chart } from 'chart.js';

import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
import { DataapiService } from '../../dataapi.service'
import * as stocks from '../lists/stocklist'
import * as fnostocks from '../lists/fnostocks'
import * as sectors from '../lists/mcsectorlist'
import * as bqstock from '../lists/bqlist'
import * as stocks1 from '../lists/stocklist12'
import * as etstock from '../lists/etlist'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';
import { startWith, map } from 'rxjs/operators';
import {ChartModule} from 'primeng/chart';

import {
  ApexStroke,
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexGrid,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexTooltip,
  ApexLegend
} from "ng-apexcharts";

export interface Tile11 {
  color: string;
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
}
export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
};


export interface Tile {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;

}
export interface pcrniftytile {
  text1: string;
}
export interface Tile1 {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;


}


export interface tltgtiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tltltiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlnear52ltiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlnear52htiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tl52htiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tl52ltiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlvstiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlobtiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlrvpdtiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlbutiles {

  text: string;
  text1: string;
  text2: string;
}
export interface chrtinktilesvs {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface tgtiles {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
}
export interface tltiles {

  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
}

export interface chrtinktilesgu {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface chrtinktilesgd {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface nsindices1tiles {
  
  text1: string;
  text2: string;
  
}
export interface nsindicestiles {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
}
export interface chrtinktilesemacrs59 {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface chrtinktilesemacrs920 {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

export interface alerttiles {
  
  text1: any;
  text2: string;


}

export interface indicestiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  
}
export interface newscardtile {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

export interface gsectorstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

export interface gsecstocksdetailstiles {

  text1: string;
  text2: string;
  text3: string;
}
  export interface gsectorsdetailstiles {

    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
    text7: string;
    text8: string;
    
}
export interface resulttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
  
}
export interface mcniftyrttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
 
  
}

export interface mcbniftyrttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
  
}
export interface mcsectoroveralltiledwm {
text1: string;
}
export interface mcsectoroveralltiledw {
  text1: string;
}
export interface mcsectoroveralltiled {
  text1: string;
  }
export interface nifty50tiles{
  text1: string;
  text2: string;
  text3: string;
  text4: string;

  }

  export interface banknifty1tiles{
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  
    }
      




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  
  
 

  public chartOptions3: Partial<ChartOptions3>;
  showFiller = false;
  options: any;
  tiles11: Tile11[] = [];
 
  
  newscard: newscardtile[] = [];
  
 
  tlid = [];
  vixgraphtime = [];
  vixgraphvalue = [];
  pcrgraphtime = [];
  pcrgraphvalue = [];
  mcsymbol1:any
  tableData: any
  stockList: any
  sectorList: any
  pcrnifty: pcrniftytile[] = [];
  mcniftyrt: mcniftyrttiles[] = [];
  mcbniftyrt: mcbniftyrttiles[] = [];
  mcadvvalue: any
  mcdecvalue: any
  mcadvvalue1: any
  mcdecvalue1:any
  bnifty: any
  cnxit: any
  name1: any
  nmetal: any
  ph: any
  nfin: any
  datetoday:any
  adg: any
  pc1: any
  pp1: any
  bqadv: any
  bqdec: any
  bqunc: any
  bqstocks: any
  etstocks:any
  abcd:any
  index = [];
  mcsectorexchange:any
  bqsymbol = [];
  dblist1: any
  dataTest: any
  dbname: any
  indid:any
  stock_isin: any
  isin: any
  NIFTYNEXT50adv: any
  arrlen: any
  NIFTYNEXT50dec: any
  NIFTYNEXT50unc: any
  timeadvdec: any
  NIFTY50adv: any
  niftydi: any
  niftywi: any
  niftymi: any
  pniftymi: any
  pniftywi:any
  pniftydi: any
  bniftymi: any
  bniftywi:any
  bniftydi: any
  niftyfindi: any
  niftyitmi: any
  niftyfinmi: any
  niftyfinwi: any
  niftymetaldi: any
  niftymetalwi: any
  niftymetalmi: any
  niftyitdi: any
  niftyitwi:any
  mcsectorsymbol= [];
  eqsymbol1 = [];
  abc = [];
  frequency:any
  data: any
  dataapi: any
  pchange: any
  stock: any
  fnostock: any
  stock1: any
  names: any
  test: any
  stockname1: any
  isin1: any
  isin2: any
  alert: alerttiles[] = [];
  mcsymbol = [];
  companyid = [];
  stockid = [];
  basicData1: any;
  basicOptions1: any;
  control = new FormControl();
 

  tiles: Tile[] = [];
  tiles1: Tile1[] = [];
  result: resulttiles[] = [];
 
  mcsectoroveralldwm: mcsectoroveralltiledwm[] = [];
  mcsectoroveralldw: mcsectoroveralltiledw[] = [];
  mcsectoroveralld: mcsectoroveralltiled[] = [];
  nsindices1: nsindices1tiles[] = [];
  nsindices: nsindicestiles[] = [];
  gsectors: gsectorstiles[] = [];
  gsecstocksdetails: gsecstocksdetailstiles[] = [];
  gsectorsdetails: gsectorsdetailstiles[] = []
  trafficChartData: any
  trafficChartLabels: any
  trafficChartOptions: any
  trafficChartColors: any
  RssData: NewsRss;
  RssData1: NewsRss;
  RssData2: NewsRss;
  advsectors = [];
  decsectors = [];
  chrtinkvs: chrtinktilesvs[] = [];
  tg: tgtiles[] = [];
  tltg: tltgtiles[] = [];
  indicestreemap = [];
  nextexpiry:any
  tlvs: tlvstiles[] = [];
  tlrvpd: tlrvpdtiles[] = [];
  tlbu: tlbutiles[] = [];
  tlob: tlobtiles[] = [];
  tltl: tltltiles[] = [];
  tl52h: tl52htiles[] = [];
  tl52l: tl52ltiles[] = [];
  niftydatav = [];
  niftydatat = [];
  tlnear52h: tlnear52htiles[] = [];
  tlnear52l: tlnear52ltiles[] = [];
  tl: tltiles[] = [];
  chrtinkgu: chrtinktilesgu[] = [];
  chrtinkgd: chrtinktilesgd[] = [];
  chrtinkemacrs59: chrtinktilesemacrs59[] = [];
  chrtinkemacrs920: chrtinktilesemacrs920[] = [];
  indices: indicestiles[] = [];
  nifty50: nifty50tiles[] = [];
  banknifty1: banknifty1tiles[] = [];
  
  dblist = { 'mydb': [] }
  chart: any;
  chart1: any;

  constructor( private primengConfig: PrimeNGConfig,private http: HttpClient,private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router,private vps: ViewportScroller) { }
  
  public SystemName4: string = "Decline";
  firstCopy4 = false;
  public SystemName5: string = "Advance";
  firstCopy5 = false;
  public SystemName6: string = "Bank Nifty";
  firstCopy6 = false;
  public SystemName7: string = "Nifty 50";
  firstCopy7 = false;
  public SystemNameph: string = "Nifty Pharma";
  firstCopyph = false;
  public SystemNamebnsnrr1: string = "R1";
  firstCopybnsnrr1 = false;
  public SystemNamebnsnrr2: string = "R2";
  firstCopybnsnrr2 = false;
  public SystemNamebnsnrr3: string = "R3";
  firstCopybnsnrr3 = false;
  public SystemNamebnsnrs1: string = "S1";
  firstCopybnsnrs1 = false;
  public SystemNamebnsnrs2: string = "S2";
  firstCopybnsnrs2 = false;
  public SystemNamebnsnrs3: string = "S3";
  firstCopybnsnrs3 = false;
  public SystemNamen50snrr1: string = "R1";
  firstCopyn50snrr1 = false;
  public SystemNamen50snrr2: string = "R2";
  firstCopyn50snrr2 = false;
  public SystemNamen50snrr3: string = "R3";
  firstCopyn50snrr3 = false;
  public SystemNamen50snrs1: string = "S1";
  firstCopyn50snrs1 = false;
  public SystemNamen50snrs2: string = "S2";
  firstCopyn50snrs2 = false;
  public SystemNamen50snrs3: string = "S3";
  firstCopyn50snrs3 = false;
  public SystemNamephsnrr1: string = "R1";
  firstCopyphsnrr1 = false;
  public SystemNamephsnrr2: string = "R2";
  firstCopyphsnrr2 = false;
  public SystemNamephsnrr3: string = "R3";
  firstCopyphsnrr3 = false;
  public SystemNamephsnrs1: string = "S1";
  firstCopyphsnrs1 = false;
  public SystemNamephsnrs2: string = "S2";
  firstCopyphsnrs2 = false;
  public SystemNamephsnrs3: string = "S3";
  firstCopyphsnrs3 = false;

  public lineChartLabels4: Array<any> = [];
  public lineChartData4: Array<number> = [];
  public lineChartLabels5: Array<any> = [];
  public lineChartLabels6: Array<any> = [];
  public lineChartDataph: Array<number> = [];
  public lineChartData5: Array<number> = [];
  public lineChartData6: Array<number> = [];
  public lineChartDatabnsnrr1: Array<number> = [];
  public lineChartDatabnsnrr2: Array<number> = [];
  public lineChartDatabnsnrr3: Array<number> = [];
  public lineChartDatabnsnrs1: Array<number> = [];
  public lineChartDatabnsnrs2: Array<number> = [];
  public lineChartDatabnsnrs3: Array<number> = [];
  public lineChartLabelsbnsnrr1: Array<any> = [];
  public lineChartLabelsbnsnrr3: Array<any> = [];
  public lineChartLabelsbnsnrr2: Array<any> = [];
  public lineChartLabelsbnsnrs1: Array<any> = [];
  public lineChartLabelsbnsnrs2: Array<any> = [];
  public lineChartLabelsbnsnrs3: Array<any> = [];
  public lineChartDataphsnrr1: Array<number> = [];
  public lineChartDataphsnrr2: Array<number> = [];
  public lineChartDataphsnrr3: Array<number> = [];
  public lineChartDataphsnrs1: Array<number> = [];
  public lineChartDataphsnrs2: Array<number> = [];
  public lineChartDataphsnrs3: Array<number> = [];
  public lineChartLabelsphsnrr1: Array<any> = [];
  public lineChartLabelsphnrr3: Array<any> = [];
  public lineChartLabelsphsnrr2: Array<any> = [];
  public lineChartLabelsphsnrs1: Array<any> = [];
  public lineChartLabelsphsnrs2: Array<any> = [];
  public lineChartLabelsphsnrs3: Array<any> = [];
  public lineChartLabelsph: Array<any> = [];
  public userUsageHoursData;

  public labelMFL4: Array<any> = [

    { data: this.lineChartData4, label: this.SystemName4 },
    { data: this.lineChartData5, label: this.SystemName5 }
  ];
  public labelMFL6: Array<any> = [

    { data: this.lineChartData6, label: this.SystemName6 },
    { data: this.lineChartDatabnsnrr1, label: this.SystemNamebnsnrr1 },
    { data: this.lineChartDatabnsnrr2, label: this.SystemNamebnsnrr2 },
    { data: this.lineChartDatabnsnrr3, label: this.SystemNamebnsnrr3 },
    { data: this.lineChartDatabnsnrs1, label: this.SystemNamebnsnrs1 },
    { data: this.lineChartDatabnsnrs2, label: this.SystemNamebnsnrs2 },
    { data: this.lineChartDatabnsnrs3, label: this.SystemNamebnsnrs3 }
  ];
  
  public labelMFL8: Array<any> = [

    { data: this.lineChartDataph, label: this.SystemNameph },
    { data: this.lineChartDataphsnrr1, label: this.SystemNamephsnrr1 },
    { data: this.lineChartDataphsnrr2, label: this.SystemNamephsnrr2 },
    { data: this.lineChartDataphsnrr3, label: this.SystemNamephsnrr3 },
    { data: this.lineChartDataphsnrs1, label: this.SystemNamephsnrs1 },
    { data: this.lineChartDataphsnrs2, label: this.SystemNamephsnrs2 },
    { data: this.lineChartDataphsnrs3, label: this.SystemNamephsnrs3 }

  ];
  public lineChartOptions4: any = {
    responsive: false,
    scales: {

      xAxes: [{


      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#2756B3",
        //color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };
  public lineChartOptions6: any = {
    responsive: false,
    scales: {

      xAxes: [{


      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#2756B3",
        //color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };

  public lineChartOptions5: any = {
    responsive: false,
    scales: {

      xAxes: [{


      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: '#1fbd8b',
        //color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };
  _lineChartColors4: Array<any> = [{
    backgroundColor: 'green',
    borderColor: 'green',
    pointBackgroundColor: 'green',
    pointBorderColor: 'green',
    pointHoverBackgroundColor: 'green',
    pointHoverBorderColor: 'green'
  }];
  _lineChartColors5: Array<any> = [{
    backgroundColor: 'green',
    borderColor: 'green',
    pointBackgroundColor: 'green',
    pointBorderColor: 'green',
    pointHoverBackgroundColor: 'green',
    pointHoverBorderColor: 'green'
  }];



  public ChartType4 = 'line';

  public chartClicked4(e: any): void {
    console.log(e);
  }
  public chartHovered4(e: any): void {
    console.log(e);
  }
  public ChartType6 = 'line';

  public chartClicked6(e: any): void {
    console.log(e);
  }
  public chartHovered6(e: any): void {
    console.log(e);
  }
  ngOnInit() {
    
    this.GetRssFeedData()
    this.primengConfig.ripple = true;
    {
      setInterval(() => { this.timecheck() }, 60000);
    }
    {
      setInterval(() => { this.gnewsapiall() }, 300000);
    }
    
    
    {
      setInterval(() => { this.nsedataadvdec() }, 1200000);
    }
   
    {
      setInterval(() => { this.getmmmarkets() }, 60000);
    }
    this.getmcoverall()
    this.getmmmarkets()
    this.opstraexpirydates()
    
    
  this.gnewsapiall()
  
    
    { setInterval(() => { this.getUpdate() }, 30000); }
    
    
    this.stockList = stocks.default.Data
    this.sectorList = sectors.default.Data
    this.stock = stocks.default.Data
    this.fnostock = fnostocks.default.Data
    this.bqstocks=bqstock.default.Data
    this.stock1 = stocks1.default.Data
    this.etstocks = etstock.default.Data
    this.data = this.stock
    this.getGainers()
    this.getbqadvdec()
    this.getResults()
    //this.getetimesnews()
    
    this.nseresults()
    this.nseinstrading()
    this.getbqgainingsectors()
 
    this.getmcsectoroverallviewdwm('moneycontrol')
    this.getmcsectoroverallviewdw('moneycontrol')
    this.getmcsectoroverallviewd('moneycontrol')
   
    this.gettl52h()
    this.gettl52l()
   
    //this.mcsymbol1="'in%3BNSX'"
    
    this.nsedataadvdec()
   
    this.gettlnear52h()
    this.gettlnear52l()
    this.getetimpdata()
  
   
    
    this.gettlbu()
    this.gettlob()
    
  
   
    this.getcnxitd()
    this.getcnxitm()
    this.getcnxitw()
    this.getniftymetald()
    this.getniftymetalm()
    this.getniftymetalw()
    this.getniftyfind()
    this.getniftyfinw()
    this.getniftyfinm()
    this.getetindices()
    
   
    
    
  }
  
 
  opstraexpirydates(){
    this.dataApi.opstraexpirydates().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.nextexpiry=(nestedItems[0])
      this.opstradatanifty(this.nextexpiry)
    }, err => {
      console.log(err)
    })
  }
  nseinstrading(){
    this.dataApi.nseinstrading().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      // for (let val in nestedItems) {
      //   this.result.push({ text1: nestedItems[val].date, text2: nestedItems[val].symbol, text3: nestedItems[val].company, text4: nestedItems[val].purpose})
      
        
      // }
    }, err => {
      console.log(err)
    })
  }
  nseresults(){
    this.dataApi.nseresults().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems) {
        this.result.push({ text1: nestedItems[val].date, text2: nestedItems[val].symbol, text3: nestedItems[val].company, text4: nestedItems[val].purpose})
      
        
      }
    }, err => {
      console.log(err)
    })
  }
  
  opstradatanifty(nextexpiry) {
    this.dataApi.opstradatanifty(nextexpiry).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     // console.log(nestedItems)
      this.pcrnifty.push({text1:nestedItems[12]})
  //     for (let val in nestedItems[1].values) {
  //       this.lineChartData6.push(nestedItems[1].values[val]["_value"])
  //       this.lineChartLabels6.push(nestedItems[1].values[val]["_time"])
  //     }
    }, err => {
      console.log(err)
    })
  }
  

    
      
      getmmmarkets() {
        this.dataApi.getmmmarkets().subscribe(data5 => {
          let nestedItems = Object.keys(data5).map(key => {
            return data5[key];
          });
    
          for (let val in nestedItems[2]["top_sectors"]["advance"]) {
    
            this.advsectors.push({ text1: nestedItems[2]["top_sectors"]["advance"][val].isname, text2: nestedItems[2]["top_sectors"]["advance"][val].price, text3: nestedItems[2]["top_sectors"]["advance"][val].chg, text4: nestedItems[2]["top_sectors"]["advance"][val].chgp })
    
          }
    
          for (let val in nestedItems[2]["top_sectors"]["decline"]) {
            this.decsectors.push({ text1: nestedItems[2]["top_sectors"]["decline"][val].isname, text2: nestedItems[2]["top_sectors"]["decline"][val].price, text3: nestedItems[2]["top_sectors"]["decline"][val].chg, text4: nestedItems[2]["top_sectors"]["decline"][val].chgp })
    
    
          }
        }, err => {
          console.log(err)
        })
      }
      
  nsedataadvdec() {
    this.dataApi.nsedataindices().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.nifty50.length = 0;
      this.banknifty1.length = 0;
      this.indicestreemap.length = 0;
      this.nifty50.push({ text1: nestedItems[2][1].name, text2: nestedItems[2][1].lastPrice, text3: nestedItems[2][1].change, text4: nestedItems[2][1].pChange })
      this.banknifty1.push({ text1:nestedItems[2][4].name,text2:nestedItems[2][4].lastPrice, text3:nestedItems[2][4].change,text4:nestedItems[2][4].pChange })
      

       
   
    }, err => {
      console.log(err)
    })
  }
  
  
  
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("http://www.moneycontrol.com/rss/buzzingstocks.xml", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
  GetRssFeedData1() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://www.moneycontrol.com/rss/technicals.xml", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData1 = result;
        });
      });
  }
  GetRssFeedData2() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("http://www.moneycontrol.com/rss/results.xml", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData2 = result;
        });
      });
  }
  getbqadvdec() {
    this.dataApi.getbqadvdec().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.bqadv=(nestedItems[3].adv)
      this.bqdec=(nestedItems[3].dec)
      this.bqunc=(nestedItems[3].unchanged)
      for (let val in nestedItems[4]) {
        this.nsindices.push({ text1: nestedItems[4][val].isname,text2:nestedItems[4][val].adv,text3:nestedItems[4][val].dec,text4:nestedItems[4][val].unchanged,text5:nestedItems[4][val].chgp,text6:nestedItems[4][val].trend })
        this.nsindices1.push({ text1:nestedItems[4][val].trend,text2:nestedItems[4][val].isname })
      }
    }, err => {
      console.log(err)
    })
  }
  getetimesnews() {
    this.dataApi.getetimesnews().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
    console.log(nestedItems)
    }, err => {
      console.log(err)
    })
  }
  getUpdate() {
    this.dataApi.getUpdate().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.alert.length = 0;
      for (let val in nestedItems[1]) {
        
      this.alert.push({text1:(new Date(nestedItems[1][val]["channel_post"].date*1000)).toLocaleTimeString("en-US"),text2:nestedItems[1][val]["channel_post"].text})
        // console.log(nestedItems[1][val]["channel_post"].text)
        // console.log(nestedItems[1][val]["channel_post"].date)
      }

    }, err => {
      console.log(err)
    })
   }
  
  
  
  
  timecheck() {
    var runned = false;
    var d = new Date();
    console.log(d.getHours(),d.getMinutes())
    if ( d.getHours() == 19  && d.getMinutes() === 30 && !runned) {
      this.getdropmcmovingaverages()
      this.getmcmovingaverages()
      runned = true;
    }
    var runned1 = false;
    if (d.getHours() == 17 && d.getMinutes() === 40 && !runned1) {
      this.getdropdbmcdwm()
      this.getmccombine()
      console.log()
      
      runned1 = true;
    }
    var runned2 = false;
     if ( d.getHours() == 17  && d.getMinutes() === 50 && !runned2) {
      this.getdroppscore()
      this.getpscore()
        runned2 = true;
    }
    var runned3 = false;
     if ( d.getHours() == 19  && d.getMinutes() === 55 && !runned3) {
       this.getdropdbmcvolume()
       this.getmcvolume()
      runned3 = true;
    }
    // var runned4 = false;
    // if ( d.getHours() == 15  && d.getMinutes() === 47 && !runned4) {
         
    //     runned4 = true;
    // }
    // var runned5 = false;
    // if (d.getHours() == 15 && d.getMinutes() === 51 && !runned5) {
      
    //   console.log("running get pscore")
    //   runned5 = true;
    // }
  }
  getdroppscore() {
    this.dataApi.getdroppscore().subscribe(data5 => {
     
    }, err => {
      console.log(err)
    })
  }
  getdropdbmcvolume()
  {
    this.dataApi.getdropdbmcvolume().subscribe(data5 => {
     
    }, err => {
      console.log(err)
    })
  }
  getdropdbmcdwm(){
    this.dataApi.getdropdbmcdwm().subscribe(data5 => {
     
    }, err => {
      console.log(err)
    })
  }
  getdropmcmovingaverages() {
    this.dataApi.getdropmcmovingaverages().subscribe(data5 => {
     
    }, err => {
      console.log(err)
    })
  }

  getetindices() {
    this.dataApi.getetindices().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });


      for (let val in nestedItems[0]) {
        
        this.indices.push({text1:nestedItems[0][val].indexName,text2:nestedItems[0][val].currentIndexValue,text5:nestedItems[0][val].advances,text4:nestedItems[0][val].declines,text3:nestedItems[0][val].perChange,text7:nestedItems[0][val].netChange,text8:nestedItems[0][val].closeIndexValue,text9:nestedItems[0][val].openIndexValue,text10:nestedItems[0][val].lowIndexValue,text6:nestedItems[0][val].highIndexValue})
        
      }
    }, err => {
      console.log(err)
    })
  }

  getetimpdata() {
    this.dataApi.getetimpdata().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      //console.log(data5)

      
    }, err => {
      console.log(err)
    })
  }
 
  
  getmcoverall() {
    this.dataApi.getmcoverall().subscribe(data => {
      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
     
      for (let val in nestedItems[1]) {
        this.mcadvvalue = nestedItems[1][val].advValue
        this.mcdecvalue = nestedItems[1][val].decValue
        this.lineChartData4.push(nestedItems[1][val].decValue)
        this.lineChartData5.push(nestedItems[1][val].advValue)
        this.lineChartLabels4.push(nestedItems[1][val].curDate)
        this.lineChartLabels5.push(nestedItems[1][val].curDate)
      }
      this.chart = new Chart('canvas', {
        type: 'doughnut',
        data: {
          labels: ['Advance', 'Decline'],
          datasets: [
            {
              data: [this.mcadvvalue, this.mcdecvalue],
              backgroundColor: ['rgb(30, 83, 30)','rgb(250, 51, 51)']
          
            },
          ]
        },
        options: {
        
        }
      });
      

     
    }, err => {
      console.log(err)




    })
  }

  getGainers() {
    this.dataApi.getGainers().subscribe(data => {
      this.test = data

      for (let val in data) {


        if (this.stockList.filter(i => i.name == data[val].company)[0]) {
          this.isin2 = this.stockList.filter(i => i.name == data[val].company)[0].isin

          this.tiles.push({ text: data[val].company, text1: "Price:" + data[val].currentPrice, text2: "Change:" + data[val].change + "%", text3: this.isin2, cols: 3, rows: 1 })

        }

      }

    }, err => {
      console.log(err)




    })
  }
  
  getmcsectoroverallviewdwm(dbname) {
    this.dataApi.getmcsectoroverallviewdwm(dbname).subscribe(data => {
      this.dblist[dbname] = data

      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
      for (let val in nestedItems) {
        this.mcsectoroveralldwm.push({ text1: nestedItems[val].name } )
      }
      
      
      }, err => {
      console.log(err)
    })
  }
  getmcsectoroverallviewdw(dbname) {
    this.dataApi.getmcsectoroverallviewdw(dbname).subscribe(data => {
      this.dblist[dbname] = data

      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
      for (let val in nestedItems) {
        this.mcsectoroveralldw.push({ text1: nestedItems[val].name } )
      }
      
      
      }, err => {
      console.log(err)
    })
  }
  getmcsectoroverallviewd(dbname) {
    this.dataApi.getmcsectoroverallviewd(dbname).subscribe(data => {
      this.dblist[dbname] = data

      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
      for (let val in nestedItems) {
        this.mcsectoroveralld.push({ text1: nestedItems[val].name } )
      }
      
      
      }, err => {
      console.log(err)
    })
  }
 
  // gettltg() {
  //   this.dataApi.gettltg().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     for (let val in nestedItems[2]) {


  //       this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
  //       this.tltg.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })


  //     }
  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }

  // gettltl() {
  //   this.dataApi.gettltl().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     for (let val in nestedItems[2]) {
  //       this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
  //       this.tltl.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

  //     }
  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  gettl52h() {
    this.dataApi.gettl52h().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
        this.tl52h.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettl52l() {
    this.dataApi.gettl52l().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[2]) {
        this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
        this.tl52l.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlnear52h() {
    this.dataApi.gettlnear52h().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
        this.tlnear52h.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlnear52l() {
    this.dataApi.gettlnear52l().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[2]) {
        this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
        this.tlnear52l.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  // gettlvs() {
  //   this.dataApi.gettlvs().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });

  //     for (let val in nestedItems[2]) {
  //       this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
  //       this.tlvs.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

  //     }
  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  //  gettlrvpd() {
  //   this.dataApi.gettlrvpd().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });

  //     for (let val in nestedItems[2]) {
  //       this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
  //       this.tlrvpd.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

  //     }
  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  gettlbu() {
    this.dataApi.gettlbu().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
        this.tlbu.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlob() {
    this.dataApi.gettlob().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        this.isin2 = this.stockList.filter(i => i.symbol == nestedItems[2][val].name)[0].isin
        this.tlob.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }

    }, err => {
      console.log(err)
    }
    )
  }
  // gettlvhg() {
  //   this.dataApi.gettlvhg().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     for (let val in nestedItems[2]) {

  //     }
  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  // gettlvhl() {
  //   this.dataApi.gettlvhl().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     for (let val in nestedItems[2]) {

  //     }
  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }

  
  
  getniftypharmadetails() {
    this.dataApi.getniftypharmadetails().subscribe(data20 => {
      this.ph = data20

      let nestedItems = Object.keys(data20).map(key => {
        return data20[key];
      });


      this.tiles11.push({ text: nestedItems[2].company, text1: "open:" + nestedItems[2].OPEN, text2: "low:" + nestedItems[2].LOW, text3: "high:" + nestedItems[2].HIGH, text4: "Current Price:" + nestedItems[2].pricecurrent, text5: "Price Change" + nestedItems[2].pricechange, text6: "% Price Change:" + nestedItems[2].pricepercentchange, text7: "Advance:" + nestedItems[2].adv, text8: "Decline:" + nestedItems[2].decl, cols: 1, rows: 2, color: 'lightgreen' })

    }
      , err => { })
  }

  
  getmccombine() {
    console.log("mc combine start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    console.log('Date is' + this.datetoday)
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes())
    for (let val in this.stock1) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   
    this.dataApi.getmccombine(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  gettrendlynepostdvm() {
    console.log("trendlyne post durability/Volatility/Momentum score start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    console.log('Date is' + this.datetoday)
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes())
    for (let val in this.stock) {
      this.tlid.push({ tlid: this.stock[val].tlid, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   
    this.dataApi.gettrendlynepostdvm(this.tlid).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  chartink() {
    console.log("chartink start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    console.log('Date is'+ this.datetoday)
    
      this.abc.push({ name:'copy-buy-100-accuracy-morning-scanner-scan-at-9-30-4002',Date:this.datetoday })
      
    
   
    this.dataApi.chartink(this.abc).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmcsectorcombine() {
    console.log("mc sector combine start")
    for (let val in this.sectorList) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      console.log('Date is'+ this.datetoday)
      this.mcsectorsymbol.push({ mcsectorsymbol: this.sectorList[val].mcsectorsymbol, sectorid: this.sectorList[val].mcsectorid, name: this.sectorList[val].name,Date:this.datetoday })
      console.log(this.sectorList[val].mcsectorsymbol)
    }
   
    this.dataApi.getmcsectorcombine(this.mcsectorsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  nsepostdata1() {
    console.log("eq sector combine start")
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      console.log('Date is'+ this.datetoday)
      this.eqsymbol1.push({ eqsymbol1: this.stock[val].symbol,name: this.stock[val].name,Date:this.datetoday })
      
    }
    console.log(this.eqsymbol1)
    this.dataApi.nsepostdata1(this.eqsymbol1).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  nsepostdata2() {
    console.log("eq sector combine start")
    for (let val in this.fnostock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      console.log('Date is'+ this.datetoday)
      this.eqsymbol1.push({ eqsymbol1: this.fnostock[val].symbol,Date:this.datetoday })
      
    }
    console.log(this.eqsymbol1)
    this.dataApi.nsepostdata2(this.eqsymbol1).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmoneycontroloveralldaily() {
    console.log("start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getmoneycontroloveralldaily(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  ///Moneycontrol Post request for moving averages
  getmcmovingaverages() {
    console.log("mc moving averages start")
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday })
      
    }
    console.log(this.mcsymbol)
    this.dataApi.getmcmovingaverages(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcvolume() {
    console.log("mc volume")
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes())
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   // console.log(this.mcsymbol)
    this.dataApi.getmcvolume(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcinsight() {
    console.log("mc insight")
    var d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes())
    this.mcsymbol.length = 0;
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   // console.log(this.mcsymbol)
    this.dataApi.getmcinsight(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmmstockinforeco() {
    console.log("mmstock reco start")
    for (let val in this.stock1) {
      this.stockid.push({ stockid: this.stock[val].stockid, isin: this.stock[val].isin, name: this.stock[val].name })
      //console.log(this.stock[val].stockid)
    }
    console.log(this.stockid)
    
    this.dataApi.getmmstockinforeco(this.stockid).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  getmoneycontrolti() {
    console.log("TI start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getmoneycontrolti(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getbqbasicdetails() {
    console.log("BQ start")
    for (let val in this.bqstocks) {
      this.bqsymbol.push({bqsymbol:this.bqstocks[val].stockid,name:this.bqstocks[val].name})
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getbqbasicdetails(this.bqsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  getbqnews() {
    console.log("BQ news start")
    for (let val in this.bqstocks) {
      this.bqsymbol.push({bqsymbol:this.bqstocks[val].stockid,name:this.bqstocks[val].name})
     
    }
    
    this.dataApi.getbqnews(this.bqsymbol).subscribe(data5 => {
    }, err => {
      console.log(err)
    }
    )
  }
  
  
  getmoneycontroloverallweekly() {
    console.log("start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getmoneycontroloverallweekly(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getetcompanydata() {
    console.log("ET Company data start")
    for (let val in this.etstocks) {
      this.companyid.push({ companyid:this.etstocks[val].companyid,name1:this.etstocks[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    
      
    }
      this.dataApi.getetcompanydata(this.companyid).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  getmoneycontroloverall() {
    console.log("start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
     
    }
   this.dataApi.getmoneycontroloverall(this.mcsymbol).subscribe(data5 => {
  }, err => {
      console.log(err)
    }
    )
  }
  getpscore() {
    console.log("PScore start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday })
      
    }
    
    this.dataApi.getpscore(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  scroll(id) {
    this.vps.scrollToAnchor(id);
  }

  async getbqgainingsectors() {
    this.dataApi.getbqgainingsectors().subscribe(data3 => {
      let nestedItems = Object.keys(data3).map(key => {
        return data3[key];
      });


      for (let val in nestedItems) {
       
        this.gsectors.push({ text1: nestedItems[val].name,text2:nestedItems[val]["price-movement"]["current-price"],text3:nestedItems[val]["price-movement"].chg,text4:nestedItems[val]["price-movement"].chgp })
        
       this.getbqgainingsectorsstocks(nestedItems[val].id)
        
        this.getbqgainingsectorsstocksdetails(nestedItems[val].id)
        
        

      }

    }, err => {
      console.log(err)
    })
  }
  async getbqgainingsectorsstocks(sectorid) {
    this.dataApi.getbqgainingsectorsstocks(sectorid).subscribe(data3 => {
      let nestedItems = Object.keys(data3).map(key => {
        return data3[key];
      });
      
     
      
      this.gsectorsdetails.push({text1:nestedItems[0]["topgainer"].name,text2:nestedItems[0]["topgainer"].price,text3:nestedItems[0]["topgainer"].chg,text4:nestedItems[0]["topgainer"].chgp,text5:nestedItems[0]["toploser"].name,text6:nestedItems[0]["toploser"].price,text7:nestedItems[0]["toploser"].chg,text8:nestedItems[0]["toploser"].chgp})
       
        
        

    

    }, err => {
      console.log(err)
    })
  }
  async getbqgainingsectorsstocksdetails(sectorid) {
    this.dataApi.getbqgainingsectorsstocksdetails(sectorid).subscribe(data3 => {
      let nestedItems = Object.keys(data3).map(key => {
        return data3[key];
      });
      
      
      for (let val in nestedItems) {

        this.gsecstocksdetails.push({ text1: nestedItems[val].name,text2:nestedItems[val]["price-movement"].chg,text3:nestedItems[val]["price-movement"].chgp})
        
        

      }

    }, err => {
      console.log(err)
    })
  }
  getResults() {
    this.dataApi.getResults().subscribe(data1 => {


      for (let val in data1) {

        if (this.stockList.filter(i => i.name == data1[val].company)[0]) {
          this.test = this.stockList.filter(i => i.name == data1[val].company)[0].isin

          this.tiles1.push({ text: data1[val].change, text1: data1[val].company, text2: this.test, cols: 9, rows: 1 })
        }

      }

    }, err => {
      console.log(err)
    })
  }
  

  
  getcnxitd() {
    this.dataApi.getcnxitd().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftyitdi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  getcnxitm() {
    this.dataApi.getcnxitm().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftyitmi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  getcnxitw() {
    this.dataApi.getcnxitw().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftyitwi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  
  
  getniftymetalm() {
    this.dataApi.getniftymetalm().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftymetalmi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  getniftymetalw() {
    this.dataApi.getniftymetalw().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
     this.niftymetalwi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  getniftymetald() {
    this.dataApi.getniftymetald().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftymetaldi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  gnewsapiall(){
    this.dataApi.gnewsapiall().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
       this.newscard.length = 0;
      for (let val in nestedItems[2]) {
        this.newscard.push({text1:nestedItems[2][val].title,text2:nestedItems[2][val].url,text3:nestedItems[2][val].urlToImage,text4:nestedItems[2][val].description,text5:nestedItems[2][val].content})
        
          }
     
    }
      , err => {console.log(err) })
  }
  getniftyfinw() {
    this.dataApi.getniftyfinw().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftyfinwi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  getniftyfinm() {
    this.dataApi.getniftyfinm().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
      this.niftyfinmi=(nestedItems[3]["indication"])
     
    }
      , err => { console.log(err)})
  }
  getniftyfind() {
    this.dataApi.getniftyfind().subscribe(data4 => {
      this.cnxit = data4
      let nestedItems = Object.keys(data4).map(key => {
        return data4[key];
      });
     this.niftyfindi=(nestedItems[3]["indication"])
     
    }
      , err => {console.log(err) })
  }
  
  
  keyword = 'name';
  selectEvent(stock_isin) {
    
    this.window.open("http://localhost:4200/Ohlc?stock=" + stock_isin + "&&dbname=" + 'mydb', "_blank")
    //this.router.navigate(['/Ohlc'], { queryParams: { stock: stock_isin, dbname: 'mydb' } });

    // do something with selected item
  }

  onChangeSearch(val: string) {

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(abc) {

    // do something when input is focused
  }





  changeStock(stock_isin, dbname) {

  }
  changeStock1(stock_isin, dbname) {
    this.window.open("http://localhost:4200/Ohlc?stock=" + stock_isin + "&&dbname=" + 'mydb', "_blank")
    this.router.navigate(['/Ohlc'], { queryParams: { stock: stock_isin, dbname: 'mydb' } });
  }

  changeStock123(stock_isin) {


    this.window.open("http://localhost:4200/Ohlc?stock=" + stock_isin + "&&dbname=" + 'mydb', "_blank")
  }


}
export interface IRssData {}


