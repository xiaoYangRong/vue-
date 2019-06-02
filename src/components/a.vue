<template>
  <div>
    <!--eventBus-->
    <h3>A组件：{{name}}</h3>
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
            name:'杨荣'
          }
      },
      methods:{
          send(){
            eventBus.$emit('data-a', this.name);
          }
      }
    }
</script>

<style scoped>

</style>
