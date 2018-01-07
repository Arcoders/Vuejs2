<template>
    <div>

        <h2>Tareas por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>

        <h2>Tareas por finalizadas</h2>
        <ul>
            <li v-for="tarea in tareasFinalizadas">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>

    </div>
</template>

<script>

    export default {

        data() {
            return {
                tareas: [
                    {nombre: 'Estudiar día y noche', completado: false},
                    {nombre: 'Hacer deporte cada mañana', completado: false},
                    {nombre: 'Ayudar a una persona', completado: false}
                ],
                finalizadas: []
            }
        },

        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;
            }
        },

        computed: {
            tareasPendientes() {
                return this.tareas.filter(tarea => !tarea.completado);
            },
            tareasFinalizadas() {
                return this.tareas.filter(tarea => tarea.completado);
            }
        }

    }

</script>

<style>
    li a {
        color: cadetblue;
        font-weight: bold;
        text-decoration: none;
    }
</style>