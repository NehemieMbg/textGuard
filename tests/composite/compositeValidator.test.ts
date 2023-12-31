import { expect, describe, it } from 'vitest';
import {
  isValidEmail,
  isValidUrsername,
  isValidPassword,
  arePasswordsMatching,
  isOldEnough,
} from '../../src';

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

describe('isValidPassword', () => {
  it('should return true if the password is valid', () => {
    expect(isValidPassword('ValidPassword94.')).toBe(true);
  });
  it('should return false if the password is not valid', () => {
    expect(isValidPassword('NotaValidPassword')).toBe(false);
    expect(isValidPassword('notavalidpassword')).toBe(false);
    expect(isValidPassword('notavalidpassword8!')).toBe(false);
    expect(isValidPassword('NotaValidPassword1')).toBe(false);
  });
});

describe('arePasswordsMatching', () => {
  it('should return true if the password are matching', () => {
    expect(arePasswordsMatching('ValidPassword94.', 'ValidPassword94.')).toBe(
      true
    );
  });

  it('should return false if the passwords are not matching', () => {
    expect(arePasswordsMatching('ValidPassword94.', 'ValidPassword94')).toBe(
      false
    );
  });
});

describe('isOldEnough', () => {
  it('should return true if the user is old enough', () => {
    expect(isOldEnough(18, 3, 12, 2000)).toBe(true);
  });

  it('should return false if the user is not old enough', () => {
    expect(isOldEnough(18, 3, 12, 2020)).toBe(false);
  });
});
