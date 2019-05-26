<template>
  <div class="tabs-body">
    <slot></slot>
  <div>
</template>

<script>
export default {
  name:'GuluTabsBody',
  inject:['eventBus'],
  data(){
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
  .tab-body{

  }
</style>
