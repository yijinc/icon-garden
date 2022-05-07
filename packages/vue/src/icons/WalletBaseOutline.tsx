/**
 * @file WalletBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-wallet-base-outline",
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
                    d="M7 38H41V10H7V38ZM3 40C3 41.1046 3.89543 42 5 42H43C44.1046 42 45 41.1046 45 40V8C45 6.89543 44.1046 6 43 6H5C3.89543 6 3 6.89543 3 8V40Z"
                    fill={props.color}
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 14H44V18H4V14Z"
                    fill={props.color}
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30 32H38V36H30V32Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
