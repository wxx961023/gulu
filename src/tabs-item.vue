<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GuluTabsItem',
  inject:['eventBus'],
  data(){
    return{
      active:false
    }
  },
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:String | Number,
      required: true,
    }
  },
  created() {
    if(this.eventBus){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name
      })
    }
  },
  computed:{
    classes(){
      return {
        active:this.active,
        disabled:this.disabled
      }
    }
  },
  methods:{
    onClick(){
      if(this.disabled){return}
      this.eventBus.$emit('update:selected',this.name,this)
      this.$emit('click')
    }
  }
}
</script>

<style lang='scss' scoped>
  $tabs-color: #4FB0FF;
  $disabled-text-color:grey;
  .tabs-item{
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    align-items: center;
    display: flex;
    &.active{
      color:  $tabs-color;
      font-weight: bold;
    }
    &.disabled{
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
