## Intro

The simplest SVG icon library, the reference comes from [IconPark](https://github.com/bytedance/IconPark).
The difference is that this library **only supports single-color icons**, but it may be more suitable for icons in your project

Features：

 - Only supports changing the `color` and `size` attributes.
 - Designers/developers can generate components by directly exporting (arbitrary) svg files in figma\sketch\photoshop without making svg according to drawing specifications.

## Install

```
yarn add @icon-garden/react

# for vue
yarn add @icon-garden/vue-next
```

## Usage

```jsx
import { AddBaseFilled, AddBaseOutline } from '@icon-garden/react';

<AddBaseOutline color="#b0b1b8" size="20" />
```
