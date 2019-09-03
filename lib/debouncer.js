"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debouncer = /** @class */ (function () {
    function Debouncer() {
        this.activeTimer = undefined;
        // set this to the callback method
        this.callback = null;
        this.timeout = 500;
    }
    // call this on each input value change
    Debouncer.prototype.onChange = function () {
        var _this = this;
        if (this.activeTimer !== undefined) {
            window.clearTimeout(this.activeTimer);
        }
        this.activeTimer = window.setTimeout(function () {
            if (_this.callback) {
                _this.callback();
            }
        }, this.timeout);
    };
    return Debouncer;
}());
exports.Debouncer = Debouncer;
//# sourceMappingURL=debouncer.js.map