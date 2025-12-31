// Utility functions for the branding agency website

/**
 * Formats a string to be URL-friendly
 * @param {string} str - The string to format
 * @returns {string} - URL-friendly string
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitalizes the first letter of each word
 * @param {string} str - The string to capitalize
 * @returns {string} - Capitalized string
 */
export function capitalize(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Truncates text to a specified length
 * @param {string} text - The text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 150) {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}
