<template>
  <div>
    <g-input value="默认内容"></g-input>
    <br>
    <br>
    <g-input value="禁用" disabled></g-input>
    <br>
    <br>
    <g-input value="只读" readonly></g-input>
    <br>
    <br>
    <g-input value="默认内容" :error="errorInfo"></g-input>
    <br>
    <br>
    <g-input v-model="model"></g-input> {{model}}
  </div>
</template>

<script>
  import Input from '../../../src/Input'  
  export default {
    name:'input-demo',
    components:{
      'g-input':Input
    },
    data() {
      return{
        errorInfo: '名字不能少于五个字',
        model:'支持v-model双向绑定'
      }
     },
    
  }
</script>

<style lang='scss' scoped>

</style>
