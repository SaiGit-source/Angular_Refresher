import { StudentFactory } from './student-factory';

describe('StudentFactory', () => {
  it('should create an instance', () => {
    expect(new StudentFactory()).toBeTruthy();
  });
});
