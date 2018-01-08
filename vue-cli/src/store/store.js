import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

   state: {
       cantidad: 0,
       nombre: 'Ismael Haytam',
       ciudad: 'Girona',
       tareas: [
           {nombre: 'Estudiar día y noche', completado: false},
           {nombre: 'Hacer deporte cada mañana', completado: false},
           {nombre: 'Ayudar a una persona', completado: false},
           {nombre: 'Comer sano...', completado: true}
       ]
   },

    getters: {
        tareasCompletadas: state => state.tareas.filter(tarea => tarea.completado).length
    },

    mutations: {
        aumentar: state => state.cantidad++,
        reducir: state => state.cantidad--
    }

});