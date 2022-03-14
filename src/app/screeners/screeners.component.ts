import { MegaMenuItem, MenuItem } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import { Component, OnInit,ElementRef, ViewChild ,Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import html2canvas from 'html2canvas';
var domtoimage = require('dom-to-image');

import { HttpClient } from "@angular/common/http";
//declare let html2canvas: any;
import { ViewportScroller } from '@angular/common';
import { DataapiService } from '../../dataapi.service'
import * as stocks from '../dashboard/stocklist'
import * as stocks1 from '../dashboard/stocklist12'
import * as bqstock from '../dashboard/bqlist'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {TabViewModule} from 'primeng/tabview';
import * as moment from 'moment';

export interface bq52htiles {

  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
export interface bqc52htiles {

  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  text1: string;
  text2: string;
  text3: string;

}

export interface Tile1 {
  text3: string;
  text: string;
  text1: string;
  text2: string;


}
export interface tlnear52ltiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlnear52htiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tl52htiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tl52ltiles {

  text: string;
  text1: string;
  text2: string;
}

export interface tlobtiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlrvpdtiles {

  text: string;
  text1: string;
  text2: string;
}
export interface tlbutiles {

  text: string;
  text1: string;
  text2: string;
}

export interface trndngstocktiles {
  text: string;
  text1: string;
}
export interface bqmatiles {

  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  
}

export interface indicestiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  
}
export interface bq52ltiles {

  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
export interface bqc52ltiles {

  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

var container = document.body; // full page 
			










@Component({
  selector: 'app-screeners',
  templateUrl: './screeners.component.html',

  styleUrls: ['./screeners.component.scss']

})
  
export class ScreenersComponent implements OnInit {
  
  visibleSidebar1;
  visibleSidebar2;
  
  visibleSidebar3;
  
  visibleSidebar4;
  
  visibleSidebar5;

  
  [x: string]: any;
  img = "";
  //@Input() name: string;
  //name = 'Angular 6';
  

  @ViewChild('screen1') screen1: ElementRef;
  @ViewChild('screen', { static: true }) screen: any;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  name = 'Angular';
  @ViewChild('mg') p: ElementRef;
  test
  onPng() {
    console.log(this.p.nativeElement, 'called')
  
    domtoimage.toJpeg(this.p.nativeElement, {
      quality: 1, width: 1200,
      height: 500,
    })
      .then((dataUrl) => {
        console.log('called')
        var img = new Image();
        img.src = dataUrl;
        this.test = dataUrl;
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
        console.log(dataUrl)
        document.body.appendChild(img);
        //dataUrl.download = "html_image.png";
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
    
  }


  downloadImage() {
    html2canvas(this.screen1.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
  
  
  downloadimage1() {
    html2canvas(container).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "html_image.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }
  
  
  
  showFiller = false;
  tableData: any
  stockList: any
  stockList1: any
  isin: any
  NIFTYNEXT50adv: any
  NIFTYNEXT50dec: any
  NIFTYNEXT50unc: any
  timeadvdec: any
  NIFTY50adv: any
  NIFTY50dec: any
  NIFTY50unc: any
  NIFTYITadv: any
  NIFTYITdec: any
  NIFTYITunc: any
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  basicData2: any;
  basicOptions2: any;
  basicData3: any;
  basicOptions3: any;
  basicData4: any;
  basicOptions4: any;
  basicData5: any;
  basicOptions5: any;
  basicData6: any;
  basicOptions6: any;
  basicData7: any;
  basicOptions7: any;
  basicData8: any;
  basicOptions8: any;
  basicData9: any;
  basicOptions9: any;
  basicData10: any;
  basicOptions10: any;
  basicData11: any;
  basicOptions11: any;
  bqtgnewname = [];
  bqtgnewvalue = [];
  bqtgnewprice = [];
  bqtgnewchg = [];
  bqtlnewname = [];
  bqtlnewvalue = [];
  bqtlnewprice = [];
  bqtlnewchg = [];
  
 
 
  bq52l: bq52ltiles[] = [];
  bqc52l: bqc52ltiles[] = [];
  
  dc: any
  yesterday: any
  type: any
  date: any
 
  data: any
  dataapi: any
  pchange: any
  mcsymbol1: any
  stock: any
  bqstocks: any
  news = []
  stock1: any
  names: any
  //test: any
  stockname1: any
  datePipe: any
  isin1: any
  isin2: any
  mcsymbol = [];
  bqsymbol = [];
  pivinewname = [];
  pivinewvalue = [];
  pivinewchangep = [];
  pivinewvolume = [];
  pivinewvchngp = [];
  pivinewprice = [];
  pivdnewname = [];
  pivdnewvalue = [];
  
  pivdnewchangep = [];
  pivdnewvolume = [];
  pivdnewvchngp = [];
  pivdnewprice = [];
  pdvdnewname = [];
  pdvdnewvalue = [];
  pdvdnewchangep = [];
  pdvdnewvolume = [];
  pdvdnewvchngp = [];
  pdvdnewprice = [];
  pdvinewname = [];
  pdvinewvalue = [];
  
  pdvinewchangep = [];
  pdvinewvolume = [];
  pdvinewvchngp = [];
  pdvinewprice = [];
  bqobnewname = [];
  bqobnewprice = [];
  bqobnewchgp = [];
  bqobnewvolume = [];
  bqosnewname = [];
  bqosnewprice = [];
  bqosnewchgp = [];
  bqosnewvolume = [];
  etgnewname = [];
  etgnewcp = [];
  etgnewchange = [];
  indices: indicestiles[] = [];
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  tiles: Tile[] = [


  ];
  tiles1: Tile1[] = [


  ];

  
  today: any
  
  tlrvpd: tlrvpdtiles[] = [];
  tlbu: tlbutiles[] = [];
  tlob: tlobtiles[] = [];
 
  tl52h: tl52htiles[] = [];
  tl52l: tl52ltiles[] = [];
  
  etmacdnewname = [];
  etmacdnewprice = [];
  etmacdchangep = [];
  
  etmacdsnewname = [];
  etmacdsnewprice = [];
  etmacdschangep = [];
 
  bq52h: bq52htiles[] = [];
  bqc52h: bqc52htiles[] = [];
  tlnear52h: tlnear52htiles[] = [];
  tlnear52l: tlnear52ltiles[] = [];
  bqma: bqmatiles[] = [];
 
  trndngstocks: trndngstocktiles[] = [];
 
  dblist = { 'mydb': [], 'chartinkvshocker': [], 'chartinkemacrs59': [], 'chartinkemacrs920': [], 'chartinkgapup': [], 'chartinkgapdown': [] }

  constructor(private http: HttpClient, private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router, private vps: ViewportScroller) {
    setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  public SystemName4: string = "Decline";
  firstCopy4 = false;
  public SystemName5: string = "Advance";
  firstCopy5 = false;

  public lineChartLabels4: Array<any> = [];
  public lineChartData4: Array<number> = [];
  public lineChartLabels5: Array<any> = [];
  public lineChartData5: Array<number> = [];
  public labelMFL4: Array<any> = [

    { data: this.lineChartData4, label: this.SystemName4 },
    { data: this.lineChartData5, label: this.SystemName5 }
  ];
  public lineChartOptions4: any = {
    responsive: false,
    scales: {

      xAxes: [{


      }],
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

      },
      deferred: false

    },

  };
  public lineChartOptions5: any = {
    responsive: false,
    scales: {

      xAxes: [{


      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: '#1fbd8b',
        //color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };
  
  _lineChartColors4: Array<any> = [{
    backgroundColor: 'green',
    borderColor: 'green',
    pointBackgroundColor: 'green',
    pointBorderColor: 'green',
    pointHoverBackgroundColor: 'green',
    pointHoverBorderColor: 'green'
  }];
  _lineChartColors5: Array<any> = [{
    backgroundColor: 'green',
    borderColor: 'green',
    pointBackgroundColor: 'green',
    pointBorderColor: 'green',
    pointHoverBackgroundColor: 'green',
    pointHoverBorderColor: 'green'
  }];



  public ChartType4 = 'line';

  public chartClicked4(e: any): void {
    console.log(e);
  }
  public chartHovered4(e: any): void {
    console.log(e);
  }




  ngOnInit() {
    
    { setInterval(() => { this.timecheck() }, 60000); }
    this.stockList = stocks.default.Data
    this.stockList1 = stocks1.default.Data
    this.stock = stocks.default.Data

    this.stock1 = stocks1.default.Data
    this.bqstocks = bqstock.default.Data





    this.data = this.stock
    { setInterval(() => { this.gettlfpg() }, 60000); }
    { setInterval(() => { this.getetmacdsell() }, 60000); }
    { setInterval(() => { this.getbqos('only_sellers') }, 60000); }
    { setInterval(() => { this.bqpdvi('price_dec_vol_inc') }, 60000); }
    { setInterval(() => { this.getbqpdvd('price_dec_vol_dec') }, 60000); }
    { setInterval(() => { this.getethloser() }, 60000); }
    { setInterval(() => { this.getbqob('only_buyers') }, 60000); }
    { setInterval(() => { this.getetmacdbuy() }, 60000); }
    { setInterval(() => { this.getbqpivi('price_inc_vol_inc') }, 60000); }
    { setInterval(() => { this.getbqtg() }, 60000); }

    this.getbqtg()
    this.getbqpivi('price_inc_vol_inc')
    this.getbqpivd('price_inc_vol_dec')
    this.getetmacdbuy()
    this.getbqob('only_buyers')
    this.getbq52h('52_week_high')
    this.getbqc52h('close_to_52_week_high')
     this.getethloser()
    this.getbqpdvd('price_dec_vol_dec')
    this.getbqpdvi('price_dec_vol_inc')
    this.getbqos('only_sellers')
    this.getbq52l('52_week_low')
    this.getbqc52l('close_to_52_week_low')
    this.getGainers()
    this.getResults()
    //this.getdbdata1('jdata')
    this.getetindices()
    this.getmcoverall()
    this.gettl52h()
    
    this.gettl52l()
    this.gettlnear52h()
    this.gettlnear52l()
    
    this.gettlfpg()
    this.getbqma('most_active_by_value')
    
    
    this.gettlbu()
    this.gettlob()
    this.gettrendingstocks()
    this.getethgainer()
   
    //this.getsescreener()
    this.getetmacdsell()
   
    








  }
  getetindices() {
    this.dataApi.getetindices().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      
      for (let val in nestedItems[0]) {
        
        this.indices.push({ text1: nestedItems[0][val].indexName, text2: nestedItems[0][val].currentIndexValue, text5: nestedItems[0][val].advances, text4: nestedItems[0][val].declines, text3: nestedItems[0][val].perChange, text7: nestedItems[0][val].netChange, text8: nestedItems[0][val].closeIndexValue, text9: nestedItems[0][val].openIndexValue, text10: nestedItems[0][val].lowIndexValue, text6: nestedItems[0][val].highIndexValue })
       
      }
    }, err => {
      console.log(err)
    })
  }


  /////////////////////BULLISH///////////////////////////
  getbqtg() {
    this.dataApi.getbqtg().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bqtgnewname.length = 0;
        this.bqtgnewvalue.length = 0;
        this.bqtgnewprice.length = 0;
        this.bqtgnewchg.length = 0;
      for (let val in nestedItems) {
        if (nestedItems[val].chgp > 3) {
          this.bqtgnewname.push(nestedItems[val].name)
          this.bqtgnewvalue.push(nestedItems[val].chgp)
          this.bqtgnewprice.push(nestedItems[val]["last-price"])
          this.bqtgnewchg.push(nestedItems[val].chg)
        }
      }
      this.buildchart()
    }, err => {
      console.log(err)
    })
    
  }
   buildchart() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData = {
      
      labels: this.bqtgnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.bqtgnewvalue

        },
      
    
      ]
    };
    var footerLine1 = this.bqtgnewprice
    //console.log(footerLine1 )
    var footerLine2 = this.bqtgnewchg
    this.basicOptions = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine1[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine2[tooltipItems[0].index];
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
      }, maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  getbqpivi(type) {
    this.dataApi.getbqpivi(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pivinewname.length = 0;
        this.pivinewprice.length = 0;
        this.pivinewchangep.length = 0;
        this.pivinewvolume.length = 0;
        this.pivinewvchngp.length = 0;
      for (let val in nestedItems) {
        
        this.pivinewname.push(nestedItems[val].name)
        this.pivinewprice.push(nestedItems[val]["last-price"])
        this.pivinewchangep.push(nestedItems[val].chgp)
        this.pivinewvolume.push(nestedItems[val]["latest-volume"])
        this.pivinewvchngp.push(nestedItems[val]["volume-chgp"])
      }
      this.buildchart1()
    }, err => {
      console.log(err)
    })
  }
  buildchart1() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData1 = {
      
      labels: this.pivinewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.pivinewchangep

        },
       
    
      ]
    };
    var footerLine3 = this.pivinewprice
    //console.log(footerLine1 )
    var footerLine4 = this.pivinewvolume
    var footerLine5 = this.pivinewvchngp
    this.basicOptions1 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine3[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine4[tooltipItems[0].index];
          },
          afterfooter: function (tooltipItems, data) {
            return 'Change:' + footerLine5[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  
  getbqpivd(type) {
    this.dataApi.getbqpivi(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      for (let val in nestedItems) {
        
        this.pivdnewname.push(nestedItems[val].name)
        this.pivdnewprice.push(nestedItems[val]["last-price"])
        this.pivdnewchangep.push(nestedItems[val].chgp)
        this.pivdnewvolume.push(nestedItems[val]["latest-volume"])
        this.pivdnewvchngp.push(nestedItems[val]["volume-chgp"])
      }
      this.buildchart2()
    }, err => {
      console.log(err)
    })
  }
  buildchart2() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData2 = {
      
      labels: this.pivdnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.pivdnewchangep

        },
        
    
      ]
    };
    var footerLine6 = this.pivdnewprice
    //console.log(footerLine1 )
    var footerLine7 = this.pivdnewvolume
    var footerLine8 = this.pivdnewvchngp
    this.basicOptions2 = {
      
      responsive: false,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine6[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine7[tooltipItems[0].index];
          },
          afterfooter: function (tooltipItems, data) {
            return 'Change:' + footerLine8[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  
  
 
  getetmacdbuy() {
    this.dataApi.getetmacdbuy().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.etmacdnewname.length = 0;
      this.etmacdnewprice.length = 0;
      this.etmacdchangep.length = 0;
      for (let val in nestedItems[0]) {
        if (nestedItems[0][val].percentageChange > 3) {
        
          this.etmacdnewname.push(nestedItems[0][val].companyShortName)
          this.etmacdnewprice.push(nestedItems[0][val].currentPrice)
          this.etmacdchangep.push(nestedItems[0][val].percentageChange)
        }
      }
      this.buildchart3()
    }, err => {
      console.log(err)
    })
    
  }
  buildchart3() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData3 = {
      
      labels: this.etmacdnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.etmacdchangep

        },
        
    
      ]
    };
    var footerLine9 = this.etmacdnewprice
    //console.log(footerLine1 )
    var footerLine10 = this.etmacdnewname
    this.basicOptions3 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine9[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine10[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  

  
 
  getbqob(type) {
    this.dataApi.getbqob(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bqobnewname.length = 0;
        this.bqobnewprice.length = 0;
        this.bqobnewchgp.length = 0;
        this.bqobnewvolume.length = 0;
      //console.log(nestedItems)
      for (let val in nestedItems) {
        
        this.bqobnewname.push(nestedItems[val].name)
        this.bqobnewprice.push(nestedItems[val]["last-price"])
        this.bqobnewchgp.push(nestedItems[val].chgp)
        this.bqobnewvolume.push(nestedItems[val].vol)
      }
      this.buildchart4()
    }, err => {
      console.log(err)
    })
  }
  buildchart4() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData4 = {
      
      labels: this.bqobnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.bqobnewchgp

        },
        //   {
        //     label: "value",
        //     backgroundColor:'transparent',
        //     data: this.tltgstockprice,
        // },
    
      ]
    };
    var footerLine11 = this.bqobnewprice
    //console.log(footerLine1 )
    var footerLine12 = this.bqobnewvolume
    var footerLine13 = this.bqobnewchgp
    this.basicOptions4 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine11[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine12[tooltipItems[0].index];
          },
          afterfooter: function (tooltipItems, data) {
            return 'Change:' + footerLine13[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  
  getbq52h(type) {
    this.dataApi.getbq52h(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      //console.log(nestedItems)
      for (let val in nestedItems) {
        this.bq52h.push({ text: nestedItems[val].name, text1: nestedItems[val]["last-price"], text2: nestedItems[val].chgp, text3: nestedItems[val]["52wk-high"], text4: nestedItems[val]["off-52wk-high"] })
      }
      
    }, err => {
      console.log(err)
    })
  }
  getbqc52h(type) {
    this.dataApi.getbqc52h(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      //console.log(nestedItems)
      for (let val in nestedItems) {
        this.bqc52h.push({ text: nestedItems[val].name, text1: nestedItems[val]["last-price"], text2: nestedItems[val].chgp, text3: nestedItems[val]["52wk-high"], text4: nestedItems[val]["off-52wk-high"] })
      }
      
    }, err => {
      console.log(err)
    })
  }
 
 

  timecheck() {
    var runned = false;
    var d = new Date();
    console.log(d.getHours(), d.getMinutes())
    if (d.getHours() == 9 && d.getMinutes() === 30 && !runned) {
      this.downloadimage1()
      setTimeout(() => { this.timecheck() }, 120000)
      this.register()
      runned = true;
    }
  }
  register() {
    let user = {
      name: "Amit Kapila",
      email: "Amit.kapila.2009@gmail.com",
      filename: "html_image.png",
      subject: "Screener Components"
    }
    this.dataApi.sendEmail(user).subscribe(
      data => {
        let res: any = data;
        console.log("user is successfully registered");

      },
      err => {
        console.log(err);
    
      }, () => { }
    );
  }

  getbqma(type) {
    this.dataApi.getbqma(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      for (let val in nestedItems) {
        this.bqma.push({ text: nestedItems[val].name, text1: nestedItems[val]["last-price"], text2: nestedItems[val].chgp, text3: nestedItems[val].volume, text4: nestedItems[val]["traded-value-fmt"] })
      }
      
    }, err => {
      console.log(err)
    })
  }
  
 
  
  getethgainer() {
    this.dataApi.getethgainer().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });


      for (let val in data5["searchresult"]) {

        this.etgnewname.push(data5["searchresult"][val].companyShortName)
        this.etgnewcp.push(data5["searchresult"][val].current)
        this.etgnewchange.push(data5["searchresult"][val].percentChange)


        





      }
      this.buildchart11()
    }, err => {
      console.log(err)
    })
  }
  buildchart11() {
    // console.log(this.etgnewname)
    // console.log(this.etgnewchange)
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData11 = {
      
      labels: this.etgnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.etgnewchange

        },
      
    
      ]
    };
    var footerLine25 = this.etgnewname
    //console.log(footerLine1 )
    var footerLine26 = this.etgnewcp
    this.basicOptions = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine25[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine26[tooltipItems[0].index];
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
      }, maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
 


  ///////////////////////BEARISH///////////////////////
  getethloser() {
    this.dataApi.getethloser().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bqtlnewname.length = 0;
        this.bqtlnewvalue.length = 0;
        this.bqtlnewprice.length = 0;

      for (let val in data5["searchresult"]) {

        

        
        this.bqtlnewname.push(data5["searchresult"][val].companyShortName)
        this.bqtlnewvalue.push(data5["searchresult"][val].percentChange)
        this.bqtlnewprice.push(data5["searchresult"][val].current)
        
      }
      this.buildchart5()
    }, err => {
      console.log(err)
    })
  }
  buildchart5() {
    console.log(this.bqtlnewname)
    console.log(this.bqtlnewvalue)
    console.log(this.bqtlnewprice)
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData5 = {
      
      labels: this.bqtlnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.bqtlnewvalue

        },
       
    
      ]
    };
    var footerLine14 = this.bqtlnewvalue
    //console.log(footerLine1 )
    var footerLine27 = this.bqtlnewprice
    this.basicOptions5 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine14[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Current Price:' + footerLine27[tooltipItems[0].index];
          },
          
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  getbqpdvi(type) {
    this.dataApi.getbqpdvi(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pdvinewname.length = 0;
      this.pdvinewprice.length = 0;
      this.pdvinewchangep.length = 0;
      this.pdvinewvolume.length = 0;
      this.pdvinewvchngp.length = 0;
      for (let val in nestedItems) {
        
        this.pdvinewname.push(nestedItems[val].name)
        this.pdvinewprice.push(nestedItems[val]["last-price"])
        this.pdvinewchangep.push(nestedItems[val].chgp)
        this.pdvinewvolume.push(nestedItems[val]["latest-volume"])
        this.pdvinewvchngp.push(nestedItems[val]["volume-chgp"])
      }
      this.buildchart6()
    }, err => {
      console.log(err)
    })
  }
  buildchart6() {
   
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData6 = {
      
      labels: this.pdvinewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.pdvinewchangep

        },
        
      ]
    };
    var footerLine15 = this.pdvinewprice
    //console.log(footerLine1 )
    var footerLine16 = this.pdvinewvolume
    var footerLine17 = this.pdvinewvchngp
    this.basicOptions6 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine15[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine16[tooltipItems[0].index];
          },
          afterfooter: function (tooltipItems, data) {
            return 'Change:' + footerLine17[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  getbqpdvd(type) {
    this.dataApi.getbqpdvd(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pdvdnewname.length = 0;
      this.pdvdnewprice.length = 0;
      this.pdvdnewchangep.length = 0;
      this.pdvdnewvolume.length = 0;
      this.pdvdnewvchngp.length = 0;
      for (let val in nestedItems) {
        
        this.pdvdnewname.push(nestedItems[val].name)
        this.pdvdnewprice.push(nestedItems[val]["last-price"])
        this.pdvdnewchangep.push(nestedItems[val].chgp)
        this.pdvdnewvolume.push(nestedItems[val]["latest-volume"])
        this.pdvdnewvchngp.push(nestedItems[val]["volume-chgp"])
		    
      }
      this.buildchart7()
    }, err => {
      console.log(err)
    })
  }
  buildchart7() {
    
    var randomColorGenerator = function () {
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };
    this.basicData7 = {
      
      labels: this.pdvdnewname,
      
      
      datasets: [
        {
          label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
          data: this.pdvdnewchangep

        },
        //   {
        //     label: "value",
        //     backgroundColor:'transparent',
        //     data: this.tltgstockprice,
        // },
    
      ]
    };
    var footerLine18 = this.pdvdnewprice
    //console.log(footerLine1 )
    var footerLine19 = this.pdvdnewvolume
    var footerLine20 = this.pdvdnewvchngp
    this.basicOptions7 = {
      
      responsive: true,
      tooltips: {
        callbacks: {
          beforeFooter: function (tooltipItems, data) {
            return 'Current Price:' + footerLine18[tooltipItems[0].index];
          },
          footer: function (tooltipItems, data) {
            return 'Change:' + footerLine19[tooltipItems[0].index];
          },
          afterfooter: function (tooltipItems, data) {
            return 'Change:' + footerLine20[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
            autoSkip: false,
          
            fontColor: '#495057'
          }
        }]
      }
    };
  }
   getetmacdsell() {
    this.dataApi.getetmacdsell().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      //console.log(nestedItems[0])
      this.etmacdsnewname.length = 0;
      this.etmacdsnewprice.length = 0;
      this.etmacdschangep.length = 0;
      for (let val in nestedItems[0]) {
        //console.log(data5[1].companyShortName)
        //console.log(nestedItems[0][val].companyShortName)
       
        
        this.etmacdsnewname.push(nestedItems[0][val].companyShortName)
        this.etmacdsnewprice.push(nestedItems[0][val].currentPrice)
        this.etmacdschangep.push(nestedItems[0][val].percentageChange)
      
      }
      this.buildchart8()
    }, err => {
      console.log(err)
    })
  }
  buildchart8() {
    //console.log(this.etmacdsnewname)
    var randomColorGenerator = function () { 
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
  };
    this.basicData8 = {
      
      labels:this.etmacdsnewname,
      
      
      datasets: [
          {
              label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
    data: this.etmacdschangep

          },
        //   {
        //     label: "value",
        //     backgroundColor:'transparent',
        //     data: this.tltgstockprice,
        // },
    
        ]
  };
  var footerLine21 = this.etmacdsnewprice
  //console.log(footerLine1 )
    //var footerLine40 = this.etmacdsnewvolume
    var footerLine22 = this.etmacdschangep
    this.basicOptions8 = {
      
      responsive: true,
      tooltips: {
        callbacks:{
          beforeFooter: function(tooltipItems, data) { 
            return 'Current Price:' + footerLine21[tooltipItems[0].index];
          },
          footer: function(tooltipItems, data) { 
            return 'Change:' + footerLine22[tooltipItems[0].index];
          },
          
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
                fontColor: '#495057'
            }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
              autoSkip: false,
          
                fontColor: '#495057'
            }
        }]
    }
};
  }
  
  getbqos(type) {
    this.dataApi.getbqos(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.bqosnewname.length = 0;
      this.bqosnewprice.length = 0;
      this.bqosnewchgp.length = 0;
      this.bqosnewvolume.length = 0;
      for (let val in nestedItems) {
       
        this.bqosnewname.push(nestedItems[val].name)
        this.bqosnewprice.push(nestedItems[val]["last-price"])
        this.bqosnewchgp.push(nestedItems[val].chgp)
        this.bqosnewvolume.push(nestedItems[val].vol)
      }
      this.buildchart9()
    }, err => {
      console.log(err)
    })
  }
		  
		buildchart9() {
   
    var randomColorGenerator = function () { 
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
  };
    this.basicData9 = {
      
      labels:this.bqosnewname,
      
      
      datasets: [
          {
              label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
    data: this.bqosnewchgp

          },
        //   {
        //     label: "value",
        //     backgroundColor:'transparent',
        //     data: this.tltgstockprice,
        // },
    
        ]
  };
  var footerLine24 = this.bqosnewprice
  //console.log(footerLine1 )
    var footerLine25 = this.bqosnewvolume
    var footerLine26 = this.bqosnewchgp
    this.basicOptions9 = {
      
      responsive: true,
      tooltips: {
        callbacks:{
          beforeFooter: function(tooltipItems, data) { 
            return 'Current Price:' + footerLine24[tooltipItems[0].index];
          },
          footer: function(tooltipItems, data) { 
            return 'Change:' + footerLine25[tooltipItems[0].index];
          },
          afterfooter: function(tooltipItems, data) { 
            return 'Change:' + footerLine26[tooltipItems[0].index];
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
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
                fontColor: '#495057'
            }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
           
              autoSkip: false,
          
                fontColor: '#495057'
            }
        }]
    }
};
  }

 
 
 


  

  getmcoverall() {
    this.dataApi.getmcoverall().subscribe(data => {
      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
      for (let val in nestedItems[1]) {
        this.lineChartData4.push(nestedItems[1][val].decValue)
        this.lineChartData5.push(nestedItems[1][val].advValue)

        this.lineChartLabels4.push(nestedItems[1][val].curDate)
        this.lineChartLabels5.push(nestedItems[1][val].curDate)


      }



    }, err => {
      console.log(err)




    })
  }
 
  getGainers() {
    this.dataApi.getGainers().subscribe(data => {
      this.test = data

      for (let val in data) {

        

          this.tiles.push({ text: data[val].company, text1: "Price:" + data[val].currentPrice, text2: "Change:" + data[val].change + "%", text3: this.isin2, cols: 3, rows: 1 })

        

      }

    }, err => {
      console.log(err)




    })
  }

   gettrendingstocks() {
    this.dataApi.gettrendingstocks().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems) {


      
        this.trndngstocks.push({ text: nestedItems[val].sc_isinid, text1: nestedItems[val].title })


      }
    }, err => {
      console.log(err)
    }
    )
  }

  gettl52h() {
    this.dataApi.gettl52h().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        
        this.tl52h.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettl52l() {
    this.dataApi.gettl52l().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[2]) {
        
        this.tl52l.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlnear52h() {
    this.dataApi.gettlnear52h().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        
        this.tlnear52h.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlnear52l() {
    this.dataApi.gettlnear52l().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[2]) {
        
        this.tlnear52l.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlbu() {
    this.dataApi.gettlbu().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        
        this.tlbu.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
    }, err => {
      console.log(err)
    }
    )
  }
  gettlob() {
    this.dataApi.gettlob().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]) {
        
        this.tlob.push({ text: nestedItems[2][val].name, text1: nestedItems[2][val].value + "%", text2: this.isin2 })

      }
      //console.log(nestedItems[2])
    }, err => {
      console.log(err)
    }
    )
  }
  
  getResults() {
    this.dataApi.getResults().subscribe(data1 => {
      let nestedItems = Object.keys(data1).map(key => {
        return data1[key];
      });
      //console.log(nestedItems)

      for (let val in nestedItems[0]) {

        if (this.stockList.filter(i => i.name == nestedItems[0][val].companyName2)[0]) {
        

          this.tiles1.push({ text: nestedItems[0][val].companyName2, text1: nestedItems[0][val].meetingDateStr, text2: this.test, text3: nestedItems[0][val].purpose })
        }

      }

    }, err => {
      console.log(err)
    })
  }
 
getbq52l(type) {
    this.dataApi.getbq52l(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     // console.log(nestedItems)
      for (let val in nestedItems) {
          this.bq52l.push({text:nestedItems[val].name,text1:nestedItems[val]["last-price"],text2:nestedItems[val].chgp,text3:nestedItems[val]["52wk-high"],text4:nestedItems[val]["off-52wk-high"]})
         }
      
    }, err => {
      console.log(err)
    })
  }
  getbqc52l(type) {
    this.dataApi.getbqc52l(type).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     // console.log(nestedItems)
     for (let val in nestedItems) {
      this.bqc52l.push({text:nestedItems[val].name,text1:nestedItems[val]["last-price"],text2:nestedItems[val].chgp,text3:nestedItems[val]["52wk-high"],text4:nestedItems[val]["off-52wk-high"]})
         }
      
    }, err => {
      console.log(err)
    })
  }
  gettlfpg() {
    this.dataApi.gettlfpg().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
      // this.bqtgnewname.length = 0;
      //   this.bqtgnewvalue.length = 0;
      //   this.bqtgnewprice.length = 0;
      //   this.bqtgnewchg.length = 0;
      // for (let val in nestedItems)
      // {
      //   this.bqtgnewname.push(nestedItems[val].name)
      //   this.bqtgnewvalue.push(nestedItems[val].chgp)
      //   this.bqtgnewprice.push(nestedItems[val]["last-price"])
      //   this.bqtgnewchg.push(nestedItems[val].chg)
      // }
      // this.buildchart()
    }, err => {
      console.log(err)
    })
    
  }
  //  buildchart() {
    
  //   var randomColorGenerator = function () {
  //     return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
  //   };
  //   this.basicData = {
      
  //     labels: this.bqtgnewname,
      
      
  //     datasets: [
  //       {
  //         label: "value",
  //         //backgroundColor: this.getRandomColor(),
  //         backgroundColor: randomColorGenerator,
  //         data: this.bqtgnewvalue

  //       },
      
    
  //     ]
  //   };
  //   var footerLine1 = this.bqtgnewprice
  //   //console.log(footerLine1 )
  //   var footerLine2 = this.bqtgnewchg
  //   this.basicOptions = {
      
  //     responsive: true,
  //     tooltips: {
  //       callbacks: {
  //         beforeFooter: function (tooltipItems, data) {
  //           return 'Current Price:' + footerLine1[tooltipItems[0].index];
  //         },
  //         footer: function (tooltipItems, data) {
  //           return 'Change:' + footerLine2[tooltipItems[0].index];
  //         }
  //       }
  //     },
  //     plugins: {
  //       datalabels: {
  //         display: true,
  //         align: 'top',
  //         anchor: 'end',
  //         color: "#2756B3",
  //         //color: "#222",
  
  //         font: {
  //           family: 'FontAwesome',
  //           size: 14
  //         },
  //       }
  //     },
  //     legend: {
  //       labels: {
  //         fontColor: '#495057'
  //       }
  //     }, maintainAspectRatio: false,
  //     scales: {
  //       xAxes: [{
  //         ticks: {
  //           labelAngle: -10,
  //           labelFontSize: 15,
  //           autoSkip: false,
  //           fontColor: '#495057'
  //         }
  //       }],
  //       yAxes: [{
  //         ticks: {
  //           labelAngle: -10,
  //           labelFontSize: 15,
           
  //           autoSkip: false,
          
  //           fontColor: '#495057'
  //         }
  //       }]
  //     }
  //   };
  // }
  
  keyword = 'name';
  selectEvent(stock_isin) {
    //console.log(stock_isin)
    this.window.open("http://localhost:4200/Ohlc?stock=" + stock_isin + "&&dbname=" + 'mydb', "_blank")
    //this.router.navigate(['/Ohlc'], { queryParams: { stock: stock_isin, dbname: 'mydb' } });

    // do something with selected item
  }

  onChangeSearch(val: string) {

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(abc) {

    // do something when input is focused
  }



  scroll(id) {
    this.vps.scrollToAnchor(id);
  }


  changesector() {
    this.window.open("http://localhost:4200/Screeners/sectors", "_blank")
  }
  changemccurrent() {
    this.window.open("http://localhost:4200/Screeners/daily", "_blank")
  }
  changeStock1(stock_isin, dbname) {
    this.window.open("http://localhost:4200/Ohlc?stock=" + stock_isin + "&&dbname=" + 'mydb', "_blank")
    this.router.navigate(['/Ohlc'], { queryParams: { stock: stock_isin, dbname: 'mydb' } });
  }

  changeStock123(stock_isin) {


    this.window.open("http://localhost:4200/Ohlc?stock=" + stock_isin + "&&dbname=" + 'mydb', "_blank")
  }





}
