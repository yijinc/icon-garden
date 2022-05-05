/**
 * @file FlashlightBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-flashlight-base-outline",
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
                    d="M11 7H37V12.1849L31.4971 17H29H19H16.5029L11 12.1849V7ZM40.317 14.5976L33 21V43C33 44.1046 32.1046 45 31 45H17C15.8954 45 15 44.1046 15 43V21L7.68299 14.5976C7.24896 14.2178 7 13.6692 7 13.0925V5C7 3.89543 7.89543 3 9 3H39C40.1046 3 41 3.89543 41 5V13.0925C41 13.6692 40.751 14.2178 40.317 14.5976ZM19 21H29V41H19V21ZM23 27C22.4477 27 22 27.4477 22 28V32C22 32.5523 22.4477 33 23 33H25C25.5523 33 26 32.5523 26 32V28C26 27.4477 25.5523 27 25 27H23Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
