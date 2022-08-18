import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import * as stocks from '../../lists/stocklist';
import * as stocks1 from '../../lists/list1';
import { DatePipe } from '@angular/common';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap ,RouterLink} from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DataapiService } from '../../../dataapi.service';
import { formatDate } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as sectors from '../../lists/mcsectorlist';
import * as fnostocks from '../../lists/fnostocks';
import * as bqstock from '../../lists/bqlist'
import * as etstock from '../../lists/etlist'

import axios from 'axios';

const instance = axios.create();

export default instance;


export interface pcrniftytile {
  text1: string;
}
export interface newscardtile {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}
export interface pcrnseniftytile {
text1: any;
}
export interface mcniftyrttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
 
  
}
export interface mcpniftyrttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
 
  
}

export interface mcbniftyrttiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
}
export interface newscardtile {
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

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
export interface pcrnsebniftytile {
  text1: any;
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
  pcrnifty: pcrniftytile[] = [];
  pcrnsenifty: pcrnseniftytile[] = [];
  datetoday:any
  stock_isin: any
  newscard: newscardtile[] = [];
  stock1: any;
  fnostock: any;
  stockid = [];
  mcsectorsymbol = [];
  items: SelectItem[];

  item: string;
  eqsymbol1 = [];
  tlid = [];
  abc = [];
  pcrnsebnifty: pcrnsebniftytile[] = [];
  n50optionssupport: n50optionssupporttile[] = [];
  n50optionsresistance: n50optionsresistancetile[] = [];
  bnoptionssupport: bnoptionssupporttile[] = [];
  bnoptionsresistance: n50optionsresistancetile[] = [];
  companyid = [];
  mcsymbol = [];
  mcsymbol1 = [];
  optionwc = [];
  optionwp = [];
  optionbwc = [];
  optionbwp = [];
  mcadvvalue: any
  mcdecvalue: any
  mcadvvalue1: any
  mcdecvalue1: any
  mcpadvvalue: any
  mcpdecvalue: any
  mcniftyrt: mcniftyrttiles[] = [];
  mcpniftyrt: mcpniftyrttiles[] = [];
  mcbniftyrt: mcbniftyrttiles[] = [];
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
  today: any;
  dateyesterday: any;
  dateday5: any;
  date5: any;
  res;

  constructor(private datePipe: DatePipe,private http: HttpClient,private primengConfig: PrimeNGConfig,config: NgbDropdownConfig, private window: Window, private route: ActivatedRoute, private router: Router,private dataApi: DataapiService) {
    config.placement = 'bottom-right'; this.items = [];
    this.stock = stocks.default.Data;
    

    

     for (let val in this.stock) {
     this.items.push({label: this.stock[val].name , value:this.stock[val].isin });
   }
  }

  ngOnInit() {
    this.today = new Date();
    this.datetoday = this.datePipe.transform(this.today, 'yyyy-MM-dd')
    this.dateyesterday = this.datePipe.transform(this.today.setDate(this.today.getDate() - 1), 'yyyy-MM-dd')
    this.dateday5 = this.datePipe.transform(this.today.setDate(this.today.getDate() - 5), 'yyyy-MM-dd')
    this.date5 = this.today.setDate(this.today.getDate() - 5)

    
    this.stock = stocks.default.Data
    this.item=stocks.default.Data['name']
    this.stock1 = stocks1.default.Data
    this.nsedataniftyoi()
    this.nsedatabniftyoi()
    { setInterval(() => { this.nsedataniftyoi() }, 30000); }
    { setInterval(() => { this.nsedatabniftyoi() }, 30000); }
    {
      setInterval(() => { this.getmcniftyrealtime() }, 5000);
      setInterval(() => { this.getmcbankniftyrealtime() }, 5000);
      setInterval(() => { this.getmcpharmaniftyrealtime() }, 5000);
    }
    this.sectorList = sectors.default.Data
    this.getmcniftyrealtime()
    
    this.getmcbankniftyrealtime()
    this.getmcpharmaniftyrealtime()
    this.fnostock = fnostocks.default.Data
    this.etstocks = etstock.default.Data
    this.bqstocks=bqstock.default.Data
    this.toggleSidebar()
    this.data = this.stock
    
    this.primengConfig.ripple = true;
    
  }
 
  keyword = 'name';
  selectEvent(stock_isin) {
    // const url = '/Share?stock=' + stock_isin
    // this.router.navigateByUrl(url)
       
   window.open('/Share?stock='+stock_isin)
   }

  onChangeSearch(val: string) {

  
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


  nsedataniftyoi() {
    
    this.http.get<any>('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY').subscribe(data5 => {
       (response: Response) => 
       { }
       let nestedItems = Object.keys(data5).map(key => {
         return data5[key];
       });
      //console.log(nestedItems)

      this.pcrnsenifty.length = 0;
      this.optionwc.length = 0;
      this.n50optionsresistance.length = 0;
      this.optionwp.length = 0;
      this.n50optionssupport.length = 0;

      //console.log(nestedItems[1]['CE'].totOI)
      //console.log(nestedItems[1]['PE'].totOI)
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
       // console.log("maximum"+maxp)
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
  getkotakhealthscore() {
    this.dataApi.kotakhealthscore().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log("This is KotakHealthscore")
    });
  }
  nsedatabniftyoi() {
    this.http.get<any>('https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY').subscribe(data5 => {
      (response: Response) => { console.log(response) }
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.pcrnsebnifty.length = 0;
      this.optionbwc.length = 0;
      this.bnoptionsresistance.length = 0;
      this.optionbwp.length = 0;
      this.bnoptionssupport.length = 0;
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
      //console.log("maximum"+maxbc)
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
        //console.log("maximum"+maxbp)
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
  
  // ///Moneycontrol Post request for moving averages
  // getmcmovingaverages() {
  //   console.log("mc moving averages start")
  //   for (let val in this.stock) {
  //     this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
  //     this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday })
      
  //   }
   
  //   this.dataApi.getmcmovingaverages(this.mcsymbol).subscribe(data5 => {


  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  getnr7() {
    console.log("NR7 start")
    this.mcsymbol.length = 0;
    for (let val in this.stock) {
      
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ eqsymbol: this.stock[val].symbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday })
      
    }
    console.log(this.mcsymbol)
    this.dataApi.getnr7(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcniftyrealtime() {
   
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BNSX').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        
    
      this.mcniftyrt.length = 0;
      
      this.mcniftyrt.push({ text1: nestedItems[2]['pricecurrent'], text2: nestedItems[2]['pricecurrent'], text3: nestedItems[2]['pricechange'], text4: nestedItems[2]['pricepercentchange'], text5: nestedItems[2]['adv'], text6: nestedItems[2]['decl'] })
      this.mcadvvalue1 = nestedItems[2]['adv'];
      this.mcdecvalue1 = nestedItems[2]['decl'];
      
     
    }, err => {
      console.log(err)
    })
  }
  getmcpharmaniftyrealtime() {
   
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3Bcpr').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
  
    this.mcpniftyrt.length = 0;
    
    this.mcpniftyrt.push({ text1: nestedItems[2]['pricecurrent'], text2: nestedItems[2]['pricecurrent'], text3: nestedItems[2]['pricechange'], text4: nestedItems[2]['pricepercentchange'], text5: nestedItems[2]['adv'], text6: nestedItems[2]['decl'] })
    this.mcpadvvalue = nestedItems[2]['adv'];
    this.mcpdecvalue = nestedItems[2]['decl'];
    
   
  }, err => {
    console.log(err)
  })
}
  getmcbankniftyrealtime() {
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3Bnbx').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
  
    this.mcbniftyrt.length = 0;
      
      this.mcbniftyrt.push({text1: nestedItems[2]['pricecurrent'], text2: nestedItems[2]['pricecurrent'], text3: nestedItems[2]['pricechange'], text4: nestedItems[2]['pricepercentchange'], text5: nestedItems[2]['adv'], text6: nestedItems[2]['decl'] })
    }, err => {
      console.log(err)
    })
  }
      
   
  getmcvolume() {
    this.getmcvolume1()
    console.log("mc volume")
    var d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes())
    this.mcsymbol.length = 0;
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
    console.log(this.mcsymbol)
    this.dataApi.getmcvolume(this.mcsymbol).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcvolume1() {
    console.log("mc volume1")
    var d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes())
    this.mcsymbol1.length = 0;
    for (let val in this.stock1) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
      this.mcsymbol1.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
    }
    console.log(this.mcsymbol1)
    this.dataApi.getmcvolume1(this.mcsymbol1).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
  getmcinsight() {
    this.truncatemcinsightview()
    console.log("mc insight")
    var d = new Date();;
    //console.log(d.getHours() + ":" + d.getMinutes())
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
  truncatemcinsightview() {
    this.dataApi.dropmcinsightview().subscribe(data5 => {
      console.log("Drop mcinsight Executed...")

    }, err => {
      console.log(err)
    }
    )
  }
 
  // getmmstockinforeco() {
  //   console.log("mmstock reco start")
  //   for (let val in this.stock1) {
  //     this.stockid.push({ stockid: this.stock[val].stockid, isin: this.stock[val].isin, name: this.stock[val].name })
  //     //console.log(this.stock[val].stockid)
  //   }
  // //  console.log(this.stockid)
    
  //   this.dataApi.getmmstockinforeco(this.stockid).subscribe(data5 => {


  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  
  // getmccombine() {
  //   console.log("mc combine start")
  //   this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
  //   //console.log('Date is' + this.datetoday)
  //   var d = new Date();
  //  // console.log(d.getHours()+":"+d.getMinutes())
  //   for (let val in this.stock1) {
  //     this.mcsymbol.push({ mcsymbol: this.stock[val].mcsymbol, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
  //   }
   
  //   this.dataApi.getmccombine(this.mcsymbol).subscribe(data5 => {


  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  // gettrendlynepostdvm() {
  //   console.log("trendlyne post durability/Volatility/Momentum score start")
  //   this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
  //   console.log('Date is' + this.datetoday)
  //   var d = new Date();
  //   console.log(d.getHours()+":"+d.getMinutes())
  //   for (let val in this.stock) {
  //     this.tlid.push({ tlid: this.stock[val].tlid, isin: this.stock[val].isin, name: this.stock[val].name,Date:this.datetoday,time:d.getHours()+":"+d.getMinutes() })
      
  //   }
   
  //   this.dataApi.gettrendlynepostdvm(this.tlid).subscribe(data5 => {


  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
  navigatenifty() {
    this.window.open("/nifty", "_blank") 
  }
  navigatebanknifty() {
    this.window.open("/banknifty", "_blank") 
  }
  navigatepnifty() {
    this.window.open("/pharmanifty", "_blank") 
  }
  // chartink() {
  //   console.log("chartink start")
  //   this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
  //  // console.log('Date is'+ this.datetoday)
    
  //     this.abc.push({ name:'copy-buy-100-accuracy-morning-scanner-scan-at-9-30-4002',Date:this.datetoday })
      
    
   
  //   this.dataApi.chartink(this.abc).subscribe(data5 => {


  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
 
  // getmcsectorcombine() {
  //   console.log("mc sector combine start")
  //   for (let val in this.sectorList) {
  //     this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
  //   //  console.log('Date is'+ this.datetoday)
  //     this.mcsectorsymbol.push({ mcsectorsymbol: this.sectorList[val].mcsectorsymbol, sectorid: this.sectorList[val].mcsectorid, name: this.sectorList[val].name,Date:this.datetoday })
  //   //  console.log(this.sectorList[val].mcsectorsymbol)
  //   }
   
  //   this.dataApi.getmcsectorcombine(this.mcsectorsymbol).subscribe(data5 => {


  //   }, err => {
  //     console.log(err)
  //   }
  //   )
  // }
 
  nsepostdata1() {
    console.log("eq sector combine start")
    for (let val in this.stock) {
      this.datetoday = formatDate(new Date(), 'ddMMyyyy', 'en');
    
      this.eqsymbol1.push({ eqsymbol1: this.stock[val].symbol,name: this.stock[val].name,Date:this.datetoday })
      
    }
   
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
    
      this.eqsymbol1.push({ eqsymbol1: this.fnostock[val].symbol,Date:this.datetoday })
      
    }
   
    this.dataApi.nsepostdata2(this.eqsymbol1).subscribe(data5 => {


    }, err => {
      console.log(err)
    }
    )
  }
 
 
}
