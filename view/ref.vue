<template>
  <div>
    <h1>方法六、 $parent / $children　＆ ref</h1>
    <p style="color: red">ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</p>
    <p style="color: red">需要注意的是：这两种都是<strong>直接得到组件实例，使用后可以直接调用组件的方法或访问数据。</strong></p>
    <p style="color: red">这两种方法的弊端是，无法在跨级或兄弟间通信。</p>
    <ref-a ref="comA"></ref-a>
  </div>
</template>

<script>
  import refA from '../src/components/refA'
    export default {
        name: "ref",
      components:{
          refA
      },
      mounted () {
        const comA = this.$refs.comA;
        console.log('comA>>>>',comA.title);
        comA.sayHello();
      }
    }
</script>

<style scoped>

</style>
