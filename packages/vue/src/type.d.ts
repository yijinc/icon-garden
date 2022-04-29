import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

export type IIconProps = {
  // 图标大小
  size: number | string;

  // 图标颜色
  color: string;
}