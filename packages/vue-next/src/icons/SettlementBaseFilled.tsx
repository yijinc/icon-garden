/**
 * @file SettlementBaseFilled
 * @author Auto Generated by IconGarden
 */

import { defineComponent } from "vue";
import { IIconProps } from "../interface";

export default defineComponent({
    name: "icon-settlement-base-filled",
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
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.125 24C45.125 35.598 35.723 45 24.125 45C12.527 45 3.125 35.598 3.125 24C3.125 12.402 12.527 3 24.125 3C35.723 3 45.125 12.402 45.125 24ZM20.125 16H16.125L20.125 22H18.125V25H22.625V27H18.125V30H22.625V34H25.625V30H30.125V27H25.625V25H30.125V22H28.125L32.125 16H28.125L24.125 22L20.125 16Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
