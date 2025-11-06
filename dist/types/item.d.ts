declare const Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dataKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    sizeKey: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dataKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    sizeKey: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onResize?: ((...args: any[]) => any) | undefined;
}>, {
    dataKey: string | number;
    sizeKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default Item;
