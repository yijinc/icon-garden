/**
 * @file DiscountBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-discount-base-outline",
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
    data() {
        return {};
    },
    render(h: CreateElement): VNode {
        const props: IIconProps = {
            size: this.size,
            color: this.color,
        };
        return (
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
                    d="M43.9056 8.00634C43.7314 6.08211 42.2067 4.55742 40.2825 4.38324L28.2602 3.29497C26.4865 3.1344 24.733 3.77017 23.4743 5.03024L2.18295 26.3451C0.622323 27.9075 0.623028 30.439 2.18451 32.0004L16.3134 46.1293C17.8761 47.692 20.4099 47.6913 21.9718 46.1277L43.2635 24.8125C44.5206 23.5541 45.1545 21.8027 44.9941 20.0313L43.9056 8.00634ZM39.9219 8.36695L41.0104 20.3919C41.0638 20.9824 40.8525 21.5661 40.4335 21.9856L19.1418 43.3009L5.01294 29.172L26.3043 7.8571C26.7239 7.43708 27.3084 7.22516 27.8996 7.27868L39.9219 8.36695ZM29.0407 19.2601C30.6028 20.8222 33.1355 20.8222 34.6976 19.2601C36.2597 17.698 36.2597 15.1653 34.6976 13.6032C33.1355 12.0411 30.6028 12.0411 29.0407 13.6032C27.4786 15.1653 27.4786 17.698 29.0407 19.2601Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});