import { Component, OnInit } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from "@angular/common/http";
import { formatDate } from '@angular/common';


//import { OwlClockModule } from 'owl-ng';
//import { OwlFanMenuModule } from 'owl-ng';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import ApexCharts from 'apexcharts';
import { ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
import { DataapiService } from '../../dataapi.service'
import * as stocks from './stocklist'
import * as fnostocks from './fnostocks'
import * as sectors from './mcsectorlist'
import * as bqstock from './bqlist'
import * as stocks1 from './stocklist12'
import * as etstock from './etlist'
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
export interface bankniftystockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface nifty50stockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface niftybbdtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface niftybbwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface niftybbmtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface bniftybbdtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface bniftybbwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface bniftybbmtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pniftybbdtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pniftybbwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pniftybbmtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface niftyphstockstiles {

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
export interface bniftytimtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface bniftytidtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface bniftytiwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pniftytimtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pniftytidtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pniftytiwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface niftytidtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface niftytimtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface pcrniftytile {

  text1: string;



}
export interface pcrnseniftytile {
text1: number;
}

export interface pcrnsebniftytile {
  text1: number;
}

export interface niftytiwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;


}
export interface bankniftytiles {

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
  text11: string;
  text12: string;
  text13: string;
  text14: string;
  
}
export interface newscardtile {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

export interface n50optionssupporttile {
  text1: string;
 }
export interface n50optionsresistancetile {
  text1: string;
 }
export interface bnoptionssupporttile {
  text1: string;
 }
export interface bnoptionsresistancetile {
  text1: string;
}

export interface gsectorstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
export interface nifty50tiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
export interface banknifty1tiles {

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
export interface mcniftyvixrttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
  
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


    




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  visibleSidebar1;
  visibleSidebar2;
    
    visibleSidebar3;
    
    visibleSidebar4;
    
    visibleSidebar5;

  public chartOptions3: Partial<ChartOptions3>;
  showFiller = false;
  options: any;
  tiles11: Tile11[] = [

  ];
  n50optionssupport: n50optionssupporttile[] = [];
  n50optionsresistance: n50optionsresistancetile[] = [];
  bnoptionssupport: bnoptionssupporttile[] = [];
  bnoptionsresistance: n50optionsresistancetile[] = [];
  mcniftyrt: mcniftyrttiles[] = [];
  newscard: newscardtile[] = [];
  mcbniftyrt: mcbniftyrttiles[] = [];
  mcniftyvixrt: mcniftyvixrttiles[] = [];
  tlid = [];
  vixgraphtime = [];
  vixgraphvalue = [];
  pcrgraphtime = [];
  pcrgraphvalue = [];
  
  mcsymbol1:any
  tableData: any
  stockList: any
  sectorList: any
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
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  tiles: Tile[] = [


  ];
  tiles1: Tile1[] = [];
  result: resulttiles[] = [];
  niftytid: niftytidtile[] = [];
  mcsectoroveralldwm: mcsectoroveralltiledwm[] = [];
  mcsectoroveralldw: mcsectoroveralltiledw[] = [];
  mcsectoroveralld: mcsectoroveralltiled[] = [];
  nsindices1: nsindices1tiles[] = [];
  nsindices: nsindicestiles[] = [];
  niftybbd: niftybbdtile[] = [];
  niftytiw: niftytiwtile[] = [];
  pcrnifty: pcrniftytile[] = [];
  pcrnsenifty: pcrnseniftytile[] = [];
  pcrnsebnifty: pcrnsebniftytile[] = [];

  gsectors: gsectorstiles[] = [];
  gsecstocksdetails: gsecstocksdetailstiles[] = [];
  gsectorsdetails: gsectorsdetailstiles[] = []
  niftybbw: niftybbwtile[] = [];
  niftytim: niftytimtile[] = [];
  niftybbm: niftybbmtile[] = [];
  trafficChartData: any
  trafficChartLabels: any
  trafficChartOptions: any
  trafficChartColors: any
  RssData: NewsRss;
  RssData1: NewsRss;
  RssData2: NewsRss;
  advsectors = [];
  decsectors = [];
  optionwc = [];
  optionwp = [];
  optionbwc = [];
  optionbwp = [];
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  basicData3: any;
  basicOptions3: any;
  bniftytid: bniftytidtile[] = [];
  bniftybbd: bniftybbdtile[] = [];
  bniftytiw: bniftytiwtile[] = [];
  bniftybbw: bniftybbwtile[] = [];
  bniftytim: bniftytimtile[] = [];
  bniftybbm: bniftybbmtile[] = [];
  pniftytid: pniftytidtile[] = [];
  pniftybbd: pniftybbdtile[] = [];
  pniftytiw: pniftytiwtile[] = [];
  pniftybbw: pniftybbwtile[] = [];
  pniftytim: pniftytimtile[] = [];
  pniftybbm: pniftybbmtile[] = [];
  chrtinkvs: chrtinktilesvs[] = [];
 
  tg: tgtiles[] = [];
  bankniftystocks: bankniftystockstiles[] = [];
  nifty50stocks: nifty50stockstiles[] = [];
  niftyphstocks: niftyphstockstiles[] = [];
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
  banknifty: bankniftytiles[] = [];
  banknifty1: banknifty1tiles[] = [];

  dblist = { 'mydb': [], 'chartinkvshocker': [], 'chartinkemacrs59': [], 'chartinkemacrs920': [], 'chartinkgapup': [], 'chartinkgapdown': [] }
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
  public lineChartLabels7: Array<any> = [];
  public lineChartData4: Array<number> = [];
  public lineChartLabels5: Array<any> = [];
  public lineChartLabels6: Array<any> = [];
  public lineChartDataph: Array<number> = [];
  public lineChartData5: Array<number> = [];
  public lineChartData6: Array<number> = [];
  public lineChartData7: Array<number> = [];
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
  public labelMFL7: Array<any> = [

    { data: this.lineChartData7, label: this.SystemName7 },
    { data: this.lineChartDatan50snrr1, label: this.SystemNamen50snrr1 },
    { data: this.lineChartDatan50snrr2, label: this.SystemNamen50snrr2 },
    { data: this.lineChartDatan50snrr3, label: this.SystemNamen50snrr3 },
    { data: this.lineChartDatan50snrs1, label: this.SystemNamen50snrs1 },
    { data: this.lineChartDatan50snrs2, label: this.SystemNamen50snrs2 },
    { data: this.lineChartDatan50snrs3, label: this.SystemNamen50snrs3 }

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
    this.getmcniftyrealtime()
    this.getmcbankniftyrealtime()
    this.GetRssFeedData()
    this.primengConfig.ripple = true;
    {
      setInterval(() => { this.timecheck() }, 60000);
    }
    {
      setInterval(() => { this.gnewsapiall() }, 300000);
    }
    
    {
      setInterval(() => { this.getmcniftyrealtime() }, 5000);
      setInterval(() => { this.getmcbankniftyrealtime() }, 5000);
      setInterval(() => { this.getmcvixrealtime() }, 5000);
      
      setInterval(() => { this.getntniftypcr() }, 30000);
      
  }
    {
      setInterval(() => { this.nsedataadvdec() }, 1200000);
    }
    {
      setInterval(() => { this.getmcvixgraph() }, 60000);
    }
    {
      setInterval(() => { this.getmmmarkets() }, 60000);
    }
    this.getmcoverall()
    this.getmmmarkets()
    this.opstraexpirydates()
    this.getntniftypcr()
    this.getmcvixgraph()
  this.gnewsapiall()
  
    
    { setInterval(() => { this.getUpdate() }, 30000); }
    
    { setInterval(() => { this.nsedataniftyoi() }, 30000); }
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
    this.nsedataniftyoi()
    this.nsedatabniftyoi()
    this.nseresults()
    this.nseinstrading()
    this.getbqgainingsectors()
    //this.getbankniftysnr()
    this.getmcsectoroverallviewdwm('moneycontrol')
    this.getmcsectoroverallviewdw('moneycontrol')
    this.getmcsectoroverallviewd('moneycontrol')
   
    this.gettl52h()
    this.gettl52l()
   
    //this.mcsymbol1="'in%3BNSX'"
    this.getmcniftytid()
    this.getmcniftytiw()
    this.getmcniftytim()
    this.getmcbniftytid()
    this.nsedataadvdec()
    this.getmcbniftytiw()
    this.getmcbniftytim()
    this.getmcpniftytid()
    this.getmcpniftytiw()
    this.getmcpniftytim()
    this.gettlnear52h()
    this.gettlnear52l()
    this.getetimpdata()
    this.getbanknifty()
    this.getnifty50()
    this.getnifty50snr()
    this.getnifty50stocks()
    this.gettlbu()
    this.gettlob()
    
    this.getbankniftystocks()
    this.getniftypharma()
    this.getniftypharmastocks()
    this.getniftypharmasnr()
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
  
  nsedataniftyoi() {
    this.dataApi.nsedataniftyoi().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pcrnsenifty.length = 0;
      this.optionwc.length = 0;
      this.n50optionsresistance.length = 0;
      this.optionwp.length = 0;
      this.n50optionssupport.length = 0;

      //console.log(nestedItems[1]['CE'].totOI)
      //console.log(nestedItems[1]['PE'].totOI)
this.pcrnsenifty.push({text1:(nestedItems[1]['PE'].totOI/nestedItems[1]['CE'].totOI)})
      for (let val in nestedItems[1]['data']) {
        if (nestedItems[1]['data'][val]['CE']) {
          if ((nestedItems[1]['data'][val]['CE']).length !== 0) {
        
        this.optionwc.push(nestedItems[1]['data'][val]['CE'].openInterest);
          }
        }
      }
      for (let val in nestedItems[1]['data']) {
        if (nestedItems[1]['data'][val]['CE']) {
          var maxc = this.optionwc.reduce((a, b) => Math.max(a, b));  // 5
        }
      }
     
            for (let val in nestedItems[1]['data']) {
              if (nestedItems[1]['data'][val]['CE']) {
              if (nestedItems[1]['data'][val]['CE'].openInterest == maxc) {
                this.n50optionsresistance.push({ text1: nestedItems[1]['data'][val]['CE'].strikePrice })
             }
              }
            
          
        if (nestedItems[1]['data'][val]['PE']) {
          if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
            // console.log("Put")
            // console.log(nestedItems[1]['data'][val]['PE'].changeinOpenInterest, nestedItems[1]['data'][val]['PE'].strikePrice)
        
            this.optionwp.push(nestedItems[1]['data'][val]['PE'].openInterest);
          }
        }
      }
      
        const maxp = this.optionwp.reduce((a, b) => Math.max(a, b));  // 5
        console.log("maximum"+maxp)
     for (let val in nestedItems[1]['data']) {
       if (nestedItems[1]['data'][val]['PE']) {
         if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
     
           if (nestedItems[1]['data'][val]['PE'].openInterest == maxp) {
             this.n50optionssupport.push({ text1: nestedItems[1]['data'][val]['PE'].strikePrice })
            
           }
         }
       }
     }
        
      
      
    }, err => {
      console.log(err)
    })
  }
  nsedatabniftyoi() {
    this.dataApi.nsedatabniftyoi().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pcrnsebnifty.push({text1:(nestedItems[1]['PE'].totOI/nestedItems[1]['CE'].totOI)})
    
     
      for (let val in nestedItems[1]['data']) {
        if (nestedItems[1]['data'][val]['CE']) {
          if ((nestedItems[1]['data'][val]['CE']).length !== 0) {
        
        this.optionbwc.push(nestedItems[1]['data'][val]['CE'].openInterest);
          }
        }
      }
      for (let val in nestedItems[1]['data']) {
        if (nestedItems[1]['data'][val]['CE']) {
          var maxbc = this.optionbwc.reduce((a, b) => Math.max(a, b));  // 5
        }
      }
      console.log("maximum"+maxbc)
            for (let val in nestedItems[1]['data']) {
              if (nestedItems[1]['data'][val]['CE']) {
              if (nestedItems[1]['data'][val]['CE'].openInterest == maxbc) {
                this.bnoptionsresistance.push({ text1: nestedItems[1]['data'][val]['CE'].strikePrice })
             }
              }
            
          
        if (nestedItems[1]['data'][val]['PE']) {
          if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
            // console.log("Put")
            // console.log(nestedItems[1]['data'][val]['PE'].changeinOpenInterest, nestedItems[1]['data'][val]['PE'].strikePrice)
        
            this.optionbwp.push(nestedItems[1]['data'][val]['PE'].openInterest);
          }
        }
      }
      
        const maxbp = this.optionbwp.reduce((a, b) => Math.max(a, b));  // 5
        console.log("maximum"+maxbp)
     for (let val in nestedItems[1]['data']) {
       if (nestedItems[1]['data'][val]['PE']) {
         if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
     
           if (nestedItems[1]['data'][val]['PE'].openInterest == maxbp) {
             this.bnoptionssupport.push({ text1: nestedItems[1]['data'][val]['PE'].strikePrice })
            
           }
         }
       }
     }
        
      
      
    }, err => {
      console.log(err)
    })
  }
  
  getbanknifty() {
    this.dataApi.getbanknifty().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.lineChartData6.push(nestedItems[1].values[val]["_value"])
        this.lineChartLabels6.push(nestedItems[1].values[val]["_time"])
      }
    }, err => {
      console.log(err)
    })
  }
  getmcniftyrealtime() {
    this.dataApi.getmcniftyrealtime().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      this.mcniftyrt.length = 0;
      
      this.mcniftyrt.push({ text1: nestedItems[82], text2: nestedItems[79], text3: nestedItems[83], text4: nestedItems[84], text5: nestedItems[1], text6: nestedItems[40] })
      this.mcadvvalue1 = nestedItems[40];
      this.mcdecvalue1 = nestedItems[1];
      this.trafficChartData = [
        {
          data: [this.mcadvvalue1, this.mcdecvalue1],
        }
      ];
      
      this.trafficChartLabels =  ['Advance', 'Decline'];
      
      this.trafficChartOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
      };
      
      this.trafficChartColors = [
        {
          backgroundColor: [
            'rgba(177, 148, 250, 1)',
            'rgba(254, 112, 150, 1)',
            'rgba(132, 217, 210, 1)'
          ],
          borderColor: [
            'rgba(177, 148, 250, .2)',
            'rgba(254, 112, 150, .2)',
            'rgba(132, 217, 210, .2)'
          ]
        }
      ];
    
    }, err => {
      console.log(err)
    })
  }
  getmcbankniftyrealtime() {
    this.dataApi.getmcbankniftyrealtime().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(data5)
      this.mcbniftyrt.length = 0;
      
      this.mcbniftyrt.push({text1:nestedItems[82],text2:nestedItems[79],text3:nestedItems[83],text4:nestedItems[84]})
    }, err => {
      console.log(err)
    })
  }
  getmcvixrealtime() {
    this.dataApi.getmcvixrealtime().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.mcniftyvixrt.length = 0;
     
        this.mcniftyvixrt.push({ text1: nestedItems[1].stkexchg, text2: nestedItems[1].lastprice, text3: nestedItems[1].change, text4: nestedItems[1].percentchange })
      
    }, err => {
      console.log(err)
    })
  }
  getmcvixgraph() {
    this.dataApi.getmcvixgraph().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      // this.mcniftyvixrt.length = 0;
     
      //   this.mcniftyvixrt.push({ text1: nestedItems[1].stkexchg, text2: nestedItems[1].lastprice, text3: nestedItems[1].change, text4: nestedItems[1].percentchange })
      this.vixgraphtime.length = 0;
        this.vixgraphvalue.length = 0;
      for (let val in nestedItems[1]['values']) {
        this.vixgraphtime.push(nestedItems[1].values[val]["_time"])
        this.vixgraphvalue.push(nestedItems[1].values[val]["_value"])
      }
     this.buildvixgraph() 
    }, err => {
      console.log(err)
    })
  }
  buildvixgraph() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData = {
      
      labels: this.vixgraphtime,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.vixgraphvalue,
          fill: false
        },
        //   {
        //     label: "value",
        //     backgroundColor:'transparent',
        //     data: this.tltgstockprice,
        // },
    
      ]
    };
    var footerLine14 = this.vixgraphvalue
    //console.log(footerLine1 )
   
    this.basicOptions = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine14[tooltipItems[0].index];
          }
        },
          plugins: {
            legend: {
              labels: {
                color: '#495057'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#495057'
              },
              grid: {
                color: '#ebedef'
              }
            },
            y: {
              ticks: {
                color: '#495057'
              },
              grid: {
                color: '#ebedef'
              }
            }
        
    

          }
        },
      }
    }
    getntniftypcr() {
      this.dataApi.getntniftypcr().subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        this.pcrgraphtime.length = 0;
        this.pcrgraphvalue.length = 0;
         for (let val in nestedItems[3]['data']) {
          this.pcrgraphtime.push(nestedItems[3]['data'][val].time)
          this.pcrgraphvalue.push(nestedItems[3]['data'][val].pcr)
          }
         this.buildpcrgraph() 
      }, err => {
        console.log(err)
      })
    }
    buildpcrgraph() {
      
     
      this.basicData1 = {
        
        labels: this.pcrgraphtime,
        
        
        datasets: [
          {
            label: "value",
            //backgroundColor: this.getRandomColor(),
            backgroundColor: '#9966cc',
            data: this.pcrgraphvalue,
            fill: false
          },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltgstockprice,
          // },
      
        ]
      };
      var footerLine15 = this.vixgraphvalue
      //console.log(footerLine1 )
     
      this.basicOptions1 = {
        
        responsive: true,
        tooltips: {
          callbacks: {
            beforeFooter: function (tooltipItems, data) {
              return 'Current Price:' + footerLine15[tooltipItems[0].index];
            }
          },
            plugins: {
              legend: {
                labels: {
                  color: '#9966cc'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#9966cc'
                },
                grid: {
                  color: '#ebedef'
                }
              },
              y: {
                ticks: {
                  color: '#495057'
                },
                grid: {
                  color: '#ebedef'
                }
              }
          
      
  
            }
          },
        }
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
  getmcniftytid() {
    this.dataApi.getmcniftytid().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.niftydi=(nestedItems[15]["indication"])
     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
           
           this.niftytid.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.niftybbd.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }
     

    }, err => {
      console.log(err)
    }
    )
  }
  
  getmcniftytiw() {
    this.dataApi.getmcniftytiw().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.niftywi=(nestedItems[15]["indication"])
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
           
           this.niftytiw.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.niftybbw.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }
     

    }, err => {
      console.log(err)
    }
    )
  }
  getmcpniftytid() {
    this.dataApi.getmcpniftytid().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pniftydi=(nestedItems[15]["indication"])
     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
           
           this.pniftytid.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.pniftybbd.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }


    }, err => {
      console.log(err)
    }
    )
  }
  getmcpniftytim() {
    this.dataApi.getmcpniftytim().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pniftymi=(nestedItems[15]["indication"])
     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
          
           this.pniftytim.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.pniftybbm.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }


    }, err => {
      console.log(err)
    }
    )
  }
  getmcpniftytiw() {
    this.dataApi.getmcpniftytiw().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pniftywi=(nestedItems[15]["indication"])
     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
         
           this.pniftytiw.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.pniftybbw.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmcniftytim() {
    this.dataApi.getmcniftytim().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
   
      this.niftymi=(nestedItems[15]["indication"])
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
           
           this.niftytim.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.niftybbm.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }

      
    }, err => {
      console.log(err)
    }
    )
  }
  getmcbniftytid() {
    this.dataApi.getmcbniftytid().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bniftydi=(nestedItems[15]["indication"])

     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
         
           this.bniftytid.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
             
           this.bniftybbd.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }


    }, err => {
      console.log(err)
    }
    )
  }
  getmcbniftytiw() {
    this.dataApi.getmcbniftytiw().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bniftywi=(nestedItems[15]["indication"])
     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
           
           this.bniftytiw.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.bniftybbw.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }


    }, err => {
      console.log(err)
    }
    )
  }
  getmcbniftytim() {
    this.dataApi.getmcbniftytim().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bniftymi=(nestedItems[15]["indication"])
     
      
       for (let val in nestedItems[14]) {
         if (nestedItems[14][val].id != 'bollinger') {
           //
           
           this.bniftytim.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
         }

         else if (nestedItems[14][val].id == 'bollinger') {
           for (let val1 in data5["indicators"][9]["value"]) {
           this.bniftybbm.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
          }
        }

      }


    }, err => {
      console.log(err)
    }
    )
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
  
  
  
  getniftypharma() {
    this.dataApi.getniftypharma().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.lineChartDataph.push(nestedItems[1].values[val]["_value"])
        this.lineChartLabelsph.push(nestedItems[1].values[val]["_time"])

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


  getbankniftystocks() {
    this.dataApi.getbankniftystocks().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[0]) {

        this.bankniftystocks.push({ text1: nestedItems[0][val].shortname, text2: nestedItems[0][val].change, text3: nestedItems[0][val].percentchange, text4: nestedItems[0][val].lastvalue, text5: nestedItems[0][val].direction })
      }

    }, err => {
      console.log(err)
    })
  }

  getniftypharmastocks() {
    this.dataApi.getniftypharmastocks().subscribe(data6 => {
      let nestedItems1 = Object.keys(data6).map(key => {
        return data6[key];
      });
      for (let val in nestedItems1[0]) {


        this.niftyphstocks.push({ text1: nestedItems1[0][val].shortname, text2: nestedItems1[0][val].change, text3: nestedItems1[0][val].percentchange, text4: nestedItems1[0][val].lastvalue, text5: nestedItems1[0][val].direction })
      }

    }, err => {
      console.log(err)
    })
  }

  getnifty50stocks() {
    this.dataApi.getnifty50stocks().subscribe(data6 => {
      let nestedItems1 = Object.keys(data6).map(key => {
        return data6[key];
      });
      for (let val in nestedItems1[0]) {


        this.nifty50stocks.push({ text1: nestedItems1[0][val].shortname, text2: nestedItems1[0][val].change, text3: nestedItems1[0][val].percentchange, text4: nestedItems1[0][val].lastvalue, text5: nestedItems1[0][val].direction })
      }

    }, err => {
      console.log(err)
    })
  }
  getbankniftysnr() {
    this.dataApi.getbankniftysnr().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      let val = 0;
      while (val != 400) {
        val = val + 1
        this.lineChartDatabnsnrr1.push(nestedItems[0][0].pivotLevel.r1),
          this.lineChartDatabnsnrr2.push(nestedItems[0][0].pivotLevel.r2),
          this.lineChartDatabnsnrr3.push(nestedItems[0][0].pivotLevel.r3), this.lineChartDatabnsnrs3.push(nestedItems[0][0].pivotLevel.s3), this.lineChartDatabnsnrs2.push(nestedItems[0][0].pivotLevel.s2), this.lineChartDatabnsnrs1.push(nestedItems[0][0].pivotLevel.s1)
      }
    }, err => {
      console.log(err)
    })
  }
  getniftypharmasnr() {
    this.dataApi.getniftypharmasnr().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      let val = 0;
      while (val != 400) {
        val = val + 1
        this.lineChartDataphsnrr1.push(nestedItems[0][0].pivotLevel.r1),
          this.lineChartDataphsnrr2.push(nestedItems[0][0].pivotLevel.r2),
          this.lineChartDataphsnrr3.push(nestedItems[0][0].pivotLevel.r3),
          this.lineChartDataphsnrs3.push(nestedItems[0][0].pivotLevel.s3),
          this.lineChartDataphsnrs2.push(nestedItems[0][0].pivotLevel.s2),
          this.lineChartDataphsnrs1.push(nestedItems[0][0].pivotLevel.s1)
      }
    }, err => {
      console.log(err)
    })
  }

  getnifty50snr() {
    this.dataApi.getnifty50snr().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      let val = 0;
      while (val != 400) {
        val = val + 1
        this.lineChartDatan50snrr1.push(nestedItems[0][0].pivotLevel.r1),
          this.lineChartDatan50snrr2.push(nestedItems[0][0].pivotLevel.r2),
          this.lineChartDatan50snrr3.push(nestedItems[0][0].pivotLevel.r3), this.lineChartDatan50snrs3.push(nestedItems[0][0].pivotLevel.s3), this.lineChartDatan50snrs2.push(nestedItems[0][0].pivotLevel.s2), this.lineChartDatan50snrs1.push(nestedItems[0][0].pivotLevel.s1)
      }
    }, err => {
      console.log(err)
    })
  }

  getnifty50() {
    this.dataApi.getnifty50().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });


      for (let val in nestedItems[1].values) {
        this.lineChartData7.push(nestedItems[1].values[val]["_value"])
        this.lineChartLabels7.push(nestedItems[1].values[val]["_time"])
        this.niftydatav.push(nestedItems[1].values[val]["_value"])
        this.niftydatat.push(nestedItems[1].values[val]["_time"])
      }

      this.buildnifty50graph()
      



    }, err => {
      console.log(err)
    })
  }
  buildnifty50graph() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData3 = {
      
      labels: this.niftydatat,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.niftydatav,
          fill: false
        },
       
      ]
    };
    var footerLine18 = this.niftydatav
    //console.log(footerLine1 )
   
    this.basicOptions3 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine18[tooltipItems[0].index];
          }
        },
          plugins: {
            legend: {
              labels: {
                color: '#495057'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#495057'
              },
              grid: {
                color: '#ebedef'
              }
            },
            y: {
              ticks: {
                color: '#495057'
              },
              grid: {
                color: '#ebedef'
              }
            }
        
    

          }
        },
      }
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
              backgroundColor: ['rgb(30, 83, 30)','rgb(250, 51, 51)'],
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          }
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


