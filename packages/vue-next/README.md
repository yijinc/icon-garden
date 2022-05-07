

The simplest SVG icon library, the reference comes from [IconPark](https://github.com/bytedance/IconPark).
The difference is that this library **only supports single-color icons**, but it may be more suitable for icons in your project

## Install

```
yarn add @icon-garden/vue-next

# use npm
npm install @icon-garden/vue-next -S
```

## Usage

```vue
<template>
  <AddBaseFilled color="#b0b1b8" size="20"  />
</template>
<script>
import { AddBaseFilled } from '@icon-park/vue-next';

export default {
    components: {
        AddBaseFilled
    }
}
</script>

```
