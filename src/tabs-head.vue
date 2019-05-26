<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  <div>
</template>

<script>
export default {
  name:'GuluTabsHead',
  inject:['eventBus'],
  data(){
    return {

    }
  },
  created() {
  },
}
</script>

<style lang='scss' scoped>
  $tab-height:40px;
  .tabs-head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    height: $tab-height;
    vertical-align: center;
    > .action-wrapper{
      margin-left: auto;
      padding-right: .5em;
    }
  }
</style>
