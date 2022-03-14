import { Component, OnInit } from '@angular/core';
import {DataapiService} from '../../dataapi.service'
import * as  stocks from './stocklist'
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


export interface dataSourcetiles {
  Company: string;
  SMA20: number;
  SMA50: number;
  CurrentPrice: number;
  Change: number;
}
export interface dataSourcetiles1 {
  Company: string;
  Changepercent: number;
  CurrentPrice: number;
  Change: number;
}
export interface indiavixtile {
  text1: number;
  text2: number;
  text3: number;
  text4: number;
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
export interface pcrnsebniftytile {
  text1: number;
}


export interface dataSourcetiles2 {
  Company: string;
  Changepercent: number;
  CurrentPrice: number;
  AvgVol: number;
  Volume: number;
  Volchange: number;
}
export interface pcrnseniftytile {
  text1: number;
  }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  


export class HomeComponent implements OnInit {
  headElements: string[] = ['Company', 'SMA20', 'SMA50', 'CurrentPrice', 'Change'];
  headElements1: string[] = ['Company', 'Changepercent', 'CurrentPrice', 'Change'];
  headElements2: string[] = ['Company', 'Changepercent', 'CurrentPrice','AvgVol','Volume','Volchange'];
  //dataSource = [];
  public chartOptions3: Partial<ChartOptions3>;
  optionwc = [];
  optionwp = [];
  optionbwc = [];
  optionbwp = [];
  
  indicestreemap = [];
  indiavix: indiavixtile[] = [];
  dataSource: dataSourcetiles[] = [];
  dataSource1: dataSourcetiles1[] = [];
  dataSource2: dataSourcetiles2[] = [];
  pcrnsenifty: pcrnseniftytile[] = [];
  pcrnsebnifty: pcrnsebniftytile[] = [];
  nifty50: nifty50tiles[] = [];
  banknifty1: banknifty1tiles[] = [];
  n50optionssupport: n50optionssupporttile[] = [];
  n50optionsresistance: n50optionsresistancetile[] = [];
  bnoptionssupport: bnoptionssupporttile[] = [];
  bnoptionsresistance: n50optionsresistancetile[] = [];
  
   
  constructor(private dataApi: DataapiService,  ) {


   }
  
  

  ngOnInit() {
    this.getetsmacrossover()
    this.getetsmabullishcrossover()
    this.getetvolumeshocker()
    {
      setInterval(() => { this.nsedataadvdec() }, 30000);
    }
    {
      setInterval(() => { this.nsedatabniftyoi() }, 30000);
    }
    {
      setInterval(() => { this.nsedataniftyoi() }, 30000);
    }
    this.nsedataniftyoi()
    this.nsedataadvdec()
    this.nsedatabniftyoi()
  }
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
      console.log("maximum" + maxp)
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
      console.log("maximum" + maxbc)
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
      console.log("maximum" + maxbp)
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
  

  nsedataadvdec() {
    this.dataApi.nsedataindices().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      
      this.nifty50.length = 0;
      this.banknifty1.length = 0;
      this.indicestreemap.length = 0;
      this.indiavix.length = 0;
      this.indiavix.push({ text1: nestedItems[2][5].name, text2: nestedItems[2][5].change, text3: nestedItems[2][5].lastPrice, text4: nestedItems[2][5].pChange })
      this.nifty50.push({ text1: nestedItems[2][1].name, text2: nestedItems[2][1].lastPrice, text3: nestedItems[2][1].change, text4: nestedItems[2][1].pChange })
      this.banknifty1.push({ text1:nestedItems[2][4].name,text2:nestedItems[2][4].lastPrice, text3:nestedItems[2][4].change,text4:nestedItems[2][4].pChange })
       //console.log(nestedItems[2])
      for (let val in nestedItems[2]) {
        
        this.indicestreemap.push({ x: nestedItems[2][val].name, y: nestedItems[2][val].pChange })
      }
         this.chartOptions3 = {
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
  
  
getetsmacrossover() {
  this.dataApi.getetsmacrossover().subscribe(data3 => {

    let nestedItems = Object.keys(data3).map(key => {
      return data3[key];
    });
    //console.log(nestedItems[0])
    for (let val in nestedItems[0]) {
      this.dataSource.push({ Company:nestedItems[0][val].companyName, SMA20: nestedItems[0][val].currentSma20, SMA50: nestedItems[0][val].currentSma50, CurrentPrice: nestedItems[0][val].currentPrice, Change: nestedItems[0][val].percentageChange })
 
     }
   //console.log(this.dataSource)
  }, err => {
    console.log(err)




  })
}

getetsmabullishcrossover() {
  this.dataApi.getetsmabullishcrossover().subscribe(data3 => {

    let nestedItems = Object.keys(data3).map(key => {
      return data3[key];
    });
    console.log(nestedItems[0])
    for (let val in nestedItems[0]) {
      this.dataSource1.push({ Company:nestedItems[0][val].companyName, Changepercent: nestedItems[0][val].percentChange, CurrentPrice: nestedItems[0][val].ltp, Change: nestedItems[0][val].absoluteChange })
     }
   
  }, err => {
    console.log(err)




  })
}
getetvolumeshocker() {
  this.dataApi.getetvolumeshocker().subscribe(data3 => {

    let nestedItems = Object.keys(data3).map(key => {
      return data3[key];
    });
    console.log(nestedItems[0])
    for (let val in nestedItems[0]) {
      this.dataSource2.push({ Company:nestedItems[0][val].companyName, Changepercent: nestedItems[0][val].percentChange, CurrentPrice: nestedItems[0][val].current, AvgVol: nestedItems[0][val].averageVolume,Volume:nestedItems[0][val].volume,Volchange:nestedItems[0][val].volumePercentageChange })
     }
   
  }, err => {
    console.log(err)




  })
}

  }


