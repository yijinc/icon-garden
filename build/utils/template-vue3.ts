import prettier from 'prettier';
import XString, {toCamelCase} from "./XmlString";

export default (name: string, content: string): string => {
	const xml = new XString(content);
  const defaultSize = xml.getSize('height');
  const defaultColor = xml.getColor(xml.isWithStroke() ? 'stroke' : 'fill');
  xml
		.setSize('width', '{props.size}')
		.setSize('height', '{props.size}')
		.setColor('fill', '{props.color}')
		.setColor('stroke', '{props.color}');
	const str = `
	/**
   * @file ${toCamelCase(name)}
 * @author Auto Generated by IconGarden
 */

  import Vue from 'vue';
  import { IIconProps } from '../type';
 
 export default Vue.defineComponent({
   name: 'icon-${name}',
   props: {
     size: {
       type: [Number, String],
       default: ${defaultSize},
     },
     color: {
      type: String,
      default: '${defaultColor}',
     }
   },
   setup: (props: IIconProps) => {
     return (
       ${xml.toString()}
     );
   }
 })
	`;
	return prettier.format(str, {
		parser: 'babel',
		tabWidth: 4,
	});
};