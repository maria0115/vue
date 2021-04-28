<template>
  <div>
    <Item v-for="item in items" :key="item.id" :itemname="item">
      <div slot="title">
        <a :href="`${item.url}`">
          {{ item.title }}
        </a>
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