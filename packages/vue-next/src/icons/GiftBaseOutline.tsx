/**
 * @file GiftBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-gift-base-outline",
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
                    d="M16.1888 6.35313C15.4051 7.12657 15.4031 8.39083 16.1843 9.16678L18.03 11H8C6.34315 11 5 12.3431 5 14V22C5 22.5523 5.44772 23 6 23H8V40C8 41.6569 9.34315 43 11 43H37C38.6569 43 40 41.6569 40 40V23H42C42.5523 23 43 22.5523 43 22V14C43 12.3431 41.6569 11 40 11H29.9714L31.8157 9.16816C32.5969 8.39222 32.5949 7.12795 31.8112 6.35451C31.0384 5.5919 29.7957 5.59389 29.0254 6.35898L24.3529 11H23.6485L18.9746 6.3576C18.2043 5.59251 16.9616 5.59051 16.1888 6.35313ZM9 15H11.3684H22.0571H25.9443H36.6316H39V16V18.6667V19H38.2105H9.78947H9V18.6667V16V15ZM12 23V39H36V23H12Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
