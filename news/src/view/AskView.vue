<template>
  <div>
    <!-- {{items}} -->
    <Item v-for="item in items" :key="item.id" :itemname="item">
      <router-link :to="`item/${item.id}`" slot="title">
      {{item.title}}
      </router-link>
      <div slot="user">
      <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
      </div>
    </Item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Item from '../components/Item.vue';
export default {
  computed: {
    ...mapGetters({
      items: "Items",
    }),
  },
  components:{
    Item
  }
}
</script>

<style>
</style>