<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GuluLayout',
  data(){
    return {
      layoutClass:{
        hasSider:false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'GuluSider'){
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style lang="scss"  scoped>
  .layout{
    height:60vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    color:white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    &.hasSider{
      flex-direction:row;
    }
  }
</style>
