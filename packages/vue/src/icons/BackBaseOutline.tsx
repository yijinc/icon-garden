/**
 * @file BackBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-back-base-outline",
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
                    d="M6.32234 24.7071C5.93182 24.3166 5.93182 23.6834 6.32234 23.2929L23.2929 6.32233C23.6834 5.93181 24.3166 5.93181 24.7071 6.32233L26.1629 7.77814C26.5534 8.16866 26.5534 8.80183 26.1629 9.19235L11.3553 24L26.1629 38.8076C26.5534 39.1982 26.5534 39.8313 26.1629 40.2219L24.7071 41.6777C24.3166 42.0682 23.6834 42.0682 23.2929 41.6777L6.32234 24.7071Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
