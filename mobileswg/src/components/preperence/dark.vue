<template>
  <div id="wrap">
    <div class="header">
      <h1>다크모드 설정</h1>
      <span class="back_btn">
        <span @click="Back()">
          <img src="../../mobile/img/back_btn.png" alt="뒤로가기" />
        </span>
      </span>
    </div>
    <div class="contents02">
      <form action="">
        <ul class="dark_menu">
          <li>
            <ul>
              <li>
                <label for="md01">시스템 설정 모드</label>
                <input
                  type="radio"
                  name="d_radio"
                  id="md01"
                  value="system"
                  :checked="boo('system')"
                  v-on:input="setPreferences($event)"
                />
              </li>
              <li>
                <label for="md02">라이트 모드</label>
                <input
                  type="radio"
                  name="d_radio"
                  id="md02"
                  value="light"
				  :checked="boo('light')"
          v-on:input="setPreferences($event)"
                />
              </li>
              <li>
                <label for="md03">다크 모드</label>
                <input
                  type="radio"
                  name="d_radio"
                  id="md03"
                  value="dark"
				  :checked="boo('dark')"
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
      return (mode) => {
        if (this.GetPreferences.mode === mode) {
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
    setPreferences(event, menu) {
      this.$store.dispatch("setPreferences", {
        menu: "mode",
        setting: menu,
        value: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>