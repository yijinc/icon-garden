/**
 * @file SubmitBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-submit-base-filled",
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
                    d="M41.0606 15.0607L20.7071 35.4142C20.3166 35.8047 19.6834 35.8047 19.2929 35.4142L8.93933 25.0607"
                    stroke={props.color}
                    stroke-width="6"
                />
            </svg>
        );
    },
});
