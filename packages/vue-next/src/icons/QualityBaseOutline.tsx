/**
 * @file QualityBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-quality-base-outline",
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
                    d="M41 24C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24C7 14.6112 14.6112 7 24 7C33.3888 7 41 14.6112 41 24ZM45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM24.9233 15.7094C24.5817 14.8881 23.4182 14.8881 23.0767 15.7094L21.0757 20.5203L15.882 20.9367C14.9953 21.0078 14.6358 22.1143 15.3113 22.6929L19.2684 26.0826L18.0594 31.1508C17.8531 32.0161 18.7943 32.6999 19.5534 32.2363L24 29.5203L28.4465 32.2363C29.2056 32.6999 30.1469 32.0161 29.9405 31.1508L28.7316 26.0826L32.6886 22.6929C33.3642 22.1143 33.0047 21.0078 32.118 20.9367L26.9243 20.5203L24.9233 15.7094Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
