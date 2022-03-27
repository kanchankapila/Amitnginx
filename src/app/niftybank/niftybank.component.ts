import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { BaseChartDirective } from 'ng2-charts';
import { ViewportScroller } from '@angular/common';

export interface niftybankstockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface niftybankcrossover {

  text1: any;
  text2: any;
  text3: any;
  
}
export interface niftybankindicatorstile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface niftybankindicatorswtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface niftybankindicatorsmtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface niftybankbbtile{
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


@Component({
  selector: 'app-niftybank',
  templateUrl: './niftybank.component.html',
  styleUrls: ['./niftybank.component.scss']
})
export class NiftybankComponent implements OnInit {
 
  constructor(private dataApi: DataapiService,private window: Window, private primengConfig: PrimeNGConfig,private vps: ViewportScroller) {
    
  }
  
  public niftybankdata: Array<number> = [];
  public niftybankLabels: Array<any> = [];
  public niftypcrdata: Array<number> = [];
  public niftypcrtime: Array<any> = [];
  public niftyvixdata: Array<number> = [];
  public niftyvixtime: Array<any> = [];
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<number> = [];
  public lineChartOptions: any;
  public lineChartColors: any;
  public niftybank5ddata: Array<number> = [];
  public niftybank5dLabels: Array<any> = [];
  public lineChart5dData: Array<any> = [];
  public lineChart5dLabels: Array<number> = [];
  public lineChart5dOptions: any;
  public lineChart5dColors: any;
  public niftybank1mdata: Array<number> = [];
  public niftybank1mLabels: Array<any> = [];
  public lineChart1mData: Array<any> = [];
  public lineChart1mLabels: Array<number> = [];
  public lineChart1mOptions: any;
  public lineChart1mColors: any;
  public niftybank3mdata: Array<number> = [];
  public niftybank3mLabels: Array<any> = [];
  public lineChart3mData: Array<any> = [];
  public lineChart3mLabels: Array<number> = [];
  public lineChart3mOptions: any;
  public lineChart3mColors: any;
  public niftybank6mdata: Array<number> = [];
  public niftybank6mLabels: Array<any> = [];
  public lineChart6mData: Array<any> = [];
  public lineChart6mLabels: Array<number> = [];
  public lineChart6mOptions: any;
  public lineChart6mColors: any;
  public niftybank1yrdata: Array<number> = [];
  public niftybank1yrLabels: Array<any> = [];
  public lineChart1yrData: Array<any> = [];
  public lineChart1yrLabels: Array<number> = [];
  public lineChart1yrOptions: any;
  public lineChart1yrColors: any;
  public lineChartpcrData: Array<any> = [];
  public lineChartpcrLabels:Array<number>= [];
  public lineChartpcrOptions: any;
  public lineChartpcrColors: any;
  public lineChartvixData: Array<any> = [];
  public lineChartvixLabels:Array<number>= [];
  public lineChartvixOptions: any;
  public lineChartvixColors: any;
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  chart: any;
  niftybankstocks: niftybankstockstiles[] = [];
  niftybankcrossover: niftybankcrossover[] = [];
  niftybankindicators: niftybankindicatorstile[] = [];
  niftybankindicatorsw: niftybankindicatorswtile[] = [];
  niftybankindicatorsm: niftybankindicatorsmtile[] = [];
  niftybankbb: niftybankbbtile[] = [];
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
  basicData3: any;
  basicOptions3: any;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getmcniftybank();
    this.getniftybankfrequent(); 
   
    setInterval(() => { this.getniftybankfrequent() }, 30000);
 
  }
  buildpcrgraph() {
    
    
    this.basicData1 = {
      
      labels: this.niftypcrtime,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: '#ebedef',
          data: this.niftypcrdata,
          fill: false
        },
      ]
    };
    var footerLine14 = this.niftypcrdata
    //console.log(footerLine1 )
   
    this.basicOptions1 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Pcr:' + footerLine14[tooltipItems[0].index];
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
                color: '#D98880'
              },
              grid: {
                color: '#D98880'
              }
            },
            y: {
              ticks: {
                color: '#D98880'
              },
              grid: {
                color: '#D98880'
              }
            }}},}}
buildvixgraph() {
    
    
              this.basicData = {
                
                labels: this.niftyvixtime,
                
                
                datasets: [
                  {
                    label: "value",
                    //backgroundColor: this.getRandomColor(),
                    backgroundColor: '#ebedef',
                    data: this.niftyvixdata,
                    fill: false
                  },
                ]
              };
              var footerLine14 = this.niftyvixdata
              //console.log(footerLine1 )
             
              this.basicOptions = {
                
                responsive: true,
                tooltips: {
                  callbacks: {
                    beforeFooter: function (tooltipItems, data) {
                      return 'Current Vix:' + footerLine14[tooltipItems[0].index];
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
                          color: '#D98880'
                        },
                        grid: {
                          color: '#D98880'
                        }
                      },
                      y: {
                        ticks: {
                          color: '#D98880'
                        },
                        grid: {
                          color: '#D98880'
                        }
                      }}},}}
           
  getniftybankfrequent() {
    this.dataApi.getniftybankfrequent().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
      };
      console.log(nestedItems)
      /////////////////////Nifty Vix/////////////////////////////////
      this.niftyvixdata.length = 0;
      this.niftyvixtime.length = 0;
  for (let val in nestedItems[4]['graph']['values']) {
    this.niftyvixdata.push( nestedItems[4]['graph']['values'][val]['_value'] )
    this.niftyvixtime.push( nestedItems[4]['graph']['values'][val]['_time'])
  }
  
    this.buildvixgraph()
/////////////////////NIfty PCR from niftytraders////////////////////
      this.niftypcrdata.length = 0;
      this.niftypcrtime.length = 0;
for (let val in nestedItems[3]['resultData']['data']) {
  this.niftypcrdata.push( nestedItems[3]['resultData']['data'][val]['pcr'] )
  this.niftypcrtime.push( nestedItems[3]['resultData']['data'][val]['time'])
      }
      this.buildpcrgraph()

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
        this.lineChartDatan50snrr1.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r1),
        this.lineChartDatan50snrr2.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r2),
        this.lineChartDatan50snrr3.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.r3),
        this.lineChartDatan50snrs3.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s3),
        this.lineChartDatan50snrs2.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s2),
        this.lineChartDatan50snrs1.push(nestedItems[1]['data']['pivotLevels'][0].pivotLevel.s1)
      }
      
      this.niftybankindicators.length = 0;
      for (let val in nestedItems[1]['data']['crossover']) {
        this.niftybankindicators.push({text1:nestedItems[1]['data']['crossover'][val]['displayValue'],text3:nestedItems[1]['data']['crossover'][val]['indication'],text2:nestedItems[1]['data']['crossover'][val]['period'],text4:nestedItems[1]['data']['crossover'][val]['period']})
      }
      
     for (let val1 in nestedItems[1]['data']['indicators']) {
       if (nestedItems[1]['data']['indicators'][val1]['id'] != 'bollinger') {
         this.niftybankindicators.push({ text1: nestedItems[1]['data']['indicators'][val1].displayName, text2: nestedItems[1]['data']['indicators'][val1].id, text3: nestedItems[1]['data']['indicators'][val1].indication, text4: nestedItems[1]['data']['indicators'][val1].value })
       }
     }
       
/////////////////////////////EMA/SMA from Kite //////////////////////
    
this.niftyema.length = 0;
this.niftysma.length = 0;

  this.niftyema.push({ text1: nestedItems[2]['ema5'], text2: nestedItems[2]['ema10'], text3: nestedItems[2]['ema20'], text4: nestedItems[2]['ema30'], text5: nestedItems[2]['ema50'], text6: nestedItems[2]['ema100'], text7: nestedItems[2]['ema200'] })
  this.niftysma.push({text1:nestedItems[2]['sma5'],text2:nestedItems[2]['sma10'],text3:nestedItems[2]['sma20'],text4:nestedItems[2]['sma30'],text5:nestedItems[2]['sma50'],text6:nestedItems[2]['sma100'],text7:nestedItems[2]['sma200']})


//////////////////////////////Nifty 50 Stocks ////////////////////////
for (let val in nestedItems[5]['item']) {
  this.niftybankstocks.push({ text1: nestedItems[5]['item'][val].shortname, text2: nestedItems[5]['item'][val].change, text3: nestedItems[5]['item'][val].percentchange, text4: nestedItems[5]['item'][val].lastvalue, text5: nestedItems[5]['item'][val].direction })
  }


      
    
 
     

     ////////////To get Nifty Today Price///////////////////////
    
     this.niftybankdata.length = 0;
     this.niftybankLabels.length = 0;
     for (let val in nestedItems[0]['graph'].values) {
       this.niftybankdata.push(nestedItems[0]['graph'].values[val]["_value"])
       this.niftybankLabels.push(nestedItems[0]['graph'].values[val]["_time"])
      
     }
     
    
     this.lineChartData = [{
       label: 'Price',
       data: this.niftybankdata,
       borderWidth: 1,
       fill: false
     },{ label: 'R1',
     data: this.lineChartDatan50snrr1,
     borderWidth: 1,
     bordercolor:'#D98880',
         fill: false
       },
       {
       label: 'R2',
       data: this.lineChartDatan50snrr2,
       borderWidth: 1,
       borderColor: '#e3256b',
         fill: false
       }
       , {
         label: 'R3',
     data: this.lineChartDatan50snrr3,
         borderWidth: 1,
         borderColor: '#c84343',
     fill: false}, {
       label: 'S1',
   data: this.lineChartDatan50snrs1,
       borderWidth: 1,
       borderColor: '#90b590',
   fill: false}, {
     label: 'S2',
 data: this.lineChartDatan50snrs2,
     borderWidth: 1,
     borderColor: '#09c51b',
 fill: false}, {
   label: 'S3',
data: this.lineChartDatan50snrs3,
   borderWidth: 1,
   borderColor: '#375f00',
fill: false}];
   
     this.lineChartLabels = this.niftybankLabels;
     this.lineChartOptions = {
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
   
     this.lineChartColors = [
       {
         borderColor: '#2d0365'
       }
     ];

    }, err => {
      console.log(err)
    })
  }
 
 
 
  getmcniftybank() {
    this.dataApi.getmcniftybank().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
 
  console.log(nestedItems)


      ///////////////////////////////////////////////////////////////
       ////////////To get Nifty 5day Resistances and Indicators/////////////
      
       let val5 = 0;
       while (val5 != 2000) {
         val5 = val5 + 1
         this.lineChartDatan50snrr1w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.r1),
         this.lineChartDatan50snrr2w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.r2),
         this.lineChartDatan50snrr3w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.r3),
         this.lineChartDatan50snrs3w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.s3),
         this.lineChartDatan50snrs2w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.s2),
         this.lineChartDatan50snrs1w.push(nestedItems[5]['data']['pivotLevels'][0].pivotLevel.s1)
       }
       
       
       for (let val in nestedItems[5]['data']['crossover']) {
         this.niftybankindicatorsw.push({text1:nestedItems[5]['data']['crossover'][val]['displayValue'],text3:nestedItems[5]['data']['crossover'][val]['indication'],text2:nestedItems[5]['data']['crossover'][val]['period'],text4:nestedItems[5]['data']['crossover'][val]['period']})
       }
     
      for (let val1 in nestedItems[5]['data']['indicators']) {
        if (nestedItems[5]['data']['indicators'][val1]['id'] != 'bollinger') {
          this.niftybankindicatorsw.push({ text1: nestedItems[5]['data']['indicators'][val1].displayName, text2: nestedItems[5]['data']['indicators'][val1].id, text3: nestedItems[5]['data']['indicators'][val1].indication, text4: nestedItems[5]['data']['indicators'][val1].value })
        }
      }
        
        
       
     
  
      

      ////////////To get Nifty 5 day Price///////////////////////
     
      this.niftybank5ddata.length = 0;
      this.niftybank5dLabels.length = 0;
      for (let val in nestedItems[0]['graph'].values) {
        this.niftybank5ddata.push(nestedItems[0]['graph'].values[val]["_value"])
        this.niftybank5dLabels.push(nestedItems[0]['graph'].values[val]["_time"])
       
      }
      
     
      this.lineChart5dData = [{
        label: 'Price',
        data: this.niftybank5ddata,
        borderWidth: 1,
        fill: false
      },{ label: 'R1',
      data: this.lineChartDatan50snrr1w,
      borderWidth: 1,
      bordercolor:'#D98880',
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
      fill: false}, {
        label: 'S1',
    data: this.lineChartDatan50snrs1w,
        borderWidth: 1,
        borderColor: '#90b590',
    fill: false}, {
      label: 'S2',
  data: this.lineChartDatan50snrs2w,
      borderWidth: 1,
      borderColor: '#09c51b',
  fill: false}, {
    label: 'S3',
data: this.lineChartDatan50snrs3w,
    borderWidth: 1,
    borderColor: '#375f00',
fill: false}];
    
      this.lineChart5dLabels = this.niftybank5dLabels;
      this.lineChart5dOptions = {
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
    
      this.lineChart5dColors = [
        {
          borderColor: '#2d0365'
        }
      ];
  /////////////////////////////////////////////////////////////////
      
       ////////////To get Nifty 1 month Resistances and Indicators/////////////
      
       let val1m = 0;
       while (val1m != 12000) {
         val1m = val1m + 1
         this.lineChartDatan50snrr1m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.r1),
         this.lineChartDatan50snrr2m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.r2),
         this.lineChartDatan50snrr3m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.r3),
         this.lineChartDatan50snrs3m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.s3),
         this.lineChartDatan50snrs2m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.s2),
         this.lineChartDatan50snrs1m.push(nestedItems[6]['data']['pivotLevels'][0].pivotLevel.s1)
       }
       
       
       for (let val in nestedItems[6]['data']['crossover']) {
         this.niftybankindicatorsm.push({text1:nestedItems[6]['data']['crossover'][val]['displayValue'],text3:nestedItems[6]['data']['crossover'][val]['indication'],text2:nestedItems[6]['data']['crossover'][val]['period'],text4:nestedItems[6]['data']['crossover'][val]['period']})
       }
     
      for (let val1 in nestedItems[6]['data']['indicators']) {
        if (nestedItems[6]['data']['indicators'][val1]['id'] != 'bollinger') {
          this.niftybankindicatorsm.push({ text1: nestedItems[6]['data']['indicators'][val1].displayName, text2: nestedItems[6]['data']['indicators'][val1].id, text3: nestedItems[6]['data']['indicators'][val1].indication, text4: nestedItems[6]['data']['indicators'][val1].value })
        }
      }
        
        
       
     
  
      

      ////////////To get Nifty 1 month Price///////////////////////
     
      this.niftybank1mdata.length = 0;
      this.niftybank1mLabels.length = 0;
      for (let val in nestedItems[1]['graph'].values) {
        this.niftybank1mdata.push(nestedItems[1]['graph'].values[val]["_value"])
        this.niftybank1mLabels.push(nestedItems[1]['graph'].values[val]["_time"])
       
      }
      
     
      this.lineChart1mData = [{
        label: 'Price',
        data: this.niftybank1mdata,
        borderWidth: 1,
        fill: false
      },{ label: 'R1',
      data: this.lineChartDatan50snrr1m,
      borderWidth: 1,
      bordercolor:'#D98880',
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
      fill: false}, {
        label: 'S1',
    data: this.lineChartDatan50snrs1m,
        borderWidth: 1,
        borderColor: '#90b590',
    fill: false}, {
      label: 'S2',
  data: this.lineChartDatan50snrs2m,
      borderWidth: 1,
      borderColor: '#09c51b',
  fill: false}, {
    label: 'S3',
data: this.lineChartDatan50snrs3m,
    borderWidth: 1,
    borderColor: '#375f00',
fill: false}];
    
      this.lineChart1mLabels = this.niftybank1mLabels;
      this.lineChart1mOptions = {
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
    
      this.lineChart1mColors = [
        {
          borderColor: '#2d0365'
        }
      ];
//////////////////////////////////////////////////////////////////
      ////////////////Nifty 3 months/////////////////////////////
      for (let val in nestedItems[2]['graph'].values) {
        this.niftybank3mdata.push(nestedItems[2]['graph'].values[val]["_value"])
        this.niftybank3mLabels.push(nestedItems[2]['graph'].values[val]["_time"])
     
      }
    
     
      this.lineChart3mData = [{
        label: 'Price',
        data: this.niftybank3mdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.lineChart3mLabels = this.niftybank3mLabels;
      this.lineChart3mOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
  
      this.lineChart3mColors = [
        {
          borderColor: '#115dcd'
        }
      ];
  ////////////////////////////////////////////////////////////////////
      //////////////////NIfty 6 months///////////////////////////////

       //this.niftybank6mdata.length = 0;
      //this.niftybank6mLabels.length = 0;
      for (let val in nestedItems[3]['graph'].values) {
        this.niftybank6mdata.push(nestedItems[3]['graph'].values[val]["_value"])
        this.niftybank6mLabels.push(nestedItems[3]['graph'].values[val]["_time"])
       
      }
      
     
      this.lineChart6mData = [{
        label: 'Price',
        data: this.niftybank6mdata,
        borderWidth: 1,
        fill: false
      }];
    
      this.lineChart6mLabels = this.niftybank6mLabels;
      this.lineChart6mOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
    
      this.lineChart6mColors = [
        {
          borderColor: '#5a7f84'
        }
      ];
    
   
 


 ///////////////////Nifty 1 year/////////////////////////////////////

      //this.niftybank1yrdata.length = 0;
      //this.niftybank1yrLabels.length = 0;
      for (let val in nestedItems[4]['graph'].values) {
        this.niftybank1yrdata.push(nestedItems[4]['graph'].values[val]["_value"])
        this.niftybank1yrLabels.push(nestedItems[4]['graph'].values[val]["_time"])
     
      }
    
  
      this.lineChart1yrData = [{
        label: 'Price',
        data: this.niftybank1yrdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.lineChart1yrLabels = this.niftybank1yrLabels;
      this.lineChart1yrOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
  
      this.lineChart1yrColors = [
        {
          borderColor: '#c154c1'
        }
      ];

    }, err => {
      console.log(err)
    })
  }

  

     
}



 



 