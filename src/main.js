import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MachinesList from './MachinesList'
import MachinesMap from './MachinesMap'
import Machine from './Machine.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
  }
});

Vue.component('MachinesList', MachinesList);
Vue.component('MachinesMap', MachinesMap);
Vue.component('Machine', Machine);


// Définition des routes
const routes = [
  { path: '/liste-des-machines',
    component: MachinesList
  },
  { path: '/carte',
    component: MachinesMap
  },
  { path: '/machine',
    component: Machine
  }
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
