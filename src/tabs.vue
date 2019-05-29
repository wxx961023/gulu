<template>
  <div class="tabs">
    <slot></slot>
  </div>
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
    if(this.$children.length === 0){
      console && console.warn &&
      console.warn('tabs的子组件应该是tabs-head和tas-body，但你没写子组件')
    }
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
    display: flex;
    flex-direction: column;
  }
</style>
