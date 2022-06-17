import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Chart, ChartOptions, ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';
export interface globalmarkettiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  constructor(public cookieService: CookieService,private http: HttpClient,private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) { }
  globalmarket: globalmarkettiles[] = [];
  mcadvvalue: any
  mcdecvalue: any
  user: string;
  public advData: Array<any> = [];
  public advLabels: Array<number> = [];
  public decData: Array<any> = [];
  public advdecChartData: ChartConfiguration['data']
  public advdecChartType: ChartType = 'line';
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
    
  }
  getglobal() {
   
    this.http.get<any>('https://api.niftytrader.in/webapi/Index/globalStock').subscribe(data5 => {
    
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     
      for (let val in nestedItems[2]) {
        for (let val1 in nestedItems[2][val]['data']) {
          this.globalmarket.push({ text1: nestedItems[2][val]['data'][val1].symbol,text2:nestedItems[2][val]['data'][val1].country,text3:nestedItems[2][val]['data'][val1].change_per,text4:nestedItems[2][val]['data'][val1].change_value,text5:nestedItems[2][val]['data'][val1].timestamp })
        }
      }
    })
    
  }
  getadvdec() {
   
    this.http.get<any>('https://www.moneycontrol.com/mc/widget/mfnavonetimeinvestment/get_chart_value1?classic=true').subscribe(data5 => {
    
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     
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
    //console.log( 'TrackBy:', item1.text1, 'at index', index1);
    return item1.text1
   }
  opstrafiidii() {
    console.log(document.cookie)
   // this.cookieService.set('cookie','_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1569867014.1655128119; csrftoken=Fpues3hutZZ3i8S6FShRiVvk4uOXbl9tHBfdqByuhssEAISHMY6G5fXkfmwGI4Ov; .trendlyne=e3qcvnv4pt6rsd5avmsbj26fe6lzd8uo' );
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
