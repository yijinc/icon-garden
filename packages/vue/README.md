

The simplest SVG icon library, the reference comes from [IconPark](https://github.com/bytedance/IconPark).
The difference is that this library **only supports single-color icons**, but it may be more suitable for icons in your project

## Install

```
yarn add @icon-garden/vue

# use npm
npm install @icon-garden/vue -S
```

## Usage

```vue
<template>
  <add-base-filled color="#b0b1b8" size="20"  />
</template>
<script>
import { AddBaseFilled } from '@icon-garden/vue';

export default {
    components: {
        AddBaseFilled
    }
}
</script>

```

you can also install icons globally.

```typescript
import { install } from '@icon-garden/vue';
import Vue from 'vue';

// Install
install(Vue);
```
