import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { BaseChartDirective } from 'ng2-charts';

export interface nifty50stockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface nifty50crossover {

  text1: any;
  text2: any;
  text3: any;
  
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


@Component({
  selector: 'app-nifty50',
  templateUrl: './nifty50.component.html',
  styleUrls: ['./nifty50.component.scss']
})
export class Nifty50Component implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  constructor(private dataApi: DataapiService, private primengConfig: PrimeNGConfig) {
    
  }
  
  public nifty50data: Array<number> = [];
  public nifty50Labels: Array<any> = [];
  public niftypcrdata: Array<number> = [];
  public niftypcrtime: Array<any> = [];
  public niftyvixdata: Array<number> = [];
  public niftyvixtime: Array<any> = [];
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<number> = [];
  public lineChartOptions: any;
  public lineChartColors: any;
  public nifty505ddata: Array<number> = [];
  public nifty505dLabels: Array<any> = [];
  public lineChart5dData: Array<any> = [];
  public lineChart5dLabels: Array<number> = [];
  public lineChart5dOptions: any;
  public lineChart5dColors: any;
  public nifty501mdata: Array<number> = [];
  public nifty501mLabels: Array<any> = [];
  public lineChart1mData: Array<any> = [];
  public lineChart1mLabels: Array<number> = [];
  public lineChart1mOptions: any;
  public lineChart1mColors: any;
  public nifty503mdata: Array<number> = [];
  public nifty503mLabels: Array<any> = [];
  public lineChart3mData: Array<any> = [];
  public lineChart3mLabels: Array<number> = [];
  public lineChart3mOptions: any;
  public lineChart3mColors: any;
  public nifty506mdata: Array<number> = [];
  public nifty506mLabels: Array<any> = [];
  public lineChart6mData: Array<any> = [];
  public lineChart6mLabels: Array<number> = [];
  public lineChart6mOptions: any;
  public lineChart6mColors: any;
  public nifty501yrdata: Array<number> = [];
  public nifty501yrLabels: Array<any> = [];
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
  nifty50stocks: nifty50stockstiles[] = [];
  nifty50crossover: nifty50crossover[] = [];
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
  basicData3: any;
  basicOptions3: any;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getmcnifty50();
    this.getnifty50frequent(); 
    //this.reloadChart();
   // this.reloadChart1();
   // this.refreshchart();
    setInterval(() => { this.getnifty50frequent() }, 30000);
    setInterval(() => { this.reloadChart() }, 30010);
   // setInterval(() => { this.reloadChart1() }, 30010);
    //setInterval(() => { this.refreshchart() }, 3010);
  }
  // refreshchart() {
    
  //   this.lineChartvixData = this.niftyvixdata;
  //   this.lineChartvixLabels = this.niftyvixtime;
    
  // }
  reloadChart(){
    this.lineChartpcrData.push('reload');
    this.lineChartpcrLabels.push(1);
    setTimeout(() => {
      this.lineChartpcrData.pop();
      this.lineChartpcrLabels.pop();
    },1);
  }
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
 
  // reloadChart1(){
  //   this.lineChartvixData.push('reload');
  //   this.lineChartvixLabels.push(1);
  //   setTimeout(() => {
  //     this.lineChartvixData.pop();
  //     this.lineChartvixLabels.pop();
  //   },1);
 // }
  getnifty50frequent() {
    this.dataApi.getnifty50frequent().subscribe(data5 => {
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
this.lineChartpcrData = [{
  label: 'PCR',
  data: this.niftypcrdata,
  borderWidth: 1,
  fill: false

}],
this.lineChartpcrLabels = this.niftypcrtime,
  this.lineChartpcrOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
},

this.lineChartpcrColors = [
  {
    borderColor: '#D98880'
  }
  ];


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
      
      this.nifty50indicators.length = 0;
      for (let val in nestedItems[1]['data']['crossover']) {
        this.nifty50indicators.push({text1:nestedItems[1]['data']['crossover'][val]['displayValue'],text3:nestedItems[1]['data']['crossover'][val]['indication'],text2:nestedItems[1]['data']['crossover'][val]['period'],text4:nestedItems[1]['data']['crossover'][val]['period']})
      }
      
     for (let val1 in nestedItems[1]['data']['indicators']) {
       if (nestedItems[1]['data']['indicators'][val1]['id'] != 'bollinger') {
         this.nifty50indicators.push({ text1: nestedItems[1]['data']['indicators'][val1].displayName, text2: nestedItems[1]['data']['indicators'][val1].id, text3: nestedItems[1]['data']['indicators'][val1].indication, text4: nestedItems[1]['data']['indicators'][val1].value })
       }
     }
       
       
      
    
 
     

     ////////////To get Nifty Today Price///////////////////////
    
     this.nifty50data.length = 0;
     this.nifty50Labels.length = 0;
     for (let val in nestedItems[0]['graph'].values) {
       this.nifty50data.push(nestedItems[0]['graph'].values[val]["_value"])
       this.nifty50Labels.push(nestedItems[0]['graph'].values[val]["_time"])
      
     }
     
    
     this.lineChartData = [{
       label: 'Price',
       data: this.nifty50data,
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
   
     this.lineChartLabels = this.nifty50Labels;
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
 
 
 
  getmcnifty50() {
    this.dataApi.getmcnifty50().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
 
  console.log(nestedItems)


      ///////////////////////////////////////////////////////////////
       ////////////To get Nifty 5day Resistances and Indicators/////////////
      
       let val5 = 0;
       while (val5 != 2000) {
         val5 = val5 + 1
         this.lineChartDatan50snrr1w.push(nestedItems[7]['data']['pivotLevels'][0].pivotLevel.r1),
         this.lineChartDatan50snrr2w.push(nestedItems[7]['data']['pivotLevels'][0].pivotLevel.r2),
         this.lineChartDatan50snrr3w.push(nestedItems[7]['data']['pivotLevels'][0].pivotLevel.r3),
         this.lineChartDatan50snrs3w.push(nestedItems[7]['data']['pivotLevels'][0].pivotLevel.s3),
         this.lineChartDatan50snrs2w.push(nestedItems[7]['data']['pivotLevels'][0].pivotLevel.s2),
         this.lineChartDatan50snrs1w.push(nestedItems[7]['data']['pivotLevels'][0].pivotLevel.s1)
       }
       
       
       for (let val in nestedItems[7]['data']['crossover']) {
         this.nifty50indicatorsw.push({text1:nestedItems[7]['data']['crossover'][val]['displayValue'],text3:nestedItems[7]['data']['crossover'][val]['indication'],text2:nestedItems[7]['data']['crossover'][val]['period'],text4:nestedItems[7]['data']['crossover'][val]['period']})
       }
     
      for (let val1 in nestedItems[7]['data']['indicators']) {
        if (nestedItems[7]['data']['indicators'][val1]['id'] != 'bollinger') {
          this.nifty50indicatorsw.push({ text1: nestedItems[7]['data']['indicators'][val1].displayName, text2: nestedItems[7]['data']['indicators'][val1].id, text3: nestedItems[7]['data']['indicators'][val1].indication, text4: nestedItems[7]['data']['indicators'][val1].value })
        }
      }
        
        
       
     
  
      

      ////////////To get Nifty 5 day Price///////////////////////
     
      this.nifty505ddata.length = 0;
      this.nifty505dLabels.length = 0;
      for (let val in nestedItems[1]['graph'].values) {
        this.nifty505ddata.push(nestedItems[1]['graph'].values[val]["_value"])
        this.nifty505dLabels.push(nestedItems[1]['graph'].values[val]["_time"])
       
      }
      
     
      this.lineChart5dData = [{
        label: 'Price',
        data: this.nifty505ddata,
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
    
      this.lineChart5dLabels = this.nifty505dLabels;
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
         this.lineChartDatan50snrr1m.push(nestedItems[8]['data']['pivotLevels'][0].pivotLevel.r1),
         this.lineChartDatan50snrr2m.push(nestedItems[8]['data']['pivotLevels'][0].pivotLevel.r2),
         this.lineChartDatan50snrr3m.push(nestedItems[8]['data']['pivotLevels'][0].pivotLevel.r3),
         this.lineChartDatan50snrs3m.push(nestedItems[8]['data']['pivotLevels'][0].pivotLevel.s3),
         this.lineChartDatan50snrs2m.push(nestedItems[8]['data']['pivotLevels'][0].pivotLevel.s2),
         this.lineChartDatan50snrs1m.push(nestedItems[8]['data']['pivotLevels'][0].pivotLevel.s1)
       }
       
       
       for (let val in nestedItems[8]['data']['crossover']) {
         this.nifty50indicatorsm.push({text1:nestedItems[8]['data']['crossover'][val]['displayValue'],text3:nestedItems[8]['data']['crossover'][val]['indication'],text2:nestedItems[8]['data']['crossover'][val]['period'],text4:nestedItems[8]['data']['crossover'][val]['period']})
       }
     
      for (let val1 in nestedItems[8]['data']['indicators']) {
        if (nestedItems[8]['data']['indicators'][val1]['id'] != 'bollinger') {
          this.nifty50indicatorsm.push({ text1: nestedItems[8]['data']['indicators'][val1].displayName, text2: nestedItems[8]['data']['indicators'][val1].id, text3: nestedItems[8]['data']['indicators'][val1].indication, text4: nestedItems[8]['data']['indicators'][val1].value })
        }
      }
        
        
       
     
  
      

      ////////////To get Nifty 1 month Price///////////////////////
     
      this.nifty501mdata.length = 0;
      this.nifty501mLabels.length = 0;
      for (let val in nestedItems[2]['graph'].values) {
        this.nifty501mdata.push(nestedItems[2]['graph'].values[val]["_value"])
        this.nifty501mLabels.push(nestedItems[2]['graph'].values[val]["_time"])
       
      }
      
     
      this.lineChart1mData = [{
        label: 'Price',
        data: this.nifty501mdata,
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
    
      this.lineChart1mLabels = this.nifty501mLabels;
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
      for (let val in nestedItems[3]['graph'].values) {
        this.nifty503mdata.push(nestedItems[3]['graph'].values[val]["_value"])
        this.nifty503mLabels.push(nestedItems[3]['graph'].values[val]["_time"])
     
      }
    
     
      this.lineChart3mData = [{
        label: 'Price',
        data: this.nifty503mdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.lineChart3mLabels = this.nifty503mLabels;
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

       //this.nifty506mdata.length = 0;
      //this.nifty506mLabels.length = 0;
      for (let val in nestedItems[4]['graph'].values) {
        this.nifty506mdata.push(nestedItems[4]['graph'].values[val]["_value"])
        this.nifty506mLabels.push(nestedItems[4]['graph'].values[val]["_time"])
       
      }
      
     
      this.lineChart6mData = [{
        label: 'Price',
        data: this.nifty506mdata,
        borderWidth: 1,
        fill: false
      }];
    
      this.lineChart6mLabels = this.nifty506mLabels;
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

      //this.nifty501yrdata.length = 0;
      //this.nifty501yrLabels.length = 0;
      for (let val in nestedItems[5]['graph'].values) {
        this.nifty501yrdata.push(nestedItems[5]['graph'].values[val]["_value"])
        this.nifty501yrLabels.push(nestedItems[5]['graph'].values[val]["_time"])
     
      }
    
  
      this.lineChart1yrData = [{
        label: 'Price',
        data: this.nifty501yrdata,
        borderWidth: 1,
        fill: false
      }];
  
      this.lineChart1yrLabels = this.nifty501yrLabels;
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
//////////////////////////////Nifty 50 Stocks ////////////////////////
for (let val in nestedItems[9]['item']) {
this.nifty50stocks.push({ text1: nestedItems[9]['item'][val].shortname, text2: nestedItems[9]['item'][val].change, text3: nestedItems[9]['item'][val].percentchange, text4: nestedItems[9]['item'][val].lastvalue, text5: nestedItems[9]['item'][val].direction })
}
/////////////////////////////EMA/SMA from Kite //////////////////////
    
      this.niftyema.length = 0;
      this.niftysma.length = 0;

        this.niftyema.push({ text1: nestedItems[10]['ema5'], text2: nestedItems[10]['ema10'], text3: nestedItems[10]['ema20'], text4: nestedItems[10]['ema30'], text5: nestedItems[10]['ema50'], text6: nestedItems[10]['ema100'], text7: nestedItems[10]['ema200'] })
        this.niftysma.push({text1:nestedItems[10]['sma5'],text2:nestedItems[10]['sma10'],text3:nestedItems[10]['sma20'],text4:nestedItems[10]['sma30'],text5:nestedItems[10]['sma50'],text6:nestedItems[10]['sma100'],text7:nestedItems[10]['sma200']})

      

  
    }, err => {
      console.log(err)
    })
  }

  

     
}



 



 