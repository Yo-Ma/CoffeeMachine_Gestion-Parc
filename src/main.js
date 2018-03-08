import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MachinesList from './MachinesList'
import MachinesMap from './MachinesMap'
import Machine from './Machine.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

// Another way to safetly inculde an APIKey
// require('GMapAPI.js')
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: myKey
//   }
// });

Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: require('../GMapAPI.json').key, // Another way to safetly include an APIKey
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
