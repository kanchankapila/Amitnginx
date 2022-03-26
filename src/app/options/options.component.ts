import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import * as mcindex from '../lists/mcsectorlist1'
import * as mcindex1 from '../lists/mcsectorlist'
import * as  stocks from '../lists/stocklist'
import { DataapiService } from '../../dataapi.service';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ViewChild } from "@angular/core";

export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: any;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};

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
export interface nbnmctile {
  text1: string;
}
export interface negtile {
  text1: string;
}
export interface postile {
  text1: string;
 }
export interface nbnmptile {
  text1: string;
 }
export interface nbnwctile {
  text1: string;
 }
export interface nbnwptile {
  text1: string;
 }
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  example: any
  public chartOptions5: Partial<ChartOptions5>;
  n50optionssupport: n50optionssupporttile[] = [];
  n50optionsresistance: n50optionsresistancetile[] = [];
  bnoptionssupport: bnoptionssupporttile[] = [];
  bnoptionsresistance: n50optionsresistancetile[] = [];
  nbnwp: nbnwptile[] = [];
  nbnwc: nbnwctile[] = [];
  nbnmc: nbnmctile[] = [];
  nbnmp: nbnmptile[] = [];
  pos: any
  neg: any
  optionwc = [];
  optionwp = [];
  optionbwc = [];
  optionbwp = [];
  optionmc = [];
  optionmp = [];
  optionbnwc = [];
  optionbnwp = [];
  optionbnmc = [];
  optionbnmp = [];
  stocksymbol: any
  stocksymbol1:any
  stockList: any
  positive: any
  negative:any
  declinedata = [];
  unchangedata = [];
  mcindexs: any
  mcindexs1: any
  mcstockname: any
  mcstockname1:any
  mcindex: any
  mcindexid: any
  mcindexid1: any
  stock1 = [];
  mcindexsymbol1: any

  constructor(private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router,private vps: ViewportScroller) { }

  ngOnInit(): void {
    this.stockList = stocks.default.Data
    this.nsedataniftyoi()
    this.nsedatabniftyoi()
    this.mcindexs1 = mcindex1.default.Data
    this.getmcindexdata1()
   // this.getbqoptionsindexweekly()
    // this.getbqoptionsindexmonthly()
    // this.getbqoptionsbnindexweekly()
    // this.getbqoptionsbnindexmonthly()
    // this.getbqoptionsputcallrstock()
    // this.getbqoptionsputcallrindex()
    // this.getbqoptionslexpirystock()
    // this.getbqoptionslexpiryindex()
    
  }
  async getmcindexdata1() {
    for (let val in this.mcindexs1) {
      this.stock1.length = 0;
       this.positive = 0;
      this.negative = 0;
      this.mcindexid1 = this.mcindexs1[val].mcsectorid
    console.log(this.mcindexid1)
     
      await this.getmcstockdetails1(this.mcindexid1)
    }
  }

  async getmcstockdetails1(mcindexid1) {
    this.dataApi.getmcstockdetails1(this.mcindexid1).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      //
      for (let val in nestedItems[0]) {
        this.stocksymbol1 = nestedItems[0][val].id
        console.log(this.stocksymbol1)
        this.mcstockname1 = this.stockList.filter(i => i.mcsymbol == this.stocksymbol1)[0].name
        console.log(this.mcstockname1, nestedItems[0][val].percentchange)
        this.stock1.push({ x: this.mcstockname1, y: nestedItems[0][val].percentchange })
        if (nestedItems[0][val].percentchange > 0) {
          this.positive = this.positive + 1;
        }
        else if (nestedItems[0][val].percentchange < 0) {
          this.negative = this.negative + 1;
        }
        this.mcindexsymbol1 = this.mcindexs1.filter(i => i.mcsectorid == mcindexid1)[0].name
    
      }
      
      this.pos=(this.positive )
      this.neg=(this.negative)
    this.chartOptions5 = {
      series: [
        {
          data: this.stock1
        }
      ],
      legend: {
        show: true
      },
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        height: 900,
        width:2500,
        type: "treemap"
      },
      // title: {
      //   text: this.mcindexsymbol1
      // },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '50px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ["#000000"]
        },

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
              from: -20,
              to: 0,
              color: "#CD363A"
            },
            {
              from: 0.001,
              to: 20,
              color: "#52B12C"
            }

            ]
          }
        }
      }
    };
   
        

       
  }, err => {
      console.log(err)
    }
    )
  }
  
  
  
  
  nsedataniftyoi() {
    this.dataApi.nsedataniftyoi().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
      console.log(nestedItems[1]['data'])
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
  
  // getbqoptionsindexweekly() {
  //   this.dataApi.getbqoptionsindexweekly().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
    
  //     for (let val in nestedItems[3]) {
    
  //       if (nestedItems[3][val]["type"] == "put") {
  //         this.optionwp.push(nestedItems[3][val]["open-interest"]);
         
  //       }
  //     }
  //       const maxp = this.optionwp.reduce((a, b) => Math.max(a, b));  // 5
      
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxp) {
  //         this.n50wp.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     }
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "call") {
  //         this.optionwc.push(nestedItems[3][val]["open-interest"]);
  //         // console.log(this.example)
      
  //         //const people = [1,2,3,4,5];
  //       }
  //     }
  //       const maxc = this.optionwc.reduce((a, b) => Math.max(a, b));  // 5
  //     //console.log(maxc)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxc) {
  //         this.n50wc.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionsindexmonthly() {
  //   this.dataApi.getbqoptionsindexmonthly().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     //console.log(nestedItems[3])
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "put") {
  //         this.optionmp.push(nestedItems[3][val]["open-interest"]);
          
  //       }
  //     }
  //       const maxp = this.optionmp.reduce((a, b) => Math.max(a, b));  // 5
  //     //console.log(maxp)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxp) {
  //         this.n50mp.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     }
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "call") {
  //         this.optionmc.push(nestedItems[3][val]["open-interest"]);
  //         // console.log(this.example)
      
  //         //const people = [1,2,3,4,5];
  //       }
  //     }
  //       const maxc = this.optionmc.reduce((a, b) => Math.max(a, b));  // 5
  //     //console.log(maxc)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxc) {
  //         this.n50mc.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionsbnindexweekly() {
  //   this.dataApi.getbqoptionsbnindexweekly().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //    // console.log(nestedItems[3])
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "put") {
  //         this.optionbnwp.push(nestedItems[3][val]["open-interest"]);
          
  //       }
  //     }
  //       const maxbnpw = this.optionbnwp.reduce((a, b) => Math.max(a, b));  // 5
  //    // console.log(maxbnpw)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxbnpw) {
  //         this.nbnwp.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     }
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "call") {
  //         this.optionbnwc.push(nestedItems[3][val]["open-interest"]);
         
  //       }
  //     }
  //       const maxbncw = this.optionbnwc.reduce((a, b) => Math.max(a, b));  // 5
  //     //console.log(maxbncw)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxbncw) {
  //         this.nbnwc.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionsbnindexmonthly() {
  //   this.dataApi.getbqoptionsbnindexmonthly().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //    // console.log(nestedItems[3])
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "put") {
  //         this.optionbnmp.push(nestedItems[3][val]["open-interest"]);
          
  //       }
  //     }
  //       const maxbnpm = this.optionbnmp.reduce((a, b) => Math.max(a, b));  // 5
  //    // console.log(maxbnpm)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxbnpm) {
  //         this.nbnmp.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     }
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["type"] == "call") {
  //         this.optionbnmc.push(nestedItems[3][val]["open-interest"]);
          
  //       }
  //     }
  //       const maxbncm = this.optionbnmc.reduce((a, b) => Math.max(a, b));  // 5
  //    // console.log(maxbncm)
  //     for (let val in nestedItems[3]) {
  //       if (nestedItems[3][val]["open-interest"] == maxbncm) {
  //         this.nbnmc.push({ text1: nestedItems[3][val]["strike-price"] })
  //       }
  //     } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionslexpiryindex() {
  //   this.dataApi.getbqoptionslexpiryindex().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     console.log(nestedItems)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "put") {
  //     //     this.optionbnmp.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbnpm = this.optionbnmp.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbnpm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbnpm) {
  //     //     this.nbnmp.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // }
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "call") {
  //     //     this.optionbnmc.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbncm = this.optionbnmc.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbncm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbncm) {
  //     //     this.nbnmc.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionslexpirystock() {
  //   this.dataApi.getbqoptionslexpirystock().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     console.log(nestedItems)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "put") {
  //     //     this.optionbnmp.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbnpm = this.optionbnmp.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbnpm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbnpm) {
  //     //     this.nbnmp.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // }
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "call") {
  //     //     this.optionbnmc.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbncm = this.optionbnmc.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbncm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbncm) {
  //     //     this.nbnmc.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionsputcallrindex() {
  //   this.dataApi.getbqoptionsputcallrindex().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     console.log(nestedItems)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "put") {
  //     //     this.optionbnmp.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbnpm = this.optionbnmp.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbnpm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbnpm) {
  //     //     this.nbnmp.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // }
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "call") {
  //     //     this.optionbnmc.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbncm = this.optionbnmc.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbncm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbncm) {
  //     //     this.nbnmc.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
  // getbqoptionsputcallrstock() {
  //   this.dataApi.getbqoptionsputcallrstock().subscribe(data5 => {
  //     let nestedItems = Object.keys(data5).map(key => {
  //       return data5[key];
  //     });
  //     console.log(nestedItems)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "put") {
  //     //     this.optionbnmp.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbnpm = this.optionbnmp.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbnpm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbnpm) {
  //     //     this.nbnmp.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // }
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["type"] == "call") {
  //     //     this.optionbnmc.push(nestedItems[3][val]["open-interest"]);
          
  //     //   }
  //     // }
  //     //   const maxbncm = this.optionbnmc.reduce((a, b) => Math.max(a, b));  // 5
  //     // console.log(maxbncm)
  //     // for (let val in nestedItems[3]) {
  //     //   if (nestedItems[3][val]["open-interest"] == maxbncm) {
  //     //     this.nbnmc.push({ text1: nestedItems[3][val]["strike-price"] })
  //     //   }
  //     // } 
      
  //   }, err => {
  //     console.log(err)
  //   })
  // }
 
  scroll(id) {
    this.vps.scrollToAnchor(id);
  }
}
