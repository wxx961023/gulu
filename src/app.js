import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Layout from './layout.vue'
import Sider from './sider.vue'
import Toast from './toast.vue'
import Plugin from './plugin.js'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'



Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(Plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)

new Vue({
  el:'#app',
  data:{
    selectedTab:['3','1']
  },
  created(){
  },
  methods: {

  },
})
