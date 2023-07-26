/**
 * Formats the given integer value as a string with comma separators for thousands and millions.
 *
 * @param {number} int - The integer value to be formatted.
 * @return {string} The formatted string value with comma separators.
 */
export function formatCurrent(int) {
    const currentString = int.toString();
    let value = currentString.replace(/([0-9]{2})$/, ",$1");

    if (currentString.length > 6) {
        value = value.replace(/([0-9]{3}),([0-9]{2})$/, ".$1,$2");
    }

    return value;
}
