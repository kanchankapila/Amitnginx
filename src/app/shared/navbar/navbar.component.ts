import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import * as stocks from '../../dashboard/stocklist';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DataapiService } from '../../../dataapi.service';
import { formatDate } from '@angular/common';
import * as sectors from '../../lists/mcsectorlist';
import * as fnostocks from '../../lists/fnostocks';
import * as bqstock from '../../lists/bqlist'
import * as etstock from '../../lists/etlist'

export interface newscardtile {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  stock: any
  data: any
  datetoday:any
  stock_isin: any
  newscard: newscardtile[] = [];
  stock1: any;
  fnostock: any;
  stockid = [];
  mcsectorsymbol = [];
  eqsymbol1 = [];
  tlid = [];
  abc = [];
  companyid = [];
  mcsymbol = [];
  bqstocks: any;
  sectorList: any;
  etstocks: any;
  bqsymbol = [];
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  visibleSidebar1;
  visibleSidebar2;
  visibleSidebar3;
  visibleSidebar4;
  visibleSidebar5;
  
  constructor(private primengConfig: PrimeNGConfig,config: NgbDropdownConfig, private window: Window, private route: ActivatedRoute, private router: Router,private dataApi: DataapiService) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    
    this.stock = stocks.default.Data
   
    this.sectorList = sectors.default.Data
    
    this.fnostock = fnostocks.default.Data
    this.etstocks = etstock.default.Data
    this.bqstocks=bqstock.default.Data
    
    this.data = this.stock
    this.primengConfig.ripple = true;
  }
  keyword = 'name';
  selectEvent(stock_isin) {
    
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





  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  ///Moneycontrol Post request for moving averages
  getmcmovingaverages() {
    console.log("mc moving averages start")
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday })
      
    }
    console.log(this.mcsymbol)
    this.dataApi.getmcmovingaverages(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcvolume() {
    console.log("mc volume")
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes())
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   // console.log(this.mcsymbol)
    this.dataApi.getmcvolume(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcinsight() {
    console.log("mc insight")
    var d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes())
    this.mcsymbol.length = 0;
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   // console.log(this.mcsymbol)
    this.dataApi.getmcinsight(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmmstockinforeco() {
    console.log("mmstock reco start")
    for (let val in this.stock1) {
      this.stockid.push({ stockid: this.stock[val].stockid, isin: this.stock[val].isin, name: this.stock[val].name })
      //console.log(this.stock[val].stockid)
    }
    console.log(this.stockid)
    
    this.dataApi.getmmstockinforeco(this.stockid).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  getmccombine() {
    console.log("mc combine start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    console.log('Date is' + this.datetoday)
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes())
    for (let val in this.stock1) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   
    this.dataApi.getmccombine(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  gettrendlynepostdvm() {
    console.log("trendlyne post durability/Volatility/Momentum score start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    console.log('Date is' + this.datetoday)
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes())
    for (let val in this.stock) {
      this.tlid.push({ tlid: this.stock[val].tlid, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
   
    this.dataApi.gettrendlynepostdvm(this.tlid).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  chartink() {
    console.log("chartink start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    console.log('Date is'+ this.datetoday)
    
      this.abc.push({ name:'copy-buy-100-accuracy-morning-scanner-scan-at-9-30-4002',Date:this.datetoday })
      
    
   
    this.dataApi.chartink(this.abc).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmcsectorcombine() {
    console.log("mc sector combine start")
    for (let val in this.sectorList) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      console.log('Date is'+ this.datetoday)
      this.mcsectorsymbol.push({ mcsectorsymbol: this.sectorList[val].mcsectorsymbol, sectorid: this.sectorList[val].mcsectorid, name: this.sectorList[val].name,Date:this.datetoday })
      console.log(this.sectorList[val].mcsectorsymbol)
    }
   
    this.dataApi.getmcsectorcombine(this.mcsectorsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  nsepostdata1() {
    console.log("eq sector combine start")
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      console.log('Date is'+ this.datetoday)
      this.eqsymbol1.push({ eqsymbol1: this.stock[val].symbol,name: this.stock[val].name,Date:this.datetoday })
      
    }
    console.log(this.eqsymbol1)
    this.dataApi.nsepostdata1(this.eqsymbol1).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  nsepostdata2() {
    console.log("eq sector combine start")
    for (let val in this.fnostock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      console.log('Date is'+ this.datetoday)
      this.eqsymbol1.push({ eqsymbol1: this.fnostock[val].symbol,Date:this.datetoday })
      
    }
    console.log(this.eqsymbol1)
    this.dataApi.nsepostdata2(this.eqsymbol1).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
  getmoneycontroloveralldaily() {
    console.log("start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getmoneycontroloveralldaily(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }

  
  getmoneycontrolti() {
    console.log("TI start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getmoneycontrolti(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getbqbasicdetails() {
    console.log("BQ start")
    for (let val in this.bqstocks) {
      this.bqsymbol.push({bqsymbol:this.bqstocks[val].stockid,name:this.bqstocks[val].name})
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getbqbasicdetails(this.bqsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  getbqnews() {
    console.log("BQ news start")
    for (let val in this.bqstocks) {
      this.bqsymbol.push({bqsymbol:this.bqstocks[val].stockid,name:this.bqstocks[val].name})
     
    }
    
    this.dataApi.getbqnews(this.bqsymbol).subscribe(data5 => {
    }, err => {
      console.log(err)
    }
    )
  }
  
  
  getmoneycontroloverallweekly() {
    console.log("start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    }
    //console.log(this.mcsymbol)
    this.dataApi.getmoneycontroloverallweekly(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getetcompanydata() {
    console.log("ET Company data start")
    for (let val in this.etstocks) {
      this.companyid.push({ companyid:this.etstocks[val].companyid,name1:this.etstocks[val].name })
      //
      //this.getmoneycontroloverall(this.mcsymbol)
    
      
    }
      this.dataApi.getetcompanydata(this.companyid).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  
  getmoneycontroloverall() {
    console.log("start")
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name })
     
    }
   this.dataApi.getmoneycontroloverall(this.mcsymbol).subscribe(data5 => {
  }, err => {
      console.log(err)
    }
    )
  }
  getpscore() {
    console.log("PScore start")
    this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    for (let val in this.stock) {
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday })
      
    }
    
    this.dataApi.getpscore(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

}
