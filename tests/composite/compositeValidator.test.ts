import { expect, describe, it } from 'vitest';
import { isValidEmail } from '../../src';

describe('isValidEmail', () => {
  it('should return true if the email is valid', () => {
    expect(isValidEmail('test@test.com')).toBe(true);
  });

  it('should return false if the email is not valid', () => {
    expect(isValidEmail('not an email')).toBe(false);
    expect(isValidEmail('test@test.c')).toBe(false);
    expect(isValidEmail('test@test.44')).toBe(false);
    expect(isValidEmail('testtest.com')).toBe(false);
    expect(isValidEmail('test@testcom')).toBe(false);
  });
});
