<template>
  <div id="wrap">
    <div class="header">
      <h1>메뉴별 알림 설정</h1>
      <span class="back_btn">
        <span @click="Back()">
          <img src="../../mobile/img/back_btn.png" alt="뒤로가기" />
        </span>
      </span>
    </div>
    <div class="content">
      <form action="">
        <ul class="allim_menu">
          <li>
            <ul>
              <li>
                <strong>Today</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.alarm.today }"
                  ref="today"
                  @click="setPreferences('today')"
                ></span>
              </li>
              <li>
                <strong>메일</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.alarm.mail }"
                  ref="mail"
                  @click="setPreferences('mail')"
                ></span>
              </li>
              <li>
                <strong>전자결제</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.alarm.approval }"
                  ref="approval"
                  @click="setPreferences('approval')"
                ></span>
              </li>
              <li>
                <strong>일정</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.alarm.works }"
                  ref="schedule"
                  @click="setPreferences('works')"
                ></span>
              </li>
              <li>
                <strong>게시판</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.alarm.board }"
                  ref="board"
                  @click="setPreferences('board')"
                ></span>
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
  methods: {
    Back() {
      this.$router.go(-1);
    },
    setPreferences(menu) {
      var classarr = this.$refs[menu].getAttribute("class").split(" ");
      var value = false;
      if (classarr[classarr.length - 1] === "on") {
        value = false;
      } else {
        value = true;
      }
      this.$store.dispatch("setPreferences", {
        menu: "alarm",
        setting: menu,
        value: value,
      });
    },
  },
  computed: {
    ...mapGetters(["GetPreferences"]),
  },
};
</script>

<style>
</style>