<template>
  <button class="g-button 13" 
  :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')"
  >
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>

    <g-icon class="loading icon" v-show="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
  // props:['icon','iconPosition']
  components:{
    'g-icon':Icon
  },
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  },
}
</script>

<style lang="scss">
  @keyframes spin{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .loading{
    animation:spin 1.5s infinite linear
  }
  .g-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding:0 0.9em 1px;
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-block;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover{
      border-color:var(--border-color-hover)
    }
    &:active{
      background-color:var(--button-active-bg)
    }
    &:focus{ outline: none;}
    &.icon-left{
      > .icon{order: 1 ;margin-right: 0.3em;}
      > .content{order: 2;}
    }
    &.icon-right{
      > .icon{order: 2;margin-right: 0;margin-left: 0.3em;}
      > .content{order: 1;}
    }
  }
</style>
