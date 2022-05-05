/**
 * @file ShoppingBagBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-shopping-bag-base-outline",
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
                    d="M9.20509 40L10.8051 8H37.1951L38.7951 40H9.20509ZM6.90509 5.90013C6.95831 4.83571 7.83684 4 8.90259 4H39.0976C40.1633 4 41.0419 4.83571 41.0951 5.90012L42.8951 41.9001C42.9522 43.0425 42.0414 44 40.8976 44H7.10259C5.95879 44 5.04797 43.0425 5.10509 41.9001L6.90509 5.90013ZM19.0001 18V13H15.0001V18C15.0001 22.9706 19.0296 27 24.0001 27C28.9707 27 33.0001 22.9706 33.0001 18V13H29.0001V18C29.0001 20.7614 26.7615 23 24.0001 23C21.2387 23 19.0001 20.7614 19.0001 18Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
