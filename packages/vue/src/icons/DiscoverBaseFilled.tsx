/**
 * @file DiscoverBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-discover-base-filled",
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
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.4883 24C45.4883 35.598 36.0863 45 24.4883 45C12.8903 45 3.48828 35.598 3.48828 24C3.48828 12.402 12.8903 3 24.4883 3C36.0863 3 45.4883 12.402 45.4883 24ZM21.3348 20.8464L14.5889 33.8994L27.6418 27.1535L34.3878 14.1005L21.3348 20.8464Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
