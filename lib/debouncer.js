"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Helper for debouncing input.
 * Usage: Create an instace for each input that needs debouncing.
 * Configure timeout if needed.
 * Set the callback - your method to be called when the input value is stable.
 * On each input change, call onChange().
 */
var Debouncer = /** @class */ (function () {
    function Debouncer() {
        this.activeTimer = undefined;
        /** This delegate will be called when the input is stable. Set it to your callback method. */
        this.callback = null;
        /** The debounce time in ms. */
        this.timeout = 500;
    }
    /** Call this method on each input value change. */
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