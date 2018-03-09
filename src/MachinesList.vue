<template>
  <div>
    <h1> Liste des machines </h1>
    <machine v-for="machine in machines"
             v-bind:machine="machine"
             v-bind:key="machine.id"
             v-bind:name="machine.name"
             v-bind:status="machine.status"
             v-bind:checked-at="machine.checkedAt"/>
  </div>
</template>

<script>
  import Machine from './Machine.vue'

    export default {
      props: ['machines'],
      components: { Machine },
      name: 'machines-list',
      data: function() {
        return {
        }
      }
    };
</script>

<style scoped>


</style>
