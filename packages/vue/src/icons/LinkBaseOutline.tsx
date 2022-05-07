/**
 * @file LinkBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../interface";

export default Vue.extend({
    name: "icon-link-base-outline",
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
                    d="M29.288 26.143C28.673 26.0031 28.0713 25.7897 27.497 25.5029L30.6761 22.3237C31.8271 22.4372 33.0178 22.0532 33.8994 21.1716L39.5562 15.5147C41.1183 13.9526 41.1183 11.42 39.5562 9.85788L38.142 8.44367C36.5799 6.88157 34.0473 6.88157 32.4852 8.44367L26.8283 14.1005C26.0435 14.8853 25.653 15.915 25.6568 16.9436L22.3682 20.2322C22.1455 19.7405 21.975 19.231 21.8569 18.7119C21.2669 16.1197 21.9813 13.2907 23.9999 11.2721L29.6567 5.61524C32.7809 2.49105 37.8463 2.49105 40.9705 5.61524L42.3847 7.02945C45.5089 10.1536 45.5089 15.219 42.3847 18.3432L36.7278 24C34.7092 26.0186 31.8802 26.733 29.288 26.143ZM26.1429 29.2881C26.0029 28.6731 25.7896 28.0715 25.5028 27.4971L22.3236 30.6762C22.4371 31.8272 22.0531 33.0179 21.1715 33.8995L15.5146 39.5564C13.9525 41.1185 11.4199 41.1185 9.85776 39.5564L8.44354 38.1422C6.88145 36.5801 6.88145 34.0474 8.44355 32.4853L14.1004 26.8284C14.8852 26.0437 15.9149 25.6532 16.9435 25.6569L20.2321 22.3683C19.7404 22.1456 19.2308 21.9751 18.7118 21.857C16.1196 21.267 13.2906 21.9814 11.272 24L5.61512 29.6569C2.49092 32.7811 2.49092 37.8464 5.61512 40.9706L7.02933 42.3848C10.1535 45.509 15.2188 45.509 18.343 42.3848L23.9999 36.7279C26.0185 34.7093 26.7329 31.8803 26.1429 29.2881ZM15.5649 29.4351C15.1744 29.8256 15.1744 30.4588 15.5649 30.8493L16.9791 32.2635C17.3696 32.654 18.0028 32.654 18.3933 32.2635L31.1212 19.5356C31.5118 19.1451 31.5118 18.5119 31.1212 18.1214L29.707 16.7072C29.3165 16.3166 28.6833 16.3166 28.2928 16.7072L15.5649 29.4351Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
