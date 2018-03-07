import Vue from 'vue'
import App from './App.vue'
import MachinesList from './MachinesList'
import MachinesMap from './MachinesMap'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.component('MachinesList', MachinesList);
Vue.component('MachinesMap', MachinesMap);


// Définition des routes
const routes = [
  { path: '/liste-des-machines', component: MachinesList },
  { path: '/carte', component: MachinesMap }
];

// Raccourci pour `routes: routes`
const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
