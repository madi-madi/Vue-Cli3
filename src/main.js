import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router'

import routes from "./routes";

Vue.use(VueRouter);
const router =  new VueRouter({
  mode:"history",
  routes : routes
});

// router.beforeEach((to, from, next) => {
//   console.log('to  ' + to.path );
//   console.log('from  ' + from.path);
  
//   next();
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
