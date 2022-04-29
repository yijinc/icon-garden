/**
 * @file AddBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-add-base-filled",
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
                    d="M21 40C21 40.5523 21.4477 41 22 41H26C26.5523 41 27 40.5523 27 40V27H40C40.5523 27 41 26.5523 41 26V22C41 21.4477 40.5523 21 40 21H27V8C27 7.44772 26.5523 7 26 7H22C21.4477 7 21 7.44772 21 8V21H8C7.44772 21 7 21.4477 7 22V26C7 26.5523 7.44772 27 8 27H21V40Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
