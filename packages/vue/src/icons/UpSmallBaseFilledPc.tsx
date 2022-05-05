/**
 * @file UpSmallBaseFilledPc
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-up-small-base-filled-pc",
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
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.68765 5.39043C7.84778 5.19027 8.15222 5.19027 8.31235 5.39043L11.4801 9.35012C11.6896 9.61203 11.5032 10 11.1677 10L4.83225 10C4.49685 10 4.31038 9.61203 4.5199 9.35012L7.68765 5.39043Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
