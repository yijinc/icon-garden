/**
 * @file PlayButtonBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-play-button-base-filled",
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
    data() {
        return {};
    },
    render(h: CreateElement): VNode {
        const props: IIconProps = {
            size: this.size,
            color: this.color,
        };
        return (
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
                    d="M7 5C5.89543 5 5 5.89543 5 7V41C5 42.1046 5.89543 43 7 43H41C42.1046 43 43 42.1046 43 41V7C43 5.89543 42.1046 5 41 5H7ZM31.9955 25.7207C33.3034 24.9462 33.3034 23.0535 31.9955 22.279L20.0191 15.1866C18.6859 14.3971 17 15.358 17 16.9075V31.0922C17 32.6417 18.6859 33.6026 20.0191 32.8131L31.9955 25.7207Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});