<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  <div>
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
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        console.log(`我${this.name}被选中了`);
      }else{
        console.log(`我${this.name}没被选中`);
      }
      
    })
  },
  methods:{
    xxx(){
     
    }
  }
}
</script>

<style lang='scss' scoped>
  .tabs-item{
    padding: 0 1em;
  
  }
</style>
