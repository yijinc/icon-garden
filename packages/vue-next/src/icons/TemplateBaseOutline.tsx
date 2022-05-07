/**
 * @file TemplateBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-template-base-outline",
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 18V9H18V18H9ZM5 7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V20C22 21.1046 21.1046 22 20 22H7C5.89543 22 5 21.1046 5 20V7ZM9 39V30H39V39H9ZM5 28C5 26.8954 5.89543 26 7 26H41C42.1046 26 43 26.8954 43 28V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V28ZM26 17C26 16.4477 26.4477 16 27 16H41C41.5523 16 42 16.4477 42 17V19C42 19.5523 41.5523 20 41 20H27C26.4477 20 26 19.5523 26 19V17ZM27 7C26.4477 7 26 7.44772 26 8V10C26 10.5523 26.4477 11 27 11H41C41.5523 11 42 10.5523 42 10V8C42 7.44772 41.5523 7 41 7H27Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
