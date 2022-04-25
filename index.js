
const async = require("async")
const express = require('express');
const cluster = require('cluster');
var compression = require('compression');
const numCPUs = require('os').cpus().length;
var http = require('http')
const app = express();
const port = 3000
var cookieSession = require('cookie-session')
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require("jquery")(window);
const responseTime = require('response-time')

const redis = require('redis');
const client = redis.createClient();
const chrome = require('chrome-cookies-secure');
const cors = require('cors');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(compression());
const bodyParser = require("body-parser");
const request = require('request')
app.use(cors());
const path=require('path')
const session = require('express-session');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
const fetch = require("node-fetch");
const csrf = require('csurf');
process.env.chartinkcsrf = 'IeyxllMLHFKfCD4Yby7Sw1g9XWJhX5XJjsGfwtnW'
process.env.chartinkcookie = '_ga=GA1.2.2067931904.1621586668; bfp_sn_rf_8b2087b102c9e3e5ffed1c1478ed8b78=Direct; bafp=0590ba80-e319-11ea-a890-4395e7b43464; __gads=ID=eb4d407b97097fa6-22285d39c9c800fa:T=1621586677:RT=1621586677:S=ALNI_MZ3vScH0DJGPYFS_YkChWPH5KiAFg; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IjFNR1pXdzlYUjlMa25jRGJ3K21FOWc9PSIsInZhbHVlIjoiV1pXSTlIWVZRYUErMllpQk1BMEVQa2tUN3R1bDFsbkZFWU5NeWdWbE4wbFByTEd1SHZRVTkrcDlUdTNoWTJySkVObTJ0cVNKanVpTTRmNlhjSExQak5lM3paNWt4MDVsdW9kQ2dGMG05ZkhXZDROeUlkVlg5U1B6MEdCdHlWQVwvSHZYZ0FGalRQQ2JFRlN6U0pZTXhMQVpESkRoNUlpbDJUWVZcL3FsVWdSMXJjeE1JTmhkMkJyK1dITmpiUUF6cGkiLCJtYWMiOiJlM2E1MzY2NzMwZTcwYWYyMjcxOTY0OGYxMDJhMTJiODkyNzQyMTUwOWZjODZlOTdmZDZlYThiMDFkNTM3Yzk4In0%3D; __utmz=102564947.1627487103.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=102564947.2067931904.1621586668.1629460093.1630149430.5; mnjs_session_depth=1%7C1630270688592; _gid=GA1.2.1238159065.1630270689; _yeti_currency_={"dataAsOf":"2021-08-27T00:00:00.000Z","generatedAt":"2021-08-28T15:00:47.619Z","conversions":{"USD":{"USD":1,"JPY":110.18620865572656,"BGN":1.6629538304565938,"CZK":21.735396649944732,"DKK":6.322846696709464,"GBP":0.7287050420882578,"HUF":298.3334750446391,"PLN":3.896522404557436,"RON":4.195221494770853,"SEK":8.702066150837515,"CHF":0.9179491539835047,"ISK":126.85996088767962,"NOK":8.806649094464756,"HRK":6.367315704446901,"RUB":74.01998129410765,"TRY":8.401411444605051,"AUD":1.3791344273446138,"BRL":5.245472323781992,"CAD":1.2680894481761755,"CNY":6.47861576396565,"HKD":7.790068871694584,"IDR":14428.152367995921,"ILS":3.231612958081796,"INR":73.71907150752487,"KRW":1169.7814811665676,"MXN":20.379729614828673,"MYR":4.19003486098121,"NZD":1.439248363234419,"PHP":49.95663634044724,"SGD":1.350905535243602,"THB":32.65538644673072,"ZAR":14.909956636340446,"EUR":0.8502678343678259},"GBP":{"USD":1.3722973524847437,"JPY":151.20824241858512,"BGN":2.282067138839947,"CZK":29.827427277924926,"DKK":8.676825782061306,"GBP":1,"HUF":409.4022379613316,"PLN":5.347187379671657,"RON":5.757091350361131,"SEK":11.941822339941426,"CHF":1.259699193727174,"ISK":174.0895884624809,"NOK":12.085341236596152,"HRK":8.737850483647014,"RUB":101.57742436087419,"TRY":11.529234682566539,"AUD":1.8925825233655766,"BRL":7.198347782458024,"CAD":1.7401957924460056,"CNY":8.890587260655987,"HKD":10.690290888300293,"IDR":19799.715295847287,"ILS":4.43473390663104,"INR":101.1644866574099,"KRW":1605.2880295905627,"MXN":27.967048994784314,"MYR":5.749973746543295,"NZD":1.975076718434594,"PHP":68.55535978903889,"SGD":1.8538440894717805,"THB":44.81290036521475,"ZAR":20.46089401771233,"EUR":1.1668202980059041}}}; bfp_sn_rt_8b2087b102c9e3e5ffed1c1478ed8b78=1630270689826; XSRF-TOKEN=eyJpdiI6ImxYbmtYZWJBQWdOMG1XdkZWYkIxOVE9PSIsInZhbHVlIjoiTk0rODBINVFERkRwNEQ3RXMybStWMkI3ZUpGWkhoVWx6elU1SldtcDVIUUFuRWtGY3J2R2RhR3Z5Snp0a2pJMiIsIm1hYyI6ImI2M2RiMTk5MDljNTgyNjhiZDIyYjI0NDhjM2YwMjE2ZWMxYzcwN2Q4NmE4Mjg2ZWI4ODVhZDg1MmRmNTJmOGEifQ%3D%3D; ci_session=eyJpdiI6Im5FZHF1WmU0T2lmVDJ3cjlnSDJmZGc9PSIsInZhbHVlIjoiTFg1U0k2YTVcL3dxRWFXclZhQlQ4Qkp4Q1BURll2RE1KT2JwU1FoMmFxakg5VVpYa3RCcFFoNTZPanJHZVFOVGUiLCJtYWMiOiI1Y2EyZmJmNGZkNDZmOWFhNGNiMzgyOGE1NTEwNGJiMTFkYWNlZWQ2NGUwZjVhODFmMDYyNGY5NzZiN2MzNDMzIn0%3D; _gat=1'
process.env.trendlynecookie='_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1363348430.1650748663; _gat=1; csrftoken=UdCOt4TuEtdES39jXF2do7Sxm9xvPDFW4BBTkhEtDI4M93qULm9M9gb7t7mM4vxL; .trendlyne=vvd6ghws3icett72qn91snttaywv0chw'
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });
const fs =require('fs')
const axios = require('axios');
const cheerio = require('cheerio');
var html2json = require('html2json').html2json;
//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  //Check if work id is died
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  // This is Workers can share any TCP connection
  // It will be initialized using express
  console.log(`Worker ${process.pid} started`);

  app.get('/cluster', (req, res) => {
    let worker = cluster.worker.id;
    res.send(`Running on worker with id ==> ${worker}`);
  });

const axiosCookieJarSupport = require('axios-cookiejar-support').default;
  const tough = require('tough-cookie');


///////For PostgresDB Connection/////////////

//var mongo = require('mongodb');
const { response } = require('express');
const { json } = require('body-parser');

var moment = require('moment');


  app.get('/test', async function (req, res) {
    try {
      const response = await axios.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=5d&type=area');
      console.log(JSON.parse((response.body).data));
    } catch (error) {
      console.error(error);
    }
  });


//This is MC Stock Data Details used in OHLC component using parallel api run
app.get('/mcshare', (req, res) => {
  
  let mcsymbol = req.query.mcsymbol
  let eqsymbol = req.query.eqsymbol
  let stockid = req.query.stockid
  console.log(mcsymbol)
  console.log(eqsymbol)
  console.log("This is mcshare")
  var requestArray7 = [
    
    { url: 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/'+mcsymbol+'?field=RSI' },
    { url: 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/'+mcsymbol+'?field=RSI' },
    { url: 'https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1w' },
    { url: 'https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1m' },
    { url: 'https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=3m' },
    { url: 'https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode='+eqsymbol+'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=6m' },
    { url: 'https://etelection.indiatimes.com/ET_Charts/delaycharts?scripcode=' + eqsymbol + 'EQ&exchangeid=50&datatype=eod&filtertype=eod&lastreceivedataid=&directions=back&scripcodetype=company&uptodataid=&period=1y' },
    { url: 'https://frapi.marketsmojo.com/stocks_Pricemovement/pricemovement_info?sid=' + stockid + '&exchange=1&1y=1&' }
    
   
  ];
  
  let getApi7 = function (opt, callback) {
    request(opt, (err, response, body) => {
        callback(err, JSON.parse(body));
    });
  };
  
  const functionArray7 = requestArray7.map((opt) => { 
    return (callback) => getApi7(opt, callback); 
  });
  
  async.parallel(
    functionArray7, (err, results) => {
        if (err) {
            console.error('Error in mcshare: ', err);
        } else {
          res.json((results));
        }
  }); 
})


//This is MC Share Details used in OHLC component using parallel api run
app.get('/mcsharefrequent', (req, res) => {
  let mcsymbol = req.query.mcsymbol;
  let eqsymbol = req.query.eqsymbol;
  console.log("This is mcsharefrequent")

  var requestArray9 = [
     { url: 'https://mo.streak.tech/api/tech_analysis/?timeFrame=day&stock=NSE%3A'+eqsymbol},
     { url: 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/'+mcsymbol+'?field=RSI' },
     { url: 'https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId='+mcsymbol+'&resolution=1D'},
     { url: 'https://api.moneycontrol.com/mcapi/v1/extdata/mc-insights?scId=' + mcsymbol + '&type=d' },
     { url: 'https://api.moneycontrol.com/mcapi/v1/extdata/mc-insights?scId='+mcsymbol+'&type=c' },
     { url: 'https://api.moneycontrol.com/mcapi/v1/extdata/mc-essentials?scId='+mcsymbol+'&type=ed'},
     { url: 'https://json.bselivefeeds.indiatimes.com/ETLiveFeedChartRead/livechartsnew?scripcode=' + eqsymbol + 'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company&uptodataid=&period=1d' }  
    
    
    
  ];
  
  let getApi9 = function (opt, callback) {
    request(opt, (err, response, body) => {
      console.log(err)
      callback(err, JSON.parse(body));
      
    });
  };
  
  const functionArray9 = requestArray9.map((opt) => { 
    return (callback) => getApi9(opt, callback); 
  });
  
  async.parallel(
    functionArray9, (err, results) => {
        if (err) {
            console.error('Error in mcsharefrequent: ', err);
        } else {
            res.json(results);
        }
  }); 
})

/////////////////////Firebase Real Time Database Settings////////////////////////////////////////////



  

///////////////////////////////For Getting Dates////////////////////////////////////////////////
var yesterday1 = moment().subtract(1, 'days');
var yesterday2 = moment().subtract(2, 'days');
var yesterday3 = moment().subtract(3, 'days');
var yesterday4 = moment().subtract(4, 'days');
var yesterday5 = moment().subtract(5, 'days');
var yesterday6 = moment().subtract(6, 'days');
//console.log(yesterday1.format('Y-MMM-DD'));

var today = new Date();

global.document = new JSDOM('http://localhost:4200/Dashboard').window.document;
console.log(document.cookie)
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
//console.log(today.getMonth())
var d = new Date();
var y = d.setDate(d.getDate() - 01);
//console.log(y)
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var n = month[d.getMonth()];
//console.log(n)
var datetoday = (dd + "-" + n + "-" + yyyy)
yesterday = (dd - 01) + mm + yyyy
var todaydate = (dd + "-" + mm + "-" + yyyy)

var gnewsdatetoday = (yyyy + "-" + mm + "-" + dd)
var gnewsyesterday= (yyyy + "-" + mm + "-" + (dd - 01))


///////////////////////////////////////////// Market Mojos Data ,used in ohlc///////////////////////////////////////////


/////////////////////////////////////////////////1.MarketMojos MACD,used in OHLC component/////////////////////////////////////////////////////
app.get('/mmmacd', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectMacd_macd_m';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
//////////////////////////////////////////////////2.MarketMojos RSI,used in OHLC component/////////////////////////////////////////////////////////
app.get('/mmrsi', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectRsi_rsi_w';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////////////3.MarketMojos Bollinger Bands,used in OHLC component/////////////////////////////////////////
app.get('/mmbb', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectBb_bb_w';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////////////////////4.MarketMojos Moving Averages,used in OHLC component/////////////////////////////////////
app.get('/mmma', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectMa_ma_w';
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////////////////////5.Market Mojos KST,used in OHLC component////////////////////////////////////////
app.get('/mmkst', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectKst_kst_w';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})

//////////////////////////////////////////////////////////6.MarketMojos DOW,used in OHLC component/////////////////////////////////////////////
app.get('/mmdow', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectDow_dow_w';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})

///////////////////////////////////////////////////////////7.MarketMojos OBV,used in OHLC component/////////////////////////////////////////////
app.get('/mmobv', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectObv_obv_w';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})

///////////////////////////////////////////////////////////7.MarketMojos Markets,used in OHLC component/////////////////////////////////////////////

app.get('/mmmarkets', function (req, res) {

  //let mcsymbol = req.query.mcsymbol

  var url6 = 'https://frapi.marketsmojo.com/market_marketoverview/getData?';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})
///////////////////////////////////////////////////////////7.MarketMojos StockInfo,used in OHLC component/////////////////////////////////////////////
app.get('/mmstockinfo', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://frapi.marketsmojo.com/stocks_stocksid/header_info?sid=' + stockid + '&exchange=1';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})



///#########################Market mojos Data ******************************//  

app.get('/mmrecos', function (req, res) {

  var url11 = 'https://www.marketsmojo.com/recommendation/api/getRecos.php?sortColumn=DATE&sortDirection=desc&page=1&pageSize=250&format=json&TPeriod%5B%5D=1week&CType%5B%5D=2&CType%5B%5D=1&CType%5B%5D=3';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
}
  })
})

app.get('/mmmaxbuyrecos', function (req, res) {

  var url11 = 'https://www.marketsmojo.com/recommendation/api/getRecos.php?List=buy&sortColumn=MAXCAL&sortDirection=asc&page=1&pageSize=50&format=json';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
}
  })
})


///////////////////////////////////////////////////////////7.MarketMojos Peers,used in OHLC component/////////////////////////////////////////////
app.get('/mmpeers', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectPrice_indiScale';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
    }
  })

})
app.get('/mmpmov', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://frapi.marketsmojo.com/stocks_Pricemovement/pricemovement_info?sid=' + stockid + '&exchange=0&1d';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
}
  })

})
///////////////////////////////////////////////////////////7.MarketMojos TECH Score,used in OHLC component/////////////////////////////////////////////
app.get('/mmtechscore', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectPrice_techScore';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
    }
  })

})


////////////////////////////////////////////////////BLOOMBERG QUINT////////////////////////////////////////////////////
/////////////////////////////////////////////////////1.Bloomber quint Most Active,used in Screeners component
app.get('/bqma', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  
  request(url6, function (error, response, html) {
    
  if (!error) {
     // console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////////////////////////////2.Bloomber quint Price Increase Volume Increase,used in Bullish component
app.get('/bqpivi', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
     // console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
///////////////////////////////////////////////////////3.Bloomberg quint Price Increase Volume Decrease,used in Bullish component
app.get('/bqpivd', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////4.Bloomber quint Price Decrease Volume Increase,used in Bearish component
app.get('/bqpdvi', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
    //  console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////5.Bloomber quint Price Decrease Volume Decrease,used in Bearish component
app.get('/bqpdvd', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////6.Bloomber quint Price Flat Volume Increase,Not used 
app.get('/bqpfvi', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
///////////////////////////////////////////////////////7.Bloomber quint hitting 52 wk high,used in Bullish component
app.get('/bq52wkh', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
    //  console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////////8.Bloomber quint hitting 52 wk low,used in Bearish component
app.get('/bq52wkl', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////////////////////////////////9.Bloomber quint close to  52 wk high,used in Bullish component
app.get('/bqc52h', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////10.Bloomberg quint close to  52 wk low,used in Bearish component
app.get('/bqc52l', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////////////////////////////////11.Bloomber quint high volatility,not used
app.get('/bqvolatile', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////////////////12.Bloomber quint Fall from High,not used
app.get('/bqffh', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
     // console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
///////////////////////////////////////////////////////////////13.Bloomber quint recovery from low,not used
app.get('/bqrfl', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
/////////////////////////////////////////////////////////////////////14.Bloomber quint Bulk Deals,not used
app.get('/bqbulkdeal', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
     // console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
//////////////////////////////////////////////////////////////////////15.Bloomber quint Block Deals,not used
app.get('/bqblockdeal', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
///////////////////////////////////////////////////////////////////////16.Bloomber quint Insider Trading ,not used
app.get('/bqinsider', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////////////////////////////////////////17.Bloomber quint Only Buyers,used in Bullish component
app.get('/bqob', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////////////////////////////////////////////////18.Bloomber quint Only Sellers,used in Bearish component
app.get('/bqos', function (req, res) {

  let type = req.query.type
  

  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    
    if (!error) {
      //console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
//////////////////////////////////////////////////////////////////19.Bloomber quint Top Gainers,used in Bullish component
app.get('/bqtg', function (req, res) {

  //let type = req.query.type
  // console.log(type)

  //var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?type='+type+'&filter_key=index&filter_value=129';
  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_gainers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    if (!error) {
    //  console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
//////////////////////////////////////////////////////////////20.Bloomber quint Top Losers,used in Bearish component
app.get('/bqtl', function (req, res) {

   var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/stock-stats?duration=1D&type=top_losers&filter_key=index&filter_value=129';
  request(url6, function (error, response, html) {
    if (!error) {
     // console.log(((response.body).data))
      res.json(JSON.parse(response.body).data)
    }
  })
})
//##################Bloombergquint Data ##################################//
/////////////////////////////////////////////Bloombergquint Movement/////////////////////////////////////////////////
app.get('/bqmovement', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/movement?duration=1D';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Price Stats/////////////////////////////////////////////////
app.get('/bqpricestats', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/' + stockid + '/price-stats';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {
      //console.log(response.body.data)

      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Fundamentals/////////////////////////////////////////////////
app.get('/bqfundamentals', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/fundamentals';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Moving Averages/////////////////////////////////////////////////
app.get('/bqmovingaverages', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/moving-averages';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Delivery Volumes/////////////////////////////////////////////////
app.get('/bqdelvol', function (req, res) {
  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/delivery-volumes';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Quarterly Results/////////////////////////////////////////////////
app.get('/bqqresults', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/quarterly-results';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Total Returns/////////////////////////////////////////////////
app.get('/bqtr', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/total-returns';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint ShareHolding Snapshot/////////////////////////////////////////////////
app.get('/bqss', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/shareholding-snapshot';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Shareholding Comparison/////////////////////////////////////////////////
app.get('/bqsc', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/shareholding-comparison';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Promoter Holding/////////////////////////////////////////////////
app.get('/bqph', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/promoter-holding';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Key Stats/////////////////////////////////////////////////
app.get('/bqks', function (req, res) {

  let stockisin = req.query.stockisin

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockisin + '/key-statistics';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


     // res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Announcements/////////////////////////////////////////////////
app.get('/bqannouncements', function (req, res) {

  let stockisin = req.query.stockisin
  //console.log(stockisin)

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockisin + '/announcements';
  request(url6, function (error, response, html) {//console.log(res.json(response).data)
    if (!error) {


     // res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Corporate Announcements/////////////////////////////////////////////////
app.get('/bqca', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/corporate-actions';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Peer Details/////////////////////////////////////////////////
app.get('/bqpd', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/peer-details';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})

/////////////////////////////////////////////Bloombergquint in the news/////////////////////////////////////////////////
app.get('/bqitnews', function (req, res) {

  let bqnames = req.query.bqnames
  //console.log(bqnames)

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + bqnames + '/in-the-news';
  request(url6, function (error, response, html) {//console.log(res.json(response))
    if (!error) {


      //res.json((response))
      res.json(JSON.parse(response.body).data)


    }
  })


})

//////////////////////////////////////////Bloomberquint News////////////////////////////////////////////////////////////

app.get('/bqnews', function (req, res) {

  let bqname = req.query.bqname

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + bqname + '/in-the-news';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
    }
  })

})


app.get('/bqbdetails', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/stock-dna';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})


app.get('/bqgainingsectorsstocks', function (req, res) {

  let sectorid = req.query.sectorid
//console.log(sectorid)
  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/'+sectorid+'/details?duration=1D';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
}
  })

})
app.get('/bqgainingsectorsstocksdetails', function (req, res) {

  let sectorid = req.query.sectorid
//console.log(sectorid)
  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/'+sectorid+'/stocks?duration=1D';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (error) { console.log(error) }
    else
    if (!error) {

      res.json(JSON.parse(response.body).data)
}
  })

})


app.get('/bqadvdec', function (req, res) {

  let mcsymbol = req.query.mcsymbol
//onsole.log(mcsymbol)
  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/advances-declines';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
}
  })

})


app.get('/bqsectoralmovement', function (req, res) {

 var url6 = 'https://www.bloombergquint.com/feapi/markets/sectoral-movements?limit=100';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
      //console.log(res.json(JSON.parse(response.body)))
}
  })

})
app.get('/bqoptionslexpiryindex', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio/last-expiry?security-type=index&limit=200';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/bqoptionslexpirystock', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio/last-expiry?security-type=stock&limit=200';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/bqoptionsputcallrindex', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio?security-type=index&limit=20';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })

 app.get('/bqoptionsputcallrstock', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio?security-type=stock&limit=20';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })

app.get('/bqoptionsindexweekly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%2050/?expiry=1w';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/bqoptionsindexmonthly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%2050/?expiry=1m';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })


app.get('/bqoptionsbnindexweekly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%20BANK/?expiry=1w';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/bqoptionsbnindexmonthly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%20BANK/?expiry=1m';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
app.get('/bqgainingsectors', function (req, res) {

  let mcsymbol = req.query.mcsymbol
//console.log(mcsymbol)
  var url6 = 'https://www.bloombergquint.com/feapi/markets/indices/sectoral-indices?duration=1D&tab=gaining';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
}
  })

})


///////////////////////////////////Money control Price Volume Details for each stock,used in OHLC Module
app.get('/mcpv', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://api.moneycontrol.com/mcapi/v1/stock/price-volume?scId=' + mcsymbol;
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control Pharma Details ,used in Dashboard Module
app.get('/pharmadetails', function (req, res) {

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3Bcpr';
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////Money control Bank Nifty Details ,used in Dashboard Module
/////////////////////To get realtime data from moneycontrol////////////////////////
app.get('/mcniftyrealtime', function (req, res) {

  var url7 = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BNSX';
  request(url7, function (error, response, html) {
    if (!error) {
      res.json(JSON.parse(response.body).data)
    }
  })
})

app.get('/mcbankniftyrealtime', function (req, res) {

  var url7 = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3Bnbx';
  request(url7, function (error, response, html) {console.log(error)
    if (!error) {
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////India VIX Data from moneycontrol//////////////////////////

app.get('/mcvixrealtime', function (req, res) {

  var url9 = 'https://appfeeds.moneycontrol.com/jsonapi/market/indices&format=json&t_device=iphone&t_app=MC&t_version=48&ind_id=36';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body))


    }
  })


})
/////////////////////////VIX GRAPH//////////////////////////////////////////


app.get('/mcvixgraph', function (req, res) {

  var url9 = 'https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=36&range=1d&type=area';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////Money control CNX Details ,used in Dashboard Module
app.get('/cnxitd', function (req, res) {

  var url9 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3Bcnit?fields=sentiments,pivotLevels,sma,ema';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control CNXIT Daily Details ,used in Dashboard Module
app.get('/cnxitw', function (req, res) {

  var url9 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3Bcnit?fields=sentiments,pivotLevels,sma,ema';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control CNXIT Monthly Details ,used in Dashboard Module
app.get('/cnxitm', function (req, res) {

  var url9 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3Bcnit?fields=sentiments,pivotLevels,sma,ema';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control Nifty Metal Daily Details ,used in Dashboard Module
app.get('/niftymetald', function (req, res) {

  var url10 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3BCNXM?fields=sentiments,pivotLevels,sma,ema';
  request(url10, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control NIFTY METALS WEEKLY Details ,used in Dashboard Module
app.get('/niftymetalw', function (req, res) {

  var url10 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3BCNXM?fields=sentiments,pivotLevels,sma,ema';
  request(url10, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////Money Control Support and Resistance,Used in OHLC and Sector//////////////////////////////////////

app.get('/moneycontrolsnr', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + mcsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////////Money Control Support and Resistance Sector,Used in Sector//////////////////////////////////////
app.get('/moneycontrolsnrindex', function (req, res) {

  let mcindexsymbol = (req.query.mcindexsymbol).replace(/;/, "%3B")
//console.log(mcindexsymbol)
  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + mcindexsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})

////////////////////////////////////////Get Money Control Stock SWOT Data,Used in OHLC/////////////////////////
app.get('/swot', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://api.moneycontrol.com/mcapi/v1/extdata/mc-insights?scId=' + mcsymbol + '&type=d'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////Get Money Control Stock SWOT Data,Used in OHLC/////////////////////////
app.get('/mcswot', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://api.moneycontrol.com/mcapi/v1/swot/details?scId=' + mcsymbol + '&type=all'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////Get Money Control Stock Data,Used in OHLC/////////////////////////
app.get('/mcsd', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + mcsymbol;
  request(url6, function (error, response, html) {
    if (error) { console.log(error) }
    else
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////Get Money Control Stock Data,Used in Portfolio/////////////////////////
app.get('/mcsd1', function (req, res) {

  let mcsymbol1 = req.query.mcsymbol1

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + mcsymbol1;
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////Get Money Control Stock Data,Used in Portfolio/////////////////////////
app.get('/mcsd2', function (req, res) {

  let mcsymbol2 = req.query.mcsymbol2

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + mcsymbol2;
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////Get Money Control Stock Tickers/////////////////////////
app.get('/moneycontrolchartdata', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId=' + mcsymbol + '&type=N';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})

////////////////////////////////////////Get Money Control Historical Rating of a stock/////////////////////////
app.get('/mchistoricalrating', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://www.moneycontrol.com/mc/widget/historicalrating?classic=true&type=gson&indice_id=' + mcsymbol + '&period=D';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})


app.get('/moneycontrolsnrw', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/' + mcsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})
app.get('/moneycontrolsnrm', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/' + mcsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})

app.get('/mcti', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + mcsymbol + '?field=RSI';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})
app.get('/mctiw', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/' + mcsymbol + '?field=RSI';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})

app.get('/mctim', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/' + mcsymbol + '?field=RSI';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})



///////////////////////////////////Money control NIFTY METALS MONTHLY Details ,used in Dashboard Module
app.get('/niftymetalm', function (req, res) {

  var url10 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3BCNXM?fields=sentiments,pivotLevels,sma,ema';
  request(url10, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control NIFTY FINANCE Daily Details ,used in Dashboard Module
app.get('/niftyfind', function (req, res) {

  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3Bcnxf?fields=sentiments,pivotLevels,sma,ema';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)


    }
  })
})

///////////////////////////////////Money control NIFTY FINANCE WEEKLY Details ,used in Dashboard Module
app.get('/niftyfinw', function (req, res) {

  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3Bcnxf?fields=sentiments,pivotLevels,sma,ema';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control NIFTY FINANCE Monthlyly Details ,used in Dashboard Module
app.get('/niftyfinm', function (req, res) {

  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3Bcnxf?fields=sentiments,pivotLevels,sma,ema';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)


    }
  })


})


///////////////////////////////////Money control SECTOR Details ,used in Dashboard Module

app.get('/mcsectors', function (req, res) {

  var url11 = 'https://appfeeds.moneycontrol.com/appxml/indices_5_EN.json';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))
    }
  })
})

///////////////////////////////////Money control SECTORS DAILY Details ,used in Dashboard Module
app.get('/mcsectorsdetailsd', function (req, res) {
  let mcsectorsymbol = (req.query.mcsectorsymbol).replace(/;/, "%3B");
  
  //let  =mcsectorsymbol
  //console.log(mcsectorsymbol)
  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/'+mcsectorsymbol+'?field=RSI';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)
    }
    
  })
})

///////////////////////////////////Money control SECTORS WEEKLY Details ,used in Dashboard Module
app.get('/mcsectorsdetailsw', function (req, res) {
  let mcsectorsymbol = (req.query.mcsectorsymbol).replace(/;/, "%3B");
  
  //let  =mcsectorsymbol
  //console.log(mcsectorsymbol)
  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/'+mcsectorsymbol+'?field=RSI';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)
    }
    
  })
})
///////////////////////////////////Money control SECTORS MONTHLY Details ,used in Dashboard Module
app.get('/mcsectorsdetailsm', function (req, res) {
  let mcsectorsymbol = (req.query.mcsectorsymbol).replace(/;/, "%3B");
  
  //let  =mcsectorsymbol
  //console.log(mcsectorsymbol)
  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/'+mcsectorsymbol+'?field=RSI';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)
    }
    
  })
})
//////////////////////////////////////////MC SECTOR///////////////////////////////////////////////////////
app.get('/mcsectorgraph', function (req, res) {
  let indid = req.query.indid

  var url11 = 'https://appfeeds.moneycontrol.com//jsonapi//market//graph&format=json&ind_id=4&range=1d&type=area';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////////MC STOCK DETAILS of an Index/////////////////////////////////////////////////////////
app.get('/mcstockdetails', function (req, res) {
  let mcindexid = req.query.mcindexid
  var url11 = 'https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=json&type=0&ind_id='+mcindexid;
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


////////////////////////////////////////////MC STOCK DETAILS of an Index/////////////////////////////////////////////////////////
app.get('/mcstockdetails1', function (req, res) {
  let mcindexid1 = req.query.mcindexid1
  var url11 = 'https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=json&type=0&ind_id='+mcindexid1;
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////////MC INDEX DETAILS /////////////////////////////////////////////////////////
app.get('/mcindexchart', function (req, res) {
  let mcindexid = req.query.mcindexid
  var url11 = 'https://appfeeds.moneycontrol.com//jsonapi//market//graph&format=json&ind_id='+mcindexid+'&range=1d&type=area'+mcindexid;
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


////////////////////////////////////////MC TRENDING STOCKS////////////////////////////////////////////////////////////
app.get('/trendingstocks', function (req, res) {

  var url11 = 'https://www.moneycontrol.com/commonstore/commonfiles/trending_stocks.json?classic=true';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))
    }
  })
})


////////////////////////////////////////////MC OVERALL VIEW/////////////////////////////////////////////////////////
app.get('/mcoverall', function (req, res) {

  var url11 = 'https://www.moneycontrol.com/mc/widget/mfnavonetimeinvestment/get_chart_value1?classic=true';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})






app.get('/mcchartsdataohlc', function (req, res) {
  let mcsymbol = req.query.mcsymbol
  var url11 = 'https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol=BEL&resolution=5&from=1619949639&to=1620042745';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })
})


app.get('/mcchartsdata', function (req, res) {
  let mcsymbol = req.query.mcsymbol
  var url11 = 'https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId=' + mcsymbol + '&type=B';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })
})

////////////////////////////////////////////MC FnO DATA////////////////////////////
app.get('/fnodata', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://www.moneycontrol.com/mc/widget/foaction?classic=true'
  request(url6, function (error, response, html) {
    if (!error) {


      html2json(response.body)
      res.json((html2json(response.body)))


    }
  })


})


//##############################################################STOCK EDGE###################################################
app.get('/sescreener', function (req, res) {

 
  var url6 = 'https://api.stockedge.com/Api/FundamentalAlertsApi/GetSavedFundamentalAlertsByType/7002?relevantListings=10&page=1&pageSize=10&lang=en';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {
      res.json(JSON.parse(response.body).data)
}
  })

})


///############# ET Now Data ##################################//
//###########################################ET GET REQUESTS#####################################################

app.get('/etimpdata', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://json.bselivefeeds.indiatimes.com/marketband.json';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {

      //console.log(res.json((response.body)))
      //res.json(JSON.parse(response.body))


    }
  })
});
  ////////////////////////////////ET Index Data /////////////////////////////////////////////////////////////////////
  app.get('/etindices', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/getAllIndices?pagesize=100&marketcap=&exchange=nse'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })
  
  app.get('/etimesnews', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://economictimes.indiatimes.com/feed_marketslisting.cms?feedtype=json&msid=1977021501&curpg=1&callback=breakingnews'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json((response.body))


    }
  })


})


app.get('/nsexchange', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://json.bselivefeeds.indiatimes.com/ET_Community/sectors?exchange=&callback=filterGetDataCBsectors'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {
     

      res.json((response.body))


    }
  })


})



app.get('/etsmacrossover', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://sas.indiatimes.com/TechnicalsClient/getSMA.htm?crossovertype=CROSSED_ABOVE_SMA_20&ctype=SMA&pagesize=25&exchange=50&exchangeid=50&pageno=1&sortby=volume&sortorder=desc&companyid=0&year=0&filtertype=0&ctype=SMA&marketcap=&indicatorName=EMA5&crossoverType=Bullish';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})

app.get('/etvolumeshocker', function (req, res) {

  let mcsymbol = req.query.mcsymbol
  
  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/volumeshocker?pagesize=25&exchange=50&pageno=1&sortby=volumepercentagechange&sortorder=desc&avgvolumeover=DAY_3&marketcap=largecap%2Cmidcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})

app.get('/etsmabullishcrossover', function (req, res) {

  let mcsymbol = req.query.mcsymbol
  
  var url6 = 'https://etinsights.indiatimes.com/ET_TechnicalIndicator/getTechnicalDashboardData?pagesize=25&exchange=nse&pageno=1&sortby=percentChange&sortorder=desc&ctype=BUY_SELL_SIGNAL&indicatorName=EMA20&crossoverType=Bullish';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})

///////////////////////////////////////////GET ET News/////////////////////////////////////////////////////////
app.get('/etnews', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/gainers?pagesize=50&pageno=1&sort=intraday&sortby=percentchange&sortorder=desc&marketcap=largecap%2Cmidcap%2Csmallcap&duration=1d';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
	}
  })
})
})
app.get('/et1', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://json.bselivefeeds.indiatimes.com/ET_Community/companypagedata?companyid=8581';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {
        console.log("et1")
      res.json(JSON.parse(response.body))





    }
  })

})


app.get('/ethgainers', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/hourlygainers?pagesize=25&exchange=nse&pageno=1&service=gainers&sortby=percentchange&sortorder=desc&marketcap=largecap%2Cmidcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})
app.get('/ethlosers', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/hourlylosers?pagesize=25&exchange=nse&pageno=1&service=losers&sortby=percentchange&sortorder=asc&marketcap=largecap%2Cmidcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})



app.get('/Results', function (req, res) {
  let mcsymbol = req.query.mcsymbol

  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Stats/boardMeeting?pagesize=50&pageno=1&sortby=meetingDateStr&sortorder=asc&companyid=0&year=0&filtertype=latest&duration=U&marketcap=All';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      res.json(JSON.parse(response.body))
    }
  })
})

app.get('/etmacdbuy', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://sas.indiatimes.com/TechnicalsClient/getMACD.htm?crossovertype=MACD_CROSSED_ABOVE_SIGNAL&ctype=MACD&pagesize=100&exchange=50&pageno=1&service=gainers&sortby=volume&sortorder=desc&ctype=MACD&marketcap=largecap%2Cmidcap%2Csmallcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})
app.get('/etmacdsell', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://sas.indiatimes.com/TechnicalsClient/getMACD.htm?crossovertype=MACD_CROSSED_BELOW_SIGNAL&ctype=MACD&pagesize=100&exchange=50&pageno=1&service=gainers&sortby=volume&sortorder=desc&ctype=MACD&marketcap=largecap%2Cmidcap%2Csmallcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})


app.get('/etcompanydataohlc', function (req, res) {

  let companyid = req.query.companyid

  var url6 = 'https://json.bselivefeeds.indiatimes.com/ET_Community/companypagedata?companyid='+companyid+'&companytype=';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
}
  })

})

app.get('/etindexdetails', function (req, res) {
  let indexid = req.query.indexid
  let exchange = req.query.exchange
  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/getIndexByIds?indexid='+indexid+'&exchange='+exchange+'&pagesize=300&sortorder=desc&sortby=percentChange&company=true&pageno=1';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
      //console.log(res.json(JSON.parse(response.body)))
}
  })

})



app.get('/etsectors', function (req, res) {

  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Stats/sectorperformance?pagesize=3000&exchange=NSE&pageno=1&marketcap=';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})

app.get('/etrecos', function (req, res) {

  var url11 = 'https://economictimes.indiatimes.com/viewandrecofeed.cms?feedtype=sjson';
  request(url11, function (error, response, html) {
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })


})








  
//###########################################ET POST REQUESTS#####################################################

///########################ET now post request to get FII buying data ###############//
app.get('/etpost1', (req, res) => {
  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData';
  request(url11, function (error, response, html) {
    if (!error) {
      
      
      
chrome.getCookies('https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData', function(err, cookies) {
    
});
    



var options2 = {
  url: 'https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData',
  method: 'POST', // Don't forget this line
  headers: {
    'authority':'etmarketsapis.indiatimes.com',
    'sec-ch-ua':'"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' ,
    'accept':'application/json, text/javascript, */*; q=0.01' ,
    'dnt':'1' ,
    'sec-ch-ua-mobile':'?0', 
    'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' ,
    'content-type':'application/json' ,
    'origin':'https://economictimes.indiatimes.com' ,
    'sec-fetch-site':'same-site' ,
    'sec-fetch-mode': 'cors' ,
    'sec-fetch-dest': 'empty' ,
    'referer': 'https://economictimes.indiatimes.com/',
    'accept-language': 'en-US,en;q=0.9' 
},
"body": "{\"predefinedFilterName\":\"VALUE_STOCKS\",\"sortedField\":\"marketCapValue\",\"pageSize\":\"20\",\"sortedOrder\":\"desc\",\"pageNumber\":1,\"exchangeId\":\"50\",\"isBankingSector\":\"false\",\"fieldNames\":\"*\"}",
};


request(options2, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
    ( res.json(JSON.parse(body)));
    console.log('this is response1:', (response.body))
    //console.log( 'this is response:',(response.header))
  }
});
}
  })
  
})

  
app.get('/etDIIBuying', (req, res) => {
  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData';
  request(url11, function (error, response, html) {
    if (!error) {
     
      
      
chrome.getCookies('https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData', function(err, cookies) {
    
});
    



var options2 = {
  url: 'https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData',
  method: 'POST', // Don't forget this line
  headers: {
    'authority':'etmarketsapis.indiatimes.com',
    'sec-ch-ua':'"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' ,
    'accept':'application/json, text/javascript, */*; q=0.01' ,
    'dnt':'1' ,
    'sec-ch-ua-mobile':'?0', 
    'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' ,
    'content-type':'application/json' ,
    'origin':'https://economictimes.indiatimes.com' ,
    'sec-fetch-site':'same-site' ,
    'sec-fetch-mode': 'cors' ,
    'sec-fetch-dest': 'empty' ,
    'referer': 'https://economictimes.indiatimes.com/',
    'accept-language': 'en-US,en;q=0.9' 
},
"body": "{\"predefinedFilterName\":\"DII_BUYING\",\"sortedField\":\"marketCapValue\",\"pageSize\":\"20\",\"sortedOrder\":\"desc\",\"pageNumber\":1,\"exchangeId\":\"50\",\"isBankingSector\":\"false\",\"fieldNames\":\"* latestQDate:latestQDateDii\"}",
};




request(options2, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
    ( res.json(JSON.parse(body)));
    console.log('this is response2:', (response.body))
    //console.log( 'this is response:',(response.header))
  }
});
}
  })
  
})
//////////////////////////////////////////////////////ET Stock Data through Post Request///////////////////////////////////
app.post('/etcompanydata', async function (req, res) {

  let companyid = req.body

  //console.log(req.body)
  const promises = companyid.map(symbol => {
    axios.get('https://json.bselivefeeds.indiatimes.com/ET_Community/companypagedata?companyid='+symbol.companyid+'&companytype=').then((response) => {
      //console.log(response.data.bseNseJson.isin)
      var obj1 = [];
    //var obj1 = ({ isin: response.data.bseNseJson.isin,companyid:symbol.companyid })
    data = response.data
    data2 = data["bseNseJson"]
      for (let i in data2) {
      //console.log(data2[i])
        obj1.push({ indicator: data2[i]["companyName2"], stock: symbol.name,companyid:symbol.companyid });
      
      
   
      // MongoClient.connect(url, option, function (err, db) {
      //   if (err) throw err;
      //   var dbname = "ET"
      //   var dbo = db.db(dbname);
      //  dbo.collection("ETmapping2").insertMany(obj1)
      // })
    }

   }).catch((error) => {
       console.log(error)
     })
   })

  try {
    await Promise.all(promises)
  } catch (e) {
    console.log(e)
  }
})








///*************************************Trendlyne********************************///

////////////////////////////////////////////////**************Trendlyne GET stock******************************/

////////////////////////////////To get Brokerage Upgrades and other details///////////////////////////////////
app.get('/trendlynestocks1', (req, res) => {
  let tlid = req.query.tlid
  let tlname = req.query.tlname
  let eqsymbol = req.query.eqsymbol
  console.log("This is tendlynestocks1")

  var url11 = 'https://trendlyne.com/equity/getStockMetricParameterList/'+tlid+'/';
  request(url11, function (error, response, html) {
    if (!error) {
     
      
      
chrome.getCookies('https://trendlyne.com/equity/getStockMetricParameterList/'+tlid+'/', function(err, cookies) {
    
});
    



var options2 = {
  url: 'https://trendlyne.com/equity/getStockMetricParameterList/'+tlid+'/',
  method: 'GET', // Don't forget this line
  headers: {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": process.env.trendlynecookie
  },
  "referrer": 'https://trendlyne.com/equity/'+tlid+'/'+eqsymbol+'/'+tlname+'/',
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
};


request(options2, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
   ( res.json(JSON.parse(body)));
    }
});
}
  })
  
})


  //////////////////////////To get Durability/Momentum/Volatility SCORE/////////////////////////////////////////////
  
  app.get('/trendlynestocks2', function (req, res) {
    let tlid = req.query.tlid
    var url6 = 'https://trendlyne.com/mapp/v1/stock/web/ohlc/'+tlid
      request(url6, function (error, response, html) {
        if (!error) {
    
          console.log("This is tendlynestocks2")
          try {
            res.json(JSON.parse(response.body).data)
          } catch (e) {
            console.log("Error in tendlynestocks2")
          }
        
         // 
         
         
    
        }
      })
    
    
    })
	
   //////////////////////////To get nifty trendlyne details/////////////////////////////////////////////
  
  app.get('/trendlynenifty', function (req, res) {
    
    var url6 = 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1887'
    request(url6, function (error, response, html) {
      if (!error) {
    
        console.log("This is tendlynenifty")
        //res.json(JSON.parse(response.body))
        //res.json(html2json((response.body)))
        try {
          res.json(JSON.parse(response.body))
        } catch (e) {
          console.log("Error in tendlynenifty")
        }
    
        //  }else{"Currently issue in trendlynenifty"}
      }
    
    
    })
  });
  
	

	////////////////////////////////////////////TrendLyne Stocks///////////////////////////////////////////
    app.get('/trendlynestocks3', function (req, res) {
      let tlid = req.query.tlid
      var url6 = 'https://trendlyne.com/fundamentals/get-fundamental_results/'+tlid+'/'
        request(url6, function (error, response, html) {
          if (!error) {
      
            console.log("This is tendlynestocks3")
            res.json(((response.body)))
           
          } else {
            console.log(error)
          }
        })
      
      
      })
	  
	/////////////////////////////////////Trendlyne Top Gainers////////////////////////////////////////////////
	app.get('/tltg', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17096/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Future Price Gainers ///////////////////////////////////////////////////
app.get('/tlfpg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/price_gainers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Future Contract Gainers ///////////////////////////////////////////////////
app.get('/tlfcg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/contract_gainers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne Future most active value ///////////////////////////////////////////////////
app.get('/tlfmav', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/most_active_value/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne Future most active contract ///////////////////////////////////////////////////
app.get('/tlfmac', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/most_active_contract/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Gainers ///////////////////////////////////////////////////
app.get('/tloig', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/oi_gainers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Losers ///////////////////////////////////////////////////
app.get('/tloil', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/oi_losers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Premium ///////////////////////////////////////////////////
app.get('/tloip', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/premium/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Put gainers ///////////////////////////////////////////////////
app.get('/tloipg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/options/30-sep-2021-next/oi_gainers_put/all/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


///////////////////////////////////////////TrendLyne OI Discount ///////////////////////////////////////////////////
app.get('/tloid', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/discount/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


///////////////////////////////////////////TrendLyne OI call Gainers ///////////////////////////////////////////////////
app.get('/tloicg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/premium/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


///////////////////////////////////////////TrendLyne Relative Outperformance versus Nifty500 over day ///////////////////////////////////////////////////
app.get('/tlropd', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79796/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Relative Outperformance versus Nifty500 over week ///////////////////////////////////////////////////
app.get('/tlropw', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79795/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Relative Underformance versus Nifty500 over day ///////////////////////////////////////////////////
app.get('/tlrupd', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79811/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Relative underformance versus Nifty500 over week ///////////////////////////////////////////////////
app.get('/tlrupuw', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79810/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne 52 week High ///////////////////////////////////////////////////
app.get('/tl52h', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17110/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

//////////////////////////////////////////////TrendLyne 52wk Low///////////////////////////////////////////////////////
app.get('/tl52l', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17109/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne near 52 wk High///////////////////////////////////////////////////////
app.get('/tlnear52h', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17101/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne near 52 wk Low///////////////////////////////////////////////////////
app.get('/tlnear52l', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17102/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne Volume Shockers///////////////////////////////////////////////////////
app.get('/tlvs', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17097/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

//////////////////////////////////////////////TrendLyne RSI for all///////////////////////////////////////////////////////

app.get('/tlrsiall', function (req, res) {



  var url6 = 'https://trendlyne.com/fundamentals/json-screener/90234/3000/0/all/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne High Volume High Gain///////////////////////////////////////////////////////
app.get('/tlvhg', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17099/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne High Volume Low Gain///////////////////////////////////////////////////////
app.get('/tlvhl', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17100/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })



})
//////////////////////////////////////////////TrendLyne Rising Volumes Per Day///////////////////////////////////////////////////////
app.get('/tlrvpd', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/9844/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne Brokerage Upgrade///////////////////////////////////////////////////////
app.get('/tlbu', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/20014/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
  
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

//////////////////////////////////////////////TrendLyne Only Buyers///////////////////////////////////////////////////////
app.get('/tlob', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/27/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


//////////////////////////////////////////////Trendlyne //////////////////////////////////////////////////////////////
      
    
  
app.get('/nse', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/9844/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////Trendlyne //////////////////////////////////////////////////////////////

app.get('/nse1', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/all-in-one-screener-data-get/?perPageCount=25&pageNumber=0&query=NP_Q_GROWTH+%3E+0&columns=NP_Q_GROWTH%2CcurrentPrice%2CNI1Q_Q%2CPE_TTM%2CPBV_A%2CPEG_TTM%2CREV1Q_Q&sortBy=NP_Q_GROWTH&order=DESC&groupType=all'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

//////////////////////////////////////////////Trendlyne //////////////////////////////////////////////////////////////
app.get('/nse2', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/all-in-one-screener-data-get/?perPageCount=50&pageNumber=0&query=FIIPCT1Q+%3E+0&columns=FIIPCT1Q%2CcurrentPrice%2Cday_changeP%2Cmonth_changeP%2CPROMPCT%2CPROMPCT1Q%2CPROMPLEDGE%2CFIIHOLD%2CMFHOLD&sortBy=FIIPCT1Q&order=DESC&groupType=all'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

/////////////////////////////////////////////////////TRENDLYNE POST////////////////////////////////////////////////////////

///************************trendlyne post durability/Volatility/Momentum score start */
//const axiosCookieJarSupport = require('axios-cookiejar-support').default;
  //const tough = require('tough-cookie');
const instancetrendlyne = axios.create({ withCredentials: true });
  axiosCookieJarSupport(instancetrendlyne);
instancetrendlyne.defaults.jar = new tough.CookieJar()


app.post('/trendlynepostdvm', async function (req, res) {
  //obj1 = [];
  let tlid = req.body

  //console.log(req.body)
  const promises = tlid.map(symbol => {
  
      
    axios.get('https://trendlyne.com/mapp/v1/stock/web/ohlc/' + symbol.tlid).then((response) => {
      obj1=({ Date: symbol.Date,Time:symbol.time, Name: symbol.name,DurabilityScore: response.data.body.stockData[6], VolatilityScore: response.data.body.stockData[7], MomentumScore: response.data.body.stockData[8]  })
      
    //     MongoClient.connect(url,function (err, db) {
    //       if (err) console.log(err)
    //       var dbname = "Trendlyne"
    //       var dbo = db.db(dbname);
    //       dbo.collection("score").insertOne(obj1,forceServerObjectId=true,function (err,data) {

    //         if(err!=null){
    //             return console.log(err);
    //         }
    //         console.log(data.ops);
    //         console.log("Trendlyne Score Inserted.....");
    //     });
    //     db.close();
    // });
         
     

    }).catch((error) => {
      console.log(error)
    })
  })

  try {
    await Promise.all(promises)
  } catch (e) {
    console.log(e)
  }
})


//###########################################################################################################################
///////////////////////////////////////////////////Rediff///////////////////////////////////////////////////////////////

app.get('/Gainers', function (req, res) {

  var url = 'https://money.rediff.com/gainers';
  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      var company = [], pClose = [], currentPrice = [], change = [];
      var json = [];
      var tbody = $('tbody').first()
      var total = tbody.find('tr').length;
      //console.log('loop started');
      tbody.find('tr').each(function (i, elem) {
        company[i] = $(this).find('td a').eq(0).text().trim();
        pClose[i] = $(this).find('td').eq(1).text().trim();
        currentPrice[i] = $(this).find('td').eq(2).text().trim();
        change[i] = $(this).find('td font').eq(0).text().trim();

        json.push({
          company: company[i],
          pClose: pClose[i],
          currentPrice: currentPrice[i],
          change: change[i]
        });
      });
      //console.log('loop completed');
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(json));
      //console.log('done');
    }
  })
})
/////////////////////////////////////////////////////NSE INDIA/////////////////////////////////////////////////////////
//// Data from NSE India////

  
const instance = axios.create({ withCredentials: true });
  axiosCookieJarSupport(instance);
instance.defaults.jar = new tough.CookieJar()

//////////////////////////////////////////////////////Upcoming Results Data from NSE///////////////////////////////////////

 
   // axios.get('https://www1.nseindia.com/corporates/corpInfo/equities/getResultCalendar.jsp?Symbol=&Industry=&Period=All%20Forthcoming&Purpose=&period=All%20Forthcoming&symbol=&industry=&purpose=').then((response) => {


  
/// Stock related Data from nseindia// To be used in OHLC////
// const axios = require('axios').default;

const sessionConfig = {
  secret: 'MYSECRET',
  name: 'amitstockweb',
  resave: false,
  saveUninitialized: false,
  cookie : {
    sameSite: 'none', // THIS is the config you are looing for.
  }
};


  app.set('trust proxy', 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies


app.use(session(sessionConfig));
app.get('/trendlynepost', function (req, res) {
  req=fetch("https://trendlyne.com/equity/api/getLivePriceList/", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": "PTN4cA0cTjN9Zp1IwuZ7MhQ6rYdvMbGV",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "csrftoken=PTN4cA0cTjN9Zp1IwuZ7MhQ6rYdvMbGV; _ga=GA1.2.2089860351.1627538215; _gid=GA1.2.1901289626.1627538215"
  },
  "referrer": "https://trendlyne.com/features/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "pks%5B%5D=1057&pks%5B%5D=1119&pks%5B%5D=1289&pks%5B%5D=1362&pks%5B%5D=1363&pks%5B%5D=1366&pks%5B%5D=1409&pks%5B%5D=147&pks%5B%5D=1887&pks%5B%5D=1888&pks%5B%5D=1895&pks%5B%5D=1896&pks%5B%5D=1898&pks%5B%5D=1900&pks%5B%5D=1902&pks%5B%5D=1905&pks%5B%5D=268&pks%5B%5D=276&pks%5B%5D=4482&pks%5B%5D=549&pks%5B%5D=629&pks%5B%5D=699&pks%5B%5D=79883&pks%5B%5D=804&pks%5B%5D=842&pks%5B%5D=878&pks%5B%5D=93115&force=false",
  "method": "POST",
  "mode": "cors"
  });
  //console.log(res)
})

// To get Stock Historical Data from NSE India
app.get('/nsestockhistdata', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/historical/cm/equity?symbol='+stock+'&series=[%22EQ%22]&from=09-03-2021&to='+todaydate))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})




//NSE Insider Trading

app.get('/nseinstrading', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/corporates-pit?'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})



app.get('/nsedatastockohlc2', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol='+stock+'&section=trade_info'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})


app.get('/nseresults', function (req, res) {
  //let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/event-calendar?index=equities&subject=Financial%20Results'), {
       headers: {
         //cookie: res.headers['bm_sv=9C569B42FD024DAAE1EA21E9C6625106~sAy0A2tWyRGfKiKgjYablYBwApJeI7lHR2L4QM6VUe6RLHSCnWqb+/8xIleZ/RXz5qq466jHokK0jwchB7mcm9dPG3TyfavX2KkiUtjSJYGPB2wCUwDl9rsDviygHC9qzGdl/s3XEqmEPsjYtDJEOJZxlYsd2wMfd2wBqe8hDNk=; Domain=.nseindia.com; Path=/; Max-Age=7191; HttpOnly'],
        
           "User-Agent": "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)",
         "Referer": "http://www.nseindia.com/",
           "Host": "http://www.nseindia.com/",
           "Accept": '*/*',
           "sameSite": 'none' // cookie is returned as a header
       }
  })
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})

app.get('/nsedatastockohlc1', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol='+stock))
      // headers: {
      //   //cookie: res.headers['bm_sv=9C569B42FD024DAAE1EA21E9C6625106~sAy0A2tWyRGfKiKgjYablYBwApJeI7lHR2L4QM6VUe6RLHSCnWqb+/8xIleZ/RXz5qq466jHokK0jwchB7mcm9dPG3TyfavX2KkiUtjSJYGPB2wCUwDl9rsDviygHC9qzGdl/s3XEqmEPsjYtDJEOJZxlYsd2wMfd2wBqe8hDNk=; Domain=.nseindia.com; Path=/; Max-Age=7191; HttpOnly'],
        
      //     "User-Agent": "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)",
      //   "Referer": "http://www.nseindia.com/",
      //     "Host": "http://www.nseindia.com/",
      //   "Accept": '*/*',
      //   "Sec-Fetch-Site":'same-site',
      //     "sameSite": 'none' // cookie is returned as a header
      // }
      
   // })
    
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})
    
  /// Indices related Data from nseindia// To be used in ////  
app.get('/nsedata2', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})
 /// F&O related Data from nseindia// To be used in Future and Options ////  


app.get('/nsedata4', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/liveEquity-derivatives?index=top20_contracts'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})  

//Nifty Indices Advance Decline Data
app.get('/nsedataadvdec', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/common/json/indicesAdvanceDeclines.json'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})
//Nifty Indices Change in indices prices
app.get('/nsedataindices', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/homepage/Indices1.json'))
    .then(data => res.json(data.data))
    //.catch(data => console.error(res.response.data))
})
//Nifty Stock showing increase in OI
app.get('/nsedatasioi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/live_market/dynaContent/live_analysis/oi_spurts/topPositiveOIChangeData.json'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})
//Nifty Indices and stocks showing price increase  OI increase
app.get('/nsedatapioii', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/live_market/dynaContent/live_analysis/oi_spurts/riseInPriceRiseInOI.json'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})
//NSE Nifty Openinterest Data

app.get('/nsedataniftyoi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY'))
    .then(data => res.json(data.data))
    //.catch(data => console.error(res.response.data))
    
  
})
//NSE Banknifty OI Data

app.get('/nsedatabniftyoi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})
//NSE nifty Pharma OI Data
app.get('/nsedatapniftyoi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})


app.get('/nsedatastockoi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/option-chain-equities?symbol='+stock))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})

app.get('/nse22', function (req, res) {
  let mcsymbol = req.query.mcsymbol

  // url11=('https://www1.nseindia.com/corporates/corpInfo/equities/getResultCalendar.jsp?Symbol=&Industry=&Period=All%20Forthcoming&Purpose=&period=All%20Forthcoming&symbol=&industry=&purpose=');
  // request(axios.get(url11), function (error, response, html) {
  //   if (!error) {

  //     // res.json(JSON.parse(response.body))
  //     console.log(response.data)


   // }
 // })
  return axios.get('https://www1.nseindia.com/corporates/corpInfo/equities/getResultCalendar.jsp?Symbol=&Industry=&Period=All%20Forthcoming&Purpose=&period=All%20Forthcoming&symbol=&industry=&purpose=')
 // console.log(axios.get('https://www1.nseindia.com/corporates/corpInfo/equities/getResultCalendar.jsp?Symbol=&Industry=&Period=All%20Forthcoming&Purpose=&period=All%20Forthcoming&symbol=&industry=&purpose='))
})




////////////////////////////////////////////NSE POST DATA/////////////////////////////////////////////////////////////

app.post('/nsepostdata1', async function (req, res) {
  
  let eqsymbol1 = req.body
  var obj = [];
  const promises = eqsymbol1.map(symbol => {
   
      
    instance.get('https://www.nseindia.com/')
      .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol=' + symbol.eqsymbol1 + '&section=trade_info'))
      .then(data => {
        if (data.data['securityWiseDP']['deliveryToTradedQuantity']) {
          obj=({ symbol: symbol.eqsymbol1, percentage: data.data['securityWiseDP']['deliveryToTradedQuantity'] })
        //   MongoClient.connect(url, function (err, db) {
        //     if (err) console.log("Mongo error");
        //     var dbname = "nse"
        //           var dbo = db.db(dbname);
               
        //     dbo.collection("nse").insertOne(obj)
        // })
   
        } else { console.log("No deliveryToTradedQuantity present ") }
      }
    )
      .catch((error) => {
        console.log(error)
    })
  }).catch((error) => {
            console.log(error)
          })

 
      
      
      
    
    .catch(data => console.error("There is error"))   

  //})
  
  
  try {
    await Promise.all(promises)
  } catch (e) {
    console.log(e)
  }
})

//To get via post request from NSE stocks PCR//working but getting duplicate id issue as well
app.post('/nsepostdata2', async function (req, res) {
  
  let eqsymbol1 = req.body
  //var obj = [];
  const promises = eqsymbol1.map(symbol => {
   
      
    instance.get('https://www.nseindia.com/')
      .then(data => instance.get('https://www.nseindia.com/api/option-chain-equities?symbol='+symbol.eqsymbol1))
      .then(data => {
        //console.log(data.data['filtered'])
          if (data.data['filtered']['CE']['totOI'] && data.data['filtered']['PE']['totOI']) {
            var obj=({ symbol: symbol.eqsymbol1, pcr: data.data['filtered']['PE']['totOI']/data.data['filtered']['CE']['totOI'] })
        //     MongoClient.connect(url, function (err, db) {
        //       if (err) console.log("Mongo error");
        //       var dbname = "nse"
        //       var dbo = db.db(dbname);
              
        //       dbo.collection("nsepcr").insertOne(obj,forceServerObjectId=true,function (err,data) {

        //         if(err!=null){
        //             return console.log(err);
        //         }
        //         console.log(data.ops);
        //     });
        //     db.close();
        // });
         // }) 
     
          } else { console.log("No Put/Call present ") }
        }
      )
        .catch((error) => {
          console.log(error)
      })
    }).catch((error) => {
              console.log(error)
            })
  
   
        
        
        
      
      .catch(data => console.error("There is error"))   
  
    //})
  
    
    try {
      await Promise.all(promises)
    } catch (e) {
      console.log(e)
    }
  })
///////////////////////////////////////OPSTRA/////////////////////////////////////////////////////////////////////////
//To get Expiry Dates Weekly
app.get('/opstraexpirydates', function (req, res) {

  var url11 = 'https://opstra.definedge.com/api/weeklies';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})

//To get Expiry Dates Monthly
app.get('/opstraexpirydatesmonthly', function (req, res) {

  var url11 = 'https://opstra.definedge.com/api/monthlies';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


// To get Nifty PCR Data from Opstra
app.get('/opstradatanifty', function (req, res) {
  let nextexpiry = req.query.nextexpiry
  

  var url11 = 'https://opstra.definedge.com/api/openinterest/free/NIFTY&'+nextexpiry
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
//To get BANK NIFTY Data from Opstra
app.get('/opstradatabanknifty', function (req, res) {
  let nextexpiry = req.query.nextexpiry
  

  var url11 = 'https://opstra.definedge.com/api/openinterest/free/NIFTY&'+nextexpiry
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
//To get stock data from Opstra
app.get('/opstrastockdata', function (req, res) {
  let nextexpirymonthly = req.query.nextexpirymonthly
  let eqsymbol = req.query.eqsymbol
 
  //console.log("nextexpirymonthly="+nextexpirymonthly,"symbol="+eqsymbol)
  var url11 = 'https://opstra.definedge.com/api/openinterest/free/'+eqsymbol+'&'+nextexpirymonthly
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


/////////////////////////////////////////////Kite/Zerodha/Stock Reports///////////////////////////////////////////////////
//Getting Technicals from Zerodha
app.get('/kite1', function (req, res) {
  let timeframe = req.query.timeframe
  let eqsymbol = req.query.eqsymbol
  
  var url11 = 'https://mo.streak.tech/api/tech_analysis/?timeFrame='+timeframe+'&stock=NSE%3A'+eqsymbol+'&user_id=';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })
})

app.get('/kitestockreports',csrfProtection, (req, res) => {
  var url11 = 'https://stockreports.zerodha.com/api/pdf/';
  request(url11, function (error, response, html) {
    if (!error) {
      //console.log("csrf=" + req.csrfToken())
      
     // res.render({ csrfToken: req.csrfToken() });
      
chrome.getCookies('https://stockreports.zerodha.com/api/pdf/', function(err, cookies) {
  console.log(cookies) 
  this.cookies1 = (cookies);
  this.csrf = (cookies['csrftoken']);
  this.ga = (cookies['_ga']);
  this.gid = (cookies['_gid']);
  this.publictoken = (cookies['public_token']);
  this.messages = '"5fa53faffe273135c32025277005d525349a6411$[['+'\\'+'"'+'__json_message'+'\\'+'"'+'\\'+'0540'+'\\'+'05425'+'\\'+'054'+'\\'+'"Successfully signed in as kanchan.kapila.2020@gmail.com.'+'\\'+'"'+']]'+'"'
  this.sessionid = (cookies['sessionid']);
  this.gatag= (cookies['_gat_gtag_UA_29026012_19']);
  
    
  this.finalcookie=("'_ga=" + this.ga + ';' + ' _gid=' + this.gid + ';' + ' public_token=' + this.publictoken + ';' + ' messages='+this.messages+';'+' csrftoken='+this.csrf+';'+' sessionid='+this.sessionid+"'");
  //console.log('Cookies:', req.cookies);
  //console.log('Cookies:', req.cookies['_ga']);
  //console.log('signed Cookies:', req.signedCookies.user);
  
});
var options1 = {
  url: 'https://stockreports.zerodha.com/api/pdf/',
  method: 'GET', // Don't forget this line
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": this.csrf,
    "cookie": this.finalcookie
    
  },
  "referrer": "https://stockreports.zerodha.com/ratings",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
};
request(options1, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
    
    (res.json(JSON.parse(response.body)));
    //( console.log(JSON.parse(response.body)));
    //console.log('this is response:', (response.body).data)
    //console.log( 'this is response:',(response.header))
  }
});

}
})
})
    


/////////////////////////////////////*****************************NIFTY TRADERS******************///////////////////////////

app.get('/niftytradersallstocks', function (req, res) {

  var url11 = 'https://api.niftytrader.in/api/NIndex/stocks_list_api';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })
})



app.get('/ntniftypcr', function (req, res) {

  var url11 = 'https://api.niftytrader.in/api/FinNiftyOI/niftypcrData?reqType=niftypcr';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })
})
///////////////////////////////////GOOGLE NEWS API ///////////////////////////////

app.get('/gnewsapi', function (req, res) {
  let stockname = (req.query.stockname).replace(/ /, "%20A")
  let stockname1 = (req.query.stockname).replace(' Ltd.', "")
  
  var url11 = 'https://newsapi.org/v2/everything?q=%22'+stockname1+'%22&from='+gnewsyesterday+'&to='+gnewsdatetoday+'&sortBy=popularity&apiKey=28bda70739cc4024ba3f30223e8c25a8';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      //console.log(response)
      res.json(JSON.parse(response.body))


    }
  })
})
app.get('/gnewsapiall', function (req, res) {
  
  
  var url11 = 'https://newsapi.org/v2/everything?domains=moneycontrol.com,economictimes.indiatimes.com&from='+gnewsyesterday+'&to='+gnewsdatetoday+'&sortBy=popularity&apiKey=28bda70739cc4024ba3f30223e8c25a8';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      //console.log(response)
      res.json(JSON.parse(response.body))


    }
  })
})


app.use(express.static(__dirname+"/dist"));
  
app.get("/*", function (req, res) {

  res.sendFile(path.join(__dirname +'/dist/index.html'));
});
app.get('/ngsw-worker.js', function(request, response) {
  response.sendFile(path.resolve(__dirname, '/dist/', 'ngsw-worker.js'));
})
// http.createServer({
// }, app)
// .listen(3000, function () {
//   console.log('Example app listening on port 3000! Go to http://localhost:3000/')
// })
app.listen(3000, function() {
  console.log('Your node is running on port 3000');
});
}
