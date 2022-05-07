/**
 * @file LocationBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-location-base-filled",
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
                    d="M25.304 44.8637C24.5564 45.5212 23.4486 45.5154 22.7066 44.8516C20.0902 42.5111 14.1865 37.1378 11.4499 33.9031C7.87587 29.6785 6 24.49 6 19.7778C6 9.95939 14.0589 2 24 2C33.9411 2 42 9.95939 42 19.7778C42 24.4862 39.8915 29.6671 36.525 33.9031C33.9435 37.1514 27.9557 42.5315 25.304 44.8637ZM30 20C30 23.3137 27.3137 26 24 26C20.6863 26 18 23.3137 18 20C18 16.6863 20.6863 14 24 14C27.3137 14 30 16.6863 30 20Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
