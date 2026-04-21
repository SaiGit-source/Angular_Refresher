import { Component } from '@angular/core';
import { ZipcodeEntry } from '../zipcode-entry/zipcode-entry';
import { CurrentConditions } from '../current-conditions/current-conditions';

@Component({
  selector: 'app-main-page',
  imports: [
    ZipcodeEntry,
    CurrentConditions],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage { }

// we need State to persist data like how do we remember User information from last session, or what was added to the shoppingCart
// Angular and RxJs are frameworks that are extremely friendly to reactive programming
// State is the single source of truth and it contains all data. It is Read-only and we need to dispatch Actions to change it (something like PUT request)
// PUT/POST request requires a payload, Reducer takes in current state, action and returns new state
// We need Asynchronous actions sometimes, thats why we have Effects, they listen to dispatched actions and perform side effects (like API calls) and then dispatch new actions with the results of those side effects. This way we can keep our components clean and focused on presentation logic, while the state management and side effects are handled separately.
