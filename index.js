
const express = require('express');
const cors=require('cors')
var app = express();
// const dotenv=require('dotenv')
// dotenv.config('/.env')

const fetch = require('node-fetch');



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
  app.get('/api/trendlynecookie', async function (req, res) {

    console.log('Hitting Trendlyne cookie')
    
      var url6 = 'https://render-express-e54x.onrender.com/api/trendlynecookie'
    request(url6, function (error, response, html) {
      if (!error) {
       console.log('Trendlyne cookie Hit !!!')
      }
    })

    res.sendStatus(200);
  });
    app.get('/api/ttvolbreakout', async function (req, res) {

    console.log('Hitting Tickertape Volume Breakout')
    
      var url6 = 'https://render-express-e54x.onrender.com/api/ttvolbreakout'
    request(url6, function (error, response, html) {
      if (!error) {
          console.log('Tickertape Volume Breakout Hit !!!')
      }
    })
 res.sendStatus(200);
   
  });
    app.get('/api/Opstracookie', async function (req, res) {

    console.log('Hitting Opstra cookie')
    
      var url6 = 'https://render-express-e54x.onrender.com/api/Opstracookie'
    request(url6, function (error, response, html) {
      if (!error) {
       console.log('Opstra cookie Hit !!!')
      }
    })
 res.sendStatus(200);
   
  });
  
    app.get('/api/trendlyneDVM', async function (req, res) {

    console.log('Hitting Trendlyne DVM')
    
      var url6 = 'https://render-express-e54x.onrender.com/api/trendlyneDVM'
    request(url6, function (error, response, html) {
      if (!error) {
       console.log('Trendlyne DVM Hit !!!')
      }
    })
 res.sendStatus(200);
   
  });
 

   
 
 

  
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
//  }
