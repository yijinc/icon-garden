/**
 * @file SubmitBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-submit-base-filled",
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
                    d="M41.0606 15.0607L20.7071 35.4142C20.3166 35.8047 19.6834 35.8047 19.2929 35.4142L8.93933 25.0607"
                    stroke={props.color}
                    stroke-width="6"
                />
            </svg>
        );
    },
});
