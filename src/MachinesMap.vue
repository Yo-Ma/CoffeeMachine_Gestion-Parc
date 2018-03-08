<template>
  <div class="container">
    <div id="carte-machines">
      <h1>  Carte des machines </h1>
      <gmap-map :center="center" :zoom="10" style="width: 70%; height: 800px" class="align-self-center">
        <gmap-marker :key="id"
                     v-for="(m, id) in machines"
                     :position="m.position"
                     :clickable="true"
                     :draggable="true"
                     @click="center=m.position"/>
      </gmap-map>
      </div>
  </div>
</template>

<script>
    export default {
      name: 'machines-map',
      data () {
        return {
          center: {lat: 45.188529, lng: 5.724523999999974},
          machines: [{
            id: 1,
            position: {lat: 45.188529, lng: 5.724523999999974}
          }, {
            id: 2,
            position: {lat: 45.18554, lng: 5.728268899999989}
          }]
        }
      }
    };
</script>

<style scoped>
  #carte-machines {
    margin: auto;
  }

</style>
