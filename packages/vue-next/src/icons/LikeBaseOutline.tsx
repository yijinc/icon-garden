/**
 * @file LikeBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-like-base-outline",
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
                    d="M21.1346 8.26821C16.5254 4.89093 10.0164 5.28513 5.85072 9.45081C1.40954 13.892 1.25519 20.9967 5.38766 25.623L22.6394 42.8995C23.4226 43.6838 24.6942 43.6816 25.4747 42.8947L42.6681 25.5598C46.7431 20.9322 46.5701 13.8718 42.1491 9.45081C37.8869 5.1886 31.1715 4.87469 26.5479 8.50907C26.1803 8.79802 25.826 9.11194 25.4871 9.45081C25.3392 9.59868 25.0486 9.912 24.7679 10.2182C24.381 10.6404 23.7196 10.6577 23.3147 10.2528L22.0363 8.97436L22.0229 8.98775C21.7359 8.73141 21.4394 8.49156 21.1346 8.26821ZM19.5251 12.1201L19.3582 11.9709C16.3052 9.24382 11.6116 9.34683 8.67914 12.2792C5.7706 15.1878 5.64559 19.829 8.30479 22.8834L24.0499 38.6511L39.736 22.8359C42.3529 19.7813 42.2141 15.1727 39.3207 12.2792C36.2817 9.24025 31.3545 9.24025 28.3155 12.2792C28.2241 12.3706 27.9356 12.6811 27.5994 13.0491C27.4471 13.2159 27.3044 13.3731 27.1995 13.4889L27.0311 13.6752M27.0311 13.6752L25.6203 15.2403C24.8535 16.091 23.5303 16.1253 22.7205 15.3154L19.5251 12.1201"
                    fill={props.color}
                />
            </svg>
        );
    },
});
