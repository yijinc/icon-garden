/**
 * @file MailBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-mail-base-outline",
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
                    d="M8.00011 14.5292V10H40.0001V14.5292L24.0001 24.6345L8.00011 14.5292ZM4.00011 16.5833L3.93213 16.691L4.00011 16.7339V40C4.00011 41.1046 4.89555 42 6.00012 42H42.0001C43.1047 42 44.0001 41.1046 44.0001 40V16.7339L44.0681 16.691L44.0001 16.5833V8C44.0001 6.89543 43.1047 6 42.0001 6H6.00011C4.89555 6 4.00011 6.89543 4.00011 8V16.5833ZM40.0001 19.2602V38H8.00011V19.2602L22.9321 28.691L24.0001 29.3655L25.0681 28.691L40.0001 19.2602Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
