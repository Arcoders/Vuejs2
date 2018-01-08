<template>

  <div>

    <count></count>

    <tareas_dos></tareas_dos>
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
  import tareas_dos from './components/Tareas_dos.vue';
  import count from './components/count.vue';

  import {mapState} from 'vuex';

export default {

    components: {persona, elemento, tareas, contador, tareas_dos, count},

    computed: mapState(['nombre', 'ciudad']),

}
</script>

<style>

</style>
