
const async = require("async")
const express = require('express');
const cluster = require('cluster');
const { Pool, Client } = require('pg')
var compression = require('compression');
const numCPUs = require('os').cpus().length;
var http = require('https')
const app = express();
const port = 8090
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
// const { Compress } = require('gzipper');

//   const gzip = new Compress('./src', './dist', {
//     verbose: true,
//     brotli: true,
//     deflate: true,
//   });

//   try {
//     const files =  gzip.run();
//     console.info('Compressed files: ', files);
//   } catch (err) {
//     console.error(err);
//   }

process.env.trendlynecookie='__utma=185246956.775644955.1603113261.1614010114.1614018734.3; _ga=GA1.2.775644955.1603113261; _gid=GA1.2.39707591.1656426055; _gat=1; csrftoken=lGfU7cAnlhGstuIficsDap3KoBq3ut0Zz9DGLnPd1qnKoD2KU03nvvqmIj6dL2HJ; .trendlyne=2r8aijrkip6d34942mkc2e9rpd729ur9'

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

 // app.get('*.js', (req, res, next) => {req.url = req.url + '.gz';res.set('Content-Encoding', 'gzip');next();});

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
    app.get('/api/kotaksectorview', async function (req, res) {

      let sectorid = req.query.sectorid
    console.log(sectorid)
          
         
          const result = await pool.query
            
            ("select info ->>'IndCode' as IndCoded , info ->>'SectorId' as SectorId , info ->>'CompanyId' as CompanyId, info ->>'MarketCap' as MarketCap, info ->>'SectorName' as SectorName,info ->>'Finance' as Finance, info ->>'ValueScore' as ValueScore,info ->>'CompanyName' as CompanyName, info ->>'GrowthScore' as GrowthScore,info ->>'HealthScore' as HealthScore, info ->>'ReleaseDate' as ReleaseDate,info ->> 'QualityScore' as QualityScore,info ->> 'RankBySector' as RankBySector, info ->>'DividendScore' as DividendScore, info ->>'CompanyShortName' as CompanyShortName, info ->>'OverallMarketRank' as OverallMarketRank, info ->>'PastPerformanceScore' as PastPerformanceScore from kotaksec where info->>'SectorId' = $1", [sectorid]);
        // console.log(result.fields) 
         res.json(result.rows)
      //pool.end();
    
         
    
        })
      

const { response } = require('express');
const { json } = require('body-parser');




 
//This is MC Stock Data Details used in OHLC component using parallel api run


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
          "cookie": '_fbp=fb.1.1653745914138.1241231693; _ga=GA1.2.1340509370.1653745738; _gcl_au=1.1.873030795.1653745910; _gid=GA1.2.232653205.1656570374; _nv_ab_cid=["4032","3490","2420","3655"]; _nv_ab_ver_6941_3655=4515; _nv_banner_x=22686; _nv_did=253330646.1653745752.1585996377122177135239zqaz7; _nv_hit=253330646.1656570370.cHZpZXc9MXxzdmlldz1bIjIyNjg2Il0=; _nv_uid=253330646.1653745752.46ba573e-2c31-47df-bc30-44347db76191.1655322664.1656570370.7.0; _nv_utm=253330646.1653745752.7.2.dXRtc3JjPWdvb2dsZXx1dG1jY249KG5vdCBzZXQpfHV0bWNtZD1vcmdhbmljfHV0bWN0cj0obm90IHByb3ZpZGVkKXx1dG1jY3Q9KG5vdCBzZXQpfGdjbGlkPShub3Qgc2V0KQ==; _uetsid=8bc2f710f83d11ecbfed9509e099e362; _uetvid=53ce8fa0de8d11ec8991b5e9297a9184; ASP.NET_SessionId=zu0jw02e0damnrpxt3ftuxk1; ORG36141=cab000d5-e326-4945-b583-d453ad82e69a; userTheme=; __stbpnenable=0; __stdf=0; __stgeo="0"; __stp={"visit":"returning","uuid":"2d792579-e291-4484-a4e6-d3f4ad444a47","ck":"A0YS2"}; __sts={"sid":1656586736305,"tx":1656586736305,"url":"https%3A%2F%2Fmtrade.kotaksecurities.com%2FTSTerminal%2FRealTime%2FWatchList%2FSRWatchList","pet":1656586736305,"set":1656586736305}; _gat_UA-10523021-12=1; _PLATFORMAUTH=6759D8917554FDFA2BC75FBAF7ED3FEF75B8AEFA4FF739FA908AF97EE706018ADB1AB1E8E24507C2CAE090141591E6D743F728ACE8E6B7C5302FC265629DFF5A5D277635C609EADA3A310492841E7ACF27DFF71A171E15894178417FB5A976DB1F5D066F9D84674F8B6E83D87841E0FEEA34CA5C3A0F2EB86625495A32E845026CC6958EFBF62C3BA5B45197051CF2363075BFE9EF81D24B12581257CE95C2515F5968BB167399D3A87E10F73FAD11607F612C43378398329B03CF8C083A002FFFE17E9E28364639E2B9B1C55692076EB0E9DFBCE4DDC15DF5BF35F36F2CE987868C24F8A25A90D865BAD46989C627C5B0673612C652A589010053999987F7F1D0EBB37339D1D391662D4BDE5085C7EF4E8A4877426A7344F2313BDC77DACE36E29E557669302F58A136BEF50E95069AF0006B25334A6FF653D8AE48B1EC1D769823B9166EC1C592393B664F987636D40789EF8B7103443AF00141DD5D5378F643C099B36A4DF3325FA79B92DA30B67ABAA8882851211C753A5359F4DF6F143F7AEBA866648F5221E407F67D3019EBDEE9D8416E3ED99A54D42DDEDD96A50CDB1015B288B37518D36CF49132BB6F19C50879E0F4F78F16F68F7EB5E288E391D9606C9C0328F24C2FA0A281665E1A177436E93D1A574DE0C7A0C9126F6C052A3526594FC92B039D488E6434F62A881DF32231FBF69AF14A103261E26F21808DA6A4BE1B543814B20D9BA6C96D2CDA31314171477DF2F78A5AAA9EFEFEAE223AFE27E53629791A0C92708402261E4BDD20A58333452720C1E9220458FA06FE76F9405048D56F66C9D5E4B593245DC6CC6C81AEE05F0681C984F25D69793D6A2FB06059AB88D0AEE9095DFE9BD2928B68688BD586547899FE35D1534AE0E276FE68D31B223F1F4C0805DAF57A6012F33703A3D9D837902133A004B8EA3E7E737C32B2B8A126; AppConnection=A0YS2-dfffab565faa46f5b5b679ab768e27e7'},
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
    let tlid = req.query.tlid
    //console.log(eqsymbol)
    var url11 = 'https://trendlyne.com/mapp/v1/stock/chart-data/'+tlid+'/SMA/';
    request(url11, function (error, response, html) {
      if (!error) {
        
        res.json(JSON.parse(response.body))
        
    }
    })
    
  })
  /////////////////////////////////////Trendlyne Nifty///////////////////////////
  app.get('/api/trendlynenifty', (req, res) => {
   
   var url11 = 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1887/TJLOGSVLZL4FLXDWFH6TIVYB6A======/';
    request(url11, function (error, response, html) {
      if (!error) {
     
  
        var options2 = {
          url: 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1887/TJLOGSVLZL4FLXDWFH6TIVYB6A======/',
          method: 'GET', // Don't forget this line
          "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie":  process.env.trendlynecookie,
            "Referer": "https://trendlyne.com/equity/1887/NIFTY50/nifty-50/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": null,
          "method": "GET"
        };
  
  
  request(options2, (err, response, body) => {
    if (err) {
        //console.log(err);
    } else {
      (res.json(JSON.parse(body)));
      //console.log((response))
      }
  });
  }
    })
    
  })
  /////////////////////////////////////Trendlyne Nifty///////////////////////////
  app.get('/api/trendlynepharmanifty', (req, res) => {
   
    var url11 = 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1905/URFM5UKYBSJM3HDF7EH5ZBSEP4======/';
     request(url11, function (error, response, html) {
       if (!error) {
      
   
         var options2 = {
           url: 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1905/URFM5UKYBSJM3HDF7EH5ZBSEP4======/',
           method: 'GET', // Don't forget this line
           "headers": {
             "accept": "application/json, text/javascript, */*; q=0.01",
             "accept-language": "en-US,en;q=0.9",
             "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
             "sec-ch-ua-mobile": "?0",
             "sec-ch-ua-platform": "\"Windows\"",
             "sec-fetch-dest": "empty",
             "sec-fetch-mode": "cors",
             "sec-fetch-site": "same-origin",
             "x-requested-with": "XMLHttpRequest",
             "cookie":  process.env.trendlynecookie,
             "Referer": "https://trendlyne.com/equity/1887/NIFTY50/nifty-50/",
             "Referrer-Policy": "strict-origin-when-cross-origin"
           },
           "body": null,
           "method": "GET"
         };
   
   
   request(options2, (err, response, body) => {
     if (err) {
         //console.log(err);
     } else {
       (res.json(JSON.parse(body)));
       //console.log((response))
       }
   });
   }
     })
     
   })
  /////////////////////////////////////Trendlyne Nifty///////////////////////////
  app.get('/api/trendlynebanknifty', (req, res) => {
   
    var url11 = 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1898/NAUN63XDUGR6O4FV2UAQPDQWSA======/';
     request(url11, function (error, response, html) {
       if (!error) {
      
   
         var options2 = {
           url: 'https://trendlyne.com/mapp/v1/stock/web/ohlc/1898/NAUN63XDUGR6O4FV2UAQPDQWSA======/',
           method: 'GET', // Don't forget this line
           "headers": {
             "accept": "application/json, text/javascript, */*; q=0.01",
             "accept-language": "en-US,en;q=0.9",
             "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
             "sec-ch-ua-mobile": "?0",
             "sec-ch-ua-platform": "\"Windows\"",
             "sec-fetch-dest": "empty",
             "sec-fetch-mode": "cors",
             "sec-fetch-site": "same-origin",
             "x-requested-with": "XMLHttpRequest",
             "cookie":  process.env.trendlynecookie,
             "Referer": "https://trendlyne.com/equity/1887/NIFTY50/nifty-50/",
             "Referrer-Policy": "strict-origin-when-cross-origin"
           },
           "body": null,
           "method": "GET"
         };
   
   
   request(options2, (err, response, body) => {
     if (err) {
         //console.log(err);
     } else {
       (res.json(JSON.parse(body)));
       //console.log((response))
       }
   });
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
  
    app.get('/api/trendlynestocksti', function (req, res) {
      let tlid = req.query.tlid
      var url6 = '  https://trendlyne.com/mapp/v1/stock/adv-technical-analysis/'+tlid+'/24/'
        request(url6, function (error, response, html) {
          if (!error) {
      
            console.log("This is tendlynestocksti")
            res.json((JSON.parse(response.body)))
           
          } else {
          //  console.log(error)
          }
        })
      
      
    })
  
	  

///************************trendlyne post durability/Volatility/Momentum score start */
//const axiosCookieJarSupport = require('axios-cookiejar-support').default;
  //const tough = require('tough-cookie');
const instancetrendlyne = axios.create({ withCredentials: true });
  axiosCookieJarSupport(instancetrendlyne);
instancetrendlyne.defaults.jar = new tough.CookieJar()


app.post('/api/trendlynepostdvm', async function (req, res) {
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

app.post('/api/nsepostdata1', async function (req, res) {
  
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
app.post('/api/nsepostdata2', async function (req, res) {
  
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

app.get('/api/niftytradersallstocks', async function (req, res) {

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

  /////////////Nifty trader stock POST request to get pcr////////////////
  
  app.get('/api/ntstockpcrdetails', (req, res) => {
    let eqsymbol = req.query.eqsymbol
    
    var url11 = 'https://api.niftytrader.in/webapi/Live/kiteInstrumentNfoListNew';
    request(url11, function (error, response, html) {
      if (!error) {
        
      var options2 = {
    url: 'https://api.niftytrader.in/webapi/Live/kiteInstrumentNfoListNew',
    method: 'POST', // Don't forget this line
    "headers": {
       "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NDMzOCIsImp0aSI6IjU5MjUwODYxLWRlNWYtNGFkZS1hZWY0LWRlMzg1YjcwYWQ1ZCIsImV4cCI6MTY1ODUwMjk1MSwiaXNzIjoiTmlmdHl0cmFkZXJoZWxwLmNvbSIsImF1ZCI6Ik5pZnR5dHJhZGVyaGVscC5jb20ifQ.RQyIer2CdUUd2Ge5pLlU8MJJCM-49W0aF3iuDJmZBb0",
    "content-type": "application/json",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://www.niftytrader.in/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": '{\"symbol\":\"'+eqsymbol+'\"}',
  "method": "POST"
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
 
  //////////////Nifty Trader Post Request to get nr7 for Stocks in nr7 database on postgres,dropdown in Actions submits request///////
  
  app.post('/api/nr7', async function (req, res) {
    let eqsymbol = req.body
   const promises = eqsymbol.map(symbol => {
   console.log(eqsymbol)
    var url11 = 'https://api.niftytrader.in/webapi/Live/stockAnalysis';
      request(url11, function (error, response, html) {
        if (error) {
          console.log(error)
        
      }
     else if (!error) {
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
    "body": '{\"symbol\":\"'+symbol.eqsymbol+'\"}',
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
   }
   
   request(options2, (err, response, body,res) => {
    if (err) {
      
    } else {
      data = JSON.parse(response.body)
      data2 = data["resultData"]["stocktrend"]
      obj1 = [];
      for (let i in data2) {
        if (i == 'nr7_today') {
        console.log(data2['nr7_today'])
          obj1.push({ stock: symbol.name, isin: symbol.isin, Date: symbol.Date, nr7: data2['nr7_today'] });
        }
      }
      console.log(obj1)
      console.log("executing nr7")
      pool.query('INSERT INTO nr7 (info)  VALUES ($1)', obj1, (err, res) => {
        console.log(err, res)
        
      })
  
   
    
    
    }
   });
   }
   })
   })
   try {
    await Promise.all(promises)
   } catch (e) {
    console.log(e)
   }
  })
//////////////////////////////////////Nifty Trader EOD Screeners Post/////////////////////////////////
  app.post('/api/nteodscreeners', (req, res) => {
    let ntoptions = req.body
    
    console.log(JSON.stringify(ntoptions))
  var url11 = 'https://api.niftytrader.in/webapi/Screener/getAdvanceEodScreenerFilter';
  request(url11, function (error, response, html) {
    if (!error) {
      
    var options2 = {
  url: 'https://api.niftytrader.in/webapi/Screener/getAdvanceEodScreenerFilter',
  method: 'POST', // Don't forget this line
  
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NDMzOCIsImp0aSI6IjU5MjUwODYxLWRlNWYtNGFkZS1hZWY0LWRlMzg1YjcwYWQ1ZCIsImV4cCI6MTY1ODUwMjk1MSwiaXNzIjoiTmlmdHl0cmFkZXJoZWxwLmNvbSIsImF1ZCI6Ik5pZnR5dHJhZGVyaGVscC5jb20ifQ.RQyIer2CdUUd2Ge5pLlU8MJJCM-49W0aF3iuDJmZBb0",
      "content-type": "application/json",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://www.niftytrader.in/",
    "referrerPolicy": "strict-origin-when-cross-origin",
     // "body": "{\"_20_day_sma_below\": true}",
      "body": JSON.stringify(ntoptions),
      "method": "POST",
    "mode": "cors",
    "credentials": "include"
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

/////////////////////////////////NT EOD Screener Get////////////////////
app.get('/api/nteodscreeners1', (req, res) => {
 
var url11 = 'https://api.niftytrader.in/webapi/Screener/getAdvanceEodScreenerFilter';
request(url11, function (error, response, html) {
  if (!error) {
    
  var options2 = {
url: 'https://api.niftytrader.in/webapi/Screener/getAdvanceEodScreenerFilter',
method: 'POST', // Don't forget this line

  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NDMzOCIsImp0aSI6IjU5MjUwODYxLWRlNWYtNGFkZS1hZWY0LWRlMzg1YjcwYWQ1ZCIsImV4cCI6MTY1ODUwMjk1MSwiaXNzIjoiTmlmdHl0cmFkZXJoZWxwLmNvbSIsImF1ZCI6Ik5pZnR5dHJhZGVyaGVscC5jb20ifQ.RQyIer2CdUUd2Ge5pLlU8MJJCM-49W0aF3iuDJmZBb0",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.niftytrader.in/",
  "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{'_20_day_sma_below': 'true','cci_200_below': 'true'}",
   // "body": JSON.stringify(ntoptions),
    "method": "POST",
  "mode": "cors",
  "credentials": "include"
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
  
  

//app.use(express.static(__dirname+"/"));
app.use(express.static(path.join(__dirname, '/dist/amitnginx1')))
app.get("/", function (req, res) {

  res.sendFile(path.join(__dirname,'/dist/amitnginx1/index.html'));
});
// app.get("/ngsw-worker.js", function (req, res) {

//   res.sendFile(path.join(__dirname +'/dist/amitnginx/ngsw-worker.js'));
// });
// app.get("/manifest.json", function (req, res) {

//   res.sendFile(path.join(__dirname +'/dist/amitnginx/manifest.json'));
// });
// app.get("/ngsw.json", function (req, res) {

//   res.sendFile(path.join(__dirname +'/dist/amitnginx/ngsw.json'));
// });


// app.listen(8090, function() {
//   console.log('Your node is running on port 8090');
// });
// http.createServer(app,function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end(index);
//   console.log('Your node is running on port 8090');
// }).listen(8090);
// http.createServer(app).listen(8090)
//   console.log('Your node is running on port 8090');
//   var privateKey  = fs.readFileSync('C:/Users/Amit/stockapp/stockjava/stockjavaoriginal/key.pem', 'utf8');
// var certificate = fs.readFileSync('C:/Users/Amit/stockapp/stockjava/stockjavaoriginal/server.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

http.createServer({
  // key: fs.readFileSync('E:/Stock Website/Amitnginx1.0/src/key.pem'),
  // cert: fs.readFileSync('E:/Stock Website/Amitnginx1.0/src/server.crt')
}, app)
.listen(4200, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
}
