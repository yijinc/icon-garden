最简单的SVG图标库，参考来源于 [IconPark](https://github.com/bytedance/IconPark)。
不同的是 这个库 **仅支持单色图标**，但它可能更适用于您项目中的图标

特点：

 - 只支持改变`color` 和 `size` 两个属性。
 - 设计/开发 无需按照绘制规范制作svg，在 figma\sketch\photoshop 等直接导出（任意）svg文件即可生成组件

## 安装

```
yarn add @icon-garden/react

# for vue
yarn add @icon-garden/vue-next
```

## 使用

```jsx
import { AddBaseFilled, AddBaseOutline } from '@icon-garden/react';

<AddBaseOutline color="#b0b1b8" size="20" />
```
