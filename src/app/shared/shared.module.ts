import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from '@angular/common';
//import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md'
// import { NgxEchartsModule } from 'ngx-echarts';
 import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
// import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule ,HttpClientJsonpModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatButtonModule } from '@angular/material/button';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { CardModule } from 'primeng/card';
// import { TabViewModule } from 'primeng/tabview';
 import { MatCardModule } from '@angular/material/card';


const routes : Routes = [
  { path: '', component: SidebarComponent },
  { path: '', component: NavbarComponent }
]

@NgModule({
  declarations: [SidebarComponent,NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    // MatSidenavModule,
    DropdownModule,
    CommonModule,
    NavbarModule,
    //FormsModule,
    ButtonsModule,
    NgbModule,
    // TabViewModule,
    // MDBBootstrapModule,
    // NgChartsModule,
    HttpClientModule,
    // ChartModule,
    ButtonModule,
     MatCardModule,
    // CardModule,
    BrowserModule,
    //Sidebar1Module,
    // MatButtonModule,
 
   // OwlClockModule,
    RouterModule.forChild(routes)
   
  ],
  exports:[SidebarComponent,NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
  
})
export class SharedModule { }
