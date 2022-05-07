/**
 * @file MicrophoneBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-microphone-base-outline",
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
                    d="M10 23C10 30.732 16.268 37 24 37C31.732 37 38 30.732 38 23H42C42 24.0221 41.9148 25.0244 41.7511 26C40.4311 33.8679 34.007 40.005 26 40.8901V44C26 44.5523 25.5523 45 25 45H23C22.4477 45 22 44.5523 22 44V40.8901C13.993 40.005 7.56886 33.8679 6.24888 26C6.0852 25.0244 6 24.0221 6 23H10ZM30 13V23C30 26.3137 27.3137 29 24 29C20.6863 29 18 26.3137 18 23V13C18 9.68629 20.6863 7 24 7C27.3137 7 30 9.68629 30 13ZM14 13C14 7.47715 18.4771 3 24 3C29.5228 3 34 7.47715 34 13V23C34 28.5228 29.5228 33 24 33C18.4771 33 14 28.5228 14 23V13Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
