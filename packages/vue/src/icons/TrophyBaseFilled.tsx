/**
 * @file TrophyBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-trophy-base-filled",
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
                    d="M12 4H36V20C36 26.6274 30.6274 32 24 32C17.3726 32 12 26.6274 12 20V4Z"
                    fill={props.color}
                />
                <path
                    d="M5 9C5 8.44772 5.44772 8 6 8H19V24H15C9.47715 24 5 19.5228 5 14V9Z"
                    fill={props.color}
                />
                <path
                    d="M43 9C43 8.44772 42.5523 8 42 8H29V24H33C38.5228 24 43 19.5228 43 14V9Z"
                    fill={props.color}
                />
                <path d="M22 30H26V43H22V30Z" fill={props.color} />
                <path
                    d="M16 41C16 40.4477 16.4477 40 17 40H31C31.5523 40 32 40.4477 32 41V43C32 43.5523 31.5523 44 31 44H17C16.4477 44 16 43.5523 16 43V41Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
