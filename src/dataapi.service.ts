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
    return this.http.post('http://localhost:3000/save',data)
  }
  setwatchlist(isin){
    return this.http.post('http://localhost:3000/watchlistinsert',isin)
  }
  nsepostdata1(eqsymbol1) {
    return this.http.post('http://localhost:3000/nsepostdata1',eqsymbol1) 
  }
  nsepostdata2(eqsymbol1) {
   
    return this.http.post('http://localhost:3000/nsepostdata2',eqsymbol1) 
  }
  chartink(abc) {
    return this.http.post('http://localhost:3000/chartink',abc) 
  }
  chartinkpvbreakout() {
    return this.http.get('http://localhost:3000/chartinkpvbreakout') 
  }
  gettlfpg() {
    return this.http.get('http://localhost:3000/tlfpg') 
  }
  gettlfcg() {
    return this.http.get('http://localhost:3000/tlfcg') 
  }
  gettlfmav() {
    return this.http.get('http://localhost:3000/tlfmav') 
  }
  gettlfmac() {
    return this.http.get('http://localhost:3000/tlfmac') 
  }
  gettloig() {
    return this.http.get('http://localhost:3000/tloig') 
  }
  gettloil() {
    return this.http.get('http://localhost:3000/tloil') 
  }
  gettloip() {
    return this.http.get('http://localhost:3000/tloip') 
  }
  gettloid() {
    return this.http.get('http://localhost:3000/tloid') 
  }
  gettloipg() {
    return this.http.get('http://localhost:3000/tloipg') 
  }
  gettloicg() {
    return this.http.get('http://localhost:3000/tloicg') 
  }
  gettlropd() {
    return this.http.get('http://localhost:3000/tlropd') 
  }
  gettlropw() {
    return this.http.get('http://localhost:3000/tlropw') 
  }
  
  gettlrupw() {
    return this.http.get('http://localhost:3000/tlrupw') 
  }
  
  gettlrupd() {
    return this.http.get('http://localhost:3000/tlrupd') 
  }
  chartinkbullishmomentum() {
    return this.http.get('http://localhost:3000/chartinkbullishmomentum')  
  }
  gnewsapi(stockname) {
    return this.http.get('http://localhost:3000/gnewsapi?&&stockname='+stockname)
  }
  gnewsapiall() {
    return this.http.get('http://localhost:3000/gnewsapiall')
  }
  deletewatchlist(isin){
    return this.http.post('http://localhost:3000/watchlistdelete',isin)
  }


  downloadCSV(param){
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=full&symbol='+param+'&apikey=LKXTE-XZF6W-Q3ASG-R88WE-XFR8V&datatype=csv',
                          {  responseType: 'blob' as 'json'})

  }
  



  getStockDetails(stock,dbname){
    return this.http.get('http://localhost:3000/dashboard1?stock='+stock+"&&dbname="+dbname)
  }
  getwatchlistview(dbname){
    return this.http.get('http://localhost:3000/watchlistview?dbname='+dbname)
  }
  getUpdate(){
    return this.http.get('http://localhost:3000/getUpdate')
  }
  getIndicators(stock,dbname){
    return this.http.get('http://localhost:3000/indicators1?stock='+stock+"&&dbname="+dbname)
  }
  getkite1(timeframe,eqsymbol){
    return this.http.get('http://localhost:3000/kite1?timeframe='+timeframe+'&eqsymbol='+eqsymbol)
  }
  getkitestockreports(){
    return this.http.get('http://localhost:3000/kitestockreports')
  }
  getnsetry1(symbol){
    return this.http.get('http://localhost:3000/nsetry1?symbol='+symbol)
  }
 
 nseresults(){
    return this.http.get('http://localhost:3000/nseresults')
  }
  nseinstrading() {
    return this.http.get('http://localhost:3000/nseinstrading')
  }
  nsedatastockohlc1(stock){
    return this.http.get('http://localhost:3000/nsedatastockohlc1?stock='+stock)
  }
  nsedatasioi(){
    return this.http.get('http://localhost:3000/nsedatasioi')
  }
  nsedatastockoi(stock){
    return this.http.get('http://localhost:3000/nsedatastockoi?stock='+stock)
  }
  nsedatapioii(){
    return this.http.get('http://localhost:3000/nsedatapioii')
  }
  nsedataniftyoi(){
    return this.http.get('http://localhost:3000/nsedataniftyoi')
  }
  nsedatabniftyoi(){
    return this.http.get('http://localhost:3000/nsedatabniftyoi')
  }
  opstradatanifty(nextexpiry) {
    return this.http.get('http://localhost:3000/opstradatanifty?nextexpiry=' + nextexpiry)
   }
  opstradatabanknifty(nextexpiry) {
    return this.http.get('http://localhost:3000/opstradatabanknifty?nextexpiry=' + nextexpiry)
   }
  opstrastockdata(eqsymbol,nextexpirymonthly) {
    return this.http.get('http://localhost:3000/opstrastockdata?nextexpirymonthly='+nextexpirymonthly+'&eqsymbol='+eqsymbol)
  
  }
  opstraexpirydatesmonthly(eqsymbol){
    return this.http.get('http://localhost:3000/opstraexpirydatesmonthly')
  }
  
  opstraexpirydates(){
    return this.http.get('http://localhost:3000/opstraexpirydates')
  }
  nsedataadvdec(){
    return this.http.get('http://localhost:3000/nsedataadvdec')
  }
  nsestockhistdata(stock) {
    return this.http.get('http://localhost:3000/nsestockhistdata?stock='+stock)
  }
  nsedataindices(){
    return this.http.get('http://localhost:3000/nsedataindices')
  }

  
  nsedatastockohlc2(stock){
    return this.http.get('http://localhost:3000/nsedatastockohlc2?stock='+stock)
  }
  nsedata3(){
    return this.http.get('http://localhost:3000/nsedata3')
  }
  getmccurrent(dbname){
    return this.http.get('http://localhost:3000/mccurrent?dbname='+dbname)
  }
  getIndicatorsma(stock,dbname){
    return this.http.get('http://localhost:3000/indicatorsma1?stock='+stock+"&&dbname="+dbname)
  }
  
  sendEmail(user){
    return this.http.post('http://localhost:3000/sendmail',user)
  }
  
  getStockData(stock,dbname){
    //return this.http.get('http://localhost:3000/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:3000/stockdb?stock='+stock+"&&dbname="+dbname)
  }
  getchartinkvshocker(dbname){
    //return this.http.get('http://localhost:3000/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:3000/chartinkvshocker?'+"dbname="+dbname)
  }

  getchartinkemacrs59(dbname){
    //return this.http.get('http://localhost:3000/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:3000/chartinkemacrs59?'+"dbname="+dbname)
  }
  getchartinkemacrs920(dbname){
    //return this.http.get('http://localhost:3000/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:3000/chartinkemacrs920?'+"dbname="+dbname)
  }
  getchartinkgapup(dbname){
    //return this.http.get('http://localhost:3000/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:3000/chartinkgapup?'+"dbname="+dbname)
  }
  getchartinkgapdown(dbname){
    //return this.http.get('http://localhost:3000/aone1?allinone='+allinone+"&&dbname="+dbname)
   
    return this.http.get('http://localhost:3000/chartinkgapdown?'+"dbname="+dbname)
  }
  
  getmcpscore(dbname){
    return this.http.get('http://localhost:3000/mcpscore?dbname='+dbname)
  }


  getohlcDetails(stock,dbname){
    return this.http.get('http://localhost:3000/ohlc1?stock='+stock+"&&dbname="+dbname)
  }
  getgooglenews(stock,dbname){
    return this.http.get('http://localhost:3000/googlenews?stock='+stock+"&&dbname="+dbname)
  }
  getgnewsone(dbname){
    return this.http.get('http://localhost:3000/gnewsaone?dbname='+dbname)
  }
  getportfolio(dbname){
    return this.http.get('http://localhost:3000/portfolio?dbname='+dbname)
  }
  getportfolioAK(dbname){
    return this.http.get('http://localhost:3000/portfolioAK?dbname='+dbname)
  }
  
  getdbdata1(dbname) {
    
    return this.http.get('http://localhost:3000/dbdata1?dbname='+dbname)
  }
  getdbjdata(eqsymbol,dbname) {
  
    return this.http.get('http://localhost:3000/dbjdata?stock='+eqsymbol+'&&dbname='+dbname)
  }
  getdbjdataall(eqsymbol,dbname) {
  
    return this.http.get('http://localhost:3000/dbjdataall?stock='+eqsymbol+'&&dbname='+dbname)
  }
  getportfolioKK(dbname){
    return this.http.get('http://localhost:3000/portfolioKK?dbname='+dbname)
  }
  getGainers(){
    return this.http.get('http://localhost:3000/Gainers')
  }
  getResults(){
    return this.http.get('http://localhost:3000/Results')
  }
  getmmmarkets(){
    return this.http.get('http://localhost:3000/mmmarkets')
  }
  
  getsnrDetails(stock,dbname){
  return this.http.get('http://localhost:3000/snr1?stock='+stock+"&&dbname=investingpivot_D")
  }
  getbqmovement(stockid){
    return this.http.get('http://localhost:3000/bqmovement?stockid='+stockid)
  }
  
  getbqgainingsectors(){
    return this.http.get('http://localhost:3000/bqgainingsectors')
  }
  getbqgainingsectorsstocks(sectorid){
    return this.http.get('http://localhost:3000/bqgainingsectorsstocks?sectorid='+sectorid)
  }
  getbqgainingsectorsstocksdetails(sectorid){
    return this.http.get('http://localhost:3000/bqgainingsectorsstocksdetails?sectorid='+sectorid)
  }
  getmmmacd(stockid){
    return this.http.get('http://localhost:3000/mmmacd?stockid='+stockid)
  }
  getmmstockinfo(stockid){
    return this.http.get('http://localhost:3000/mmstockinfo?stockid='+stockid)
  }
  getmmpmov(stockid){
    return this.http.get('http://localhost:3000/mmpmov?stockid='+stockid)
  }
  getbqadvdec(){
    return this.http.get('http://localhost:3000/bqadvdec')
  }
  getnsexchange(){
    return this.http.get('http://localhost:3000/nsexchange')
  }
  getsescreener(){
    return this.http.get('http://localhost:3000/sescreener')
  }
  getmmrsi(stockid){
    return this.http.get('http://localhost:3000/mmrsi?stockid='+stockid)
  }
  getmmbb(stockid){
    return this.http.get('http://localhost:3000/mmbb?stockid='+stockid)
  }
  getmmma(stockid){
    return this.http.get('http://localhost:3000/mmma?stockid='+stockid)
  }
  getmmkst(stockid){
    return this.http.get('http://localhost:3000/mmkst?stockid='+stockid)
  }
  getmmdow(stockid){
    return this.http.get('http://localhost:3000/mmdow?stockid='+stockid)
  }
  getmmobv(stockid){
    return this.http.get('http://localhost:3000/mmobv?stockid='+stockid)
  }
  getmmbank(indid){
    return this.http.get('http://localhost:3000/mmbank?indid='+indid)
  }
  getmmpeers(stockid){
    return this.http.get('http://localhost:3000/mmpeers?stockid='+stockid)
  }
  getmmtechscore(stockid){
    return this.http.get('http://localhost:3000/mmtechscore?stockid='+stockid)
  }
  getbqma(type){
    return this.http.get('http://localhost:3000/bqma?type='+type)
  }
  getbqpdvd(type){
    return this.http.get('http://localhost:3000/bqpdvd?type='+type)
  }
  getbqpdvi(type){
    return this.http.get('http://localhost:3000/bqpdvi?type='+type)
  }
  getbqpivd(type){
    return this.http.get('http://localhost:3000/bqpivd?type='+type)
  }
  getbqpivi(type){
    return this.http.get('http://localhost:3000/bqpivi?type='+type)
  }
  getbqpfvi(type){
    return this.http.get('http://localhost:3000/bqpfvi?type='+type)
  }
  getbq52h(type){
    return this.http.get('http://localhost:3000/bq52wkh?type='+type)
  }
  getbq52l(type){
    return this.http.get('http://localhost:3000/bq52wkl?type='+type)
  }
  getbqc52h(type){
    return this.http.get('http://localhost:3000/bqc52h?type='+type)
  }
  getbqc52l(type){
    return this.http.get('http://localhost:3000/bqc52l?type='+type)
  }
  getbqvolatile(type){
    return this.http.get('http://localhost:3000/bqvolatile?type='+type)
  }
  getbqffh(type){
    return this.http.get('http://localhost:3000/bqffh?type='+type)
  }
  getbqrfl(type){
    return this.http.get('http://localhost:3000/bqrfl?type='+type)
  }
  getbqbulkdeal(type){
    return this.http.get('http://localhost:3000/bqbulkdeal?type='+type)
  }
  getbqblockdeal(type){
    return this.http.get('http://localhost:3000/bqblockdeal?type='+type)
  }
  getbqinsider(type){
    return this.http.get('http://localhost:3000/bqinsider?type='+type)
  }
  getbqob(type){
    return this.http.get('http://localhost:3000/bqob?type='+type)
  }
  getbqos(type){
    return this.http.get('http://localhost:3000/bqos?type='+type)
  }
  getbqtg(){
    return this.http.get('http://localhost:3000/bqtg')
  }
  getbqtl(){
    return this.http.get('http://localhost:3000/bqtl')
  }
  getbqpricestats(stockid){
    return this.http.get('http://localhost:3000/bqprickestats?stockid='+stockid)
  }
  getbqfundamentals(stockid){
    return this.http.get('http://localhost:3000/bqfundamentals?stockid='+stockid)
  }
  getbqmovingaverages(stockid){
    return this.http.get('http://localhost:3000/bqmovingaverages?stockid='+stockid)
  }
  getbqdelvol(stockid){
    return this.http.get('http://localhost:3000/bqdelvol?stockid='+stockid)
  }
  getbqqresults(stockid){
    return this.http.get('http://localhost:3000/bqqresults?stockid='+stockid)
  }
  getbqtr(stockid){
    return this.http.get('http://localhost:3000/bqtr?stockid='+stockid)
  }
  getbqss(stockid){
    return this.http.get('http://localhost:3000/bqss?stockid='+stockid)
  }
  getbqsc(stockid){
    return this.http.get('http://localhost:3000/bqsc?stockid='+stockid)
  }
  getbqph(stockid){
    return this.http.get('http://localhost:3000/bqph?stockid='+stockid)
  }
  getbqks(stockisin){
    return this.http.get('http://localhost:3000/bqks?stockisin='+stockisin)
  }
  getbqannouncements(stockisin){
    return this.http.get('http://localhost:3000/bqannouncements?stockisin='+stockisin)
  }
  getbqca(stockid){
    return this.http.get('http://localhost:3000/bqca?stockid='+stockid)
  }
  getbqitnews(bqnames) {
    
    return this.http.get('http://localhost:3000/bqitnews?bqnames='+bqnames)
  }
  getbqpd(stockid){
    return this.http.get('http://localhost:3000/bqpd?stockid='+stockid)
  }
  getbqbdetails(stockid){
    return this.http.get('http://localhost:3000/bqbdetails?stockid='+stockid)
  }
  
    
  
  getbnifty(){
    return this.http.get('http://localhost:3000/banknifty')
  }
  getmcbankniftyrealtime(){
    return this.http.get('http://localhost:3000/mcbankniftyrealtime')
  }
  getmcniftyrealtime(){
    return this.http.get('http://localhost:3000/mcniftyrealtime')
  }
  
  getmcvixrealtime(){
    return this.http.get('http://localhost:3000/mcvixrealtime')
  }
  getmcvixgraph(){
    return this.http.get('http://localhost:3000/mcvixgraph')
  }
  getntniftypcr() {
    return this.http.get('http://localhost:3000/ntniftypcr')
  }
  getadg(){
    return this.http.get('http://localhost:3000/adanigreen')
  }
  getetimesnews(){
    return this.http.get('http://localhost:3000/etimesnews')
  }
  getetsmacrossover(){
    return this.http.get('http://localhost:3000/etsmacrossover')
  }
  getetsmabullishcrossover(){
    return this.http.get('http://localhost:3000/etsmabullishcrossover')
  }
  getetvolumeshocker(){
    return this.http.get('http://localhost:3000/etvolumeshocker')
  }
  getethgainer(){
    return this.http.get('http://localhost:3000/ethgainers')
  }
  getethloser(){
    return this.http.get('http://localhost:3000/ethlosers')
  }
  getmcsnr(mcsymbol){
    return this.http.get('http://localhost:3000/moneycontrolsnr?mcsymbol='+mcsymbol)
  }
  getmcsnrm(mcsymbol){
    return this.http.get('http://localhost:3000/moneycontrolsnrm?mcsymbol='+mcsymbol)
  }
  getmcsnrindex(mcindexsymbol){
    return this.http.get('http://localhost:3000/moneycontrolsnrindex?mcindexsymbol='+mcindexsymbol)
  }
  getswot(mcsymbol){
    return this.http.get('http://localhost:3000/swot?mcsymbol='+mcsymbol)
  }
  getmcswot(mcsymbol){
    return this.http.get('http://localhost:3000/mcswot?mcsymbol='+mcsymbol)
  }
 
  getmcsnrw(mcsymbol){
    return this.http.get('http://localhost:3000/moneycontrolsnrw?mcsymbol='+mcsymbol)
  }
  getmcti(mcsymbol){
    return this.http.get('http://localhost:3000/mcti?mcsymbol='+mcsymbol)
  }
  getmctiw(mcsymbol){
    return this.http.get('http://localhost:3000/mctiw?mcsymbol='+mcsymbol)
  }
  getmctim(mcsymbol){
    return this.http.get('http://localhost:3000/mctim?mcsymbol='+mcsymbol)
  }
  getmcniftytid(){
    return this.http.get('http://localhost:3000/mcniftytid')
  }
  getmcniftytiw(){
    return this.http.get('http://localhost:3000/mcniftytiw')
  }
  getmcbniftytid(){
    return this.http.get('http://localhost:3000/mcbniftytid')
  }
  getmcbniftytim(){
    return this.http.get('http://localhost:3000/mcbniftytim')
  }
  getmcbniftytiw(){
    return this.http.get('http://localhost:3000/mcbniftytiw')
  }
  getmcniftytim(){
    return this.http.get('http://localhost:3000/mcniftytim')
  }
  getmcpniftytim(){
    return this.http.get('http://localhost:3000/mcpniftytim')
  }
  getmcpniftytiw(){
    return this.http.get('http://localhost:3000/mcpniftytiw')
  }
  getmcpniftytid(){
    return this.http.get('http://localhost:3000/mcpniftytid')
  }
  getnse(){
    return this.http.get('http://localhost:3000/nse')
  }
  getnse1(){
    return this.http.get('http://localhost:3000/nse1')
  }
  getnse2(){
    return this.http.get('http://localhost:3000/nse2')
  }
  gettltg(returnedname){
    return this.http.get('http://localhost:3000/tltg?returnedname='+returnedname)
  }
  gettltl(returnedname){
    return this.http.get('http://localhost:3000/tltl?returnedname='+returnedname)
  }
  gettl52h(){
    return this.http.get('http://localhost:3000/tl52h')
  }
  gettl52l(){
    return this.http.get('http://localhost:3000/tl52l')
  }
  gettlnear52h(){
    return this.http.get('http://localhost:3000/tlnear52h')
  }
  gettlnear52l(){
    return this.http.get('http://localhost:3000/tlnear52l')
  }
  getmcchartsdata(mcsymbol){
    return this.http.get('http://localhost:3000/mcchartsdata?mcsymbol='+mcsymbol)
  }
  getmcchartsdataohlc(mcsymbol){
    return this.http.get('http://localhost:3000/mcchartsdataohlc?mcsymbol='+mcsymbol)
  }
  getmchistoricalrating(mcsymbol){
    return this.http.get('http://localhost:3000/mchistoricalrating?mcsymbol='+mcsymbol)
  }
  gettlvs(returnedname) {
    
    return this.http.get('http://localhost:3000/tlvs?returnedname='+returnedname)
  }
  gettlrsiall() {
    
    return this.http.get('http://localhost:3000/tlrsiall')
  }
  gettlvhg(returnedname){
    return this.http.get('http://localhost:3000/tlvhg?returnedname='+returnedname)
  }

  getmcoverall(){
    return this.http.get('http://localhost:3000/mcoverall')
  }
  getmoneycontroloveralldaily(mcsymbol){
    return this.http.post('http://localhost:3000/moneycontroloveralldaily',mcsymbol)
  }
  getmcmovingaverages(mcsymbol){
    return this.http.post('http://localhost:3000/mcmovingaverages',mcsymbol)
  }
  getetcompanydata(companyid){
    return this.http.post('http://localhost:3000/etcompanydata',companyid)
  }
  getetcompanydataohlc(companyid){
    return this.http.get('http://localhost:3000/etcompanydataohlc?companyid='+companyid)
  }
  getetsectordetails(sectorid,etsectorname){
    return this.http.get('http://localhost:3000/etsectordetails?sectorid='+sectorid+'&&etsectorname='+etsectorname)
  }
  getetindexdetails(indexid,exchange){
    return this.http.get('http://localhost:3000/etindexdetails?indexid='+indexid+'&&exchange='+exchange)
  }
  
  getmmstockinforeco(stockid){
    return this.http.post('http://localhost:3000/mmstockinforeco',stockid)
  }
  getmccombine(mcsymbol){
    return this.http.post('http://localhost:3000/mccombine',mcsymbol)
  }
  gettrendlynepostdvm(tlid){
    return this.http.post('http://localhost:3000/trendlynepostdvm',tlid)
  }
  getmcmovingaveragesview(stockisin,dbname) {
    
    return this.http.get('http://localhost:3000/mcmovingaveragesview?stockisin='+stockisin+"&&dbname="+dbname)
  }
  getmcsectorcombine(mcsectorsymbol){
    return this.http.post('http://localhost:3000/mcsectorcombine',mcsectorsymbol)
  }
  getmoneycontrolti(mcsymbol){
    return this.http.post('http://localhost:3000/moneycontrolti',mcsymbol)
  }
  getbqbasicdetails(bqsymbol){
    return this.http.post('http://localhost:3000/bqbasicdetails',bqsymbol)
  }
  getbqnews(bqsymbol){
    return this.http.post('http://localhost:3000/bqnews',bqsymbol)
  }
  getindd(mcsymbol){
    return this.http.post('http://localhost:3000/indd',mcsymbol)
  }
 
  getmoneycontroloverallweekly(mcsymbol){
    return this.http.post('http://localhost:3000/moneycontroloverallweekly',mcsymbol)
  }
  getmoneycontroloverall(mcsymbol){
    return this.http.post('http://localhost:3000/moneycontroloverall',mcsymbol)
  }
  getpscore(mcsymbol){
    return this.http.post('http://localhost:3000/pscore',mcsymbol)
  }
  
  getmoneycontroloverall1(mcsymbol){
    return this.http.get('http://localhost:3000/moneycontroloverall1'+mcsymbol)
  }
  getmcvolume(mcsymbol){
    return this.http.post('http://localhost:3000/mcvolume',mcsymbol)
  }
  getmcinsight(mcsymbol){
    return this.http.post('http://localhost:3000/mcinsight',mcsymbol)
  }

  getdropdbmcdwm(){
    return this.http.get('http://localhost:3000/dropdbmcdwm')
  }
  getdropdbmcvolume() {
    return this.http.get('http://localhost:3000/dropdbmcvolume')
  }
  getdropmcmovingaverages(){
    return this.http.get('http://localhost:3000/dropmcmovingaverages')
  }
  getdroppscore(){
    return this.http.get('http://localhost:3000/droppscore')
  }
  getmcoverallviewdaily(dbname){
    return this.http.get('http://localhost:3000/mcoverallviewdaily?dbname='+dbname)
  }
  getmcvolumeview(dbname){
    return this.http.get('http://localhost:3000/mcvolumeview?dbname='+dbname)
  }

  getmcsectoroverallviewdwm(dbname){
    return this.http.get('http://localhost:3000/mcsectoroverallviewdwm?dbname='+dbname)
  }
  getmcsectoroverallviewdw(dbname){
    return this.http.get('http://localhost:3000/mcsectoroverallviewdw?dbname='+dbname)
  }
  getmcsectoroverallviewd(dbname){
    return this.http.get('http://localhost:3000/mcsectoroverallviewd?dbname='+dbname)
  }
  getmccombineview(dbname){
    return this.http.get('http://localhost:3000/mccombineview?dbname='+dbname)
  }
  
  
  getmcoverallviewweekly(dbname){
    return this.http.get('http://localhost:3000/mcoverallviewweekly?dbname='+dbname)
  }
  gettlvhl(returnedname){
    return this.http.get('http://localhost:3000/tlvhl?returnedname='+returnedname)
  }
  gettlrvpd(returnedname){
    return this.http.get('http://localhost:3000/tlrvpd?returnedname='+returnedname)
  }
  getnsedata(){
    return this.http.get('http://localhost:3000/nsedata')
  }
  getbqoptionsindexweekly(){
    return this.http.get('http://localhost:3000/bqoptionsindexweekly')
  }
  getbqoptionsindexmonthly(){
    return this.http.get('http://localhost:3000/bqoptionsindexmonthly')
  }
  getbqoptionsbnindexweekly(){
    return this.http.get('http://localhost:3000/bqoptionsbnindexweekly')
  }
  getbqoptionsbnindexmonthly(){
    return this.http.get('http://localhost:3000/bqoptionsbnindexmonthly')
  }
  getbqoptionslexpiryindex(){
    return this.http.get('http://localhost:3000/bqoptionslexpiryindex')
  }
  getbqoptionslexpirystock(){
    return this.http.get('http://localhost:3000/bqoptionslexpirystock')
  }
  getbqoptionsputcallrindex(){
    return this.http.get('http://localhost:3000/bqoptionsputcallrindex')
  }
  getbqoptionsputcallrstock(){
    return this.http.get('http://localhost:3000/bqoptionsputcallrstock')
  }
  getbqsectoralmovement(){
    return this.http.get('http://localhost:3000/bqsectoralmovement')
  }
  getfnodata(){
    return this.http.get('http://localhost:3000/fnodata')
  }
  getetindices(){
    return this.http.get('http://localhost:3000/etindices')
  }
  gettrendingstocks(){
    return this.http.get('http://localhost:3000/trendingstocks')
  }
  gettrendlynestocks1(tlid,tlname,eqsymbol){
    return this.http.get('http://localhost:3000/trendlynestocks1?tlid='+tlid+'&&tlname='+tlname+'&&eqsymbol='+eqsymbol)
  }
  gettrendlynestocks2(tlid){
    return this.http.get('http://localhost:3000/trendlynestocks2?tlid='+tlid)
  }
  gettrendlynestocks3(tlid){
    return this.http.get('http://localhost:3000/trendlynestocks3?tlid='+tlid)
  }

  getniftytradersallstocks(){
    return this.http.get('http://localhost:3000/niftytradersallstocks')
  }
  getetpost1(){
    return this.http.get('http://localhost:3000/etpost1')
  }
  getetDIIBuying() {
    return this.http.get('http://localhost:3000/etDIIBuying') 
  }
  
  
  getbanknifty(){
    return this.http.get('http://localhost:3000/banknifty1')
  }
  getbankniftystocks(){
    return this.http.get('http://localhost:3000/bankniftystocks')
  }
  getnifty50stocks(){
    return this.http.get('http://localhost:3000/nifty50stocks')
  }
  getnifty50snr(){
    return this.http.get('http://localhost:3000/nifty50snr')
  }
  getniftypharmasnr(){
    return this.http.get('http://localhost:3000/pharmasnr')
  }
  getniftypharma(){
    return this.http.get('http://localhost:3000/pharma')
  }
  getniftypharmastocks(){
    return this.http.get('http://localhost:3000/pharmastocks')
  }
  getniftypharmadetails(){
    return this.http.get('http://localhost:3000/pharmadetails')
  }
  
  getbankniftysnr(){
    return this.http.get('http://localhost:3000/bankniftysnr')
  }
  
  getnifty50(){
    return this.http.get('http://localhost:3000/nifty50')
  }

  getnifty505d(){
    return this.http.get('http://localhost:3000/nifty505d')
  }

  getnifty503m(){
    return this.http.get('http://localhost:3000/nifty503m')
  }

  getnifty506m(){
    return this.http.get('http://localhost:3000/nifty506m')
  }

  getnifty501yr(){
    return this.http.get('http://localhost:3000/nifty501yr')
  }
  
  gettlbu(){
    return this.http.get('http://localhost:3000/tlbu')
  }
  gettlob(){
    return this.http.get('http://localhost:3000/tlob')
  }
    //Used in ohlc.component.ts
  getmcsd(mcsymbol){
    return this.http.get('http://localhost:3000/mcsd?mcsymbol='+mcsymbol)
  }
  //Used in Portfolio.component.ts
  getmcsd1(mcsymbol1) {
   
    return this.http.get('http://localhost:3000/mcsd1?mcsymbol1='+mcsymbol1)
  }
  getmcstockdetails(mcindexid) {
   
    return this.http.get('http://localhost:3000/mcstockdetails?mcindexid='+mcindexid)
  }
  getmcstockdetails1(mcindexid1) {
   
    return this.http.get('http://localhost:3000/mcstockdetails1?mcindexid1='+mcindexid1)
  }
  getmcindexchart(mcindexid) {
   
    return this.http.get('http://localhost:3000/mcindexchart?mcindexid='+mcindexid)
  }
  //Used in portfolio.component.ts
  getmcsd2(mcsymbol2){
    return this.http.get('http://localhost:3000/mcsd2?mcsymbol2='+mcsymbol2)
  }
  getmcpv(mcsymbol2){
    return this.http.get('http://localhost:3000/mcpv?mcsymbol='+mcsymbol2)
  }
  
  getniftymetald(){
    return this.http.get('http://localhost:3000/niftymetald')
  }
  getniftymetalw(){
    return this.http.get('http://localhost:3000/niftymetalw')
  }
  getniftymetalm(){
    return this.http.get('http://localhost:3000/niftymetalm')
  }
  getcnxitd(){
    return this.http.get('http://localhost:3000/cnxitd')
  }
  getcnxitw(){
    return this.http.get('http://localhost:3000/cnxitw')
  }
  getcnxitm(){
    return this.http.get('http://localhost:3000/cnxitm')
  }
  getniftyfind(){
    return this.http.get('http://localhost:3000/niftyfind')
  }
  getniftyfinw(){
    return this.http.get('http://localhost:3000/niftyfinw')
  }
  getniftyfinm(){
    return this.http.get('http://localhost:3000/niftyfinm')
  }
  getmcsectors(){
    return this.http.get('http://localhost:3000/mcsectors')
  }
  getmcsectorsdetailsd(mcsectorsymbol){
    return this.http.get('http://localhost:3000/mcsectorsdetailsd?mcsectorsymbol='+mcsectorsymbol)
  }
  getmcsectorgraph(indid){
    return this.http.get('http://localhost:3000/mcsectorgraph?indid='+indid)
  }
  getmcsectorsdetailsw(mcsectorsymbol){
    return this.http.get('http://localhost:3000/mcsectorsdetailsw?mcsectorsymbol='+mcsectorsymbol)
  }
  getmcsectorsdetailsm(mcsectorsymbol){
    return this.http.get('http://localhost:3000/mcsectorsdetailsm?mcsectorsymbol='+mcsectorsymbol)
  }
  getetsectors(){
    return this.http.get('http://localhost:3000/etsectors')
  }
  getetimpdata(){
    return this.http.get('http://localhost:3000/etimpdata')
  }
 
  getetrecos(){
    return this.http.get('http://localhost:3000/etrecos')
  }
  getmmrecos(){
    return this.http.get('http://localhost:3000/mmrecos')
  }
  getmmmaxbuyrecos(){
    return this.http.get('http://localhost:3000/mmmaxbuyrecos')
  }
  getetmacdbuy(){
    return this.http.get('http://localhost:3000/etmacdbuy')
  }
  getetmacdsell(){
    return this.http.get('http://localhost:3000/etmacdsell')
  }
 


}




