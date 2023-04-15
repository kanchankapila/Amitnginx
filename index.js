require('chromedriver')
 const chromium = require('@sparticuz/chromium')
  const puppeteer = require('puppeteer')
 const swd = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const chrome=require('selenium-webdriver/chrome')
const express = require('express');
const fs = require('fs');
const filePath = './src/app/lists/tlid.txt';
var app = express();

const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');


const { MongoClient } = require('mongodb');
const client1 = new MongoClient( "mongodb+srv://amit:amit0605@cluster0.mxilo.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true });
function time(){
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0"); // add leading zero if necessary
const minutes = now.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
const time = `${hours}:${minutes}`;


console.log(time); // output example: "15:30"
if (time == '09:45'){
  Trendlynecookie()
}
if (time == '01:05'){
  Opstracookie()
}
}

setInterval(time, 60000);
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
  const axiosApiInstance = axios.create({
    baseURL: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-oqytz/endpoint/data/v1/action',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'HgzdJTZiRk4gFe7tl1m31DxVxNCZXecOuCJvSz6xlG0p5lMC21c7u8CeLcDma97C',
      Accept: 'application/ejson'
    }
  });
  app.get('/api/trendlynecookie', async function (req, res) {

            
   
    let browser = null
    console.log('spawning chrome headless')
    try {
      const start = Date.now();
      const executablePath = process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath 
    
      browser = await puppeteer.launch({
             args: chromium.args,
           
         executablePath:executablePath ,
         headless:true,
          ignoreHTTPSErrors: true,
      
      })
     
      page = await browser.newPage();
      await page.setCacheEnabled(true)
      
      const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.type('#id_login', 'amit.kapila.2009@gmail.com');
         
         await page.type('#id_password', 'Angular789\n');
       
          
    cookie = await page.cookies()
     
    for (let val in cookie){
     
        if (cookie[val].name == '.trendlyne'){
          process.env.trnd=cookie[val].value
        
       }}
       for (let val in cookie){
       if (cookie[val].name == 'csrftoken'){
         process.env.csrf=cookie[val].value
      
      }
    }
   
     
  
      
        axiosApiInstance
          .post('/updateOne', {
            collection: 'cookie',
            database: 'Trendlynecookie',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                "csrf":  process.env.csrf,
                "trnd":  process.env.trnd,
                "time": start
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Trendlyne cookie Data updated successfully');
            res.status(200).send('Trendlyne cookie Data updated successfully');
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
            res.status(500).send('Error while updating data');
          });
  
      const timeTaken = Date.now() - start;
      console.log(`Total time taken: ${timeTaken} milliseconds`);

    } catch (error) {
      console.log(error);
    
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    } finally {
      if (browser) {
          await browser.close();
        
      }
    }
   
  });
  
 

    async function Trendlynecookie(req, res) {
   
    let browser = null
    console.log('spawning chrome headless')
    try {
      const start = Date.now();
      const executablePath = process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath 
    
      browser = await puppeteer.launch({
             args: chromium.args,
           
         executablePath:executablePath ,
         headless:true,
          ignoreHTTPSErrors: true,
      
      })
     
      page = await browser.newPage();
      await page.setCacheEnabled(true)
      
      const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.type('#id_login', 'amit.kapila.2009@gmail.com');
         
         await page.type('#id_password', 'Angular789\n');
       
          
    cookie = await page.cookies()
 
    for (let val in cookie){
     
        if (cookie[val].name == '.trendlyne'){
          process.env.trnd=cookie[val].value
        
       }}
       for (let val in cookie){
       if (cookie[val].name == 'csrftoken'){
         process.env.csrf=cookie[val].value
      
      }
    }
   
     
  
      
        axiosApiInstance
          .post('/updateOne', {
            collection: 'cookie',
            database: 'Trendlynecookie',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                "csrf":  process.env.csrf,
                "trnd":  process.env.trnd,
                "time": start
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Trendlyne cookie Data updated successfully');
            res.status(200).send('Trendlyne cookie Data updated successfully');
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
            res.status(500).send('Error while updating data');
          });
  
      const timeTaken = Date.now() - start;
      console.log(`Total time taken: ${timeTaken} milliseconds`);

     
     
    } catch (error) {
      console.log(error);
    
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    } finally {
      if (browser) {
          await browser.close();
      
      }
    }
   
  };
 
  


     
 

  
app.get('/api/Opstracookie', function (req, res) {
  console.log("hi")
// async function Opstracookie(req, res) {

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
        
        driver1.manage().getCookie('JSESSIONID').then(async function (cookiesopjsid) {
                process.env.opstracookiejsid = cookiesopjsid.value
                await axiosApiInstance.post('/updateOne', {
                  collection: 'cookie',
                  database: 'Opstracookie',
                  dataSource: 'Cluster0',
                  filter: {},
                  update: {
                    $set: {
                      JSESSIONID: process.env.opstracookiejsid
                    
                    }
                  },
                  upsert: true
                });
         
               await driver1.quit(); 
        })
           }).catch(function (err) { console.log("Error ", err, " occurred!"); });
          //  await driver1.quit();
// };
    
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
 

  

  app.get('/api/trendlyneDVM', function (req, res) {
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
        res.status(500).send('Error while reading file');
        return;
      }
  
      try {
        // Parse the data into an array
        const symbols = JSON.parse(data);
  
        // Process 100 symbols at a time
        for (let i = 0; i < symbols.length; i += 100) {
          const symbolBatch = symbols.slice(i, i + 100);
  
          const promises = symbolBatch.map(async symbol => {
            try {
              const response = await fetch(
                `https://trendlyne.com/mapp/v1/stock/chart-data/${symbol.tlid}/SMA/?format=json`,
                {
                  headers: { Accept: 'application/json' },
                }
              );
  
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
  
              const data1 = await response.json();
              console.log(`${symbol.name}`);
  
              obj.push({
                Name: `${symbol.name}`,
                DurabilityScore: data1.body['stockData'][6],
                DurabilityColor: data1.body['stockData'][9],
                VolatilityScore: data1.body['stockData'][7],
                VolatilityColor: data1.body['stockData'][10],
                MomentumScore: data1.body['stockData'][8],
                MomentumColor: data1.body['stockData'][11],
              });
            } catch (error) {
              console.log('Error while fetching data:', error);
            }
          });
  
          await Promise.all(promises);
        }
  
        const timeTaken = Date.now() - start;
        console.log(`Total time taken: ${timeTaken} milliseconds`);
  
        axiosApiInstance
          .post('/updateOne', {
            collection: 'DVM',
            database: 'DVM',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                output: obj,
                time: start,
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Data updated successfully');
            res.status(200).send('Data updated successfully');
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
            res.status(500).send('Error while updating data');
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
        res.status(500).send('Error while parsing data');
      }
    });
  });
    

  
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
//  }
