/**
 * @file FlashlightBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-flashlight-base-filled",
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
                    d="M9.10156 3C7.99699 3 7.10156 3.89543 7.10156 5V13.0925C7.10156 13.6692 7.35052 14.2178 7.78455 14.5976L15.1016 21V43C15.1016 44.1046 15.997 45 17.1016 45H31.1016C32.2061 45 33.1016 44.1046 33.1016 43V21L40.4186 14.5976C40.8526 14.2178 41.1016 13.6692 41.1016 13.0925V5C41.1016 3.89543 40.2061 3 39.1016 3H9.10156ZM22.1016 28C22.1016 27.4477 22.5493 27 23.1016 27H25.1016C25.6538 27 26.1016 27.4477 26.1016 28V32C26.1016 32.5523 25.6538 33 25.1016 33H23.1016C22.5493 33 22.1016 32.5523 22.1016 32V28Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
