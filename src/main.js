import Vue from 'vue'
import App from './App.vue'
import MachinesList from './MachinesList'
import MachinesMap from './MachinesMap'

Vue.component('MachinesList', MachinesList);
Vue.component('MachinesMap', MachinesMap);


new Vue({
  el: '#app',
  render: h => h(App)
})
