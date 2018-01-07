<template>

  <div>
    <persona></persona>
    <elemento tipo="em">Elemento section</elemento>

    <hr>

    <tareas></tareas>

  </div>

</template>

<script>

  import persona from './components/Persona.vue';
  import elemento from './components/Elemento.vue';
  import tareas from './components/Tareas.vue';

export default {

    components: {persona, elemento, tareas},

    data () {
      return {}
    }

}
</script>

<style>

</style>
