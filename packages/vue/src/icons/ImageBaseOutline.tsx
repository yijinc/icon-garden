/**
 * @file ImageBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-image-base-outline",
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
                    d="M8 10V38H14.2162L28.1697 24.0061C29.7311 22.4402 32.2669 22.4383 33.8306 24.002L40 30.1714V10H8ZM40 35.8282L31.0022 26.8304L19.8649 38H40V35.8282ZM15.8765 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H15.5931L15.7352 42.1417L15.8765 42ZM16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
