"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseNullableDate(input) {
    var r = null;
    if (input) {
        r = new Date(input);
    }
    return r;
}
exports.parseNullableDate = parseNullableDate;
//# sourceMappingURL=parseNullableDate.js.map