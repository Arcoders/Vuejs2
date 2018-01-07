<template lang="pug">

    main
        tareas_restantes
        ul
            li(v-for='tarea in tareas') {{ tarea.nombre }}

</template>

<script>

    import tareas_restantes from './Treas_restantes.vue';
    import {mapState} from 'vuex';

    export default {

        components: {tareas_restantes},

        data() {
            return {
                //...
            }
        },

        methods: {
            //...
        },

        computed: mapState(['tareas']),

    }

</script>

<style>
    li a {
        color: cadetblue;
        font-weight: bold;
        text-decoration: none;
    }
</style>