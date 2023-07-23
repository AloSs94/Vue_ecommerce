import { createApp } from 'vue'


import Contador from './ejemplos/Composition.vue' // se encarga de importar nuestra aplicación

const app = createApp(Contador) //crea nuestra app

app.mount('#app') //monta nuestra app
