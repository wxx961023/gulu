<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  <div>
</template>

<script>
export default {
  name:'GuluPopover',
  data(){
    return {
      visible:false,
    }
  },
  methods:{
    xxx(){
      this.visible = !this.visible
      if(this.visible === true){
        this.$nextTick(()=>{
          document.body.appendChild(this.$refs.contentWrapper)
          let {width,top,left,right} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollY +'px'
          this.$refs.contentWrapper.style.top = top+window.scrollX+'px'
          let eventHandler = ()=>{
            this.visible = false
            document.removeEventListener('click',eventHandler)
          }
          document.addEventListener('click',eventHandler)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align:top;
    position: relative;
  }
  .content-wrapper{
      position: absolute;
      border: 1px solid pink;
      transform: translateY(-100%);
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75)
    }
</style>
