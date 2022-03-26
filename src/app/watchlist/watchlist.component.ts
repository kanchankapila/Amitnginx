import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import * as stocks from '../lists/stocklist'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataapiService } from '../../dataapi.service'

export interface cardtiles {

  
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
  text11: string;
  text12: string;
}
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
  
export class WatchlistComponent implements OnInit  {
  stockList: any
  stockname:any
  stock: any
  data: any
  isin = [];
  isin1 = [];
  card: cardtiles[] = [];
  mcsymbol:any
 
 
  control = new FormControl();

  ngOnInit(){
   
    this.stockList = stocks.default.Data
    this.stock = stocks.default.Data
    
    this.data = this.stock
    this.getwatchlistview('watchlist')
    setTimeout(function(){ this.getwatchlistview('watchlist'); }, 10000);
   
  }

  


  dblist = { 'mydb': [], 'chartinkvshocker': [], 'chartinkemacrs59': [], 'chartinkemacrs920': [], 'chartinkgapup': [], 'chartinkgapdown': [] }
  constructor(private window: Window,private dataApi: DataapiService) { }

  getwatchlistview(dbname){
  this.dataApi.getwatchlistview(dbname).subscribe(data => {
    this.dblist[dbname] = data
    let nestedItems = Object.keys(data).map(key => {
      return data[key];
    });
    
    for (let val in nestedItems) {
       //console.log(nestedItems[val])
      this.stockname = this.stockList.filter(i => i.isin == nestedItems[val].isin)[0].name
      this.mcsymbol = this.stockList.filter(i => i.isin == nestedItems[val].isin)[0].mcsymbol
      console.log(this.stockname)
      this.getmcsd(this.mcsymbol)


    }
   
  }, err => {
    console.log(err)
  })
  }
  getmcsd(mcsymbol) {
    this.dataApi.getmcsd(mcsymbol).subscribe(data5 => {

      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(data5)

      this.card.push({text1:data5["upper_circuit_limit"],text2:data5["lower_circuit_limit"],text3:data5["HP"],text4:data5["LP"],text5:data5["52H"],text6:data5["52L"],text7:data5["pricecurrent"],text8:data5["pricechange"],text9:data5["pricepercentchange"],text10:data5["OPN"],text11:data5["priceprevclose"],text12:data5["SC_FULLNM"]})

      // this.lband.push({ text1: data5["lower_circuit_limit"], text: "Lower Circuit" })
      // this.uband.push({ text1: data5["upper_circuit_limit"], text: "Upper Circuit" })
      // this.hp.push({ text1: data5["HP"], text: "Day High" })
      // this.lp.push({ text1: data5["LP"], text: "Day Low" })
      // this.wkh.push({ text1: data5["52H"], text: "52 wk High" })
      // this.wkl.push({ text1: data5["52L"], text: "52 wk Low" })
      // this.currentprice = data5["pricecurrent"]
      // this.pricechange = data5["pricechange"]
      // this.priceperchange = data5["pricepercentchange"] + "%"
      // this.pricepclose.push({ text1: data5["priceprevclose"], text: "Prev Close" })
      // this.OPN.push({ text1: data5["OPN"], text: "Open Price" })
      // this.delivery.push({ text1: data5["DELV"] + "%", text: "Delivery D-1" })
      // this.delvol.push({ text1: "3d AvgDelvol :" + data5["AvgDelVolPer_3day"] + "%", text2: "5d AvgDelvol :" + data5["AvgDelVolPer_5day"] + "%", text3: "8d AvgDelvol :" + data5["AvgDelVolPer_8day"] + "%", text4: "20d AvgDelvol :" + data5["AvgDelVolPer_20day"] + "%" })


      

    }, err => {
      console.log(err)
    }
    )
  }



  /*########### Template Driven Form ###########*/
  setwatchlist(isin) {
    console.log("watchlist start")
    console.log(isin)
    this.isin.length = 0;
    this.isin.push({isin:isin})
    this.dataApi.setwatchlist(this.isin).subscribe(data => {
      
    
      
      
      }, err => {
      console.log(err)
    })
  }
  deletewatchlist(isin) {
    console.log("delete watchlist start")
  
    this.isin.length = 0;
    this.isin.push({ isin:isin})
    console.log(isin)
    this.dataApi.deletewatchlist(this.isin).subscribe(data => {
      
    
      
      
      }, err => {
      console.log(err)
    })
  }
  
  keyword = 'name';
  selectEvent(stock_isin) {
    this.setwatchlist(stock_isin)
    console.log("select event"+stock_isin)
    
  
  }

  onChangeSearch(val: string) {

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(abc) {

    // do something when input is focused
  }

  keyword1 = 'name';
  selectEvent1(stock_isin1) {
   this.deletewatchlist(stock_isin1)
    console.log("select event"+stock_isin1)
    
  
  }

  onChangeSearch1(val: string) {

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused1(abc) {

    // do something when input is focused
  }






}

