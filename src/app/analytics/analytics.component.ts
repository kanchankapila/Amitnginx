import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
export interface mcarraytiles {
  
  y: number;
  label: string;
  
}
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
  
export class AnalyticsComponent implements OnInit {
  mcarray: mcarraytiles[] = [];
  mcname = [];
  mcpchange = [];
  mc30dvol = [];
  mc5dvol= [];
  mccvol = [];
  mcsymbol: any
  basicData: any;
  basicOptions: any;
  mcvolumetime: any;
  mcvolumedate: any;
  pvboname = [];
  pvbopchange = [];
  pvbovolume = [];
  bulmomname = [];
  bulmompchange = [];
  bulmomvolume = [];
  mcnameb = [];
  mcpchangeb = [];
  mc30dvolb = [];
  mc5dvolb= [];
  mccvolb = [];
  mcsymbolb: any
  basicData1: any;
  basicOptions1: any;
  basicData2: any;
  basicOptions2: any;
  basicData3: any;
  basicOptions3: any;
  dblist = {  'moneycontrol': []}
  constructor(private dataApi: DataapiService, private window: Window) { }

  ngOnInit(): void {
    this.getkitestockreports()
    this.getetDIIBuying()
    { setInterval(() => { this.chartinkpvbreakout() }, 60000); }
    { setInterval(() => { this.chartinkbullishmomentum() }, 60000); }
    this.chartinkpvbreakout()
    this.chartinkbullishmomentum()
    this.getmcvolumeviewbearish('moneycontrol')
  this.getmcvolumeviewbullish('moneycontrol')
    // {
    //   setInterval(() => {  this.getmcvolumeview('moneycontrol') }, 1200000);
    // }
  }
  getkitestockreports() {
    this.dataApi.getkitestockreports().subscribe(data3 => {
  
      let nestedItems = Object.keys(data3).map(key => {
        return data3[key];
      });
      console.log(nestedItems)
  
    }, err => {
      console.log(err)
  
  
  
  
    })
  }
  getetDIIBuying() {
    this.dataApi.getetDIIBuying().subscribe(data3 => {
  
      let nestedItems = Object.keys(data3).map(key => {
        return data3[key];
      });
      console.log(nestedItems)
  
    }, err => {
      console.log(err)
    })
  }
  async getmcvolumeviewbullish(dbname) {
    this.dataApi.getmcvolumeview(dbname).subscribe(data => {
      this.dblist[dbname] = data

      let nestedItems = Object.keys(data).map(key => {
        return data[key];
      });
      this.mcarray.length = 0;
      this.mcname.length = 0;
      this.mcpchange.length = 0;
      this.mccvol.length = 0;
      this.mc30dvol.length = 0;
      this.mc5dvol.length = 0;
      for (let val in nestedItems) {
        
        if ((Number(nestedItems[val].CurrentVol)) > Number((nestedItems[val].FiveDVol))) {
          if ((Number(nestedItems[val].PChangeper)) > 0){
      this.mcsymbol = (nestedItems[val].Symbol)
      
      this.mcname.push(nestedItems[val].StockName)
      this.mcpchange.push(nestedItems[val].PChangeper)
      this.mccvol.push(nestedItems[val].CurrentVol)
      this.mc30dvol.push(nestedItems[val].ThirtyDVol)
            this.mc5dvol.push(nestedItems[val].FiveDVol)
            this.mcvolumetime=(nestedItems[val].Time)
            this.mcvolumedate=(nestedItems[val].Date)
    }
  }
      }
      
      this.buildmcvolumebullish()
      //this.buildchart()
       

      
      }, err => {
      console.log(err)
    })
  }
  buildmcvolumebullish() {
 
    var randomColorGenerator = function () { 
      return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
  };
    this.basicData = {
      
      labels:this.mcname,
      
      
      datasets: [
          {
              label: "value",
          //backgroundColor: this.getRandomColor(),
          backgroundColor: randomColorGenerator,
    data: this.mcpchange

          },
        
    
        ]
  };
  var footerLine15 = this.mccvol
  //console.log(footerLine1 )
  var footerLine16 = this.mc5dvol
    this.basicOptions = {
      
      responsive: true,
      tooltips: {
        callbacks:{
          beforeFooter: function(tooltipItems, data) { 
            return 'Current Volume:' + footerLine15[tooltipItems[0].index];
          },
          footer: function(tooltipItems, data) { 
            return '5d Vol ' + footerLine16[tooltipItems[0].index];
          }
      }
  },
      plugins: {
        datalabels: {
          display: true,
          align: 'top',
          anchor: 'end',
          color: "#2756B3",
         
  
          font: {
            family: 'FontAwesome',
            size: 14
          },
        }
      },
    legend: {
        labels: {
            fontColor: '#495057'
        }
    },
    scales: {
        xAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 15,
            autoSkip: false,
                fontColor: '#495057'
            }
        }],
        yAxes: [{
          ticks: {
            labelAngle: -10,
            labelFontSize: 5,
           
              autoSkip: false,
          
                fontColor: '#495057'
            }
        }]
    }
};
  }
  

async getmcvolumeviewbearish(dbname) {
  this.dataApi.getmcvolumeview(dbname).subscribe(data => {
    this.dblist[dbname] = data

    let nestedItems = Object.keys(data).map(key => {
      return data[key];
    });
    this.mcarray.length = 0;
    this.mcname.length = 0;
    this.mcpchange.length = 0;
    this.mccvol.length = 0;
    this.mc30dvol.length = 0;
    this.mc5dvol.length = 0;
    for (let val in nestedItems) {
      
      if ((Number(nestedItems[val].CurrentVol)) > Number((nestedItems[val].FiveDVol))) {
        if ((Number(nestedItems[val].PChangeper)) < 0){
    this.mcsymbolb = (nestedItems[val].Symbol)
    
    this.mcnameb.push(nestedItems[val].StockName)
    this.mcpchangeb.push(nestedItems[val].PChangeper)
    this.mccvolb.push(nestedItems[val].CurrentVol)
    this.mc30dvolb.push(nestedItems[val].ThirtyDVol)
    this.mc5dvolb.push(nestedItems[val].FiveDVol)
  }
}
    }
    
    this.buildmcvolumebearish()
    //this.buildchart()
     

    
    }, err => {
    console.log(err)
  })
}
buildmcvolumebearish() {
 
  var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};
  this.basicData1 = {
    
    labels:this.mcnameb,
    
    
    datasets: [
        {
            label: "value",
        //backgroundColor: this.getRandomColor(),
        backgroundColor: randomColorGenerator,
  data: this.mcpchangeb

        },
      
  
      ]
};
var footerLine17 = this.mccvolb
//console.log(footerLine1 )
var footerLine18 = this.mc5dvolb
  this.basicOptions1 = {
    
    responsive: false,
    maintainAspectRatio: false,
    tooltips: {
      callbacks:{
        beforeFooter: function(tooltipItems, data) { 
          return 'Current Volume:' + footerLine17[tooltipItems[0].index];
        },
        footer: function(tooltipItems, data) { 
          return '5d Vol ' + footerLine18[tooltipItems[0].index];
        }
    }
},
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#2756B3",
       

        font: {
          family: 'FontAwesome',
          size: 14
        },
      }
    },
  legend: {
      labels: {
          fontColor: '#495057'
      }
  },
  scales: {
      xAxes: [{
        ticks: {
          labelAngle: -10,
          labelFontSize: 15,
          autoSkip: false,
              fontColor: '#495057'
          }
      }],
      yAxes: [{
        ticks: {
          labelAngle: -10,
          labelFontSize: 5,
         
            autoSkip: false,
        
              fontColor: '#495057'
          }
      }]
  }
};
}
chartinkpvbreakout() {
  this.dataApi.chartinkpvbreakout().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.pvboname.length = 0;
    this.pvbopchange.length = 0;
    this.pvbovolume.length = 0;
    for (let val in nestedItems[3]) {
      this.pvboname.push(nestedItems[3][val].name)
      this.pvbopchange.push(nestedItems[3][val].per_chg)
      this.pvbovolume.push(nestedItems[3][val].volume)
    }
    this.buildchartinkpvbreakout()
  }, err => {
    console.log(err)
  })
}

buildchartinkpvbreakout() {
  
  var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};
  this.basicData2 = {
    
    labels:this.pvboname,
    
    
    datasets: [
        {
            label: "value",
        //backgroundColor: this.getRandomColor(),
        backgroundColor: randomColorGenerator,
  data: this.pvbopchange

        },
      
  
      ]
};
var footerLine17 = this.pvbopchange
//console.log(footerLine1 )
var footerLine18 = this.pvbovolume
  this.basicOptions2 = {
    
    responsive: false,
    maintainAspectRatio: false,
    tooltips: {
      callbacks:{
        beforeFooter: function(tooltipItems, data) { 
          return 'Change Percentage:' + footerLine17[tooltipItems[0].index];
        },
        footer: function(tooltipItems, data) { 
          return 'Volume' + footerLine18[tooltipItems[0].index];
        }
    }
},
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#2756B3",
       

        font: {
          family: 'FontAwesome',
          size: 14
        },
      }
    },
  legend: {
      labels: {
          fontColor: '#495057'
      }
  },
  scales: {
      xAxes: [{
        ticks: {
          labelAngle: -10,
          labelFontSize: 15,
          autoSkip: false,
              fontColor: '#495057'
          }
      }],
      yAxes: [{
        ticks: {
          labelAngle: -10,
          labelFontSize: 5,
         
            autoSkip: false,
        
              fontColor: '#495057'
          }
      }]
  }
};
}

chartinkbullishmomentum() {
  this.dataApi.chartinkbullishmomentum().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    this.bulmomname.length = 0;
      this.bulmompchange.length = 0;
      this.bulmomvolume.length = 0;
    for (let val in nestedItems[3]) {
      this.bulmomname.push(nestedItems[3][val].name)
      this.bulmompchange.push(nestedItems[3][val].per_chg)
      this.bulmomvolume.push(nestedItems[3][val].volume)
    }
    this.buildchartinkbullishmomentum()
  }, err => {
    console.log(err)
  })
}

buildchartinkbullishmomentum() {
  
  var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};
  this.basicData3 = {
    
    labels:this.bulmomname,
    
    
    datasets: [
        {
            label: "value",
        //backgroundColor: this.getRandomColor(),
        backgroundColor: randomColorGenerator,
  data: this.bulmompchange

        },
      
  
      ]
};
var footerLine19 = this.pvbopchange
//console.log(footerLine1 )
var footerLine20 = this.pvbovolume
  this.basicOptions3 = {
    
    responsive: false,
    maintainAspectRatio: false,
    tooltips: {
      callbacks:{
        beforeFooter: function(tooltipItems, data) { 
          return 'Change Percentage:' + footerLine19[tooltipItems[0].index];
        },
        footer: function(tooltipItems, data) { 
          return 'Volume' + footerLine20[tooltipItems[0].index];
        }
    }
},
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#2756B3",
       

        font: {
          family: 'FontAwesome',
          size: 14
        },
      }
    },
  legend: {
      labels: {
          fontColor: '#495057'
      }
  },
  scales: {
      xAxes: [{
        ticks: {
          labelAngle: -10,
          labelFontSize: 15,
          autoSkip: false,
              fontColor: '#495057'
          }
      }],
      yAxes: [{
        ticks: {
          labelAngle: -10,
          labelFontSize: 5,
         
            autoSkip: false,
        
              fontColor: '#495057'
          }
      }]
  }
};
}


}
