/**
 * @file BackToTopBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-back-to-top-base-outline",
    props: {
        size: {
            type: [Number, String],
            default: 49,
        },
        color: {
            type: String,
            default: "#131212",
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
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 21.5331L22 42C22 42.5523 22.4477 43 23 43L25 43C25.5523 43 26 42.5523 26 42L26 21.5737L34.5901 29.9823C34.9874 30.3712 35.6256 30.3614 36.0107 29.9605L37.2875 28.6316C37.6647 28.239 37.6585 27.6167 37.2735 27.2317L25.124 15.0822C24.4918 14.45 23.4667 14.45 22.8345 15.0822L10.685 27.2317C10.3 27.6167 10.2938 28.239 10.671 28.6316L11.9478 29.9605C12.3329 30.3614 12.9711 30.3712 13.3684 29.9823L22 21.5331ZM38.0002 10.9935C38.5524 10.9934 39 10.5457 39 9.99354L39 8C39 7.44772 38.5523 7 38 7L10 7.00002C9.44772 7.00002 9 7.44773 9 8.00002L9 9.99978C9 10.5521 9.44785 10.9999 10.0002 10.9998L38.0002 10.9935Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
