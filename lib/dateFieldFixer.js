"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseNullableDate_1 = require("./parseNullableDate");
/** Parses ISO-string dates into real Date instances in all rows, for the specified columns. Intended to be used in grid data, an array of shallow objects.
 * @param rows An array of instances that need fixing.
 * @param dateColums An array of field names that needs to be fixed.
 * The method replaces the specified columns in each row.
 * Only shallow replacement is done, no descending into child objects.
 * The date fields can be null or empty strings - in this case they are replaced with a null value.
 */
function dateFieldFixer(rows, dateColumns) {
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        for (var _i = 0, dateColumns_1 = dateColumns; _i < dateColumns_1.length; _i++) {
            var field = dateColumns_1[_i];
            row[field] = parseNullableDate_1.parseNullableDate(row[field]);
        }
    }
}
exports.dateFieldFixer = dateFieldFixer;
//# sourceMappingURL=dateFieldFixer.js.map