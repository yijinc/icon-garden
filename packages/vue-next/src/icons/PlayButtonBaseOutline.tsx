/**
 * @file PlayButtonBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-play-button-base-outline",
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
                    d="M9 39V9H39V39H9ZM5 7C5 5.89543 5.89543 5 7 5H41C42.1046 5 43 5.89543 43 7V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V7ZM21 20.4163L27.0514 23.9999L21 27.5835V20.4163ZM31.9955 22.279C33.3034 23.0535 33.3034 24.9462 31.9955 25.7207L20.0191 32.8131C18.6859 33.6026 17 32.6417 17 31.0922V16.9075C17 15.358 18.6859 14.3971 20.0191 15.1866L31.9955 22.279Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
