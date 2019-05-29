<template>
  <div class="tab-wrapper">
    <g-tabs selected="sport">
      <g-tabs-head>
        <g-tabs-item name="woman">美女</g-tabs-item>
        <g-tabs-item name="sport">体育</g-tabs-item>
        <g-tabs-item name="finance">经济</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">我是美女新闻</g-tabs-pane>
        <g-tabs-pane name="sport">我是体育新闻</g-tabs-pane>
        <g-tabs-pane name="finance">我是经济新闻</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
  export default {
    name:'tabs-demo',
    components:{
      'g-tabs':Tabs,
      'g-tabs-head':TabsHead,
      'g-tabs-body':TabsBody,
      'g-tabs-item':TabsItem,
      'g-tabs-pane':TabsPane,
    }
  }
</script>

<style lang='scss' scoped>

</style>
