import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectZipCodes, zipCodesFeatureKey, ZipCodeState } from '../reducers/zip-codes.reducer';
import { AsyncPipe, DecimalPipe, KeyValuePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrentConditionsState } from '../reducers/current-conditions-reducer.reducer';
import { WeatherService } from '../weather-service';
import { ZipCodeActions } from '../actions/zip-code.actions';

@Component({
  selector: 'app-current-conditions',
  imports: [AsyncPipe, DecimalPipe, KeyValuePipe],
  templateUrl: './current-conditions.html',
  styleUrl: './current-conditions.css',
})

export class CurrentConditions {
  //zipcodes$ = inject(Store).select(zipCodesFeatureKey); // like a query to get this value from the store
  // this gives an observable object. go to HTML to display observable
  private store = inject(Store);

  zipcodes$ = inject(Store).select(selectZipCodes);

  zipcodes = toSignal(this.store.select(selectZipCodes), { initialValue: [] });

  // zipcodes = inject(Store).selectSignal(state => state[zipCodesFeatureKey].zipCodes); // which part of the state we got to select. this is a signal, not an observable. we can use it directly in the HTML without async pipe

  currentConditions = this.store.selectSignal<CurrentConditionsState>(state => state.currentConditions);

  weatherService = inject(WeatherService);

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode: zipcode}));
  }
}


