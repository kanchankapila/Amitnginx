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
const dotenv=require('dotenv')
dotenv.config('/.env')
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const { Client } = require('pg');

const { MongoClient } = require('mongodb');
function time(){
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0"); // add leading zero if necessary
const minutes = now.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
const time = `${hours}:${minutes}`;
function ttvolbreak(){
  ttvolbreakout()
}
function trendlyneDVM(){
  trendlyneDVM()
}
console.log(time); // output example: "15:30"
if (time == '09:45'){
  Trendlynecookie()
}
if (time == '11:45'){
  Trendlynecookie()
}
  
  if (time == '03:45'){

   this.timerID = setInterval(ttvolbreak, 120000);
 
   
  }
  if(time == '04:15'){
    clearInterval(this.timerID)
   }

   if (time == '04:16'){

   this.timerID1 = setInterval(ttvolbreak, 900000);
   
   
  }
   if (time == '04:20'){

   this.timerID2 = setInterval(trendlyneDVM, 900000);
   
   
  }
   if (time == '04:25'){

   this.timerID2 = setInterval(trendlyneDVM, 900000);
   
   
  }
  if(time == '10:00'){
    clearInterval(this.timerID1)
   }

} 


setInterval(time, 60000);
setInterval(Opstracookie, 1800000);

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
    baseURL: process.env.mongoapiurl,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.mongoapikey,
      Accept: 'application/ejson'
    }
  });
 
  
  app.get('/api/mcinsights', function (req, res) {
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
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
                `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
                {
                  headers: { Accept: 'application/json' },
                }
              );
  
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
  
              const data1 = await response.json();
  
              console.log(`${symbol.name}`);
  
              // Check if data1.data['insightData']['price'][5] exists before pushing to obj array
              if (data1.data['insightData']['price'][5]) {
                obj.push({
                  Name: `${symbol.name}`,
                  FnO: data1.data['insightData']['price'][4],
                  DealData: data1.data['insightData']['price'][5],
                });
              }
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
            collection: 'mcinsights',
            database: 'MC',
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
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
      }
    });
  });
     
  const { Pool } = require('pg');
const pool = new Pool({
  user: 'ycpnmuie',
  host: 'satao.db.elephantsql.com',
  database: 'ycpnmuie',
  password: 'd4ZAKlbzqUmt1sAirHehOHcrRJDHS3oR',
  port: 5432,
});
const pool1 = new Pool({
  user: 'icdzrvqn',
  host: 'trumpet.db.elephantsql.com',
  database: 'icdzrvqn',
  password: 'mH76I1IChyq6SKmhj4g6uDQjhadSzB-p',
  port: 5432,
});


// Read the file and store the symbols data
let symbolsData = null;
fs.readFile('./tlid.json', (err, data) => {
  if (err) {
    console.log('Error while reading file:', err);
    return;
  }
  symbolsData = JSON.parse(data);
});


const batchSize = 100; // Number of symbols to process in each batch

app.get('/api/mcinsightspg', async function (req, res) {
  const start = Date.now();
  const obj = [];

  try {
      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS mcinsights (
        id SERIAL PRIMARY KEY,
        obj JSONB,
        time TIMESTAMP
      )
    `;
    await pool.query(createTableQuery);
    
    // Delete all existing entries in the table
    const deleteQuery = `DELETE FROM ${tableName}`;
    await pool.query(deleteQuery);

    // Create an index on the "FnO" field
    const createIndexQuery = `
      CREATE INDEX IF NOT EXISTS fno_idx ON ${tableName} (((obj->>'FnO')))
    `;
    await pool.query(createIndexQuery);
    const data = fs.readFileSync('./tlid.json');
    const symbols = JSON.parse(data);

    const processBatch = async (symbolBatch) => {
      const promises = symbolBatch.map(async (symbol) => {
        try {
          const response = await fetch(
            `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
            {
              headers: { Accept: 'application/json' },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data1 = await response.json();

          console.log(`${symbol.name}`);

          // Check if data1.data['insightData']['price'][5] exists before pushing to obj array
          if (data1.data['insightData']['price'][5]) {
            const entry = {
              Name: `${symbol.name}`,
              FnO: data1.data['insightData']['price'][4],
              DealData: data1.data['insightData']['price'][5],
            };

            obj.push(entry);
          }
        } catch (error) {
          console.log('Error while fetching data:', error);
        }
      });

      await Promise.all(promises);
    };

    for (let i = 0; i < symbols.length; i += batchSize) {
      const symbolBatch = symbols.slice(i, i + batchSize);
      await processBatch(symbolBatch);
    }

    const timeTaken = Date.now() - start;
    console.log(`Total time taken: ${timeTaken} milliseconds`);

    const insertQuery = `
      INSERT INTO mcinsights (obj, time)
      VALUES ($1, $2)
      ON CONFLICT DO NOTHING
    `;

    const objString = JSON.stringify(obj);

    await pool.query(insertQuery, [objString, new Date(start)]);

    console.log('Data updated successfully');
  } catch (error) {
    console.log('Error while processing data:', error);
  }
});


    app.get('/api/mcsymbolnamefetcher', async function (req, res) {
   
      fs.readFile('./symbol.json', async (err, data) => {
        if (err) {
          console.log('Error while reading file:', err);
          return;
        }
    
        try {
          // Parse the data into an array
          const symbols = JSON.parse(data);
    
          // Process 100 symbols at a time
          const symbolBatches = [];
          for (let i = 0; i < symbols.length; i += 200) {
            symbolBatches.push(symbols.slice(i, i + 200));
          }
    
          const results = [];
    
          // Process each symbol batch asynchronously
          for (const symbolBatch of symbolBatches) {
            const promises = symbolBatch.map(async symbol => {
              try {
                const response = await fetch(`https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/${symbol.mcsymbol}`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "if-none-match": "F30DADFE47849461912656050BA26686",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://www.moneycontrol.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}) 
                const json = await response.json();
                results.push(json);
              } catch (error) {
                console.error('Error processing symbol:', symbol.name, error);
              }
            });
    
            await Promise.all(promises);
          }
    
          // Save the results as JSON to a file
          const outputFilePath = './outputsymbolname.json';
          fs.writeFile(outputFilePath, JSON.stringify(results, null, 2), err => {
            if (err) {
              console.error('Error while writing file:', err);
              return;
            }
    
            console.log('JSON data saved to:', outputFilePath);
          });
    
          res.send('Processing complete');
        } catch (error) {
          console.error('Error:', error);
          res.status(500).send('An error occurred');
        }
      });
    });
    
              
  app.get('/api/ttvolnmcinsight', async function (req, res) {

    ttvolbreakoutpg();
    mcinsightspg();
    trendlyneDVMpg();
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
     
         await page.type('#id_login', process.env.TRENDLYNE_EMAIL);
         
         await page.type('#id_password', process.env.TRENDLYNE_PASSWORD);
       
          
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
            
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
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
  
app.get('/api/trendlynecookiepg', async function (req, res) {
 
    
   
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
     
         await page.type('#id_login', process.env.TRENDLYNE_EMAIL);
         
         await page.type('#id_password', process.env.TRENDLYNE_PASSWORD);
       
          
    cookie = await page.cookies()
     
    for (let val in cookie){
     
        if (cookie[val].name == '.trendlyne'){
          process.env.trnd=cookie[val].value
        
       }}
       console.log( process.env.trnd)
       for (let val in cookie){
       if (cookie[val].name == 'csrftoken'){
         process.env.csrf=cookie[val].value
      
      }
    }
    console.log( process.env.csrf)

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS cookie (
        id SERIAL PRIMARY KEY,
        csrf VARCHAR(255),
        trnd VARCHAR(255),
        time TIMESTAMP
      )
    `;

    try {
      await pool.query(createTableQuery);
      console.log('Table created successfully or already exists');

      const deleteQuery = `
      DELETE FROM cookie`;
      const updateQuery = `
      
      INSERT INTO cookie (csrf, trnd, time)
      VALUES ($1, $2, to_timestamp($3 / 1000.0))
      RETURNING *
    `;
      const values = [process.env.csrf, process.env.trnd, start];

      try {
        await pool.query(deleteQuery);
        await pool.query(updateQuery, values);
        console.log('Trendlyne cookie Data updated successfully');
      } catch (error) {
        console.log('Error while updating data:', error);
      }
       const createIndexQuery = `
        CREATE INDEX IF NOT EXISTS csrf_idx ON cookie (csrf)
      `;
      try {
        await pool.query(createIndexQuery);
        console.log('Index created successfully or already exists');
      } catch (error) {
        console.log('Error creating index:', error);
      }

      const timeTaken = Date.now() - start;
      console.log(`Total time taken: ${timeTaken} milliseconds`);
    } catch (error) {
      console.log('Error creating table:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }

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
  
  async function mcinsight (req, res) {
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
      
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
                `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
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
                FnO: data1.data['insightData']['price'][4],
                DealData: data1.data['insightData']['price'][5],
               
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
            collection: 'mcinsights',
            database: 'MC',
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
            
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
      
      }
    });
  };

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
     
         await page.keyboard.type('#id_login', process.env.TRENDLYNE_EMAIL);
         
         await page.keyboard.type('#id_password', process.env.TRENDLYNE_PASSWORD);
       
          
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
           
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
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
 
  
  async function Opstracookie(req, res) {
   
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
      
      const targetUrl = "https://opstra.definedge.com/ssologin"
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.type('#username', process.env.TRENDLYNE_EMAIL);
         
         await page.type('#password', process.env.OPSTRA_PASSWORD);
       
          
    cookie = await page.cookies()
 
    for (let val in cookie){
     
        if (cookie[val].name == 'JSESSIONID'){
          process.env.jsessionid=cookie[val].value
        
       }}
      
  
     
  
      
        axiosApiInstance
          .post('/updateOne', {
            collection: 'cookie',
            database: 'Opstracookie',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                
                "jsessionid":  process.env.jsessionid,
                "time": start
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Opstra cookie Data updated successfully');
           
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
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
 

     

  app.get('/api/Opstracookie', async function (req, res) {
   
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
      
      const targetUrl = "https://opstra.definedge.com/ssologin"
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.keyboard.type('#username', process.env.TRENDLYNE_EMAIL);
         
         await page.keyboard.type('#password', process.env.OPSTRA_PASSWORD);
       
          
    cookie = await page.cookies()
 
    for (let val in cookie){
     
        if (cookie[val].name == 'JSESSIONID'){
          process.env.jsessionid=cookie[val].value
        
       }} 
 
   
     
  
      
      axiosApiInstance
      .post('/updateOne', {
        collection: 'cookie',
        database: 'Opstracookie',
        dataSource: 'Cluster0',
        filter: {},
        update: {
          $set: {
            
            "jsessionid":  process.env.jsessionid,
            "time": start
          },
        },
        upsert: true,
      })
      .then(() => {
        console.log('Opstra cookie Data updated successfully');
       
      })
      .catch((error) => {
        console.log('Error while updating data:', error);
       
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
 

  app.get('/api/trendlyneDVMpg', async function (req, res) {
    const start = Date.now();
    const obj = [];
  
    try {
        
      
         const createTableQuery = `
        CREATE TABLE IF NOT EXISTS DVM (
          id SERIAL PRIMARY KEY,
          obj JSONB,
          time TIMESTAMP
        )
      `;
      await pool1.query(createTableQuery);
    const deleteQuery = `DELETE FROM DVM`;
      await pool1.query(deleteQuery);
  
      // Create an index on the "volBreakout" field
      const createIndexQuery = `
        CREATE INDEX IF NOT EXISTS DurabilityScore_idx ON DVM (((obj->>'DurabilityScore')::numeric))
      `;
      await pool1.query(createIndexQuery);
      const data = fs.readFileSync('./tlid.json');
      const symbols = JSON.parse(data);
  
      for (let i = 0; i < symbols.length; i += 100) {
        const symbolBatch = symbols.slice(i, i + 100);
  
        const promises = symbolBatch.map(async (symbol) => {
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
  
      const connectionString = process.env.POSTGRESS_DATABASE_URL1;
      const dbName = 'Tickertape';
      const tableName = 'DVM';
  
      const client = new Client({ connectionString });
      await client.connect();
  
      const insertQuery = `
        INSERT INTO ${tableName} (obj, time)
        VALUES ($1, $2)
      `;
  
      const objString = JSON.stringify(obj);
  
      await client.query(insertQuery, [objString, new Date(start)]);
      await client.end();
  
      console.log('Data updated successfully');
      res.send('Data updated successfully');
    } catch (error) {
      console.log('Error while processing data:', error);
      res.status(500).send('Internal server error');
    }
  });
  
  

  app.get('/api/trendlyneDVM', function (req, res) {
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
      
        return;
      }
  
      try {
        // Parse the data into an array
        const start = Date.now();
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
            
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
      
      }
    });
  });
    
async function trendlyneDVM(req, res) {
 
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
      
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
            
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
      
      }
    });
  };
 

app.get('/api/ttvolbreakoutpg', async function (req, res) {
  const start = Date.now();
  const obj = [];

  try {
      
    
       const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Volume (
        id SERIAL PRIMARY KEY,
        obj JSONB,
        time TIMESTAMP
      )
    `;
    await pool.query(createTableQuery);
  const deleteQuery = `DELETE FROM Volume`;
    await pool.query(deleteQuery);

    // Create an index on the "volBreakout" field
    const createIndexQuery = `
      CREATE INDEX IF NOT EXISTS volBreakout_idx ON Volume (((obj->>'volBreakout')::numeric))
    `;
    await pool.query(createIndexQuery);
    const data = fs.readFileSync('./tlid.json');
    const symbols = JSON.parse(data);

    for (let i = 0; i < symbols.length; i += 100) {
      const symbolBatch = symbols.slice(i, i + 100);

      const promises = symbolBatch.map(async (symbol) => {
        try {
          const response = await fetch(
            `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
            {
              headers: { Accept: 'application/json' },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data1 = await response.json();
          console.log(`${symbol.name}`);
          console.log(data1['data'][0]['sid']);

          obj.push({
            Name: `${symbol.name}`,
            sid: data1['data'][0]['sid'],
            volBreakout: data1['data'][0]['volBreakout'],
          });
        } catch (error) {
          console.log('Error while fetching data:', error);
        }
      });

      await Promise.all(promises);
    }

    const timeTaken = Date.now() - start;
    console.log(`Total time taken: ${timeTaken} milliseconds`);

    const connectionString = process.env.POSTGRESS_DATABASE_URL;
    const dbName = 'Tickertape';
    const tableName = 'Volume';

    const client = new Client({ connectionString });
    await client.connect();

    const insertQuery = `
      INSERT INTO ${tableName} (obj, time)
      VALUES ($1, $2)
    `;

    const objString = JSON.stringify(obj);

    await client.query(insertQuery, [objString, new Date(start)]);
    await client.end();

    console.log('Data updated successfully');
    res.send('Data updated successfully');
  } catch (error) {
    console.log('Error while processing data:', error);
    res.status(500).send('Internal server error');
  }
});

  app.get('/api/ttvolbreakout', function (req, res) {
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
      
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
                `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
                {
                  headers: { Accept: 'application/json' },
                }
              );
  
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
  
              const data1 = await response.json();
              console.log(`${symbol.name}`);
              console.log(data1['data'][0]['sid'])
  
              obj.push({
                Name: `${symbol.name}`,
                sid:data1['data'][0]['sid'],
                volBreakout:data1['data'][0]['volBreakout']
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
            collection: 'Volume',
            database: 'Tickertape',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                 obj,
                time: start,
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Data updated successfully');
            
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
       
      }
    });
  });

  

  async function ttvolbreakout(req, res) {
    const start = Date.now();
    const obj = [];
  
    fs.readFile('./tlid.json', async (err, data) => {
      if (err) {
        console.log('Error while reading file:', err);
      
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
                `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
                {
                  headers: { Accept: 'application/json' },
                }
              );
  
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
  
              const data1 = await response.json();
              console.log(`${symbol.name}`);
              console.log(data1['data'][0]['sid'])
  
              obj.push({
                Name: `${symbol.name}`,
                sid:data1['data'][0]['sid'],
                volBreakout:data1['data'][0]['volBreakout']
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
            collection: 'Volume',
            database: 'Tickertape',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                 obj,
                time: start,
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Data updated successfully');
          
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
          });
      } catch (error) {
        console.log('Error while parsing data:', error);
        
      }
    });
  };
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
//  }
