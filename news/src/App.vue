<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <spinner :loading="this.loadingstatus"></spinner>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import bus from "./utils/bus.js";
import Spinner from "./components/Spinner.vue";
export default {
  components: {
    Header,
    Spinner,
  },
  data() {
    return {
      loadingstatus: true,
    };
  },
  created() {
    bus.$on("start:spinner", this.StartSpinner);
    bus.$on("end:spinner", this.EndSpinner);
  },
  beforeDestroy(){
    bus.$off("start:spinner");
    bus.$off("end:spinner");
  },
  methods: {
    StartSpinner() {
      this.loadingstatus = true;
      console.log('StartSpinner');
    },
    EndSpinner() {
      this.loadingstatus = false;
      console.log('EndSpinner');
    },
  },
};
</script>

<style>
</style>