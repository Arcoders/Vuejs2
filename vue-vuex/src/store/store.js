import Vue from 'vue';
import Vuex from 'vuex';

import productos from './modules/productos';
import {getters} from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({

   state: {
       carro: []
   },

    getters: getters,

    mutations: {
        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProducto: (state, indice) => state.carro.splice(indice, 1)
    },

    modules: { productos }

});