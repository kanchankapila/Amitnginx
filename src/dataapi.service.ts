import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, 
  HttpRequest
} from "@angular/common/http";
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class DataapiService {
  stock: any;
  dbname: any;
     baseurl = "https://amitv2.herokuapp.com/api"
    // baseurl="http://localhost:3000/api"
  constructor(private http: HttpClient, private window: Window, private route: ActivatedRoute, private router: Router, ) {
    
    
    
   }
  

 

  nsepostdata1(eqsymbol1) {
    return this.http.post(this.baseurl + '/nsepostdata1',eqsymbol1) 
  }
  nsepostdata2(eqsymbol1) {
   
    return this.http.post(this.baseurl + '/nsepostdata2',eqsymbol1) 
  }
  getnteodscreeners(ntoptions) {
    return this.http.post(this.baseurl + '/nteodscreeners',ntoptions)
  console.log(ntoptions)
  }
  getnteodscreeners1() {
    return this.http.get(this.baseurl + '/nteodscreeners1')
  
  }
  getkite1(timeframe,eqsymbol){
    return this.http.get(this.baseurl + '/kite1?timeframe='+timeframe+'&eqsymbol='+eqsymbol)
  }
  kotakhealthscore() {
    return this.http.get(this.baseurl + '/kotakhealthscore')
    
  }
  getkitestockreports(){
    return this.http.get(this.baseurl + '/kitestockreports')
  }
  getnsetry1(symbol){
    return this.http.get(this.baseurl + '/nsetry1?symbol='+symbol)
  }
 
 nseresults(){
    return this.http.get(this.baseurl + '/nseresults')
  }
  nseinstrading() {
    return this.http.get(this.baseurl + '/nseinstrading')
  }
  nsedatastockohlc1(stock){
    return this.http.get(this.baseurl + '/nsedatastockohlc1?stock='+stock)
  }
  nsedatasioi(){
    return this.http.get(this.baseurl + '/nsedatasioi')
  }
  nsedatastockoi(stock){
    return this.http.get(this.baseurl + '/nsedatastockoi?stock='+stock)
  }
  nsedatapioii(){
    return this.http.get(this.baseurl + '/nsedatapioii')
  }
  nsedataniftyoi(){
    return this.http.get(this.baseurl + '/nsedataniftyoi')
  }
  nsedatabniftyoi(){
    return this.http.get(this.baseurl + '/nsedatabniftyoi')
  }
 
  nsedataadvdec(){
    return this.http.get(this.baseurl + '/nsedataadvdec')
  }
  nsestockhistdata(stock) {
    return this.http.get(this.baseurl + '/nsestockhistdata?stock='+stock)
  }
  nsedataindices(){
    return this.http.get(this.baseurl + '/nsedataindices')
  }

  
  nsedatastockohlc2(stock){
    return this.http.get(this.baseurl + '/nsedatastockohlc2?stock='+stock)
  }
  nsedata3(){
    return this.http.get(this.baseurl + '/nsedata3')
  }
 

  getmmmarkets(){
    return this.http.get(this.baseurl + '/mmmarkets')
  }
  
 
  getnse(){
    return this.http.get(this.baseurl + '/nse')
  }
  getnse1(){
    return this.http.get(this.baseurl + '/nse1')
  }
  getnse2(){
    return this.http.get(this.baseurl + '/nse2')
  }
  gettlrsiall() {
    
    return this.http.get(this.baseurl + '/tlrsiall')
  }
 
  getmcoverall(){
    return this.http.get(this.baseurl + '/mcoverall')
  }
  getmoneycontroloveralldaily(mcsymbol){
    return this.http.post(this.baseurl + '/moneycontroloveralldaily',mcsymbol)
  }
  getmcmovingaverages(mcsymbol){
    return this.http.post(this.baseurl + '/mcmovingaverages',mcsymbol)
  }
  getnr7(mcsymbol){
    return this.http.post(this.baseurl + '/nr7',mcsymbol)
  }
  getetcompanydata(companyid){
    return this.http.post(this.baseurl + '/etcompanydata',companyid)
  }
  getetcompanydataohlc(companyid){
    return this.http.get(this.baseurl + '/etcompanydataohlc?companyid='+companyid)
  }
  getetsectordetails(sectorid,etsectorname){
    return this.http.get(this.baseurl + '/etsectordetails?sectorid='+sectorid+'&&etsectorname='+etsectorname)
  }
  getetindexdetails(indexid,exchange){
    return this.http.get(this.baseurl + '/etindexdetails?indexid='+indexid+'&&exchange='+exchange)
  }
  
  getmccombine(mcsymbol){
    return this.http.post(this.baseurl + '/mccombine',mcsymbol)
  }
  gettrendlynepostdvm(tlid){
    return this.http.post(this.baseurl + '/trendlynepostdvm',tlid)
  }
  getmcmovingaveragesview(stockisin,dbname) {
    
    return this.http.get(this.baseurl + '/mcmovingaveragesview?stockisin='+stockisin+"&&dbname="+dbname)
  }
  getkotakview(eqsymbol) {
    
    return this.http.get(this.baseurl + '/kotakview?eqsymbol='+eqsymbol)
  }
  getkotaksectorview(sectorid) {
    
    return this.http.get(this.baseurl + '/kotaksectorview?sectorid='+sectorid)
  }
  getmcsectorcombine(mcsectorsymbol){
    return this.http.post(this.baseurl + '/mcsectorcombine',mcsectorsymbol)
  }
  getmoneycontrolti(mcsymbol){
    return this.http.post(this.baseurl + '/moneycontrolti',mcsymbol)
  }
  getmcvolume(mcsymbol){
    return this.http.post(this.baseurl + '/mcvolume',mcsymbol)
  }
  getmcvolume1(mcsymbol1){
    return this.http.post(this.baseurl + '/mcvolume',mcsymbol1)
  }
  getmcinsight(mcsymbol){
    return this.http.post(this.baseurl + '/mcinsight',mcsymbol)
  }
  getmcinsightview(mcsymbol){
    return this.http.get(this.baseurl + '/mcinsightview?mcsymbol='+mcsymbol)
  }
 
  getntstockpcrdetails(eqsymbol) {
 
    return this.http.get(this.baseurl + '/ntstockpcrdetails?eqsymbol='+eqsymbol)
  }

  
  
  gettrendlynestocks1(tlid,tlname,eqsymbol){
    return this.http.get(this.baseurl + '/trendlynestocks1?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  

  
  
  
  gettrendlynenifty() {
    return this.http.get(this.baseurl + '/trendlynenifty')
  }
  gettrendlynebanknifty() {
    return this.http.get(this.baseurl + '/trendlynebanknifty')
  }
  gettrendlynepharmanifty() {
    return this.http.get(this.baseurl + '/trendlynepharmanifty')
  }

  getniftytradersallstocks(){
    return this.http.get(this.baseurl + '/niftytradersallstocks')
  }
  getetpost1(){
    return this.http.get(this.baseurl + '/etpost1')
  }
  getetDIIBuying() {
    return this.http.get(this.baseurl + '/etDIIBuying') 
  }
  
  
 
  
  
 
 
 
}




