<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .g-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding:0 0.9em 1px;
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-block;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover{
      border-color:var(--border-color-hover)
    }
    &:active{
      background-color:var(--button-active-bg)
    }
    &:focus{ outline: none;}
    &.icon-left{
      > .icon{order: 1 ;margin-right: 0.3em;}
      > .content{order: 2;}
    }
    &.icon-right{
      > .icon{order: 2;margin-right: 0;margin-left: 0.3em;}
      > .content{order: 1;}
    }
  }
</style>
