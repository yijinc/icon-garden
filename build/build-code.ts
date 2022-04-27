import fs from 'fs';
import path from 'path';
import { convertCode, toCamelCase } from './utils'

const svgSourcePath = path.resolve(__dirname, '../source');


const compile = (type: 'react' | 'vue' | 'svg' | 'vue-next') => {
  const iconsDir = path.resolve(__dirname, `../packages/${type}/src/icons`);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const generateCode = (svgFilePath: string) => {
    const content = fs.readFileSync(svgFilePath, { encoding: "utf8" });
    const fileName = path.basename(svgFilePath, '.svg');
    fs.writeFileSync(path.join(iconsDir, `${toCamelCase(fileName)}.tsx`), convertCode(type, content), { encoding: "utf8" });
  };
  
  const traverseFile = (dirPath: string) => {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    files.forEach(file => {
      if (file.isFile()) {
        generateCode(path.join(dirPath, file.name))
      } else if (file.isDirectory()) {
        traverseFile(path.join(dirPath, file.name));
      }
    })
  };

  const exportCodeIntoIndex = () => {
    const fileNames = fs.readdirSync(iconsDir);
    let fileContent = '';
    fileNames.forEach(fileName => {
      const name = path.basename(fileName, path.extname(fileName));
      fileContent += `export {default as ${name}} from './icons/${name}';\n`
      fs.writeFileSync(path.resolve(iconsDir, '../index.ts'), fileContent, { encoding: "utf8" });
    })
  };

  traverseFile(svgSourcePath);
  exportCodeIntoIndex();
};

compile('react');