<template>

  <div>
    <persona></persona>
    <elemento tipo="em">Elemento section</elemento>

    <hr>

    <tareas></tareas>

    <hr>

    <contador></contador>

  </div>

</template>

<script>

  import persona from './components/Persona.vue';
  import elemento from './components/Elemento.vue';
  import tareas from './components/Tareas.vue';
  import contador from './components/Contador.vue';

export default {

    components: {persona, elemento, tareas, contador},


}
</script>

<style>

</style>
