/** Parses ISO-string dates into real Date instances in all rows, for the specified columns. Intended to be used in grid data, an array of shallow objects.
 * @param rows An array of instances that need fixing.
 * @param dateColums An array of field names that needs to be fixed.
 * The method replaces the specified columns in each row.
 * Only shallow replacement is done, no descending into child objects.
 * The date fields can be null or empty strings - in this case they are replaced with a null value.
 */
export declare function dateFieldFixer(rows: [], dateColumns: string[]): void;
