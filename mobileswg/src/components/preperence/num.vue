<template>
  <div id="wrap">
    <div class="header">
      <h1>목록 문서 수 설정</h1>
      <span class="back_btn">
        <span @click="Back()">
          <img src="../../mobile/img/back_btn.png" alt="뒤로가기" />
        </span>
      </span>
    </div>
    <div class="contents05">
      <form action="">
        <ul class="num_menu">
          <li>
            <ul>
              <li>
                <label for="mn01">10개</label>
                <input
                  type="radio"
                  name="n_radio"
                  id="mn01"
                  value="10"
                  :checked="boo('10')"
                  v-on:input="setPreferences($event)"
                />
              </li>
              <li>
                <label for="mn02">15개</label>
                <input
                  type="radio"
                  name="n_radio"
                  id="mn02"
                  value="15"
				  :checked="boo('15')"
                  v-on:input="setPreferences($event)"
                />
              </li>
              <li>
                <label for="mn03">20개</label>
                <input
                  type="radio"
                  name="n_radio"
                  id="mn03"
                  value="20"
				  :checked="boo('20')"
                  v-on:input="setPreferences($event)"
                />
              </li>
            </ul>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GetPreferences"]),
	boo() {
      return (num) => {
        if (this.GetPreferences.listcount === num) {
          return true;
        }
        return false;
      };
    },
  },
  methods: {
    Back() {
      this.$router.go(-1);
    },
	setPreferences(event) {
	  this.$store.dispatch("setPreferences", {
          menu: "listcount",
          value: event.target.value,
        });
    },
  },
};
</script>

<style>
</style>