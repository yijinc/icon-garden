/**
 * @file ScreenBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-screen-base-outline",
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
                    d="M10.3908 8.96C10.2715 8.96 10.1541 9.00833 10.0652 9.09923C9.87569 9.29311 9.87569 9.61356 10.0652 9.80744L10.0675 9.80974L20.3328 20.3822C20.514 20.5688 20.6154 20.8187 20.6154 21.0788V42C20.6154 42.5523 20.1677 43 19.6154 43H17.6923C17.14 43 16.6923 42.5523 16.6923 42V21.8868L5.98796 10.8899L5.98668 10.8886C4.67068 9.54115 4.67111 7.36367 5.98796 6.01673C6.6227 5.36748 7.48673 5 8.39079 5H39.6092C41.4957 5 43 6.56016 43 8.45333C43 9.36388 42.6467 10.2401 42.0132 10.8887L42.012 10.8899L31.3077 21.8868V33.1067C31.3077 33.659 30.86 34.1067 30.3077 34.1067H28.3846C27.8323 34.1067 27.3846 33.659 27.3846 33.1067V21.0788C27.3846 20.8187 27.486 20.5688 27.6672 20.3822L37.9325 9.80974L37.9348 9.80744C38.0241 9.71604 38.0769 9.58894 38.0769 9.45333C38.0769 9.16682 37.8537 8.96 37.6092 8.96H10.3908Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
