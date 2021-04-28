<template>
  <div>
      <span @click="setClass()">헤더없다</span>

  </div>
</template>

<script>
export default {
  methods: {
    setClass() {
      this.$router.go(-1) 
    }
  }

}
</script>

<style>

</style>