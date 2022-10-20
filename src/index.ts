import { createApp } from "vue/dist/vue.esm-browser";
// import SButton from './button'

// import SFCButton from './SFCButton.vue'
// import JSXButton from './JSXButton'

// createApp(SButton).mount('#app')
// createApp(SFCButton).mount('#app')
// createApp(JSXButton).mount('#app')

import  ThursdayUI  from './entry'


createApp({
  template:`<div>
    <SButton>普通按钮</SButton>
  </div>`
}).use(ThursdayUI).mount('#app')