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
