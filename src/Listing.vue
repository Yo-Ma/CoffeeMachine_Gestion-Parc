<template>
  <div>
    <label for="shown-machines" class="listing-label" v-bind:machines="filteredMachine"> Afficher... </label>
    <select name="shown-machines" id="shown-machines" class="custom-select" v-model="isShown">
      <option v-for="option in options" :value="option.value"> {{ option.text }} </option>
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
    methods: {
      filteredMachine : function () {
        if (this.isShown === 'OK') {
          console.log( this.shownList.filter ( function(machine) {
            return machine.status === "true"
          }));
        } else if (this.isShown === 'KO') {
          console.log( this.shownList.filter ( function(machine) {
            return machine.status === "false"
          }));
        }
        console.log(this.shownList);
      }
    },
  };
</script>

<style scoped>

</style>
