<template>
  <div>
    <Item v-for="item in items" :itemname="item" :key="item.id">
      <div slot="title">
        <a :href="`${item.url}`">
          {{ item.title }}
        </a>
      </div>
      <div slot="user">
      <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      items: "Items",
    }),
  },
  created() {
    // this.$store.dispatch("GetItems");
  },
  components: {
    Item,
  },
};
</script>

<style>
</style>