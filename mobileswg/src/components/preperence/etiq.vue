<template>
  <div id="wrap">
    <div class="header">
      <h1>에티켓 시간 설정</h1>
      <span class="back_btn">
        <span @click="Back()">
          <img src="../../mobile/img/back_btn.png" alt="뒤로가기" />
        </span>
      </span>
    </div>
    <div class="content">
      <form action="">
        <ul class="eti_menu">
          <li>
            <ul>
              <li>
                <label for="et01">시작시간</label>
                <input
                  type="time"
                  name="s_time"
                  id="et01"
                  :value="GetPreferences.etiquette.starttime"
                  v-on:input="setPreferences($event, 'starttime')"
                />
              </li>
              <li>
                <label for="et02">종료시간</label>
                <input
                  type="time"
                  name="e_time"
                  id="et02"
                  :value="GetPreferences.etiquette.endtime"
                  v-on:input="setPreferences($event, 'endtime')"
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
  },
  methods: {
    Back() {
      this.$router.go(-1);
    },
    setPreferences(event, menu) {
      this.$store.dispatch("setPreferences", {
        menu: "etiquette",
        setting: menu,
        value: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>