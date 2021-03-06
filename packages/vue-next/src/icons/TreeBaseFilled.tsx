/**
 * @file TreeBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-tree-base-filled",
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
    setup: (props: IIconProps) => {
        return () => (
            <svg
                width={props.size}
                height={props.size}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17 24C17 27.3137 14.3137 30 11 30C7.68629 30 5 27.3137 5 24C5 20.6863 7.68629 18 11 18C14.3137 18 17 20.6863 17 24Z"
                    fill={props.color}
                />
                <path
                    d="M43 8C43 11.3137 40.3137 14 37 14C33.6863 14 31 11.3137 31 8C31 4.68629 33.6863 2 37 2C40.3137 2 43 4.68629 43 8Z"
                    fill={props.color}
                />
                <path
                    d="M43 39C43 42.3137 40.3137 45 37 45C33.6863 45 31 42.3137 31 39C31 35.6863 33.6863 33 37 33C40.3137 33 43 35.6863 43 39Z"
                    fill={props.color}
                />
                <path d="M22.1289 9H27.1289V38H22.1289V9Z" fill={props.color} />
                <path d="M22.1289 6H32.1289V11H22.1289V6Z" fill={props.color} />
                <path
                    d="M22.1289 36H32.1289V41H22.1289V36Z"
                    fill={props.color}
                />
                <path
                    d="M16.1289 21H24.1289V26H16.1289V21Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
