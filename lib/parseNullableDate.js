"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parses an ISO date format from JSON (like 2019-08-31T12:32) into a Date instance. Supports null / empty strings, returns null in this case.
 * @param input The date to parse or null / an empty string.
 */
function parseNullableDate(input) {
    var r = null;
    if (input) {
        r = new Date(input);
    }
    return r;
}
exports.parseNullableDate = parseNullableDate;
//# sourceMappingURL=parseNullableDate.js.map