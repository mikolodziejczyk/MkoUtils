"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseNullableDate_1 = require("./parseNullableDate");
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