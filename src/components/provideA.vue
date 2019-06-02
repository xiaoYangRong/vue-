<template>
  <div>
    <p>provideA</p>
    <p>{{ this.name}}</p>
  </div>
</template>

<script>
    export default {
      name: "provideA",
      inject: ['name'],//从父注入provide提供的name值
      mounted() {
        console.log(this.name);
      }
    }

</script>

<style scoped>

</style>
