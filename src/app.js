import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/index/index',
      'pages/my/my'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Hello World',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: "black",
      selectedColor: "#c4d08b",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath:"/static/img/icon.jpeg",
        selectedIconPath:"/static/img/icon.jpeg"
      }, {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath:"/static/img/pic.jpg",
        selectedIconPath:"/static/img/pic.jpg"
      }]
    }
  }
}