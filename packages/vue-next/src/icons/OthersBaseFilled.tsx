/**
 * @file OthersBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-others-base-filled",
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
    setup: (props: IIconProps) => {
        return () => (
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
                    d="M7 5C6.44772 5 6 5.44772 6 6V20C6 20.5523 6.44772 21 7 21H21C21.5523 21 22 20.5523 22 20V6C22 5.44772 21.5523 5 21 5H7ZM7 26C6.44772 26 6 26.4477 6 27V41C6 41.5523 6.44772 42 7 42H21C21.5523 42 22 41.5523 22 41V27C22 26.4477 21.5523 26 21 26H7ZM26 27C26 26.4477 26.4477 26 27 26H41C41.5523 26 42 26.4477 42 27V41C42 41.5523 41.5523 42 41 42H27C26.4477 42 26 41.5523 26 41V27ZM27 5C26.4477 5 26 5.44772 26 6V20C26 20.5523 26.4477 21 27 21H41C41.5523 21 42 20.5523 42 20V6C42 5.44772 41.5523 5 41 5H27Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
