
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }, 
  { path: 'SnR', loadChildren: () => import('./sn-r/sn-r.module').then(m => m.SnRModule) }, 
  { path: 'Indicator', loadChildren: () => import('./indicator/indicator.module').then(m => m.IndicatorModule) }, 
  { path: 'Screeners', loadChildren: () => import('./screeners/screeners.module').then(m => m.ScreenersModule) }, 
  { path: 'Screeners/daily', loadChildren: () => import('./screeners/screeners.module').then(m => m.ScreenersModule) }, 
  { path: 'Screeners/sectors', loadChildren: () => import('./screeners/screeners.module').then(m => m.ScreenersModule) }, 
  { path: 'Portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }, 
  { path: 'Recos', loadChildren: () => import('./recos/recos.module').then(m => m.RecosModule) }, 
  { path: 'Sectors', loadChildren: () => import('./sectors/sectors.module').then(m => m.SectorsModule) }, 
  { path: 'Futures', loadChildren: () => import('./futures/futures.module').then(m => m.FuturesModule) }, 
  { path: 'Options', loadChildren: () => import('./options/options.module').then(m => m.OptionsModule) }, 
  { path: 'Watchlist', loadChildren: () => import('./watchlist/watchlist.module').then(m => m.WatchlistModule) }, 
  { path: 'Homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) }, 
  { path: 'Treemaps', loadChildren: () => import('./treemaps/treemaps.module').then(m => m.TreemapsModule) }, 
  { path: 'Analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) }, 
  { path: 'niftypharma', loadChildren: () => import('./niftypharma/niftypharma.module').then(m => m.NiftypharmaModule) },  
  { path: 'nifty50', loadChildren: () => import('./nifty50/nifty50.module').then(m => m.Nifty50Module) }, 
  { path: 'niftybank', loadChildren: () => import('./niftybank/niftybank.module').then(m => m.NiftybankModule) },  
  { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  //{ path: 'Ohlc', loadChildren: () => import('./ohlc/ohlc.module').then(m => m.OhlcModule) },
  { path: 'Stock',loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: 'sidebar', loadChildren: () => import('./shared/sidebar/sidebar.module').then(m => m.SidebarModule) },
  { path: 'navbar', loadChildren: () => import('./shared/navbar/navbar.module').then(m => m.NavbarModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
