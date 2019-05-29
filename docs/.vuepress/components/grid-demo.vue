<template>
  <div  class="grid-wrapper">
    <g-row>
      <g-col>10</g-col>
      <g-col>10</g-col>
      <g-col>10</g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="8">8</g-col>
      <g-col span="16">16</g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="8">8</g-col>
      <g-col span="6" offset="2">6</g-col>
      <g-col span="4" offset="4">4</g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="8">8</g-col>
      <g-col span="6">6</g-col>
      <g-col span="4">4</g-col>
    </g-row>
    <br>
    <g-row align="right">
      <g-col span="8">8</g-col>
      <g-col span="6">6</g-col>
      <g-col span="4">4</g-col>
    </g-row>
    <br>
    <g-row gutter="40">
      <g-col span="8">8</g-col>
      <g-col span="8">8</g-col>
      <g-col span="8">8</g-col>
    </g-row>
  </div>
</template>

<script>
  import Row from '../../../src/Row'
  import Col from '../../../src/Col'
  export default {
    name: "grid-demo",
    components:{
      'g-row':Row,
      'g-col':Col
    }
  }
</script>

<style lang='scss' scoped>

</style>
