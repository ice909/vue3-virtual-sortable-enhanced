declare const VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<"x" | "y">;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
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
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("bottom" | "top" | "drag" | "drop" | "update:modelValue" | "dragChange" | "rangeChange")[], "bottom" | "top" | "drag" | "drop" | "update:modelValue" | "dragChange" | "rangeChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<"x" | "y">;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
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
}>> & Readonly<{
    onDrag?: ((...args: any[]) => any) | undefined;
    onDrop?: ((...args: any[]) => any) | undefined;
    onDragChange?: ((...args: any[]) => any) | undefined;
    onBottom?: ((...args: any[]) => any) | undefined;
    onTop?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRangeChange?: ((...args: any[]) => any) | undefined;
}>, {
    animation: number;
    direction: "vertical" | "horizontal";
    sortable: boolean;
    draggable: string;
    handle: string | Function;
    group: string | Record<string, any>;
    lockAxis: "x" | "y";
    disabled: boolean;
    autoScroll: boolean;
    scrollThreshold: number;
    scrollSpeed: Record<string, any>;
    delay: number;
    delayOnTouchOnly: boolean;
    chosenClass: string;
    placeholderClass: string;
    ghostStyle: Record<string, any>;
    ghostClass: string;
    fallbackOnBody: boolean;
    size: number;
    keeps: number;
    scroller: HTMLElement | Document;
    debounceTime: number;
    throttleTime: number;
    dataKey: string;
    tableMode: boolean;
    keepOffset: boolean;
    rootTag: string;
    wrapTag: string;
    wrapClass: string;
    wrapStyle: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default VirtualList;
