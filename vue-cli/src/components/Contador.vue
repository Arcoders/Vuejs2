<template lang="pug">

    div
        h1 Contador: {{ cantidad }}
        button(@click='aumentar') Aumentar
        button(@click='reducir') Reducir

</template>

<script>

    export default {

        methods: {

            aumentar() {
                this.$store.state.cantidad++;
            },

            reducir() {
                this.$store.state.cantidad--;
            }

        },

        computed: {
            cantidad() {
                return this.$store.state.cantidad;
            }
        }

    }

</script>

<style></style>