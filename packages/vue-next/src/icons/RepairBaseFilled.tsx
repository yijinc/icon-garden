/**
 * @file RepairBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-repair-base-filled",
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
                    d="M22.2265 28.2976C21.9137 28.4463 21.597 28.5819 21.2779 28.6999C16.6587 30.4082 11.2658 29.4123 7.55056 25.6971C6.03382 24.1803 4.96903 22.3801 4.35621 20.4651C3.79216 18.6944 3.61438 16.8265 3.82489 14.9959C3.99143 13.5476 5.72214 13.1442 6.75295 14.175L11.6778 19.0998C12.6678 20.0898 13.2014 20.2215 14.4622 19.5416C15.5539 18.9529 16.582 18.1977 17.509 17.2707C18.4256 16.3541 19.1742 15.3387 19.76 14.2606C20.4536 12.9843 20.3436 12.445 19.3372 11.4386L14.4133 6.51466C13.3825 5.48386 13.7859 3.75315 15.2341 3.58661C17.0647 3.3761 18.9327 3.55388 20.7033 4.11793C22.6184 4.73075 24.4186 5.79554 25.9353 7.31228C29.6168 10.9937 30.6281 16.3223 28.9842 20.9132L42.6066 34.5355C43.3876 35.3166 43.3876 36.5829 42.6066 37.364L38.3639 41.6066C37.5829 42.3877 36.3166 42.3877 35.5355 41.6066L22.2265 28.2976Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
