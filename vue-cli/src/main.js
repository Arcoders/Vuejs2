import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

const compartido = {
    usuario: {nombre: 'Ismael Haytam'}
};

new Vue({
    el: '#app1',
    data: compartido
});

new Vue({
    el: '#app2',
    data: compartido
});