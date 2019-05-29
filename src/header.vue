<template>
  <div class="layout-header">
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
  .layout-header{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
    height: 10%;
  }
</style>
