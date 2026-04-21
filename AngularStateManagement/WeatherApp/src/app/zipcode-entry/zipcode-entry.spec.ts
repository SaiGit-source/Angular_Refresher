import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeEntry } from './zipcode-entry';

describe('ZipcodeEntry', () => {
  let component: ZipcodeEntry;
  let fixture: ComponentFixture<ZipcodeEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipcodeEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(ZipcodeEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
