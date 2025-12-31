// Form validation utilities

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates required fields
 * @param {string} value - Value to validate
 * @returns {boolean} - True if not empty
 */
export function isRequired(value) {
  return value && value.trim().length > 0;
}

/**
 * Validates minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} - True if meets minimum length
 */
export function hasMinLength(value, minLength) {
  return value && value.trim().length >= minLength;
}
