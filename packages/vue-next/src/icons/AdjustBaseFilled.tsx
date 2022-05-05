/**
 * @file AdjustBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-adjust-base-filled",
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
                    d="M27 11C27 9.89543 27.8954 9 29 9H33C34.1046 9 35 9.89543 35 11V12H44C44.5523 12 45 12.4477 45 13V17C45 17.5523 44.5523 18 44 18H35V19C35 20.1046 34.1046 21 33 21H29C27.8954 21 27 20.1046 27 19V18H4C3.44772 18 3 17.5523 3 17V13C3 12.4477 3.44772 12 4 12H27V11ZM13 28C13 26.8954 13.8954 26 15 26H19C20.1046 26 21 26.8954 21 28V29H44C44.5523 29 45 29.4477 45 30V34C45 34.5523 44.5523 35 44 35H21V36C21 37.1046 20.1046 38 19 38H15C13.8954 38 13 37.1046 13 36V35H4C3.44771 35 3 34.5523 3 34V30C3 29.4477 3.44772 29 4 29H13V28Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
