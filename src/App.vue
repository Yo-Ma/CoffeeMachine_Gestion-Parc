<template>
  <div id="app">
    <img src="./assets/coffee-bean.jpg">
    <h1>{{ msg }}</h1>
    <hr />
    <h2> Que souhaitez-vous faire ?</h2>
    <br />
    <router-link to="/liste-des-machines" type="button" class="btn btn-secondary"> Accéder à la liste des machines </router-link>
    <router-link to="/carte" type="button" class="btn btn-secondary"> Accéder à la carte </router-link>
    <br />
    <router-view></router-view>
    <br />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: "Site de maintenance du parc 'Coffee Machines'"
    }
  },
  methods: {
    onMachineListClick: function () {
      window.alert('La liste des machines est en cours de chargement...');

    },
    onMapClick: function () {
      window.alert('La carte est en cours de chargement...');
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
