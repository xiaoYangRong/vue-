<template>
  <div class="border">
    <p>boo: {{ boo }}</p>
    <p>childCom2: {{ $attrs }}</p>
    <!--childCom2: { "coo": "CSS", "doo": "Vue", "title": "前端工匠" }-->
    <child-com3 v-bind="$attrs"></child-com3>
  </div>
</template>
<script>
  const childCom3 = () => import("./childCom3.vue");
  export default {
    components: {
      childCom3
    },
    inheritAttrs: false,
    props: {
      boo: String//从1传过来的数据中剔boo
    },
    created() {
      console.log(this.$attrs);
// { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
    }
  };
</script>
