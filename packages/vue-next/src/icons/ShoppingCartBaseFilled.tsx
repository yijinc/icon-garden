/**
 * @file ShoppingCartBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue from "vue";
import { IIconProps } from "../interface";

export default Vue.defineComponent({
    name: "icon-shopping-cart-base-filled",
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
                    d="M4.97722 2.5C7.65078 2.5 9.93708 4.42261 10.3957 7.05655L11.0823 11H42L38.6951 29.6963C38.3573 31.6072 36.6967 33 34.7562 33H13.2438C11.3033 33 9.64267 31.6072 9.30489 29.6963L5.99999 11H6.00709L5.46981 7.91423C5.42811 7.67478 5.22027 7.5 4.97722 7.5H2.5C1.94771 7.5 1.5 7.05228 1.5 6.5V3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H4.97722ZM14.5 44C16.433 44 18 42.433 18 40.5C18 38.567 16.433 37 14.5 37C12.567 37 11 38.567 11 40.5C11 42.433 12.567 44 14.5 44ZM37 40.5C37 42.433 35.433 44 33.5 44C31.567 44 30 42.433 30 40.5C30 38.567 31.567 37 33.5 37C35.433 37 37 38.567 37 40.5Z"
                    fill={props.color}
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99999 11H6.00709L5.46981 7.91423C5.42811 7.67478 5.22027 7.5 4.97722 7.5H2.5C1.94771 7.5 1.5 7.05228 1.5 6.5V3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H4.97722C7.65078 2.5 9.93708 4.42261 10.3957 7.05655L11.0823 11H42L38.6951 29.6963C38.3573 31.6072 36.6967 33 34.7562 33H13.2438C11.3033 33 9.64267 31.6072 9.30489 29.6963L5.99999 11ZM38.4232 14H11.0823C10.5043 14 9.95943 13.8352 9.4967 13.5469L12.2591 29.1741C12.3435 29.6518 12.7587 30 13.2438 30H34.7562C35.2413 30 35.6564 29.6518 35.7409 29.1741L38.4232 14ZM14.5 41C14.7761 41 15 40.7761 15 40.5C15 40.2239 14.7761 40 14.5 40C14.2238 40 14 40.2239 14 40.5C14 40.7761 14.2238 41 14.5 41ZM33.5 41C33.7761 41 34 40.7761 34 40.5C34 40.2239 33.7761 40 33.5 40C33.2238 40 33 40.2239 33 40.5C33 40.7761 33.2238 41 33.5 41ZM18 40.5C18 42.433 16.433 44 14.5 44C12.567 44 11 42.433 11 40.5C11 38.567 12.567 37 14.5 37C16.433 37 18 38.567 18 40.5ZM33.5 44C35.433 44 37 42.433 37 40.5C37 38.567 35.433 37 33.5 37C31.567 37 30 38.567 30 40.5C30 42.433 31.567 44 33.5 44Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
