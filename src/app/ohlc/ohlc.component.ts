import { LOCALE_ID } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import {AtomSpinnerModule} from 'angular-epic-spinners'
import {ChartModule} from 'primeng/chart';
 import * as  stocks from '../lists/stocklist'
 import * as bqstock from '../lists/bqlist'
 import * as etsector from '../lists/etsectorlist'
 import * as etindex from '../lists/etindexlist'
 import * as mcindex from '../lists/mcsectorlist'
//import { StockChart } from 'angular-highcharts';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';


// If you are using ES6, then
import * as CanvasJS from '../lists/canvasjs.min.js';


//import * as Highcharts from "highcharts/highstock";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ViewportScroller } from '@angular/common';
//import ApexCharts from 'apexcharts'

//import { NgxSpinnerService } from "ngx-spinner";
//import { ChangeDetectionStrategy } from '@angular/core';
import { BuiltinType, SelectorListContext } from '@angular/compiler';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { LinearGaugeComponent } from '@swimlane/ngx-charts';








export interface Tile {
color: string;
cols: number;
rows: number;
text: string;
}
export interface volumetile {
color: string;
cols: number;
rows: number;
text: string;
text1: string;
text2: string;

}

export interface indicatortile {
text1: string;
text2: string;
}
export interface kstatstile {
text: string;
text1: string;
}
export interface nsesectorindtiles {
text1: string;

}
export interface nseintradaytiles {
text1: string;
text2: string;
text3: string;

}

export interface nsedelivQtiles {
text1: string;
text2: string;
text3: string;

}
export interface nsesectorpetiles {
text1: string;

}
export interface nsepreopentiles {
text1: string;
text2: string;

}
export interface nsesymbolpetiles {
text1: string;

}
export interface peratiotiles {
text1: string;
text2: string;
text3: string;
text4: string;
}
export interface indicatormatile {
text: string;
text1: string;
text2: string;
text3: string;
}

export interface ubandtile {

text: string;
text1: string;

}

export interface lbandtile {

text: string;
text1: string;

}
export interface hptile {

text: string;
text1: string;

}


export interface lptile {

text: string;
text1: string;

}
export interface wkhtile {

text: string;
text1: string;

}

export interface wkltile {

text: string;
text1: string;

}

export interface percentagetile {
color: string;
cols: number;
rows: number;
text: string;
text1: string;
text2: string;

}

export interface wktile {
color: string;
cols: number;
rows: number;
text: string;
text1: string;

}
export interface opportile {
text1: string;

}
export interface weaknesstile {
text1: string;

}
export interface strengthstile {
text1: string;

}
export interface threatstile {
text1: string;

}
export interface financialtile {

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
export interface holdingtile {

text: string;
text1: string;


}

export interface pricetile {
color: string;
cols: number;
rows: number;
text: string;
text1: string;

}
export interface pricepclosetile {

text: string;
text1: string;

}
export interface OPNtile {
text: string;
text1: string;

}
export interface indicationtile {
text: string;
text1: string;


}
export interface indicationmtile {
  text: string;
  text1: string;
  
  
  }
export interface indicationwtile {
text: string;
text1: string;

}

export interface daytile {
color: string;
cols: number;
rows: number;
text: string;
text1: string;
text2: string;
text3: string;
text4: string;
text5: string;

}
export interface stockoptionssupporttile {
text1: string;
}
export interface stockoptionsresistancetile {
text1: string;
}


export interface deliverytile {
text: string;
text1: string;

}
export interface delvoltile {

text1: string;
text2: string;
text3: string;
text4: string;

}

export interface volume1tile {
text: string;
text1: string;

}
export interface volume2tile {
text2: string;
text1: string;
text3: string;
text4: string;

}
export interface volume3tile {
text2: string;
text1: string;
text3: string;


}
export interface titile {
text2: string;
text1: string;
text3: string;
text4: string;
}
export interface tiwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;
}
export interface timtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;
}
export interface bbtile {
text2: string;
text1: string;
text3: string;
text4: string;


}
export interface bbwtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;
  
  
}
export interface bbmtile {
  text2: string;
  text1: string;
  text3: string;
  text4: string;
  
  
  }
export interface finstatstile {
text1: string;
text2: string;

}
export interface historicalratingtile {
text1: string;
text2: string;

text: string;

}
export interface shareholdingtile {
text1: string;
text2: string;

text3: string;

}
export interface industrycomparisontile {
text1: string;
text2: string;
text4: string;
text3: string;

}
export interface dytile {
text1: string;
text2: string;


}
export interface pscoretile {
text1: string;
text2: string;
text4: string;
text3: string;

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
export interface ptetile {
text1: string;
text2: string;
text4: string;
text3: string;
text5: string;
text6: string;

}
export interface catile {
text1: string;
text2: string;
text4: string;
text3: string;


}
export interface returntile {
text1: string;
text2: string;
text4: string;
text3: string;


}
export interface ptbtile {
text1: string;
text2: string;
text4: string;
text3: string;
text5: string;
text6: string;

}
export interface roetile {
text1: string;
text2: string;
text4: string;
text3: string;
text5: string;
text6: string;

}
export interface qtrtile {
text1: string;
text2: string;
text4: string;
text3: string;
text5: string;
text6: string;

}
export interface pmovtile {
text1: string;
text2: string;
text3: string;
text: string;


}
export interface pmov1tile {
text1: string;
text2: string;
text3: string;
text: string;


}

export interface cagrtile {
text1: string;
text2: string;

text3: string;

}
export interface qtrhltile {
text1: string;
text2: string;
}
export interface vwaptile {
text: string;

}
export interface announcementtile {
text1: string;
text2: string;

text3: string;

}
export interface bqdelvoltile {
text1: string;
text2: string;

text3: string;

}
export interface bqdelvolmsgtile {
text1: string;
text2: string;
}
export interface pricedetailstile {
text1: string;
text2: string;


}
export interface kstile {
text1: string;
text2: string;


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

export interface listedindexnametile {

text1: string;
text2: string;
text3: string;
text4: string;
text5: string;
text6: string;

}


export interface csectorcompanytile {

text1: string;
text2: string;
text3: string;


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
export interface macdtile {

  text1: string;
  text2: string;
    text3: string;
    text4: string;
  }
  export interface macdsignaltile {
  
    text1: string;
    text2: string;
    text3: string;
    text4: string;
      
      
      }
  export interface rsitile {
  
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
export interface mfitile {
  
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
export interface stockpcrtile {
text1: number;
}


  
@Component({
  selector: 'app-ohlc',
  templateUrl: './ohlc.component.html',
  styleUrls: ['./ohlc.component.scss'],
})
export class OHLCComponent implements OnInit {
visibleSidebar1;
visibleSidebar2;
  
  visibleSidebar3;
  
  visibleSidebar4;
  
  visibleSidebar5;

basicData: any;
basicOptions: any;
// stock22: StockChart;
// stock23: StockChart;
chart;
dataSource: Object;
title: string;
tlid: any;
tlname: any;
options: any;
timeArr = [];
options31: any;
options1: any;
options2: any;
optionsjdataall: any;
options3: any;
options4: any;
options5: any;
options6: any;
options7: any;
options8: any;
options9: any;
etsectorname: any
sectorid: any
exchange: any
indexid: any
mcindexid: any
  scripcode: any
  
stockoptionwc = [];
stockoptionwp = [];
sectreturn: any
stockreturn: any
sensexreturn: any
name = 'Angular 4';
date: any;
hours: any;
val: any
minutes: any;
stockid: any
seconds: any;
bqstocks: any
exchange1: any
currentLocale: any;
NIFTYNEXT50adv: any
NIFTYNEXT50dec: any
NIFTYNEXT50unc: any
NIFTY50adv: any
indicatorssentiment: any
movingaveragecrossoversentiment: any
  masentiment: any
  indicatorssentimentm: any
movingaveragecrossoversentimentm: any
masentimentm: any
indicatorssentimentw: any
movingaveragecrossoversentimentw: any
masentimentw: any

NIFTY50dec: any
NIFTY50unc: any
NIFTYITadv: any
timeadvdec: any
message: any
NIFTYITdec: any
quarter: any
rank: any
cap: any
NIFTYITunc: any
mmdelivcomp:any
NIFTYBANKadv: any
NIFTYBANKdec: any
NIFTYBANKunc: any
NIFTYPHARMAadv: any
NIFTYPHARMAdec: any
NIFTYPHARMAunc: any
mcindexname: any
score: scoretile[] = [];
scoret: scorettile[] = [];
stockoptionssupport: stockoptionssupporttile[] = [];
stockoptionsresistance: stockoptionsresistancetile[] = []; 
nsesectorind: nsesectorindtiles[] = [];
nsesectorpe: nsesectorpetiles[] = [];
nsesymbolpe: nsesymbolpetiles[] = [];
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
macd: macdtile[] = [];
macdsignal:macdsignaltile[] = [];
rsi:rsitile[] = [];
mfi:mfitile[] = [];


nsedelivQ: nsedelivQtiles[] = [];
nseintraday: nseintradaytiles[] = [];
nsepreopen: nsepreopentiles[] = [];

ldiv: any
dyield: any
isin2: any
isTwelveHrFormat: false;
test: any;
tableData: any
stockList: any
nextexpirymonthly:any
etsectors: any
etindexs: any
mccompanyname: any
mcsymbolname: any
etindex: any
mcindexs: any
mcindex: any
isin: any
stock: any
indid: any
mcsymbol: any
stockisin: any
sentence: any
sentencedir: any
bqnames: any
companyid: any
stockname: any
dataTest: any
phol: any
pholmsg: any
dataTest1: any

dataTest2: any
ChartType6: any
eqsymbol: any
rec: any
news = []
news1 = []
loader = false
loader1 = false
loader2 = false
indicatordate: any
BUY1 = "BUY"
SELL = "SELL"
STRONG_BUY = "STRONG_BUY"
STRONG_SELL = "STRONG_SELL"
buy = "buy"
sell = "sell"
Bullish = "Bullish"

details = []
industry: any
indicatormadate: any
// element = document.getElementById("abc");
sector: any
currentprice: any
pricechange: any
priceperchange: any
tiles: Tile[] = [];
bb: bbtile[] = [];
hrating: historicalratingtile[] = [];
volume: volumetile[] = [];
uband: ubandtile[] = [];
lband: lbandtile[] = [];
hmsg: hmsgtile[] = [];
  pmov: pmovtile[] = [];
  newscard: newscardtile[] = [];
kstats: kstatstile[] = [];
listedindexname: listedindexnametile[] = [];
csectorcompany: csectorcompanytile[] = [];
pmov1: pmov1tile[] = [];
pte: ptetile[] = [];
ptb: ptbtile[] = [];
return: returntile[] = [];
announcement: announcementtile[] = [];
roe: roetile[] = [];
ca: catile[] = [];
hp: hptile[] = [];
lp: lptile[] = [];
wkh: wkhtile[] = [];
banknifty: bankniftytiles[] = [];
wkl: wkltile[] = [];
qtr: qtrtile[] = [];
qtrhl: qtrhltile[] = [];
delivery: deliverytile[] = [];
delvol: delvoltile[] = [];
wk: wktile[] = [];
day: daytile[] = [];
OPN: OPNtile[] = [];
bqdelvol: bqdelvoltile[] = [];
bqdelvolmsg: bqdelvolmsgtile[] = [];
peratio: peratiotiles[] = [];
pricepclose: pricepclosetile[] = [];
percentage: percentagetile[] = [];
price: pricetile[] = [];
CR1: any
tllink:any
financial: financialtile[] = [];
industrycomparison: industrycomparisontile[] = [];
indicator: indicatortile[] = [];
LineChartData5comb = [];
LineChartDataetindexcomb = [];

  ti: titile[] = [];
  tiw: tiwtile[] = [];
  tim: timtile[] = [];
  bbm: bbmtile[] = [];
  bbw: bbwtile[] = [];
  
timeframe:any

Opportunities: opportile[] = [];
strengths: strengthstile[] = [];
dy: dytile[] = [];
hgdata = [];
threats: threatstile[] = [];
weaknesses: weaknesstile[] = [];
indication: indicationtile[] = [];
  indicationw: indicationwtile[] = [];
  indicationm: indicationmtile[] = [];
volume1: volume1tile[] = [];
ks: kstile[] = [];
holding: holdingtile[] = [];
vscore: vscoretile[] = [];
fscore: fscoretile[] = [];
nsestockuc: any
nsestocklc: any
nsestockvwap:any
nsestockpband: any
vwapmsgp:any
vwapmsgn:any
nsestockcp:any
techscore: techscoretile[] = [];
stockpcr: stockpcrtile[] = [];
qscore: qscoretile[] = [];
finstats: finstatstile[] = [];
shareholding: shareholdingtile[] = [];
cagr: cagrtile[] = [];
indicatorma: indicatormatile[] = [];
pricedetails: pricedetailstile[] = [];
pscore: pscoretile[] = [];
dscore: dscoretile[] = [];
volscore: volscoretile[] = [];
mscore: mscoretile[] = [];
volume2: volume2tile[] = [];
volume3: volume3tile[] = [];
vwap: vwaptile[] = [];
headElements = ['id', 'R1', 'R2', 'R3', 'PP', 'S1', 'S2', 'S3'];

headElementspd = ['Details', 'Value'];
headElementsphol = ['Quarter', 'Value', 'Value2'];
headElementsshareh = ['Name', 'Q1', 'Q2', 'Change', 'Direction'];
headElementsema = ['key', 'value', 'indication'];
headElementssma = ['key', 'value', 'indication'];
headElementsmmpeers = ['Name', 'Fin_Trend', 'Quality_Rank', 'Quality', 'Tech_Score', 'Technicals', 'Valuation_Rank', 'Valuation'];
elements: any = [

];
elementspmov: any = [

];
elementsmmpeers: any = [];
elementsema: any = [

];
elementssma: any = [

];
elementsshareh: any = [

];
elementspd: any = [

];


elementsphol: any = [

];
elements2: any = [

];



public SystemName: string = "High";
firstCopy = false;
public SystemName1: string = "Close";
firstCopy1 = false;
public SystemName2: string = "VWAP";
firstCopy2 = false;
public SystemName3: string = "Volume";
firstCopy3 = false;
public SystemName4: string = "%Deliverable";
firstCopy4 = false;
public SystemName5: string = "Price";
firstCopy5 = false;
public SystemName5r1: string = "R1";
firstCopy5r1 = false;
public SystemName5r2: string = "R2";
firstCopy5r2 = false;
public SystemName5r3: string = "R3";
firstCopy5r3 = false;
public SystemName5s1: string = "S1";
firstCopy5s1 = false;
public SystemName5s2: string = "S2";
firstCopy5s2 = false;
public SystemName5s3: string = "S3";
firstCopy5s3 = false;
public SystemName7: string = "Nifty";
firstCopy7 = false;
public SystemName8: string = "macd";
firstCopy8 = false;
public SystemName9: string = "signal";
firstCopy9 = false;
public SystemName10: string = "price";
firstCopy10 = false;
public SystemName11: string = "LTP";
firstCopy11 = false;

public lineChartLabels: Array<any> = [];
public lineChartLabels1: Array<any> = [];
public lineChartLabels2: Array<any> = [];
public lineChartLabels3: Array<any> = [];
public lineChartmacdwLabels: Array<any> = [];
public lineChartmacdmLabels: Array<any> = [];
public lineChartrsimLabels: Array<any> = [];
public lineChartrsiwLabels: Array<any> = [];
public lineChartLabels4: Array<any> = [];
public lineChartLabels5: Array<any> = [];
public lineChartLabels5r1: Array<any> = [];
public lineChartLabels5r2: Array<any> = [];
public lineChartLabels5r3: Array<any> = [];
public lineChartLabels5s1: Array<any> = [];
public lineChartLabels5s2: Array<any> = [];
public lineChartLabels5s3: Array<any> = [];
public lineChartLabels7: Array<any> = [];
public lineChartData7: Array<number> = [];
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
public lineChartDatarsiw: Array<number> = [];
public lineChartDataubandw: Array<number> = [];
public lineChartDatalbandw: Array<number> = [];
public lineChartDatarsim: Array<number> = [];
public lineChartDataubandm: Array<number> = [];
public lineChartDatalbandm: Array<number> = [];
public lineChartDatajdatadate: Array<number> = [];
public lineChartDatajdatadelp: Array<number> = [];
public lineChartDatajdatadateall: Array<number> = [];
public lineChartDatajdatadelpall: Array<number> = [];

public lineChartData: Array<number> = [];
public lineChartData1: Array<number> = [];
public lineChartData2: Array<number> = [];
public lineChartData3: Array<number> = [];
public lineChartData4: Array<number> = [];
public lineChartData5: Array<number> = [];
//public lineChartData5comb: Array<number> = [{ x:data, y }];
public lineChartData8: Array<number> = [];
public lineChartData9: Array<number> = [];
public lineChartDataetindicescharts: Array<number> = [];
public lineChartLabelstindicescharts: Array<number> = [];
public lineChartData5r1: Array<number> = [];
public lineChartData5r2: Array<number> = [];
public lineChartData5r3: Array<number> = [];
public lineChartData5s1: Array<number> = [];
public lineChartData5s2: Array<number> = [];
public lineChartData5s3: Array<number> = [];
public labelMFL: Array<any> = [
  {
    data: this.lineChartData3,
    label: this.SystemName3
  }
];
public labelMFL2: Array<any> = [
  {
    data: this.lineChartData2,
    label: this.SystemName2
  }
];
public labelMFL1: Array<any> = [

  { data: this.lineChartData1, label: this.SystemName1 },
  { data: this.lineChartData, label: this.SystemName },
  { data: this.lineChartData2, label: this.SystemName2 },
  { data: this.lineChartData9, label: this.SystemName11 }


];
public labelMFL4: Array<any> = [

  { data: this.lineChartData4, label: this.SystemName4 }



];
public labelMFL5: Array<any> = [

  { data: this.lineChartData5, label: this.SystemName5 },
  { data: this.lineChartData5r1, label: this.SystemName5r1 },
  { data: this.lineChartData5r2, label: this.SystemName5r2 },
  { data: this.lineChartData5r3, label: this.SystemName5r3 },
  { data: this.lineChartData5s1, label: this.SystemName5s1 },
  { data: this.lineChartData5s2, label: this.SystemName5s2 },
  { data: this.lineChartData5s3, label: this.SystemName5s3 }




];
public labelMFL6: Array<any> = [
  { data: this.lineChartData7, label: this.SystemName7 }
];
public labelMFL7: Array<any> = [
  { data: this.lineChartDatamacdm, label: this.SystemName8 },
  { data: this.lineChartDatasignalm, label: this.SystemName9 },
  { data: this.lineChartDatapricemacdm, label: this.SystemName10 }
];

dblist = { 'mydb': [], 'jdata': [], 'stockDB': [], 'investingpivot_D': [], 'investingMA_D': [], 'investingpivot_W': [] }
// Data for NGPrime Charts
lineStylesData: any;

//Highcharts: typeof Highcharts = Highcharts;

// chartOptions: Highcharts.Options = {
//   series: [
//     {
//       type: "line",
//       data: [this.hgdata]
//     }
//   ]
// };

constructor(private primengConfig: PrimeNGConfig,private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router, private vps: ViewportScroller) {
  setInterval(() => {
    const currentDate = new Date();
    this.date = currentDate.toLocaleTimeString();
  }, 1000);

}


public lineChartOptions: any = {
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

_lineChartColors: Array<any> = [{
  backgroundColor: 'green',
  borderColor: 'green',
  pointBackgroundColor: 'green',
  pointBorderColor: 'green',
  pointHoverBackgroundColor: 'green',
  pointHoverBorderColor: 'green'
}];



public ChartType = 'line';

public chartClicked(e: any): void {
  console.log(e);
}
public chartHovered(e: any): void {
  console.log(e);
}

public lineChartOptions1: any = {
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

_lineChartColors1: Array<any> = [{
  backgroundColor: 'green',
  borderColor: 'green',
  pointBackgroundColor: 'green',
  pointBorderColor: 'green',
  pointHoverBackgroundColor: 'green',
  pointHoverBorderColor: 'green'
}];



public ChartType1 = 'line';

public chartClicked1(e: any): void {
  console.log(e);
}
public chartHovered1(e: any): void {
  console.log(e);
}
public lineChartOptions2: any = {
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

_lineChartColors2: Array<any> = [{
  backgroundColor: 'green',
  borderColor: 'green',
  pointBackgroundColor: 'green',
  pointBorderColor: 'green',
  pointHoverBackgroundColor: 'green',
  pointHoverBorderColor: 'green'
}];



public ChartType2 = 'line';

public chartClicked2(e: any): void {
  console.log(e);
}
public chartHovered2(e: any): void {
  console.log(e);
}

public lineChartOptions3: any = {
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

_lineChartColors3: Array<any> = [{
  backgroundColor: 'green',
  borderColor: 'green',
  pointBackgroundColor: 'green',
  pointBorderColor: 'green',
  pointHoverBackgroundColor: 'green',
  pointHoverBorderColor: 'green'
}];



public ChartType3 = 'bar';

public chartClicked3(e: any): void {
  console.log(e);
}
public chartHovered3(e: any): void {
  console.log(e);
}
public lineChartOptions4: any = {
  responsive: true,
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

_lineChartColors4: Array<any> = [{
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


ngOnInit() {
  

  this.primengConfig.ripple = true;
  this.stockList = stocks.default.Data
  this.stock = stocks.default.Data
  this.bqstocks = bqstock.default.Data
  this.etsectors = etsector.default.Data
  this.etindexs = etindex.default.Data
  this.mcindexs = mcindex.default.Data
  //console.log(this.etindexs)

  ///Prime ng charts
  this.lineStylesData = [{

    data: this.lineChartData7, label: this.lineChartLabels7
  }];


  console.log()
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
    


    //this.getohlcDetails(params.stock, 'mydb')
    this.gettrendlynestocks1(this.tlid,this.tlname,this.eqsymbol)
    this.getgooglenews(params.stock, 'googlenews')
    //  this.getStockData(params.stock, 'stockDB')
    //this.getsnrDetails(params.stock, 'investingpivot_D')
    //this.getIndicatorsma(params.stock, 'investingMA_D')
    this.getnse()
    this.getmcswot(this.mcsymbol)
    this.getkite1(this.timeframe,this.eqsymbol)
    this.getnse1()
    this.getmcti(this.mcsymbol)
    this.getmctiw(this.mcsymbol)
    this.getmctim(this.mcsymbol)
    this.getnse2()
    this.gnewsapi(this.bqnames)
    this.getdbjdata(this.eqsymbol, 'jdata')
    this.getdbjdataall(this.eqsymbol, 'jdata')
    this.getmmpeers(this.stockid)
    //this.opstraexpirydatesmonthly(this.eqsymbol)
    this.getmmtechscore(this.stockid)
    this.getmmpmov(this.stockid)
    this.getnifty50()
    this.getetcompanydataohlc(this.companyid)
    this.getswot(this.mcsymbol)
    this.getmcswot(this.mcsymbol)
    this.gettrendlynestocks2(this.tlid)
    this.gettrendlynestocks3(this.tlid)
    this.populateData()
    this.nsedatastockohlc1(this.eqsymbol)
    this.nsedatastockohlc2(this.eqsymbol)
    this.getmchistoricalrating(this.mcsymbol)
    //this.populateDetails1(params.stock, 'mydb')
    
    this.getmcindexdata()
    this.getmcsnr(this.mcsymbol)
    this.getmcsnrw(this.mcsymbol)
    this.getmcsnrm(this.mcsymbol)
    this.getmcsd(this.mcsymbol)
    this.getmcpv(this.mcsymbol)
    
    this.getmcchartsdata(this.mcsymbol)
    this.getmcchartsdataohlc(this.mcsymbol)
    this.getbqbdetails(this.stockid)
    this.getbqmovement(this.stockid)
    this.getmmmacd(this.stockid)
    this.getmmrsi(this.stockid)
    this.getmmma(this.stockid)
    this.getmmstockinfo(this.stockid)
    this.getmmbb(this.stockid)
    this.getmmkst(this.stockid)
    this.getmmobv(this.stockid)
    this.getmmdow(this.stockid)
    this.getmcmovingaveragesview(this.stockisin,'moneycontrol')
    //this.getbqpricestats(this.stockid)
    this.nsedatastockoi(this.eqsymbol)
    this.getbqfundamentals(this.stockid)
    this.getbqmovingaverages(this.stockid)
    this.getbqdelvol(this.stockid)
    this.getbqqresults(this.stockid)
    this.getbqtr(this.stockid)
    this.getbqss(this.stockid)
    this.getbqsc(this.stockid)
    this.getbqph(this.stockid)
    this.getbqks(this.stockisin)
    this.getbqannouncements(this.stockisin)
    this.getbqca(this.stockid)
    this.getbqitnews(this.bqnames)
    this.getbqpd(this.stockid)
    this.nsestockhistdata(this.eqsymbol)
    { setInterval(() => { this.getmcchartsdata(this.mcsymbol) }, 30000); }
    { setInterval(() => { this.getmcsd(this.mcsymbol) }, 10000); }
    {
      setInterval(() => { this.gnewsapi(this.bqnames) }, 300000);
    }
    const xAxisData = [];
    const data1 = [];
    const data2 = [];








  });

}


populateData() {

  for (let val in this.details) {
    this.tiles.push({ text: this.details[val].averagePrice, cols: 1, rows: 1, color: 'lightgreen' })
  }
}

gettrendlynestocks2(tlid) {
  this.dataApi.gettrendlynestocks2(tlid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    this.dscore.push({ text1:nestedItems[0]['stockData'][6],text2:nestedItems[0]['stockData'][9] })
    this.volscore.push({ text1:nestedItems[0]['stockData'][7],text2:nestedItems[0]['stockData'][10]  })
    this.mscore.push({ text1:nestedItems[0]['stockData'][8],text2:nestedItems[0]['stockData'][11]  })
    this.tllink="https://trendlyne.com/alerts/stock-alerts/"+this.eqsymbol+"/"+this.tlid+"/"+this.tlname
      
  }, err => {
    console.log(err)
  })
}

gettrendlynestocks3(tlid) {
  this.dataApi.gettrendlynestocks3(tlid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    ///////////check later----console.log(nestedItems)
        
      
  }, err => {
    console.log(err)
  })
}

gnewsapi(bqnames) {
  this.dataApi.gnewsapi(bqnames).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.newscard.length = 0;
    for (let val in nestedItems[2]) {
      this.newscard.push({text1:nestedItems[2][val].title,text2:nestedItems[2][val].url,text3:nestedItems[2][val].urlToImage,text4:nestedItems[2][val].description,text5:nestedItems[2][val].content})
      
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
      //this.lineStylesData.push(nestedItems[1].values[val]["_value"])
      //this.lineStylesData.labels.push(nestedItems[1].values[val]["_time"])

    }
  }, err => {
    console.log(err)
  })
}
nsedatastockohlc1(eqsymbol) {
  this.dataApi.nsedatastockohlc1(this.eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.nsesectorind.push({ text1: nestedItems[1].pdSectorInd })
    this.nsesectorpe.push({ text1: nestedItems[1].pdSectorPe })
    this.nsesymbolpe.push({text1:nestedItems[1].pdSymbolPe})
   /////check later console.log(nestedItems)
    this.nseintraday.push({ text1: nestedItems[3]["intraDayHighLow"].max, text2: nestedItems[3]["intraDayHighLow"].min, text3: nestedItems[3]["intraDayHighLow"].value })
    this.nsestockuc = nestedItems[3].upperCP
    this.nsestockcp=nestedItems[3].lastPrice
    this.nsestocklc = nestedItems[3].lowerCP
    this.nsestockvwap = nestedItems[3].vwap
    this.nsestockpband = nestedItems[3].pPriceBand
    if (this.nsestockcp > this.nsestockvwap) {
      this.vwapmsgp="Price is Greater Than Current VWAP" 
    }
    else  if (this.nsestockcp < this.nsestockvwap) {
      this.vwapmsgn="Price is Less Than Current VWAP" 
    } 
    this.nsepreopen.push({ text1: nestedItems[4].finalPrice, text2: nestedItems[4].finalQuantity })
    
    for (let val in nestedItems[4]["preopen"]) {
     // console.log(nestedItems[4]["preopen"][val].price,nestedItems[4]["preopen"][val].buyQty,nestedItems[4]["preopen"][val].sellQty)
    }
  }, err => {
    console.log(err)
  })
}
nsestockhistdata(eqsymbol) {
  this.dataApi.nsestockhistdata(this.eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    for (let val in nestedItems[0]) {
      this.lineChartData3.unshift(nestedItems[0][val].CH_TOT_TRADED_VAL)
      this.lineChartData.unshift(nestedItems[0][val].CH_TRADE_HIGH_PRICE)
      this.lineChartData1.unshift(nestedItems[0][val].CH_TRADE_LOW_PRICE)
      this.lineChartData2.unshift(nestedItems[0][val].VWAP)
      this.lineChartData9.unshift(nestedItems[0][val].CH_LAST_TRADED_PRICE)
      this.lineChartLabels1.unshift(nestedItems[0][val].CH_TIMESTAMP)
      this.lineChartLabels.unshift(nestedItems[0][val].CH_TIMESTAMP)
    
    }
  }, err => {
    console.log(err)
  })
}


nsedatastockohlc2(eqsymbol) {
  this.dataApi.nsedatastockohlc2(this.eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
   /// //check later console.log(nestedItems)
    this.nsedelivQ.push({ text1: nestedItems[3].deliveryQuantity, text2: nestedItems[3].deliveryToTradedQuantity, text3: nestedItems[3].quantityTraded })
    
  }, err => {
    console.log(err)
  })
}
gettrendlynestocks1(tlid,tlname,eqsymbol) {
  this.dataApi.gettrendlynestocks1(tlid,tlname,eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    ///check later console.log(nestedItems)
    
    this.brokertarget.push({ text1: nestedItems[0]['broker_avg_target']['lt1'], text2: nestedItems[0]['broker_avg_target']['st1'], text3: nestedItems[0]['broker_avg_target']['color1'] })
    this.brokerrecodowngrade.push({text1:nestedItems[0]['broker_recodown_6M']['lt1'], text2: nestedItems[0]['broker_recodown_6M']['st1'], text3: nestedItems[0]['broker_recodown_6M']['color1'] })
    this.brokerrecoupgrade.push({text1:nestedItems[0]['broker_recoup_6M']['lt1'], text2: nestedItems[0]['broker_recoup_6M']['st1'], text3: nestedItems[0]['broker_recoup_6M']['color1'] } )
    this.brokertargetupgrade.push({text1:nestedItems[0]['broker_targetup_6M']['lt1'], text2: nestedItems[0]['broker_targetup_6M']['st1'], text3: nestedItems[0]['broker_targetup_6M']['color1'] })
    this.brokertargetdowngrade.push({text1:nestedItems[0]['broker_targetdown_6M']['lt1'], text2: nestedItems[0]['broker_targetdown_6M']['st1'], text3: nestedItems[0]['broker_targetdown_6M']['color1'] })
    this.ema_26.push({text1:nestedItems[0]['ema_26']['lt1'], text2: nestedItems[0]['ema_26']['st1'], text3: nestedItems[0]['ema_26']['color1'],text4: nestedItems[0]['ema_26']['value'] })
    this.ema_50.push({text1:nestedItems[0]['ema_50']['lt1'], text2: nestedItems[0]['ema_50']['st1'], text3: nestedItems[0]['ema_50']['color1'],text4: nestedItems[0]['ema_50']['value']  })
    this.ema_100.push({text1:nestedItems[0]['ema_100']['lt1'], text2: nestedItems[0]['ema_100']['st1'], text3: nestedItems[0]['ema_100']['color1'],text4: nestedItems[0]['ema_100']['value']  })
    this.ema_200.push({text1:nestedItems[0]['ema_200']['lt1'], text2: nestedItems[0]['ema_100']['st1'], text3: nestedItems[0]['ema_100']['color1'],text4: nestedItems[0]['ema_200']['value']  })
    this.sma_30.push({text1:nestedItems[0]['sma_30']['lt1'], text2: nestedItems[0]['sma_30']['st1'], text3: nestedItems[0]['sma_30']['color1'],text4: nestedItems[0]['sma_30']['value'] })
    this.sma_50.push({text1:nestedItems[0]['sma_50']['lt1'], text2: nestedItems[0]['sma_50']['st1'], text3: nestedItems[0]['sma_50']['color1'],text4: nestedItems[0]['sma_50']['value']  })
    this.sma_100.push({text1:nestedItems[0]['sma_100']['lt1'], text2: nestedItems[0]['sma_100']['st1'], text3: nestedItems[0]['sma_100']['color1'],text4: nestedItems[0]['sma_100']['value']  })
    this.sma_200.push({text1:nestedItems[0]['sma_200']['lt1'], text2: nestedItems[0]['sma_100']['st1'], text3: nestedItems[0]['sma_100']['color1'],text4: nestedItems[0]['sma_200']['value']  })
    this.macd.push({text1:nestedItems[0]['macd']['lt1'], text2: nestedItems[0]['macd']['st1'], text3: nestedItems[0]['macd']['color1'],text4: nestedItems[0]['macd']['value']  })
    this.macdsignal.push({text1:nestedItems[0]['macdsignal']['lt1'], text2: nestedItems[0]['macdsignal']['st1'], text3: nestedItems[0]['macdsignal']['color1'],text4: nestedItems[0]['macdsignal']['value']  })
    this.rsi.push({text1:nestedItems[0]['rsi']['lt1'], text2: nestedItems[0]['rsi']['st1'], text3: nestedItems[0]['rsi']['color1'],text4: nestedItems[0]['rsi']['value']  })
    this.mfi.push({text1:nestedItems[0]['mfi']['lt1'], text2: nestedItems[0]['mfi']['st1'], text3: nestedItems[0]['mfi']['color1'],text4: nestedItems[0]['mfi']['value']  })
    
    
    
  }, err => {
    console.log(err)
  })
}





getmcchartsdata(mcsymbol) {
  this.dataApi.getmcchartsdata(mcsymbol).subscribe(data3 => {

    let nestedItems = Object.keys(data3).map(key => {
      return data3[key];
    });
    this.lineChartData5.length = 0;
    this.lineChartLabels5.length = 0;
    for (let val in nestedItems[5]) {
      this.lineChartData5.push(nestedItems[5][val].value)

      this.lineChartLabels5.push(new Date(nestedItems[5][val].time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }).replace(':', ''))

      this.LineChartData5comb.push([new Date(nestedItems[5][val].time * 1000).toLocaleTimeString("en-IN"), nestedItems[5][val].value])


    }
    
    this.basicData = {
      type: 'line',
      labels: this.lineChartLabels5,
      borderColor: 'rgb(143, 247, 183)',
      borderWidth: 2,
      datasets: [{ label: 'Price', data:this.lineChartData5,backgroundColor: 'rgb(143, 247, 183)',borderColor: '#42A5F5',fill: false },{ label: 'Resistance1', data:this.lineChartData5r1,backgroundColor:'rgb(247, 54, 54)',borderColor: '#42A5F5',fill: false },{ label: 'Resistance2', data:this.lineChartData5r2,backgroundColor: 'rgb(247, 54, 54)',borderColor: 'rgb(247, 54, 54)',fill: false },{ label: 'Support1', data:this.lineChartData5s1,backgroundColor: 'rgb(143, 247, 183)',borderColor: 'rgb(143, 247, 183)',fill: false },{ label: 'Support2', data:this.lineChartData5s2,backgroundColor: 'rgb(143, 247, 183)',borderColor: 'rgb(143, 247, 183)',fill: false },{ label: 'Support3', data:this.lineChartData5s3,backgroundColor: 'rgb(143, 247, 183)',borderColor: 'rgb(143, 247, 183)',fill: false },{ label: 'Resistance3', data:this.lineChartData5r3,backgroundColor: 'rgb(247, 54, 54)',borderColor: 'rgb(247, 54, 54)',fill: false }],
      
      
    }
    this.basicOptions = {
      legend: {
        labels: {
            fontColor: '#495057'
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }]
    }
  };
  
    // this.stock22 = new StockChart({
    //   rangeSelector: {
    //     selected: 1
    //   },
    //   title: {
    //     text: this.stockname
    //   },
    //   series: [{
    //     tooltip: {
    //       valueDecimals: 2
    //     },
    //     name: this.stockname,
    //     type: 'line',
    //     data: this.LineChartData5comb
    //   }]
    // });




  }, err => {
    console.log(err)




  })
}
getmcchartsdataohlc(mcsymbol) {
  this.dataApi.getmcchartsdataohlc(mcsymbol).subscribe(data3 => {

    let nestedItems = Object.keys(data3).map(key => {
      return data3[key];
    });
    for (let val in nestedItems[1]) { }

  }, err => {
    console.log(err)




  })
}
getkite1(timeframe,eqsymbol) {
  this.timeframe='hour'
  this.dataApi.getkite1(this.timeframe,this.eqsymbol).subscribe(data3 => {

    let nestedItems = Object.keys(data3).map(key => {
      return data3[key];
    });
    console.log("Kite Output="+nestedItems)

  }, err => {
    console.log(err)




  })
}

// getbqnews(bqnames) {
//  this.dataApi.getbqnews(bqnames).subscribe(data3 => {

//  let nestedItems = Object.keys(data3).map(key => {
//   return data3[key];
//});

//for (let val in nestedItems[5]) {
//this.isin2 = this.stockList.filter(i => i.name  == this.bqstocks.name)[0].isin
//console.log(this.isin2)
//       this.lineChartData5.push(nestedItems[5][val].value)
//       //console.log(nestedItems[5][val].time)
//       this.lineChartLabels5.push(new Date(nestedItems[5][val].time * 1000).toLocaleDateString("en-IN"))

//    }


//  }, err => {
//  console.log(err)




//})
// }





// populatesnrDetails(stock_isin, dbname) {
//   this.SpinnerService.show();
//   this.dataApi.getsnrDetails(stock_isin, dbname).subscribe(data5 => {
//     this.dblist[dbname] = data5

//     this.dataTest2 = data5
//     for (let val in data5) {
//       this.lineChartData2.push(data5[val].s3)

//       this.lineChartLabels2.push(new Date(data5[val].date).toLocaleDateString("en-IN"))

//     }
//     this.SpinnerService.hide();
//   }, err => {
//     console.log(err)
//   })
// }
  getmcsnr(mcsymbol) {
  this.dataApi.getmcsnr(this.mcsymbol).subscribe(data5 => {


    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.indication.push({ text1: nestedItems[3].indication, text: "Daily" })
    this.elements.push({ id: nestedItems[0][0].key, R1: nestedItems[0][0].pivotLevel.r1, R2: nestedItems[0][0].pivotLevel.r2, R3: nestedItems[0][0].pivotLevel.r3, PP: nestedItems[0][0].pivotLevel.pivotPoint, S1: nestedItems[0][0].pivotLevel.s1, S2: nestedItems[0][0].pivotLevel.s2, S3: nestedItems[0][0].pivotLevel.s3 })
    this.elements.push({ id: nestedItems[0][1].key, R1: nestedItems[0][1].pivotLevel.r1, R2: nestedItems[0][1].pivotLevel.r2, R3: nestedItems[0][1].pivotLevel.r3, PP: nestedItems[0][1].pivotLevel.pivotPoint, S1: nestedItems[0][1].pivotLevel.s1, S2: nestedItems[0][1].pivotLevel.s2, S3: nestedItems[0][1].pivotLevel.s3 })
    this.elements.push({ id: nestedItems[0][2].key, R1: nestedItems[0][2].pivotLevel.r1, R2: nestedItems[0][2].pivotLevel.r2, R3: nestedItems[0][2].pivotLevel.r3, PP: nestedItems[0][2].pivotLevel.pivotPoint, S1: nestedItems[0][2].pivotLevel.s1, S2: nestedItems[0][2].pivotLevel.s2, S3: nestedItems[0][2].pivotLevel.s3 })
    for (let val in nestedItems[1]) {
      this.elementssma.push({ key: nestedItems[1][val].key, value: nestedItems[1][val].value, indication: nestedItems[1][val].indication })
    }
    for (let val in nestedItems[2]) {
      this.elementsema.push({ key: nestedItems[2][val].key, value: nestedItems[2][val].value, indication: nestedItems[2][val].indication })
    }

    this.indicatorssentiment = (nestedItems[3]["indicatorsSentiment"].indication)
    this.movingaveragecrossoversentiment = (nestedItems[3]["movingAverageCrossOverSentiment"].indication)
    this.masentiment = (nestedItems[3]["movingAverageSentiment"].indication)
    let val = 0;
    while (val != 400) {
      val = val + 1;
      this.lineChartData5r1.push(nestedItems[0][1].pivotLevel.r1),
        this.lineChartData5r2.push(nestedItems[0][1].pivotLevel.r2),
        this.lineChartData5r3.push(nestedItems[0][1].pivotLevel.r3),
        this.lineChartData5s3.push(nestedItems[0][1].pivotLevel.s3),
        this.lineChartData5s2.push(nestedItems[0][1].pivotLevel.s2),
        this.lineChartData5s1.push(nestedItems[0][1].pivotLevel.s1)
    }




  }, err => {
    console.log(err)
  }
  )
}


nsedatastockoi(eqsymbol) {
  this.dataApi.nsedatastockoi(eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.stockpcr.push({ text1: (nestedItems[1]['PE'].totOI / nestedItems[1]['CE'].totOI) })
    
    //console.log(nestedItems[1]['data'])
    for (let val in nestedItems[1]['data']) {
      if (nestedItems[1]['data'][val]['CE']) {
        if ((nestedItems[1]['data'][val]['CE']).length !== 0) {
      
      this.stockoptionwc.push(nestedItems[1]['data'][val]['CE'].openInterest);
        }
      }
    }
    for (let val in nestedItems[1]['data']) {
      if (nestedItems[1]['data'][val]['CE']) {
        var maxc = this.stockoptionwc.reduce((a, b) => Math.max(a, b));  // 5
      }
    }
    
          for (let val in nestedItems[1]['data']) {
            if (nestedItems[1]['data'][val]['CE']) {
            if (nestedItems[1]['data'][val]['CE'].openInterest == maxc) {
              this.stockoptionsresistance.push({ text1: nestedItems[1]['data'][val]['CE'].strikePrice })
            }
            }
          
        
      if (nestedItems[1]['data'][val]['PE']) {
        if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
          // console.log("Put")
          // console.log(nestedItems[1]['data'][val]['PE'].changeinOpenInterest, nestedItems[1]['data'][val]['PE'].strikePrice)
      
          this.stockoptionwp.push(nestedItems[1]['data'][val]['PE'].openInterest);
        }
      }
    }
    
      const maxp = this.stockoptionwp.reduce((a, b) => Math.max(a, b));  // 5
      console.log("maximum"+maxp)
    for (let val in nestedItems[1]['data']) {
      if (nestedItems[1]['data'][val]['PE']) {
        if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
    
          if (nestedItems[1]['data'][val]['PE'].openInterest == maxp) {
            this.stockoptionssupport.push({ text1: nestedItems[1]['data'][val]['PE'].strikePrice })
          
          }
        }
      }
    }
    
      
      
    
    
  }, err => {
    console.log(err)
  }
  )
}


getmcsnrw(mcsymbol) {
  this.dataApi.getmcsnrw(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.indicationw.push({ text1: nestedItems[3].indication, text: "Weekly" })
    this.indicatorssentimentw = (nestedItems[3]["indicatorsSentiment"].indication)
    this.movingaveragecrossoversentimentw = (nestedItems[3]["movingAverageCrossOverSentiment"].indication)
    this.masentimentw = (nestedItems[3]["movingAverageSentiment"].indication)
  }, err => {
    console.log(err)
  }
  )
}

getmcsnrm(mcsymbol) {
  this.dataApi.getmcsnrm(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.indicationm.push({ text1: nestedItems[3].indication, text: "Monthly" })
    this.indicatorssentimentm = (nestedItems[3]["indicatorsSentiment"].indication)
    this.movingaveragecrossoversentimentm = (nestedItems[3]["movingAverageCrossOverSentiment"].indication)
    this.masentimentm = (nestedItems[3]["movingAverageSentiment"].indication)
  }, err => {
    console.log(err)
  }
  )
}

getmcswot(mcsymbol) {
  this.dataApi.getmcswot(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems[1]["opportunities"].info) {
      this.Opportunities.push({ text1: nestedItems[1]["opportunities"].info[val] })
    }
    for (let val in nestedItems[1]["threats"].info) {
      this.threats.push({ text1: nestedItems[1]["threats"].info[val] })
    }
    for (let val in nestedItems[1]["strengths"].info) {
      this.strengths.push({ text1: nestedItems[1]["strengths"].info[val] })
    }
    for (let val in nestedItems[1]["weaknesses"].info) {
      this.weaknesses.push({ text1: nestedItems[1]["weaknesses"].info[val] })
    }
  }, err => {
    console.log(err)
  }
  )
}

getmcti(mcsymbol) {
  this.dataApi.getmcti(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    for (let val in nestedItems[14]) {
      if (nestedItems[14][val].id != 'bollinger') {
        
        this.ti.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
      }

      else if (nestedItems[14][val].id == 'bollinger') {
        for (let val1 in data5["indicators"][9]["value"]) {
          this.bb.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
        }
      }

    }


  }, err => {
    console.log(err)
  }
  )
}

getmctiw(mcsymbol) {
  this.dataApi.getmctiw(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    for (let val in nestedItems[14]) {
      if (nestedItems[14][val].id != 'bollinger') {
        
        this.tiw.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
      }

      else if (nestedItems[14][val].id == 'bollinger') {
        for (let val1 in data5["indicators"][9]["value"]) {
          this.bbw.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
        }
      }

    }


  }, err => {
    console.log(err)
  }
  )
}

getmctim(mcsymbol) {
  this.dataApi.getmctim(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    for (let val in nestedItems[14]) {
      if (nestedItems[14][val].id != 'bollinger') {
        
        this.tim.push({ text1: nestedItems[14][val].displayName, text2: nestedItems[14][val].id, text3: nestedItems[14][val].indication, text4: nestedItems[14][val].value })
      }

      else if (nestedItems[14][val].id == 'bollinger') {
        for (let val1 in data5["indicators"][9]["value"]) {
          this.bbm.push({ text1: nestedItems[14][9]["value"][val1].value, text2: nestedItems[14][9]["value"][val1].id, text3: nestedItems[14][9]["value"][val1].upperband, text4: nestedItems[14][9].value[val1].lowerband })
        }
      }

    }


  }, err => {
    console.log(err)
  }
  )
}

  opstraexpirydatesmonthly(eqsymbol) {
  this.dataApi.opstraexpirydatesmonthly(this.eqsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.nextexpirymonthly = nestedItems[0]
    console.log(this.nextexpirymonthly)
    console.log(this.eqsymbol)
    this.opstrastockdata(this.eqsymbol,this.nextexpirymonthly)
  
  })
  //await 
}
opstrastockdata(eqsymbol,nextexpirymonthly) {
  this.dataApi.opstrastockdata(this.eqsymbol,this.nextexpirymonthly).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    console.log(nestedItems)
    

  }, err => {
    console.log(err)
  })
}



getmcsd(mcsymbol) {
  this.dataApi.getmcsd(mcsymbol).subscribe(data5 => {

    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.lband.length=0;
    this.uband.length=0;
    this.hp.length=0;
    this.lp.length=0;
    this.wkh.length=0;
    this.wkl.length=0;
    
    this.pricepclose.length=0;
    this.OPN.length=0;
    this.delivery.length=0;
    this.delvol.length=0;
    this.lband.push({ text1: data5["lower_circuit_limit"], text: "Lower Circuit" })
    this.uband.push({ text1: data5["upper_circuit_limit"], text: "Upper Circuit" })
    this.hp.push({ text1: data5["HP"], text: "Day High" })
    this.lp.push({ text1: data5["LP"], text: "Day Low" })
    this.wkh.push({ text1: data5["52H"], text: "52 wk High" })
    this.wkl.push({ text1: data5["52L"], text: "52 wk Low" })
    this.currentprice = data5["pricecurrent"]
    this.pricechange = data5["pricechange"]
    this.priceperchange = data5["pricepercentchange"] + "%"
    this.pricepclose.push({ text1: data5["priceprevclose"], text: "Prev Close" })
    this.OPN.push({ text1: data5["OPN"], text: "Open Price" })
    this.delivery.push({ text1: data5["DELV"] + "%", text: "Delivery D-1" })
    this.delvol.push({ text1: "3d AvgDelvol :" + data5["AvgDelVolPer_3day"] + "%", text2: "5d AvgDelvol :" + data5["AvgDelVolPer_5day"] + "%", text3: "8d AvgDelvol :" + data5["AvgDelVolPer_8day"] + "%", text4: "20d AvgDelvol :" + data5["AvgDelVolPer_20day"] + "%" })


    

  }, err => {
    console.log(err)
  }
  )
}
getnse() {
  this.dataApi.getnse().subscribe(data5 => {




    for (let val in data5) {

    }

  }, err => {
    console.log(err)
  }
  )
}


getmchistoricalrating(mcsymbol) {
  this.dataApi.getmchistoricalrating(mcsymbol).subscribe(data5 => {
    let i = Object.keys(data5).length - 1;
    while (i > Object.keys(data5).length - 6) {
      this.hrating.push({ text: data5[i].currSentiment, text1: data5[i].currdate, text2: data5[i].closeProce })
      i = i - 1
    }
  }, err => {
    console.log(err)
  }
  )
}
getswot(mcsymbol) {
  this.dataApi.getswot(mcsymbol).subscribe(data5 => {
    this.loader = true

    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
console.log(nestedItems)
    for (let val in nestedItems[1]["insightData"]["shareholding"]) {
      this.shareholding.push({ text1: nestedItems[1]["insightData"]["shareholding"][val].title, text2: nestedItems[1]["insightData"]["shareholding"][val].color, text3: nestedItems[1]["insightData"]["shareholding"][val].shortDesc })
    }
    for (let val in nestedItems[1]["insightData"]["industryComparison"]) {
      this.industrycomparison.push({ text1: nestedItems[1]["insightData"]["industryComparison"][val].title, text2: nestedItems[1]["insightData"]["industryComparison"][val].color, text3: nestedItems[1]["insightData"]["industryComparison"][val].shortDesc, text4: nestedItems[1]["insightData"]["industryComparison"][val].value })
    }
    for (let val in nestedItems[1]["insightData"]["price"]) {
      this.pricedetails.push({ text1: nestedItems[1]["insightData"]["price"][val].color, text2: nestedItems[1]["insightData"]["price"][val].shortDesc })
    }

    this.cagr.push({ text1: nestedItems[1]["insightData"]["financials"]["cagr"].NetProfit, text2: nestedItems[1]["insightData"]["financials"]["cagr"].OperatingProfit, text3: nestedItems[1]["insightData"]["financials"]["cagr"].Revenue })
    this.pscore.push({ text1: "P Score:", text2: nestedItems[1]["insightData"]["financials"]["piotroskiData"].score, text3: nestedItems[1]["insightData"]["financials"]["piotroskiData"].shortDesc, text4: nestedItems[1]["insightData"]["financials"]["piotroskiData"].color })

  }, err => {
    console.log(err)
    this.loader = false
  }
  )
}

getnse1() {
  this.dataApi.getnse1().subscribe(data5 => {
    for (let val in data5) {

    }
  }, err => {
    console.log(err)
  }
  )
}
getnse2() {
  this.dataApi.getnse2().subscribe(data5 => {

    for (let val in data5) {

    }
  }, err => {
    console.log(err)
  }
  )
}

getmcpv(mcsymbol) {
  this.dataApi.getmcpv(mcsymbol).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.volume2.push({ text1: "Today: " + nestedItems[0].volume.Today.delivery_display_text, text3: "1 Week: " + nestedItems[0].volume["1 Week"].delivery_display_text, text2: "Yesterday: " + nestedItems[0].volume.Yesterday.delivery_display_text, text4: "1 Month: " + nestedItems[0].volume["1 Month"].delivery_display_text })
    this.volume2.push({ text1: "Today: " + nestedItems[0].volume.Today.cvol_display_text, text3: "1 Week: " + nestedItems[0].volume["1 Week"].cvol_display_text, text2: "Yesterday: " + nestedItems[0].volume.Yesterday.cvol_display_text, text4: "1 Month: " + nestedItems[0].volume["1 Month"].cvol_display_text })
    this.volume2.push({ text1: "1 Week: " + nestedItems[0].price["1 Week"] + "%", text3: "1 Month: " + nestedItems[0].price["1 Month"] + "%", text2: "3 Months: " + nestedItems[0].price["3 Months"] + "%", text4: "1 Year: " + nestedItems[0].price["1 Year"] + "%" })
    this.volume3.push({ text1: nestedItems[0].volume.Today.cvol_display_text, text2: nestedItems[0].volume.Today.cvol, text3: "Current Volume" })
    if (nestedItems[0].volume.Today.cvol > nestedItems[0].volume.Yesterday.cvol) {
      console.log("Today Volume=" + nestedItems[0].volume.Today.cvol)
      console.log("Yesterday Volume=" + nestedItems[0].volume.Yesterday.cvol)
      console.log("Current Volume Greater than Yesterday")
    }
    if (nestedItems[0].volume.Today.cvol > nestedItems[0].volume["1 Week"].cvol) {
      console.log("Today Volume=" + nestedItems[0].volume.Today.cvol)
      console.log("1 Week Volume=" + nestedItems[0].volume["1 Week"].cvol)
      console.log("Current Volume Greater than 1 Week Average")
    }
    if (nestedItems[0].volume.Today.cvol > nestedItems[0].volume["1 Month"].cvol) {
      console.log("Today Volume=" + nestedItems[0].volume.Today.cvol)
      console.log("1 Month Volume=" + nestedItems[0].volume["1 Month"].cvol)
      console.log("Current Volume Greater than 1 Month Average")
    }

    nestedItems[0].volume["1 Month"].cvol
  }, err => {
    console.log(err)
  }
  )
}
populateIndicators(stock_isin, dbname) {
  this.dataApi.getIndicators(stock_isin, dbname).subscribe(data5 => {
    this.dblist[dbname] = data5

    for (let val in data5) {
      this.indicator.push({ text1: data5[val].technical_indicator, text2: data5[val].signal })
      this.indicatordate = data5[val].date
    }
  }, err => {
    console.log(err)
  })
}
// populateyfindata(stock_isin, dbname) {
//   this.dataApi.getyfindata(stock_isin, dbname).subscribe(data10 => {
//     this.dblist[dbname] = data10

//     this.dataTest2 = data10
//     for (let val in data10) {
//       this.industry = data10[val].industry
//       this.sector = data10[val].sector
//       this.price.push({ text: "200 Day's Average:  " + data10[val].twoHundredDayAverage, text1: "50 Day Average:  " + data10[val].fiftyDayAverage, cols: 1, rows: 1, color: 'lightblue' })
//       this.financial.push({ text: "Earning's Quarterly Growth:" + data10[val].earningsQuarterlyGrowth, text1: "P/B:" + data10[val].priceToBook, text2: "PEG Ratio:" + data10[val].pegRatio, text3: "Book Value:" + data10[val].bookValue, text4: "Forward EPS:" + data10[val].forwardEps, text5: "Forward PE:" + data10[val].forwardPE, text6: "Trailing EPS:" + data10[val].trailingEps, text7: "Price to Sales 12mnths Trailing:" + data10[val].priceToSalesTrailing12Months, text8: "Profit Margins:" + data10[val].profitMargins })
//       this.holding.push({ text: "Institutions Holding " + data10[val].heldPercentInstitutions, text1: "Insider Holding:" + data10[val].heldPercentInsiders })
//       this.volume1.push({ text: "averageVolume:  " + data10[val].averageVolume, text1: "averageVolume10days:" + data10[val].averageVolume10days })




//     }

//   }, err => {
//     console.log(err)
//   })
// }


populateDetails1(stock_isin, dbname) {
  this.dataApi.getohlcDetails(stock_isin, dbname).subscribe(data4 => {
  
    this.dblist[dbname] = data4
    this.dataTest = data4
    this.loader = false



    for (let val in data4) {
      this.lineChartData8.push(data4[val]["Deliverable Volume"])
      // this.lineChartData.push(data4[val].High)
      // this.lineChartData1.push(data4[val].Low)
      // this.lineChartData2.push(data4[val].VWAP)
      //this.lineChartData3.push(data4[val].Volume)
      this.lineChartData4.push(data4[val].Devp)
      //this.lineChartLabels.push(new Date(data4[val].Date).toLocaleDateString("en-IN"))
      //this.lineChartLabels1.push(new Date(data4[val].Date).toLocaleDateString("en-IN"))
      this.lineChartLabels2.push(new Date(data4[val].Date).toLocaleDateString("en-IN"))
      this.lineChartLabels3.push(new Date(data4[val].Date).toLocaleDateString("en-IN"))
      this.lineChartLabels4.push(new Date(data4[val].Date).toLocaleDateString("en-IN"))
      this.lineChartLabels5r1.push(new Date(data4[val].Date).toLocaleDateString("en-IN"))

    }





  }, err => {
    this.loader = false
    console.log(err)
  })
}
getohlcDetails(stock_isin, dbname) {
  this.loader1 = true

  this.dataApi.getohlcDetails(stock_isin, dbname).subscribe(data3 => {
    this.dblist[dbname] = data3
    this.loader1 = false

  }, err => {
    this.loader1 = false
    console.log(err)
  })
}

getgooglenews(stock_isin, dbname) {

  this.dataApi.getgooglenews(stock_isin, dbname).subscribe(data3 => {
    this.dblist[dbname] = data3


    for (let val in data3) {


      this.news.push(new Date(data3[val].date).toLocaleDateString("en-IN"))
      this.news.push(data3[val].title)
      //this.news.push(data3[val].url)
    }



  }, err => {
    console.log(err)
  })
}

// getyfindata(stock_isin, dbname) {
//   this.loader = true

//   this.dataApi.getyfindata(stock_isin, dbname).subscribe(data3 => {
//     this.dblist[dbname] = data3

//     this.loader = false
//   }, err => {
//     this.loader = false
//     console.log(err)
//   })
// }
// getyfinstats(stock_isin, dbname) {

//   this.dataApi.getyfinstats(stock_isin, dbname).subscribe(data3 => {
//     this.dblist[dbname] = data3

//     for (let val in data3) {


//       this.finstats.push({ text1: data3[val].Attribute, text2: data3[val].Value })

//     }

//   }, err => {
//     console.log(err)
//   })
// }

getsnrDetails(stock_isin, dbname) {

  this.dataApi.getsnrDetails(stock_isin, dbname).subscribe(data2 => {
    this.dblist[dbname] = data2

  }, err => {
    console.log(err)
  })

}
getIndicators(stock_isin, dbname) {

  this.dataApi.getIndicators(stock_isin, dbname).subscribe(data2 => {
    this.dblist[dbname] = data2

  }, err => {
    console.log(err)
  })

}
// getIndicatorsma(stock_isin, dbname) {

//   this.dataApi.getIndicatorsma(stock_isin, dbname).subscribe(data2 => {
//     this.dblist[dbname] = data2


//     for (let val in data2) {


//       this.indicatorma.push({ text: "EMA ", text1: "Period: " + data2[val].period, text2: data2[val].ema_value, text3: data2[val].ema_signal })
//       this.indicatorma.push({ text: "SMA ", text1: "Period: " + data2[val].period, text2: data2[val].sma_value, text3: data2[val].sma_signal })
//       this.indicatormadate = data2[val].date
//     }

//   }, err => {
//     console.log(err)
//   })

// }
getetcompanydataohlc(companyid) {
  this.dataApi.getetcompanydataohlc(companyid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });


    this.etsectorname = (nestedItems[0][0]["sector"])
    this.sectorid = this.etsectors.filter(i => i.sectorName == this.etsectorname)[0].sectorId
    this.getetsectordetails(this.sectorid, this.etsectorname)
  }, err => {
    console.log(err)
  }
  )
}

async getmcindexdata() {
  for (let val in this.mcindexs) {
    this.mcindexid = this.mcindexs[val].mcsectorid


    await this.getmcstockdetails(this.mcindexid)
  }
}
async getmcstockdetails(mcindexid) {
  this.dataApi.getmcstockdetails(mcindexid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems[0]) {

      if (this.mcsymbolname == nestedItems[0][val]["id"]) {

        this.getmcindexchart(mcindexid)
      }
    }
  }, err => {
    console.log(err)
  }
  )
}

async getmcindexchart(mcindexid) {
  this.dataApi.getmcindexchart(mcindexid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.mcindexname = this.mcindexs.filter(i => i.mcsectorid == mcindexid)[0].name

    this.lineChartDataetindicescharts.length = 0;
    this.lineChartLabelstindicescharts.length = 0;

    for (let val in nestedItems[1]["values"]) {

      this.lineChartDataetindicescharts.push(nestedItems[1]["values"][val]["_value"])
      this.lineChartLabelstindicescharts.push(nestedItems[1]["values"][val]["_time"])
      this.timeArr = (nestedItems[1]["values"][val]["_time"]).split(':')
      let newDateTime = new Date().setHours(this.timeArr[0], this.timeArr[1], 0, 0)
      let finalDate = new Date(newDateTime);
      // console.log((finalDate).toLocaleTimeString("en-IN"))
      //this.LineChartDataetindexcomb.push([((finalDate).toLocaleTimeString("en-IN")) ,parseInt(nestedItems[1]["values"][val]["_value"])])
    }

    var optionsetindicescharts = {
      series: [
        {
          name: "Price",
          data: this.lineChartDataetindicescharts
        }

      ],
      chart: {
        height: 550,
        type: 'line',
        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#ff0000', '#ff3300', '#ff3300', '#009900', '#009900', '#009900'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: this.mcindexname,
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.lineChartLabelstindicescharts,
        title: {
          text: 'Date'
        }
      },
      yaxis: {
        title: {
          text: 'Price'
        }

      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    //var chartsetindicescharts = new ApexCharts(document.querySelector("#chart42"), optionsetindicescharts);
    //chartsetindicescharts.render();





  }, err => {
    console.log(err)
  }
  )
}

getetsectordetails(sectorid, etsectorname) {
  this.dataApi.getetsectordetails(this.sectorid, this.etsectorname).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    for (let val in nestedItems[0]) {
      this.csectorcompany.push({ text1: nestedItems[0][val].companyName, text2: nestedItems[0][val].current, text3: nestedItems[0][val].percentChange })
    }
  }, err => {
    console.log(err)
  }
  )
}


getmmpeers(stockid) {
  this.dataApi.getmmpeers(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });


    for (let val in nestedItems[0]) {

      this.elementsmmpeers.push({ Name: nestedItems[0][val].short_name, Fin_Trend: nestedItems[0][val].fin_trend_text, Quality_Rank: nestedItems[0][val].quality_rank, Quality: nestedItems[0][val].quality_text, Tech_Score: nestedItems[0][val].tech_score, Technicals: nestedItems[0][val].tech_text, Valuation_Rank: nestedItems[0][val].valuation_rank, Valuation: nestedItems[0][val].valuation_text })
    }
  }, err => {
    console.log(err)
  }
  )
}
getdbjdata(eqsymbol, dbname) {
  this.dataApi.getdbjdata(eqsymbol, dbname).subscribe(data5 => {
    this.dblist[dbname] = data5
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems) {
      this.lineChartDatajdatadate.push(nestedItems[val].DATE1)
      this.lineChartDatajdatadelp.push(nestedItems[val].DELIV_PER)

    }
    this.options9 = {
      legend: {
        data: ['Delivery %age', 'Date'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.lineChartDatajdatadate,

      },
      yAxis: {},
      series: [
        {
          name: 'Delivery %age',
          type: 'bar',
          data: this.lineChartDatajdatadelp,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'Date',
          type: 'bar',
          data: this.lineChartDatajdatadate,

        },

      ],
      animationEasing: 'elasticOut',

    };




  }, err => {
    console.log(err)
  }
  )
}
getdbjdataall(eqsymbol, dbname) {
  this.dataApi.getdbjdataall(eqsymbol, dbname).subscribe(data5 => {
    this.dblist[dbname] = data5
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems) {
      this.lineChartDatajdatadateall.push(nestedItems[val].DATE1)
      this.lineChartDatajdatadelpall.push(nestedItems[val].DELIV_PER)

    }
    this.optionsjdataall = {
      legend: {
        data: ['Delivery %age', 'Date'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.lineChartDatajdatadateall,

      },
      yAxis: {},
      series: [
        {
          name: 'Delivery %age',
          type: 'bar',
          data: this.lineChartDatajdatadelpall,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'Date',
          type: 'bar',
          data: this.lineChartDatajdatadateall,

        },

      ],
      animationEasing: 'elasticOut',

    };




  }, err => {
    console.log(err)
  }
  )
}

getmmtechscore(stockid) {
  this.dataApi.getmmtechscore(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });


  }, err => {
    console.log(err)
  }
  )
}

// getStockData(stock_isin, dbname) {
//   this.dataApi.getStockData(stock_isin, dbname).subscribe(data1 => {
//     this.dblist[dbname] = data1

//     var details = this.dblist.stockDB[0].data
//     var keysof = Object.keys(details)
//     for (let i = 0; i < keysof.length; i++) {
//       this.details.push(details[keysof[i]])

//       this.day.push({ text: "Day High: " + this.details[i].dayHigh, text1: "Day Low: " + this.details[i].dayLow, text2: "Average Price: " + this.details[i].averagePrice, text3: "Open: " + this.details[i].open, text4: "Close: " + this.details[i].closePrice, text5: "Previous Close: " + this.details[i].previousClose, cols: 1, rows: 1, color: 'lighgreen' })
//       //this.band.push({text: "Lower Band:"+this.details[i].pricebandlower,text1:"Upper Band:"+this.details[i].pricebandupper,text2:"Price Band"+this.details[i].priceBand , cols: 2, rows: 1, color: 'ligtblue'})
//       this.wk.push({ text: "52Wk High: " + this.details[i].high52, text1: "52Wk Low: " + this.details[i].low52, cols: 2, rows: 1, color: '#DDBDF1' })
//       this.percentage.push({ text: "% Change:" + this.details[i].pChange + "%", text1: "DeliverytoTraded: " + this.details[i].deliveryToTradedQuantity + "%", text2: "Total Traded Volume" + this.details[i].totalTradedVolume, cols: 1, rows: 1, color: '#DDBDF1' })



//     }
//   }, err => {
//     console.log(err)
//   })
// }

getbqbdetails(stockid) {
  this.dataApi.getbqbdetails(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.industry = (nestedItems[4])
    this.peratio.push({ text1: "PE(TTM):" + nestedItems[6], text2: "Market Cap:" + nestedItems[5] + " Cr.", text3: "Dividend Yield:" + nestedItems[7] + "%", text4: "1 Yr Return:" + nestedItems[1] + "%" })

  }, err => {
    console.log(err)
  }
  )
}
getbqmovement(stockid) {
  this.dataApi.getbqmovement(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });


  }, err => {
    console.log(err)
  }
  )
}
getmmpmov(stockid) {
  this.dataApi.getmmpmov(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems[1]["other_data"]["return_data"]) {

      //this.pmov.push({ text: nestedItems[1]["other_data"]["return_data"][val].field, text1: nestedItems[1]["other_data"]["return_data"][val]["sensex_return"]["prev_close"], text2: nestedItems[1]["other_data"]["return_data"][val]["sensex_return"].chg, text3: nestedItems[1]["other_data"]["return_data"][val]["sensex_return"].chgp })
      this.pmov1.push({ text: nestedItems[1]["other_data"]["return_data"][val].field, text1: nestedItems[1]["other_data"]["return_data"][val]["stock_return"]["prev_close"], text2: nestedItems[1]["other_data"]["return_data"][val]["stock_return"].chg, text3: nestedItems[1]["other_data"]["return_data"][val]["stock_return"].chgp })

    }
    this.sensexreturn = (nestedItems[1]["intraday"]["other_return"].chgp)

    this.vwap.push({ text: nestedItems[1]["other_data"]["stock_data"][3].value })


    for (let val in nestedItems[1]["other_data"]["stock_details"]) {
      this.kstats.push({ text: nestedItems[1]["other_data"]["stock_details"][val].field, text1: nestedItems[1]["other_data"]["stock_details"][val].value })

    }
    this.sectreturn = (nestedItems[1]["intraday"]["sector_return"].chgp)
    this.stockreturn = (nestedItems[1]["intraday"]["stock_return"].chgp)
    this.sentence = (nestedItems[1]["other_data"]["sentence"].message)
    this.sentencedir = (nestedItems[1]["other_data"]["sentence"].dir)


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

getbqpricestats(stockid) {
  this.dataApi.getbqpricestats(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });


  }, err => {
    console.log(err)
  }
  )
}
getbqfundamentals(stockid) {
  this.dataApi.getbqfundamentals(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.cap = nestedItems[1].class
    this.rank = nestedItems[1].sizeMsg

    this.dy.push({ text1: nestedItems[2][0].name, text2: "Dividend Yield: " + nestedItems[2][0].value })

    this.pte.push({ text1: nestedItems[7][0].name, text2: nestedItems[7][0].value, text3: nestedItems[7][1].name, text4: nestedItems[7][1].value, text5: nestedItems[7][2].name, text6: nestedItems[7][2].value })
    this.ptb.push({ text1: nestedItems[10][0].name, text2: nestedItems[10][0].value, text3: nestedItems[10][1].name, text4: nestedItems[10][1].value, text5: nestedItems[10][2].name, text6: nestedItems[10][2].value })
    this.roe.push({ text1: nestedItems[8][0].name, text2: nestedItems[8][0].value, text3: nestedItems[8][1].name, text4: nestedItems[8][1].value, text5: nestedItems[8][2].name, text6: nestedItems[8][2].value })



  }, err => {
    console.log(err)
  }
  )
}
getbqmovingaverages(stockid) {
  this.dataApi.getbqmovingaverages(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    this.message = nestedItems[0].msg

  }, err => {
    console.log(err)
  }
  )
}
getbqdelvol(stockid) {
  this.dataApi.getbqdelvol(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems[0]) {
      this.bqdelvol.push({ text1: nestedItems[0][val].text, text2: nestedItems[0][val].volumeAverage, text3: nestedItems[0][val].percentage + " %" })
    }
    for (let val in nestedItems[1]) {
      this.bqdelvolmsg.push({ text1: nestedItems[1][val].dir, text2: nestedItems[1][val].msg })
    }



  }, err => {
    console.log(err)
  }
  )
}
getbqqresults(stockid) {
  this.dataApi.getbqqresults(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems[0]) {

      this.qtrhl.push({ text1: nestedItems[0][val].msg, text2: nestedItems[0][val].dir })
    }

    for (let val in nestedItems[2]) {
      this.qtr.push({ text1: nestedItems[2][val].text, text2: "Quarter 1: " + nestedItems[2][val].quarter1, text3: "Quarter 2: " + nestedItems[2][val].quarter2, text4: "Quarter 3: " + nestedItems[2][val].quarter3, text5: "Change %: " + nestedItems[2][val].chgp, text6: nestedItems[2][val].dir })

    }
  }, err => {
    console.log(err)
  }
  )
}
getbqtr(stockid) {
  this.dataApi.getbqtr(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.ldiv = nestedItems[1]
    this.dyield = nestedItems[0]

    for (let val in nestedItems[2]) {
      this.return.push({ text1: "Period: " + nestedItems[2][val].period, text2: "Price Return: " + nestedItems[2][val].priceReturn, text3: "Dividend Return: " + nestedItems[2][val].dividendReturn, text4: "Total Return: " + nestedItems[2][val].totalReturn })
    }

  }, err => {
    console.log(err)
  }
  )
}
getbqss(stockid) {
  this.dataApi.getbqss(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.quarter = nestedItems[2]
    for (let val in nestedItems[1]) {
      this.elementspd.push({ Details: nestedItems[1][val].label, Value: nestedItems[1][val].value })
    }
  }, err => {
    console.log(err)
  }
  )
}
getbqsc(stockid) {
  this.dataApi.getbqsc(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems[1]) {

      this.elementsshareh.push({ Name: nestedItems[1][val].text, Q1: nestedItems[1][val].quarter1, Q2: nestedItems[1][val].quarter2, Change: nestedItems[1][val].chgp, Direction: nestedItems[1][val].dir })
    }

  }, err => {
    console.log(err)
  }
  )
}
getbqph(stockid) {
  this.dataApi.getbqph(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    for (let val in nestedItems[0]) {
      this.elementsphol.push({ Quarter: nestedItems[0][val].quarter, Value: nestedItems[0][val].value1, Value2: nestedItems[0][val].value2 })
    }
    this.phol = (nestedItems[1])
    for (let val in nestedItems[2]) {
      this.pholmsg = (nestedItems[2][val].message)
    }

  }, err => {
    console.log(err)
  }
  )
}
getbqks(stockisin) {
  this.dataApi.getbqks(stockisin).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });


    for (let val in nestedItems[0]) {

      this.ks.push({ text1: nestedItems[0][val].label, text2: nestedItems[0][val].value })
    }

  }, err => {
    console.log(err)
  }
  )
}
getbqannouncements(stockisin) {
  this.dataApi.getbqannouncements(stockisin).subscribe(data5 => {

    let i = 0
    while (i < 5) {
      this.announcement.push({ text1: data5[i].summary, text2: (new Date(data5[i].updatedDate).toLocaleDateString("en-IN")), text3: data5[i].title })
      i = i + 1
    }


  }, err => {
    console.log(err)
  }
  )
}

//Moneycontrol moving average view of DB moneycontrol,collection movingaverages
getmcmovingaveragesview(stockisin,dbname) {
  this.dataApi.getmcmovingaveragesview(stockisin,dbname).subscribe(data5 => {
    this.dblist[dbname] = data5
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
   
   
    


  }, err => {
    console.log(err)
  }
  )
}

getbqca(stockid) {
  this.dataApi.getbqca(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });

    for (let val in nestedItems) {

      this.ca.push({ text1: nestedItems[val].message1, text2: nestedItems[val].message2, text3: nestedItems[val].details1, text4: nestedItems[val].details2 })

    }

  }, err => {
    console.log(err)
  }
  )
}
getbqitnews(bqnames) {
  this.dataApi.getbqitnews(this.bqnames).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });



    for (let val in nestedItems) {
      this.news1.push(new Date(nestedItems[val]["published-at"]).toLocaleDateString("en-IN"))
      this.news1.push(nestedItems[val].headline)
    }



  }, err => {
    console.log(err)
  }
  )
}
getbqpd(stockid) {
  this.dataApi.getbqpd(stockid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    // console.log(data5)
    // console.log(nestedItems)
  }, err => {
    console.log(err)
  }
  )
}
// scroll() {
// console.log("scroll start")
// this.element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//}
scroll(id) {
  this.vps.scrollToAnchor(id);
}
changeStock(stock_isin, dbname) {
 // this.getohlcDetails(stock_isin, 'mydb')
  //this.getStockData(stock_isin, 'stockDB')
  //this.getsnrDetails(stock_isin, 'investingpivot_D')

}
//changeStock1(stock_isin,dbname){
// this.router.navigate(['/Ohlc'], {queryParams:{  stock: stock_isin  ,dbname : 'mydb' }} );
//}


}





function PlotChart(chart_name: any) {
throw new Error('Function not implemented.');
}

function x(x: any, value: any, y: any, arg3: string) {
throw new Error('Function not implemented.');
}

