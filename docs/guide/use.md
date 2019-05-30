---
title: 使用方法
---

# 快速上手

### 添加CSS样式
使用本框架前，请在 CSS 中使用 border-box

```CSS
*，*::before,*::after{ box-sizing: border-box }
```
IE 8 及以上浏览器支持此样式。

### 引入 UI 组件
```JS
import { Button } from 'jd-wheels'
import 'jd-wheels/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button
  }
}
```