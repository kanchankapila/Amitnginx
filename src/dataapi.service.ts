import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  stock: any;
  dbname: any;

  constructor(private http: HttpClient,private window: Window,private route: ActivatedRoute,private router: Router) { }


 

  nsepostdata1(eqsymbol1) {
    return this.http.post('http://localhost:3000/api/nsepostdata1',eqsymbol1) 
  }
  nsepostdata2(eqsymbol1) {
   
    return this.http.post('http://localhost:3000/api/nsepostdata2',eqsymbol1) 
  }
  getnteodscreeners(ntoptions) {
    return this.http.post('http://localhost:3000/api/nteodscreeners',ntoptions)
  console.log(ntoptions)
  }
  getnteodscreeners1() {
    return this.http.get('http://localhost:3000/api/nteodscreeners1')
  
  }
  getkite1(timeframe,eqsymbol){
    return this.http.get('http://localhost:3000/api/kite1?timeframe='+timeframe+'&eqsymbol='+eqsymbol)
  }
  getkitestockreports(){
    return this.http.get('http://localhost:3000/api/kitestockreports')
  }
  getnsetry1(symbol){
    return this.http.get('http://localhost:3000/api/nsetry1?symbol='+symbol)
  }
 
 nseresults(){
    return this.http.get('http://localhost:3000/api/nseresults')
  }
  nseinstrading() {
    return this.http.get('http://localhost:3000/api/nseinstrading')
  }
  nsedatastockohlc1(stock){
    return this.http.get('http://localhost:3000/api/nsedatastockohlc1?stock='+stock)
  }
  nsedatasioi(){
    return this.http.get('http://localhost:3000/api/nsedatasioi')
  }
  nsedatastockoi(stock){
    return this.http.get('http://localhost:3000/api/nsedatastockoi?stock='+stock)
  }
  nsedatapioii(){
    return this.http.get('http://localhost:3000/api/nsedatapioii')
  }
  nsedataniftyoi(){
    return this.http.get('http://localhost:3000/api/nsedataniftyoi')
  }
  nsedatabniftyoi(){
    return this.http.get('http://localhost:3000/api/nsedatabniftyoi')
  }
 
  nsedataadvdec(){
    return this.http.get('http://localhost:3000/api/nsedataadvdec')
  }
  nsestockhistdata(stock) {
    return this.http.get('http://localhost:3000/api/nsestockhistdata?stock='+stock)
  }
  nsedataindices(){
    return this.http.get('http://localhost:3000/api/nsedataindices')
  }

  
  nsedatastockohlc2(stock){
    return this.http.get('http://localhost:3000/api/nsedatastockohlc2?stock='+stock)
  }
  nsedata3(){
    return this.http.get('http://localhost:3000/api/nsedata3')
  }
 

  getmmmarkets(){
    return this.http.get('http://localhost:3000/api/mmmarkets')
  }
  
 
  getnse(){
    return this.http.get('http://localhost:3000/api/nse')
  }
  getnse1(){
    return this.http.get('http://localhost:3000/api/nse1')
  }
  getnse2(){
    return this.http.get('http://localhost:3000/api/nse2')
  }
  gettlrsiall() {
    
    return this.http.get('http://localhost:3000/api/tlrsiall')
  }
 
  getmcoverall(){
    return this.http.get('http://localhost:3000/api/mcoverall')
  }
  getmoneycontroloveralldaily(mcsymbol){
    return this.http.post('http://localhost:3000/api/moneycontroloveralldaily',mcsymbol)
  }
  getmcmovingaverages(mcsymbol){
    return this.http.post('http://localhost:3000/api/mcmovingaverages',mcsymbol)
  }
  getnr7(mcsymbol){
    return this.http.post('http://localhost:3000/api/nr7',mcsymbol)
  }
  getetcompanydata(companyid){
    return this.http.post('http://localhost:3000/api/etcompanydata',companyid)
  }
  getetcompanydataohlc(companyid){
    return this.http.get('http://localhost:3000/api/etcompanydataohlc?companyid='+companyid)
  }
  getetsectordetails(sectorid,etsectorname){
    return this.http.get('http://localhost:3000/api/etsectordetails?sectorid='+sectorid+'&&etsectorname='+etsectorname)
  }
  getetindexdetails(indexid,exchange){
    return this.http.get('http://localhost:3000/api/etindexdetails?indexid='+indexid+'&&exchange='+exchange)
  }
  
  getmccombine(mcsymbol){
    return this.http.post('http://localhost:3000/api/mccombine',mcsymbol)
  }
  gettrendlynepostdvm(tlid){
    return this.http.post('http://localhost:3000/api/trendlynepostdvm',tlid)
  }
  getmcmovingaveragesview(stockisin,dbname) {
    
    return this.http.get('http://localhost:3000/api/mcmovingaveragesview?stockisin='+stockisin+"&&dbname="+dbname)
  }
  getkotakview(eqsymbol) {
    
    return this.http.get('http://localhost:3000/api/kotakview?eqsymbol='+eqsymbol)
  }
  getkotaksectorview(sectorid) {
    
    return this.http.get('http://localhost:3000/api/kotaksectorview?sectorid='+sectorid)
  }
  getmcsectorcombine(mcsectorsymbol){
    return this.http.post('http://localhost:3000/api/mcsectorcombine',mcsectorsymbol)
  }
  getmoneycontrolti(mcsymbol){
    return this.http.post('http://localhost:3000/api/moneycontrolti',mcsymbol)
  }
  getmcvolume(mcsymbol){
    return this.http.post('http://localhost:3000/api/mcvolume',mcsymbol)
  }
  getmcvolume1(mcsymbol1){
    return this.http.post('http://localhost:3000/api/mcvolume',mcsymbol1)
  }
  getmcinsight(mcsymbol){
    return this.http.post('http://localhost:3000/api/mcinsight',mcsymbol)
  }
  getntstockdetails(eqsymbol) {
    
    return this.http.get('http://localhost:3000/api/ntstockdetails?eqsymbol='+eqsymbol)
  }
  getntstockpcrdetails(eqsymbol) {
 
    return this.http.get('http://localhost:3000/api/ntstockpcrdetails?eqsymbol='+eqsymbol)
  }

  
  
  gettrendlynestocks1(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:3000/api/trendlynestocks1?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  gettrendlynestocks2(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:3000/api/trendlynestocks2?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }

  
  gettrendlynestocks3(tlid){
    return this.http.get('http://localhost:3000/api/trendlynestocks3?tlid='+tlid)
  }
  gettrendlynestocksti(tlid){
    return this.http.get('http://localhost:3000/api/trendlynestocksti?tlid='+tlid)
  }
  gettrendlynenifty() {
    return this.http.get('http://localhost:3000/api/trendlynenifty')
  }
  gettrendlynebanknifty() {
    return this.http.get('http://localhost:3000/api/trendlynebanknifty')
  }
  gettrendlynepharmanifty() {
    return this.http.get('http://localhost:3000/api/trendlynepharmanifty')
  }

  getniftytradersallstocks(){
    return this.http.get('http://localhost:3000/api/niftytradersallstocks')
  }
  getetpost1(){
    return this.http.get('http://localhost:3000/api/etpost1')
  }
  getetDIIBuying() {
    return this.http.get('http://localhost:3000/api/etDIIBuying') 
  }
  
  
 
  
  
 
 
 
}




