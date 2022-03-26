import { Component, OnInit } from '@angular/core';
import {DataapiService} from '../../dataapi.service'
import * as  stocks from '../lists/stocklist'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChartModule} from 'primeng/chart';
export interface etsectortiles {
  
              

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
  }

  export interface etsectornametiles {
              

    text1: string;
    text2: string;
    
    
    }
  
export interface etrecotiles {
              
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  
}
export interface mmrecotiles {
              
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
}
export interface mmmaxbuyrecotiles {
              
  
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
  }
@Component({
  selector: 'app-sn-r',
  templateUrl: './sn-r.component.html',
  styleUrls: ['./sn-r.component.scss']
})



export class SnRComponent implements OnInit {
  tableData:any
  stockList:any
  stock:any
  dbname:any
  stockname:any
  stockisin:any
  names:any
  etsector:etsectortiles[]=[];
  etreco: etrecotiles[] = [];
  mmreco: mmrecotiles[] = [];
  mmmaxbuyreco:mmmaxbuyrecotiles[]=[];
  etsectorname:etsectornametiles[]=[];
  
  constructor(private dataApi: DataapiService,private window: Window,private route: ActivatedRoute,private router: Router) { }
    ngOnInit() {

      this.getetrecos()
      this.getmmrecos()
      this.getmmmaxbuyrecos()
      this.getetsectors()
 
}
getetrecos() {
  this.dataApi.getetrecos().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
   console.log(nestedItems[0]["sec"]["stry"])
    for (let val in nestedItems[0]["sec"]["stry"]) {
      
      this.etreco.push({ text1: nestedItems[0]["sec"]["stry"][val]["recoroot"]["rec"].companyname, text2: nestedItems[0]["sec"]["stry"][val]["recoroot"]["rec"].recommendation, text3:nestedItems[0]["sec"]["stry"][val]["recoroot"]["rec"].targetlow, text4: nestedItems[0]["sec"]["stry"][val]["recoroot"]["rec"].marketprice, text5: nestedItems[0]["sec"]["stry"][val]["recoroot"]["rec"].organisation })
    }

  }, err => {
    console.log(err)
  })
  }
  getmmrecos() {
    this.dataApi.getmmrecos().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     console.log(nestedItems)
      for (let val in nestedItems[0]) {
        
        this.mmreco.push({ text1: nestedItems[0][val].StkName, text2: nestedItems[0][val].TargetPrice, text3:nestedItems[0][val].CallSingnal, text4: nestedItems[0][val].CallDate, text5: nestedItems[0][val].BrkName,text6: nestedItems[0][val].CallPrice})
      }
  
    }, err => {
      console.log(err)
    })
  }
  getmmmaxbuyrecos() {
    this.dataApi.getmmmaxbuyrecos().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
     console.log(nestedItems)
      for (let val in nestedItems[0]) {
        console.log(val)
        this.mmmaxbuyreco.push({ text1: nestedItems[0][val].StkName, text2: nestedItems[0][val].TargetPrice, text3:nestedItems[0][val].CallSingnal, text4: nestedItems[0][val].CallDate, text5: nestedItems[0][val].BrkName,text6: nestedItems[0][val].CallPrice})
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
   
    for (let val in nestedItems[0]) {
    
    // this.etsectorname.push({text1:nestedItems[0][val].sectorName})
      for (let val1 in nestedItems[0][val].sectorConstituents) {
      
      this.etsector.push({text1:"Sector:"+nestedItems[0][val].sectorName,text2:"Advance:"+nestedItems[0][val].advance,text3:"Decline:"+nestedItems[0][val].decline,text4: "Company:"+nestedItems[0][val].sectorConstituents[val1].companyName,text5: "Current Price:"+nestedItems[0][val].sectorConstituents[val1].current,text6:nestedItems[0][val].sectorConstituents[val1].percentChange})
      }
    }

  }, err => {
    console.log(err)
  })
}



}
