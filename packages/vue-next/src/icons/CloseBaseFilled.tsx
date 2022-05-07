/**
 * @file CloseBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-close-base-filled",
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
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.0563 18.8127L37.9903 5.87866L42.2329 10.1213L28.7979 23.5563L42.2329 36.9914L37.9903 41.234L25.0563 28.3L12.1223 41.234L7.87964 36.9914L21.3147 23.5564L7.87964 10.1214L12.1223 5.87871L25.0563 18.8127Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
