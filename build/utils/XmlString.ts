/**
 * 转驼峰命名
 * **/
export const toCamelCase = (name: string) => {
  return name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.substring(1)).join('');
}

// for rgba(0,0,0,1) => rgba?\((,|\d)+\)
// for yellow => (?!(none|transparent))[a-z]+
// for #F60 | #FF6600 => #[a-fA-F0-9]{3,6}
// all (rgba?\((,|\d)+\)|(?!(none|transparent))[a-z]+|#[a-fA-F0-9]{3,6})
const colorReg: string = '(rgba?\\((,|\\d)+\\)|(?!(none|transparent))[a-z]+|#[a-fA-F0-9]{3,6})'

export default class XString extends String {  
  _string = '';

  constructor(str: string) {
    super(str);
    this._string = str;
  }

  public getProp = (name: string): string => {
    const regexp = new RegExp(`(?<=\\b${name}=")(\\w|#)+(?=\\b")`, 'i');
    return regexp.exec(this._string)?.[0] || '';
  }

  public setProp = (name: string, value: string) => {
    const regexp = new RegExp(`(?<=\\b${name}=)"\\w+\\b"`, 'ig');
    this._string = this._string.replace(regexp, value);
    return this;
  }

  public isWithStroke = (): boolean => /stroke/i.test(this._string);

  public getColor = (name: 'stroke' | 'fill'): string => {
    const regexp = new RegExp(`(?<=\\b${name}=")${colorReg}(?=")`, 'i');
    return regexp.exec(this._string)?.[0] || '';
  }

  public getSize = (name: 'width'|'height'): number => {
    const regexp = new RegExp(`(?<=\\b${name}=")\\d+(?=\\b")`, 'i');
    return Number(regexp.exec(this._string)?.[0]) || 0;
  }

  public setColor = (name: 'stroke' | 'fill', value: string): XString => {
    const regexp = new RegExp(`(?<=\\b${name}=)"${colorReg}"`, 'ig');
    this._string = this._string.replace(regexp, value);
    return this;
  }

  public setSize = (name: 'width'|'height', value: string): XString => {
    const regexp = new RegExp(`(?<=\\b${name}=)"\\d+\\b"`, 'i');
    this._string = this._string.replace(regexp, value);
    return this;
  }

  public toString(): string {
    return this._string
  }

}
