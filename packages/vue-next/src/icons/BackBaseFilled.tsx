/**
 * @file BackBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-back-base-filled",
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
                    d="M24.3848 5.61523L6.70711 23.2929C6.31658 23.6834 6.31658 24.3166 6.70711 24.7071L24.3848 42.3848"
                    stroke={props.color}
                    stroke-width="6"
                />
            </svg>
        );
    },
});
