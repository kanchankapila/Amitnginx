import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import * as CanvasJS from './canvasjs.min';
import { PrimeNGConfig } from 'primeng/api';
import * as index from './tlindiceslist'
import {MatSelectModule} from '@angular/material/select';
import {AutoCompleteModule} from 'primeng/autocomplete';
import * as mcindex from '../dashboard/mcsectorlist1'


import { interval, Observable, Subscription,timer } from 'rxjs';
import { mapTo, startWith, map, switchMap,flatMap } from 'rxjs/operators';
//import * as mcindex1 from '../dashboard/mcsectorlist'
import * as  stocks from '../dashboard/stocklist'
import { DataapiService } from '../../dataapi.service';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ViewChild } from "@angular/core";

export interface n50optionssupporttile {
  text1: string;
}
interface Food {
  value: string;
  viewValue: string;
}
export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
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

export interface n50optionsresistancetile {
  text1: string;
 }
export interface bnoptionssupporttile {
  text1: string;
 }
export interface bnoptionsresistancetile {
  text1: string;
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
interface IQuote {
  categories: any[];
  created_at: string,
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

interface IQuote1 {
  screenData: any[];
  tooltipParams: any[];
  value: number;
  name: string;
  key: string;
  
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  heading = 'Chart Boxes III';
  subheading = 'Highly configurable boxes best used for showing numbers in an user friendly way.';
  icon = 'pe-7s-wallet icon-gradient bg-plum-plate';
  visibleSidebar1;
  indices: any
  mcsymbol: any
  mcfullnm: any;
  pricecur: any;
  pchange: any;
  
  visibleSidebar2;
  visibleSidebar3;
  visibleSidebar4;
  visibleSidebar5;
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  multiAxisData: any;
  basicData2: any;
  basicOptions2: any;
  basicData3: any;
  returnedname: any;
  basicOptions3: any;
  basicData4: any;
  basicOptions4: any;
  basicData5: any;
  basicOptions5: any;
  basicData6: any;
  basicOptions6: any;

  multiAxisOptions: any;
  selectedCountryAdvanced: any[];
 
  n50optionssupport: n50optionssupporttile[] = [];
  n50optionsresistance: n50optionsresistancetile[] = [];
  bnoptionssupport: bnoptionssupporttile[] = [];
  bnoptionsresistance: n50optionsresistancetile[] = [];
  advancedata = [];
  tltgstockname = [];
  tltgstockvalue = [];
 
  mcarrayname: [];
  mc30dvol= [];
  mccvol= [];

  mcarraypchange: [];
  tltgstockprice = [];
  tltlstockname = [];
  tltlstockvalue = [];
  tltlstockprice = [];
  tlvsstockname = [];
  tlvsstockvalue = [];
  tlvsstockprice = [];
  tlvhgstockname = [];
  tlvhgstockvalue = [];
  tlvhgstockprice = [];
  tlvhlstockname = [];
  tlvhlstockvalue = [];
  tlvhlstockprice = [];
  tlrvpdstockname = [];
  tlrvpdstockvalue = [];
  tlrvpdstockprice = [];
 
  //nftcper = [];
  
  nifty50: nifty50tiles[] = [];
 
  banknifty1: banknifty1tiles[] = [];
  stocksymbol: any
  stocksymbol1:any
  stockList: any
  optionwc = [];
  optionwp = [];
  optionbwc = [];
  optionbwp = [];
  declinedata = [];
  unchangedata = [];
  mcindexs: any
  mcindexs1: any
  mcstockname: any
  mcstockname1:any
  mcindex: any
  mcindexid: any
  mcindexid1: any
  data:any
  
  nsindices1: nsindices1tiles[] = [];

  tltgstockvp = [];
  sector = [];
  //nftarray: [];
  //public nftarray: Array<object> = [];
  count: any
  mcindexsymbol: any
  mcindexsymbol1: any
  nsindices: nsindicestiles[] = [];
  // public linedonutdata: Array<number> = [];
  // public canvasdata: Array<any> = [];
  public linedonutlabel: Array<any> = [];
  public chartOptions3: Partial<ChartOptions3>;
  dataapi: any
  bqadv: any
  bqdec: any
  bqunc: any
  stock = [];
  stock1 = [];
 

  constructor(private _http: HttpClient,private primengConfig: PrimeNGConfig,private http: HttpClient, private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router, private vps: ViewportScroller) {
  //  
  
   }
  
  


  

   

  ngOnInit() {
    this.indices = index.default.Data
    this.primengConfig.ripple = true;
    this.returnedname='NIFTY500/nifty-500/'
  this.data=this.indices
    {
      setInterval(() => { this.nsedataadvdec() }, 10000);
    }
    {
      setInterval(() => { this.gettltg(this.returnedname) }, 30000);
    }
    {
      setInterval(() => { this.gettltl(this.returnedname) }, 30000);
    }
    // {
    //   setInterval(() => {
    //     this.gettlvs(this.returnedname)
    //   }, 30000);
    // }
    {
      setInterval(() => { this.gettlvhg(this.returnedname) }, 30000);
    }
    {
      setInterval(() => { this.gettlrsiall() }, 60000);
    }
    {
      setInterval(() => { this.gettlvhl(this.returnedname) }, 30000);
    }
    {
      setInterval(() => { this.gettlrvpd(this.returnedname) }, 30000);
    }
    

    this.gettlrsiall()
    this.gettlvhl(this.returnedname)
    this.gettltg(this.returnedname)
    this.gettltl(this.returnedname)
    this.gettlvs(this.returnedname)
    this.gettlvhg(this.returnedname)
    this.gettlrvpd(this.returnedname)
    this.stockList = stocks.default.Data
    this.mcindexs = mcindex.default.Data
    //this.mcindexs1 = mcindex1.default.Data
    this.nsedataniftyoi()
    this.nsedatabniftyoi()
    
    
    
    
   
    
  
  }

  
  
  
  gettlrsiall() {
    this.dataApi.gettlrsiall().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      //console.log(nestedItems)
  //     for (let val in nestedItems[3]) {
  //    console.log(nestedItems[3][val].symbol_name)
  //  }
    }, err => {
      console.log(err)
    })
  }
  //  getmcsd(mcsymbol) {
  //   this.dataApi.getmcsd(mcsymbol).subscribe(data5 => {
  //   let nestedItems = Object.keys(data5).map(key => {
  //   return data5[key];
  //   });
  //     // console.log(nestedItems)
  //     // console.log(data5)
     
  //   //   this.mcarray.push({ y: Number(data5["pricepercentchange"]), label: data5["SC_FULLNM"] })
  //   //   this.mcname.push(data5["SC_FULLNM"],)
  //   //   //this.mcname.push(nestedItems[57])
  //   //  this.mcpchange.push(Number(data5["pricepercentchange"]))
  //    //this.mcpchange.push(Number(nestedItems[113])) 
  //    //console.log(this.mcarrayname)
  //     //console.log(this.mcarraypchange)
  //     // this.mcfullnm.push( data5["SC_FULLNM"])
  //     //  this.pricecur.push(data5["pricecurrent"])
  //     //  this.pchange.push(data5["pricechange"])
  //    // this.buildchart1()
      
  //   }, err => {
  //     console.log(err)
  //   }
      
  //   )
  // }
  
  
  gettltg(returnedname) {
    this.dataApi.gettltg(returnedname).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.tltgstockname.length = 0;
      this.tltgstockvalue.length = 0;
      this.tltgstockprice.length = 0;
      for (let val in nestedItems[2]) {
  
        this.tltgstockname.push(nestedItems[2][val].name)
        this.tltgstockvalue.push(nestedItems[2][val].value)
        this.tltgstockvp.push({ value: nestedItems[2][val].value, price: nestedItems[2][val]['tooltipParams'][0].value })
       
          this.tltgstockprice.push(nestedItems[2][val]['tooltipParams'][0].value)
        

      }
      
      var randomColorGenerator = function () { 
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
    };
      this.basicData = {
        
        labels:this.tltgstockname,
        
        
        datasets: [
            {
                label: "value",
            //backgroundColor: this.getRandomColor(),
            backgroundColor: randomColorGenerator,
      data: this.tltgstockvalue
  
            },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltgstockprice,
          // },
      
          ]
    };
    var footerLine1 = this.tltgstockprice
    //console.log(footerLine1 )
    var footerLine2 = this.tltgstockname
      this.basicOptions = {
        
        responsive: true,
        tooltips: {
          callbacks:{
            beforeFooter: function(tooltipItems, data) { 
              return 'Current Price:' + footerLine1[tooltipItems[0].index];
            },
            footer: function(tooltipItems, data) { 
              return 'Name: ' + footerLine2[tooltipItems[0].index];
            }
        }
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
          }
        },
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

    }, err => {
      console.log(err)
    })
  }
  gettltl(returnedname) {
    this.dataApi.gettltl(returnedname).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.tltlstockname.length = 0;
      this.tltlstockvalue.length = 0;
      this.tltlstockprice.length = 0;
    
  
      for (let val in nestedItems[2]) {
        
        this.tltlstockname.push(nestedItems[2][val].name)
        this.tltlstockvalue.push(nestedItems[2][val].value)
       
       
          this.tltlstockprice.push(nestedItems[2][val]['tooltipParams'][0].value)
       
      }
      
      var randomColorGenerator = function () { 
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
    };
      
      this.basicData1 = {
        
        labels:this.tltlstockname,
        
        
        datasets: [
            {
                label: "value",
                backgroundColor: randomColorGenerator,
                data: this.tltlstockvalue,
            },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltlstockprice,
          // },
      
          ]
    };

    var footerLine3 = this.tltlstockprice
    var footerLine4 = this.tltlstockname
      this.basicOptions1 = {
        
        responsive: true,
        tooltips: {
          callbacks:{
            beforeFooter: function(tooltipItems, data) { 
              return 'Current Price:' + footerLine3[tooltipItems[0].index];
            },
            footer: function(tooltipItems, data) { 
              return 'Name: ' + footerLine4[tooltipItems[0].index];
            }
        }
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
          }
        },
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

    }, err => {
      console.log(err)
    })
  }
  gettlvs(returnedname) {
    this.dataApi.gettlvs(returnedname).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.tlvsstockname.length = 0;
      this.tlvsstockvalue.length = 0;
      this.tlvsstockprice.length = 0;
    
  //   console.log(nestedItems[3]) 
      for (let val in nestedItems[2]) {
        //console.log(nestedItems[2][val].name, nestedItems[2][val].value)
        this.tlvsstockname.push(nestedItems[2][val].name)
        this.tlvsstockvalue.push(nestedItems[2][val].value)
       
       
          this.tlvsstockprice.push(nestedItems[2][val]['tooltipParams'][0].value)
       
      }
      var randomColorGenerator = function () { 
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
    };
      
      this.basicData2 = {
        
        labels:this.tlvsstockname,
        
        
        datasets: [
            {
                label: "value",
                backgroundColor:randomColorGenerator,
                data: this.tlvsstockvalue,
            },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltlstockprice,
          // },
      
          ]
    };
    var footerLine5 = this.tlvsstockprice
    var footerLine6 = this.tlvsstockname
      this.basicOptions2 = {
        
        responsive: true,
        tooltips: {
          callbacks:{
            beforeFooter: function(tooltipItems, data) { 
              return 'Current Price:' + footerLine5[tooltipItems[0].index];
            },
            footer: function(tooltipItems, data) { 
              return 'Name: ' + footerLine6[tooltipItems[0].index];
            }
        }
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
          }
        },
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

    }, err => {
      console.log(err)
    })
  }
  gettlvhg(returnedname) {
    this.dataApi.gettlvhg(returnedname).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
      this.tlvhgstockname.length = 0;
      this.tlvhgstockvalue.length = 0;
      this.tlvhgstockprice.length = 0;
    
  
      for (let val in nestedItems[2]) {
    
        this.tlvhgstockname.push(nestedItems[2][val].name)
        this.tlvhgstockvalue.push(nestedItems[2][val].value)
       
       
          this.tlvhgstockprice.push(nestedItems[2][val]['tooltipParams'][0].value)
       
      }
      var randomColorGenerator = function () { 
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
    };
      
      this.basicData3 = {
        
        labels:this.tlvhgstockname,
        
        
        datasets: [
            {
                label: "value",
                backgroundColor: randomColorGenerator,
                data: this.tlvhgstockvalue,
            },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltlstockprice,
          // },
      
          ]
    };
    var footerLine7 = this.tlvhgstockprice
    var footerLine8 = this.tlvhgstockname
      this.basicOptions3 = {
        
        responsive: true,
        tooltips: {
          callbacks:{
            beforeFooter: function(tooltipItems, data) { 
              return 'Current Price:' + footerLine7[tooltipItems[0].index];
            },
            footer: function(tooltipItems, data) { 
              return 'Name: ' + footerLine8[tooltipItems[0].index];
            }
        }
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
          }
        },
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

    }, err => {
      console.log(err)
    })
  }
  gettlvhl(returnedname) {
    this.dataApi.gettlvhl(returnedname).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
 
      this.tlvhlstockname.length = 0;
      this.tlvhlstockvalue.length = 0;
      this.tlvhlstockprice.length = 0;
    
  
      for (let val in nestedItems[2]) {
    
        this.tlvhlstockname.push(nestedItems[2][val].name)
        this.tlvhlstockvalue.push(nestedItems[2][val].value)
       
       
          this.tlvhlstockprice.push(nestedItems[2][val]['tooltipParams'][0].value)
       
      }
      var randomColorGenerator = function () { 
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
    };
      
      this.basicData4 = {
        
        labels:this.tlvhlstockname,
        
        
        datasets: [
            {
                label: "value",
                backgroundColor:randomColorGenerator,
                data: this.tlvhlstockvalue,
            },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltlstockprice,
          // },
      
          ]
    };
    var footerLine9 = this.tlvhgstockprice
    var footerLine10 = this.tlvhgstockname
      this.basicOptions4 = {
        
        responsive: true,
        tooltips: {
          callbacks:{
            beforeFooter: function(tooltipItems, data) { 
              return 'Current Price:' + footerLine9[tooltipItems[0].index];
            },
            footer: function(tooltipItems, data) { 
              return 'Name: ' + footerLine10[tooltipItems[0].index];
            }
        }
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
          }
        },
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

    }, err => {
      console.log(err)
    })
  }

  gettlrvpd(returnedname) {
    this.dataApi.gettlrvpd(returnedname).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.tlrvpdstockname.length = 0;
      this.tlrvpdstockvalue.length = 0;
      this.tlrvpdstockprice.length = 0;
      for (let val in nestedItems[2]) {
  
        this.tlrvpdstockname.push(nestedItems[2][val].name)
        this.tlrvpdstockvalue.push(nestedItems[2][val].value)
        
       
          this.tlrvpdstockprice.push(nestedItems[2][val]['tooltipParams'][0].value)
       

      }
      var randomColorGenerator = function () { 
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
    };
      
      
      this.basicData5 = {
        
        labels:this.tlrvpdstockname,
        
        
        datasets: [
            {
                label: "value",
                backgroundColor:randomColorGenerator,
            
      data: this.tlrvpdstockvalue
  
            },
          //   {
          //     label: "value",
          //     backgroundColor:'transparent',
          //     data: this.tltgstockprice,
          // },
      
          ]
    };
    var footerLine13 = this.tlrvpdstockprice
    var footerLine14 = this.tlrvpdstockname
      this.basicOptions5 = {
        
        responsive: true,
        tooltips: {
          callbacks:{
            beforeFooter: function(tooltipItems, data) { 
              return 'Current Price:' + footerLine13[tooltipItems[0].index];
            },
            footer: function(tooltipItems, data) { 
              return 'Name: ' + footerLine14[tooltipItems[0].index];
            }
        }
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
          }
        },
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
      
      this.nifty50.push({ text1: nestedItems[2][1].name, text2: nestedItems[2][1].lastPrice, text3: nestedItems[2][1].change, text4: nestedItems[2][1].pChange })
      this.banknifty1.push({ text1:nestedItems[2][4].name,text2:nestedItems[2][4].lastPrice, text3:nestedItems[2][4].change,text4:nestedItems[2][4].pChange })
       
     
       
    }, err => {
      console.log(err)
    })
  }
  nsedataniftyoi() {
    this.dataApi.nsedataniftyoi().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
     
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
           
            this.optionwp.push(nestedItems[1]['data'][val]['PE'].openInterest);
          }
        }
      }
      
        const maxp = this.optionwp.reduce((a, b) => Math.max(a, b));  // 5
        
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
     
            for (let val in nestedItems[1]['data']) {
              if (nestedItems[1]['data'][val]['CE']) {
              if (nestedItems[1]['data'][val]['CE'].openInterest == maxbc) {
                this.bnoptionsresistance.push({ text1: nestedItems[1]['data'][val]['CE'].strikePrice })
             }
              }
            
          
        if (nestedItems[1]['data'][val]['PE']) {
          if ((nestedItems[1]['data'][val]['PE']).length !== 0) {
            
            this.optionbwp.push(nestedItems[1]['data'][val]['PE'].openInterest);
          }
        }
      }
      
        const maxbp = this.optionbwp.reduce((a, b) => Math.max(a, b));  // 5
      
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
  
  
     getbqadvdec() {
    this.dataApi.getbqadvdec().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      

    }, err => {
      console.log(err)
    })
  }
  
  
  scroll(id) {
    this.vps.scrollToAnchor(id);
  }
  keyword = 'name';
  selectEvent(rname) {
    
    this.returnedname = rname
    this.gettltl(this.returnedname)
    this.gettltg(this.returnedname)
    this.gettlvs(this.returnedname)
    this.gettlvhg(this.returnedname)
    this.gettlvhl(this.returnedname)
    this.gettlrvpd(this.returnedname)
    //this.router.navigate(['/Ohlc'], { queryParams: { stock: stock_isin, dbname: 'mydb' } });

    // do something with selected item
  }
  //search(val: string){}
  onChangeSearch(val: string) {

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(abc) {

    // do something when input is focused
  }
 

}
