import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../../dataapi.service'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.scss']
})
export class FuturesComponent implements OnInit {

  constructor(private dataApi: DataapiService, private window: Window, private route: ActivatedRoute, private router: Router,private vps: ViewportScroller) { }

  ngOnInit(): void {
    this.getbqsectoralmovement()
  }
  getbqsectoralmovement() {
    this.dataApi.getbqsectoralmovement().subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
      return data5[key];
    });
    
      for (let val in nestedItems[0]) {
        //console.log(nestedItems[0][val]["open-interest-change"])
        
        if (nestedItems[0][val]["price-down"] > 0) {
          console.log("price-down for : "+nestedItems[0][val]["sector"])
        }
        if (nestedItems[0][val]["price-up"] > 0) {
          console.log("price-up for : "+ nestedItems[0][val]["sector"])
        }
        if (nestedItems[0][val]["volume-down"] > 0) {
          console.log("volume-down for : "+nestedItems[0][val]["sector"])
        }
        if (nestedItems[0][val]["volume-up"] > 0) {
          console.log("volume-up for : "+nestedItems[0][val]["sector"])
        }
        
        if (nestedItems[0][val]["open-interest-up"] > 0) {
          console.log("open interest up for : "+nestedItems[0][val]["sector"])
        }
        if (nestedItems[0][val]["open-interest-down"] > 0) {
          console.log("open interest down for : "+nestedItems[0][val]["sector"])
        }
   }
      

    }, err => {
      console.log(err)
    }
    )
  }

  scroll(id) {
    this.vps.scrollToAnchor(id);
  }
 

}
