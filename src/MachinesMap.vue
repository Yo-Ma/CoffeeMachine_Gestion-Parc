<template>
  <div class="container">
    <div >
      <h1>  Carte des machines </h1>
      <h2 v-if="loading"> Chargement de la carte...</h2>
      <h2 v-if="error" class="error-msg"> Request error... </h2>
      <gmap-map id="carte-machines" :center="{lat: 45.188529, lng: 5.724523999999974}" :zoom="10" style="width: 70%; height: 800px" class="align-self-center">
        <gmap-marker :key="id"
                     v-for="(m, id) in machines"/>
                     <!--:position="m.position"
                     :clickable="true"
                     :draggable="true"
                     @click="center=m.position"-->
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
        machines: [],
        loading: false,
        error: null,
      }
    },
    created() {
      axios.get('https://machine-api-campus.herokuapp.com/api/machines')
           .then(function (response) {
             console.log(response);
           })
           .catch(function (error) {
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
