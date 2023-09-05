import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateIsOldEnough,
} from '../validators/stringValidators';
import { ValidationError } from '../errors/validationErrors';

/**
 * Validates the given email address based on a predefined regular expression pattern.
 * Throws a ValidationError if the email address is not valid.
 *
 * @param {string} email - The email address to validate.
 * @throws {ValidationError} Throws an error if the email is not valid.
 * @returns {boolean} Returns true if the email is valid, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
  try {
    validateEmail(email);
    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      return false;
    }
    throw error;
  }
};

/**
 * Validates the given username based on a predefined regular expression pattern.
 * Throws a ValidationError if the username is not valid.
 *
 * @param {string} username - The username to validate.
 * @throws {ValidationError} Throws an error if the username is not valid.
 * @returns {boolean} Returns true if the username is valid, false otherwise.
 */
export const isValidUrsername = (username: string): boolean => {
  try {
    validateUsername(username);
    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      return false;
    }
    throw error;
  }
};

/**
 * Validates the given password based on a predefined regular expression pattern.
 * Throws a ValidationError if the password is not valid.
 *
 * @param {string} password - The password to validate.
 * @throws {ValidationError} Throws an error if the password is not valid.
 * @returns {boolean} Returns true if the password is valid, false otherwise.
 */
export const isValidPassword = (password: string): boolean => {
  try {
    validatePassword(password);
    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      return false;
    }
    throw error;
  }
};

/**
 * Validates fi the given passwords are the same and  valid
 *
 * @param {string} password - The password to validate.
 * @param {string} confirmPassword - The password confirmation to validate.
 * @returns {boolean} Returns true if the passwords are the same, false otherwise.
 */
export const arePasswordsMatching = (
  password: string,
  confirmPassword: string
): boolean => {
  if (password !== confirmPassword) {
    return false;
  }

  return true;
};

/**
 * Determines if a person with the given birth date is old enough based on a minimum age requirement.
 *
 * @param {number} minAge - The minimum age the person must be.
 * @param {number} day - The day of the person's birth date (1-31).
 * @param {number} month - The month of the person's birth date (1-12).
 * @param {number} year - The year of the person's birth date.
 * @returns {boolean} Returns true if the person is at least the specified minAge or older, false otherwise.
 */
export const isOldEnough = (
  minAge: number,
  day: number,
  month: number,
  year: number
): boolean => {
  validateIsOldEnough(minAge, day, month, year);
  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < month - 1 ||
    (currentDate.getMonth() === month - 1 && currentDate.getDate() < day)
  ) {
    age--;
  }

  if (age >= minAge) {
    return true;
  } else {
    return false;
  }
};
