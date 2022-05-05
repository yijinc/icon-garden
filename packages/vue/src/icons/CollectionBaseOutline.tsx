/**
 * @file CollectionBaseOutline
 * @author Auto Generated by IconGarden
 */

import Vue, { CreateElement, VNode } from "vue";
import { IIconProps } from "../type";

export default Vue.extend({
    name: "icon-collection-base-outline",
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
                    d="M14.3762 39.02L20.6041 36.083C22.7649 35.0641 25.2679 35.0641 27.4287 36.083L33.6566 39.02L32.7786 32.2985C32.4659 29.904 33.2514 27.4965 34.9161 25.7473L39.5852 20.841L32.8616 19.5902C30.5033 19.1514 28.4664 17.6777 27.312 15.5749L24.0164 9.5716L20.7208 15.5749C19.5664 17.6777 17.5295 19.1514 15.1712 19.5902L8.4476 20.841L13.1167 25.7473C14.7814 27.4965 15.5669 29.904 15.2542 32.2985L14.3762 39.02ZM22.3103 39.7009C23.3906 39.1914 24.6422 39.1914 25.7225 39.7009L35.2607 44.1989C36.6912 44.8735 38.3017 43.6992 38.0969 42.131L36.745 31.7804C36.5886 30.5832 36.9813 29.3794 37.8137 28.5048L45.0244 20.9279C46.1186 19.7781 45.5018 17.8731 43.9414 17.5828L33.5932 15.6577C32.4141 15.4383 31.3956 14.7014 30.8184 13.65L25.7696 4.45308C25.0102 3.06968 23.0227 3.06968 22.2632 4.45308L17.2144 13.65C16.6372 14.7014 15.6187 15.4383 14.4396 15.6577L4.09137 17.5828C2.53097 17.8731 1.91421 19.7781 3.00838 20.9279L10.2191 28.5048C11.0515 29.3794 11.4442 30.5832 11.2879 31.7804L9.93591 42.131C9.73107 43.6992 11.3416 44.8735 12.7721 44.1989L22.3103 39.7009Z"
                    fill={props.color}
                />
            </svg>
        );
    },
});
