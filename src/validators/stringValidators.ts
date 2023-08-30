import { ValidationError } from '../errors/validationErrors';

/**
 * Validates an email address against a predefined regular expression.
 *
 * @param {string} email - The email address to validate.
 * @throws {ValidationError} - Throws an error if the email address is not valid.
 * @returns {void} - Returns nothing if the email address is valid.
 */
export const validateEmail = (email: string): void => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid email address.');
  }
};

/**
 * Validates a username against a predefined regular expression.
 *
 * @param {string} username - The username to validate.
 * @throws {ValidationError} - Throws an error if the username is not valid.
 * @returns {void} - Returns nothing if the username address is valid.
 */
export const validateUsername = (username: string): void => {
  const usernameRegex = /^[a-z][a-z0-9 .-_]{2,14}$/;

  if (!usernameRegex.test(username)) {
    throw new ValidationError(
      'Username must start with a lowercase letter, contain only letters, numbers, spaces, periods, hyphens, or underscores, and be between 3 to 15 characters long.'
    );
  }
};
