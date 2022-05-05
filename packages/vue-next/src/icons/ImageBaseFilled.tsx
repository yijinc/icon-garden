/**
 * @file ImageBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-image-base-filled",
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
                    d="M3 9C3 7.89543 3.89543 7 5 7H43C44.1046 7 45 7.89543 45 9V32.8787L34.0607 21.9393L32.9985 20.8771L31.9378 21.9409L12.9338 41H5C3.89543 41 3 40.1046 3 39V9ZM33.0015 25.1229L45 37.1213V39C45 40.1046 44.1046 41 43 41H17.1703L33.0015 25.1229ZM17 18C17 19.6569 15.6569 21 14 21C12.3431 21 11 19.6569 11 18C11 16.3431 12.3431 15 14 15C15.6569 15 17 16.3431 17 18Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
