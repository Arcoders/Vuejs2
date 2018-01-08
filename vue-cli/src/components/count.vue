<template lang="pug">

    section
        h1 Cantidad {{ cantidad }}
        button(@click="reducir") Reducir
        button(@click="aumentar") Aumentar

</template>

<script>

    import {mapState, mapMutations} from 'vuex';

    export default {

          methods: mapMutations(['aumentar', 'reducir']),

/*        methods: {
            aumentar() {
                this.$store.commit('aumentar');
            },

            reducir() {
                this.$store.commit('reducir');
            }
        },*/

        computed: mapState(['cantidad']),

    }

</script>