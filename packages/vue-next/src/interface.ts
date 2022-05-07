import { App } from 'vue';
import * as IconMap from './map';

export type IIconProps = {
  // 图标大小
  size: number | string;

  // 图标颜色
  color: string;
}

export const install = (Vue: App): void => {
  Object.values(IconMap).forEach(icon => {
    Vue.component(icon.name, icon)
  });
}
