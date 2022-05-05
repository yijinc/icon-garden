/**
 * @file RightSmallBaseFilledPc
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-right-small-base-filled-pc",
    props: {
        size: {
            type: [Number, String],
            default: 16,
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
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.6096 7.68765C10.8097 7.84778 10.8097 8.15222 10.6096 8.31235L6.64988 11.4801C6.38797 11.6896 6 11.5032 6 11.1677L6 4.83225C6 4.49685 6.38797 4.31038 6.64988 4.5199L10.6096 7.68765Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
