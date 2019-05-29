---
title: Collapse
---

# 折页
***

### 1. 组件介绍

折页组件功能及用法如下，支持添加箭头，单页显示等功能

### 2. 组件样式展示
<br>

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

### 3. 组件代码

``` HTML
<d-collapse :selected.sync="currentSelected">
    <d-collapse-item title="标题1" name="1">第一个内容</d-collapse-item>
    <d-collapse-item title="标题2" name="2">第二个内容</d-collapse-item>
    <d-collapse-item title="标题3" name="3">第三个内容</d-collapse-item>
</d-collapse>

<d-collapse :selected.sync="currentSelected" arrow>
    <d-collapse-item title="标题1" name="1">第一个内容</d-collapse-item>
    <d-collapse-item title="标题2" name="2">第二个内容</d-collapse-item>
    <d-collapse-item title="标题3" name="3">第三个内容</d-collapse-item>
</d-collapse>

<d-collapse :selected.sync="currentSelected" arrow single>
    <d-collapse-item title="标题1" name="1">第一个内容</d-collapse-item>
    <d-collapse-item title="标题2" name="2">第二个内容</d-collapse-item>
    <d-collapse-item title="标题3" name="3">第三个内容</d-collapse-item>
</d-collapse>
```

