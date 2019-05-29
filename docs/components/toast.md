---
title: Toast
---
# Toast

### 1. 组件介绍

弹窗组件功能及用法如下，支持设置弹窗内容、弹窗位置、自动关闭、手动关闭、关闭回调等功能

### 2. 组件样式展示
<br>

<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

### 3. 组件代码
```HTML
  <div class="toast-wrapper" ref="wrapper">
      <d-button @click="showToast1">默认弹窗样式</d-button>
      <br><br>
      <d-button @click="showToast2">设置弹窗位置</d-button>
      <br><br>
      <d-button @click="showToast3">设置关闭时间</d-button>
      <br><br>
      <d-button @click="showToast4">设置手动关闭</d-button>
      <br><br>
      <d-button @click="showToast5">设置关闭回调</d-button>
  </div>
```