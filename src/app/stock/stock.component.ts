import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { BaseChartDirective } from 'ng2-charts';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import * as  stocks from '../lists/stocklist'
import * as bqstock from '../lists/bqlist'
import * as etsector from '../lists/etsectorlist'
import * as etindex from '../lists/etindexlist'
import * as mcindex from '../lists/mcsectorlist'
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
export interface stockbbtile{
  text1: string;
  text2: string;
  
 
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
 
  constructor(private primengConfig: PrimeNGConfig,private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) {
    
  }
  public stockdata: Array<number> = [];
  public stockLabels: Array<any> = [];
  public stockChartData: Array<any> = [];
  public stockChartLabels: Array<number> = [];
  public stockChartOptions: any;
  public stockChartColors: any;
  public stockpcrdata: Array<number> = [];
  public stockpcrtime: Array<any> = [];
  public stockvixdata: Array<number> = [];
  public stockvixtime: Array<any> = [];
  public stockData: Array<any> = [];
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
  stockbb: stockbbtile[] = [];
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
   // this.getmcshare(this.mcsymbol);
    this.getmcsharefrequent(this.mcsymbol,this.eqsymbol); 
    this.getmcsharefrequent1(this.mcsymbol,this.eqsymbol); 
    setInterval(() => { this.getmcsharefrequent(this.mcsymbol, this.eqsymbol) }, 30000);
    setInterval(() => { this.getmcsharefrequent1(this.mcsymbol, this.eqsymbol) }, 30000);
 
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
           
  getmcsharefrequent(mcsymbol,eqsymbol) {
    this.dataApi.getmcsharefrequent(this.mcsymbol,this.eqsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
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
       this.stockDatasnrr1.push(nestedItems[1]['pivotLevels'][0].pivotLevel.r1),
       this.stockDatasnrr2.push(nestedItems[1]['pivotLevels'][0].pivotLevel.r2),
       this.stockDatasnrr3.push(nestedItems[1]['pivotLevels'][0].pivotLevel.r3),
       this.stockDatasnrs3.push(nestedItems[1]['pivotLevels'][0].pivotLevel.s3),
       this.stockDatasnrs2.push(nestedItems[1]['pivotLevels'][0].pivotLevel.s2),
       this.stockDatasnrs1.push(nestedItems[1]['pivotLevels'][0].pivotLevel.s1)
     }
  
     this.stockindicators.length = 0;
     for (let val in nestedItems[1]['crossover']) {
       this.stockindicators.push({text1:nestedItems[1]['crossover'][val]['displayValue'],text3:nestedItems[1]['crossover'][val]['indication'],text2:nestedItems[1]['crossover'][val]['period'],text4:nestedItems[1]['crossover'][val]['period']})
     }
     
    for (let val1 in nestedItems[1]['indicators']) {
      if (nestedItems[1]['indicators'][val1]['id'] != 'bollinger') {
        this.stockindicators.push({ text1: nestedItems[1]['indicators'][val1].displayName, text2: nestedItems[1]['indicators'][val1].id, text3: nestedItems[1]['indicators'][val1].indication, text4: nestedItems[1]['indicators'][val1].value })
      }
//  ////////////To get Nifty Today Price///////////////////////
 
this.stockdata.length = 0;
this.stockLabels.length = 0;
for (let val in nestedItems[0][1]['chartActulaData']) {
 this.stockdata.push(nestedItems[0][1]['chartActulaData'][val]["value"])
 this.stockLabels.push(nestedItems[0][1]['chartActulaData'][val]["time"])

}


this.stockChartData = [{
 label: 'Price',
 data: this.stockdata,
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
    
      console.log(nestedItems)
    }   
  }, err => {
    console.log(err)
  })
}
 
 
 
  getmcshare(mcsymbol) {
    this.dataApi.getmcshare(this.mcsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
 
  console.log(nestedItems)


      ///////////////////////////////////////////////////////////////
       ////////////To get Nifty 5day Resistances and Indicators/////////////
      
//        let val5 = 0;
//        while (val5 != 2000) {
//          val5 = val5 + 1
//          this.stockDatan50snrr1w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.r1),
//          this.stockDatan50snrr2w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.r2),
//          this.stockDatan50snrr3w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.r3),
//          this.stockDatan50snrs3w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.s3),
//          this.stockDatan50snrs2w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.s2),
//          this.stockDatan50snrs1w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.s1)
//        }
       
       
//        for (let val in nestedItems[5]['data']['crossover']) {
//          this.nifty50indicatorsw.push({text1:nestedItems[5]['data']['crossover'][val]['displayValue'],text3:nestedItems[5]['data']['crossover'][val]['indication'],text2:nestedItems[5]['data']['crossover'][val]['period'],text4:nestedItems[5]['data']['crossover'][val]['period']})
//        }
     
//       for (let val1 in nestedItems[5]['data']['indicators']) {
//         if (nestedItems[5]['data']['indicators'][val1]['id'] != 'bollinger') {
//           this.nifty50indicatorsw.push({ text1: nestedItems[5]['data']['indicators'][val1].displayName, text2: nestedItems[5]['data']['indicators'][val1].id, text3: nestedItems[5]['data']['indicators'][val1].indication, text4: nestedItems[5]['data']['indicators'][val1].value })
//         }
//       }
        
        
       
     
  
      

//       ////////////To get Nifty 5 day Price///////////////////////
     
//       this.nifty505ddata.length = 0;
//       this.nifty505dLabels.length = 0;
//       for (let val in nestedItems[0]['graph'].values) {
//         this.nifty505ddata.push(nestedItems[0]['graph'].values[val]["_value"])
//         this.nifty505dLabels.push(nestedItems[0]['graph'].values[val]["_time"])
       
//       }
      
     
//       this.stock5dData = [{
//         label: 'Price',
//         data: this.nifty505ddata,
//         borderWidth: 1,
//         fill: false
//       },{ label: 'R1',
//       data: this.stockDatan50snrr1w,
//       borderWidth: 1,
//       bordercolor:'#D98880',
//           fill: false
//         },
//         {
//         label: 'R2',
//         data: this.stockDatan50snrr2w,
//         borderWidth: 1,
//         borderColor: '#e3256b',
//           fill: false
//         }
//         , {
//           label: 'R3',
//       data: this.stockDatan50snrr3w,
//           borderWidth: 1,
//           borderColor: '#c84343',
//       fill: false}, {
//         label: 'S1',
//     data: this.stockDatan50snrs1w,
//         borderWidth: 1,
//         borderColor: '#90b590',
//     fill: false}, {
//       label: 'S2',
//   data: this.stockDatan50snrs2w,
//       borderWidth: 1,
//       borderColor: '#09c51b',
//   fill: false}, {
//     label: 'S3',
// data: this.stockDatan50snrs3w,
//     borderWidth: 1,
//     borderColor: '#375f00',
// fill: false}];
    
//       this.stock5dLabels = this.nifty505dLabels;
//       this.stock5dOptions = {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: false
//             }
//           }]
//         },
//         legend: {
//           display: true
//         },
//         elements: {
//           point: {
//             radius: 0
//           }
//         }
//       };
    
//       this.stock5dColors = [
//         {
//           borderColor: '#2d0365'
//         }
//       ];
//   /////////////////////////////////////////////////////////////////
      
//        ////////////To get Nifty 1 month Resistances and Indicators/////////////
      
//        let val1m = 0;
//        while (val1m != 12000) {
//          val1m = val1m + 1
//          this.stockDatan50snrr1m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.r1),
//          this.stockDatan50snrr2m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.r2),
//          this.stockDatan50snrr3m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.r3),
//          this.stockDatan50snrs3m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.s3),
//          this.stockDatan50snrs2m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.s2),
//          this.stockDatan50snrs1m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.s1)
//        }
       
       
//        for (let val in nestedItems[6]['data']['crossover']) {
//          this.nifty50indicatorsm.push({text1:nestedItems[6]['data']['crossover'][val]['displayValue'],text3:nestedItems[6]['data']['crossover'][val]['indication'],text2:nestedItems[6]['data']['crossover'][val]['period'],text4:nestedItems[6]['data']['crossover'][val]['period']})
//        }
     
//       for (let val1 in nestedItems[6]['data']['indicators']) {
//         if (nestedItems[6]['data']['indicators'][val1]['id'] != 'bollinger') {
//           this.nifty50indicatorsm.push({ text1: nestedItems[6]['data']['indicators'][val1].displayName, text2: nestedItems[6]['data']['indicators'][val1].id, text3: nestedItems[6]['data']['indicators'][val1].indication, text4: nestedItems[6]['data']['indicators'][val1].value })
//         }
//       }
        
        
       
     
  
      

//       ////////////To get Nifty 1 month Price///////////////////////
     
//       this.nifty501mdata.length = 0;
//       this.nifty501mLabels.length = 0;
//       for (let val in nestedItems[1]['graph'].values) {
//         this.nifty501mdata.push(nestedItems[1]['graph'].values[val]["_value"])
//         this.nifty501mLabels.push(nestedItems[1]['graph'].values[val]["_time"])
       
//       }
      
     
//       this.stock1mData = [{
//         label: 'Price',
//         data: this.nifty501mdata,
//         borderWidth: 1,
//         fill: false
//       },{ label: 'R1',
//       data: this.stockDatan50snrr1m,
//       borderWidth: 1,
//       bordercolor:'#D98880',
//           fill: false
//         },
//         {
//         label: 'R2',
//         data: this.stockDatan50snrr2m,
//         borderWidth: 1,
//         borderColor: '#e3256b',
//           fill: false
//         }
//         , {
//           label: 'R3',
//       data: this.stockDatan50snrr3m,
//           borderWidth: 1,
//           borderColor: '#c84343',
//       fill: false}, {
//         label: 'S1',
//     data: this.stockDatan50snrs1m,
//         borderWidth: 1,
//         borderColor: '#90b590',
//     fill: false}, {
//       label: 'S2',
//   data: this.stockDatan50snrs2m,
//       borderWidth: 1,
//       borderColor: '#09c51b',
//   fill: false}, {
//     label: 'S3',
// data: this.stockDatan50snrs3m,
//     borderWidth: 1,
//     borderColor: '#375f00',
// fill: false}];
    
//       this.stock1mLabels = this.nifty501mLabels;
//       this.stock1mOptions = {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: false
//             }
//           }]
//         },
//         legend: {
//           display: true
//         },
//         elements: {
//           point: {
//             radius: 0
//           }
//         }
//       };
    
//       this.stock1mColors = [
//         {
//           borderColor: '#2d0365'
//         }
//       ];
// //////////////////////////////////////////////////////////////////
//       ////////////////Nifty 3 months/////////////////////////////
//       for (let val in nestedItems[2]['graph'].values) {
//         this.nifty503mdata.push(nestedItems[2]['graph'].values[val]["_value"])
//         this.nifty503mLabels.push(nestedItems[2]['graph'].values[val]["_time"])
     
//       }
    
     
//       this.stock3mData = [{
//         label: 'Price',
//         data: this.nifty503mdata,
//         borderWidth: 1,
//         fill: false
//       }];
  
//       this.stock3mLabels = this.nifty503mLabels;
//       this.stock3mOptions = {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: false
//             }
//           }]
//         },
//         legend: {
//           display: false
//         },
//         elements: {
//           point: {
//             radius: 0
//           }
//         }
//       };
  
//       this.stock3mColors = [
//         {
//           borderColor: '#115dcd'
//         }
//       ];
//   ////////////////////////////////////////////////////////////////////
//       //////////////////NIfty 6 months///////////////////////////////

//        //this.nifty506mdata.length = 0;
//       //this.nifty506mLabels.length = 0;
//       for (let val in nestedItems[3]['graph'].values) {
//         this.nifty506mdata.push(nestedItems[3]['graph'].values[val]["_value"])
//         this.nifty506mLabels.push(nestedItems[3]['graph'].values[val]["_time"])
       
//       }
      
     
//       this.stock6mData = [{
//         label: 'Price',
//         data: this.nifty506mdata,
//         borderWidth: 1,
//         fill: false
//       }];
    
//       this.stock6mLabels = this.nifty506mLabels;
//       this.stock6mOptions = {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: false
//             }
//           }]
//         },
//         legend: {
//           display: false
//         },
//         elements: {
//           point: {
//             radius: 0
//           }
//         }
//       };
    
//       this.stock6mColors = [
//         {
//           borderColor: '#5a7f84'
//         }
//       ];
    
   
 


//  ///////////////////Nifty 1 year/////////////////////////////////////

//       //this.nifty501yrdata.length = 0;
//       //this.nifty501yrLabels.length = 0;
//       for (let val in nestedItems[4]['graph'].values) {
//         this.nifty501yrdata.push(nestedItems[4]['graph'].values[val]["_value"])
//         this.nifty501yrLabels.push(nestedItems[4]['graph'].values[val]["_time"])
     
//       }
    
  
//       this.stock1yrData = [{
//         label: 'Price',
//         data: this.nifty501yrdata,
//         borderWidth: 1,
//         fill: false
//       }];
  
//       this.stock1yrLabels = this.nifty501yrLabels;
//       this.stock1yrOptions = {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: false
//             }
//           }]
//         },
//         legend: {
//           display: false
//         },
//         elements: {
//           point: {
//             radius: 0
//           }
//         }
//       };
  
//       this.stock1yrColors = [
//         {
//           borderColor: '#c154c1'
//         }
//       ];

     }, err => {
       console.log(err)
     })
   }

  
   getmcsharefrequent1(mcsymbol,eqsymbol) {
    this.dataApi.getmcsharefrequent1(this.mcsymbol,this.eqsymbol).subscribe(data6 => {
      let nestedItems = Object.keys(data6).map(key => {
        return data6[key];
      });

  // /////////////////////////////EMA/SMA from Kite //////////////////////
  
 this.stockema.length = 0;
 this.stocksma.length = 0;

   this.stockema.push({ text1: nestedItems[0]['ema5'], text2: nestedItems[0]['ema10'], text3: nestedItems[0]['ema20'], text4: nestedItems[0]['ema30'], text5: nestedItems[0]['ema50'], text6: nestedItems[0]['ema100'], text7: nestedItems[0]['ema200'] })
   this.stocksma.push({text1:nestedItems[0]['sma5'],text2:nestedItems[0]['sma10'],text3:nestedItems[0]['sma20'],text4:nestedItems[0]['sma30'],text5:nestedItems[0]['sma50'],text6:nestedItems[0]['sma100'],text7:nestedItems[0]['sma200']})


     console.log(nestedItems)
  }, err => {
    console.log(err)
  })
}
  
  
}



 



 