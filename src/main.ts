import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import '../style.scss'
import VueRouter from 'vue-router'
import stroe from './store/store'
// import vuex from 'vuex'
// import Store from './store/store.js'
const uselist = {
  stroe,
}
createApp(App).use(uselist.stroe).mount('#app')

// new Vue({

// })
