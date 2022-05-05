/**
 * @file WechatBaseFilled
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-wechat-base-filled",
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
                    d="M17.561 32.0411C17.866 32.0411 18.169 32.0338 18.4697 32.0194C18.2713 31.2147 18.1672 30.3823 18.1672 29.5301C18.1672 22.7712 24.7132 17.2582 32.9212 16.9704C31.7228 10.7955 25.302 6.08057 17.561 6.08057C8.96689 6.08057 2 11.892 2 19.0608C2 22.1233 3.27142 24.9381 5.39796 27.1579L4.92905 31.856C4.84586 32.6896 5.65808 33.3264 6.44775 33.0468L11.8423 31.1365C13.6126 31.7203 15.5419 32.0411 17.561 32.0411ZM42.7328 37.0778C44.7649 35.1654 46 32.6427 46 29.8777C46 23.9037 40.2343 19.0608 33.122 19.0608C26.0096 19.0608 20.2439 23.9037 20.2439 29.8777C20.2439 35.8517 26.0096 40.6946 33.122 40.6946C34.1989 40.6946 35.2449 40.5836 36.2447 40.3744L41.866 42.0778C42.6736 42.3225 43.4587 41.6377 43.3261 40.8043L42.7328 37.0778ZM11.6585 16.8975C12.8439 16.8975 13.8049 15.9289 13.8049 14.7341C13.8049 13.5393 12.8439 12.5707 11.6585 12.5707C10.4731 12.5707 9.51219 13.5393 9.51219 14.7341C9.51219 15.9289 10.4731 16.8975 11.6585 16.8975ZM24.5366 14.7341C24.5366 15.9289 23.5757 16.8975 22.3903 16.8975C21.2049 16.8975 20.2439 15.9289 20.2439 14.7341C20.2439 13.5393 21.2049 12.5707 22.3903 12.5707C23.5757 12.5707 24.5366 13.5393 24.5366 14.7341ZM27.7561 28.796C28.9415 28.796 29.9024 27.8275 29.9024 26.6327C29.9024 25.4379 28.9415 24.4693 27.7561 24.4693C26.5707 24.4693 25.6097 25.4379 25.6097 26.6327C25.6097 27.8275 26.5707 28.796 27.7561 28.796ZM40.6341 26.6327C40.6341 27.8275 39.6732 28.796 38.4878 28.796C37.3024 28.796 36.3414 27.8275 36.3414 26.6327C36.3414 25.4379 37.3024 24.4693 38.4878 24.4693C39.6732 24.4693 40.6341 25.4379 40.6341 26.6327Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
