<template>
  <div class="vuexB">
    <p style="color: red">vuex兄弟之间共享数据</p>
    <p class="title">组件B</p>
    <p>餐馆名称：{{ resturantName }}</p>
    <div>
      <button @click="clickBFn('B餐馆')">B修改餐馆名称</button>
    </div>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: "vuexB",
    data(){
      return{
      }
    },
    methods:{
      ...mapActions([//语法糖
        'clickBFn'//相当于this.$store.dispatch('clickBFn')
      ]),
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
