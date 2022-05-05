/**
 * @file FormBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-form-base-outline",
    props: {
        size: {
            type: [Number, String],
            default: 48,
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
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 40V8H38V40H10ZM6 6C6 4.89543 6.89543 4 8 4H40C41.1046 4 42 4.89543 42 6V42C42 43.1046 41.1046 44 40 44H8C6.89543 44 6 43.1046 6 42V6ZM18 14C17.4477 14 17 14.4477 17 15V17C17 17.5523 17.4477 18 18 18H30C30.5523 18 31 17.5523 31 17V15C31 14.4477 30.5523 14 30 14H18ZM17 23C17 22.4477 17.4477 22 18 22H30C30.5523 22 31 22.4477 31 23V25C31 25.5523 30.5523 26 30 26H18C17.4477 26 17 25.5523 17 25V23ZM18 30C17.4477 30 17 30.4477 17 31V33C17 33.5523 17.4477 34 18 34H23C23.5523 34 24 33.5523 24 33V31C24 30.4477 23.5523 30 23 30H18Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
