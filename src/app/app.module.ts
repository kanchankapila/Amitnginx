import { BrowserModule,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgChartsModule, ThemeService } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule, } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
//import { GestureConfig } from 'owl-ng';
//import { OwlClockModule } from 'owl-ng';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { ChartsModule } from 'ng-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';

import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md'
import { SharedModule } from "./shared/shared.module";
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { ServiceWorkerModule,SwRegistrationOptions } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
   
    
  ],
  imports: [
    
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    FlexLayoutModule,
    SidebarModule,
    ButtonModule,
    SharedModule,
    ChartModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    CardModule,
    AppRoutingModule,
    MatSidenavModule,
    ButtonsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AutocompleteLibModule,
    MatButtonToggleModule,
    MatTabsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:registerWhenStable:30000'
    }) 
  
  ],
  providers: [{ provide: Window, useValue: window },ThemeService
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
