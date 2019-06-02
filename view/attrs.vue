<template>
  <div>
    <h1>方法四、 $attrs　/ $listeners</h1>
    <!--$attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。-->
    <!--当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，-->
    <!--并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。-->
    <!--$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件-->
    <!--如上图所示 $attrs表示没有继承数据的对象，格式为{属性名：属性值}。-->
    <!--Vue2.4提供了 $attrs , $listeners 来传递数据与事件，跨级组件之间的通讯变得更简单。-->

    简单来说：<p style="color: red">$attrs与 $listeners 是两个对象</p>
    <p style="color: red">$attrs 里存放的是父组件中绑定的非 Props 属性，</p>
    <p style="color: red">$listeners里存放的是父组件中绑定的非原生事件。</p>
    <h2>浪里行舟</h2>
    <child-com1
      :foo="foo"
      :boo="boo"
      :coo="coo"
      :doo="doo"
      title="前端工匠"
    ></child-com1>
  </div>
</template>

<script>
 import childCom1 from '../src/components/childCom1'
    export default {
        name: "attrs",
      components: { childCom1 },
      data() {
        return{
          foo: "Javascript",
          boo: "Html",
          coo: "CSS",
          doo: "Vue"
        };
      }
    }
</script>

<style scoped>

</style>
