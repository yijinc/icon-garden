/**
 * @file CreditCardBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-credit-card-base-filled",
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
                    d="M6 42C4.89543 42 4 41.1046 4 40V18H44V40C44 41.1046 43.1046 42 42 42H6ZM4 8V14H44V8C44 6.89543 43.1046 6 42 6H6C4.89543 6 4 6.89543 4 8ZM38 32H30V36H38V32Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
