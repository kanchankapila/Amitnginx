import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import * as  stocks from '../lists/stocklist'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';

export interface Tile {
  cols: number;
  rows: number;
  text: string;

}
export interface mcoverallvdailytiles {

  text: string;
  text1: string;
  text2: string;
}
export interface mccombinetiles {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  }
export interface mcoverallvweeklytiles {

  text: string;
  text1: string;
  text2: string;
}
export interface mccurrenttiles {

  text: string;
  text1: string;
  text2: string;
}
export interface mcpscoretiles {

  text: string;
  text1: string;
  text2: string;
}



@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {


  tableData: any
  dblist={'mydb':[],'chartinkvshocker':[],'chartinkemacrs59':[],'chartinkemacrs920':[],'chartinkgapup':[],'chartinkgapdown':[]}
  stockList: any
  stock: any
  dbname: any
  data: any
  stock_isin: any
  names: any
  elements: any = [

  ];
  mcoverallvdaily: mcoverallvdailytiles[] = [];
  mcoverallvweekly: mcoverallvweeklytiles[] = [];
  mccurrent: mccurrenttiles[] = [];
  mcpscore: mcpscoretiles[] = [];
  mccombine: mccombinetiles[] = [];

  cards: any = [

  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


  tiles: Tile[] = [


  ];



  constructor(private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router,private vps: ViewportScroller) { }

  ngOnInit() {
    this.stockList = stocks.default.Data
    this.stock = stocks.default.Data
    this.stockList = stocks.default.Data
    this.stock = stocks.default.Data
    
    this.data = this.stock
    this.names = this.stock[0].name

    this.getmccombineview('moneycontrol')
    this.getResults()
    this.getmcoverallviewdaily('moneycontrol')
    this.getmcoverallviewweekly('moneycontrol')
    this.getmccurrent('moneycontrol')
    this.getmcpscore('pscore')




    

  }
  getmccurrent(dbname){
    this.dataApi.getmccurrent(dbname).subscribe(data=>{
      this.dblist[dbname]=data
      
        let nestedItems = Object.keys(data).map(key => {
          return data[key];
        });
      
      
      for(let val in nestedItems)
      {  
        
      this.mccurrent.push({text:nestedItems[val].name,text1:nestedItems[val].indication,text2:nestedItems[val].isin})
        
      }
   
         
    }, err=>{
      console.log(err)
     })
  }
  getmcpscore(dbname){
    this.dataApi.getmcpscore(dbname).subscribe(data=>{
      this.dblist[dbname]=data
      
        let nestedItems = Object.keys(data).map(key => {
          return data[key];
        });
      
     
      for(let val in nestedItems)
      {  
        
     this.mcpscore.push({text:nestedItems[val].name,text1:nestedItems[val].pscore,text2:nestedItems[val].isin})
        
      }
   
         
    }, err=>{
      console.log(err)
     })
  }
  
  getmccombineview(dbname) {
    this.dataApi.getmccombineview(dbname).subscribe(data => {
      this.dblist[dbname] = data
      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
    console.log(nestedItems)
      for (let val in data) {
         //if(this.stockList.filter(i=>i.isin == data[val].isin)[0]){
         //this.isin2=this.stockList.filter(i=>i.isin == data[val].company)[0].isin

       this.mccombine.push({text1:nestedItems[val].indicationDaily,text2:nestedItems[val].indicationWeekly,text3:nestedItems[val].isin,text4:nestedItems[val].name})
      }

  }, err => {
    console.log(err)

})
}

  getResults() {
    this.dataApi.getResults().subscribe(data1 => {

      
      for (let val in data1) {
        
        this.elements.push({ id: data1[val].company, first: data1[val].currentPrice, last: data1[val].change, handle: data1[val].change })
        this.cards.push({ id: data1[val].company, first: data1[val].currentPrice, last: data1[val].change, handle: data1[val].change })
        // this.tiles.push({text: data[val].currentPrice, cols: 2, rows: 1})
        // this.tiles.push({text: data[val].change, cols: 2, rows: 1})

      }

    }, err => {
      console.log(err)




    })
  }
  getmcoverallviewdaily(dbname) {
    this.dataApi.getmcoverallviewdaily(dbname).subscribe(data => {
      this.dblist[dbname] = data

      for (let val in data) {


        // if(this.stockList.filter(i=>i.name == data[val].company)[0]){
        //  this.isin2=this.stockList.filter(i=>i.name == data[val].company)[0].isin

        this.mcoverallvdaily.push({ text: data[val].name, text1: data[val].indication, text2: data[val].isin })

        //}

      }

    }, err => {
      console.log(err)




    })
  }
  getmcoverallviewweekly(dbname) {
    this.dataApi.getmcoverallviewweekly(dbname).subscribe(data => {
      this.dblist[dbname] = data

      for (let val in data) {


        //if(this.stockList.filter(i=>i.name == data[val].company)[0]){
        //this.isin2=this.stockList.filter(i=>i.name == data[val].company)[0].isin

        //this.tiles.push({text:data[val].company,text1:"Price:"+data[val].currentPrice,text2:"Change:"+data[val].change+"%",text3:this.isin2, cols: 3, rows: 1})
        this.mcoverallvweekly.push({ text: data[val].name, text1: data[val].indication, text2: data[val].isin })
        //}

      }

    }, err => {
      console.log(err)




    })
  }
  keyword = 'name';

  scroll(id) {
    this.vps.scrollToAnchor(id);
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
  changeStock123(stock_isin){
   
   
    this.window.open("http://localhost:4200/Ohlc?stock="+stock_isin+"&&dbname="+'mydb', "_blank")
  }
}












