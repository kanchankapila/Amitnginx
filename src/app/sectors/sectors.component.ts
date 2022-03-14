import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import * as mcindex from '../dashboard/mcsectorlist1'
import ApexCharts from 'apexcharts'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface gsectorstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;

}
export interface dsectorstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
}
export interface esectorstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
}
export interface mcsectorweeklytiles {
  text2: string;
  text1: string;
  text3: string;
}
export interface mcsectormonthlytiles {
  text2: string;
  text1: string;
  text3: string;
}
export interface mcsectordailytiles {
  text2: string;
  text1: string;
  text3: string;
}


@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {
  public lineChartData5r1: Array<number> = [];
  public lineChartData5r2: Array<number> = [];
  public lineChartData5r3: Array<number> = [];
  public lineChartData5s1: Array<number> = [];
  public lineChartData5s2: Array<number> = [];
  public lineChartData5s3: Array<number> = [];

  gsectors: gsectorstiles[] = [];
  dsectors: dsectorstiles[] = [];
  esectors: esectorstiles[] = [];
  mcindexid: any
  mcindexs: any
  mcindex: any
  mcsectorsymbol: any
  mcsectorexchange: any
  indid: any
  mcsymbolname: any
  options: any
  mcindexsymbol: any
  advsectors = [];
  decsectors = [];
  public lineChartDataetindicescharts: Array<number> = [];
  public lineChartLabelstindicescharts: Array<number> = [];
  mcsectordaily: mcsectordailytiles[] = [];
  mcsectorweekly: mcsectorweeklytiles[] = [];
  mcsectormonthly: mcsectormonthlytiles[] = [];
  public lineChartLabels3: Array<any> = [];
  public lineChartData3: Array<number> = [];
  public lineChartData8: Array<number> = [];

  constructor(private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router, private vps: ViewportScroller) { }

  ngOnInit(): void {
    this.getmcsectors()

    this.mcindexs = mcindex.default.Data

    this.getetsectors()
    this.getmmmarkets()
    this.getmcsectorsdetailsd(this.mcsectorsymbol)

    this.getmcsectorsdetailsw(this.mcsectorsymbol)

    this.getmcsectorsdetailsm(this.mcsectorsymbol)
    //this.getmcsnr(this.mcsectorsymbol)
    this.getmcindexdata()
  

  }
  
  async getmcindexdata() {
    for (let val in this.mcindexs) {
      this.mcindexid = this.mcindexs[val].mcsectorid


      await this.getmcstockdetails(this.mcindexid)
    }
  }

  async getmcstockdetails(mcindexid) {
    this.dataApi.getmcstockdetails(mcindexid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.mcindexsymbol = this.mcindexs.filter(i => i.mcsectorid == mcindexid)[0].mcsectorsymbol
      console.log(this.mcindexsymbol)
      //console.log(this.mcsymbolname)
      this.getmcsnrindex(this.mcindexsymbol)
      this.getmcindexchart(mcindexid)




    }, err => {
      console.log(err)
    }
    )
  }
  async getmcsnrindex(mcindexsymbol) {
    this.dataApi.getmcsnrindex(mcindexsymbol).subscribe(data5 => {
      //

      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems[0][0].pivotLevel.r1)
      console.log(nestedItems[0][0].pivotLevel.r2)
      console.log(nestedItems[0][0].pivotLevel.r3)
      this.lineChartData5r1.length = 0;
      this.lineChartData5r2.length = 0;
      this.lineChartData5r3.length = 0;
      this.lineChartData5s1.length = 0;
      this.lineChartData5s2.length = 0;
      this.lineChartData5s3.length = 0;
      let val = 0;
      while (val != 400) {
        val = val + 1;
        this.lineChartData5r1.push(nestedItems[0][0].pivotLevel.r1),
          this.lineChartData5r2.push(nestedItems[0][0].pivotLevel.r2),
          this.lineChartData5r3.push(nestedItems[0][0].pivotLevel.r3),
          this.lineChartData5s3.push(nestedItems[0][0].pivotLevel.s3),
          this.lineChartData5s2.push(nestedItems[0][0].pivotLevel.s2),
          this.lineChartData5s1.push(nestedItems[0][0].pivotLevel.s1)

      }




    }, err => {
      console.log(err)
    }
    )
  }




  async getmcindexchart(mcindexid) {
    this.dataApi.getmcindexchart(mcindexid).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      this.lineChartDataetindicescharts.length = 0;
      this.lineChartLabelstindicescharts.length = 0;

      for (let val in nestedItems[1]["values"]) {

        this.lineChartDataetindicescharts.push(nestedItems[1]["values"][val]["_value"])
        this.lineChartLabelstindicescharts.push(nestedItems[1]["values"][val]["_time"])

      }



      var optionsetindicescharts = {
        series: [
          {
            name: "Price",
            data: this.lineChartDataetindicescharts
          },
          {
            name: "R1",
            data: this.lineChartData5r1
          },
          {
            name: "R2",
            data: this.lineChartData5r2
          },
          {
            name: "R3",
            data: this.lineChartData5r3
          },
          {
            name: "S1",
            data: this.lineChartData5s1
          },
          {
            name: "S2",
            data: this.lineChartData5s2
          },
          {
            name: "S3",
            data: this.lineChartData5s3
          }

        ],
        chart: {
          height: 350,
          width: 1200,
          type: 'line',
          dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: true
          }
        },
        colors: ['#77B6EA', '#ff0000', '#ff3300', '#ff3300', '#009900', '#009900', '#009900'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: 1,
        },
        title: {
          text: nestedItems[1]["name"],
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: this.lineChartLabelstindicescharts,
          title: {
            text: 'Date'
          }
        },
        yaxis: {
          title: {
            text: 'Price'
          }

        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      };

      var chartsetindicescharts = new ApexCharts(document.querySelector("#chart21"), optionsetindicescharts);
      chartsetindicescharts.render();

    }, err => {
      console.log(err)
    }
    )
  }


  getetsectors() {
    this.dataApi.getetsectors().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[0]) {

        for (let val1 in nestedItems[0][val]["sectorConstituents"]) {
          if (nestedItems[0][val]["advance"] > nestedItems[0][val]["decline"]) {
            this.gsectors.push({ text1: nestedItems[0][val]["sectorName"], text2: nestedItems[0][val]["advance"], text3: nestedItems[0][val]["decline"], text4: nestedItems[0][val]["sectorConstituents"][val1].companyId, text5: nestedItems[0][val]["sectorConstituents"][val1].companyName, text6: nestedItems[0][val]["sectorConstituents"][val1].current, text7: nestedItems[0][val]["sectorConstituents"][val1].percentChange, text8: nestedItems[0][val]["sectorConstituents"][val1].volumeInThousand })
          }
          if (nestedItems[0][val]["advance"] < nestedItems[0][val]["decline"]) {
            this.dsectors.push({ text1: nestedItems[0][val]["sectorName"], text2: nestedItems[0][val]["advance"], text3: nestedItems[0][val]["decline"], text4: nestedItems[0][val]["sectorConstituents"][val1].companyId, text5: nestedItems[0][val]["sectorConstituents"][val1].companyName, text6: nestedItems[0][val]["sectorConstituents"][val1].current, text7: nestedItems[0][val]["sectorConstituents"][val1].percentChange, text8: nestedItems[0][val]["sectorConstituents"][val1].volumeInThousand })
          }
          if (nestedItems[0][val]["advance"] == nestedItems[0][val]["decline"]) {
            this.esectors.push({ text1: nestedItems[0][val]["sectorName"], text2: nestedItems[0][val]["advance"], text3: nestedItems[0][val]["decline"], text4: nestedItems[0][val]["sectorConstituents"][val1].companyId, text5: nestedItems[0][val]["sectorConstituents"][val1].companyName, text6: nestedItems[0][val]["sectorConstituents"][val1].current, text7: nestedItems[0][val]["sectorConstituents"][val1].percentChange, text8: nestedItems[0][val]["sectorConstituents"][val1].volumeInThousand })
          }
        }

      }

    }, err => {
      console.log(err)
    })
  }
  getmmmarkets() {
    this.dataApi.getmmmarkets().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[2]["top_sectors"]["advance"]) {

        this.advsectors.push({ text1: nestedItems[2]["top_sectors"]["advance"][val].isname, text2: nestedItems[2]["top_sectors"]["advance"][val].price, text3: nestedItems[2]["top_sectors"]["advance"][val].chg, text4: nestedItems[2]["top_sectors"]["advance"][val].chgp })

      }

      for (let val in nestedItems[2]["top_sectors"]["decline"]) {
        this.decsectors.push({ text1: nestedItems[2]["top_sectors"]["decline"][val].isname, text2: nestedItems[2]["top_sectors"]["decline"][val].price, text3: nestedItems[2]["top_sectors"]["decline"][val].chg, text4: nestedItems[2]["top_sectors"]["decline"][val].chgp })


      }
    }, err => {
      console.log(err)
    })
  }
  async getmcsectors() {
    this.dataApi.getmcsectors().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[1]["indices"]) {
        //console.log(nestedItems[1]["indices"][val].ind_symbol,nestedItems[1]["indices"][val].ind_id,nestedItems[1]["indices"][val].stkexchg)
        this.mcsectorsymbol = (nestedItems[1]["indices"][val].ind_symbol)
        this.indid = (nestedItems[1]["indices"][val].ind_id)
        this.mcsectorexchange = (nestedItems[1]["indices"][val].stkexchg)
        this.getmcsectorsdetailsd(this.mcsectorsymbol)
        this.getmcsectorgraph(this.indid)

        this.getmcsectorsdetailsw(this.mcsectorsymbol)
        this.getmcsectorsdetailsm(this.mcsectorsymbol)

      }

    }, err => {
      console.log(err)
    })
  }
  async getmcsectorgraph(indid) {
    this.dataApi.getmcsectorgraph(4).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });

      for (let val in nestedItems[1].values) {
        this.lineChartData3.push(nestedItems[1].values[val]["_value"])
        this.lineChartLabels3.push(nestedItems[1].values[val]["_time"])
      }
      // console.log(this.lineChartData3)
      // console.log(this.lineChartLabels3)


    }, err => {
      console.log(err)
    })
  }
  async getmcsectorsdetailsd(mcsectorsymbol) {
    this.dataApi.getmcsectorsdetailsd(this.mcsectorsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      // console.log(this.frequency,nestedItems)
      if (nestedItems[8] == 'in;SEN') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'SENSEX' })
      }
      else if (nestedItems[8] == 'in;NSX') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY 50' })
      }
      else if (nestedItems[8] == 'in;ccx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY Midcap 100' })
      }
      else if (nestedItems[8] == 'in;cnxs') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY Smallcap 100' })
      }
      else if (nestedItems[8] == 'in;cjn') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY NEXT 50' })
      }
      else if (nestedItems[8] == 'in;ncx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY 500' })
      }
      else if (nestedItems[8] == 'IN;aox') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE Auto' })
      }
      else if (nestedItems[8] == 'in;bip') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE IPO' })
      }
      else if (nestedItems[8] == 'IN;bkx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE BANKEX' })
      }
      else if (nestedItems[8] == 'IN;CDX') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE Cons Durables' })
      }
      else if (nestedItems[8] == 'IN;CGX') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE CAP GOODS' })
      }
      else if (nestedItems[8] == 'IN;MLX') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE METALS' })
      }
      else if (nestedItems[8] == 'IN;ogx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE Oil & Gas' })
      }

      else if (nestedItems[8] == 'in;pbx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE PSU' })
      }
      else if (nestedItems[8] == 'in;rea') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE Reality' })
      }
      else if (nestedItems[8] == 'in;tkx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE TECk' })
      }
      else if (nestedItems[8] == 'IN;NTL') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE 100' })
      }
      else if (nestedItems[8] == 'IN;SEI') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE 200' })
      }
      else if (nestedItems[8] == 'IN;BNX') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE 500' })
      }
      else if (nestedItems[8] == 'in;bpo') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'BSE POWER' })
      }
      else if (nestedItems[8] == 'in;CNXM') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY METAL' })
      }
      else if (nestedItems[8] == 'in;cnxa') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY AUTO' })
      }
      else if (nestedItems[8] == 'in;IDXN') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'INDIA VIX' })
      }
      else if (nestedItems[8] == 'mc;finsrv') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'Nifty FinSrv25/50' })
      }
      else if (nestedItems[8] == 'mc;alphalo') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY Alpa Low Volume' })
      }
      else if (nestedItems[8] == 'mc;nmotm30') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY Momentum 200' })
      }
      else if (nestedItems[8] == 'in;mfy') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY MIDCAP 50' })
      }
      else if (nestedItems[8] == 'in;nnx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY 100' })
      }
      else if (nestedItems[8] == 'in;nbx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY BANK' })
      }
      else if (nestedItems[8] == 'in;cnit') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY IT' })
      }
      else if (nestedItems[8] == 'in;crl') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY Reality' })
      }
      else if (nestedItems[8] == 'in;cfr') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY INFRA' })
      }
      else if (nestedItems[8] == 'in;cgy') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY ENERGY' })
      }
      else if (nestedItems[8] == 'in;cfm') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY FMCG' })
      }
      else if (nestedItems[8] == 'in;cxc') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY MNC' })
      }
      else if (nestedItems[8] == 'in;cpr') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY PHARMA' })
      }
      else if (nestedItems[8] == 'in;cps') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY PSE' })
      }
      else if (nestedItems[8] == 'in;cuk') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY PSU Bank' })
      }
      else if (nestedItems[8] == 'in;crv') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY SERV Sector' })
      }
      else if (nestedItems[8] == 'in;cnmx') {
        this.mcsectordaily.push({ text1: "Daily", text2: nestedItems[15]["indication"], text3: 'NIFTY MEDIA' })
      }

    }, err => {
      console.log(err)
    })
  }
  async getmcsectorsdetailsw(mcsectorsymbol) {
    this.dataApi.getmcsectorsdetailsw(this.mcsectorsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      if (nestedItems[8] == 'in;SEN') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'SENSEX' })
      }
      else if (nestedItems[8] == 'in;NSX') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY 50' })
      }
      else if (nestedItems[8] == 'in;ccx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY Midcap 100' })
      }
      else if (nestedItems[8] == 'in;cnxs') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY Smallcap 100' })
      }
      else if (nestedItems[8] == 'in;cjn') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY NEXT 50' })
      }
      else if (nestedItems[8] == 'in;ncx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY 500' })
      }
      else if (nestedItems[8] == 'IN;aox') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE Auto' })
      }
      else if (nestedItems[8] == 'in;bip') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE IPO' })
      }
      else if (nestedItems[8] == 'IN;bkx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE BANKEX' })
      }
      else if (nestedItems[8] == 'IN;CDX') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE Cons Durables' })
      }
      else if (nestedItems[8] == 'IN;CGX') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE CAP GOODS' })
      }
      else if (nestedItems[8] == 'IN;MLX') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE METALS' })
      }
      else if (nestedItems[8] == 'IN;ogx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE Oil & Gas' })
      }

      else if (nestedItems[8] == 'in;pbx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE PSU' })
      }
      else if (nestedItems[8] == 'in;rea') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE Reality' })
      }
      else if (nestedItems[8] == 'in;tkx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE TECk' })
      }
      else if (nestedItems[8] == 'IN;NTL') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE 100' })
      }
      else if (nestedItems[8] == 'IN;SEI') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE 200' })
      }
      else if (nestedItems[8] == 'IN;BNX') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE 500' })
      }
      else if (nestedItems[8] == 'in;bpo') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'BSE POWER' })
      }
      else if (nestedItems[8] == 'in;CNXM') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY METAL' })
      }
      else if (nestedItems[8] == 'in;cnxa') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY AUTO' })
      }
      else if (nestedItems[8] == 'in;IDXN') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'INDIA VIX' })
      }
      else if (nestedItems[8] == 'mc;finsrv') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'Nifty FinSrv25/50' })
      }
      else if (nestedItems[8] == 'mc;alphalo') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY Alpa Low Volume' })
      }
      else if (nestedItems[8] == 'mc;nmotm30') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY Momentum 200' })
      }
      else if (nestedItems[8] == 'in;mfy') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY MIDCAP 50' })
      }
      else if (nestedItems[8] == 'in;nnx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY 100' })
      }
      else if (nestedItems[8] == 'in;nbx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY BANK' })
      }
      else if (nestedItems[8] == 'in;cnit') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY IT' })
      }
      else if (nestedItems[8] == 'in;crl') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY Reality' })
      }
      else if (nestedItems[8] == 'in;cfr') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY INFRA' })
      }
      else if (nestedItems[8] == 'in;cgy') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY ENERGY' })
      }
      else if (nestedItems[8] == 'in;cfm') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY FMCG' })
      }
      else if (nestedItems[8] == 'in;cxc') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY MNC' })
      }
      else if (nestedItems[8] == 'in;cpr') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY PHARMA' })
      }
      else if (nestedItems[8] == 'in;cps') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY PSE' })
      }
      else if (nestedItems[8] == 'in;cuk') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY PSU Bank' })
      }
      else if (nestedItems[8] == 'in;crv') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY SERV Sector' })
      }
      else if (nestedItems[8] == 'in;cnmx') {
        this.mcsectorweekly.push({ text1: "weekly", text2: nestedItems[15]["indication"], text3: 'NIFTY MEDIA' })
      }

    }, err => {
      console.log(err)
    })
  }
  async getmcsectorsdetailsm(mcsectorsymbol) {
    this.dataApi.getmcsectorsdetailsm(this.mcsectorsymbol).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      if (nestedItems[8] == 'in;SEN') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'SENSEX' })
      }
      else if (nestedItems[8] == 'in;NSX') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY 50' })
      }
      else if (nestedItems[8] == 'in;ccx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY Midcap 100' })
      }
      else if (nestedItems[8] == 'in;cnxs') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY Smallcap 100' })
      }
      else if (nestedItems[8] == 'in;cjn') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY NEXT 50' })
      }
      else if (nestedItems[8] == 'in;ncx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY 500' })
      }
      else if (nestedItems[8] == 'IN;aox') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE Auto' })
      }
      else if (nestedItems[8] == 'in;bip') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE IPO' })
      }
      else if (nestedItems[8] == 'IN;bkx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE BANKEX' })
      }
      else if (nestedItems[8] == 'IN;CDX') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE Cons Durables' })
      }
      else if (nestedItems[8] == 'IN;CGX') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE CAP GOODS' })
      }
      else if (nestedItems[8] == 'IN;MLX') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE METALS' })
      }
      else if (nestedItems[8] == 'IN;ogx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE Oil & Gas' })
      }

      else if (nestedItems[8] == 'in;pbx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE PSU' })
      }
      else if (nestedItems[8] == 'in;rea') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE Reality' })
      }
      else if (nestedItems[8] == 'in;tkx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE TECk' })
      }
      else if (nestedItems[8] == 'IN;NTL') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE 100' })
      }
      else if (nestedItems[8] == 'IN;SEI') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE 200' })
      }
      else if (nestedItems[8] == 'IN;BNX') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE 500' })
      }
      else if (nestedItems[8] == 'in;bpo') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'BSE POWER' })
      }
      else if (nestedItems[8] == 'in;CNXM') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY METAL' })
      }
      else if (nestedItems[8] == 'in;cnxa') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY AUTO' })
      }
      else if (nestedItems[8] == 'in;IDXN') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'INDIA VIX' })
      }
      else if (nestedItems[8] == 'mc;finsrv') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'Nifty FinSrv25/50' })
      }
      else if (nestedItems[8] == 'mc;alphalo') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY Alpa Low Volume' })
      }
      else if (nestedItems[8] == 'mc;nmotm30') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY Momentum 200' })
      }
      else if (nestedItems[8] == 'in;mfy') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY MIDCAP 50' })
      }
      else if (nestedItems[8] == 'in;nnx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY 100' })
      }
      else if (nestedItems[8] == 'in;nbx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY BANK' })
      }
      else if (nestedItems[8] == 'in;cnit') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY IT' })
      }
      else if (nestedItems[8] == 'in;crl') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY Reality' })
      }
      else if (nestedItems[8] == 'in;cfr') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY INFRA' })
      }
      else if (nestedItems[8] == 'in;cgy') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY ENERGY' })
      }
      else if (nestedItems[8] == 'in;cfm') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY FMCG' })
      }
      else if (nestedItems[8] == 'in;cxc') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY MNC' })
      }
      else if (nestedItems[8] == 'in;cpr') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY PHARMA' })
      }
      else if (nestedItems[8] == 'in;cps') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY PSE' })
      }
      else if (nestedItems[8] == 'in;cuk') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY PSU Bank' })
      }
      else if (nestedItems[8] == 'in;crv') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY SERV Sector' })
      }
      else if (nestedItems[8] == 'in;cnmx') {
        this.mcsectormonthly.push({ text1: "Monthly", text2: nestedItems[15]["indication"], text3: 'NIFTY MEDIA' })
      }

    }, err => {
      console.log(err)
    })
  }


  scroll(id) {
    this.vps.scrollToAnchor(id);
  }


}
