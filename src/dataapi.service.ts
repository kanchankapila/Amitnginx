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
    return this.http.post('http://localhost:8090/api/save',data)
  }
  setwatchlist(isin){
    return this.http.post('http://localhost:8090/api/watchlistinsert',isin)
  }
  nsepostdata1(eqsymbol1) {
    return this.http.post('http://localhost:8090/api/nsepostdata1',eqsymbol1) 
  }
  nsepostdata2(eqsymbol1) {
   
    return this.http.post('http://localhost:8090/api/nsepostdata2',eqsymbol1) 
  }
  getet1() {
   
    return this.http.get('http://localhost:8090/api/et1') 
  }
  chartink(abc) {
    return this.http.post('http://localhost:8090/api/chartink',abc) 
  }
  chartinkpvbreakout() {
    return this.http.get('http://localhost:8090/api/chartinkpvbreakout') 
  }
  gettlfpg() {
    return this.http.get('http://localhost:8090/api/tlfpg') 
  }
  gettlfcg() {
    return this.http.get('http://localhost:8090/api/tlfcg') 
  }
  gettlfmav() {
    return this.http.get('http://localhost:8090/api/tlfmav') 
  }
  gettlfmac() {
    return this.http.get('http://localhost:8090/api/tlfmac') 
  }
  gettloig() {
    return this.http.get('http://localhost:8090/api/tloig') 
  }
  gettloil() {
    return this.http.get('http://localhost:8090/api/tloil') 
  }
  gettloip() {
    return this.http.get('http://localhost:8090/api/tloip') 
  }
  gettloid() {
    return this.http.get('http://localhost:8090/api/tloid') 
  }
  gettloipg() {
    return this.http.get('http://localhost:8090/api/tloipg') 
  }
  gettloicg() {
    return this.http.get('http://localhost:8090/api/tloicg') 
  }
  gettlropd() {
    return this.http.get('http://localhost:8090/api/tlropd') 
  }
  gettlropw() {
    return this.http.get('http://localhost:8090/api/tlropw') 
  }
  
  gettlrupw() {
    return this.http.get('http://localhost:8090/api/tlrupw') 
  }
  
  gettlrupd() {
    return this.http.get('http://localhost:8090/api/tlrupd') 
  }
  chartinkbullishmomentum() {
    return this.http.get('http://localhost:8090/api/chartinkbullishmomentum')  
  }
  gnewsapi(stockname) {
    return this.http.get('http://localhost:8090/api/gnewsapi?&&stockname='+stockname)
  }
  gnewsapiall() {
    return this.http.get('http://localhost:8090/api/gnewsapiall')
  }
  deletewatchlist(isin){
    return this.http.post('http://localhost:8090/api/watchlistdelete',isin)
  }


  downloadCSV(param){
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=full&symbol='+param+'&apikey=LKXTE-XZF6W-Q3ASG-R88WE-XFR8V&datatype=csv',
                          {  responseType: 'blob' as 'json'})

  }
  


  getkite1(timeframe,eqsymbol){
    return this.http.get('http://localhost:8090/api/kite1?timeframe='+timeframe+'&eqsymbol='+eqsymbol)
  }
  getkitestockreports(){
    return this.http.get('http://localhost:8090/api/kitestockreports')
  }
  getnsetry1(symbol){
    return this.http.get('http://localhost:8090/api/nsetry1?symbol='+symbol)
  }
 
 nseresults(){
    return this.http.get('http://localhost:8090/api/nseresults')
  }
  nseinstrading() {
    return this.http.get('http://localhost:8090/api/nseinstrading')
  }
  nsedatastockohlc1(stock){
    return this.http.get('http://localhost:8090/api/nsedatastockohlc1?stock='+stock)
  }
  nsedatasioi(){
    return this.http.get('http://localhost:8090/api/nsedatasioi')
  }
  nsedatastockoi(stock){
    return this.http.get('http://localhost:8090/api/nsedatastockoi?stock='+stock)
  }
  nsedatapioii(){
    return this.http.get('http://localhost:8090/api/nsedatapioii')
  }
  nsedataniftyoi(){
    return this.http.get('http://localhost:8090/api/nsedataniftyoi')
  }
  nsedatabniftyoi(){
    return this.http.get('http://localhost:8090/api/nsedatabniftyoi')
  }
  opstradatanifty(nextexpiry) {
    return this.http.get('http://localhost:8090/api/opstradatanifty?nextexpiry=' + nextexpiry)
   }
  opstradatabanknifty(nextexpiry) {
    return this.http.get('http://localhost:8090/api/opstradatabanknifty?nextexpiry=' + nextexpiry)
   }
  opstrastockdata(eqsymbol,nextexpirymonthly) {
    return this.http.get('http://localhost:8090/api/opstrastockdata?nextexpirymonthly='+nextexpirymonthly+'&eqsymbol='+eqsymbol)
  
  }
  opstraexpirydatesmonthly(eqsymbol){
    return this.http.get('http://localhost:8090/api/opstraexpirydatesmonthly')
  }
  
  opstraexpirydates(){
    return this.http.get('http://localhost:8090/api/opstraexpirydates')
  }
  nsedataadvdec(){
    return this.http.get('http://localhost:8090/api/nsedataadvdec')
  }
  nsestockhistdata(stock) {
    return this.http.get('http://localhost:8090/api/nsestockhistdata?stock='+stock)
  }
  nsedataindices(){
    return this.http.get('http://localhost:8090/api/nsedataindices')
  }

  
  nsedatastockohlc2(stock){
    return this.http.get('http://localhost:8090/api/nsedatastockohlc2?stock='+stock)
  }
  nsedata3(){
    return this.http.get('http://localhost:8090/api/nsedata3')
  }
  getmccurrent(dbname){
    return this.http.get('http://localhost:8090/api/mccurrent?dbname='+dbname)
  }
  getIndicatorsma(stock,dbname){
    return this.http.get('http://localhost:8090/api/indicatorsma1?stock='+stock+"&&dbname="+dbname)
  }
  
  sendEmail(user){
    return this.http.post('http://localhost:8090/api/sendmail',user)
  }
  
  getStockData(stock,dbname){
    //return this.http.get('http://localhost:8090/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8090/api/stockdb?stock='+stock+"&&dbname="+dbname)
  }
  getchartinkvshocker(dbname){
    //return this.http.get('http://localhost:8090/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8090/api/chartinkvshocker?'+"dbname="+dbname)
  }

  getchartinkemacrs59(dbname){
    //return this.http.get('http://localhost:8090/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8090/api/chartinkemacrs59?'+"dbname="+dbname)
  }
  getchartinkemacrs920(dbname){
    //return this.http.get('http://localhost:8090/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8090/api/chartinkemacrs920?'+"dbname="+dbname)
  }
  getchartinkgapup(dbname){
    //return this.http.get('http://localhost:8090/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8090/api/chartinkgapup?'+"dbname="+dbname)
  }
  getchartinkgapdown(dbname){
    //return this.http.get('http://localhost:8090/api/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:8090/api/chartinkgapdown?'+"dbname="+dbname)
  }
  
  getmcpscore(dbname){
    return this.http.get('http://localhost:8090/api/mcpscore?dbname='+dbname)
  }


  getohlcDetails(stock,dbname){
    return this.http.get('http://localhost:8090/api/ohlc1?stock='+stock+"&&dbname="+dbname)
  }
  getgooglenews(stock,dbname){
    return this.http.get('http://localhost:8090/api/googlenews?stock='+stock+"&&dbname="+dbname)
  }
  getgnewsone(dbname){
    return this.http.get('http://localhost:8090/api/gnewsaone?dbname='+dbname)
  }
  getportfolio(dbname){
    return this.http.get('http://localhost:8090/api/portfolio?dbname='+dbname)
  }
  getportfolioAK(dbname){
    return this.http.get('http://localhost:8090/api/portfolioAK?dbname='+dbname)
  }
  
  getdbdata1(dbname) {
    
    return this.http.get('http://localhost:8090/api/dbdata1?dbname='+dbname)
  }
  getdbjdata(eqsymbol,dbname) {
  
    return this.http.get('http://localhost:8090/api/dbjdata?stock='+eqsymbol+'&&dbname='+dbname)
  }
  getdbjdataall(eqsymbol,dbname) {
  
    return this.http.get('http://localhost:8090/api/dbjdataall?stock='+eqsymbol+'&&dbname='+dbname)
  }
  getportfolioKK(dbname){
    return this.http.get('http://localhost:8090/api/portfolioKK?dbname='+dbname)
  }
  getGainers(){
    return this.http.get('http://localhost:8090/api/Gainers')
  }
  getResults(){
    return this.http.get('http://localhost:8090/api/Results')
  }
  getmmmarkets(){
    return this.http.get('http://localhost:8090/api/mmmarkets')
  }
  
  getsnrDetails(stock,dbname){
  return this.http.get('http://localhost:8090/api/snr1?stock='+stock+"&&dbname=investingpivot_D")
  }
  getbqmovement(stockid){
    return this.http.get('http://localhost:8090/api/bqmovement?stockid='+stockid)
  }
  
  getbqgainingsectors(){
    return this.http.get('http://localhost:8090/api/bqgainingsectors')
  }
  getbqgainingsectorsstocks(sectorid){
    return this.http.get('http://localhost:8090/api/bqgainingsectorsstocks?sectorid='+sectorid)
  }
  getbqgainingsectorsstocksdetails(sectorid){
    return this.http.get('http://localhost:8090/api/bqgainingsectorsstocksdetails?sectorid='+sectorid)
  }
  getmmmacd(stockid){
    return this.http.get('http://localhost:8090/api/mmmacd?stockid='+stockid)
  }
  getmmstockinfo(stockid){
    return this.http.get('http://localhost:8090/api/mmstockinfo?stockid='+stockid)
  }
  getmmpmov(stockid){
    return this.http.get('http://localhost:8090/api/mmpmov?stockid='+stockid)
  }
  getbqadvdec(){
    return this.http.get('http://localhost:8090/api/bqadvdec')
  }
  getnsexchange(){
    return this.http.get('http://localhost:8090/api/nsexchange')
  }
  getsescreener(){
    return this.http.get('http://localhost:8090/api/sescreener')
  }
  getmmrsi(stockid){
    return this.http.get('http://localhost:8090/api/mmrsi?stockid='+stockid)
  }
  getmmbb(stockid){
    return this.http.get('http://localhost:8090/api/mmbb?stockid='+stockid)
  }
  getmmma(stockid){
    return this.http.get('http://localhost:8090/api/mmma?stockid='+stockid)
  }
  getmmkst(stockid){
    return this.http.get('http://localhost:8090/api/mmkst?stockid='+stockid)
  }
  getmmdow(stockid){
    return this.http.get('http://localhost:8090/api/mmdow?stockid='+stockid)
  }
  getmmobv(stockid){
    return this.http.get('http://localhost:8090/api/mmobv?stockid='+stockid)
  }
  getmmbank(indid){
    return this.http.get('http://localhost:8090/api/mmbank?indid='+indid)
  }
  getmmpeers(stockid){
    return this.http.get('http://localhost:8090/api/mmpeers?stockid='+stockid)
  }
  getmmtechscore(stockid){
    return this.http.get('http://localhost:8090/api/mmtechscore?stockid='+stockid)
  }
  getbqma(type){
    return this.http.get('http://localhost:8090/api/bqma?type='+type)
  }
  getbqpdvd(type){
    return this.http.get('http://localhost:8090/api/bqpdvd?type='+type)
  }
  getbqpdvi(type){
    return this.http.get('http://localhost:8090/api/bqpdvi?type='+type)
  }
  getbqpivd(type){
    return this.http.get('http://localhost:8090/api/bqpivd?type='+type)
  }
  getbqpivi(type){
    return this.http.get('http://localhost:8090/api/bqpivi?type='+type)
  }
  getbqpfvi(type){
    return this.http.get('http://localhost:8090/api/bqpfvi?type='+type)
  }
  getbq52h(type){
    return this.http.get('http://localhost:8090/api/bq52wkh?type='+type)
  }
  getbq52l(type){
    return this.http.get('http://localhost:8090/api/bq52wkl?type='+type)
  }
  getbqc52h(type){
    return this.http.get('http://localhost:8090/api/bqc52h?type='+type)
  }
  getbqc52l(type){
    return this.http.get('http://localhost:8090/api/bqc52l?type='+type)
  }
  getbqvolatile(type){
    return this.http.get('http://localhost:8090/api/bqvolatile?type='+type)
  }
  getbqffh(type){
    return this.http.get('http://localhost:8090/api/bqffh?type='+type)
  }
  getbqrfl(type){
    return this.http.get('http://localhost:8090/api/bqrfl?type='+type)
  }
  getbqbulkdeal(type){
    return this.http.get('http://localhost:8090/api/bqbulkdeal?type='+type)
  }
  getbqblockdeal(type){
    return this.http.get('http://localhost:8090/api/bqblockdeal?type='+type)
  }
  getbqinsider(type){
    return this.http.get('http://localhost:8090/api/bqinsider?type='+type)
  }
  getbqob(type){
    return this.http.get('http://localhost:8090/api/bqob?type='+type)
  }
  getbqos(type){
    return this.http.get('http://localhost:8090/api/bqos?type='+type)
  }
  getbqtg(){
    return this.http.get('http://localhost:8090/api/bqtg')
  }
  getbqtl(){
    return this.http.get('http://localhost:8090/api/bqtl')
  }
  getbqpricestats(stockid){
    return this.http.get('http://localhost:8090/api/bqprickestats?stockid='+stockid)
  }
  getbqfundamentals(stockid){
    return this.http.get('http://localhost:8090/api/bqfundamentals?stockid='+stockid)
  }
  getbqmovingaverages(stockid){
    return this.http.get('http://localhost:8090/api/bqmovingaverages?stockid='+stockid)
  }
  getbqdelvol(stockid){
    return this.http.get('http://localhost:8090/api/bqdelvol?stockid='+stockid)
  }
  getbqqresults(stockid){
    return this.http.get('http://localhost:8090/api/bqqresults?stockid='+stockid)
  }
  getbqtr(stockid){
    return this.http.get('http://localhost:8090/api/bqtr?stockid='+stockid)
  }
  getbqss(stockid){
    return this.http.get('http://localhost:8090/api/bqss?stockid='+stockid)
  }
  getbqsc(stockid){
    return this.http.get('http://localhost:8090/api/bqsc?stockid='+stockid)
  }
  getbqph(stockid){
    return this.http.get('http://localhost:8090/api/bqph?stockid='+stockid)
  }
  getbqks(stockisin){
    return this.http.get('http://localhost:8090/api/bqks?stockisin='+stockisin)
  }
  getbqannouncements(stockisin){
    return this.http.get('http://localhost:8090/api/bqannouncements?stockisin='+stockisin)
  }
  getbqca(stockid){
    return this.http.get('http://localhost:8090/api/bqca?stockid='+stockid)
  }
  getbqitnews(bqnames) {
    
    return this.http.get('http://localhost:8090/api/bqitnews?bqnames='+bqnames)
  }
  getbqpd(stockid){
    return this.http.get('http://localhost:8090/api/bqpd?stockid='+stockid)
  }
  getbqbdetails(stockid){
    return this.http.get('http://localhost:8090/api/bqbdetails?stockid='+stockid)
  }
  
    
 
  getmcbankniftyrealtime(){
    return this.http.get('http://localhost:8090/api/mcbankniftyrealtime')
  }
  getmcniftyrealtime(){
    return this.http.get('http://localhost:8090/api/mcniftyrealtime')
  }
  
  getmcvixrealtime(){
    return this.http.get('http://localhost:8090/api/mcvixrealtime')
  }
  getmcvixgraph(){
    return this.http.get('http://localhost:8090/api/mcvixgraph')
  }
  getntniftypcr() {
    return this.http.get('http://localhost:8090/api/ntniftypcr')
  }
  getadg(){
    return this.http.get('http://localhost:8090/api/adanigreen')
  }
  getetimesnews(){
    return this.http.get('http://localhost:8090/api/etimesnews')
  }
  getetsmacrossover(){
    return this.http.get('http://localhost:8090/api/etsmacrossover')
  }
  getetsmabullishcrossover(){
    return this.http.get('http://localhost:8090/api/etsmabullishcrossover')
  }
  getetvolumeshocker(){
    return this.http.get('http://localhost:8090/api/etvolumeshocker')
  }
  getethgainer(){
    return this.http.get('http://localhost:8090/api/ethgainers')
  }
  getethloser(){
    return this.http.get('http://localhost:8090/api/ethlosers')
  }
  getmcsnr(mcsymbol){
    return this.http.get('http://localhost:8090/api/moneycontrolsnr?mcsymbol='+mcsymbol)
  }
  getmcsnrm(mcsymbol){
    return this.http.get('http://localhost:8090/api/moneycontrolsnrm?mcsymbol='+mcsymbol)
  }
  getmcsnrindex(mcindexsymbol){
    return this.http.get('http://localhost:8090/api/moneycontrolsnrindex?mcindexsymbol='+mcindexsymbol)
  }
  getswot(mcsymbol){
    return this.http.get('http://localhost:8090/api/swot?mcsymbol='+mcsymbol)
  }
  getmcswot(mcsymbol){
    return this.http.get('http://localhost:8090/api/mcswot?mcsymbol='+mcsymbol)
  }
 
  getmcsnrw(mcsymbol){
    return this.http.get('http://localhost:8090/api/moneycontrolsnrw?mcsymbol='+mcsymbol)
  }
  getmcti(mcsymbol){
    return this.http.get('http://localhost:8090/api/mcti?mcsymbol='+mcsymbol)
  }
  getmctiw(mcsymbol){
    return this.http.get('http://localhost:8090/api/mctiw?mcsymbol='+mcsymbol)
  }
  getmctim(mcsymbol){
    return this.http.get('http://localhost:8090/api/mctim?mcsymbol='+mcsymbol)
  }
  getmcnifty50() {
    return this.http.get('http://localhost:8090/api/mcnifty50')
  }
  getnifty50frequent(){
    return this.http.get('http://localhost:8090/api/nifty50frequent')
  }
  getmcshare(mcsymbol,eqsymbol,stockid) {
    return this.http.get('http://localhost:8090/api/mcshare?mcsymbol='+mcsymbol+'&&eqsymbol='+eqsymbol+'&&stockid='+stockid)
  }
  getmcsharefrequent(mcsymbol,eqsymbol){
    return this.http.get('http://localhost:8090/api/mcsharefrequent?mcsymbol='+mcsymbol+'&&eqsymbol='+eqsymbol)
  }
 

  getmcniftybank() {
    return this.http.get('http://localhost:8090/api/mcniftybank')
  }
  getniftybankfrequent(){
    return this.http.get('http://localhost:8090/api/niftybankfrequent')
  }

  getmcniftypharma() {
    return this.http.get('http://localhost:8090/api/mcniftypharma')
  }
  getniftypharmafrequent(){
    return this.http.get('http://localhost:8090/api/niftypharmafrequent')
  }
  getnse(){
    return this.http.get('http://localhost:8090/api/nse')
  }
  getnse1(){
    return this.http.get('http://localhost:8090/api/nse1')
  }
  getnse2(){
    return this.http.get('http://localhost:8090/api/nse2')
  }
  gettltg(returnedname){
    return this.http.get('http://localhost:8090/api/tltg?returnedname='+returnedname)
  }
  gettltl(returnedname){
    return this.http.get('http://localhost:8090/api/tltl?returnedname='+returnedname)
  }
  gettl52h(){
    return this.http.get('http://localhost:8090/api/tl52h')
  }
  gettl52l(){
    return this.http.get('http://localhost:8090/api/tl52l')
  }
  gettlnear52h(){
    return this.http.get('http://localhost:8090/api/tlnear52h')
  }
  gettlnear52l(){
    return this.http.get('http://localhost:8090/api/tlnear52l')
  }
  getmcchartsdata(mcsymbol){
    return this.http.get('http://localhost:8090/api/mcchartsdata?mcsymbol='+mcsymbol)
  }
  getmcchartsdataohlc(mcsymbol){
    return this.http.get('http://localhost:8090/api/mcchartsdataohlc?mcsymbol='+mcsymbol)
  }
  getmchistoricalrating(mcsymbol){
    return this.http.get('http://localhost:8090/api/mchistoricalrating?mcsymbol='+mcsymbol)
  }
  gettlvs(returnedname) {
    
    return this.http.get('http://localhost:8090/api/tlvs?returnedname='+returnedname)
  }
  gettlrsiall() {
    
    return this.http.get('http://localhost:8090/api/tlrsiall')
  }
  gettlvhg(returnedname){
    return this.http.get('http://localhost:8090/api/tlvhg?returnedname='+returnedname)
  }

  getmcoverall(){
    return this.http.get('http://localhost:8090/api/mcoverall')
  }
  getmoneycontroloveralldaily(mcsymbol){
    return this.http.post('http://localhost:8090/api/moneycontroloveralldaily',mcsymbol)
  }
  getmcmovingaverages(mcsymbol){
    return this.http.post('http://localhost:8090/api/mcmovingaverages',mcsymbol)
  }
  getetcompanydata(companyid){
    return this.http.post('http://localhost:8090/api/etcompanydata',companyid)
  }
  getetcompanydataohlc(companyid){
    return this.http.get('http://localhost:8090/api/etcompanydataohlc?companyid='+companyid)
  }
  getetsectordetails(sectorid,etsectorname){
    return this.http.get('http://localhost:8090/api/etsectordetails?sectorid='+sectorid+'&&etsectorname='+etsectorname)
  }
  getetindexdetails(indexid,exchange){
    return this.http.get('http://localhost:8090/api/etindexdetails?indexid='+indexid+'&&exchange='+exchange)
  }
  
  getmmstockinforeco(stockid){
    return this.http.post('http://localhost:8090/api/mmstockinforeco',stockid)
  }
  getmccombine(mcsymbol){
    return this.http.post('http://localhost:8090/api/mccombine',mcsymbol)
  }
  gettrendlynepostdvm(tlid){
    return this.http.post('http://localhost:8090/api/trendlynepostdvm',tlid)
  }
  getmcmovingaveragesview(stockisin,dbname) {
    
    return this.http.get('http://localhost:8090/api/mcmovingaveragesview?stockisin='+stockisin+"&&dbname="+dbname)
  }
  getmcsectorcombine(mcsectorsymbol){
    return this.http.post('http://localhost:8090/api/mcsectorcombine',mcsectorsymbol)
  }
  getmoneycontrolti(mcsymbol){
    return this.http.post('http://localhost:8090/api/moneycontrolti',mcsymbol)
  }
  getbqbasicdetails(bqsymbol){
    return this.http.post('http://localhost:8090/api/bqbasicdetails',bqsymbol)
  }
  getbqnews(bqsymbol){
    return this.http.post('http://localhost:8090/api/bqnews',bqsymbol)
  }
  getindd(mcsymbol){
    return this.http.post('http://localhost:8090/api/indd',mcsymbol)
  }
 
  getmoneycontroloverallweekly(mcsymbol){
    return this.http.post('http://localhost:8090/api/moneycontroloverallweekly',mcsymbol)
  }
  getmoneycontroloverall(mcsymbol){
    return this.http.post('http://localhost:8090/api/moneycontroloverall',mcsymbol)
  }
  getpscore(mcsymbol){
    return this.http.post('http://localhost:8090/api/pscore',mcsymbol)
  }
  
  getmoneycontroloverall1(mcsymbol){
    return this.http.get('http://localhost:8090/api/moneycontroloverall1'+mcsymbol)
  }
  getmcvolume(mcsymbol){
    return this.http.post('http://localhost:8090/api/mcvolume',mcsymbol)
  }
  getmcinsight(mcsymbol){
    return this.http.post('http://localhost:8090/api/mcinsight',mcsymbol)
  }

  getdropdbmcdwm(){
    return this.http.get('http://localhost:8090/api/dropdbmcdwm')
  }
  getdropdbmcvolume() {
    return this.http.get('http://localhost:8090/api/dropdbmcvolume')
  }
  getdropmcmovingaverages(){
    return this.http.get('http://localhost:8090/api/dropmcmovingaverages')
  }
  getdroppscore(){
    return this.http.get('http://localhost:8090/api/droppscore')
  }
  getmcoverallviewdaily(dbname){
    return this.http.get('http://localhost:8090/api/mcoverallviewdaily?dbname='+dbname)
  }
  getmcvolumeview(dbname){
    return this.http.get('http://localhost:8090/api/mcvolumeview?dbname='+dbname)
  }

  getmcsectoroverallviewdwm(dbname){
    return this.http.get('http://localhost:8090/api/mcsectoroverallviewdwm?dbname='+dbname)
  }
  getmcsectoroverallviewdw(dbname){
    return this.http.get('http://localhost:8090/api/mcsectoroverallviewdw?dbname='+dbname)
  }
  getmcsectoroverallviewd(dbname){
    return this.http.get('http://localhost:8090/api/mcsectoroverallviewd?dbname='+dbname)
  }
  getmccombineview(dbname){
    return this.http.get('http://localhost:8090/api/mccombineview?dbname='+dbname)
  }
  
  
  getmcoverallviewweekly(dbname){
    return this.http.get('http://localhost:8090/api/mcoverallviewweekly?dbname='+dbname)
  }
  gettlvhl(returnedname){
    return this.http.get('http://localhost:8090/api/tlvhl?returnedname='+returnedname)
  }
  gettlrvpd(returnedname){
    return this.http.get('http://localhost:8090/api/tlrvpd?returnedname='+returnedname)
  }
  getnsedata(){
    return this.http.get('http://localhost:8090/api/nsedata')
  }
  getbqoptionsindexweekly(){
    return this.http.get('http://localhost:8090/api/bqoptionsindexweekly')
  }
  getbqoptionsindexmonthly(){
    return this.http.get('http://localhost:8090/api/bqoptionsindexmonthly')
  }
  getbqoptionsbnindexweekly(){
    return this.http.get('http://localhost:8090/api/bqoptionsbnindexweekly')
  }
  getbqoptionsbnindexmonthly(){
    return this.http.get('http://localhost:8090/api/bqoptionsbnindexmonthly')
  }
  getbqoptionslexpiryindex(){
    return this.http.get('http://localhost:8090/api/bqoptionslexpiryindex')
  }
  getbqoptionslexpirystock(){
    return this.http.get('http://localhost:8090/api/bqoptionslexpirystock')
  }
  getbqoptionsputcallrindex(){
    return this.http.get('http://localhost:8090/api/bqoptionsputcallrindex')
  }
  getbqoptionsputcallrstock(){
    return this.http.get('http://localhost:8090/api/bqoptionsputcallrstock')
  }
  getbqsectoralmovement(){
    return this.http.get('http://localhost:8090/api/bqsectoralmovement')
  }
  getfnodata(){
    return this.http.get('http://localhost:8090/api/fnodata')
  }
  getetindices(){
    return this.http.get('http://localhost:8090/api/etindices')
  }
  gettrendingstocks(){
    return this.http.get('http://localhost:8090/api/trendingstocks')
  }
  gettrendlynestocks1(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:8090/api/trendlynestocks1?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  gettrendlynestocks2(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:8090/api/trendlynestocks2?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  // gettrendlynestocks2(tlid){
  //   return this.http.get('http://localhost:8090/api/trendlynestocks2?tlid='+tlid)
  // }
  gettrendlynestocks3(tlid){
    return this.http.get('http://localhost:8090/api/trendlynestocks3?tlid='+tlid)
  }
  gettrendlynenifty(tlid) {
    return this.http.get('http://localhost:8090/api/trendlynenifty?tlid='+tlid)
  }

  getniftytradersallstocks(){
    return this.http.get('http://localhost:8090/api/niftytradersallstocks')
  }
  getetpost1(){
    return this.http.get('http://localhost:8090/api/etpost1')
  }
  getetDIIBuying() {
    return this.http.get('http://localhost:8090/api/etDIIBuying') 
  }
  
  
 
  
  
 
 
  getniftypharmadetails(){
    return this.http.get('http://localhost:8090/api/pharmadetails')
  }
  
 
  
 

  
  gettlbu(){
    return this.http.get('http://localhost:8090/api/tlbu')
  }
  gettlob(){
    return this.http.get('http://localhost:8090/api/tlob')
  }
    //Used in ohlc.component.ts
  getmcsd(mcsymbol){
    return this.http.get('http://localhost:8090/api/mcsd?mcsymbol='+mcsymbol)
  }
  //Used in Portfolio.component.ts
  getmcsd1(mcsymbol1) {
   
    return this.http.get('http://localhost:8090/api/mcsd1?mcsymbol1='+mcsymbol1)
  }
  getmcstockdetails(mcindexid) {
   
    return this.http.get('http://localhost:8090/api/mcstockdetails?mcindexid='+mcindexid)
  }
  getmcstockdetails1(mcindexid1) {
   
    return this.http.get('http://localhost:8090/api/mcstockdetails1?mcindexid1='+mcindexid1)
  }
  getmcindexchart(mcindexid) {
   
    return this.http.get('http://localhost:8090/api/mcindexchart?mcindexid='+mcindexid)
  }
  //Used in portfolio.component.ts
  getmcsd2(mcsymbol2){
    return this.http.get('http://localhost:8090/api/mcsd2?mcsymbol2='+mcsymbol2)
  }
  getmcpv(mcsymbol2){
    return this.http.get('http://localhost:8090/api/mcpv?mcsymbol='+mcsymbol2)
  }
  
  getniftymetald(){
    return this.http.get('http://localhost:8090/api/niftymetald')
  }
  getniftymetalw(){
    return this.http.get('http://localhost:8090/api/niftymetalw')
  }
  getniftymetalm(){
    return this.http.get('http://localhost:8090/api/niftymetalm')
  }
  getcnxitd(){
    return this.http.get('http://localhost:8090/api/cnxitd')
  }
  getcnxitw(){
    return this.http.get('http://localhost:8090/api/cnxitw')
  }
  getcnxitm(){
    return this.http.get('http://localhost:8090/api/cnxitm')
  }
  getniftyfind(){
    return this.http.get('http://localhost:8090/api/niftyfind')
  }
  getniftyfinw(){
    return this.http.get('http://localhost:8090/api/niftyfinw')
  }
  getniftyfinm(){
    return this.http.get('http://localhost:8090/api/niftyfinm')
  }
  getmcsectors(){
    return this.http.get('http://localhost:8090/api/mcsectors')
  }
  getmcsectorsdetailsd(mcsectorsymbol){
    return this.http.get('http://localhost:8090/api/mcsectorsdetailsd?mcsectorsymbol='+mcsectorsymbol)
  }
  getmcsectorgraph(indid){
    return this.http.get('http://localhost:8090/api/mcsectorgraph?indid='+indid)
  }
  getmcsectorsdetailsw(mcsectorsymbol){
    return this.http.get('http://localhost:8090/api/mcsectorsdetailsw?mcsectorsymbol='+mcsectorsymbol)
  }
  getmcsectorsdetailsm(mcsectorsymbol){
    return this.http.get('http://localhost:8090/api/mcsectorsdetailsm?mcsectorsymbol='+mcsectorsymbol)
  }
  getetsectors(){
    return this.http.get('http://localhost:8090/api/etsectors')
  }
  getetimpdata(){
    return this.http.get('http://localhost:8090/api/etimpdata')
  }
 
  getetrecos(){
    return this.http.get('http://localhost:8090/api/etrecos')
  }
  getmmrecos(){
    return this.http.get('http://localhost:8090/api/mmrecos')
  }
  getmmmaxbuyrecos(){
    return this.http.get('http://localhost:8090/api/mmmaxbuyrecos')
  }
  getetmacdbuy(){
    return this.http.get('http://localhost:8090/api/etmacdbuy')
  }
  getetmacdsell(){
    return this.http.get('http://localhost:8090/api/etmacdsell')
  }
 


}




