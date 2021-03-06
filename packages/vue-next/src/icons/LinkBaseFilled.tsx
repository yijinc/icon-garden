/**
 * @file LinkBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-link-base-filled",
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
                    d="M11.2721 24C13.6949 21.5772 17.2852 21.0333 20.2321 22.3683L9.15286 33.4476C8.03848 34.5619 7.97634 36.3486 9.01061 37.5377L9.90106 38.5615C11.0423 39.8735 13.0564 39.9436 14.286 38.714L25.5029 27.4971C26.9985 30.4923 26.4976 34.2304 24 36.7279L18.3432 42.3848C15.219 45.509 10.1536 45.509 7.02945 42.3848L5.61524 40.9706C2.49105 37.8464 2.49105 32.7811 5.61524 29.6569L11.2721 24ZM37.8975 15.1025L27.4971 25.5029C30.4923 26.9985 34.2304 26.4976 36.7279 24L42.3848 18.3432C45.509 15.219 45.509 10.1536 42.3848 7.02945L40.9706 5.61524C37.8464 2.49105 32.7811 2.49105 29.6569 5.61524L24 11.2721C21.5772 13.6949 21.0333 17.2852 22.3683 20.2321L32.7644 9.83606C33.994 8.60646 36.0081 8.67651 37.1493 9.98856L38.0397 11.0123C39.074 12.2014 39.0118 13.9881 37.8975 15.1025ZM10.1873 34.8128C9.79677 35.2034 9.79677 35.8365 10.1873 36.227L11.6015 37.6413C11.992 38.0318 12.6252 38.0318 13.0157 37.6413L36.499 14.158C36.8895 13.7675 36.8895 13.1343 36.499 12.7438L35.0848 11.3295C34.6943 10.939 34.0611 10.939 33.6706 11.3296L10.1873 34.8128Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
