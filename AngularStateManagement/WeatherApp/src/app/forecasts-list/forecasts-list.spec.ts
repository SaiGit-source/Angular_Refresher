import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastsList } from './forecasts-list';

describe('ForecastsList', () => {
  let component: ForecastsList;
  let fixture: ComponentFixture<ForecastsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastsList],
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
