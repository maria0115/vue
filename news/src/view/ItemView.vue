<template>
  <div>
      <hr>
    <router-link :to="'/user/' + items.user">
      {{ itemname }}
    </router-link>
    <div>
      {{ items.time_ago }}
      <hr />
      {{ items.title }}
      <div v-html="items.content"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ items: (state) => state.item }),
    itemname(){
      return this.items.user;
    }
  },
  created() {
    this.$store.dispatch("GetItem", this.$route.params.id);
  },
  
};
</script>

<style>
</style>