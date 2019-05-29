<template>
  <div class="layout-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {

    }
  }
}
</script>

<style lang="scss"  scoped>
  .layout-content{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #bbbbbb;
    flex-grow:1;
  }
</style>
