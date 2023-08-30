import { expect, describe, it } from 'vitest';
import { validateEmail, validateUsername } from '../../src';
import { ValidationError } from '../../src/errors/validationErrors';

describe('validateEmail', () => {
  it('should validate a correct email', () => {
    expect(() => validateEmail('test@test.com')).not.toThrow();
  });

  it('should throw an ValidationError for an invalid email', () => {
    expect(() => validateEmail('not an email address')).to.throw(
      ValidationError
    );
    expect(() => validateEmail('')).to.throw(ValidationError);
    expect(() => validateEmail('not an email address')).to.throw(
      'Invalid email address.'
    );
  });

  it('should throw an ValidationError for a wrongly typed email', () => {
    expect(() => validateEmail('testtest.com')).to.throw(ValidationError);
    expect(() => validateEmail('test@test.c')).to.throw(ValidationError);
    expect(() => validateEmail('test@testc')).to.throw(ValidationError);
    expect(() => validateEmail('test@test.444')).to.throw(ValidationError);
  });
});

describe('validateUsername', () => {
  it('shoud validate the username', () => {
    expect(() => validateUsername('username')).not.toThrow();
  });

  it('should throw an ValidationError for an invalid username', () => {
    expect(() => validateUsername('Username')).toThrow(ValidationError);
    expect(() => validateUsername('')).toThrow(ValidationError);
    expect(() => validateUsername('.@fiefnefe44')).toThrow(ValidationError);
    expect(() => validateUsername('Username')).toThrow(
      'Username must start with a lowercase letter, contain only letters, numbers, spaces, periods, hyphens, or underscores, and be between 3 to 15 characters long.'
    );
  });
});
