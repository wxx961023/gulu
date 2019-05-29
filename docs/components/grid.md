---
title: Grid
---
# 网格
***
### 1. 组件介绍

网格组件功能及用法如下，支持自动均分，设置单元宽度、间隔、排列方向等功能

### 2. 组件样式展示
<br>

<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

### 3. 组件代码
```HTML
<div>
  <g-row>
    <g-col>10</g-col>
    <g-col>10</g-col>
    <g-col>10</g-col>
  </g-row>
  <br>
  <g-row>
    <g-col span="8">8</g-col>
    <g-col span="16">16</g-col>
  </g-row>
  <br>
  <g-row>
    <g-col span="8">8</g-col>
    <g-col span="6" offset="2">6</g-col>
    <g-col span="4" offset="4">4</g-col>
  </g-row>
  <br>
  <g-row>
    <g-col span="8">8</g-col>
    <g-col span="6">6</g-col>
    <g-col span="4">4</g-col>
  </g-row>
  <br>
  <g-row align="right">
    <g-col span="8">8</g-col>
    <g-col span="6">6</g-col>
    <g-col span="4">4</g-col>
  </g-row>
  <br>
  <g-row gutter="40">
    <g-col span="8">8</g-col>
    <g-col span="8">8</g-col>
    <g-col span="8">8</g-col>
  </g-row>
</div>
```