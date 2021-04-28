<template>
  <div id="wrap">
    <div class="header">
      <h1>메인 화면 설정</h1>
      <span class="back_btn">
        <span @click="Back()">
          <img src="../../mobile/img/back_btn.png" alt="뒤로가기" />
        </span>
      </span>
    </div>
    <div class="contents06">
      <form action="">
        <ul class="sc_menu">
          <li>
            <ul>
              <li>
                <label for="sc01">포털형으로 보기</label>
                <input
                  type="radio"
                  name="d_radio"
                  id="sc01"
                  value="포털형으로 보기"
                  :checked="boo('potal')"
                  ref="potal"
                  @click="setPreferences('potal')"
                />
              </li>
              <li>
                <label for="sc02">메뉴형으로 보기</label>
                <input
                  type="radio"
                  name="d_radio"
                  id="sc02"
                  value="메뉴형으로 보기"
                  :checked="boo('menu')"
                  ref="menu"
                  @click="setPreferences('menu')"
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
      return (display) => {
        if (this.GetPreferences.display === display) {
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
    setPreferences(value) {
      this.$store.dispatch("setPreferences", {
        menu: "display",
        value: value,
      });
    },
  },
};
</script>

<style>
</style>