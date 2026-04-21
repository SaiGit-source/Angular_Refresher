import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-forecasts-list',
  imports: [RouterLink],
  templateUrl: './forecasts-list.html',
  styleUrl: './forecasts-list.css',
})
export class ForecastsList {}
