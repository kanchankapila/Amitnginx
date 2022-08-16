const async = require("async")
const https = require('https');
const fs = require('fs');
const express = require('express');
const cluster = require('cluster');
const { Pool, Client } = require('pg')
var compression = require('compression');
const numCPUs = require('os').cpus().length;

var app = express();



const redis = require('redis');
// const client = redis.createClient();
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
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
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

process.env.trendlynecookie='_gid=GA1.2.812417360.1660563111; .trendlyne=lbssa9ud0dzwe7pajkkgcoagb2oe4y0c; csrftoken=HexhaQcggvkg1VIsRoeFdNmiJO0ggbdPLW3UKUit2S1hSjJ1v4kMSpjkkJUNugWR; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _ga=GA1.2.775644955.1603113261; _gat=1',
process.env.kseccookie='_fbp=fb.1.1653745914138.1241231693; _ga=GA1.2.1340509370.1653745738; _gcl_au=1.1.873030795.1653745910; _nv_ab_cid=["4032","3490","2420","3655"]; _nv_ab_ver_6941_3655=4515; _nv_banner_x=22686; _nv_did=253330646.1653745752.1585996377122177135239zqaz7; _nv_hit=253330646.1656570370.cHZpZXc9MXxzdmlldz1bIjIyNjg2Il0=; _nv_uid=253330646.1653745752.46ba573e-2c31-47df-bc30-44347db76191.1655322664.1656570370.7.0; _nv_utm=253330646.1653745752.7.2.dXRtc3JjPWdvb2dsZXx1dG1jY249KG5vdCBzZXQpfHV0bWNtZD1vcmdhbmljfHV0bWN0cj0obm90IHByb3ZpZGVkKXx1dG1jY3Q9KG5vdCBzZXQpfGdjbGlkPShub3Qgc2V0KQ==; _uetsid=8bc2f710f83d11ecbfed9509e099e362; _uetvid=53ce8fa0de8d11ec8991b5e9297a9184; ORG36141=cab000d5-e326-4945-b583-d453ad82e69a; __stdf=0; __stp={"visit":"returning","uuid":"2d792579-e291-4484-a4e6-d3f4ad444a47","ck":"A0YS2"}; ASP.NET_SessionId=jvmmmyylyzpu1aha22qn0vjm; userTheme=; _gid=GA1.2.1570676169.1660565568; __stgeo="0"; AppConnection=A0YS2-53e4cc48770741b494dc146365c72d3b; __stbpnenable=0; _PLATFORMAUTH=7A2DE2AE1312F943A590973272B8E310B715E3A79C4EA0F36C7DD5C993414E86A75AB50F0F26D7E3EF3E4F8F38C60C8B1EED75CF237D161F62BA3FC2738D62B2E942D6497F2C21B6062BBAFCB68E08F6A3DF3EC4D88E722AFCBE357BC976C3D62901F026330508351B16558B00CAC6901C690DB20657B0939A64A1CEEE4429DC46FEF559522BDEEC2529D1D76843D4425535645AECA0B7712C159F1525E3908DBB69074BEFF4A6155770E15A2A80C04A7B6982E84AA500EBFECA51AA41DC24DF16705DE6C1B2C646080DB760E75C7135F0B7D6A503007A2FABED9377E3CCA6BBDFEED17C5109103736707A404D46880DD76D925C46392701C7002D6C889F485F04B3BA88643F94936DEFF6088255D87026442C8A61A10A3D5CA65044F9910F50661353D6F905CD895FA774CF97EBF6544BF9AFADCF8584014ED50ECF889B19D0CCA97ACCADCFA02107C3C5C1F160FDD65A2E7EA529CA85E516A2EC99143F0120A5202D3811D69D714DC4A62C4DFBB61B2E9D9F5BC23FB7A6F58F678E5BBE49F2DC1CA16465BC8347F46D0B60490E97EB3EE708A5011758AEAE33B42EF91BD09623AD0463B2227CDF74AFA6542D90C1BA589D7C94ACF36F61C0497445979C4F7BA69317690FBF496CA44CBB8E64F5C7A5523BBB98B6DE851F5631F684316E0194D61F22044EA27D6DB21FFEF3B567576114E0D2C475503CC392A770972E850A9A5CF40B77C8C8482A204236C8595C3333E5FF59F1BBE865EF68BCD913FC219143F1586251803983F6013D358108CB73D3BAE98AE31CEBAA92F2C67CF791CC8F185A7A0A463CA34686094B87AD8940B7C6F77451620A53DC6166C856D109B45060236DDAF98F5CD4C07F5D1E748AA2B91892F7F89C12578B6EA8718D69891942E1E3F0F0FD140DCF53F11844D4EE57125F4A61565DECB741A5185FE7F82C889931817FAE40; _gat_UA-10523021-12=1;'
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

const axios = require('axios');
var html2json = require('html2json').html2json;
   
    
console.log("port:",process.env.PORT)
console.log("host:",process.env.HOST)
console.log("Database URL:",process.env.DATABASE_URL)

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
 
  // const pool = new Pool({
  //   user: "postgres",
  //   host: "localhost",
  //   database: "amit",
  //   password: "amit0605",
  //   port: "5432"
  // });
  // const client = new Client({
  //   user: "amit",
  //   host: "localhost",
  //   database: "amit",
  //   password: "amit0605",
  //   port: "5432"
  
  // })
  // const pool = new Pool({
  //   user: "onzcwnkubxycls",
  //   host: "ec2-52-207-15-147.compute-1.amazonaws.com",
  //   database: "dak59761mft7r4",
  //   password: "3716fb10802c87b0d573b48dfaba0e093d50cb06a8be63fb84447a554d77a5e4",
  //   port: "5432"
  // });
  // const client = new Client({
  //   user: "onzcwnkubxycls",
  //   host: "ec2-52-207-15-147.compute-1.amazonaws.com",
  //   database: "dak59761mft7r4",
  //   password: "3716fb10802c87b0d573b48dfaba0e093d50cb06a8be63fb84447a554d77a5e4",
  //   port: "5432"
  
  // })
  
  const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://amit:amit0605@localhost:5432/amit'
  });
  
  const pool = new Pool({  connectionString: process.env.DATABASE_URL || 'postgresql://amit:amit0605@localhost:5432/amit' })

  const sessionConfig = {
    secret: 'amit0605',
    id_login: 'amit.kapila.2009@gmail.com',
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'Lax', // THIS is the config you are looing for.
    }
  };


  app.set('trust proxy', 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies


  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    next();
  
    
    
  });

  //////////////////////////////////Moneycontrol Post request for MCvolume////////
  app.post('/api/mcvolume', async function (req, res) {

    let mcsymbol = req.body

    //console.log(req.body)
    const promises = mcsymbol.map(symbol => {
  
      
      axios.get('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/' + symbol.mcsymbol).then((response) => {
        var obj1 = ({ Date: symbol.Date, Time: symbol.time, Name: symbol.name, Symbol: symbol.mcsymbol, "CurrentVol": response.data.data.VOL, "FiveDVol": response.data.data.DVolAvg5, "TenDVol": response.data.data.DVolAvg10, "TwentyDVol": response.data.data.DVolAvg20, "ThirtyDVol": response.data.data.DVolAvg30, "CPrice": response.data.data.pricecurrent, "PChangeper": response.data.data.pricepercentchange, "StockName": response.data.data.SC_FULLNM })
      
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
        var obj1 = ({ Date: symbol.Date, Time: symbol.time, Name: symbol.name, Symbol: symbol.mcsymbol, "CurrentVol": response.data.data.VOL, "FiveDVol": response.data.data.DVolAvg5, "TenDVol": response.data.data.DVolAvg10, "TwentyDVol": response.data.data.DVolAvg20, "ThirtyDVol": response.data.data.DVolAvg30, "CPrice": response.data.data.pricecurrent, "PChangeper": response.data.data.pricepercentchange, "StockName": response.data.data.SC_FULLNM })
      
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

  app.post('/api/mcinsight', async function (req, res) {

    let mcsymbol = req.body

    //console.log(req.body)
    const promises = mcsymbol.map(symbol => {
  
      
      axios.get('https://api.moneycontrol.com/mcapi/v1/extdata/mc-insights?scId=' + symbol.mcsymbol + '&type=d').then((response) => {
        console.log(response.data.data)
        var obj1 = ({
          Date: symbol.Date, Time: symbol.time, Name: symbol.name, Symbol: symbol.mcsymbol, "CurrentVol": response.data.data
          // "FiveDVol": response.data.data.DVolAvg5, "TenDVol": response.data.data.DVolAvg10, "TwentyDVol": response.data.data.DVolAvg20, "ThirtyDVol": response.data.data.DVolAvg30, "CPrice": response.data.data.pricecurrent, "PChangeper": response.data.data.pricepercentchange, "StockName": response.data.data.SC_FULLNM
        })
      
         console.log("executing mcinsight")
         pool.query('INSERT INTO mcinsight (info)  VALUES ($1)', [obj1], (err, res) => {
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
  app.get('/api/mcinsightview', async function (req, res) {

    let mcsymbol = req.query.mcsymbol
    
          
         
    const result = await pool.query
            
      ("select info from mcinsight where info ->> 'Symbol' = $1", [mcsymbol]);
    // console.log(result.fields) 
    res.json(result.rows)
    //pool.end();
    
         
    
  })
  app.get('/api/kotakview', async function (req, res) {

    let eqsymbol = req.query.eqsymbol

      
     
    const result = await pool.query
        
      ("select info ->>'IndCode' as IndCoded , info ->>'SectorId' as SectorId , info ->>'CompanyId' as CompanyId, info ->>'MarketCap' as MarketCap, info ->>'SectorName' as SectorName,info ->>'Finance' as Finance, info ->>'ValueScore' as ValueScore,info ->>'CompanyName' as CompanyName, info ->>'GrowthScore' as GrowthScore,info ->>'HealthScore' as HealthScore, info ->>'ReleaseDate' as ReleaseDate,info ->> 'QualityScore' as QualityScore,info ->> 'RankBySector' as RankBySector, info ->>'DividendScore' as DividendScore, info ->>'CompanyShortName' as CompanyShortName, info ->>'OverallMarketRank' as OverallMarketRank, info ->>'PastPerformanceScore' as PastPerformanceScore from kotaksec where info->>'CompanyShortName' = $1", [eqsymbol]);
    console.log(result.rows) 
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
  
    var url6 = 'https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode=' + eqsymbol + 'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=10648&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company'
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
            "cookie": process.env.kseccookie
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

            for (let i = 0; i < obj1.length; i += 1) {
              const obj2 = obj1[i];
              console.log(obj2)
              pool.query('INSERT INTO kotaksec (info) VALUES ($1)', [obj2], (err, res) => {
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
  

 
 
    var url11 = 'https://trendlyne.com/equity/getStockMetricParameterList/' + tlid;
    request(url11, function (error, response, html) {
      if (!error) {
   

        var options2 = {
          url: 'https://trendlyne.com/equity/getStockMetricParameterList/' + tlid,
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
          "referrer": "https://trendlyne.com/equity/" + tlid + "/" + eqsymbol + "/" + tlname + "/",
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
    var url11 = 'https://trendlyne.com/mapp/v1/stock/chart-data/' + tlid + '/SMA/';
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
            "cookie": process.env.trendlynecookie,
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
            "cookie": process.env.trendlynecookie,
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
            "cookie": process.env.trendlynecookie,
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
    var url6 = 'https://trendlyne.com/fundamentals/get-fundamental_results/' + tlid + '/'
    request(url6, function (error, response, html) {
      if (!error) {
      
        console.log("This is tendlynestocks3")
        // res.json(((response.body)))
           
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
        obj1 = ({ Date: symbol.Date, Time: symbol.time, Name: symbol.name, DurabilityScore: response.data.body.stockData[6], VolatilityScore: response.data.body.stockData[7], MomentumScore: response.data.body.stockData[8] })
      
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
    req = fetch("https://trendlyne.com/equity/api/getLivePriceList/", {
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
      .then(data => instance.get('https://www.nseindia.com/api/historical/cm/equity?symbol=' + stock + '&series=[%22EQ%22]&from=09-03-2021&to=' + todaydate))
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
      .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol=' + stock + '&section=trade_info'))
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
      .then(data => instance.get('https://www.nseindia.com/api/quote-equity?symbol=' + stock))
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

  // //NSE nifty Pharma OI Data
  // app.get('/api/nsedatapniftyoi', function (req, res) {
  //   let stock = req.query.stock
  //   instance.get('https://www.nseindia.com/')
  //     .then(data => instance.get('https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY'))
  //     .then(data => res.json(data.data))
  //     .catch(data => console.error(res.response))
    
  
  // })


  app.get('/api/nsedatastockoi', function (req, res) {
    let stock = req.query.stock
    instance.get('https://www.nseindia.com/')
      .then(data => instance.get('https://www.nseindia.com/api/option-chain-equities?symbol=' + stock))
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
            obj = ({ symbol: symbol.eqsymbol1, percentage: data.data['securityWiseDP']['deliveryToTradedQuantity'] })
        
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
        .then(data => instance.get('https://www.nseindia.com/api/option-chain-equities?symbol=' + symbol.eqsymbol1))
        .then(data => {
          //console.log(data.data['filtered'])
          if (data.data['filtered']['CE']['totOI'] && data.data['filtered']['PE']['totOI']) {
            var obj = ({ symbol: symbol.eqsymbol1, pcr: data.data['filtered']['PE']['totOI'] / data.data['filtered']['CE']['totOI'] })
        
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
  

    var url11 = 'https://opstra.definedge.com/api/openinterest/free/NIFTY&' + nextexpiry
    request(url11, function (error, response, html) {
      if (!error) {

        res.json(JSON.parse(response.body))


      }
    })


  })
  //To get BANK NIFTY Data from Opstra
  app.get('/api/opstradatabanknifty', function (req, res) {
    let nextexpiry = req.query.nextexpiry
  

    var url11 = 'https://opstra.definedge.com/api/openinterest/free/NIFTY&' + nextexpiry
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
    var url11 = 'https://opstra.definedge.com/api/openinterest/free/' + eqsymbol + '&' + nextexpirymonthly
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
  
    var url11 = 'https://mo.streak.tech/api/tech_analysis/?timeFrame=' + timeframe + '&stock=NSE%3A' + eqsymbol + '&user_id=';
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
  
  // app.get('/api/ntstockdetails', (req, res) => {
  //   let eqsymbol = req.query.eqsymbol
  //   //console.log(eqsymbol)
  //   var url11 = 'https://api.niftytrader.in/webapi/Live/stockAnalysis';
  //   request(url11, function (error, response, html) {
  //     if (!error) {
        
  //     var options2 = {
  //   url: 'https://api.niftytrader.in/webapi/Live/stockAnalysis',
  //   method: 'POST', // Don't forget this line
  //   "headers": {
  //     "accept": "application/json, text/plain, */*",
  //     "accept-language": "en-US,en;q=0.9",
  //     "content-type": "application/json",
  //     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-ch-ua-platform": "\"Windows\"",
  //     "sec-fetch-dest": "empty",
  //     "sec-fetch-mode": "cors",
  //     "sec-fetch-site": "same-site"
  //   },
  //   "referrer": "https://www.niftytrader.in/",
  //   "referrerPolicy": "strict-origin-when-cross-origin",
  //   "body": '{\"symbol\":\"'+eqsymbol+'\"}',
  //   "method": "POST",
  //   "mode": "cors",
  //   "credentials": "omit"
  // }
  
  // request(options2, (err, response, body) => {
  //   if (err) {
  //       //console.log(err);
  //   } else {
  //     ( res.json(JSON.parse(body)));
    
  //   }
  // });
  // }
  //   })
    
  // })

  /////////////Nifty trader stock POST request to get pcr////////////////
  
  // app.get('/api/ntstockpcrdetails', (req, res) => {
  //   let eqsymbol = req.query.eqsymbol
    
  //   var url11 = 'https://api.niftytrader.in/webapi/Live/kiteInstrumentNfoListNew';
  //   request(url11, function (error, response, html) {
  //     if (!error) {
        
  //     var options2 = {
  //   url: 'https://api.niftytrader.in/webapi/Live/kiteInstrumentNfoListNew',
  //   method: 'POST', // Don't forget this line
  //   "headers": {
  //      "accept": "application/json, text/plain, */*",
  //   "accept-language": "en-US,en;q=0.9",
  //   "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NDMzOCIsImp0aSI6IjU5MjUwODYxLWRlNWYtNGFkZS1hZWY0LWRlMzg1YjcwYWQ1ZCIsImV4cCI6MTY1ODUwMjk1MSwiaXNzIjoiTmlmdHl0cmFkZXJoZWxwLmNvbSIsImF1ZCI6Ik5pZnR5dHJhZGVyaGVscC5jb20ifQ.RQyIer2CdUUd2Ge5pLlU8MJJCM-49W0aF3iuDJmZBb0",
  //   "content-type": "application/json",
  //   "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
  //   "sec-ch-ua-mobile": "?0",
  //   "sec-ch-ua-platform": "\"Windows\"",
  //   "sec-fetch-dest": "empty",
  //   "sec-fetch-mode": "cors",
  //   "sec-fetch-site": "same-site",
  //   "Referer": "https://www.niftytrader.in/",
  //   "Referrer-Policy": "strict-origin-when-cross-origin"
  //   },
  //   "body": '{\"symbol\":\"'+eqsymbol+'\"}',
  // "method": "POST"
  // }
  
  // request(options2, (err, response, body) => {
  //   if (err) {
  //       //console.log(err);
  //   } else {
     
  //     ( res.json(JSON.parse(body)));
    
  //   }
  // });
  // }
  //   })
    
  // })
 
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
            "body": '{\"symbol\":\"' + symbol.eqsymbol + '\"}',
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
          }
   
          request(options2, (err, response, body, res) => {
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
            (res.json(JSON.parse(body)));
  
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
            (res.json(JSON.parse(body)));

          }
        });
      }
    })

  })
  
  

  app.use(express.static(__dirname + "/"));
  app.use(express.static(path.join(__dirname, '/dist/amitnginx')))
  app.get("/*", function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/amitnginx/index.html'));
  });
  //   https.createServer(app, function (req, res) {
    
  //       key: fs.readFileSync('key.pem'),
  //       cert: fs.readFileSync('cert.pem')
    
  //   res.writeHead(200);
  //   res.end("hello world\n")
  // }).listen(3000);
  // console.log("!!!! Your app is listening on"+'3000')
  // https.createServer({

  //   key: fs.readFileSync('key.pem'),
  //   cert: fs.readFileSync('cert.pem')
  
  // }, app).listen(process.env.PORT || 3000, function () {
  
  //   console.log('Example app listening on port 3000! Go to https://localhost:3000/')
  // })
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
  // https.createServer(options, app).listen(process.env.PORT);
}
