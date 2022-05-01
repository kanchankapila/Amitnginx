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


  getData(param) {
    // return this.http.get(
    //   this.baseurl +
    //     "destinations?params=" +
    //     encodeURIComponent(JSON.stringify(params))
    // );

    //return this.http.get('https://www.alphavantage.co/query?function=OBV&symbol='+param+'&interval=weekly&apikey=LKXTE-XZF6W-Q3ASG-R88WE-XFR8V')
    return this.http.get('https://www1.nseindia.com/common/json/indicesAdvanceDeclines.json')
  
  }

  setData(data){
    return this.http.post('http://localhost:8089/api/save',data)
  }
  setwatchlist(isin){
    return this.http.post('http://localhost:8089/api/watchlistinsert',isin)
  }
  nsepostdata1(eqsymbol1) {
    return this.http.post('http://localhost:8089/api/nsepostdata1',eqsymbol1) 
  }
  nsepostdata2(eqsymbol1) {
   
    return this.http.post('http://localhost:8089/api/nsepostdata2',eqsymbol1) 
  }
  getet1() {
   
    return this.http.get('http://localhost:8089/api/et1') 
  }
  chartink(abc) {
    return this.http.post('http://localhost:8089/api/chartink',abc) 
  }
  chartinkpvbreakout() {
    return this.http.get('http://localhost:8089/api/chartinkpvbreakout') 
  }
  gettlfpg() {
    return this.http.get('http://localhost:8089/api/tlfpg') 
  }
  gettlfcg() {
    return this.http.get('http://localhost:8089/api/tlfcg') 
  }
  gettlfmav() {
    return this.http.get('http://localhost:8089/api/tlfmav') 
  }
  gettlfmac() {
    return this.http.get('http://localhost:8089/api/tlfmac') 
  }
  gettloig() {
    return this.http.get('http://localhost:8089/api/tloig') 
  }
  gettloil() {
    return this.http.get('http://localhost:8089/api/tloil') 
  }
  gettloip() {
    return this.http.get('http://localhost:8089/api/tloip') 
  }
  gettloid() {
    return this.http.get('http://localhost:8089/api/tloid') 
  }
  gettloipg() {
    return this.http.get('http://localhost:8089/api/tloipg') 
  }
  gettloicg() {
    return this.http.get('http://localhost:8089/api/tloicg') 
  }
  gettlropd() {
    return this.http.get('http://localhost:8089/api/tlropd') 
  }
  gettlropw() {
    return this.http.get('http://localhost:8089/api/tlropw') 
  }
  
  gettlrupw() {
    return this.http.get('http://localhost:8089/api/tlrupw') 
  }
  
  gettlrupd() {
    return this.http.get('http://localhost:8089/api/tlrupd') 
  }
  chartinkbullishmomentum() {
    return this.http.get('http://localhost:8089/api/chartinkbullishmomentum')  
  }
  gnewsapi(stockname) {
    return this.http.get('http://localhost:8089/api/gnewsapi?&&stockname='+stockname)
  }
  gnewsapiall() {
    return this.http.get('http://localhost:8089/api/gnewsapiall')
  }
  deletewatchlist(isin){
    return this.http.post('http://localhost:8089/api/watchlistdelete',isin)
  }


  downloadCSV(param){
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=full&symbol='+param+'&apikey=LKXTE-XZF6W-Q3ASG-R88WE-XFR8V&datatype=csv',
                          {  responseType: 'blob' as 'json'})

  }
  


  getkite1(timeframe,eqsymbol){
    return this.http.get('http://localhost:8089/api/kite1?timeframe='+timeframe+'&eqsymbol='+eqsymbol)
  }
  getkitestockreports(){
    return this.http.get('http://localhost:8089/api/kitestockreports')
  }
  getnsetry1(symbol){
    return this.http.get('http://localhost:8089/api/nsetry1?symbol='+symbol)
  }
 
 nseresults(){
    return this.http.get('http://localhost:8089/api/nseresults')
  }
  nseinstrading() {
    return this.http.get('http://localhost:8089/api/nseinstrading')
  }
  nsedatastockohlc1(stock){
    return this.http.get('http://localhost:8089/api/nsedatastockohlc1?stock='+stock)
  }
  nsedatasioi(){
    return this.http.get('http://localhost:8089/api/nsedatasioi')
  }
  nsedatastockoi(stock){
    return this.http.get('http://localhost:8089/api/nsedatastockoi?stock='+stock)
  }
  nsedatapioii(){
    return this.http.get('http://localhost:8089/api/nsedatapioii')
  }
  nsedataniftyoi(){
    return this.http.get('http://localhost:8089/api/nsedataniftyoi')
  }
  nsedatabniftyoi(){
    return this.http.get('http://localhost:8089/api/nsedatabniftyoi')
  }
  opstradatanifty(nextexpiry) {
    return this.http.get('http://localhost:8089/api/opstradatanifty?nextexpiry=' + nextexpiry)
   }
  opstradatabanknifty(nextexpiry) {
    return this.http.get('http://localhost:8089/api/opstradatabanknifty?nextexpiry=' + nextexpiry)
   }
  opstrastockdata(eqsymbol,nextexpirymonthly) {
    return this.http.get('http://localhost:8089/api/opstrastockdata?nextexpirymonthly='+nextexpirymonthly+'&eqsymbol='+eqsymbol)
  
  }
  opstraexpirydatesmonthly(eqsymbol){
    return this.http.get('http://localhost:8089/api/opstraexpirydatesmonthly')
  }
  
  opstraexpirydates(){
    return this.http.get('http://localhost:8089/api/opstraexpirydates')
  }
  nsedataadvdec(){
    return this.http.get('http://localhost:8089/api/nsedataadvdec')
  }
  nsestockhistdata(stock) {
    return this.http.get('http://localhost:8089/api/nsestockhistdata?stock='+stock)
  }
  nsedataindices(){
    return this.http.get('http://localhost:8089/api/nsedataindices')
  }

  
  nsedatastockohlc2(stock){
    return this.http.get('http://localhost:8089/api/nsedatastockohlc2?stock='+stock)
  }
  nsedata3(){
    return this.http.get('http://localhost:8089/api/nsedata3')
  }
  getmccurrent(dbname){
    return this.http.get('http://localhost:8089/api/mccurrent?dbname='+dbname)
  }
  getIndicatorsma(stock,dbname){
    return this.http.get('http://localhost:8089/api/indicatorsma1?stock='+stock+"&&dbname="+dbname)
  }
  
  sendEmail(user){
    return this.http.post('http://localhost:8089/api/sendmail',user)
  }
  
  getStockData(stock,dbname){
    //return this.http.get('http://localhost:8089/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8089/api/stockdb?stock='+stock+"&&dbname="+dbname)
  }
  getchartinkvshocker(dbname){
    //return this.http.get('http://localhost:8089/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8089/api/chartinkvshocker?'+"dbname="+dbname)
  }

  getchartinkemacrs59(dbname){
    //return this.http.get('http://localhost:8089/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8089/api/chartinkemacrs59?'+"dbname="+dbname)
  }
  getchartinkemacrs920(dbname){
    //return this.http.get('http://localhost:8089/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8089/api/chartinkemacrs920?'+"dbname="+dbname)
  }
  getchartinkgapup(dbname){
    //return this.http.get('http://localhost:8089/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8089/api/chartinkgapup?'+"dbname="+dbname)
  }
  getchartinkgapdown(dbname){
    //return this.http.get('http://localhost:8089/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8089/api/chartinkgapdown?'+"dbname="+dbname)
  }
  
  getmcpscore(dbname){
    return this.http.get('http://localhost:8089/api/mcpscore?dbname='+dbname)
  }


  getohlcDetails(stock,dbname){
    return this.http.get('http://localhost:8089/api/ohlc1?stock='+stock+"&&dbname="+dbname)
  }
  getgooglenews(stock,dbname){
    return this.http.get('http://localhost:8089/api/googlenews?stock='+stock+"&&dbname="+dbname)
  }
  getgnewsone(dbname){
    return this.http.get('http://localhost:8089/api/gnewsaone?dbname='+dbname)
  }
  getportfolio(dbname){
    return this.http.get('http://localhost:8089/api/portfolio?dbname='+dbname)
  }
  getportfolioAK(dbname){
    return this.http.get('http://localhost:8089/api/portfolioAK?dbname='+dbname)
  }
  
  getdbdata1(dbname) {
    
    return this.http.get('http://localhost:8089/api/dbdata1?dbname='+dbname)
  }
  getdbjdata(eqsymbol,dbname) {
  
    return this.http.get('http://localhost:8089/api/dbjdata?stock='+eqsymbol+'&&dbname='+dbname)
  }
  getdbjdataall(eqsymbol,dbname) {
  
    return this.http.get('http://localhost:8089/api/dbjdataall?stock='+eqsymbol+'&&dbname='+dbname)
  }
  getportfolioKK(dbname){
    return this.http.get('http://localhost:8089/api/portfolioKK?dbname='+dbname)
  }
  getGainers(){
    return this.http.get('http://localhost:8089/api/Gainers')
  }
  getResults(){
    return this.http.get('http://localhost:8089/api/Results')
  }
  getmmmarkets(){
    return this.http.get('http://localhost:8089/api/mmmarkets')
  }
  
  getsnrDetails(stock,dbname){
  return this.http.get('http://localhost:8089/api/snr1?stock='+stock+"&&dbname=investingpivot_D")
  }
  getbqmovement(stockid){
    return this.http.get('http://localhost:8089/api/bqmovement?stockid='+stockid)
  }
  
  getbqgainingsectors(){
    return this.http.get('http://localhost:8089/api/bqgainingsectors')
  }
  getbqgainingsectorsstocks(sectorid){
    return this.http.get('http://localhost:8089/api/bqgainingsectorsstocks?sectorid='+sectorid)
  }
  getbqgainingsectorsstocksdetails(sectorid){
    return this.http.get('http://localhost:8089/api/bqgainingsectorsstocksdetails?sectorid='+sectorid)
  }
  getmmmacd(stockid){
    return this.http.get('http://localhost:8089/api/mmmacd?stockid='+stockid)
  }
  getmmstockinfo(stockid){
    return this.http.get('http://localhost:8089/api/mmstockinfo?stockid='+stockid)
  }
  getmmpmov(stockid){
    return this.http.get('http://localhost:8089/api/mmpmov?stockid='+stockid)
  }
  getbqadvdec(){
    return this.http.get('http://localhost:8089/api/bqadvdec')
  }
  getnsexchange(){
    return this.http.get('http://localhost:8089/api/nsexchange')
  }
  getsescreener(){
    return this.http.get('http://localhost:8089/api/sescreener')
  }
  getmmrsi(stockid){
    return this.http.get('http://localhost:8089/api/mmrsi?stockid='+stockid)
  }
  getmmbb(stockid){
    return this.http.get('http://localhost:8089/api/mmbb?stockid='+stockid)
  }
  getmmma(stockid){
    return this.http.get('http://localhost:8089/api/mmma?stockid='+stockid)
  }
  getmmkst(stockid){
    return this.http.get('http://localhost:8089/api/mmkst?stockid='+stockid)
  }
  getmmdow(stockid){
    return this.http.get('http://localhost:8089/api/mmdow?stockid='+stockid)
  }
  getmmobv(stockid){
    return this.http.get('http://localhost:8089/api/mmobv?stockid='+stockid)
  }
  getmmbank(indid){
    return this.http.get('http://localhost:8089/api/mmbank?indid='+indid)
  }
  getmmpeers(stockid){
    return this.http.get('http://localhost:8089/api/mmpeers?stockid='+stockid)
  }
  getmmtechscore(stockid){
    return this.http.get('http://localhost:8089/api/mmtechscore?stockid='+stockid)
  }
  getbqma(type){
    return this.http.get('http://localhost:8089/api/bqma?type='+type)
  }
  getbqpdvd(type){
    return this.http.get('http://localhost:8089/api/bqpdvd?type='+type)
  }
  getbqpdvi(type){
    return this.http.get('http://localhost:8089/api/bqpdvi?type='+type)
  }
  getbqpivd(type){
    return this.http.get('http://localhost:8089/api/bqpivd?type='+type)
  }
  getbqpivi(type){
    return this.http.get('http://localhost:8089/api/bqpivi?type='+type)
  }
  getbqpfvi(type){
    return this.http.get('http://localhost:8089/api/bqpfvi?type='+type)
  }
  getbq52h(type){
    return this.http.get('http://localhost:8089/api/bq52wkh?type='+type)
  }
  getbq52l(type){
    return this.http.get('http://localhost:8089/api/bq52wkl?type='+type)
  }
  getbqc52h(type){
    return this.http.get('http://localhost:8089/api/bqc52h?type='+type)
  }
  getbqc52l(type){
    return this.http.get('http://localhost:8089/api/bqc52l?type='+type)
  }
  getbqvolatile(type){
    return this.http.get('http://localhost:8089/api/bqvolatile?type='+type)
  }
  getbqffh(type){
    return this.http.get('http://localhost:8089/api/bqffh?type='+type)
  }
  getbqrfl(type){
    return this.http.get('http://localhost:8089/api/bqrfl?type='+type)
  }
  getbqbulkdeal(type){
    return this.http.get('http://localhost:8089/api/bqbulkdeal?type='+type)
  }
  getbqblockdeal(type){
    return this.http.get('http://localhost:8089/api/bqblockdeal?type='+type)
  }
  getbqinsider(type){
    return this.http.get('http://localhost:8089/api/bqinsider?type='+type)
  }
  getbqob(type){
    return this.http.get('http://localhost:8089/api/bqob?type='+type)
  }
  getbqos(type){
    return this.http.get('http://localhost:8089/api/bqos?type='+type)
  }
  getbqtg(){
    return this.http.get('http://localhost:8089/api/bqtg')
  }
  getbqtl(){
    return this.http.get('http://localhost:8089/api/bqtl')
  }
  getbqpricestats(stockid){
    return this.http.get('http://localhost:8089/api/bqprickestats?stockid='+stockid)
  }
  getbqfundamentals(stockid){
    return this.http.get('http://localhost:8089/api/bqfundamentals?stockid='+stockid)
  }
  getbqmovingaverages(stockid){
    return this.http.get('http://localhost:8089/api/bqmovingaverages?stockid='+stockid)
  }
  getbqdelvol(stockid){
    return this.http.get('http://localhost:8089/api/bqdelvol?stockid='+stockid)
  }
  getbqqresults(stockid){
    return this.http.get('http://localhost:8089/api/bqqresults?stockid='+stockid)
  }
  getbqtr(stockid){
    return this.http.get('http://localhost:8089/api/bqtr?stockid='+stockid)
  }
  getbqss(stockid){
    return this.http.get('http://localhost:8089/api/bqss?stockid='+stockid)
  }
  getbqsc(stockid){
    return this.http.get('http://localhost:8089/api/bqsc?stockid='+stockid)
  }
  getbqph(stockid){
    return this.http.get('http://localhost:8089/api/bqph?stockid='+stockid)
  }
  getbqks(stockisin){
    return this.http.get('http://localhost:8089/api/bqks?stockisin='+stockisin)
  }
  getbqannouncements(stockisin){
    return this.http.get('http://localhost:8089/api/bqannouncements?stockisin='+stockisin)
  }
  getbqca(stockid){
    return this.http.get('http://localhost:8089/api/bqca?stockid='+stockid)
  }
  getbqitnews(bqnames) {
    
    return this.http.get('http://localhost:8089/api/bqitnews?bqnames='+bqnames)
  }
  getbqpd(stockid){
    return this.http.get('http://localhost:8089/api/bqpd?stockid='+stockid)
  }
  getbqbdetails(stockid){
    return this.http.get('http://localhost:8089/api/bqbdetails?stockid='+stockid)
  }
  
    
 
  getmcbankniftyrealtime(){
    return this.http.get('http://localhost:8089/api/mcbankniftyrealtime')
  }
  getmcniftyrealtime(){
    return this.http.get('http://localhost:8089/api/mcniftyrealtime')
  }
  
  getmcvixrealtime(){
    return this.http.get('http://localhost:8089/api/mcvixrealtime')
  }
  getmcvixgraph(){
    return this.http.get('http://localhost:8089/api/mcvixgraph')
  }
  getntniftypcr() {
    return this.http.get('http://localhost:8089/api/ntniftypcr')
  }
  getadg(){
    return this.http.get('http://localhost:8089/api/adanigreen')
  }
  getetimesnews(){
    return this.http.get('http://localhost:8089/api/etimesnews')
  }
  getetsmacrossover(){
    return this.http.get('http://localhost:8089/api/etsmacrossover')
  }
  getetsmabullishcrossover(){
    return this.http.get('http://localhost:8089/api/etsmabullishcrossover')
  }
  getetvolumeshocker(){
    return this.http.get('http://localhost:8089/api/etvolumeshocker')
  }
  getethgainer(){
    return this.http.get('http://localhost:8089/api/ethgainers')
  }
  getethloser(){
    return this.http.get('http://localhost:8089/api/ethlosers')
  }
  getmcsnr(mcsymbol){
    return this.http.get('http://localhost:8089/api/moneycontrolsnr?mcsymbol='+mcsymbol)
  }
  getmcsnrm(mcsymbol){
    return this.http.get('http://localhost:8089/api/moneycontrolsnrm?mcsymbol='+mcsymbol)
  }
  getmcsnrindex(mcindexsymbol){
    return this.http.get('http://localhost:8089/api/moneycontrolsnrindex?mcindexsymbol='+mcindexsymbol)
  }
  getswot(mcsymbol){
    return this.http.get('http://localhost:8089/api/swot?mcsymbol='+mcsymbol)
  }
  getmcswot(mcsymbol){
    return this.http.get('http://localhost:8089/api/mcswot?mcsymbol='+mcsymbol)
  }
 
  getmcsnrw(mcsymbol){
    return this.http.get('http://localhost:8089/api/moneycontrolsnrw?mcsymbol='+mcsymbol)
  }
  getmcti(mcsymbol){
    return this.http.get('http://localhost:8089/api/mcti?mcsymbol='+mcsymbol)
  }
  getmctiw(mcsymbol){
    return this.http.get('http://localhost:8089/api/mctiw?mcsymbol='+mcsymbol)
  }
  getmctim(mcsymbol){
    return this.http.get('http://localhost:8089/api/mctim?mcsymbol='+mcsymbol)
  }
  getmcnifty50() {
    return this.http.get('http://localhost:8089/api/mcnifty50')
  }
  getnifty50frequent(){
    return this.http.get('http://localhost:8089/api/nifty50frequent')
  }
  getmcshare(mcsymbol,eqsymbol,stockid) {
    return this.http.get('http://localhost:8089/api/mcshare?mcsymbol='+mcsymbol+'&&eqsymbol='+eqsymbol+'&&stockid='+stockid)
  }
  getmcsharefrequent(mcsymbol,eqsymbol){
    return this.http.get('http://localhost:8089/api/mcsharefrequent?mcsymbol='+mcsymbol+'&&eqsymbol='+eqsymbol)
  }
 

  getmcniftybank() {
    return this.http.get('http://localhost:8089/api/mcniftybank')
  }
  getniftybankfrequent(){
    return this.http.get('http://localhost:8089/api/niftybankfrequent')
  }

  getmcniftypharma() {
    return this.http.get('http://localhost:8089/api/mcniftypharma')
  }
  getniftypharmafrequent(){
    return this.http.get('http://localhost:8089/api/niftypharmafrequent')
  }
  getnse(){
    return this.http.get('http://localhost:8089/api/nse')
  }
  getnse1(){
    return this.http.get('http://localhost:8089/api/nse1')
  }
  getnse2(){
    return this.http.get('http://localhost:8089/api/nse2')
  }
  gettltg(returnedname){
    return this.http.get('http://localhost:8089/api/tltg?returnedname='+returnedname)
  }
  gettltl(returnedname){
    return this.http.get('http://localhost:8089/api/tltl?returnedname='+returnedname)
  }
  gettl52h(){
    return this.http.get('http://localhost:8089/api/tl52h')
  }
  gettl52l(){
    return this.http.get('http://localhost:8089/api/tl52l')
  }
  gettlnear52h(){
    return this.http.get('http://localhost:8089/api/tlnear52h')
  }
  gettlnear52l(){
    return this.http.get('http://localhost:8089/api/tlnear52l')
  }
  getmcchartsdata(mcsymbol){
    return this.http.get('http://localhost:8089/api/mcchartsdata?mcsymbol='+mcsymbol)
  }
  getmcchartsdataohlc(mcsymbol){
    return this.http.get('http://localhost:8089/api/mcchartsdataohlc?mcsymbol='+mcsymbol)
  }
  getmchistoricalrating(mcsymbol){
    return this.http.get('http://localhost:8089/api/mchistoricalrating?mcsymbol='+mcsymbol)
  }
  gettlvs(returnedname) {
    
    return this.http.get('http://localhost:8089/api/tlvs?returnedname='+returnedname)
  }
  gettlrsiall() {
    
    return this.http.get('http://localhost:8089/api/tlrsiall')
  }
  gettlvhg(returnedname){
    return this.http.get('http://localhost:8089/api/tlvhg?returnedname='+returnedname)
  }

  getmcoverall(){
    return this.http.get('http://localhost:8089/api/mcoverall')
  }
  getmoneycontroloveralldaily(mcsymbol){
    return this.http.post('http://localhost:8089/api/moneycontroloveralldaily',mcsymbol)
  }
  getmcmovingaverages(mcsymbol){
    return this.http.post('http://localhost:8089/api/mcmovingaverages',mcsymbol)
  }
  getetcompanydata(companyid){
    return this.http.post('http://localhost:8089/api/etcompanydata',companyid)
  }
  getetcompanydataohlc(companyid){
    return this.http.get('http://localhost:8089/api/etcompanydataohlc?companyid='+companyid)
  }
  getetsectordetails(sectorid,etsectorname){
    return this.http.get('http://localhost:8089/api/etsectordetails?sectorid='+sectorid+'&&etsectorname='+etsectorname)
  }
  getetindexdetails(indexid,exchange){
    return this.http.get('http://localhost:8089/api/etindexdetails?indexid='+indexid+'&&exchange='+exchange)
  }
  
  getmmstockinforeco(stockid){
    return this.http.post('http://localhost:8089/api/mmstockinforeco',stockid)
  }
  getmccombine(mcsymbol){
    return this.http.post('http://localhost:8089/api/mccombine',mcsymbol)
  }
  gettrendlynepostdvm(tlid){
    return this.http.post('http://localhost:8089/api/trendlynepostdvm',tlid)
  }
  getmcmovingaveragesview(stockisin,dbname) {
    
    return this.http.get('http://localhost:8089/api/mcmovingaveragesview?stockisin='+stockisin+"&&dbname="+dbname)
  }
  getmcsectorcombine(mcsectorsymbol){
    return this.http.post('http://localhost:8089/api/mcsectorcombine',mcsectorsymbol)
  }
  getmoneycontrolti(mcsymbol){
    return this.http.post('http://localhost:8089/api/moneycontrolti',mcsymbol)
  }
  getbqbasicdetails(bqsymbol){
    return this.http.post('http://localhost:8089/api/bqbasicdetails',bqsymbol)
  }
  getbqnews(bqsymbol){
    return this.http.post('http://localhost:8089/api/bqnews',bqsymbol)
  }
  getindd(mcsymbol){
    return this.http.post('http://localhost:8089/api/indd',mcsymbol)
  }
 
  getmoneycontroloverallweekly(mcsymbol){
    return this.http.post('http://localhost:8089/api/moneycontroloverallweekly',mcsymbol)
  }
  getmoneycontroloverall(mcsymbol){
    return this.http.post('http://localhost:8089/api/moneycontroloverall',mcsymbol)
  }
  getpscore(mcsymbol){
    return this.http.post('http://localhost:8089/api/pscore',mcsymbol)
  }
  
  getmoneycontroloverall1(mcsymbol){
    return this.http.get('http://localhost:8089/api/moneycontroloverall1'+mcsymbol)
  }
  getmcvolume(mcsymbol){
    return this.http.post('http://localhost:8089/api/mcvolume',mcsymbol)
  }
  getmcinsight(mcsymbol){
    return this.http.post('http://localhost:8089/api/mcinsight',mcsymbol)
  }

  getdropdbmcdwm(){
    return this.http.get('http://localhost:8089/api/dropdbmcdwm')
  }
  getdropdbmcvolume() {
    return this.http.get('http://localhost:8089/api/dropdbmcvolume')
  }
  getdropmcmovingaverages(){
    return this.http.get('http://localhost:8089/api/dropmcmovingaverages')
  }
  getdroppscore(){
    return this.http.get('http://localhost:8089/api/droppscore')
  }
  getmcoverallviewdaily(dbname){
    return this.http.get('http://localhost:8089/api/mcoverallviewdaily?dbname='+dbname)
  }
  getmcvolumeview(dbname){
    return this.http.get('http://localhost:8089/api/mcvolumeview?dbname='+dbname)
  }

  getmcsectoroverallviewdwm(dbname){
    return this.http.get('http://localhost:8089/api/mcsectoroverallviewdwm?dbname='+dbname)
  }
  getmcsectoroverallviewdw(dbname){
    return this.http.get('http://localhost:8089/api/mcsectoroverallviewdw?dbname='+dbname)
  }
  getmcsectoroverallviewd(dbname){
    return this.http.get('http://localhost:8089/api/mcsectoroverallviewd?dbname='+dbname)
  }
  getmccombineview(dbname){
    return this.http.get('http://localhost:8089/api/mccombineview?dbname='+dbname)
  }
  
  
  getmcoverallviewweekly(dbname){
    return this.http.get('http://localhost:8089/api/mcoverallviewweekly?dbname='+dbname)
  }
  gettlvhl(returnedname){
    return this.http.get('http://localhost:8089/api/tlvhl?returnedname='+returnedname)
  }
  gettlrvpd(returnedname){
    return this.http.get('http://localhost:8089/api/tlrvpd?returnedname='+returnedname)
  }
  getnsedata(){
    return this.http.get('http://localhost:8089/api/nsedata')
  }
  getbqoptionsindexweekly(){
    return this.http.get('http://localhost:8089/api/bqoptionsindexweekly')
  }
  getbqoptionsindexmonthly(){
    return this.http.get('http://localhost:8089/api/bqoptionsindexmonthly')
  }
  getbqoptionsbnindexweekly(){
    return this.http.get('http://localhost:8089/api/bqoptionsbnindexweekly')
  }
  getbqoptionsbnindexmonthly(){
    return this.http.get('http://localhost:8089/api/bqoptionsbnindexmonthly')
  }
  getbqoptionslexpiryindex(){
    return this.http.get('http://localhost:8089/api/bqoptionslexpiryindex')
  }
  getbqoptionslexpirystock(){
    return this.http.get('http://localhost:8089/api/bqoptionslexpirystock')
  }
  getbqoptionsputcallrindex(){
    return this.http.get('http://localhost:8089/api/bqoptionsputcallrindex')
  }
  getbqoptionsputcallrstock(){
    return this.http.get('http://localhost:8089/api/bqoptionsputcallrstock')
  }
  getbqsectoralmovement(){
    return this.http.get('http://localhost:8089/api/bqsectoralmovement')
  }
  getfnodata(){
    return this.http.get('http://localhost:8089/api/fnodata')
  }
  getetindices(){
    return this.http.get('http://localhost:8089/api/etindices')
  }
  gettrendingstocks(){
    return this.http.get('http://localhost:8089/api/trendingstocks')
  }
  gettrendlynestocks1(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:8089/api/trendlynestocks1?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  gettrendlynestocks2(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:8089/api/trendlynestocks2?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  // gettrendlynestocks2(tlid){
  //   return this.http.get('http://localhost:8089/api/trendlynestocks2?tlid='+tlid)
  // }
  gettrendlynestocks3(tlid){
    return this.http.get('http://localhost:8089/api/trendlynestocks3?tlid='+tlid)
  }
  gettrendlynenifty(tlid) {
    return this.http.get('http://localhost:8089/api/trendlynenifty?tlid='+tlid)
  }

  getniftytradersallstocks(){
    return this.http.get('http://localhost:8089/api/niftytradersallstocks')
  }
  getetpost1(){
    return this.http.get('http://localhost:8089/api/etpost1')
  }
  getetDIIBuying() {
    return this.http.get('http://localhost:8089/api/etDIIBuying') 
  }
  
  
 
  
  
 
 
  getniftypharmadetails(){
    return this.http.get('http://localhost:8089/api/pharmadetails')
  }
  
 
  
 

  
  gettlbu(){
    return this.http.get('http://localhost:8089/api/tlbu')
  }
  gettlob(){
    return this.http.get('http://localhost:8089/api/tlob')
  }
    //Used in ohlc.component.ts
  getmcsd(mcsymbol){
    return this.http.get('http://localhost:8089/api/mcsd?mcsymbol='+mcsymbol)
  }
  //Used in Portfolio.component.ts
  getmcsd1(mcsymbol1) {
   
    return this.http.get('http://localhost:8089/api/mcsd1?mcsymbol1='+mcsymbol1)
  }
  getmcstockdetails(mcindexid) {
   
    return this.http.get('http://localhost:8089/api/mcstockdetails?mcindexid='+mcindexid)
  }
  getmcstockdetails1(mcindexid1) {
   
    return this.http.get('http://localhost:8089/api/mcstockdetails1?mcindexid1='+mcindexid1)
  }
  getmcindexchart(mcindexid) {
   
    return this.http.get('http://localhost:8089/api/mcindexchart?mcindexid='+mcindexid)
  }
  //Used in portfolio.component.ts
  getmcsd2(mcsymbol2){
    return this.http.get('http://localhost:8089/api/mcsd2?mcsymbol2='+mcsymbol2)
  }
  getmcpv(mcsymbol2){
    return this.http.get('http://localhost:8089/api/mcpv?mcsymbol='+mcsymbol2)
  }
  
  getniftymetald(){
    return this.http.get('http://localhost:8089/api/niftymetald')
  }
  getniftymetalw(){
    return this.http.get('http://localhost:8089/api/niftymetalw')
  }
  getniftymetalm(){
    return this.http.get('http://localhost:8089/api/niftymetalm')
  }
  getcnxitd(){
    return this.http.get('http://localhost:8089/api/cnxitd')
  }
  getcnxitw(){
    return this.http.get('http://localhost:8089/api/cnxitw')
  }
  getcnxitm(){
    return this.http.get('http://localhost:8089/api/cnxitm')
  }
  getniftyfind(){
    return this.http.get('http://localhost:8089/api/niftyfind')
  }
  getniftyfinw(){
    return this.http.get('http://localhost:8089/api/niftyfinw')
  }
  getniftyfinm(){
    return this.http.get('http://localhost:8089/api/niftyfinm')
  }
  getmcsectors(){
    return this.http.get('http://localhost:8089/api/mcsectors')
  }
  getmcsectorsdetailsd(mcsectorsymbol){
    return this.http.get('http://localhost:8089/api/mcsectorsdetailsd?mcsectorsymbol='+mcsectorsymbol)
  }
  getmcsectorgraph(indid){
    return this.http.get('http://localhost:8089/api/mcsectorgraph?indid='+indid)
  }
  getmcsectorsdetailsw(mcsectorsymbol){
    return this.http.get('http://localhost:8089/api/mcsectorsdetailsw?mcsectorsymbol='+mcsectorsymbol)
  }
  getmcsectorsdetailsm(mcsectorsymbol){
    return this.http.get('http://localhost:8089/api/mcsectorsdetailsm?mcsectorsymbol='+mcsectorsymbol)
  }
  getetsectors(){
    return this.http.get('http://localhost:8089/api/etsectors')
  }
  getetimpdata(){
    return this.http.get('http://localhost:8089/api/etimpdata')
  }
 
  getetrecos(){
    return this.http.get('http://localhost:8089/api/etrecos')
  }
  getmmrecos(){
    return this.http.get('http://localhost:8089/api/mmrecos')
  }
  getmmmaxbuyrecos(){
    return this.http.get('http://localhost:8089/api/mmmaxbuyrecos')
  }
  getetmacdbuy(){
    return this.http.get('http://localhost:8089/api/etmacdbuy')
  }
  getetmacdsell(){
    return this.http.get('http://localhost:8089/api/etmacdsell')
  }
 


}




