/**
 * @file TextBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-text-base-filled",
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
                    d="M39.8984 16C40.4507 16 40.8984 15.5523 40.8984 15V9C40.8984 8.44772 40.4507 8 39.8984 8H27.8984H19.8984H7.89844C7.34615 8 6.89844 8.44772 6.89844 9V15C6.89844 15.5523 7.34615 16 7.89844 16H18.8984V41C18.8984 41.5523 19.3462 42 19.8984 42H27.8984C28.4507 42 28.8984 41.5523 28.8984 41V16H39.8984Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
