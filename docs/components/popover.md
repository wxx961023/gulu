---
title: Popover
---
# 弹出层

### 1. 组件介绍

冒泡组件功能及用法如下，支持设置冒泡方向、触发形式等功能

### 2. 组件样式展示
<br>

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

### 3. 组件代码

``` HTML
<d-popover class="pop" position="left" >
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向左冒泡</d-button>
</d-popover>
<d-popover class="pop">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向上冒泡</d-button>
</d-popover>
<d-popover class="pop" position="bottom">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向下冒泡</d-button>
</d-popover>
<d-popover class="pop" position="right">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向右冒泡</d-button>
</d-popover>
<br>
<d-popover class="pop" position="left" trigger="hover">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向左冒泡</d-button>
</d-popover>
<d-popover class="pop" trigger="hover">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向上冒泡</d-button>
</d-popover>
<d-popover class="pop" position="bottom" trigger="hover">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向下冒泡</d-button>
</d-popover>
<d-popover class="pop" position="right" trigger="hover">
    <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
    <d-button>向右冒泡</d-button>
</d-popover>
```
