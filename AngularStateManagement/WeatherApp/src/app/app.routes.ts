import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { ForecastsList } from './forecasts-list/forecasts-list';

export const routes: Routes = [
  {
    path: '', component: MainPage
  },
  {
    path: 'forecast/:zipcode', component: ForecastsList
  }
];