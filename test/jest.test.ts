import { add } from '../src/adder';

// The assertion for a promise must be returned.
it('always!', () => {
  expect(true).toBe(true);
});

// The assertion for a promise must be returned.
it('add!', () => {
  expect(add(2, 5)).toBe(7);
});