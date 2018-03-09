<template>
  <div id="app">
    <img src="./assets/coffee-bean.jpg">
    <br />
    <h1>{{ msg }}</h1>
    <hr />
    <h2> Que souhaitez-vous faire ?</h2>
    <br />

    <router-link to="/liste-des-machines" type="button" class="btn btn-secondary"> Accéder à la liste des machines </router-link>
    <router-link to="/carte" type="button" class="btn btn-secondary"> Accéder à la carte </router-link>
    <br />
    <br />
<!--    <div class="container">
      <label for="shown-machines" class="listing-label"> Afficher... </label>
      <select name="shown-machines" id="shown-machines" class="custom-select" v-model="isShown">
        <option v-for="option in options" :value="option.value"> {{ option.text }} </option>
      </select>
      <span> Liste séléctionnée : {{ isShown }}</span>
    </div>-->
    <listing v-bind:machines="machines" />
    <br />
    <router-view />
    <br />
    <h2 v-show="loading" id="loader">
      Chargement...
      <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
    </h2>
    <h2 v-show="error" class="error-msg"> Request error... </h2>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      machines: [],
      loading: true,
      error: null,
      msg: "Site de maintenance du parc 'Coffee Machines'",
    }
  },
  created() {
    this.loading = true;
    axios.get('https://machine-api-campus.herokuapp.com/api/machines')
         .then(response => {
           this.loading = false;
           this.machines = response.data;
         })
         .catch(error => {
           this.loading = false;
           console.log(error);
         });
  },
  methods: {
    onMachineListClick: function () {
      window.alert('La liste des machines est en cours de chargement...');

    },
    onMapClick: function () {
      window.alert('La carte est en cours de chargement...');
    },
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

.error-msg {
  color : red;
}
#loader {
  font-size : larger;
}

.listing-label {
  font-size: larger;
}
  .custom-select {
    font-size: larger;
    width: 35%;
  }
</style>
