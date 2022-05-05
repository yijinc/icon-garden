/**
 * @file SettingsBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-settings-base-filled",
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
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.7466 3.16037C25.5069 2.44264 23.978 2.44264 22.7383 3.16036L7.73829 11.8446C6.50302 12.5597 5.74243 13.8789 5.74243 15.3063L5.74243 32.6939C5.74243 34.1212 6.50302 35.4404 7.73828 36.1556L22.7383 44.8398C23.978 45.5575 25.5069 45.5575 26.7466 44.8398L41.7466 36.1556C42.9818 35.4404 43.7424 34.1212 43.7424 32.6939V15.3063C43.7424 13.8789 42.9818 12.5597 41.7466 11.8446L26.7466 3.16037ZM24.7424 33.0001C19.7719 33.0001 15.7424 28.9706 15.7424 24.0001C15.7424 19.0295 19.7719 15.0001 24.7424 15.0001C29.713 15.0001 33.7424 19.0295 33.7424 24.0001C33.7424 28.9706 29.713 33.0001 24.7424 33.0001Z"
                    fill={props.color}
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.7424 24.0001C19.7424 26.7615 21.981 29.0001 24.7424 29.0001C27.5039 29.0001 29.7424 26.7615 29.7424 24.0001C29.7424 21.2387 27.5039 19.0001 24.7424 19.0001C21.981 19.0001 19.7424 21.2387 19.7424 24.0001Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
