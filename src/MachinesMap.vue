<template>
  <div class="container">
    <div >
      <h1>  Carte des machines </h1>
      <gmap-map id="carte-machines" :center="userLocate" :zoom="10" style="width: 70%; height: 800px" class="align-self-center">
        <gmap-marker :key="machine.id"
                     v-for="machine in machines"
                     :position="{lat:Number(machine.latitude), lng:Number(machine.longitude)}"
                     :clickable="true"
                     :draggable="true"
                     @click="center = machine.position"/>
      </gmap-map>
      </div>
  </div>
</template>

<script>

  export default {
    props: ['machines'],
    name: 'machines-map',
    data: function () {
      return {
        userLocate: {
          lat: 45.188529,
          lng: 5.724523999999974
        }
      }
    },
    beforeCreate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.userLocate = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
      } else {
        console.log('Geolocation is not supported by this browser')
      }
    }
  }

</script>

<style scoped>
  #carte-machines {
    max-width: 80%;
    max-height: 80%;
    margin: auto;
  }

/*  .error-msg {
    color : red;
  }
  #loader {
    font-size: larger;

  }*/

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
