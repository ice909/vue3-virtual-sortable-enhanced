type SIZETYPE = 'INIT' | 'FIXED' | 'DYNAMIC';
type DIRECTION = 'FRONT' | 'BEHIND' | 'STATIONARY';
export interface Range {
    start: number;
    end: number;
    front: number;
    behind: number;
}
export interface ScrollEvent {
    top: boolean;
    bottom: boolean;
    offset: number;
    direction: DIRECTION;
}
export interface VirtualOptions {
    size?: number;
    keeps?: number;
    buffer: number;
    wrapper: HTMLElement;
    scroller?: HTMLElement | Document | Window;
    direction?: 'vertical' | 'horizontal';
    uniqueKeys: (string | number)[];
    debounceTime?: number;
    throttleTime?: number;
    onScroll: (event: ScrollEvent) => void;
    onUpdate: (range: Range) => void;
}
export declare const VirtualAttrs: string[];
export declare class Virtual {
    sizes: Map<string | number, number>;
    range: Range;
    offset: number;
    options: VirtualOptions;
    scrollEl: HTMLElement;
    direction: DIRECTION;
    sizeType: SIZETYPE;
    fixedSize: number;
    averageSize: number;
    private onScroll;
    constructor(options: VirtualOptions);
    isFixed(): boolean;
    isFront(): boolean;
    isBehind(): boolean;
    isHorizontal(): boolean;
    getSize(key: string | number): number;
    getOffset(): number;
    getScrollSize(): number;
    getClientSize(): number;
    scrollToOffset(offset: number): void;
    scrollToIndex(index: number): void;
    scrollToBottom(): void;
    option<K extends keyof VirtualOptions>(key: K, value: VirtualOptions[K]): void;
    updateRange(range?: Range): void;
    onItemResized(key: string | number, size: number): void;
    updateAverageSize(): void;
    addScrollEventListener(): void;
    removeScrollEventListener(): void;
    enableScroll(scrollable: boolean): void;
    private preventDefault;
    private preventDefaultForKeyDown;
    private updateScrollElement;
    private updateOnScrollFunction;
    private handleScroll;
    private handleScrollFront;
    private handleScrollBehind;
    private getScrollItems;
    private checkIfUpdate;
    private handleUpdate;
    private getFrontOffset;
    private getBehindOffset;
    private getOffsetByRange;
    private getEndByStart;
    private getLastIndex;
    private getItemSize;
    private getScrollStartOffset;
}
export {};
