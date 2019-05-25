<template>
  <div class="toast">
    <slot></slot>
  <div>
</template>

<script>
export default {
  name:'GuluToast',
  data(){
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
  $toast-height: 40px;
  $font-size: 14px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    height: $toast-height; font-size: $font-size; position: fixed;
    top: 0; left:50%; transform: translateX(-50%); line-height:1.8;
    display: flex; align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding: 0 16px;
    color: white;
  }
</style>
