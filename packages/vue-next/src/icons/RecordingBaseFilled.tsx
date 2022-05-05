/**
 * @file RecordingBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-recording-base-filled",
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
                    d="M1 10.0001C1 8.89555 1.89543 8.00012 3 8.00012H35C36.1046 8.00012 37 8.89555 37 10.0001V19.8751L44.6502 14.6156C45.6455 13.9314 47 14.6439 47 15.8517V32.1486C47 33.3563 45.6455 34.0689 44.6502 33.3846L37 28.1251V38.0001C37 39.1047 36.1046 40.0001 35 40.0001H3C1.89543 40.0001 1 39.1047 1 38.0001V10.0001ZM10 20.0001C11.6569 20.0001 13 18.657 13 17.0001C13 15.3433 11.6569 14.0001 10 14.0001C8.34315 14.0001 7 15.3433 7 17.0001C7 18.657 8.34315 20.0001 10 20.0001Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
