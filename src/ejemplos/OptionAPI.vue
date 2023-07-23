<script lang="ts">

    export default{
      data(){
        return{
            count:0 //Regresa estado del componente
        } 
      }// Este metodo va definir el estado del componente
    }
</script>

<template>
   <h1>Contador: {{ count }}</h1> <!--Imprime el valor de la var count-->
   <button @click ="count += 1" >Aumentar Contador</button>
</template>