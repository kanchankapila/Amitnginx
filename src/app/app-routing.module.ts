
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { MainComponent } from './main/main.component';
// import { Nifty50Component } from './nifty50/nifty50.component';
 import { OHLCComponent } from './ohlc/ohlc.component';
// import {HomeComponent} from './home/home.component'

// import { SnRComponent } from './sn-r/sn-r.component';
// import { IndicatorComponent } from './indicator/indicator.component';
// import { ScreenersComponent } from './screeners/screeners.component'
// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { RecosComponent } from './recos/recos.component';
// import { SectorsComponent } from './sectors/sectors.component';
// import { OptionsComponent } from './options/options.component';
// import { FuturesComponent } from './futures/futures.component';
// import { WatchlistComponent } from './watchlist/watchlist.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { TreemapsComponent } from './treemaps/treemaps.component';
// import { AnalyticsComponent } from './analytics/analytics.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
 // { path: "Ohlc", component: OHLCComponent },
  // { path: "home", component: HomeComponent },
  // { path: 'main', component: MainComponent },
  // { path: "SnR", component: SnRComponent },
  // { path: "Indicator", component: IndicatorComponent },
  // { path: "Screeners", component: ScreenersComponent },
  // { path: "Screeners/daily", component: IndicatorComponent },
  // { path: "Screeners/sectors", component: SnRComponent },
  // { path: "Portfolio", component: PortfolioComponent },
  // { path: "Recos", component: RecosComponent },
  // { path: "Sectors", component: SectorsComponent },
  // { path: "Futures", component: FuturesComponent },
  // { path: "Options", component: OptionsComponent },
  // { path: "Watchlist", component: WatchlistComponent },
  // { path: "Homepage", component: HomepageComponent },
  // { path: "Treemaps", component: TreemapsComponent },
  // { path: "Analytics", component: AnalyticsComponent },
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }, 
  { path: "SnR", loadChildren: () => import('./sn-r/sn-r.module').then(m => m.SnRModule) }, 
  { path: "Indicator", loadChildren: () => import('./indicator/indicator.module').then(m => m.IndicatorModule) }, 
  { path: "Screeners", loadChildren: () => import('./screeners/screeners.module').then(m => m.ScreenersModule) }, 
  { path: "Screeners/daily", loadChildren: () => import('./screeners/screeners.module').then(m => m.ScreenersModule) }, 
  { path: "Screeners/sectors", loadChildren: () => import('./screeners/screeners.module').then(m => m.ScreenersModule) }, 
  { path: "Portfolio", loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }, 
  { path: "Recos", loadChildren: () => import('./recos/recos.module').then(m => m.RecosModule) }, 
  { path: "Sectors", loadChildren: () => import('./sectors/sectors.module').then(m => m.SectorsModule) }, 
  { path: "Futures", loadChildren: () => import('./futures/futures.module').then(m => m.FuturesModule) }, 
  { path: "Options", loadChildren: () => import('./options/options.module').then(m => m.OptionsModule) }, 
  { path: "Watchlist", loadChildren: () => import('./watchlist/watchlist.module').then(m => m.WatchlistModule) }, 
  { path: "Homepage", loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) }, 
  { path: "Treemaps", loadChildren: () => import('./treemaps/treemaps.module').then(m => m.TreemapsModule) }, 
  { path: "Analytics", loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) }, 
  { path: 'niftybank', loadChildren: () => import('./niftybank/niftybank.module').then(m => m.NiftybankModule) },  
  { path: 'nifty50', loadChildren: () => import('./nifty50/nifty50.module').then(m => m.Nifty50Module) }, 
  { path: 'Dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'Ohlc',loadChildren: () => import('./ohlc/ohlc.module').then(m => m.OhlcModule) },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
