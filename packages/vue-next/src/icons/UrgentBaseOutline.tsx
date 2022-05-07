/**
 * @file UrgentBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-urgent-base-outline",
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
                    d="M12 34.6569L10.6569 36H17C20.5058 36 22.4029 38.7955 23.077 40.3883C23.2323 40.755 23.5921 41 24 41C24.4079 41 24.7677 40.755 24.923 40.3883C25.5971 38.7955 27.4942 36 31 36H37.3431L36 34.6569V21C36 15.5845 32.4096 10.9972 27.4703 9.50835C25.5436 8.92756 24.4274 7.39313 24.0017 6.00186L24 6L23.9983 6.00186C23.5726 7.39313 22.4564 8.92756 20.5297 9.50835C15.5904 10.9972 12 15.5845 12 21V34.6569ZM28.6248 5.67856C35.2065 7.66252 40 13.7715 40 21V33L42.4142 35.4142C42.7893 35.7893 43 36.298 43 36.8284V39C43 39.5523 42.5523 40 42 40H31C29.8954 40 29.0371 40.9303 28.6065 41.9475C27.8472 43.7414 26.0706 45 24 45C21.9294 45 20.1528 43.7414 19.3935 41.9475C18.9629 40.9303 18.1046 40 17 40H6C5.44772 40 5 39.5523 5 39V36.8284C5 36.298 5.21071 35.7893 5.58579 35.4142L8 33V21C8 13.7715 12.7935 7.66252 19.3752 5.67856C19.7687 5.55996 20.0537 5.22364 20.1736 4.8306C20.6738 3.19198 22.1977 2 24 2C25.8023 2 27.3262 3.19198 27.8264 4.8306C27.9463 5.22364 28.2313 5.55996 28.6248 5.67856Z"
                    fill={props.color}
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.4386 24.2481C17.2442 24.5814 17.4846 25 17.8705 25H23.5C23.7761 25 24 25.2239 24 25.5V31.1506C24 31.6609 24.6747 31.8433 24.9319 31.4025L30.5614 21.752C30.7558 21.4186 30.5154 21 30.1295 21H24.5C24.2238 21 24 20.7762 24 20.5V14.8495C24 14.3391 23.3253 14.1567 23.0681 14.5975L17.4386 24.2481Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
