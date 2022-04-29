import convertReact from './template-react';
import convertVue from './template-vue';
import convertVue3 from './template-vue3';
import convertSvg from './template-svg';

/**
 * svg代码转化成 'react' | 'vue' | 'svg' | 'vue-next' 对应代码
 * **/
export const convertCode = (type: 'react' | 'vue' | 'svg' | 'vue-next', fileName: string, fileContent: string): string => {
  switch(type) {
    case 'react': return convertReact(fileName, fileContent);
    case 'vue': return convertVue(fileName, fileContent);
    case 'svg': return convertSvg(fileName, fileContent);
    case 'vue-next': return convertVue3(fileName, fileContent);
    default: return '';
  }
}

/**
 * 转驼峰命名
 * **/
export const toCamelCase = (name: string) => {
  return name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.substring(1)).join('');
}
