<template>
  <div>
    <!--子传父-->
    <h3>子传父:通过事件用 $emit传递</h3>
    <p @click="changeTitle">{{ title }}</p>
  </div>

</template>

<script>
    export default {
        name: "emit",
      data(){
          return{
            title:'儿子'
          }
      },
      methods:{
        changeTitle(){
          this.$emit('titleChanged','子向父传值')
        }
      }
    }
</script>

<style scoped>

</style>
