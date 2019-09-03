export declare class Debouncer {
    activeTimer: number | undefined;
    callback: (() => void) | null;
    timeout: number;
    onChange(): void;
}
