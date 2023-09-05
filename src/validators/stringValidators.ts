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

/**
 * Validates a password against a predefined regular expression.
 *
 * @param {string} password - The password to validate.
 * @throws {ValidationError} - Throws an error if the password is not valid.
 * @returns {void} - Returns nothing if the password address is valid.
 */
export const validatePassword = (password: string): void => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

  if (!passwordRegex.test(password)) {
    throw new ValidationError(
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (allowed: @$!%*?&.), and be at least 8 characters long.'
    );
  }
};

/**
 * Validates the provided birth date details and ensures they form a valid date.
 * Also checks that the 'minAge' parameter is a valid number.
 *
 * This function will throw a ValidationError if:
 * 1. Any of the parameters are not of type 'number'.
 * 2. The month value is not between 1 and 12.
 * 3. The day value is not valid for the given month (e.g., February 30th).
 *
 * @param {number} minAge - The minimum age value to validate.
 * @param {number} day - The day of the birth date to validate (1-31, depending on month).
 * @param {number} month - The month of the birth date to validate (1-12).
 * @param {number} year - The year of the birth date to validate.
 * @throws {ValidationError} Throws error if the input values are invalid.
 */
export const validateIsOldEnough = (
  minAge: number,
  day: number,
  month: number,
  year: number
) => {
  if (
    typeof minAge !== 'number' ||
    typeof day !== 'number' ||
    typeof month !== 'number' ||
    typeof year !== 'number'
  ) {
    throw new ValidationError('Dates must only contain numbers.');
  }

  if (month < 1 || month > 12) {
    throw new ValidationError('Month must be between 1 and 12.');
  }

  let daysInMonth;
  switch (month) {
    case 2: // February
      // Check for leap year
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
      break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      daysInMonth = 30;
      break;
    default:
      daysInMonth = 31;
  }

  if (day < 1 || day > daysInMonth) {
    throw new ValidationError(
      `Day must be between 1 and ${daysInMonth} for the given month.`
    );
  }
};
