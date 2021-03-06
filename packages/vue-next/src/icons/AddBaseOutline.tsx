/**
 * @file AddBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-add-base-outline",
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
                    d="M22 40C22 40.5523 22.4477 41 23 41H25C25.5523 41 26 40.5523 26 40V26H40C40.5523 26 41 25.5523 41 25V23C41 22.4477 40.5523 22 40 22H26V8C26 7.44772 25.5523 7 25 7H23C22.4477 7 22 7.44772 22 8V22H8C7.44772 22 7 22.4477 7 23V25C7 25.5523 7.44772 26 8 26H22V40Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
