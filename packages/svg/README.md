

The simplest SVG icon library, the reference comes from [IconPark](https://github.com/bytedance/IconPark).
The difference is that this library **only supports single-color icons**, but it may be more suitable for icons in your project

## Install

```
yarn add @icon-garden/svg

# use npm
npm install @icon-garden/svg -S
```

## Usage

```js
import { AddBaseFilled, AddBaseOutline } from '@icon-garden/svg';

const svgString = AddBaseFilled({ size: 20, color: 'yellow' });

```

