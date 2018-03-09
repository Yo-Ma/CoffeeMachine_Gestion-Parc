<template>
  <div>
    <h1> Liste des machines </h1>
    <machine v-for="machine in machines"
             v-bind:machine="machine"
             v-bind:key="machine.id"/>
<!--         v-bind:name="machine.name"
             v-bind:status="machine.status"
             v-bind:checked-at="machine.checkedAt"/>-->
  </div>
</template>

<script>
  import Machine from './Machine.vue'
 /* import axios from 'axios'*/

    export default {
      components: { Machine },
      name: 'machines-list',
      data: function() {
        return {
/*          machines: [],
          loading: true,
          error: null,*/
        }
      },
/*      created() {
        axios.get('https://machine-api-campus.herokuapp.com/api/machines')
             .then(response => {
               this.loading = false;
               this.error = null;
               this.machines = response.data;
             })
             .catch(error => {
               this.loading = false;
               this.error = error;
             });
      },*/
      methods: {
        dateFormated: function (checkedAt) {
          return checkedAt.toLocaleString();
        }
      }
    };
</script>

<style scoped>


</style>
