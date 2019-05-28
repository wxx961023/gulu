<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    return {visible:false}
  },
  methods:{
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e){
      if(this.$refs.popover && 
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ){return}
      if(this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return }
      console.log('你不应该看到这');
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(()=>{
        this.positionContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click',this.onClickDocument)
    },

    onClick(event){
      console.log(1);
      if(this.$refs.triggerWrapper.contains(event.target)){
        if(this.visible === true){
          this.close()
        }else{
          this.open()
        }
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
