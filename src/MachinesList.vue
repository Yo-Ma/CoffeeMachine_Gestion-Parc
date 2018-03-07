<template>
  <div>
    <h1> Liste des machines </h1>
    <machine v-bind:name="name"
             v-bind:status="status"
             v-bind:checked-at="checkedAt"></machine>
  </div>
</template>

<script>
  import Machine from './Machine.vue'

    export default {
      components: { Machine },
      name: 'machines-list',
      data() {
        return {
          name: 'What else ?',
          status: false,
          checkedAt: new Date(),
        }
      },
      methods: {
        dateFormated: function (checkedAt) {
          return checkedAt.toLocaleString();
        }
      }
    };
</script>

<style scoped>

</style>
