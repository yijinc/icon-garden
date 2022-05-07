/**
 * @file InvisiblelBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-invisiblel-base-filled",
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
                    d="M16.9879 26.0535C14.7042 25.6089 12.496 24.9514 10.3851 24.1024L7.45805 29.1723C7.1819 29.6506 6.57031 29.8144 6.09202 29.5383L4.35997 28.5383C3.88168 28.2622 3.7178 27.6506 3.99394 27.1723L6.74876 22.4008C5.34028 21.6443 3.98725 20.7982 2.69751 19.87L6.20227 15C11.2105 18.6042 17.3541 20.7267 23.9978 20.7267C30.636 20.7267 36.7749 18.6078 41.7808 15.009L45.2831 19.8808C44.0857 20.7416 42.8339 21.5317 41.5338 22.245L43.8216 26.2076C44.0977 26.6859 43.9339 27.2974 43.4556 27.5736L41.7235 28.5736C41.2452 28.8497 40.6336 28.6859 40.3575 28.2076L37.9156 23.9781C36.0144 24.7629 34.0325 25.3918 31.9863 25.8489C32.0058 25.9027 32.0209 25.9589 32.0312 26.0171L33.0731 31.926C33.169 32.4699 32.8058 32.9885 32.2619 33.0844L30.2923 33.4317C29.7484 33.5276 29.2298 33.1645 29.1339 32.6206L28.092 26.7117C28.0795 26.6407 28.0748 26.5702 28.0773 26.501C26.7377 26.6501 25.3765 26.7267 23.9978 26.7267C22.9552 26.7267 21.9226 26.6829 20.9017 26.5971C20.9125 26.6908 20.9101 26.7877 20.8929 26.8853L19.851 32.7942C19.7551 33.3381 19.2364 33.7012 18.6925 33.6053L16.7229 33.258C16.179 33.1621 15.8159 32.6435 15.9118 32.0996L16.9537 26.1907C16.962 26.1436 16.9735 26.0977 16.9879 26.0535Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
