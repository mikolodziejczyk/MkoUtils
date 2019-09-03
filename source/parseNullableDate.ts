/**
 * Parses an ISO date format from JSON (like 2019-08-31T12:32) into a Date instance. Supports null / empty strings, returns null in this case.
 * @param input The date to parse or null / an empty string.
 */
export function parseNullableDate(input: string): Date | null {
    let r: Date | null = null;
    if (input) {
        r = new Date(input);
    }

    return r;
}
