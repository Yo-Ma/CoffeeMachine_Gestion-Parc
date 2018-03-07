<template>
  <div>
    <h1>  Carte des machines </h1>
    <gmap-map :center="{lat:45.188529, lng:5.724523999999974}" :zoom="4" style="width: 100%; height: 800px" />
  </div>
</template>

<script>
    export default {
        name: 'machines-map'
    };
</script>

<style scoped>

</style>
