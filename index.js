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

app.get('/api/mcinsightspg', async function (req, res) {
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

      const insertQuery = `
        INSERT INTO mcinsights (output, time)
        VALUES ($1, $2)
        ON CONFLICT DO NOTHING
      `;

      await pool.query(insertQuery, [obj, new Date(start)]);

      console.log('Data updated successfully');
    } catch (error) {
      console.log('Error while processing data:', error);
    }
  });
});
  app.get('/api/mcsymbolfetcher', async function (req, res) {
   
      fs.readFile('./symbolname.json', async (err, data) => {
        if (err) {
          console.log('Error while reading file:', err);
          return;
        }
    
        try {
          // Parse the data into an array
          const symbols = JSON.parse(data);
    
          // Process 100 symbols at a time
          const symbolBatches = [];
          for (let i = 0; i < symbols.length; i += 10) {
            symbolBatches.push(symbols.slice(i, i + 10));
          }
    
          const results = [];
    
          // Process each symbol batch asynchronously
          for (const symbolBatch of symbolBatches) {
            const promises = symbolBatch.map(async symbol => {
              try {
                const response = await fetch(`https://www.moneycontrol.com/portfolio-management/search/stocks&keyword=${symbol.name}?classic=true`, {
                  "headers": {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                    "accept-language": "en-US,en;q=0.9",
                    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest",
                    "cookie": "_gcl_au=1.1.798235151.1681153299; A18ID=1681153298963.227368; MC_PPID_LOGIC=normaluser12982822265451412mcids; _cb=D9tA-hBO1n4LBsvmCB; WZRK_G=16061583a79b44cbb727a66b25f8a24f; _rtbpbjs_userid_consent_data=3524755945110770; __gads=ID=21887e4b79577f11:T=1681153305:S=ALNI_MYco8Fx87cVuRa7B_TsfXuojZ7jwA; __gpi=UID=00000bf05a297f97:T=1681153305:RT=1682915503:S=ALNI_MZfZETWpfxOICDaIpuBKqt7OPNHUg; _hjSessionUser_3470143=eyJpZCI6IjlkOTkwNTZhLTg3ZDAtNTdiNC05ODBlLWNmZDZiYTdmNDlmNyIsImNyZWF0ZWQiOjE2ODI5MTU0OTM2MjksImV4aXN0aW5nIjp0cnVlfQ==; verify=1%24%24%23%23%24%241; nnmc=Amitkapila86; UIDHASH=3410818d8a475ba7f44539894fdcfd09126acfc822f0461d5aed5acca6fdca8a; token-normal=NiqgU9IlR_1zDwSbwIruxc3jtQ4zEUl55sahvK7gzGFvpKNZgTZsUhGiFCgA3jOGpx_wcqAvmf9f2b_DAX9qHA; DEF_VIEW=4; tvuid=WVcxcGRHdGhjR2xzWVRnMg%3D%3D; __token__=st=1682915520~exp=1682919120~acl=/*~data=__1__1693420199~hmac=39e4d3a11a4d4d202c32032803a4f988a851f0a8fe162ac97202fdf1d95c5b24; mcpro=1; _gid=GA1.2.1549993677.1684498936; nousersess=ii2f6kktmlkx4zqj; _cc_id=a865c9d6504582c0d463556d0fa6ff00; panoramaId_expiry=1684585343402; panoramaId=6bad6fd5509556c85ad46ffa87b3a9fb927a62169d48b977c3f6bf6e665dd1d2; panoramaIdType=panoDevice; _io_ht_r=1; __io=28bed1c17.5f5838225_1684498952010; populate_redis95faec7bd2795750b9f41e30b251dc8d=1; stocks=|Sapphire.Foods_SFI05~19%7CIDFC.Bank_IDF01%7E1%7C; _hjIncludedInSessionSample_3470143=0; _hjSession_3470143=eyJpZCI6IjhmMzZlMDA0LWQ4YmEtNGM1Yy1iNjI1LWIyMmM3YzMyYzU4NyIsImNyZWF0ZWQiOjE2ODQ1NjM5NzkzMjQsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; _cb_svref=null; PHPSESSID=9bfeagjen3jh56pkbphpj40094; cto_bundle=MQH1Zl9wa1JxaDBQMDZRZnU5eWxaWDhldXZPdDBacU9GYWxQZjladDZKYmxsY0F3WU03U2JRUkpsR2p5b1JFWEFVZEJkanNIR2NRMVpIVHkwSTBFSjNmYUx1ZXFlT0l4cVZZcEtPTjlHR1JscDNSRzFTSDlVN2o0eEs3cUpEOCUyRlp4M1o0Q1F6cW1ycCUyRnQ1dXoyVURYMzgxN240ZVpmcWV2TldCSGlmU3dZMyUyRldmRmslM0Q; FCNEC=%5B%5B%22AKsRol9lKBFTn1tcpkEG9jPDYQ3oX-1lsOCut0-7XzuW6q08hl21oXXl4L7cejcBa5Gc7AtmwN9TNBdMgYcJ7rTrjBGpKvsbBdpPVMlBFidfImgXTLqO6a3_Q_fq2xnif98XzayJkDh8v8r9icjJGSOWh1_V2yf5Iw%3D%3D%22%5D%2Cnull%2C%5B%5D%5D; __io_session_id=bd1ffdcc5.9cb3e8574_1684564005481; __io_unique_43938=20; _abck=E3639C4787050FA5764BFE0F7C14F30A~0~YAAQRagRYCRGeTeIAQAA19PWNwko7AhC5zqZj0p76YjrTjLlCK63PwKdxFocvurxPfkRV9Svzgd4YBs/fwcJ7fVu9tOm5Rf8d+Cf24SlpEGzL8fYDgjETDq1agsJQblU4dN3h5GW/Avkkmj7kXr8hfzeJXAjsWwKy1vFZRBvvXQ/3TXTJoJuEM9BWqvyKxvnIvraV4YrNFkBwWJ/khkTpEs5iPATkW+htwAu37pO3xcquE2yi6LrWUzxVdFArpGNHIbqVFzdCQCHzZIzdHPLYRudfx7Ib/4/fiMiVhMZ1SdP+VymxOTJi92bPfiQaD8XWKaYwWJZTm3/O2PmC59qOiRamHc+ko6jyttbRZ6iCAitUj6HumYakKQEDZG+8+YQfsoxDyI9a8uoqdMfMapVKGhsYfhPiRdMa58USnpM~-1~-1~-1; bm_sz=1E866DAA2F4E480F8964EEBE02381484~YAAQRagRYCdGeTeIAQAA19PWNxN6YzjHHpZE/4j614Q0i9WYw/3rvBicjBkdaVPuS38F2lSRpY90nWvd/EQetw/JuZb2RFJm2hfD2jgwkw1mssaKzG0Y7jebrPUflpvbatap0/qdde+viEYe9wkNXMnLBY6wsC+Ikc+TAxrdd9hUkQINaYAAFLUYO5S7Khz9u1WdecIRkBxunJxWiUdd+KL5A3N6AMD2QWAxO4n02c39cBFFhxYgtDEZwFwcJH00kYvmI+g5i4+ihu5hmp5vrJYRoxSLpoSsOesEUdIxK2DOVeA3KN8VW74=~3356740~4538937; bm_mi=47A1CED5E916BED17CE71B2DD1447D8D~YAAQzu/IFw1sWwWIAQAAgJ/kNxMa81uz46iZKc4c8y1xAZtJUqFr6H0METUAHiHWMwdSznsIUYdKlu/te9PTkleKmY8muij34pYixFXNBXfRhVctcLl/Ev1L5eBS4nPOXYxiiaY6YlyImiZI8rkr0HA4amxKc3AIHA0HatsCy4DI+vo8TUef2m2OL4GdVZLjEeyTnvg5cE4569sLyYcZ2GWi24HTMOyNVDwWLNrOCJWoN0+5M69mK9yD7reW59URYa6lLQZM8UhA9UaporC2kq2Fo2UKQ54LoLOs8omFOJwrQy1GpIQWEZaPkLb/f2RvIJXUuKYr3r2lUr8IIyuxutZXlg==~1; bm_sv=E4162063F57C36C8A2E8D0D77B4983A8~YAAQzu/IFw5sWwWIAQAAgJ/kNxMJ86zqHOseKhgaGoy01weGzTHkE9Vgz0G+xjTB2+c9jgU9dIx+3tsgEkdMO5cTDukxP/xp92Mb22YbKfhCgUJvdqaDrjiDBPWxE+koM6pHxzjtBrpM1/RLCscOB7Ty9uSdO1Rem9ZpLt3S+GAocMI6KeIgm8n8jtboTwIpwQwf5iC8IEWhYg2UfRfjYEVIS43vOHPGBFIFnk4bpCYlBbHnXvH7LMFlRmbUFk9I4C1fJyoM~1; ak_bmsc=B5CD44EEC3AFD90D67BDE5B8DAC5BA63~000000000000000000000000000000~YAAQzu/IF1JxWwWIAQAA7hXlNxO75zjCpHLA+IuXXtp7D1zK0q5ZoiY/ik4lc+wNCa1ajSEw7HFx7siJiBzjoLUOr2lRoLes2bViGx5PbwsKN33oY2RUwOyB4rgsvPzmPvjm7R0MyAxQskow3jKtRMw79MRB9ELfVNHMIKFUTL69o/0giHYOow3IRoS1it2YbMWmxhDZ9/4ByBD20TUi+GqF/F7ZziDeb3ByJVW5Me3qEq0+uAvOHA/vstKSXfjxNoLEWEP3fRlPkD+P1iO7XAw9UVM/ykES4Tha582tkNbYOQgjhbWJiTQ1IN+3/ZoE1pCJL7N+xTsnCqSNbrIgsKrN2m2Ub6Wdf0HcLa2Q/AdHmWv+gGEg2Mh9G66k3MK+xaCwa7+IUwY2nUasFnNYowWGHIz3IG6Cz0XEFxLgDNbc0B1jvT/V+Cw0j8kR0m+Xhi3RbA==; _chartbeat2=.1681153301768.1684569479989.0000000000000011.BAf1SgBmguIeBsQ7VFBaDyE0DJ3ClX.22; __io_nav_state43938=%7B%22current%22%3A%22%2Fportfolio-management%2Fportfolio-investment-dashboard%2Fstock%22%2C%22currentDomain%22%3A%22www.moneycontrol.com%22%2C%22previous%22%3A%22%2Fportfolio-management%2Fportfolio-investment-dashboard%2Fstock%2Fwatchlist%22%2C%22previousDomain%22%3A%22www.moneycontrol.com%22%7D; _ga=GA1.1.78368543.1681153299; WZRK_S_86Z-5ZR-RK6Z=%7B%22p%22%3A22%2C%22s%22%3A1684563979%2C%22t%22%3A1684569480%7D; __io_d=24_1092731821; _ga_4S48PBY299=GS1.1.1684563977.17.1.1684569495.0.0.0; __io_lv=1684569508977",
                    "Referer": "https://www.moneycontrol.com/portfolio-management/portfolio-investment-dashboard/stock/watchlist",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                  },
                  "body": null,
                  "method": "GET"
                
                });
    
                const json = await response.json();
                results.push(json);
              } catch (error) {
                console.error('Error processing symbol:', symbol.name, error);
              }
            });
    
            await Promise.all(promises);
          }
    
          // Save the results as JSON to a file
          const outputFilePath = './output.json';
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

    ttvolbreakout();
    mcinsight();
    trendlyneDVM();
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
