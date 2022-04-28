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
    const regexp = new RegExp(`(?<=\\b${name}=")[^none](\\w|#)+(?=\\b")`, 'i');
    return regexp.exec(this._string)?.[0] || '';
  }

  public getSize = (name: 'width'|'height'): number => {
    const regexp = new RegExp(`(?<=\\b${name}=")\\d+(?=\\b")`, 'i');
    return Number(regexp.exec(this._string)?.[0]) || 0;
  }

  public setColor = (name: 'stroke' | 'fill', value: string): XString => {
    const regexp = new RegExp(`(?<=\\b${name}=)"[^none](\\w|#)+\\b"`, 'ig');
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
