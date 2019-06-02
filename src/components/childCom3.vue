<template>
  <div class="border">
    <p>childCom3: {{ $attrs }}</p>
    <!--childCom3: { "doo": "Vue" }-->
  </div>
</template>
<script>
  export default {
    props: {
      coo: String,//从2传过来的数据中剔coo
      title: String//从2传过来的数据中剔title
    }
  };
</script>
