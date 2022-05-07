/**
 * @file WifilBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-wifil-base-filled",
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
                    d="M46.1023 19.7348L40.9277 24.0393L39.9703 22.8672C38.0274 20.4888 35.589 18.5736 32.8298 17.2574C30.0706 15.9413 27.0582 15.2563 24.0074 15.251C20.9566 15.2456 17.9419 15.9199 15.1782 17.2263C12.4144 18.5328 9.96944 20.4394 8.01834 22.8109L7.0568 23.9797L1.89722 19.657L2.84174 18.509C5.42244 15.3721 8.65843 12.8479 12.3193 11.1174C15.9803 9.38681 19.9753 8.49292 24.0192 8.50004C28.063 8.50717 32.0549 9.41512 35.7099 11.1586C39.3647 12.902 42.592 15.4376 45.1618 18.5835L46.1023 19.7348ZM37.5184 27.8108L32.3511 32.1092L31.3937 30.9371C30.4915 29.8327 29.3597 28.9439 28.0796 28.3333C26.7996 27.7227 25.4025 27.4051 23.9879 27.4026C22.5732 27.4001 21.175 27.7128 19.893 28.3189C18.6108 28.9249 17.476 29.8097 16.57 30.911L15.6084 32.0797L10.4561 27.7632L11.4007 26.6151C12.9354 24.7497 14.8601 23.2482 17.0381 22.2186C19.2162 21.189 21.5933 20.6571 23.9996 20.6613C26.4059 20.6656 28.7812 21.2059 30.9557 22.2431C33.1301 23.2803 35.0496 24.7886 36.5778 26.6594L37.5184 27.8108ZM28.2523 36.1935C28.2523 38.5591 26.3484 40.5 23.9712 40.5C21.5941 40.5 19.6902 38.5591 19.6902 36.1935C19.6902 33.828 21.5941 31.8871 23.9712 31.8871C26.3484 31.8871 28.2523 33.828 28.2523 36.1935Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
