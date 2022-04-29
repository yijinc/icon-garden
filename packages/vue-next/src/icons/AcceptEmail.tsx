/**
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue-next";

export default defineComponent({
    name: "icon-",
    props: {
        size: {
            type: Number,
            default: 48,
        },
        color: {
            type: String,
            default: "black",
        },
    },
    setup: (props) => {
        return (
            <svg
                width={props.size}
                height={props.size}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M44 24V9H24H4V24V39H24"
                    stroke={props.color}
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M44 34L30 34"
                    stroke={props.color}
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M35 29L30 34L35 39"
                    stroke={props.color}
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 9L24 24L44 9"
                    stroke={props.color}
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});