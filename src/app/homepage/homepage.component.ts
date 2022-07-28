import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Chart, ChartOptions, ChartConfiguration, ChartType } from 'chart.js';
import ApexCharts from 'apexcharts'
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};


export interface globalmarkettiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  
}
export interface sectortiles {

  x: string;
  y: any;
  
  
  
}

//TreeMap.Inject(TreeMapTooltip, TreeMapLegend);
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
 
})
export class HomepageComponent implements OnInit {
  //@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions1>;

  constructor(private http: HttpClient,private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) { }
  globalmarket: globalmarkettiles[] = [];
  sectors:sectortiles[] = [];
  mcadvvalue: any
  mcdecvalue: any
  user: string;
  public advData: Array<any> = [];
  public advLabels: Array<number> = [];
  public decData: Array<any> = [];
  public advdecChartData: ChartConfiguration['data']
  public advdecChartType: ChartType = 'line';
  public leafItemSettings: object
  public data: object[]
  public tooltipSettings: object
  public advdecChartOptions:ChartOptions = {
    scales: {},

    elements: {
      point: {
        radius: 0
      }
    }
  };
  
 
  ngOnInit(): void {
    this.getglobal()
    this.getadvdec()
    this.opstrafiidii()
    this.getsectors()
    setInterval(() => { this.getadvdec() }, 30000);
    setInterval(() => { this.getglobal() }, 30000);
    setInterval(() => { this.getsectors() }, 30000);
   
    
  }
  getglobal() {
   
    this.http.get<any>('https://api.niftytrader.in/webapi/Index/globalStock').subscribe(data5 => {
    
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.globalmarket.length = 0;
      for (let val in nestedItems[2]) {
        for (let val1 in nestedItems[2][val]['data']) {
          this.globalmarket.push({ text1: nestedItems[2][val]['data'][val1].symbol,text2:nestedItems[2][val]['data'][val1].country,text3:nestedItems[2][val]['data'][val1].change_per,text4:nestedItems[2][val]['data'][val1].change_value,text5:nestedItems[2][val]['data'][val1].timestamp })
        }
      }
    })
  

  }
  getsectors() {
    this.http.get<any>(' https://api.moneycontrol.com/mcapi/v1/indices/ad-ratio/heat-map?period=1D&type=MC&indexId=9&subType=SE').subscribe(data5 => {
    
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     
       this.sectors.length = 0;
      for (let val in nestedItems[1].chartData) {

        if (nestedItems[1].chartData[val].id) {
          this.sectors.push({ x: nestedItems[1].chartData[val].name, y: (nestedItems[1].chartData[val].changeP)})
                                              }
      }
      this.chartOptions = {
        series: [
          {
            data: this.sectors
          }
        ],
        legend: {
          show: false
        },
        chart: {
          height: 250,
          type: "treemap"
        },
        title: {
          text: "NIFTY 50"
        },
        dataLabels: {
          enabled: true,
  
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
                  from: 0.1,
                  to: 20,
                  color: "#52B12C"
                }
              ]
            }
          }
        }
      };
    });           
  }
  getadvdec() {
   
    this.http.get<any>('https://www.moneycontrol.com/mc/widget/mfnavonetimeinvestment/get_chart_value1?classic=true').subscribe(data5 => {
    
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.advData.length = 0;
      this.decData.length = 0;
      this.advLabels.length = 0;
      for (let val in nestedItems[1]) {
        this.mcadvvalue = nestedItems[1][val].advValue
        this.mcdecvalue = nestedItems[1][val].decValue
        this.advData.push(nestedItems[1][val].decValue)
        this.decData.push(nestedItems[1][val].advValue)
        this.advLabels.push(nestedItems[1][val].curDate)
        
       
      }
      this.advdecChartData = {
        
        datasets: [
          {
            label: 'advance',
            data: this.advData
          },
          {
            label: 'decline',
            data: this.decData
          }],
          labels:this.advLabels
           };
     
    }, err => {
      console.log(err)
    })
    
  }
  
  trackByFuntion1(index1, item1) {
     return item1.text1
   }
  opstrafiidii() {
    console.log(document.cookie)
    //let headers: HttpHeaders = new HttpHeaders()
    //headers = headers.append('cookie','_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1569867014.1655128119; csrftoken=j1Eh0zadbXX2a6wxeWMsyiN8tqMSwOXK8TSXab1ceRJkqLb4aiWHtuYjRjIeTSIb; .trendlyne=a7juoxwv02x77mw4wynxk1g43sjy9f36; _gat=1');
   // headers = headers.append('cookie','_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1569867014.1655128119; csrftoken=Fpues3hutZZ3i8S6FShRiVvk4uOXbl9tHBfdqByuhssEAISHMY6G5fXkfmwGI4Ov; .trendlyne=e3qcvnv4pt6rsd5avmsbj26fe6lzd8uo')
   // console.log(headers)
    this.http.get<any>('https://trendlyne.com/equity/getStockMetricParameterList/71260').subscribe(data5 => {
   
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      console.log(nestedItems)
      for (let val in nestedItems) {
        
       
      }
      //   this.advdecChartData = {
        
      //     datasets: [
      //       {
      //         label: 'advance',
      //         data: this.advData
      //       },
      //       {
      //         label: 'decline',
      //         data: this.decData
      //       }],
      //       labels:this.advLabels
      //        };
     
      // }, err => {
      //   console.log(err)

      


    
       })
    
    }
 

}
