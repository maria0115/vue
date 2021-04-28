<template>
  <div>
      name : {{user.id}}
      <hr>
      created : {{user.created}}
      <hr>
      karma : {{user.karma}}
      <hr>
  </div>
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.state.user;
    }
    
  },
  created(){
    
      // console.log(this.$route.params.id)
      var name = this.$route.params.id;
      this.$store.dispatch('GetUser',name)
    
  }

}
</script>

<style>

</style>