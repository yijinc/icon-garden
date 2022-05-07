/**
 * @file UninterestedBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-uninterested-base-outline",
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
                    d="M34.6098 37.4382C31.818 39.6508 28.3452 41 24.6774 41C14.4413 41 7 33.2227 7 24.6774C7 20.396 8.37685 16.5587 10.7339 13.5623L34.6098 37.4382ZM37.4382 34.6098L13.5623 10.7339C16.5587 8.37685 20.396 7 24.6774 7C33.2227 7 41 14.4413 41 24.6774C41 28.3452 39.6508 31.818 37.4382 34.6098ZM24.6774 45C35.598 45 45 35.598 45 24.6774C45 12.402 35.598 3 24.6774 3C12.402 3 3 12.402 3 24.6774C3 35.598 12.402 45 24.6774 45Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
