/**
 * @file HomepageBaseOutline
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-homepage-base-outline",
    props: {
        size: {
            type: [Number, String],
            default: 60,
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
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6155 24.0878L30.0001 15.2307L45.3847 24.0878V41.9998C45.3847 43.8691 43.8694 45.3844 42.0001 45.3844L37.6924 45.3844V39.3075C37.6924 36.546 35.4538 34.3075 32.6924 34.3075H27.3078C24.5464 34.3075 22.3078 36.546 22.3078 39.3075V45.3844L18.0001 45.3844C16.1308 45.3844 14.6155 43.8691 14.6155 41.9998V24.0878ZM26.3078 49.3844L18.0001 49.3844C13.9217 49.3844 10.6155 46.0782 10.6155 41.9998V23.9099C10.6155 22.5892 11.3209 21.369 12.4656 20.71L28.1579 11.6758C29.2983 11.0192 30.7019 11.0192 31.8423 11.6758L47.5346 20.71C48.6792 21.369 49.3847 22.5892 49.3847 23.9099V41.9998C49.3847 46.0782 46.0785 49.3844 42.0001 49.3844L33.6924 49.3844V39.3075C33.6924 38.7552 33.2447 38.3075 32.6924 38.3075H27.3078C26.7555 38.3075 26.3078 38.7552 26.3078 39.3075V49.3844Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
