import { expect, describe, it } from 'vitest';
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateIsOldEnough,
} from '../../src';
import { ValidationError } from '../../src/errors/validationErrors';

describe('validateEmail', () => {
  it('should validate a correct email', () => {
    expect(() => validateEmail('test@test.com')).not.toThrow();
  });

  it('should throw an ValidationError for an invalid email', () => {
    expect(() => validateEmail('not an email address')).to.throw(
      'Invalid email address.'
    );
    expect(() => validateEmail('')).to.throw('Invalid email address.');
    expect(() => validateEmail('not an email address')).to.throw(
      'Invalid email address.'
    );
  });

  it('should throw an ValidationError for a wrongly typed email', () => {
    expect(() => validateEmail('testtest.com')).to.throw(
      'Invalid email address.'
    );
    expect(() => validateEmail('test@test.c')).to.throw(
      'Invalid email address.'
    );
    expect(() => validateEmail('test@testc')).to.throw(
      'Invalid email address.'
    );
    expect(() => validateEmail('test@test.444')).to.throw(
      'Invalid email address.'
    );
  });
});

describe('validateUsername', () => {
  it('shoud validate the username', () => {
    expect(() => validateUsername('username')).not.toThrow();
  });

  it('should throw an ValidationError for an invalid username', () => {
    expect(() => validateUsername('Username')).toThrow(
      'Username must start with a lowercase letter, contain only letters, numbers, spaces, periods, hyphens, or underscores, and be between 3 to 15 characters long.'
    );
    expect(() => validateUsername('')).toThrow(
      'Username must start with a lowercase letter, contain only letters, numbers, spaces, periods, hyphens, or underscores, and be between 3 to 15 characters long.'
    );
    expect(() => validateUsername('.@fiefnefe44')).toThrow(
      'Username must start with a lowercase letter, contain only letters, numbers, spaces, periods, hyphens, or underscores, and be between 3 to 15 characters long.'
    );
    expect(() => validateUsername('Username')).toThrow(
      'Username must start with a lowercase letter, contain only letters, numbers, spaces, periods, hyphens, or underscores, and be between 3 to 15 characters long.'
    );
  });
});

describe('validatePassword', () => {
  it('shoud validate the password', () => {
    expect(() => validatePassword('StrongPassword92.')).not.toThrow();
  });

  it('should throw an ValidationError for an invalid password', () => {
    expect(() => validatePassword('password')).toThrow(
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (allowed: @$!%*?&.), and be at least 8 characters long.'
    );
    expect(() => validatePassword('')).toThrow(
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (allowed: @$!%*?&.), and be at least 8 characters long.'
    );
    expect(() => validatePassword('missingSpecialCharacter')).toThrow(
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (allowed: @$!%*?&.), and be at least 8 characters long.'
    );
  });
});

describe('validateIsOldEnough', () => {
  it('should validate the dates', () => {
    expect(() => validateIsOldEnough(18, 6, 3, 2000)).not.toThrow();
  });

  it('should throw an validation error for invalid dates', () => {
    expect(() => validateIsOldEnough(18, 34, 2, 2000)).toThrow();
    expect(() => validateIsOldEnough(18, 24, 0, 2000)).toThrow();
    expect(() => validateIsOldEnough(18, 24, -1, 2000)).toThrow();
    expect(() => validateIsOldEnough(18, 24, 54, 2000)).toThrow();
  });
});
