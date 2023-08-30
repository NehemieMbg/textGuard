import { validateEmail } from '../validators/stringValidators';
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
