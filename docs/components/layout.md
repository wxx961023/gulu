---
title: Layout
---

# 布局
***

### 1. 组件介绍

布局组件功能及用法如下，支持常见基础布局

### 2. 组件样式展示
<br>

<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

### 3. 组件代码

```HTML
<div>
    <g-layout>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
        <g-footer>Footer</g-footer>
    </g-layout>
    <br>
    <g-layout>
        <g-header>Header</g-header>
        <g-layout>
            <g-sider>Sider</g-sider>
            <g-content>Content</g-content>
        </g-layout>
        <g-footer>Footer</g-footer>
    </g-layout>
    <br>
    <g-layout>
        <g-sider>Sider</g-sider>
        <g-layout>
            <g-header>Header</g-header>
            <g-content>Content</g-content>
            <g-footer>Footer</g-footer>
        </g-layout>
    </g-layout>
</div>
```