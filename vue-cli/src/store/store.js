import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

   state: {
       cantidad: 0,
       nombre: 'Ismael Haytam',
       ciudad: 'Girona'
   }

});