/**
 * @file PhotoAlbumlBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-photo-albuml-base-outline",
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
                    d="M9 5C8.44772 5 8 5.44772 8 6V8C8 8.55228 8.44772 9 9 9H39C39.5523 9 40 8.55228 40 8V6C40 5.44772 39.5523 5 39 5H9ZM9 39V17H39V29.7037L35.1853 25.9149C33.9406 24.6787 31.9255 24.6988 30.7057 25.9594L18.0874 39H9ZM32.9795 29.3618L39 35.3414V39H23.6534L32.9795 29.3618ZM5 15C5 13.8954 5.89543 13 7 13H41C42.1046 13 43 13.8954 43 15V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V15ZM19 24C19 25.6569 17.6569 27 16 27C14.3431 27 13 25.6569 13 24C13 22.3431 14.3431 21 16 21C17.6569 21 19 22.3431 19 24Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
