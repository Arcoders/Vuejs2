<template>

  <div>
    <persona></persona>
    <elemento tipo="em">Elemento section</elemento>

    <hr>

    <tareas></tareas>

    <hr>

    <contador></contador>

    <strong>Mi nombre: {{ nombre }} vivo en {{ ciudad }}</strong>

  </div>

</template>

<script>

  import persona from './components/Persona.vue';
  import elemento from './components/Elemento.vue';
  import tareas from './components/Tareas.vue';
  import contador from './components/Contador.vue';

  import {mapState} from 'vuex';

export default {

    components: {persona, elemento, tareas, contador},

    computed: mapState(['nombre', 'ciudad']),

}
</script>

<style>

</style>
