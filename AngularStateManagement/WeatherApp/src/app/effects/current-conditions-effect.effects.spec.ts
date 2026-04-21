import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentConditionsEffectEffects } from './current-conditions-effect.effects';

describe('CurrentConditionsEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentConditionsEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentConditionsEffectEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CurrentConditionsEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
