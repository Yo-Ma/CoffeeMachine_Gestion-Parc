<template>
  <div class="container-fluid">
    <br>
    <div class="jumbotron">
      <div class="container">
        <br />
        <h1> Machine {{ name }} </h1>
        <br />
        <h3 v-if="status" class="inGreen"> Status OK </h3>
        <h3 v-else="status" class="inRed"> Status KO </h3>
        <br />
        <h5> {{ dateFormated(checkedAt) }} </h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'What else ?',
        status: true,
        checkedAt: new Date(),
      };
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
</style>
