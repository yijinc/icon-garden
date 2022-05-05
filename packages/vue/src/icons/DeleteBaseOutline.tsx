/**
 * @file DeleteBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-delete-base-outline",
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
                    d="M17 2C16.4477 2 16 2.44772 16 3V5C16 5.55228 16.4477 6 17 6H31C31.5523 6 32 5.55228 32 5V3C32 2.44772 31.5523 2 31 2H17ZM6 10C6 9.44772 6.44772 9 7 9H9H13H35H39H41C41.5523 9 42 9.44772 42 10V12C42 12.5523 41.5523 13 41 13H39V41C39 43.2091 37.2091 45 35 45H13C10.7909 45 9 43.2091 9 41V13H7C6.44772 13 6 12.5523 6 12V10ZM13 13H35V41H13V13ZM18 19C18 18.4477 18.4477 18 19 18H21C21.5523 18 22 18.4477 22 19V35C22 35.5523 21.5523 36 21 36H19C18.4477 36 18 35.5523 18 35V19ZM27 18C26.4477 18 26 18.4477 26 19V35C26 35.5523 26.4477 36 27 36H29C29.5523 36 30 35.5523 30 35V19C30 18.4477 29.5523 18 29 18H27Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
