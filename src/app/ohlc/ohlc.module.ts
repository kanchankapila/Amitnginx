import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import {GestureConfig} from 'owl-ng'

const routes: Routes = [
  { path: 'Ohlc', component: OHLCComponent },
  
];
import { BrowserModule } from '@angular/platform-browser';
//import { OwlClockModule } from 'owl-ng';
import { ChartModule } from 'primeng/chart';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxEchartsModule } from 'ngx-echarts';

import { NgxChartsModule } from '@swimlane/ngx-charts';
//import {OwlRadioModule} from 'owl-ng'
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {AtomSpinnerModule} from 'angular-epic-spinners'
import { AppRoutingModule } from '../app-routing.module';
//import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
//import { NgApexchartsModule } from "ng-apexcharts";
import { OHLCComponent } from './ohlc.component';
import { ChartsModule } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';



import {MatGridListModule} from '@angular/material/grid-list';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OverlayModule } from '@angular/cdk/overlay';
import { SidebarModule } from 'primeng/sidebar';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



//import { News-RssComponent } from './pages/news-rss/news-rss.component';





@NgModule({
  declarations: [
    OHLCComponent
   ],
  imports: [
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
 //   NgApexchartsModule,
    CommonModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    AtomSpinnerModule,
    CardModule,
    //OwlClockModule,
  
    ButtonModule,

   
    //NgTickerTapeModule,
    WavesModule,
    SidebarModule,
    AppRoutingModule,
    MatSidenavModule,
    //NgxCaptureModule,
    TabViewModule,
    NgxChartsModule,
    AutoCompleteModule,
    ButtonsModule,
    ChartsModule,
    ChartModule,
    NgbModule,
    //OwlRadioModule,
  //  HighchartsChartModule,
    
    
    CommonModule,
    //MegaMenuModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    //NbThemeModule.forRoot(),
    //AccordionModule,
    //ClarityModule,
    //NbCardModule,
    MatTableModule,
    //AmexioDataModule,
    
    FormsModule,
   
    //FlexLayoutModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    
    MatFormFieldModule,
  
    MatGridListModule,
    MatCardModule,
    
   
  
    //NgTickerModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AutocompleteLibModule,
    //A11yModule,
   
    //CdkTableModule,
   
    MatAutocompleteModule,
    MatBadgeModule,
   
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    
    //MatGridListModule,
    //MatIconModule,
  
    MatProgressSpinnerModule,
   
    MatSidenavModule,
    
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    
    OverlayModule,
    
          ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
          }),
   

    
  ],
  providers: [
    { provide: Window, useValue: window }
],

schemas: [CUSTOM_ELEMENTS_SCHEMA],
bootstrap: [OHLCComponent]
})


export class OhlcModule { }
