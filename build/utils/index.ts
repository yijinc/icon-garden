import convertReact from './template-react';
import convertVue from './template-vue';
import convertVue3 from './template-vue3';
import convertSvg from './template-svg';

/**
 * svg代码转化成 'react' | 'vue' | 'svg' | 'vue-next' 对应代码
 * **/
export const convertCode = (type: 'react' | 'vue' | 'svg' | 'vue-next', svgString: string): string => {
  switch(type) {
    case 'react': return convertReact(svgString);
    case 'vue': return convertVue(svgString);
    case 'svg': return convertSvg(svgString);
    case 'vue-next': return convertVue3(svgString);
    default: return '';
  }
}

/**
 * 转驼峰命名
 * **/
export const toCamelCase = (name: string) => {
  return name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.substring(1)).join('');
}