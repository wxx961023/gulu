<template>
    <div>
        <g-layout>
            <g-header>Header</g-header>
            <g-content>Content</g-content>
            <g-footer>Footer</g-footer>
        </g-layout>
        <br>
        <g-layout>
            <g-header>Header</g-header>
            <g-layout>
                <g-sider>Sider</g-sider>
                <g-content>Content</g-content>
            </g-layout>
            <g-footer>Footer</g-footer>
        </g-layout>
        <br>
        <g-layout>
            <g-sider>Sider</g-sider>
            <g-layout>
                <g-header>Header</g-header>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
            </g-layout>
        </g-layout>
    </div>
</template>

<script>
import Vue from 'vue'
import Layout from '../../../src/Layout'
import Header from '../../../src/Header'
import Content from '../../../src/Content'
import Sider from '../../../src/Sider'
import Footer from '../../../src/Footer'

Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
export default {
  name: "layout-demo" 
}
</script>

<style lang="scss">

</style>

