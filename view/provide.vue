<template>
  <div>
    <h1>方法五、provide/inject</h1>
    <!--Vue2.2.0新增API,这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，-->
    <!--不论组件层次有多深，并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过-->
    <p style="color: red">祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量</p>
    <p style="color: red">解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态</p>
    <p style="color:red"> provideA.vue 的 name 如果改变了，provide.vue 的 this.name 是不会改变的</p>
    <!--provider来提供变量，然后在子孙组件中通过inject来注入变量。provide / inject API 主要-->
    <!--解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组-->
    <!--件间建立了一种主动提供与依赖注入的关系。-->

    <provide-a></provide-a>
  </div>
</template>

<script>
  import provideA from '../src/components/provideA'
    export default {
        name: "provide",
        provide: {
          name:
          '杨荣'
      },
      components:{
        provideA
      }

    }
</script>

<style scoped>

</style>
