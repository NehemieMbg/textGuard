import { expect, describe, it } from 'vitest';
import { isValidEmail, isValidUrsername } from '../../src';

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

describe('isValidUrsername', () => {
  it('should return true if the username is valid', () => {
    expect(isValidUrsername('username')).toBe(true);
  });

  it('should return false if the username is not valid', () => {
    expect(isValidUrsername('')).toBe(false);
    expect(isValidUrsername('Username')).toBe(false);
    expect(isValidUrsername('@username')).toBe(false);
    expect(isValidUrsername('username%')).toBe(false);
  });
});
