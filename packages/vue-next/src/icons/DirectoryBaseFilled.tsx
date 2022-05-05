/**
 * @file DirectoryBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-directory-base-filled",
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
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.1016 4C8.99699 4 8.10156 4.89543 8.10156 6V42C8.10156 43.1046 8.99699 44 10.1016 44H40.1016C41.2061 44 42.1016 43.1046 42.1016 42V6C42.1016 4.89543 41.2061 4 40.1016 4H10.1016ZM26.1016 14C25.5493 14 25.1016 14.4477 25.1016 15V17C25.1016 17.5523 25.5493 18 26.1016 18H34.1016C34.6538 18 35.1016 17.5523 35.1016 17V15C35.1016 14.4477 34.6538 14 34.1016 14H26.1016Z"
                    fill={props.color}
                />
                <path
                    d="M5.10156 14C4.54928 14 4.10156 14.4477 4.10156 15V17C4.10156 17.5523 4.54928 18 5.10156 18H9.10156C9.65385 18 10.1016 17.5523 10.1016 17V15C10.1016 14.4477 9.65385 14 9.10156 14H5.10156Z"
                    fill={props.color}
                />
                <path
                    d="M5.10156 30C4.54928 30 4.10156 30.4477 4.10156 31V33C4.10156 33.5523 4.54928 34 5.10156 34H9.10156C9.65385 34 10.1016 33.5523 10.1016 33V31C10.1016 30.4477 9.65385 30 9.10156 30H5.10156Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
