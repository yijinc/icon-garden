/**
 * @file ClueBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-clue-base-filled",
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 12C11 10.3431 12.3431 9 14 9H18C19.6569 9 21 10.3431 21 12V19.1884V29.8565V35C21 39.9706 25.0294 44 30 44H34C38.9706 44 43 39.9706 43 35V12.0004C44.2144 11.0882 45 9.63582 45 8C45 5.23858 42.7614 3 40 3C37.2386 3 35 5.23858 35 8C35 9.63582 35.7856 11.0882 37 12.0004V35C37 36.6569 35.6569 38 34 38H30C28.3431 38 27 36.6569 27 35V29.8565V19.1884V12C27 7.02944 22.9706 3 18 3H14C9.02944 3 5 7.02944 5 12V35.9996C3.78555 36.9118 3 38.3642 3 40C3 42.7614 5.23858 45 8 45C10.7614 45 13 42.7614 13 40C13 38.3642 12.2144 36.9118 11 35.9996V12Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
