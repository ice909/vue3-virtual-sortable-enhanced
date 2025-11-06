import { PropType } from "vue";
type Direction = "vertical" | "horizontal";
type LockAxis = "x" | "y";
export declare const VirtualProps: {
    modelValue: {};
    dataKey: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    tableMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: StringConstructor;
        default: string;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    handle: {
        type: (StringConstructor | FunctionConstructor)[];
        default: undefined;
    };
    group: {
        type: (StringConstructor | ObjectConstructor)[];
        default: undefined;
    };
    scroller: {
        type: ({
            new (): Document;
            prototype: Document;
            parseHTMLUnsafe(html: string): Document;
        } | {
            new (): HTMLElement;
            prototype: HTMLElement;
        })[];
        default: undefined;
    };
    lockAxis: {
        type: PropType<LockAxis>;
        default: string;
    };
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    keeps: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: undefined;
    };
    debounceTime: {
        type: NumberConstructor;
        default: number;
    };
    throttleTime: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: NumberConstructor;
        default: number;
    };
    autoScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollSpeed: {
        type: ObjectConstructor;
        default: () => {
            x: number;
            y: number;
        };
    };
    scrollThreshold: {
        type: NumberConstructor;
        default: number;
    };
    keepOffset: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fallbackOnBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    delayOnTouchOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootTag: {
        type: StringConstructor;
        default: string;
    };
    wrapTag: {
        type: StringConstructor;
        default: string;
    };
    wrapClass: {
        type: StringConstructor;
        default: string;
    };
    wrapStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    ghostClass: {
        type: StringConstructor;
        default: string;
    };
    ghostStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    chosenClass: {
        type: StringConstructor;
        default: string;
    };
    placeholderClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare const ItemProps: {
    dataKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    sizeKey: {
        type: StringConstructor;
        default: string;
    };
};
export {};
