/**
 * @file QrCodeBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-qr-code-base-filled",
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
                    d="M11 11V17H17V11H11ZM7 6C6.44772 6 6 6.44772 6 7V21C6 21.5523 6.44772 22 7 22H21C21.5523 22 22 21.5523 22 21V7C22 6.44772 21.5523 6 21 6H7ZM11 31V37H17V31H11ZM7 26C6.44772 26 6 26.4477 6 27V41C6 41.5523 6.44772 42 7 42H21C21.5523 42 22 41.5523 22 41V27C22 26.4477 21.5523 26 21 26H7ZM27 26C26.4477 26 26 26.4477 26 27V41C26 41.5523 26.4477 42 27 42H29C29.5523 42 30 41.5523 30 41V27C30 26.4477 29.5523 26 29 26H27ZM32 27C32 26.4477 32.4477 26 33 26H35C35.5523 26 36 26.4477 36 27V35C36 35.5523 35.5523 36 35 36H33C32.4477 36 32 35.5523 32 35V27ZM39 26C38.4477 26 38 26.4477 38 27V41C38 41.5523 38.4477 42 39 42H41C41.5523 42 42 41.5523 42 41V27C42 26.4477 41.5523 26 41 26H39ZM32 39C32 38.4477 32.4477 38 33 38H35C35.5523 38 36 38.4477 36 39V41C36 41.5523 35.5523 42 35 42H33C32.4477 42 32 41.5523 32 41V39ZM31 17V11H37V17H31ZM26 7C26 6.44772 26.4477 6 27 6H41C41.5523 6 42 6.44772 42 7V21C42 21.5523 41.5523 22 41 22H27C26.4477 22 26 21.5523 26 21V7Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
