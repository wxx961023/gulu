<template>
  <div class="layout-footer">
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
  .layout-footer{
    background: #888888;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
