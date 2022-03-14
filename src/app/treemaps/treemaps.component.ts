import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import * as mcindex from '../dashboard/mcsectorlist1'
import * as  stocks from '../dashboard/stocklist'
import { DataapiService } from '../../dataapi.service';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ViewChild } from "@angular/core";

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

export type ChartOptions6 = {
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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: any;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};

export type ChartOptions4 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: any;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};
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
export interface pcrnsebniftytile {
  text1: number;
}
export interface pcrnseniftytile {
  text1: number;
}
export interface nsindicestiles {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
}
export interface nftarraytiles {
  
  y: number;
  label: string;
  
}
export interface indiavixtile {
  text1: number;
  text2: number;
  text3: number;
  text4: number;
  }


@Component({
  selector: 'app-treemaps',
  templateUrl: './treemaps.component.html',
  styleUrls: ['./treemaps.component.scss']
})

  
export class TreemapsComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  
  public chartOptions4: Partial<ChartOptions4>;
 
  public chartOptions6: Partial<ChartOptions6>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions5: Partial<ChartOptions5>;
  n50optionssupport: n50optionssupporttile[] = [];
  n50optionsresistance: n50optionsresistancetile[] = [];
  bnoptionssupport: bnoptionssupporttile[] = [];
  bnoptionsresistance: n50optionsresistancetile[] = [];
  advancedata = [];
  nifty50: nifty50tiles[] = [];
  indicestreemap = [];
  banknifty1: banknifty1tiles[] = [];
  stocksymbol: any
  data: any;
  stocksymbol1:any
  stockList: any
  optionwc = [];
  nftarray: nftarraytiles[] = [];
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
  mcindexid1:any
  pcrnsenifty: pcrnseniftytile[] = [];
  pcrnsebnifty: pcrnsebniftytile[] = [];
  nsindices1: nsindices1tiles[] = [];
  sector = [];
  mcindexsymbol: any
  mcindexsymbol1: any
  nsindices: nsindicestiles[] = [];
  // public linedonutdata: Array<number> = [];
  // public canvasdata: Array<any> = [];
  public linedonutlabel: Array<any> = [];
  indiavix: indiavixtile[] = [];
  dataapi: any
  bqadv: any
  bqdec: any
  bqunc: any
  stock = [];
  stock1 = [];
  nftsname = [];
  public nftcper: Array<number> = [];
  nftvolume = [];

  constructor(private http: HttpClient, private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router, private vps: ViewportScroller) {
  //  
   }
  
 

  ngOnInit(): void {
    //this.gettrendlynestocks1()
   
    {
      setInterval(() => { this.nsedataadvdec() }, 60000);
      setInterval(() => { this.nsedataniftyoi() }, 60000);
      setInterval(() => { this.nsedatabniftyoi() }, 60000);
      setInterval(() => { this.getniftytradersallstocks()}, 30000);
    }
     this.nsedataadvdec() 
       this.nsedataniftyoi()
       this.nsedatabniftyoi()
    
       this.getniftytradersallstocks() 
    this.stockList = stocks.default.Data
    //console.log(this.stockList)
    this.mcindexs = mcindex.default.Data
    //this.mcindexs1 = mcindex1.default.Data
    
    
    // this.getbqadvdec()
    //this.getmcindexdata()
    this.getetindices()
    this.getmcindexdata()
    
    this.getetsectors()
    //  { setInterval(() => { this.getetindices() }, 30000); }
    //  { setInterval(() => { this.getetsectors() }, 30000); }
     { setInterval(() => { this.getmcindexdata() }, 30000); }
   
    
  
  }
  
  getniftytradersallstocks() {
    this.dataApi.getniftytradersallstocks().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.nftsname.length = 0;
      this.nftcper.length = 0;
      this.nftvolume.length = 0;
      this.nftarray.length = 0;

      for (let val in nestedItems[2]) {
        // console.log(nestedItems[2][val].symbol_name,nestedItems[2][val].changePer,nestedItems[2][val].changeValue,nestedItems[2][val].today_volume)
        this.nftsname.push(nestedItems[2][val].symbol_name)
        this.nftcper.push(nestedItems[2][val].changePer)
        this.nftvolume.push(nestedItems[2][val].today_volume)
        this.nftarray.push({y:parseFloat(Number(nestedItems[2][val].changePer).toFixed(2)), label:nestedItems[2][val].symbol_name})
        // 
        
        // console.log(Number(this.nftcper))
      }
    
      
      //this.tltgstockvp.forEach(tltgstockvp=>console.log(tltgstockvp.value));
      let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
        exportEnabled: true,
        axisX:{
          interval: 1,
          labelAngle: -10,
          labelFontSize: 15,
      },
		title: {
			text: "All Stocks"
        },
        dataPointMaxWidth: 2,
		data: [{
			type: "bar",
      dataPoints: this.nftarray
      // [
			// 	{ y: 71, label: "Apple" },
			// 	{ y: 55, label: "Mango" },
			// 	{ y: 50, label: "Orange" },
			// 	{ y: 65, label: "Banana" },
			// 	{ y: 95, label: "Pineapple" },
			// 	{ y: 68, label: "Pears" },
			// 	{ y: 28, label: "Grapes" },
			// 	{ y: 34, label: "Lychee" },
			// 	{ y: 14, label: "Jackfruit" }
			// ]
		}]
	});
		
	chart.render();
    
  //    
     }, err => {
      console.log(err)
    })
  }
  //For top display PCR and others
  nsedataniftyoi() {
    this.dataApi.nsedataniftyoi().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
      //console.log(nestedItems[1]['CE'].totOI)
      //console.log(nestedItems[1]['PE'].totOI)
      this.pcrnsenifty.length = 0;
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
      this.n50optionsresistance.length = 0;
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
      //console.log("maximum" + maxp)
      this.n50optionssupport.length = 0;
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
      this.pcrnsebnifty.length = 0;
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
      //console.log("maximum" + maxbc)
      this.bnoptionsresistance.length = 0;
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
      //console.log("maximum" + maxbp)
      this.bnoptionssupport.length = 0;
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
  trackByFuntion(index, item) {
    console.log( 'TrackBy:', item.text2, 'at index', index );
    return item.text2
   }
  trackByFuntion1(index1, item1) {
    console.log( 'TrackBy:', item1.text1, 'at index', index1);
    return item1.text1
   }
  trackByFuntion2(index2, item2) {
    console.log( 'TrackBy:', item2.text1, 'at index', index2 );
    return item2.text1
   }
  trackByFuntion3(index3, item3) {
    console.log( 'TrackBy:', item3.text1, 'at index', index3 );
    return item3.text1;
   }
  trackByFuntion4(index4, item4) {
    console.log( 'TrackBy:', item4.text2, 'at index', index4 );
    item4.text2;
   }
  trackByFuntion5(index5, item5) {
    console.log( 'TrackBy:', item5.text1, 'at index', index5 );
    return item5.text1;
   }
  trackByFuntion6(index6, item6) {
    console.log( 'TrackBy:', item6.text1, 'at index', index6 );
     return item6.text1;
   }
  trackByFuntion7(index7, item7) {
    console.log( 'TrackBy:', item7.text1, 'at index', index7 );
    return item7.text1;
   }
  trackByFuntion8(index8, item8) {
    console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item8.text3 ;
   }
  

//For vix and nifty prices on the top
  nsedataadvdec() {
    this.dataApi.nsedataindices().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.indiavix.length = 0;
      this.indiavix.push({ text1: nestedItems[2][5].name, text2: nestedItems[2][5].change, text3: nestedItems[2][5].lastPrice, text4: nestedItems[2][5].pChange })
      this.nifty50.length = 0;
      this.banknifty1.length = 0;
      this.indicestreemap.length = 0;
      this.nifty50.push({ text1: nestedItems[2][1].name, text2: nestedItems[2][1].lastPrice, text3: nestedItems[2][1].change, text4: nestedItems[2][1].pChange })
      this.banknifty1.push({ text1:nestedItems[2][4].name,text2:nestedItems[2][4].lastPrice, text3:nestedItems[2][4].change,text4:nestedItems[2][4].pChange })
       //console.log(nestedItems[2])
    for (let val in nestedItems[2]) {
      
      this.indicestreemap.push({ x: nestedItems[2][val].name, y: nestedItems[2][val].pChange })
    }
       this.chartOptions6 = {
        series: [
          {
            data: this.indicestreemap
          }
        ],
        legend: {
          show: false
        },
    chart: {
      fontFamily: 'Helvetica, Arial, sans-serif',
          height: 500,
          type: "treemap"
        },
        title: {
          text: "Sector Tree Map"
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '30px',
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
                from: -6,
                to: 0,
                color: "#CD363A"
              },
              {
                from: 0.001,
                to: 6,
                color: "#52B12C"
              }
 
              ]
            }
          }
        }
      };
    

     
 
  }, err => {
    console.log(err)
  })
}


getetindices() {
  this.dataApi.getetindices().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
    this.linedonutlabel.length = 0;
    this.advancedata.length = 0;
    this.declinedata.length = 0;
    this.unchangedata.length = 0;

    for (let val in nestedItems[0]) {
    
      // this.linedonutdata.length = 0;
     
      //this.linedonutdata.push(nestedItems[0][val].advances, nestedItems[0][val].declines, nestedItems[0][val].noChange)
      this.linedonutlabel.push(nestedItems[0][val].indexName)
      this.advancedata.push(nestedItems[0][val].advances),
        this.declinedata.push("-" + nestedItems[0][val].declines)
     // this.unchangedata.push(nestedItems[0][val].noChange)
      //console.log(this.linedonutlabel)
      
      
    }
  
    
    this.chartOptions3 = {
      series: [
        {
          name: "Advances",
          data:this.advancedata
        },
        {
          name: "Declines",
          data: this.declinedata
        }
      ],
      chart: {
        type: "bar",
        height: 700,
        width:1200,
        stacked: true
      },
      colors: ["#008FFB", "#FF4560"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },

      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        
        title: {
           text: 'Hi',
        }
      },
      // tooltip: {
      //   shared: false,
      //   x: {
      //     formatter: function(val) {
      //       return val.toString();
      //     }
      //   },
      //   y: {
      //     formatter: function (val) {
      //       return val + "" ;
      //     }
      //   }
      // },
      xaxis: {
        categories: this.linedonutlabel,
        title: {
          text: "Advances Vs Declines"
        },
        

       
        }
      }
   }, err => {
    console.log(err)
  })
}

getetsectors() {
  this.dataApi.getetsectors().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    //console.log(nestedItems[0])
    this.sector.length = 0;
    for (let val in nestedItems[0]) {
      
      for (let val1 in nestedItems[0][val]["sectorConstituents"]) {
     
      //   console.log(nestedItems[0][val]["sectorConstituents"][val1].companyName)
      //  console.log(nestedItems[0][val]["sectorConstituents"][val1].percentChange)
      }
      
      this.sector.push({ x: nestedItems[0][val].sectorName, y: nestedItems[0][val].advancePercentChange })
      
    }
  
    this.chartOptions = {
          series: [
            {
              data: this.sector
            }
          ],
          legend: {
            show: false
          },
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif',
            height: 700,
            type: "treemap"
          },
          title: {
            text: "Sector Tree Map"
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '40px',
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
                    from: 0,
                    to: 50,
                    color: "#7B241C"
                  },
                  {
                    from: 50,
                    to: 100,
                    color: "#0E6655"
                  }
                ]
              }
            }
          }
        };
      

       
     
  }, err => {
    console.log(err)
  })
}
async getmcindexdata() {
  for (let val in this.mcindexs) {
    this.mcindexid = this.mcindexs[val].mcsectorid
  
   
    await this.getmcstockdetails(this.mcindexid)
  }
}

async getmcstockdetails(mcindexid) {
  this.dataApi.getmcstockdetails(this.mcindexid).subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    //console.log(nestedItems[0])
    //console.log(nestedItems[0])
    this.stock.length = 0;
    for (let val1 in nestedItems[0]) {
      this.stocksymbol = nestedItems[0][val1].id
      
      if (this.stockList.filter(i => i.mcsymbol == this.stocksymbol)[0].name) {
        this.mcstockname = this.stockList.filter(i => i.mcsymbol == this.stocksymbol)[0].name
        
      }
      this.stock.push({ x: this.mcstockname, y: nestedItems[0][val1].percentchange })
      this.mcindexsymbol = this.mcindexs.filter(i => i.mcsectorid == mcindexid)[0].name
  
    }
    
      
      

      this.chartOptions4 = {
        series: [
          {
            data: this.stock
          }
        ],
        legend: {
          show: true
        },
        chart: {
          fontFamily: 'Helvetica, Arial, sans-serif',
          height: 700,
          type: "treemap"
        },
        title: {
          text: this.mcindexsymbol
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '40px',
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
                from: -6,
                to: 0,
                color: "#CD363A"
              },
              {
                from: 0.001,
                to: 6,
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


// async getmcindexdata1() {
//   for (let val in this.mcindexs1) {
//     this.mcindexid1 = this.mcindexs1[val].mcsectorid
  
   
//     await this.getmcstockdetails1(this.mcindexid1)
//   }
// }

// async getmcstockdetails1(mcindexid1) {
//   this.dataApi.getmcstockdetails1(this.mcindexid1).subscribe(data5 => {
//     let nestedItems = Object.keys(data5).map(key => {
//       return data5[key];
//     });
//     console.log(nestedItems)
//     this.stock1.length = 0;
//     for (let val in nestedItems[0]) {
//       this.stocksymbol1 = nestedItems[0][val].id
//       this.mcstockname1 = this.stockList.filter(i => i.mcsymbol == this.stocksymbol)[0].name
      
//       this.stock1.push({ x: this.mcstockname, y: nestedItems[0][val].percentchange })
//       this.mcindexsymbol1 = this.mcindexs1.filter(i => i.mcsectorid == mcindexid1)[0].name
  
//     }
//     console.log(this.stock1)
      
      

//       this.chartOptions5 = {
//         series: [
//           {
//             data: this.stock1
//           }
//         ],
//         legend: {
//           show: true
//         },
//         chart: {
//           fontFamily: 'Helvetica, Arial, sans-serif',
//           height: 700,
//           type: "treemap"
//         },
//         title: {
//           text: this.mcindexsymbol1
//         },
//         dataLabels: {
//           enabled: true,
//           style: {
//             fontSize: '40px',
//             fontFamily: 'Helvetica, Arial, sans-serif',
//             fontWeight: 'bold',
//             colors: ["#000000"]
//           },

//           offsetY: -3
//         },
//         plotOptions: {
//           treemap: {
//             enableShades: true,
//             shadeIntensity: 0.5,
//             reverseNegativeShade: true,
//             colorScale: {
//               ranges: [
//                 {
//                 from: -6,
//                 to: 0,
//                 color: "#CD363A"
//               },
//               {
//                 from: 0.001,
//                 to: 6,
//                 color: "#52B12C"
//               }
 
//               ]
//             }
//           }
//         }
//       };
    
// }, err => {
//     console.log(err)
//   }
//   )
// }



 getbqadvdec() {
  this.dataApi.getbqadvdec().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    

  }, err => {
    console.log(err)
  })
}

getbarnegative() {
  };



scroll(id) {
  this.vps.scrollToAnchor(id);
}


}
