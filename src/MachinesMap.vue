<template>
  <div class="container">
    <div >
      <h1>  Carte des machines </h1>
      <h2 v-show="loading" id="loader">
        Chargement de la carte...
        <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
      </h2>
      <h2 v-show="error" class="error-msg"> Request error... </h2>
      <gmap-map id="carte-machines" :center="center" :zoom="10" style="width: 70%; height: 800px" class="align-self-center">
        <gmap-marker :key="machine.id"
                     v-for="machine in machines"
                     :position="{lat:Number(machine.latitude), lng:Number(machine.longitude)}"
                     :clickable="true"
                     :draggable="true"
                     @click="center=machine.position"/>
      </gmap-map>
      </div>
  </div>
</template>

<script>

import axios from 'axios';

  export default {
    name: 'machines-map',
    data: function() {
      return {
        center: {lat: 45.188529, lng: 5.724523999999974},
        machines: [],
        loading: true,
        error: null,
      }
    },
    created() {

      axios.get('https://machine-api-campus.herokuapp.com/api/machines')
           .then(response => {
             this.loading = false;
             this.machines = response.data;

           })
           .catch(error => {
             this.loading = false;
             console.log(error);
           });
    }
  }

</script>

<style scoped>
  #carte-machines {
    max-width: 80%;
    max-height: 80%;
    margin: auto;
  }

  .error-msg {
    color : red;
  }
  #loader {
    font-size: larger;

  }

</style>

<!-- OLD METHOD
export default {
name: 'machines-map',
data () {
return {
center: {lat: 45.188529, lng: 5.724523999999974},
machines: [{
id: 1,
position: {lat: 45.188529, lng: 5.724523999999974},
}, {
id: 2,
position: {lat: 45.18554, lng: 5.728268899999989}
}]
}
}
};
 -->
