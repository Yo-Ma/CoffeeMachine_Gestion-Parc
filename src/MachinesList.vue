<template>
  <div>
    <h1> Liste des machines </h1>
    <machine v-for="machine in machines"
             v-bind:key="machine.id"
             v-bind:name="machine.name"
             v-bind:status="machine.status"
             v-bind:checked-at="machine.checkedAt"></machine>
  </div>
</template>

<script>
  import Machine from './Machine.vue'

    export default {
      components: { Machine },
      name: 'machines-list',
      data() {
        return {
          machines: [
            { id: 1,
            name: 'What else ?',
            status: true,
            checkedAt: new Date(),
            },
            { id: 2,
            name: 'Broken',
            status: false,
            checkedAt: new Date(),
            }
          ]
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
