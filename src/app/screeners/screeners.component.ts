import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataapiService } from '../../dataapi.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-screeners',
  templateUrl: './screeners.component.html',
  styleUrls: ['./screeners.component.scss']
})
export class ScreenersComponent implements OnInit {
  ntoptions: any;
  postId: any;
  constructor(private dataApi: DataapiService,private http: HttpClient) { }
  templateForm(value: any) {
   
    
    let data = (value)
    let object = {};
    for (let val in value) {
      
     
      if (value[val] == 'true') {
        object[val]=value[val]
        
      }
     
    }
    this.ntoptions = (object)
    console.log(this.ntoptions)
   
    this.getnteodscreeners(this.ntoptions)
  }

  ngOnInit(): void {
    
  }
  getnteodscreeners(ntoptions) {
    this.dataApi.getnteodscreeners(this.ntoptions).subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      console.log(nestedItems)
    });
  }
  
}
