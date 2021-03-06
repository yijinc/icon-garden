/**
 * @file FlashOffBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-flash-off-base-outline",
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
                    d="M18.9929 4H33.0588C36.4866 4 38.4011 7.95644 36.2737 10.6444L30.4523 18H31.6101C35.111 18 37.0016 22.1049 34.7255 24.7653L19.679 42.3529C16.7042 45.8301 11.1026 42.7179 12.4833 38.3553L15.444 29H13.6169C10.8391 29 8.86536 26.296 9.71194 23.6504L15.0879 6.85042C15.6313 5.1523 17.2099 4 18.9929 4ZM33.1372 8.16206C33.1891 8.0965 33.1424 8 33.0588 8H18.9929C18.9494 8 18.9109 8.0281 18.8976 8.06952L13.5216 24.8695C13.501 24.934 13.5491 25 13.6169 25H19.5401C20.2162 25 20.6975 25.6571 20.4935 26.3017L16.2969 39.5622C16.2311 39.77 16.4979 39.9182 16.6395 39.7526L31.6861 22.165C31.7416 22.1001 31.6955 22 31.6101 22H24.2521C23.4161 22 22.9492 21.035 23.468 20.3794L33.1372 8.16206Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
