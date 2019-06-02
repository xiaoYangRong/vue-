<template>
  <div class="vuexA">
    <p style="color: red">vuex兄弟之间共享数据</p>
    <p class="title">组件A</p>
    <p>餐馆名称：{{ resturantName }}</p>
    <div>
      <button @click="clickAFn('A餐馆')">A修改餐馆名称</button>
      <button @click="turnToB">跳转到B页面</button>
    </div>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
    export default {
        name: "vuexA",
      data(){
          return{
          }
      },
      methods:{
        ...mapActions([//语法糖
          'clickAFn'//相当于this.$store.dispatch('clickAFn')
        ]),
        turnToB(){
          this.$router.push({
            path:'/b'
          })
        }
      },
      computed:{
        ...mapGetters([//相当于this.$store.getters.resturantName
          'resturantName'
        ])
      }
    }
</script>

<style scoped>

</style>
