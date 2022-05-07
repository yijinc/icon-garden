/**
 * @file DownloadBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-download-base-outline",
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
                    d="M22.9393 31.5606C23.5251 32.1464 24.4749 32.1464 25.0607 31.5606L34.2671 22.3542C34.6521 21.9692 34.6583 21.3469 34.2811 20.9543L33.1975 19.8265C32.8131 19.4263 32.1763 19.4157 31.7787 19.8029L26 25.4308V6.60046C26 6.04818 25.5523 5.60046 25 5.60046H23C22.4477 5.60046 22 6.04818 22 6.60046V25.4308L16.2213 19.8029C15.8237 19.4157 15.1869 19.4263 14.8025 19.8265L13.7189 20.9543C13.3417 21.3469 13.3479 21.9692 13.7329 22.3542L22.9393 31.5606ZM9 25V38.9933L39 38.9933V24.9933C39 24.441 39.4477 23.9933 40 23.9933H42C42.5523 23.9933 43 24.441 43 24.9933V40.9933C43 42.0979 42.1046 42.9933 41 42.9933L7 42.9933C5.89543 42.9933 5 42.0979 5 40.9933V25C5 24.4477 5.44772 24 6 24H8C8.55228 24 9 24.4477 9 25Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
