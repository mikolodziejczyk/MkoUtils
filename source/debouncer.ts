/** Helper for debouncing input.
 * Usage: Create an instace for each input that needs debouncing.
 * Configure timeout if needed.
 * Set the callback - your method to be called when the input value is stable.
 * On each input change, call onChange().
 */
export class Debouncer {
    activeTimer: number | undefined = undefined;
    
    /** This delegate will be called when the input is stable. Set it to your callback method. */
    callback: (() => void) | null = null;
    /** The debounce time in ms. */
    timeout = 500;

    /** Call this method on each input value change. */ 
    onChange() {
        if (this.activeTimer !== undefined) {
            window.clearTimeout(this.activeTimer);
        }

        this.activeTimer = window.setTimeout(() => {
            if (this.callback) {
                this.callback();
            }
        }, this.timeout);
    }
}
