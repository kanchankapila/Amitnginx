import { BrowserModule,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardModule, } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { GestureConfig } from 'owl-ng'
//import { OwlRadioModule } from 'owl-ng';
import { OwlClockModule } from 'owl-ng';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { OHLCComponent } from './ohlc/ohlc.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from "ng-apexcharts";
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {AtomSpinnerModule} from 'angular-epic-spinners'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OverlayModule } from '@angular/cdk/overlay';

import {AutoCompleteModule} from 'primeng/autocomplete';



import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    OHLCComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CardModule,
    SidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    ChartModule,
   // OwlRadioModule,
    OwlClockModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')

    }),
    MDBBootstrapModule.forRoot(),
    NgApexchartsModule,
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    AtomSpinnerModule,
    CardModule,
    
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
   

    
    //CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: ThemeService }, {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},{ provide: Window, useValue: window }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
