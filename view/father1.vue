<template>
  <div>
    <h2>常见使用场景可以分为三类：</h2>
    <h3>
      1>父子通信： 父向子传递数据是通过 props，子向父是通过 events（ $emit）；<br>
      (1) 通过父链 / 子链也可以通信（ $parent / $children）；<br>
      (2)ref 也可以访问组件实例；<br>
      (3)provide / inject API； <br>
      (4) $attrs/$listeners<br>
      2>兄弟通信： Bus；Vuex<br>
      3>跨级通信： Bus；Vuex；provide / inject API、 $attrs/$listeners</h3>
    <div>
      <!--父传子-->
      <h2>方法一：props / $emit</h2>
      <props v-bind:users="users"></props>
      <!--子传父-->
      <emit v-on:titleChanged="updateTitle"></emit>
      <p>{{title}}</p>

      <h2>方法二：$emit / $on</h2>
      <p>通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监
        听事件，巧妙轻量实现任何组件间的通信，包括父子、兄弟、跨级。当项目比
        较大，选择状态管理vuex</p>
      <com-a></com-a>
      <com-b></com-b>
      <com-c></com-c>
    </div>
  </div>

</template>

<script>
  import props from '../src/components/props'
  import emit from '../src/components/emit'
  import comA from '../src/components/a'
  import comB from '../src/components/b'
  import comC from '../src/components/c'
    export default {
        name: "father1.vue",
        components:{
          props,
          emit,
          comA,
          comB,
          comC
        },
      data(){
          return{
            users:["nike","lack","lily"],
            title:'传递的是一个值'
          }
      },
      methods:{
        updateTitle(e){
          this.title=e
        }
      }
    }
</script>

<style scoped>

</style>
