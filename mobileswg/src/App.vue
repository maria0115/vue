<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import j from '@/mobile/js/jquerymin'
import p from '@/mobile/js/prefixfreemin.js'
import common from '@/mobile/js/common.js'

export default {
  mixin: [j,p,common],
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
@import "./mobile/css/common.css";
@import "./mobile/css/style.css";
</style>