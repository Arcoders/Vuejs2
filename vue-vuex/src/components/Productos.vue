<template lang="pug">

    section
        h1 Añadir un producto
        form(@submit.prevent="agregar")
            input(type='text', placeholder='Nombre', v-model='nombre')
            input(type='text', placeholder='Precio', v-model='precio')
            input(type='submit', value='Agregar')
        hr
        ul
            li(v-for="(producto, indice) in productos")
                | {{producto.nombre}} - {{producto.precio.toFixed(2) + ' $'}}
                button(@click="comprarProducto(indice)") +


</template>

<script>

    import {mapState, mapMutations} from 'vuex';

    export default {

        data() {
            return { nombre: '', precio: 0 }
        },

        computed: mapState(['productos']),

        methods: {

            ...mapMutations(['comprarProducto']),

            agregar() {

                this.$store.commit('agregarProducto', {
                    nombre: this.nombre,
                    precio: Number(this.precio)
                });

                this.nombre = '';
                this.precio = 0;

            }

        }

    }

</script>