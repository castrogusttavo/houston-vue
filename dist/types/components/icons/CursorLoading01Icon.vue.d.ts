import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    iconSize: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    fillType: {
        type: PropType<"stroke" | "solid" | "bulk" | "duotone" | "twotone">;
        default: string;
    };
    cornerStyle: {
        type: PropType<"sharp" | "rounded" | "standard">;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    iconSize: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    fillType: {
        type: PropType<"stroke" | "solid" | "bulk" | "duotone" | "twotone">;
        default: string;
    };
    cornerStyle: {
        type: PropType<"sharp" | "rounded" | "standard">;
        default: string;
    };
}>> & Readonly<{}>, {
    color: string;
    iconSize: number;
    fillType: "stroke" | "solid" | "bulk" | "duotone" | "twotone";
    cornerStyle: "standard" | "sharp" | "rounded";
}, {}, {
    Icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        iconName: {
            type: StringConstructor;
            required: true;
        };
        iconSize: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        fillType: {
            type: PropType<"stroke" | "solid" | "bulk" | "duotone" | "twotone">;
            default: string;
        };
        cornerStyle: {
            type: PropType<"sharp" | "rounded" | "standard">;
            default: string;
        };
    }>, {
        iconUrl: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        iconName: {
            type: StringConstructor;
            required: true;
        };
        iconSize: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        fillType: {
            type: PropType<"stroke" | "solid" | "bulk" | "duotone" | "twotone">;
            default: string;
        };
        cornerStyle: {
            type: PropType<"sharp" | "rounded" | "standard">;
            default: string;
        };
    }>> & Readonly<{}>, {
        color: string;
        iconSize: number;
        fillType: "stroke" | "solid" | "bulk" | "duotone" | "twotone";
        cornerStyle: "standard" | "sharp" | "rounded";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
