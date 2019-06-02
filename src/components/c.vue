<template>
  <div>
    <!--eventBus-->
    <h3>
      C组件：{{name}}，{{age}}
    </h3>
  </div>
</template>

<script>
  import eventBus from '../../js/eventBus'
  export default {
        name: "c",
      data() {
        return{
          name:'',
          age:''
        }
      },
      mounted() {
     //在模板编译完成后执行
        this.getEventDate
      },
    methods:{
      getEventDate(){
        const that=this
        eventBus.$on('data-a',function (val) {
          that.name = val;
        })
        eventBus.$on('data-b',function (val) {
          that.age = val;
        })
      }
    }
    }
</script>

<style scoped>

</style>
