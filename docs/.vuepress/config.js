module.exports = {
  base:'/gulu/',
  title: '轱辘 UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav:[
      {text: 'Home', link: '/'},
      {text: 'GitHub', link: 'https://github.com/wxx961023/gulu'}
    ],
    sidebar: [
      {
        title:'入门',
        children:[
          '/guide/introduction',
          '/guide/install', 
          '/guide/use',
        ]
      }, 
      {
        title:'组件',
        children:[
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast', 
          '/components/collapse',
          '/components/popover',          
        ]
      }
    ]
  }
}