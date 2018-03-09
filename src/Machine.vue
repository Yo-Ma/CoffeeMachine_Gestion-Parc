<template>
  <div>
    <br>
    <div class="container-fluid">
      <div id="infos-machine" class="container">
        <br />
        <h1> Machine <b> {{ machine.name }} </b></h1>
        <br />
        <h3 v-if="machine.status" class="inGreen"> Status OK </h3>
        <h3 v-else="machine.status" class="inRed"> Status KO </h3>
        <br />
        <h5> Dernière vérification faite le : {{ dateFormated(machine.checkedAt) }} </h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['machine'],
    name: 'Machine',
    data() {
      return {

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
  .inGreen {
    color: green;
  }

  .inRed {
    color: red;
  }

  #infos-machine {
    border: solid black 2px;
  }
</style>
