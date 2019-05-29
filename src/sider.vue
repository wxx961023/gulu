<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <!-- <button @click="visible=false">close</button> -->
    </div>
  </transition>
</template>

<script>
export default {
  name:'GuluSider',
  data(){
    return {
      visible:true,
    }
  }
}
</script>

<style lang='scss' scoped>
.sider{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  background: #666;
  position: relative;
  > button {
    position: absolute;
    right: 0;
    top:0;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.75s;
}
.slide-enter, .slide-leave-to {
  margin-left: -200px;
}
</style>
