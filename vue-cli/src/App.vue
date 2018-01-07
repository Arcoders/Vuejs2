<template>

  <div>
    <persona></persona>
    <elemento tipo="em">Elemento section</elemento>
  </div>

</template>

<script>

  import persona from './components/Persona.vue';
  import elemento from './components/Elemento.vue';

export default {

    components: {persona, elemento},

    data () {
      return {}
    }

}
</script>

<style>

</style>
