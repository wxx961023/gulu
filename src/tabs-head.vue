<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" v-show="x"></div>
    <!-- v-if 会控制 div 是否显示在DOM里 -->
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'GuluTabsHead',
  data(){
    return{
      x:false
    }
  },
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(item,vm)=>{
      this.x = true
      //新增一个'更新UI任务'到任务队列中
      let {width, height, top, left} = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${width}px` 
    })
  },
}
</script>

<style lang='scss' scoped>
  $tab-height:40px;
  $blue:#4FB0FF;
  $border-color:#ddd;
  .tabs-head{
    display: flex;
    justify-content: flex-start;
    height: $tab-height;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line{
      bottom:0;
      position: absolute;
      border-bottom: 1px solid $blue; 
      transition: all 0.35s
    }
    > .action-wrapper{
      margin-left: auto;
      padding-right: .1em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
