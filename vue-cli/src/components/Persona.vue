<template lang="pug">

    div
        template(v-if='persona')
            h1(v-text='datosPersona.nombre')
            h3(v-text='datosPersona.correo')
            img(:src='datosPersona.foto')
        span(v-else='') Cargando persona...

</template>

<script>

    import axios from 'axios';

    export default {

        mounted() {
            axios.get('https://randomuser.me/api/')
                 .then(res => {
                     this.persona = res.data.results[0];
                 });
        },

        data() {
            return {
                persona: null
            }
        },

        computed: {
            datosPersona() {
                return {
                    nombre: `${this.persona.name.first} ${this.persona.name.last}`,
                    foto: this.persona.picture.large,
                    correo: this.persona.email
                }
            }
        }

    }
</script>

<style></style>