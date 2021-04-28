<template>
  <div id="wrap">
    <div class="header">
      <h1>글자 크기 / 글꼴 설정</h1>
      <span class="back_btn">
        <router-link :to="`/setting`">
          <img src="../../mobile/img/back_btn.png" alt="뒤로가기" />
        </router-link>
      </span>
    </div>
    <div class="content04">
      <form action="">
        <ul class="ft_menu">
          <li>
            <p>메신저 로그인 화면 개선안</p>
            <p>BI와 ERP데이터 정합성 모니터링 리포트</p>
          </li>
          <li class="font-size">
            <strong>글자 크기</strong>
            <ul>
              <li>
                <label for="f01" class="small">작게</label>
                <span
                  ><input
                    type="radio"
                    name="radio"
                    id="f01"
                    value="small"
					:checked="boosize('small')"
                    v-on:input="setPreferences($event, 'size')"
                /></span>
              </li>
              <li>
                <label for="f02" class="normal">보통</label>
                <span
                  ><input
                    type="radio"
                    name="radio"
                    id="f02"
                    value="normal"
                    :checked="boosize('normal')"
                    v-on:input="setPreferences($event, 'size')"
                /></span>
              </li>
              <li>
                <label for="f03" class="large">크게</label>
                <span
                  ><input
                    type="radio"
                    name="radio"
                    id="f03"
                    value="large"
					:checked="boosize('large')"
                    v-on:input="setPreferences($event, 'size')"
                /></span>
              </li>
            </ul>
          </li>
          <li class="font">
            <strong>글꼴 선택</strong>
            <ul>
              <li>
                <label for="f04" class="f_s01">나눔고딕</label>
                <span
                  ><input
                    type="radio"
                    name="f_radio"
                    id="f04"
                    value="Sharing"
					:checked="boo('Sharing')"
					v-on:input="setPreferences($event, 'font')"
                /></span>
              </li>
              <li>
                <label for="f05" class="f_s01">맑은고딕</label>
                <span
                  ><input
                    type="radio"
                    name="f_radio"
                    id="f05"
                    value="Clear"
					:checked="boo('Clear')"
                    v-on:input="setPreferences($event, 'font')"
                /></span>
              </li>
              <li>
                <label for="f06" class="f_s01">돋음</label>
                <span
                  ><input
                    type="radio"
                    name="f_radio"
                    id="f06"
                    value="Raised"
					:checked="boo('Raised')"
                    v-on:input="setPreferences($event, 'font')"
                /></span>
              </li>
              <li>
                <label for="f07" class="f_s01">굴림</label>
                <span
                  ><input
                    type="radio"
                    name="f_radio"
                    id="f07"
					:checked="boo('Roll')"
                    value="Roll"
                    v-on:input="setPreferences($event, 'font')"
                /></span>
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
      return (font) => {
        if (this.GetPreferences.font.font === font) {
          return true;
        }
        return false;
      };
    },
	boosize() {
      return (size) => {
        if (this.GetPreferences.font.size === size) {
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
        menu: "font",
        setting: menu,
        value: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>