
const async = require("async")
const express = require('express');
const cluster = require('cluster');
const { Pool, Client } = require('pg')
var compression = require('compression');
const numCPUs = require('os').cpus().length;
var http = require('http')
const app = express();
const port = 3000
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require("jquery")(window);
const redis = require('redis');
const client = redis.createClient();
const cors = require('cors');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(compression());
const bodyParser = require("body-parser");
const request = require('request')
//app.use(cors());
const path=require('path')
const session = require('express-session');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
const fetch = require("node-fetch");
const csrf = require('csurf');
//process.env.trendlynecookie='_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1569867014.1655128119; csrftoken=E6Enh9jtzvrG703wPG1PegAZnUaBj3VzcGHg4yXWxUti90VcN1wkQfra96zoxdb; .trendlyne=s6snszghi8xrzcf8j8ys837ulsjphsxd'
//process.env.trendlynecookie='_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1569867014.1655128119; csrftoken=z8g4Tb6TXT2SzjTUescAaZ1tPUQn45SX5MozUsI0WVCJOqItLbLtf1iXn3DjWQzm; .trendlyne=ifcvixwjgwe23cde7dtlmjs3xlmktp6j; _gat=1'
//process.env.trendlynecookie=''
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });
const fs =require('fs')
const axios = require('axios');
var html2json = require('html2json').html2json;
var allowCrossDomain=function(req, res,next){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, X-Requested-With,Accept, Cache-Control");
   res.header("Access-Control-Allow-Headers", "Origin,Content-Type, X-Requested-With,Accept, Cache-Control");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
}; // Important
app.use(allowCrossDomain);

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

  app.get('/api/cluster', (req, res) => {
    let worker = cluster.worker.id;
    res.send(`Running on worker with id ==> ${worker}`);
  });

const axiosCookieJarSupport = require('axios-cookiejar-support').default;
  const tough = require('tough-cookie');
 
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "amit",
  password: "amit0605",
  port: "5432"
});
const client = new Client({
  user: "amit",
  host: "localhost",
  database: "amit",
  password: "amit0605",
  port: "5432"
  
})
const sessionConfig = {
  secret: 'amit0605',
  id_login: 'amit.kapila.2009@gmail.com',
  resave: false,
  saveUninitialized: false,
  cookie : {
    sameSite: 'Lax', // THIS is the config you are looing for.
  }
};


  app.set('trust proxy', 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies



//////////////////////////////////Moneycontrol Post request for MCvolume////////
app.post('/api/mcvolume', async function (req, res) {

  let mcsymbol = req.body

  //console.log(req.body)
  const promises = mcsymbol.map(symbol => {
  
      
    axios.get('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + symbol.mcsymbol).then((response) => {
      var obj1 = ({ Date: symbol.Date,Time:symbol.time, Name: symbol.name,Symbol:symbol.mcsymbol, "CurrentVol": response.data.data.VOL, "FiveDVol": response.data.data.DVolAvg5, "TenDVol": response.data.data.DVolAvg10, "TwentyDVol": response.data.data.DVolAvg20, "ThirtyDVol": response.data.data.DVolAvg30,"CPrice":response.data.data.pricecurrent,"PChangeper":response.data.data.pricepercentchange,"StockName":response.data.data.SC_FULLNM })
      
      console.log("executing mcvolume")
      pool.query('INSERT INTO mcvolume (info)  VALUES ($1)', [obj1], (err, res) => {
        console.log(err, res)
        
      })
     // pool.end()
     
      

     

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

  
app.post('/api/mcvolume1', async function (req, res) {

  let mcsymbol1 = req.body

  //console.log(req.body)
  const promises = mcsymbol1.map(symbol => {
  
      
    axios.get('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + symbol.mcsymbol1).then((response) => {
      var obj1 = ({ Date: symbol.Date,Time:symbol.time, Name: symbol.name,Symbol:symbol.mcsymbol, "CurrentVol": response.data.data.VOL, "FiveDVol": response.data.data.DVolAvg5, "TenDVol": response.data.data.DVolAvg10, "TwentyDVol": response.data.data.DVolAvg20, "ThirtyDVol": response.data.data.DVolAvg30,"CPrice":response.data.data.pricecurrent,"PChangeper":response.data.data.pricepercentchange,"StockName":response.data.data.SC_FULLNM })
      
      console.log("executing mcvolume1")
      pool.query('INSERT INTO mcvolume (info)  VALUES ($1)', [obj1], (err, res) => {
        console.log(err, res)
        
      })
     // pool.end()
     
      

     

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
app.get('/api/kotakview', async function (req, res) {

  let eqsymbol = req.query.eqsymbol

      
     
      const result = await pool.query
        
        ("select info ->>'IndCode' as IndCoded , info ->>'SectorId' as SectorId , info ->>'CompanyId' as CompanyId, info ->>'MarketCap' as MarketCap, info ->>'SectorName' as SectorName,info ->>'Finance' as Finance, info ->>'ValueScore' as ValueScore,info ->>'CompanyName' as CompanyName, info ->>'GrowthScore' as GrowthScore,info ->>'HealthScore' as HealthScore, info ->>'ReleaseDate' as ReleaseDate,info ->> 'QualityScore' as QualityScore,info ->> 'RankBySector' as RankBySector, info ->>'DividendScore' as DividendScore, info ->>'CompanyShortName' as CompanyShortName, info ->>'OverallMarketRank' as OverallMarketRank, info ->>'PastPerformanceScore' as PastPerformanceScore from kotaksec where info->>'CompanyShortName' = $1", [eqsymbol]);
    // console.log(result.fields) 
     res.json(result.rows)
  //pool.end();

     

    })
  

const { response } = require('express');
const { json } = require('body-parser');

var moment = require('moment');


  app.get('/api/test', async function (req, res) {
    try {
      const response = await axios.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=9&range=5d&type=area');
     // console.log(JSON.parse((response.body).data));
    } catch (error) {
      console.error(error);
    }
  });


//This is MC Stock Data Details used in OHLC component using parallel api run
app.get('/api/mcshare', (req, res) => {
  
  let mcsymbol = req.query.mcsymbol
  let eqsymbol = req.query.eqsymbol
  let stockid = req.query.stockid
 
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
app.get('/api/mcsharefrequent', (req, res) => {
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

///////////////////////////////////////////////////////////7.MarketMojos Markets,used in OHLC component/////////////////////////////////////////////

app.get('/api/mmmarkets', function (req, res) {

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
app.get('/api/mmstockinfo', function (req, res) {

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

app.get('/api/mmrecos', function (req, res) {

  var url11 = 'https://www.marketsmojo.com/recommendation/api/getRecos.php?sortColumn=DATE&sortDirection=desc&page=1&pageSize=250&format=json&TPeriod%5B%5D=1week&CType%5B%5D=2&CType%5B%5D=1&CType%5B%5D=3';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
}
  })
})

app.get('/api/mmmaxbuyrecos', function (req, res) {

  var url11 = 'https://www.marketsmojo.com/recommendation/api/getRecos.php?List=buy&sortColumn=MAXCAL&sortDirection=asc&page=1&pageSize=50&format=json';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
}
  })
})


///////////////////////////////////////////////////////////7.MarketMojos Peers,used in OHLC component/////////////////////////////////////////////
app.get('/api/mmpeers', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.marketsmojo.com/technical_card/getCardInfo?sid=' + stockid + '&se=nse&cardlist=sectPrice_indiScale';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)
    }
  })

})
app.get('/api/mmpmov', function (req, res) {

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
app.get('/api/mmtechscore', function (req, res) {

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
app.get('/api/bqma', function (req, res) {

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
app.get('/api/bqpivi', function (req, res) {

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
app.get('/api/bqpivd', function (req, res) {

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
app.get('/api/bqpdvi', function (req, res) {

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
app.get('/api/bqpdvd', function (req, res) {

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
app.get('/api/bqpfvi', function (req, res) {

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
app.get('/api/bq52wkh', function (req, res) {

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
app.get('/api/bq52wkl', function (req, res) {

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
app.get('/api/bqc52h', function (req, res) {

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
app.get('/api/bqc52l', function (req, res) {

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
app.get('/api/bqvolatile', function (req, res) {

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
app.get('/api/bqffh', function (req, res) {

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
app.get('/api/bqrfl', function (req, res) {

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
app.get('/api/bqbulkdeal', function (req, res) {

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
app.get('/api/bqblockdeal', function (req, res) {

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
app.get('/api/bqinsider', function (req, res) {

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
app.get('/api/bqob', function (req, res) {

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
app.get('/api/bqos', function (req, res) {

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
app.get('/api/bqtg', function (req, res) {

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
app.get('/api/bqtl', function (req, res) {

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
app.get('/api/bqmovement', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/movement?duration=1D';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Price Stats/////////////////////////////////////////////////
app.get('/api/bqpricestats', function (req, res) {

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
app.get('/api/bqfundamentals', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/fundamentals';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Moving Averages/////////////////////////////////////////////////
app.get('/api/bqmovingaverages', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/moving-averages';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Delivery Volumes/////////////////////////////////////////////////
app.get('/api/bqdelvol', function (req, res) {
  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/delivery-volumes';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Quarterly Results/////////////////////////////////////////////////
app.get('/api/bqqresults', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/quarterly-results';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Total Returns/////////////////////////////////////////////////
app.get('/api/bqtr', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/total-returns';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint ShareHolding Snapshot/////////////////////////////////////////////////
app.get('/api/bqss', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/shareholding-snapshot';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Shareholding Comparison/////////////////////////////////////////////////
app.get('/api/bqsc', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/shareholding-comparison';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Promoter Holding/////////////////////////////////////////////////
app.get('/api/bqph', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/promoter-holding';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Key Stats/////////////////////////////////////////////////
app.get('/api/bqks', function (req, res) {

  let stockisin = req.query.stockisin

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockisin + '/key-statistics';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


     // res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Announcements/////////////////////////////////////////////////
app.get('/api/bqannouncements', function (req, res) {

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
app.get('/api/bqca', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/corporate-actions';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////////////Bloombergquint Peer Details/////////////////////////////////////////////////
app.get('/api/bqpd', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/peer-details';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})

/////////////////////////////////////////////Bloombergquint in the news/////////////////////////////////////////////////
app.get('/api/bqitnews', function (req, res) {

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

app.get('/api/bqnews', function (req, res) {

  let bqname = req.query.bqname

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + bqname + '/in-the-news';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
    }
  })

})


app.get('/api/bqbdetails', function (req, res) {

  let stockid = req.query.stockid

  var url6 = 'https://www.bloombergquint.com/next/feapi/stock/' + stockid + '/stock-dna';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})


app.get('/api/bqgainingsectorsstocks', function (req, res) {

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
app.get('/api/bqgainingsectorsstocksdetails', function (req, res) {

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


app.get('/api/bqadvdec', function (req, res) {

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


app.get('/api/bqsectoralmovement', function (req, res) {

 var url6 = 'https://www.bloombergquint.com/feapi/markets/sectoral-movements?limit=100';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
      //console.log(res.json(JSON.parse(response.body)))
}
  })

})
app.get('/api/bqoptionslexpiryindex', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio/last-expiry?security-type=index&limit=200';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/api/bqoptionslexpirystock', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio/last-expiry?security-type=stock&limit=200';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/api/bqoptionsputcallrindex', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio?security-type=index&limit=20';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })

 app.get('/api/bqoptionsputcallrstock', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/put-call-ratio?security-type=stock&limit=20';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })

app.get('/api/bqoptionsindexweekly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%2050/?expiry=1w';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/api/bqoptionsindexmonthly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%2050/?expiry=1m';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })


app.get('/api/bqoptionsbnindexweekly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%20BANK/?expiry=1w';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
 app.get('/api/bqoptionsbnindexmonthly', function (req, res) {

  var url6 = 'https://www.bloombergquint.com/feapi/markets/options/NIFTY%20BANK/?expiry=1m';
   //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
   request(url6, function (error, response, html) {
     if (!error) {
 
       res.json(JSON.parse(response.body))
       //console.log(res.json(JSON.parse(response.body)))
 }
   })
 
 })
app.get('/api/bqgainingsectors', function (req, res) {

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
app.get('/api/mcpv', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://api.moneycontrol.com/mcapi/v1/stock/price-volume?scId=' + mcsymbol;
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control Pharma Details ,used in Dashboard Module
app.get('/api/pharmadetails', function (req, res) {

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3Bcpr';
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////Money control Bank Nifty Details ,used in Dashboard Module
/////////////////////To get realtime data from moneycontrol////////////////////////
app.get('/api/mcniftyrealtime', function (req, res) {

  var url7 = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BNSX';
  request(url7, function (error, response, html) {
    if (!error) {
      res.json(JSON.parse(response.body).data)
    }
  })
})

app.get('/api/mcbankniftyrealtime', function (req, res) {

  var url7 = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3Bnbx';
  request(url7, function (error, response, html) {console.log(error)
    if (!error) {
      res.json(JSON.parse(response.body).data)
    }
  })
})
////////////////////////////India VIX Data from moneycontrol//////////////////////////

app.get('/api/mcvixrealtime', function (req, res) {

  var url9 = 'https://appfeeds.moneycontrol.com/jsonapi/market/indices&format=json&t_device=iphone&t_app=MC&t_version=48&ind_id=36';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body))


    }
  })


})
/////////////////////////VIX GRAPH//////////////////////////////////////////


app.get('/api/mcvixgraph', function (req, res) {

  var url9 = 'https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=36&range=1d&type=area';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////Money control CNX Details ,used in Dashboard Module
app.get('/api/cnxitd', function (req, res) {

  var url9 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3Bcnit?fields=sentiments,pivotLevels,sma,ema';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control CNXIT Daily Details ,used in Dashboard Module
app.get('/api/cnxitw', function (req, res) {

  var url9 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3Bcnit?fields=sentiments,pivotLevels,sma,ema';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control CNXIT Monthly Details ,used in Dashboard Module
app.get('/api/cnxitm', function (req, res) {

  var url9 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3Bcnit?fields=sentiments,pivotLevels,sma,ema';
  request(url9, function (error, response, html) {
    if (!error) {



      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control Nifty Metal Daily Details ,used in Dashboard Module
app.get('/api/niftymetald', function (req, res) {

  var url10 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3BCNXM?fields=sentiments,pivotLevels,sma,ema';
  request(url10, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control NIFTY METALS WEEKLY Details ,used in Dashboard Module
app.get('/api/niftymetalw', function (req, res) {

  var url10 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3BCNXM?fields=sentiments,pivotLevels,sma,ema';
  request(url10, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
/////////////////////////////////////Money Control Support and Resistance,Used in OHLC and Sector//////////////////////////////////////

app.get('/api/moneycontrolsnr', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + mcsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  request(url6, function (error, response, html) {//console.log(response)
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////////Money Control Support and Resistance Sector,Used in Sector//////////////////////////////////////
app.get('/api/moneycontrolsnrindex', function (req, res) {

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
app.get('/api/swot', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://api.moneycontrol.com/mcapi/v1/extdata/mc-insights?scId=' + mcsymbol + '&type=d'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////Get Money Control Stock SWOT Data,Used in OHLC/////////////////////////
app.get('/api/mcswot', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://api.moneycontrol.com/mcapi/v1/swot/details?scId=' + mcsymbol + '&type=all'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////Get Money Control Stock Data,Used in OHLC/////////////////////////
app.get('/api/mcsd', function (req, res) {

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
app.get('/api/mcsd1', function (req, res) {

  let mcsymbol1 = req.query.mcsymbol1

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + mcsymbol1;
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////Get Money Control Stock Data,Used in Portfolio/////////////////////////
app.get('/api/mcsd2', function (req, res) {

  let mcsymbol2 = req.query.mcsymbol2

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + mcsymbol2;
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
////////////////////////////////////////Get Money Control Stock Tickers/////////////////////////
app.get('/api/moneycontrolchartdata', function (req, res) {

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
app.get('/api/mchistoricalrating', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://www.moneycontrol.com/mc/widget/historicalrating?classic=true&type=gson&indice_id=' + mcsymbol + '&period=D';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})


app.get('/api/moneycontrolsnrw', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/' + mcsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})
app.get('/api/moneycontrolsnrm', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/' + mcsymbol + '?fields=sentiments,pivotLevels,sma,ema';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})

app.get('/api/mcti', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/' + mcsymbol + '?field=RSI';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})
app.get('/api/mctiw', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/' + mcsymbol + '?field=RSI';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body).data)





    }
  })

})

app.get('/api/mctim', function (req, res) {

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
app.get('/api/niftymetalm', function (req, res) {

  var url10 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3BCNXM?fields=sentiments,pivotLevels,sma,ema';
  request(url10, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control NIFTY FINANCE Daily Details ,used in Dashboard Module
app.get('/api/niftyfind', function (req, res) {

  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3Bcnxf?fields=sentiments,pivotLevels,sma,ema';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)


    }
  })
})

///////////////////////////////////Money control NIFTY FINANCE WEEKLY Details ,used in Dashboard Module
app.get('/api/niftyfinw', function (req, res) {

  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3Bcnxf?fields=sentiments,pivotLevels,sma,ema';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)


    }
  })


})
///////////////////////////////////Money control NIFTY FINANCE Monthlyly Details ,used in Dashboard Module
app.get('/api/niftyfinm', function (req, res) {

  var url11 = 'https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3Bcnxf?fields=sentiments,pivotLevels,sma,ema';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body).data)


    }
  })


})


///////////////////////////////////Money control SECTOR Details ,used in Dashboard Module

app.get('/api/mcsectors', function (req, res) {

  var url11 = 'https://appfeeds.moneycontrol.com/appxml/indices_5_EN.json';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))
    }
  })
})

///////////////////////////////////Money control SECTORS DAILY Details ,used in Dashboard Module
app.get('/api/mcsectorsdetailsd', function (req, res) {
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
app.get('/api/mcsectorsdetailsw', function (req, res) {
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
app.get('/api/mcsectorsdetailsm', function (req, res) {
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
app.get('/api/mcsectorgraph', function (req, res) {
  let indid = req.query.indid

  var url11 = 'https://appfeeds.moneycontrol.com//jsonapi//market//graph&format=json&ind_id=4&range=1d&type=area';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////////MC STOCK DETAILS of an Index/////////////////////////////////////////////////////////
app.get('/api/mcstockdetails', function (req, res) {
  let mcindexid = req.query.mcindexid
  var url11 = 'https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=json&type=0&ind_id='+mcindexid;
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


////////////////////////////////////////////MC STOCK DETAILS of an Index/////////////////////////////////////////////////////////
app.get('/api/mcstockdetails1', function (req, res) {
  let mcindexid1 = req.query.mcindexid1
  var url11 = 'https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=json&type=0&ind_id='+mcindexid1;
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
////////////////////////////////////////////MC INDEX DETAILS /////////////////////////////////////////////////////////
app.get('/api/mcindexchart', function (req, res) {
  let mcindexid = req.query.mcindexid
  var url11 = 'https://appfeeds.moneycontrol.com//jsonapi//market//graph&format=json&ind_id='+mcindexid+'&range=1d&type=area'+mcindexid;
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


////////////////////////////////////////MC TRENDING STOCKS////////////////////////////////////////////////////////////
app.get('/api/trendingstocks', function (req, res) {

  var url11 = 'https://www.moneycontrol.com/commonstore/commonfiles/trending_stocks.json?classic=true';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {

      res.json(JSON.parse(response.body))
    }
  })
})


////////////////////////////////////////////MC OVERALL VIEW/////////////////////////////////////////////////////////
app.get('/api/mcoverall', function (req, res) {

  var url11 = 'https://www.moneycontrol.com/mc/widget/mfnavonetimeinvestment/get_chart_value1?classic=true';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})






app.get('/api/mcchartsdataohlc', function (req, res) {
  let mcsymbol = req.query.mcsymbol
  var url11 = 'https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol=BEL&resolution=5&from=1619949639&to=1620042745';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })
})


app.get('/api/mcchartsdata', function (req, res) {
  let mcsymbol = req.query.mcsymbol
  var url11 = 'https://www.moneycontrol.com/mc/widget/stockdetails/getChartInfo?classic=true&scId=' + mcsymbol + '&type=B';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })
})

////////////////////////////////////////////MC FnO DATA////////////////////////////
app.get('/api/fnodata', function (req, res) {

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
app.get('/api/sescreener', function (req, res) {

 
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

app.get('/api/etimpdata', function (req, res) {

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
  app.get('/api/etindices', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/getAllIndices?pagesize=100&marketcap=&exchange=nse'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })
})

  app.get('/api/etsharetoday', function (req, res) {

    let eqsymbol = req.query.eqsymbol
  
    var url6 = 'https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode='+eqsymbol+'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=10648&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company'
    request(url6, function (error, response, html) {
      if (!error) {
  
  
        res.json(JSON.parse(response.body))
  
  
      }
    })
  })
  app.get('/api/etimesnews', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://economictimes.indiatimes.com/feed_marketslisting.cms?feedtype=json&msid=1977021501&curpg=1&callback=breakingnews'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json((response.body))


    }
  })


})


app.get('/api/nsexchange', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://json.bselivefeeds.indiatimes.com/ET_Community/sectors?exchange=&callback=filterGetDataCBsectors'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {
     

      res.json((response.body))


    }
  })


})



app.get('/api/etsmacrossover', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://sas.indiatimes.com/TechnicalsClient/getSMA.htm?crossovertype=CROSSED_ABOVE_SMA_20&ctype=SMA&pagesize=25&exchange=50&exchangeid=50&pageno=1&sortby=volume&sortorder=desc&companyid=0&year=0&filtertype=0&ctype=SMA&marketcap=&indicatorName=EMA5&crossoverType=Bullish';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})

app.get('/api/etvolumeshocker', function (req, res) {

  let mcsymbol = req.query.mcsymbol
  
  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/volumeshocker?pagesize=25&exchange=50&pageno=1&sortby=volumepercentagechange&sortorder=desc&avgvolumeover=DAY_3&marketcap=largecap%2Cmidcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})

app.get('/api/etsmabullishcrossover', function (req, res) {

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
app.get('/api/etnews', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/gainers?pagesize=50&pageno=1&sort=intraday&sortby=percentchange&sortorder=desc&marketcap=largecap%2Cmidcap%2Csmallcap&duration=1d';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))
	}
  })
})

app.get('/api/et1', function (req, res) {

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


app.get('/api/ethgainers', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/hourlygainers?pagesize=25&exchange=nse&pageno=1&service=gainers&sortby=percentchange&sortorder=desc&marketcap=largecap%2Cmidcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})
app.get('/api/ethlosers', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/hourlylosers?pagesize=25&exchange=nse&pageno=1&service=losers&sortby=percentchange&sortorder=asc&marketcap=largecap%2Cmidcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})



app.get('/api/Results', function (req, res) {
  let mcsymbol = req.query.mcsymbol

  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Stats/boardMeeting?pagesize=50&pageno=1&sortby=meetingDateStr&sortorder=asc&companyid=0&year=0&filtertype=latest&duration=U&marketcap=All';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      res.json(JSON.parse(response.body))
    }
  })
})

app.get('/api/etmacdbuy', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://sas.indiatimes.com/TechnicalsClient/getMACD.htm?crossovertype=MACD_CROSSED_ABOVE_SIGNAL&ctype=MACD&pagesize=100&exchange=50&pageno=1&service=gainers&sortby=volume&sortorder=desc&ctype=MACD&marketcap=largecap%2Cmidcap%2Csmallcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})
app.get('/api/etmacdsell', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://sas.indiatimes.com/TechnicalsClient/getMACD.htm?crossovertype=MACD_CROSSED_BELOW_SIGNAL&ctype=MACD&pagesize=100&exchange=50&pageno=1&service=gainers&sortby=volume&sortorder=desc&ctype=MACD&marketcap=largecap%2Cmidcap%2Csmallcap';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))





    }
  })

})


app.get('/api/etcompanydataohlc', function (req, res) {

  let companyid = req.query.companyid

  var url6 = 'https://json.bselivefeeds.indiatimes.com/ET_Community/companypagedata?companyid='+companyid+'&companytype=';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

      //res.json(JSON.parse(response.body))
      try {
        res.json(JSON.parse(response.body))
      } catch (e) {
        console.log("Error in etcompanydataohlc")
      }
}
  })

})

app.get('/api/etindexdetails', function (req, res) {
  let indexid = req.query.indexid
  let exchange = req.query.exchange
  var url6 = 'https://etmarketsapis.indiatimes.com/ET_Stats/getIndexByIds?indexid='+indexid+'&exchange='+exchange+'&pagesize=300&sortorder=desc&sortby=percentChange&company=true&pageno=1';
  //var url9='https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+mcsymbol
  request(url6, function (error, response, html) {
    if (!error) {

     // res.json(JSON.parse(response.body))
      try {
        res.json(JSON.parse(response.body))
      } catch (e) {
        console.log("Error in etindexdetails")
      }
      //console.log(res.json(JSON.parse(response.body)))
}
  })

})



app.get('/api/etsectors', function (req, res) {

  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Stats/sectorperformance?pagesize=3000&exchange=NSE&pageno=1&marketcap=';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})

app.get('/api/etrecos', function (req, res) {

  var url11 = 'https://economictimes.indiatimes.com/viewandrecofeed.cms?feedtype=sjson';
  request(url11, function (error, response, html) {
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })


})








  
//###########################################ET POST REQUESTS#####################################################

///########################ET now post request to get FII buying data ###############//
app.get('/api/etpost1', (req, res) => {
  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData';
  request(url11, function (error, response, html) {
    if (!error) {
      
      
      

    



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

  
app.get('/api/etDIIBuying', (req, res) => {
  var url11 = 'https://etmarketsapis.indiatimes.com/ET_Screeners/getFilteredData';
  request(url11, function (error, response, html) {
    if (!error) {
     
      
      

    



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
app.get('/api/trendlynecookietest',csrfProtection, (req, res) => {
  // var url11 = 'https://trendlyne.com/equity/getStockMetricParameterList/13';
  // request(url11, function (error, response, html) {
  //   if (!error) {
  
      

  
  
    
  

  

var options1 = {
  url: "https://trendlyne.com/news-by-trendlyne/v4/",
  method: 'GET', // Don't forget this line
  "headers": {
    "accept": "text/html, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://trendlyne.com/features/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
};
request(options1, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
    
   // (res.json(JSON.parse(response.body)));
    //( console.log(JSON.parse(response.body)));
    //console.log('this is response:', (response.body).data)
    //console.log( 'this is response:',(response.header))
  }
});

//}
 })
// })
  




////********************************************Kotak Securities*****************/
app.get('/api/kotakhealthscore', (req, res) => {
  
    console.log("This is Kotak Health Score")
   // global.document = new JSDOM('https://trendlyne.com/getUserNavBar/').window.document;
   // console.log(global.document.cookie.cookie)

 
 
  var url11 = 'https://www.kotaksecurities.com/TSTerminal/Fundamentals/MasterData/GetHealthScoreScreenerData?sectorId=-1&marketCap=LC&healthScoreValue=A&defaultView=false';
  request(url11, function (error, response, html) {
    if (!error) {
   

      var options2 = {
        url: 'https://mtrade.kotaksecurities.com/TSTerminal/Fundamentals/MasterData/GetHealthScoreScreenerData?sectorId=-1&marketCap=ALL&healthScoreValue=A&defaultView=true',
        method: 'GET', // Don't forget this line
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "_ga=GA1.2.1340509370.1653745738; _nv_did=253330646.1653745752.1585996377122177135239zqaz7; _gcl_au=1.1.873030795.1653745910; ORG36141=cab000d5-e326-4945-b583-d453ad82e69a; _fbp=fb.1.1653745914138.1241231693; _gid=GA1.2.675168011.1655284601; __stdf=0; __stgeo=\"0\"; __stp={\"visit\":\"returning\",\"uuid\":\"a9ce3eb2-3758-4168-9364-3a92b30979bb\",\"ck\":\"ZSGPW\"}; _nv_uid=253330646.1653745752.46ba573e-2c31-47df-bc30-44347db76191.1655284600.1655322664.6.0; _nv_utm=253330646.1653745752.6.2.dXRtc3JjPWdvb2dsZXx1dG1jY249KG5vdCBzZXQpfHV0bWNtZD1vcmdhbmljfHV0bWN0cj0obm90IHByb3ZpZGVkKXx1dG1jY3Q9KG5vdCBzZXQpfGdjbGlkPShub3Qgc2V0KQ==; _nv_ab_ver_6941_3655=4515; _nv_ab_cid=[\"4032\",\"3490\",\"2420\",\"3655\"]; _nv_hit=253330646.1655322954.cHZpZXc9Mw==; _uetsid=de457520ec8b11ec87534f87fb22df6a; _uetvid=53ce8fa0de8d11ec8991b5e9297a9184; ASP.NET_SessionId=audkpnbvnjcvyjujypffrvuz; _PLATFORMAUTH=D5F76307007C6DC202A1FFE1CF68408D2E4AD03C634BCD33A78247B911937F15788C846B6970D2DC74ADD47AF777D07205AE68828D118314D9CF0C8468044EF44AA7DA1970AFA5CC66D0C855499FC18E028E6D41F7B9B4797C667B541CDF7527EE038E96FFAAD58534CEE7E9592B61437CF319A9AD1711F9DCA53EBF831454F2ED76C889E647540D6CA6289B7176D75DFCAFFA6122E5049DBC5FEDF95CA5C95A41093FBA2B0F0D414CAF66D3AF1581938E7CD9527D76A239F5A538741CEE4321E9A5DA5383B8EDF6CFA399682DB12714CB16CF8FBB3BFB1020C0A29E52EF3EC7CC8ED4357B0B43F6D0B3E1A52947353BDED9724B2741B4142BBCA16B9120E400CFE2F31A0584A9585F3C141144E7C83B3DCBE9F7115B4F28574A6756BD70C6027D5BCCC4ACF675532BFECA46E3509D62A5487317797A4E462D07E2809BFF9C206A10DD4F489716CACBE3F6A54E9CD8CC44A7B10B979C3A9DB5F35191B6C38C9DE43EED54A529288B060FB699A1317BAD798398ECF7F750F1686218CD85B17977FF7F3C4843B5A87CF339313AC3D4D6E983F4A92853BA0B7ED946E1BAB8F6DDE122E3869DC94A12884EECC25D2C4F98DB80BB6ADFE684053566ED9AA152DFF30CEA8E219C94F3EFED13D977A23C27A6BE2180C56E46C7E5A26C357F32AE605E16E094A6FAA3951EF7A1FE1DBE5C8AE838BFCB75C9AD87A880BACD31DC185D87FE21FB0A771D836FCAD89621AA871986AF49FBF82C12327DCDDB344A233FA4B7DE39891E2304DDF57A9E748101E8CFEA104838DF06F57BD9427A1A7EA52CBC835E7B171762F91A853D3D24204AED19EBA8E70DDACC65B0A5CF16858120C51028D26581C7BBB9EBF3B48DC1297E1028E31791AAE7CC5FD241D98075095B3023233F5610CD00649A331B7624A9B2CA64A91F02BF5591C8C02BCDE7C541FD89AB1460DF39EF15; userTheme=; AppConnection=ZSGPW-824a37b9fa6b4fff9b98a18778a9aed1; __sts={\"sid\":1655370717349,\"tx\":1655370717349,\"url\":\"https%3A%2F%2Fmtrade.kotaksecurities.com%2FTSTerminal%2FRealTime%2FWatchList%2FSRWatchList\",\"pet\":1655370717349,\"set\":1655370717349}; __stbpnenable=0"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
      };


request(options2, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
    res.json(JSON.parse(response.body));
   


    
    const obj1 = ((JSON.parse(response.body)));
    console.log(obj1.length)
    console.log("executing kotaksecurities")

    for (let i = 0; i < obj1.length; i += 1){
      const obj2 = obj1[i];
      console.log(obj2)
      pool.query('INSERT INTO kotaksec (info) VALUES ($1)',[obj2], (err, res) => {
        console.log(err, res)
        
      })
      
    }
      
     
       
 
    }
});
}
  })
  
})


///*************************************Trendlyne********************************///

////////////////////////////////////////////////**************Trendlyne GET stock******************************/

////////////////////////////////To get Brokerage Upgrades and other details///////////////////////////////////
//app.use(session(sessionConfig));
  app.get('/api/trendlynestocks1', (req, res) => {
  let tlid = req.query.tlid
  let tlname = req.query.tlname
  let eqsymbol = req.query.eqsymbol
    console.log("This is tendlynestocks1")
   // global.document = new JSDOM('https://trendlyne.com/getUserNavBar/').window.document;
   // console.log(global.document.cookie.cookie)

 
 
  var url11 = 'https://trendlyne.com/equity/getStockMetricParameterList/'+tlid;
  request(url11, function (error, response, html) {
    if (!error) {
   

var options2 = {
  url: 'https://trendlyne.com/equity/getStockMetricParameterList/'+tlid,
  method: 'GET', // Don't forget this line
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": process.env.trendlynecookie
  },
  "referrer": "https://trendlyne.com/equity/"+tlid+"/"+eqsymbol+"/"+tlname+"/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
};


request(options2, (err, response, body) => {
  if (err) {
      //console.log(err);
  } else {
    (res.json(JSON.parse(body)));
   // console.log(JSON.parse(body))
    }
});
}
  })
  
})


  //////////////////////////To get Durability/Momentum/Volatility SCORE/////////////////////////////////////////////
  
  app.get('/api/trendlynestocks2', (req, res) => {
    let eqsymbol = req.query.eqsymbol
    //console.log(eqsymbol)
    var url11 = 'https://trendlyne.com/mapp/v1/stock/chart-data/175/SMA/';
    request(url11, function (error, response, html) {
      if (!error) {
        
        res.json(JSON.parse(response.body))
        
    }
    })
    
  })
  
  

	////////////////////////////////////////////TrendLyne Stocks///////////////////////////////////////////
    app.get('/api/trendlynestocks3', function (req, res) {
      let tlid = req.query.tlid
      var url6 = 'https://trendlyne.com/fundamentals/get-fundamental_results/'+tlid+'/'
        request(url6, function (error, response, html) {
          if (!error) {
      
            console.log("This is tendlynestocks3")
           // res.json(((response.body)))
           
          } else {
          //  console.log(error)
          }
        })
      
      
      })
	  
	/////////////////////////////////////Trendlyne Top Gainers////////////////////////////////////////////////
	app.get('/api/tltg', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17096/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Future Price Gainers ///////////////////////////////////////////////////
app.get('/api/tlfpg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/price_gainers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Future Contract Gainers ///////////////////////////////////////////////////
app.get('/api/tlfcg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/contract_gainers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne Future most active value ///////////////////////////////////////////////////
app.get('/api/tlfmav', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/most_active_value/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne Future most active contract ///////////////////////////////////////////////////
app.get('/api/tlfmac', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/most_active_contract/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Gainers ///////////////////////////////////////////////////
app.get('/api/tloig', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/oi_gainers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Losers ///////////////////////////////////////////////////
app.get('/api/tloil', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/oi_losers/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Premium ///////////////////////////////////////////////////
app.get('/api/tloip', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/premium/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

///////////////////////////////////////////TrendLyne OI Put gainers ///////////////////////////////////////////////////
app.get('/api/tloipg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/options/30-sep-2021-next/oi_gainers_put/all/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


///////////////////////////////////////////TrendLyne OI Discount ///////////////////////////////////////////////////
app.get('/api/tloid', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/discount/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


///////////////////////////////////////////TrendLyne OI call Gainers ///////////////////////////////////////////////////
app.get('/api/tloicg', function (req, res) {

  

  var url6 = 'https://trendlyne.com/futures-options/api-filter/futures/30-sep-2021-next/premium/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


///////////////////////////////////////////TrendLyne Relative Outperformance versus Nifty500 over day ///////////////////////////////////////////////////
app.get('/api/tlropd', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79796/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Relative Outperformance versus Nifty500 over week ///////////////////////////////////////////////////
app.get('/api/tlropw', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79795/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Relative Underformance versus Nifty500 over day ///////////////////////////////////////////////////
app.get('/api/tlrupd', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79811/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne Relative underformance versus Nifty500 over week ///////////////////////////////////////////////////
app.get('/api/tlrupuw', function (req, res) {

  

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/79810/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
///////////////////////////////////////////TrendLyne 52 week High ///////////////////////////////////////////////////
app.get('/api/tl52h', function (req, res) {

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
app.get('/api/tl52l', function (req, res) {

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
app.get('/api/tlnear52h', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17101/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne near 52 wk Low///////////////////////////////////////////////////////
app.get('/api/tlnear52l', function (req, res) {

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
app.get('/api/tlvs', function (req, res) {

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

app.get('/api/tlrsiall', function (req, res) {



  var url6 = 'https://trendlyne.com/fundamentals/json-screener/90234/3000/0/all/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////TrendLyne High Volume High Gain///////////////////////////////////////////////////////
app.get('/api/tlvhg', function (req, res) {

  let returnedname = req.query.returnedname

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/17099/10/0/index/'+returnedname
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
const chrome = require('chrome-cookies-secure');
const puppeteer = require('puppeteer');

const url = 'https://trendlyne.com/';

const getCookies = (callback) => {
    chrome.getCookies(url, 'puppeteer', function(err, cookies) {
        if (err) {
            console.log(err, 'error');
            return
        }
        console.log(cookies, 'cookies');
        callback(cookies);
    }, 'Profile2') // e.g. 'Profile 2'
}

getCookies(async (cookies) => {
    const browser = await puppeteer.launch({ 
        headless: false
    });
    const page = await browser.newPage();

    await page.setCookie(...cookies);
    await page.goto(url);
    await page.waitForTimeout(1000);
    browser.close();
});
app.get('/api/test1', function (req, res) {

  chrome.getCookies('https://trendlyne.com/getUserNavBar/', function(err, cookies) {
    console.log(cookies);
  });



  var url6 ='https://trendlyne.com/getUserNavBar/'
  request(url6, function (error, response, html) {
    //console.log()
    if (!error) {
     
      console.log(response.caseless.dict['set-cookie'])
      //res.json(JSON.parse(response))
     // console.log(response)


    }
  })



})

//////////////////////////////////////////////TrendLyne High Volume Low Gain///////////////////////////////////////////////////////
app.get('/api/tlvhl', function (req, res) {

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
app.get('/api/tlrvpd', function (req, res) {

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
app.get('/api/tlbu', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/20014/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
  
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

//////////////////////////////////////////////TrendLyne Only Buyers///////////////////////////////////////////////////////
app.get('/api/tlob', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/27/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})


//////////////////////////////////////////////Trendlyne //////////////////////////////////////////////////////////////
      
    
  
app.get('/api/nse', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/json-screener/9844/5/0/index/NIFTY500/nifty-500/'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})
//////////////////////////////////////////////Trendlyne //////////////////////////////////////////////////////////////

app.get('/api/nse1', function (req, res) {

  let mcsymbol = req.query.mcsymbol

  var url6 = 'https://trendlyne.com/fundamentals/all-in-one-screener-data-get/?perPageCount=25&pageNumber=0&query=NP_Q_GROWTH+%3E+0&columns=NP_Q_GROWTH%2CcurrentPrice%2CNI1Q_Q%2CPE_TTM%2CPBV_A%2CPEG_TTM%2CREV1Q_Q&sortBy=NP_Q_GROWTH&order=DESC&groupType=all'
  request(url6, function (error, response, html) {
    if (!error) {


      res.json(JSON.parse(response.body))


    }
  })


})

//////////////////////////////////////////////Trendlyne //////////////////////////////////////////////////////////////
app.get('/api/nse2', function (req, res) {

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

/////////////////////////////////////////////////////NSE INDIA/////////////////////////////////////////////////////////
//// Data from NSE India////

  
const instance = axios.create({ withCredentials: true });
  axiosCookieJarSupport(instance);
instance.defaults.jar = new tough.CookieJar()

//////////////////////////////////////////////////////Upcoming Results Data from NSE///////////////////////////////////////



//app.use(session(sessionConfig));
app.get('/api/trendlynepost', function (req, res) {
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
app.get('/api/nsestockhistdata', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/historical/cm/equity?symbol='+stock+'&series=[%22EQ%22]&from=09-03-2021&to='+todaydate))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})




//NSE Insider Trading

app.get('/api/nseinstrading', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/corporates-pit?'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})



app.get('/api/nsedatastockohlc2', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol='+stock+'&section=trade_info'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})


app.get('/api/nseresults', function (req, res) {
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

app.get('/api/nsedatastockohlc1', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol='+stock))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})
    
  /// Indices related Data from nseindia// To be used in ////  
app.get('/api/nsedata2', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})
 /// F&O related Data from nseindia// To be used in Future and Options ////  


app.get('/api/nsedata4', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/liveEquity-derivatives?index=top20_contracts'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})  

//Nifty Indices Advance Decline Data
app.get('/api/nsedataadvdec', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/common/json/indicesAdvanceDeclines.json'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
})
//Nifty Indices Change in indices prices
app.get('/api/nsedataindices', function (req, res) {
    
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/homepage/Indices1.json'))
    .then(data => res.json(data.data))
    //.catch(data => console.error(res.response.data))
})
//Nifty Stock showing increase in OI
app.get('/api/nsedatasioi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/live_market/dynaContent/live_analysis/oi_spurts/topPositiveOIChangeData.json'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})
//Nifty Indices and stocks showing price increase  OI increase
app.get('/api/nsedatapioii', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www1.nseindia.com/live_market/dynaContent/live_analysis/oi_spurts/riseInPriceRiseInOI.json'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})

//NSE nifty Pharma OI Data
app.get('/api/nsedatapniftyoi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY'))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})


app.get('/api/nsedatastockoi', function (req, res) {
  let stock = req.query.stock
  instance.get('https://www.nseindia.com/')
    .then(data => instance.get('https://www.nseindia.com/api/option-chain-equities?symbol='+stock))
    .then(data => res.json(data.data))
    .catch(data => console.error(res.response))
    
  
})

app.get('/api/nse22', function (req, res) {
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
app.get('/api/opstraexpirydates', function (req, res) {

  var url11 = 'https://opstra.definedge.com/api/weeklies';
  request(url11, function (error, response, html) {
    if (!error) {

     // console.log(JSON.parse(response))
     // (((response.body)))

    }
  })


})

//To get Expiry Dates Monthly
app.get('/api/opstraexpirydatesmonthly', function (req, res) {

  var url11 = 'https://opstra.definedge.com/api/monthlies';
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})


// To get Nifty PCR Data from Opstra
app.get('/api/opstradatanifty', function (req, res) {
  let nextexpiry = req.query.nextexpiry
  

  var url11 = 'https://opstra.definedge.com/api/openinterest/free/NIFTY&'+nextexpiry
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
//To get BANK NIFTY Data from Opstra
app.get('/api/opstradatabanknifty', function (req, res) {
  let nextexpiry = req.query.nextexpiry
  

  var url11 = 'https://opstra.definedge.com/api/openinterest/free/NIFTY&'+nextexpiry
  request(url11, function (error, response, html) {
    if (!error) {

      res.json(JSON.parse(response.body))


    }
  })


})
//To get stock data from Opstra
app.get('/api/opstrastockdata', function (req, res) {
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
app.get('/api/kite1', function (req, res) {
  let timeframe = req.query.timeframe
  let eqsymbol = req.query.eqsymbol
  
  var url11 = 'https://mo.streak.tech/api/tech_analysis/?timeFrame='+timeframe+'&stock=NSE%3A'+eqsymbol+'&user_id=';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })
})



  


/////////////////////////////////////*****************************NIFTY TRADERS******************///////////////////////////

app.get('/api/niftytradersallstocks', function (req, res) {

  var url11 = 'https://api.niftytrader.in/api/NIndex/stocks_list_api';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })
})



app.get('/api/ntniftypcr', function (req, res) {

  var url11 = 'https://api.niftytrader.in/api/FinNiftyOI/niftypcrData?reqType=niftypcr';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      
      res.json(JSON.parse(response.body))


    }
  })
})

  /////////////Nifty trader POST request////////////////
  
  app.get('/api/ntstockdetails', (req, res) => {
    let eqsymbol = req.query.eqsymbol
    //console.log(eqsymbol)
    var url11 = 'https://api.niftytrader.in/webapi/Live/stockAnalysis';
    request(url11, function (error, response, html) {
      if (!error) {
        
        
        
 
      
  
  
  
  var options2 = {
    url: 'https://api.niftytrader.in/webapi/Live/stockAnalysis',
    method: 'POST', // Don't forget this line
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://www.niftytrader.in/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": '{\"symbol\":\"'+eqsymbol+'\"}',
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }
  
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
  
  
  
///////////////////////////////////GOOGLE NEWS API ///////////////////////////////

app.get('/api/gnewsapi', function (req, res) {
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
app.get('/api/gnewsapiall', function (req, res) {
  
  
  var url11 = 'https://newsapi.org/v2/everything?domains=moneycontrol.com,economictimes.indiatimes.com&from='+gnewsyesterday+'&to='+gnewsdatetoday+'&sortBy=popularity&apiKey=28bda70739cc4024ba3f30223e8c25a8';
  request(url11, function (error, response, html) {//console.log(response)
    if (!error) {
      //console.log(response)
      res.json(JSON.parse(response.body))


    }
  })
})


app.use(express.static(__dirname+"/"));
  
app.get("/", function (req, res) {

  res.sendFile(path.join(__dirname +'/dist/index.html'));
});
// app.get('/api/ngsw-worker.js', function(request, response) {
//   response.sendFile(path.join(__dirname + '/dist/ngsw-worker.js'));
//   console.log(__dirname)
// })

app.listen(8090, function() {
  console.log('Your node is running on port 8090');
});
}
