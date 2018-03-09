<template>
  <div>
    <label for="shown-machines" v-for="machine in shownList" v-bind:machines="filteredMachine"> Afficher... </label>
    <select name="shown-machines" id="shown-machines" class="custom-select"
            v-bind:machines="shownList">
      <option value="*"> La liste complète </option>
      <option value="OK"> Les machines actives </option>
      <option value="KO"> Les machines désactivées </option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ['machines'],
    name: 'listing',
    data() {
      return {
        isShown: '*',
        options: [
          {text: 'La liste complète', value: '*'},
          {text: 'Les machines actives', value: 'OK'},
          {text: 'La machines désactivées', value: 'KO'}
        ],
        shownList: this.machines
      }
    },
    computed: {
      filteredMachine : function () {
        if (this.isShown === 'OK') {
          return this.shownList.filter ( function(machine) {
            return machine.status === "true"
          });
        } else if (this.isShown === 'KO') {
          return this.shownList.filter ( function(machine) {
            return machine.status === "false"
          });
        }
        return this.shownList;
      }
    },
  };
</script>

<style scoped>

</style>
