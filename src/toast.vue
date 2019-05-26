<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <span class="line" ref="line"></span>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  <div>
</template>

<script>
export default {
  name:'GuluToast',
  data(){
    return {
    }
  },
  props:{
    autoClose:{
      type:Boolean,
      default:true
    },
    closeTime:{
      type:Number,
      default:500
    },
    closeButton:{
      type:Object,
      default(){
        return {
          text:'关闭', callback: undefined
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','middle'].indexOf(value) >= 0
      }
    }
  },
  created(){
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  computed:{
    toastClasses(){
      return {
        [`position-${this.position}`]:true
      }
    },
  },
  methods: {
    updateStyles(){
      this.$nextTick(()=>{
        this.$refs.line.style.height = 
          `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
      },this.closeTime*1000)}
    },
    close(){
      this.$el.remove()
      this.$destroy
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback()
      }
    }
  },

}
</script>

<style lang='scss' scoped>
  $toast-min-height: 40px;
  $font-size: 14px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    min-height: $toast-min-height; font-size: $font-size; position: fixed;
    line-height:1.8; background: $toast-bg; padding: 0 16px; color: white;
    display: flex; align-items: center; border-radius: 4px;
    left:50%; transform: translateX(-50%);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding: 0 16px;
    color: white;
    .message{
      padding: 8px 0;
    }
    .close{
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line{
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    &.position-top{
      top:0;
      transform: translateX(-50%);
    }
    &.position-bottom{
      bottom:0;
      transform: translateX(-50%);
    }
    &.position-middle{
      top:50%;
      transform: translate(-50%,-50%);
    }
  }
</style>
