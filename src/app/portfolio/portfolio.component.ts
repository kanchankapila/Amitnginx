import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as stocks from '../lists/stocklist'

export interface Tile {

  text: string;
}
export interface quantitytile {

  text: string;
}
export interface isumtile {

  text: number;
}
export interface diffsumtile {

  text: number;
}
export interface lsumtile {

  text: number;
}
export interface lvaluetile {

  text: number;
}
export interface bpricetile {

  text: string;
}
export interface ipricetile {

  text: number;
}
export interface difftile {

  text: number;
}
export interface cpricetile {

  text: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  stockList: any
  stock: any
  isin2: any
  details = []
  mcsymbol: any
  mcsymbol1: any
  mcsymbol2:any
  industry: any
  currentprice1: any
  currentprice2:any
  quantity: any
  pprice: any
  priceperchange: any
  tiles: Tile[] = [];
  cprice1: any
  iprice1: any
  isin1:any
  dbname: any
  dbname1: any
  
  isum3 = 0
  diffsum3 = 0
  lsum3 = 0
  isum4 = 0
  diffsum4 = 0
  lsum4 = 0
  isum1 = 0
  diffsum1 = 0
  lsum1 = 0
  isum2 = 0
  diffsum2 = 0
  lsum2 = 0
  isin:any
  bprice: bpricetile[] = [];
  iprice: ipricetile[] = [];
  cprice: cpricetile[] = [];
  lsumt: lsumtile[] = [];
  isumt: isumtile[] = [];
  diffsumt: diffsumtile[] = [];
  currentprice: any
  diff: difftile[] = [];
  lvalue: lvaluetile[] = [];
  quantity1: quantitytile[] = [];
  dblist = { 'PortfolioKK': [] ,'PortfolioAK':[],'Portfolio':[],'mydb': [], 'chartinkvshocker': [], 'chartinkemacrs59': [], 'chartinkemacrs920': [], 'chartinkgapup': [], 'chartinkgapdown': [] }
  dblist1 = { 'PortfolioKK': [] ,'PortfolioAK':[],'Portfolio':[],'mydb': [], 'chartinkvshocker': [], 'chartinkemacrs59': [], 'chartinkemacrs920': [], 'chartinkgapup': [], 'chartinkgapdown': [] }
  dblist2 = { 'PortfolioKK': [] ,'PortfolioAK':[],'Portfolio':[],'mydb': [], 'chartinkvshocker': [], 'chartinkemacrs59': [], 'chartinkemacrs920': [], 'chartinkgapup': [], 'chartinkgapdown': [] }
  constructor(private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.stockList = stocks.default.Data

    this.stock = stocks.default.Data
    

    this.getportfolio('Portfolio')
    this.getmcsd(this.mcsymbol, this.dbname, this.isin)
    this.getportfolioAK('PortfolioAK')
    this.getmcsd1(this.mcsymbol1, this.dbname, this.isin1)
   this.getportfolioKK('PortfolioKK')
    this.getmcsd2(this.mcsymbol2,this.dbname,this.isin2)
    
  }
  
    async getportfolio(dbname) {
     this.dataApi.getportfolio(dbname).subscribe(data5 => {
       this.dblist[dbname] = data5
     
      
       Object.keys(data5).forEach( (value) => {
         this.mcsymbol = this.stockList.filter(i => i.name == data5[value].CompanyName)[0].mcsymbol
         this.getmcsd(this.mcsymbol,dbname,data5[value].isin)
      })
       
     }, err => {
       console.log(err)
     })
   }
  

   async getmcsd(mcsymbol, dbname, isin) {
     this.dataApi.getmcsd(mcsymbol).subscribe(data => {
       this.currentprice = data["pricecurrent"]
  
       this.dblist[dbname].filter(i => i.isin == isin)[0]["currentprice"] = this.currentprice
      
       this.dblist[dbname].filter(i => i.isin == isin)[0]["iprice"] =
         (this.dblist[dbname].filter(i => i.isin == isin)[0]["BuyPrice"] *
           this.dblist[dbname].filter(i => i.isin == isin)[0]["Quantity"])
      
       this.dblist[dbname].filter(i => i.isin == isin)[0]["lvalue"] =
         (this.dblist[dbname].filter(i => i.isin == isin)[0]["currentprice"] *
           this.dblist[dbname].filter(i => i.isin == isin)[0]["Quantity"])

       this.dblist[dbname].filter(i => i.isin == isin)[0]["diff"] =
         ((this.dblist[dbname].filter(i => i.isin == isin)[0]["iprice"]) -
           (this.dblist[dbname].filter(i => i.isin == isin)[0]["lvalue"]))
           this.isum1 = this.isum1 + (this.dblist[dbname].filter(i => i.isin == isin)[0]["iprice"])
   
           this.lsum1 = this.lsum1 + (this.dblist[dbname].filter(i => i.isin == isin)[0]["lvalue"])
          
           this.diffsum1 = this.diffsum1 + (this.dblist[dbname].filter(i => i.isin == isin)[0]["diff"])
           
     }, err => {
       console.log(err)
     }

     )
   }
     async getportfolioAK(dbname) {
      this.dataApi.getportfolioAK(dbname).subscribe(data1 => {
        this.dblist[dbname] = data1
       
        
        Object.keys(data1).forEach((value) => {
          this.mcsymbol1 = this.stockList.filter(i => i.isin == data1[value].isin)[0].mcsymbol
          
          this.getmcsd1(this.mcsymbol1, dbname, data1[value].isin)
        })
       
      }, err => {
        console.log(err)
      })
    }
    
  
    async getmcsd1(mcsymbol1, dbname, isin1) {
      this.dataApi.getmcsd1(mcsymbol1).subscribe(data2 => {
     
        this.currentprice1 = data2["pricecurrent"]
       
    
        this.dblist[dbname].filter(i => i.isin == isin1)[0]["currentprice"] = this.currentprice1
        
        this.dblist[dbname].filter(i => i.isin == isin1)[0]["iprice"] =
          (this.dblist[dbname].filter(i => i.isin == isin1)[0]["BuyPrice"] *
            this.dblist[dbname].filter(i => i.isin == isin1)[0]["Quantity"])
       
        this.dblist[dbname].filter(i => i.isin == isin1)[0]["lvalue"] =
          (this.dblist[dbname].filter(i => i.isin == isin1)[0]["currentprice"] *
            this.dblist[dbname].filter(i => i.isin == isin1)[0]["Quantity"])
  
        this.dblist[dbname].filter(i => i.isin == isin1)[0]["diff"] =
          ((this.dblist[dbname].filter(i => i.isin == isin1)[0]["iprice"]) -
            (this.dblist[dbname].filter(i => i.isin == isin1)[0]["lvalue"]))
            this.isum2 = this.isum2 + (this.dblist[dbname].filter(i => i.isin == isin1)[0]["iprice"])
   
            this.lsum2 = this.lsum2 + (this.dblist[dbname].filter(i => i.isin == isin1)[0]["lvalue"])
           
            this.diffsum2 = this.diffsum2 + (this.dblist[dbname].filter(i => i.isin == isin1)[0]["diff"])
            
      }, err => {
        console.log(err)
      }
  
      )
  
  }
async getportfolioKK(dbname) {
  this.dataApi.getportfolioKK(dbname).subscribe(data3 => {
    this.dblist[dbname] = data3
    
     
      
  Object.keys(data3).forEach((value) => {
  this.mcsymbol2 = this.stockList.filter(i => i.isin == data3[value].isin)[0].mcsymbol
 
    this.getmcsd2(this.mcsymbol2, dbname, data3[value].isin)
  })
    
  }, err => {
      console.log(err)
  })
}
  

async getmcsd2(mcsymbol2, dbname, isin2) {
  this.dataApi.getmcsd2(mcsymbol2).subscribe(data6 => {
    
  this.currentprice2 = data6["pricecurrent"]
    
  
  this.dblist[dbname].filter(i => i.isin == isin2)[0]["currentprice"] = this.currentprice2
      //console.log(this.dblist1[dbname1].filter(i => i.isin == isin1)[0]["currentprice"])
  this.dblist[dbname].filter(i => i.isin == isin2)[0]["iprice"] =
  (this.dblist[dbname].filter(i => i.isin == isin2)[0]["BuyPrice"] *
  this.dblist[dbname].filter(i => i.isin == isin2)[0]["Quantity"])
     // console.log( this.dblist1[dbname1].filter(i => i.isin == isin1)[1]["iprice1"])
  this.dblist[dbname].filter(i => i.isin == isin2)[0]["lvalue"] =
  (this.dblist[dbname].filter(i => i.isin == isin2)[0]["currentprice"] *
  this.dblist[dbname].filter(i => i.isin == isin2)[0]["Quantity"])

  this.dblist[dbname].filter(i => i.isin == isin2)[0]["diff"] =
  ((this.dblist[dbname].filter(i => i.isin == isin2)[0]["iprice"]) -
        (this.dblist[dbname].filter(i => i.isin == isin2)[0]["lvalue"]))
        
     this.isum3 = this.isum3 + (this.dblist[dbname].filter(i => i.isin == isin2)[0]["iprice"])
   
    this.lsum3 = this.lsum3 + (this.dblist[dbname].filter(i => i.isin == isin2)[0]["lvalue"])
    
    this.diffsum3 = this.diffsum3 + (this.dblist[dbname].filter(i => i.isin == isin2)[0]["diff"])
    this.isum4 = (this.isum1 + this.isum2 + this.isum3)
    this.lsum4 = (this.lsum1 + this.lsum2 + this.lsum3)
    this.diffsum4=(this.diffsum1+this.diffsum2+this.diffsum3)
}, err => {
  console.log(err)
  }

  )

}
  

}
