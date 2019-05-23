import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue';
import Col from './col.vue'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)

new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false,
    message:'hi'
  },
  methods: {
    changeInput(e){
      console.log(1);
      console.log(e.target.value);
    }
  },
})

// //单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// let expect = chai.expect
// {
//   // 测试按钮含有icon
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'settings'
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-settings')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'settings',
//       loading:true
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'settings',
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'settings',
//       iconPosition:'right'
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'settings',
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(function(){})
//   vm.$on('click',spy)
//   let button = vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }