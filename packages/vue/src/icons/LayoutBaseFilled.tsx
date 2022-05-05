/**
 * @file LayoutBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-layout-base-filled",
    props: {
        size: {
            type: [Number, String],
            default: 48,
        },
        color: {
            type: String,
            default: "black",
        },
    },
    data() {
        return {};
    },
    render(h: CreateElement): VNode {
        const props: IIconProps = {
            size: this.size,
            color: this.color,
        };
        return (
            <svg
                width={props.size}
                height={props.size}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 6C6.44772 6 6 6.44772 6 7V21C6 21.5523 6.44772 22 7 22H21C21.5523 22 22 21.5523 22 21V7C22 6.44772 21.5523 6 21 6H7ZM7 26C6.44772 26 6 26.4477 6 27V41C6 41.5523 6.44772 42 7 42H21C21.5523 42 22 41.5523 22 41V27C22 26.4477 21.5523 26 21 26H7ZM26 7C26 6.44772 26.4477 6 27 6H41C41.5523 6 42 6.44772 42 7V11C42 11.5523 41.5523 12 41 12H27C26.4477 12 26 11.5523 26 11V7ZM27 16C26.4477 16 26 16.4477 26 17V21C26 21.5523 26.4477 22 27 22H41C41.5523 22 42 21.5523 42 21V17C42 16.4477 41.5523 16 41 16H27ZM26 27C26 26.4477 26.4477 26 27 26H41C41.5523 26 42 26.4477 42 27V31C42 31.5523 41.5523 32 41 32H27C26.4477 32 26 31.5523 26 31V27ZM27 36C26.4477 36 26 36.4477 26 37V41C26 41.5523 26.4477 42 27 42H41C41.5523 42 42 41.5523 42 41V37C42 36.4477 41.5523 36 41 36H27Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});