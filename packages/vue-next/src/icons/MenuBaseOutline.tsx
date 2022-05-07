/**
 * @file MenuBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-menu-base-outline",
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
                    d="M6 11C6 10.4477 6.44772 10 7 10H41C41.5523 10 42 10.4477 42 11V13C42 13.5523 41.5523 14 41 14H7C6.44772 14 6 13.5523 6 13V11ZM6 23C6 22.4477 6.44772 22 7 22H41C41.5523 22 42 22.4477 42 23V25C42 25.5523 41.5523 26 41 26H7C6.44772 26 6 25.5523 6 25V23ZM7 34C6.44772 34 6 34.4477 6 35V37C6 37.5523 6.44772 38 7 38H41C41.5523 38 42 37.5523 42 37V35C42 34.4477 41.5523 34 41 34H7Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
