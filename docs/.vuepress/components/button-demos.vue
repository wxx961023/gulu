<template>
  <div>
    <g-button>按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button icon="settings" icon-position="right">设置</g-button>
    <g-button icon="thumbs-up">点赞</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button icon="download">下载</g-button>
    <g-button disabled>禁止点击</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    components:{
      'g-button':Button
    },  
  }
</script>
 
