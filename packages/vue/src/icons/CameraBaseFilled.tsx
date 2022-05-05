/**
 * @file CameraBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-camera-base-filled",
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
                    d="M16.026 4.02369C16.4751 3.38211 17.209 3 17.9921 3H31.493C32.2761 3 33.01 3.38211 33.4591 4.02369L36.9426 9H43.7422C44.8468 9 45.7422 9.89543 45.7422 11V39C45.7422 40.1046 44.8468 41 43.7422 41H5.74219C4.63762 41 3.74219 40.1046 3.74219 39V11C3.74219 9.89543 4.63762 9 5.74219 9H12.5426L16.026 4.02369ZM29.7422 24C29.7422 26.7614 27.5036 29 24.7422 29C21.9808 29 19.7422 26.7614 19.7422 24C19.7422 21.2386 21.9808 19 24.7422 19C27.5036 19 29.7422 21.2386 29.7422 24ZM24.7422 33C29.7127 33 33.7422 28.9706 33.7422 24C33.7422 19.0294 29.7127 15 24.7422 15C19.7716 15 15.7422 19.0294 15.7422 24C15.7422 28.9706 19.7716 33 24.7422 33Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
