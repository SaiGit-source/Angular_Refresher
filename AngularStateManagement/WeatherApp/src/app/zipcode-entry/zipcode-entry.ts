import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ZipCodeActions } from '../actions/zip-code.actions';

@Component({
  selector: 'app-zipcode-entry',
  imports: [],
  templateUrl: './zipcode-entry.html',
  styleUrl: './zipcode-entry.css',
})
export class ZipcodeEntry {

  private store = inject(Store);

  addLocation(zipcode : string){
    this.store.dispatch(ZipCodeActions.addZipCode({ zipcode: zipcode }));
  }

}
