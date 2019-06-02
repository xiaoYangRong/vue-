<template>
  <!--父传子-->
  <!--users子组件props接收-->
  <div class="child1">
    <h3>父传子 props</h3>
    <p>1.users   子组件:props接收 ; 父组件: :users 传值</p>
    <ul>
      <li v-for="user in users">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "child1",
        props:{
          users:{
            type:Array,
            required:true
          }
        }
    }
</script>

<style scoped>

</style>
