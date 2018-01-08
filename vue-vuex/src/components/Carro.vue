<template lang="pug">

    section
        h2 Carro de la compra
        h3 Total compra: {{ totalCompra.toFixed(2)}} $

        ul
            li(v-for='(producto, indice) in carro') {{ producto.nombre }}
                button(@click='eliminarProducto(indice)') X

</template>

<script>

    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {

        computed: {

            ...mapState(['carro']),
            ...mapGetters(['totalCompra'])

        },

        methods: mapMutations(['eliminarProducto'])

    }

</script>