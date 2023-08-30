/**
 * Custom Error class for validation errors.
 * Extends the built-in JavaScript Error class.
 */
export class ValidationError extends Error {
  /**
   * Constructor for the ValidationError class.
   *
   * @param {string} message - The error message to be displayed.
   */
  constructor(message: string) {
    super(message); // Call the constructor of the parent Error class
    this.name = 'ValidationError'; // Set the name property of the error
  }
}
