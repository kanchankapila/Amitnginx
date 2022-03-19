import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { ChartModule } from 'primeng/chart';
import { PrimeNGConfig } from 'primeng/api';
import { Chart } from 'chart.js';

export interface nifty50stockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

@Component({
  selector: 'app-nifty50',
  templateUrl: './nifty50.component.html',
  styleUrls: ['./nifty50.component.scss']
})
export class Nifty50Component implements OnInit {

  constructor(private dataApi: DataapiService, private primengConfig: PrimeNGConfig) {
    
  }
  public nifty50data: Array<number> = [];
  public nifty50Labels: Array<any> = [];
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
  nifty50stocks: nifty50stockstiles[] = [];
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
  
  basicData3: any;
  basicOptions3: any;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getnifty50()
    this.getnifty505d()
    this.getnifty506m()
    this.getnifty503m()
    this.getnifty501yr()
    this.getnifty50snr()
    this.getnifty50stocks()
  
   
  }

 
    
  



  
//////////////To get Nifty 50 Price /////////////////////////
  getnifty50() {
    this.dataApi.getnifty50().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
      };
      this.nifty50data.length = 0;
      this.nifty50Labels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty50data.push(nestedItems[1].values[val]["_value"])
        this.nifty50Labels.push(nestedItems[1].values[val]["_time"])
       
      }
      
     
      this.lineChartData = [{
        label: 'Price',
        data: this.nifty50data,
        borderWidth: 1,
        fill: false
      },{ label: 'Resitance1',
      data: this.lineChartDatan50snrr1,
      borderWidth: 1,
      bordercolor:'#ff80ed',
          fill: false
        },
        {
        label: 'Resitance2',
        data: this.lineChartDatan50snrr2,
        borderWidth: 1,
        borderColor: '#e3256b',
          fill: false
        }
        , {
          label: 'Resitance3',
      data: this.lineChartDatan50snrr3,
          borderWidth: 1,
          borderColor: '#c84343',
      fill: false}, {
        label: 'Support1',
    data: this.lineChartDatan50snrr3,
        borderWidth: 1,
        borderColor: '#90b590',
    fill: false}, {
      label: 'Support2',
  data: this.lineChartDatan50snrr3,
      borderWidth: 1,
      borderColor: '#09c51b',
  fill: false}, {
    label: 'Support3',
data: this.lineChartDatan50snrr3,
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
 



  getnifty505d() {
    this.dataApi.getnifty505d().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

     // this.nifty505ddata.length = 0;
     // this.nifty505dLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty505ddata.push(nestedItems[1].values[val]["_value"])
        this.nifty505dLabels.push(nestedItems[1].values[val]["_time"])
     
      }
    
     
      this.lineChart5dData = [{
        label: 'Price',
        data: this.nifty505ddata,
        borderWidth: 1,
        fill: false
      }];
  
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
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
  
      this.lineChart5dColors = [
        {
          borderColor: '#483d8b'
        }
      ];
  
    }, err => {
      console.log(err)
    })
  }



  getnifty503m() {
    this.dataApi.getnifty503m().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

    //  this.nifty503mdata.length = 0;
     // this.nifty503mLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty503mdata.push(nestedItems[1].values[val]["_value"])
        this.nifty503mLabels.push(nestedItems[1].values[val]["_time"])
     
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
  
    }, err => {
      console.log(err)
    })
  }



  getnifty506m() {
    this.dataApi.getnifty506m().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      //this.nifty506mdata.length = 0;
      //this.nifty506mLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty506mdata.push(nestedItems[1].values[val]["_value"])
        this.nifty506mLabels.push(nestedItems[1].values[val]["_time"])
       
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
    
    }, err => {
      console.log(err)
    })
  }
 


  getnifty501yr() {
    this.dataApi.getnifty501yr().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      //this.nifty501yrdata.length = 0;
      //this.nifty501yrLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.nifty501yrdata.push(nestedItems[1].values[val]["_value"])
        this.nifty501yrLabels.push(nestedItems[1].values[val]["_time"])
     
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
  
    }, err => {
      console.log(err)
    })
  }
/////////////////////To get Nifty 50 Stocks ///////////////////
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
  ///////////////////To get nifty 50 Snr /////////////////

  getnifty50snr() {
    this.dataApi.getnifty50snr().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      let val = 0;
      while (val != 400) {
        val = val + 1
        this.lineChartDatan50snrr1.push(nestedItems[0][0].pivotLevel.r1),
          this.lineChartDatan50snrr2.push(nestedItems[0][0].pivotLevel.r2),
          this.lineChartDatan50snrr3.push(nestedItems[0][0].pivotLevel.r3),
          this.lineChartDatan50snrs3.push(nestedItems[0][0].pivotLevel.s3),
          this.lineChartDatan50snrs2.push(nestedItems[0][0].pivotLevel.s2),
          this.lineChartDatan50snrs1.push(nestedItems[0][0].pivotLevel.s1)
      }
    }, err => {
      console.log(err)
    })
  }

}


 