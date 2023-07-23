<script setup lang="ts">

import { ref } from "vue";

const count = ref(0);

function aumentar(){
  count.value+=1
}
</script>

<template>
  <p>Hola soy la version de COMPOSITION API</p>
  <h1> Contador: {{ count }}</h1>

<button @click="aumentar">aumentar contador</button>
</template>