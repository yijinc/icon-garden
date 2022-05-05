/**
 * @file HelpBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-help-base-filled",
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
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM23.9997 16.9733C22.0831 16.9733 20.5839 18.4773 20.5559 20.2706L16.5564 20.2082C16.6194 16.1695 19.9596 12.9733 23.9997 12.9733C28.0778 12.9733 31.4438 16.231 31.4438 20.323C31.4438 23.2223 29.3888 25.019 27.8697 25.9575C26.6272 26.7251 26 27.7252 26 28.5625V30.0211H22V28.5625C22 25.7726 23.9241 23.6933 25.7673 22.5545C26.9042 21.8521 27.4438 21.104 27.4438 20.323C27.4438 18.5059 25.935 16.9733 23.9997 16.9733ZM22.1854 32.2121H25.8146V35.8413H22.1854V32.2121Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
