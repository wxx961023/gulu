---
title: Tabs
---
# 标签

### 1. 组件介绍

按钮组件功能及用法如下，支持添加icon，设置icon位置，加载状态，按钮形状等功能

### 2. 组件样式展示
<br>

<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

### 3. 组件代码
```HTML
<div class="tab-wrapper">
  <g-tabs selected="sport">
    <g-tabs-head>
      <g-tabs-item name="woman">美女</g-tabs-item>
      <g-tabs-item name="sport">体育</g-tabs-item>
      <g-tabs-item name="finance">经济</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="woman">我是美女新闻</g-tabs-pane>
      <g-tabs-pane name="sport">我是体育新闻</g-tabs-pane>
      <g-tabs-pane name="finance">我是经济新闻</g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
</div>
```