/**
 * @file CouponBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-coupon-base-filled",
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
                    d="M6 6C4.89543 6 4 6.89543 4 8V20C6.20914 20 8 21.7909 8 24C8 26.2091 6.20914 28 4 28V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V28C41.7909 28 40 26.2091 40 24C40 21.7909 41.7909 20 44 20V8C44 6.89543 43.1046 6 42 6H6ZM24.8967 15.817C24.5299 15.0737 23.4701 15.0737 23.1033 15.817L21.2937 19.4835C21.1481 19.7786 20.8665 19.9832 20.5408 20.0305L16.4946 20.6185C15.6744 20.7376 15.3469 21.7456 15.9404 22.3242L18.8682 25.1781C19.1039 25.4079 19.2115 25.7389 19.1558 26.0632L18.4647 30.0931C18.3246 30.91 19.182 31.533 19.9156 31.1473L23.5347 29.2446C23.826 29.0915 24.174 29.0915 24.4653 29.2446L28.0844 31.1473C28.818 31.533 29.6754 30.91 29.5353 30.0931L28.8442 26.0632C28.7885 25.7389 28.8961 25.4079 29.1318 25.1781L32.0596 22.3242C32.6531 21.7456 32.3256 20.7376 31.5054 20.6185L27.4592 20.0305C27.1335 19.9832 26.8519 19.7786 26.7063 19.4835L24.8967 15.817Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
