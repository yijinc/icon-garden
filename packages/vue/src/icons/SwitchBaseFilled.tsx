/**
 * @file SwitchBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-switch-base-filled",
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
                    d="M42.8711 15.1343H18.1117L22.2474 11.0002C22.7515 10.4963 22.5817 9.64181 21.9231 9.36904L18.8021 8.07627C18.4284 7.92149 17.9983 8.00705 17.7123 8.29304L6.23677 19.7686C5.7328 20.2726 6.08973 21.1343 6.80246 21.1343H6.87112L6.87109 21.1343H42.8711C43.4234 21.1343 43.8711 20.6866 43.8711 20.1343V16.1343C43.8711 15.582 43.4234 15.1343 42.8711 15.1343ZM7.00085 32.1343L31.7603 32.1343L27.6245 36.2685C27.1204 36.7724 27.2903 37.6268 27.9488 37.8996L31.0698 39.1924C31.4435 39.3471 31.8736 39.2616 32.1596 38.9756L43.6352 27.5C44.1391 26.9961 43.7822 26.1343 43.0695 26.1343H43.0008L43.0009 26.1343L7.00086 26.1343C6.44857 26.1343 6.00086 26.582 6.00086 27.1343L6.00085 31.1343C6.00085 31.6866 6.44857 32.1343 7.00085 32.1343Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
