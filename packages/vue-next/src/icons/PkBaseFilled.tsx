/**
 * @file PkBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../type";

export default Vue.defineComponent({
    name: "icon-pk-base-filled",
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
                    d="M4 9C3.44772 9 3 9.44772 3 10V10.4615V23V27V38C3 38.5523 3.44772 39 4 39H6C6.55228 39 7 38.5523 7 38V27H13C17.9706 27 22 22.9706 22 18C22 13.0294 17.9706 9 13 9H7H4.46154H4ZM13 23H7V13H13C15.7614 13 18 15.2386 18 18C18 20.7614 15.7614 23 13 23ZM26 10C26 9.44772 26.4477 9 27 9H29C29.5523 9 30 9.44772 30 10V21.8333L40.4014 9.69842C40.7813 9.25513 41.336 9 41.9199 9H44.9188C45.345 9 45.5758 9.49908 45.2998 9.82382L33.0652 24.2174L45.2744 38.1708C45.5573 38.4941 45.3277 39 44.8981 39H41.9186C41.3355 39 40.7814 38.7455 40.4014 38.3032L30.6964 27.0043L30 27.8235V38C30 38.5523 29.5523 39 29 39H27C26.4477 39 26 38.5523 26 38V10Z"
                    fill={props.color}
                />
                <path
                    d="M7 27V26H6V27H7ZM7 23H6V24H7V23ZM7 13V12H6V13H7ZM30 21.8333H29V24.5366L30.7593 22.4841L30 21.8333ZM40.4014 9.69842L41.1606 10.3492L41.1606 10.3492L40.4014 9.69842ZM45.2998 9.82382L46.0617 10.4715L46.0617 10.4715L45.2998 9.82382ZM33.0652 24.2174L32.3033 23.5697L31.7447 24.2269L32.3126 24.8759L33.0652 24.2174ZM45.2744 38.1708L44.5218 38.8293L44.5218 38.8293L45.2744 38.1708ZM40.4014 38.3032L39.6429 38.9547L39.6429 38.9548L40.4014 38.3032ZM30.6964 27.0043L31.4549 26.3527L30.6924 25.4649L29.9344 26.3566L30.6964 27.0043ZM30 27.8235L29.2381 27.1759L29 27.456V27.8235H30ZM4 10V10V8C2.89543 8 2 8.89543 2 10H4ZM4 10.4615V10H2V10.4615H4ZM4 23V10.4615H2V23H4ZM4 27V23H2V27H4ZM4 38V27H2V38H4ZM4 38H2C2 39.1046 2.89543 40 4 40V38ZM6 38H4V40H6V38ZM6 38V40C7.10457 40 8 39.1046 8 38H6ZM6 27V38H8V27H6ZM13 26H7V28H13V26ZM21 18C21 22.4183 17.4183 26 13 26V28C18.5228 28 23 23.5228 23 18H21ZM13 10C17.4183 10 21 13.5817 21 18H23C23 12.4772 18.5228 8 13 8V10ZM7 10H13V8H7V10ZM4.46154 10H7V8H4.46154V10ZM4 10H4.46154V8H4V10ZM7 24H13V22H7V24ZM6 13V23H8V13H6ZM13 12H7V14H13V12ZM19 18C19 14.6863 16.3137 12 13 12V14C15.2091 14 17 15.7909 17 18H19ZM13 24C16.3137 24 19 21.3137 19 18H17C17 20.2091 15.2091 22 13 22V24ZM27 8C25.8954 8 25 8.89543 25 10H27V10V8ZM29 8H27V10H29V8ZM31 10C31 8.89543 30.1046 8 29 8V10H31ZM31 21.8333V10H29V21.8333H31ZM39.6421 9.04763L29.2407 21.1825L30.7593 22.4841L41.1606 10.3492L39.6421 9.04763ZM41.9199 8C41.0441 8 40.212 8.38269 39.6421 9.04763L41.1606 10.3492C41.3506 10.1276 41.6279 10 41.9199 10V8ZM44.9188 8H41.9199V10H44.9188V8ZM46.0617 10.4715C46.8898 9.49724 46.1974 8 44.9188 8V10C44.4926 10 44.2618 9.50093 44.5378 9.17618L46.0617 10.4715ZM33.8272 24.865L46.0617 10.4715L44.5378 9.17618L32.3033 23.5697L33.8272 24.865ZM46.027 37.5123L33.8178 23.5589L32.3126 24.8759L44.5218 38.8293L46.027 37.5123ZM44.8981 40C46.1868 40 46.8756 38.4821 46.027 37.5123L44.5218 38.8293C44.2389 38.506 44.4685 38 44.8981 38V40ZM41.9186 40H44.8981V38H41.9186V40ZM39.6429 38.9548C40.2128 39.6183 41.0439 40 41.9186 40V38C41.627 38 41.35 37.8728 41.16 37.6516L39.6429 38.9548ZM29.9378 27.6559L39.6429 38.9547L41.16 37.6516L31.4549 26.3527L29.9378 27.6559ZM30.7619 28.4712L31.4583 27.6519L29.9344 26.3566L29.2381 27.1759L30.7619 28.4712ZM31 38V27.8235H29V38H31ZM29 40C30.1046 40 31 39.1046 31 38H29V40ZM27 40H29V38H27V40ZM25 38C25 39.1046 25.8954 40 27 40V38H25ZM25 10V38H27V10H25Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
