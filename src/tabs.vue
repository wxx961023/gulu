<template>
  <div class="tabs">
    <slot></slot>
  <div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'GuluTabs',

  props:{
    selected:{
      type:String,
      require:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['vertical','horizontal'].indexOf(value)>=0
      }
    }
  },
  created(){
    // this.$emit('update:selected','xxx')
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  mounted() {
    this.$children.forEach(vm=>{
      if(vm.$options.name === 'GuluTabsHead'){
        vm.$children.forEach(childrenVm=>{
          if(childrenVm.$options.name === 'GuluTabsItem' && childrenVm.name === this.selected){
            this.eventBus.$emit('update:selected',this.selected,childrenVm)
          }
        })
      }
    })
  },
}
</script>

<style lang='scss' scoped>
  .tabs{

  }
</style>
