<template lang="pug">

    section
        h1 Cantidad {{ cantidad }}
        button(@click="reducirAsync(5)") Reducir
        button(@click="aumentarAsync({cantidad: 10})") Aumentar

</template>

<script>

    import {mapState, mapMutations, mapActions} from 'vuex';

    export default {

         //  methods: mapMutations(['aumentar', 'reducir']),
           methods: mapActions(['aumentarAsync', 'reducirAsync']),

/*        methods: {
            aumentar() {
                this.$store.commit('aumentar');
                this.$store.dispatch('aumentarAsync');
            },

            reducir() {
                this.$store.commit('reducir');
                this.$store.dispatch('reducirAsync');
            }
        },*/

        computed: mapState(['cantidad']),

    }

</script>