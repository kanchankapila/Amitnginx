require('chromedriver');
const express = require('express');
const fs = require('fs');
const filePath = './src/app/lists/tlid.txt';
var app = express();
const chrome=require('selenium-webdriver/chrome')
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const { MongoClient } = require('mongodb');
const client1 = new MongoClient( "mongodb+srv://amit:amit0605@cluster0.mxilo.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true });

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
  async function def (req, res) {
   
    let options = new chrome.Options();
    //Below arguments are critical for Heroku deployment
    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
   options.addArguments("--no-sandbox");
   options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
   let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);
  
  //  binary_location = "C:\\path\\to\\chrome.exe"
  //  options.setBinary(".\\src\\assets\\chromedriver.exe");
  options.addArguments("--disable-dev-shm-usage")
    let driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .setChromeService(serviceBuilder)
      .build();
 
    let tabToOpen = driver.get("https://trendlyne.com/visitor/loginmodal/");
    tabToOpen.then(function () {
      let findTimeOutP = driver.manage().setTimeouts({ implicit: 5000, });
      return findTimeOutP;
    }).then(function () {
      let promiseUsernameBox = driver.findElement(swd.By.id("id_login"));
      return promiseUsernameBox;
    }).then(function (usernameBox) {
      let promiseFillUsername = usernameBox.sendKeys('amit.kapila.2009@gmail.com');
      return promiseFillUsername;
    }).then(function () {
      console.log("Username entered successfully in Trendlyne");

      let promisePasswordBox = driver.findElement(swd.By.id("id_password"));
      return promisePasswordBox;
    }).then(function (passwordBox) {
      
      let promiseFillPassword = passwordBox.sendKeys('Angular789\n');
      return promiseFillPassword;
    }).then(function () {
      console.log("Successfully signed in Trendlyne!");
      driver.manage().getCookie('.trendlyne').then(function (cookiestl) {
        process.env.trendlynecookietl = cookiestl.value;
      });
      driver.manage().getCookie('_gat').then(function (cookiesgat) {
        
        process.env.trendlynecookiegat = cookiesgat.value;
      });
      driver.manage().getCookie('_gid').then(function (cookiesgid) {
        process.env.trendlynecookiegid = cookiesgid.value;
      });
      driver.manage().getCookie('csrftoken').then(function (cookiescsrf) {
        process.env.trendlynecookiecsrf = cookiescsrf.value;
        
      });
      driver.manage().getCookie('_ga').then(async function (cookiesga) {
        process.env.trendlynecookiega = cookiesga.value;
            
        process.env.trendlynecookie =
          '_gid=' + process.env.trendlynecookiegid + '; .trendlyne=' + process.env.trendlynecookietl + '; csrftoken=' + process.env.trendlynecookiecsrf + '; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _ga=' + process.env.trendlynecookiega + '; _gat=1'
            
        // console.log(process.env.trendlynecookie)
        return (process.env.trendlynecookie),
        await driver.quit(); 
      });
             
      
      
    }).catch(function (err) { console.log("Error ", err, " occurred!"); });
    //    
};

      def();

 

  // * To fetch Opstra session Cookies

// app.get('/api/opstracookie', async 
async function ghi(req, res) {

    let options1 = new chrome.Options();
options1.addArguments("--headless");
options1.addArguments("--disable-gpu");
  options1.addArguments("--no-sandbox");
  options1.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
   let serviceBuilder1 = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);
  
  //  binary_location = "C:\\path\\to\\chrome.exe"
  //  options.setBinary(".\\src\\assets\\chromedriver.exe");
  options1.addArguments("--disable-dev-shm-usage")
  let driver1 = new webdriver.Builder()
  .forBrowser('chrome')
    .setChromeOptions(options1)
    .setChromeService(serviceBuilder1)
  .build();
  
 
  let tabToOpen = driver1.get("https://opstra.definedge.com/ssologin"); 
  tabToOpen.then(function () { 
  
          let findTimeOutP =driver1.manage().setTimeouts({implicit: 5000,}); 
          return findTimeOutP; }).then(function () { 
            let promiseUsernameBox = 
            driver1.findElement(swd.By.id("username")); 
          return promiseUsernameBox;}).then(function (usernameBox) { 
  
          let promiseFillUsername = 
              usernameBox.sendKeys('amit.kapila.2009@gmail.com'); 
          return promiseFillUsername; 
  
      }).then(function () { 
        console.log("Username entered successfully in Opstra"); 
        let promisePasswordBox = 
      driver1.findElement(swd.By.id("password")); 
      return promisePasswordBox;}).then(function (passwordBox) { 
          let promiseFillPassword = 
          passwordBox.sendKeys('Angular789\n'); 
          return promiseFillPassword;}).then(function () { 
      console.log("Successfully signed in Opstra!"); 
        driver1.manage().getCookie('_gid').then(function (cookiesopgid) {
          process.env.opstracookiegid=cookiesopgid.value
        })
        driver1.manage().getCookie('_gat').then(function (cookiesopgat) {
            process.env.opstracookiegat=cookiesopgat.value
        })
        driver1.manage().getCookie('_ga').then(function (cookiesopga) {
              process.env.opstracookiega=cookiesopga.value
        })
        driver1.manage().getCookie('JSESSIONID').then(async function (cookiesopjsid) {
                process.env.opstracookiejsid = cookiesopjsid.value
          process.env.opstracookie = '_ga=' + process.env.opstracookiejsid + '; _gid=' + process.env.opstracookiegid + '; _gat=' + process.env.opstracookiegat + '; JSESSIONID=' + process.env.opstracookiejsid
              
                return (process.env.opstracookie),
               await driver1.quit(); 
        })
           }).catch(function (err) { console.log("Error ", err, " occurred!"); });
          //  await driver1.quit();
};
    // );
 ghi();

 
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
 

  const axiosApiInstance = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/data-cibaq/endpoint/data/v1/action',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'hhsIfhonChu0fJ000k04e1k7nb5bX1CvkIWLw17FRjrzLg7kWihbY7Sy4UUKwoUy ',
      Accept: 'application/ejson'
    }
  });

  app.get('/api/et', function (req, res) {
    const start = Date.now();
    const obj=[];
    
   
   
  //  const fs = require('fs');
   
   // Read the file
   fs.readFile('./src/app/lists/tlid1.json', (err, data) => {
     if (err) throw err;
   
     // Parse the data into an array
     const symbols = JSON.parse(data);
   
  //    // Iterate over the array
  //    array.forEach((obj) => {
  //      // Get the key and value
  //     //  const key = Object.keys(obj)[1];
  //      const value = obj['tlid'];
   
  //      // Hit the URL with the key/value
  //      fetch(`https://example.com/${value}`)
  //        .then((response) => response.json())
  //        .then((data) => console.log(data))
  //        .catch((err) => console.error(err));
  //    });
  //  });
 
   
// read the contents of the file
// fs.readFile('./src/app/lists/tlid1.json', 'utf8', (err, data) => {
//   if (err) throw err;


//   const symbols = JSON.parse(data);

 
  const promises = symbols.map(async symbol  => {
    console.log(`${symbol.tlid}`)
   
     const response= await fetch(
        `https://trendlyne.com/mapp/v1/stock/chart-data/${symbol.tlid}/SMA/?format=json`,
        {
          headers: { Accept: 'application/json' }
        }
      );
      if (!response.ok) {
        return { statusCode: response.status, body: response.statusText }
      }
      const data1 = await response.json();
     console.log(`${symbol.name}`)
      try{
              obj.push({
        // Date: symbol.Date,
        // Time: symbol.time,
        Name: `${symbol.name}`,
        DurabilityScore: data1.body['stockData'][6],
        DurabilityColor: data1.body['stockData'][9],
        VolatilityScore: data1.body['stockData'][7],
        VolatilityColor: data1.body['stockData'][10],
        MomentumScore: data1.body['stockData'][8],
        MomentumColor: data1.body['stockData'][11]
      })
      
    
   
  }catch (error){
    console.log('error')
  }
  // await client1.connect()
  // await client1.db('DVM').collection("DVM").updateMany(obj) 
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
   
    // console.log(obj)
    try {
      await Promise.all(promises)
    } catch (e) {
      console.log(e)
    }
  });
  const timeTaken = Date.now() - start;
  console.log(`Total time taken: ${timeTaken} milliseconds`);

  client1.close()
  })


  });

  

  app.use(express.static(__dirname + "/"));
  app.use(express.static(path.join(__dirname, '/dist/amitnginx')))
  app.get("/*", function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/amitnginx/index.html'));
  });
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
//  }
