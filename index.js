
const express = require('express');
const fs = require('fs');
const filePath = './src/app/lists/tlid.txt';
var app = express();
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require("body-parser");
const request = require('request')
app.use(cors());
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.raw());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    next();
  
    
    
  });

  //*This is ET now Stock Data Details used in Share component using parallel api run
  app.get('/api/etsharetoday', function (req, res) {

    let eqsymbol = req.query.eqsymbol
  
    var url6 = 'https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode=' + eqsymbol + 'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=10648&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company'
    request(url6, function (error, response, html) {
      if (!error) {
        res.json(JSON.parse(response.body))
      }
    })
  })
 



 
    const start = Date.now();
    const obj=[];
    
   
    const axiosApiInstance = axios.create({
      baseURL: 'https://data.mongodb-api.com/app/data-cibaq/endpoint/data/v1/action',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'hhsIfhonChu0fJ000k04e1k7nb5bX1CvkIWLw17FRjrzLg7kWihbY7Sy4UUKwoUy ',
        Accept: 'application/ejson'
      }
    });
   
// read the contents of the file
fs.readFile('./src/app/lists/tlid.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // split the data into an array of symbols
  const symbols = data.trim().split('\n');

  // map over the symbols and create an array of promises
  const promises = symbols.map(async(value,key)  => {console.log(`${key}`)
    // your existing code here, but replace tlid with symbol
    // console.log(symbol.Object.value(tlid))
 
//  symbols.map((value,key) => {
  
//  })
     const response= await fetch(
        `https://trendlyne.com/mapp/v1/stock/chart-data/${key}/SMA/?format=json`,
        {
          headers: { Accept: 'application/json' }
        }
      );
  
      const data1 = await response.json();
    
      try{
              obj.push({
        Date: symbol.Date,
        Time: symbol.time,
        Name: symbol.name,
        DurabilityScore: data1.body['stockData'][6],
        DurabilityColor: data1.body['stockData'][9],
        VolatilityScore: data1.body['stockData'][7],
        VolatilityColor: data1.body['stockData'][10],
        MomentumScore: data1.body['stockData'][8],
        MomentumColor: data1.body['stockData'][11]
      })
      
    
    await axiosApiInstance.post('/updateMany', {
      collection: 'DVM',
      database: 'DVM',
      dataSource: 'Cluster0',
      filter: {},
      update: {
        $set: {
          output: obj,
          time: start
        }
      },
      upsert: true
    });
  }catch (error){
    console.log('error')
  }
    const timeTaken = Date.now() - start;
    console.log(`Total time taken: ${timeTaken} milliseconds`);
 
    console.log(obj)
    try {
      await Promise.all(promises)
    } catch (e) {
      console.log(e)
    }
  });
  })




  

  app.use(express.static(__dirname + "/"));
  app.use(express.static(path.join(__dirname, '/dist/amitnginx')))
  app.get("/*", function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/amitnginx/index.html'));
  });
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
//  }
