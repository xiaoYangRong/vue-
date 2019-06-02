<template>
  <div>
    <!--eventBus-->
    <h3>A组件：{{age}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>

<script>
  import eventBus from '../../js/eventBus'
  //定义一个空的Vue实例
  export default {
    name: "a",
    data(){
      return{
        age:21
      }
    },
    methods:{
      send(){
        eventBus.$emit('data-b', this.age);
      }
    }
  }
</script>

<style scoped>

</style>
