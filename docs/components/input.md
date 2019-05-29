---
title: Input
---
# 输入框

### 1. 组件介绍

输入框组件功能及用法如下，支持disabled、readonly、error及双向绑定

### 2. 组件样式展示
<br>

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

### 3. 组件代码
```HTML
<div>
  <g-input value="默认内容"></g-input>
  <br>
  <br>
  <g-input value="禁用" disabled></g-input>
  <br>
  <br>
  <g-input value="只读" readonly></g-input>
  <br>
  <br>
  <g-input value="默认内容" :error="errorInfo"></g-input>
  <br>
  <br>
  <g-input v-model="model"></g-input> {{model}}
</div>
```