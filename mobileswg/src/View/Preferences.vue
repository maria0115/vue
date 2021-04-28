<template>
  <div id="wrap">
    <div class="header">
      <h1>설정</h1>
      <span class="back_btn">
        <a href="#">
          <img src="../mobile/img/back_btn.png" alt="뒤로가기" />
        </a>
      </span>
    </div>
    <div class="content01">
      <form action="">
        <ul class="st_menu">
          <li>
            <h2>로그인 설정</h2>
            <ul>
              <li>
                <strong>자동 로그인</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.login }"
                  ref="login"
                  @click="setPreferences('login')"
                ></span>
              </li>
            </ul>
          </li>
          <li>
            <h2>알림설정</h2>
            <ul>
              <li>
                <router-link :to="`/alarm`"
                  ><strong>메뉴별 알림 설정</strong>
                </router-link>
              </li>
              <li>
                <strong>에티켓 시간 설정</strong>
                <span
                  class="toggle_btn atiq_btn"
                  :class="{ on: this.GetPreferences.etiquette.use }"
                  ref="etiquette"
                  @click="setPreferences('etiquette')"
                ></span>
              </li>
              <li
                class="slideup"
                :class="{ active: this.GetPreferences.etiquette.use }"
              >
                <router-link :to="`/etiq`">
                  <strong
                    ><em class="start"
                      >{{
                        time(this.GetPreferences.etiquette.starttime)
                      }}</em
                    > ~ <em class="end"
                      >{{
                        time(this.GetPreferences.etiquette.endtime)
                      }}</em
                    ></strong
                  >
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <strong>일정, 연락처 동기화</strong>
                <span
                  class="toggle_btn"
                  :class="{ on: this.GetPreferences.synchronize }"
                  ref="synchronize"
                  @click="setPreferences('synchronize')"
                ></span>
              </li>
            </ul>
          </li>
          <li>
            <h2>화면 설정</h2>
            <ul>
              <li>
                <router-link :to="`/screen`">
                  <strong>메인화면설정</strong>
                  <em>{{ this.GetPreferences.display }}형으로 보기</em>
                </router-link>
              </li>
              <li>
                <router-link :to="`/num`">
                  <strong>목록 문서 수 설정</strong>
                  <em
                    >{{ this.GetPreferences.listcount }} 개
                    <!-- 여기에 문서 수 노출 되어야함--></em
                  >
                </router-link>
              </li>
              <li>
                <router-link :to="``">
                  <strong>포틀릿 배치 설정</strong>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <h2>스타일 설정</h2>
            <ul>
              <li>
                <router-link :to="`/font`">
                  <strong>글자 크기 / 글꼴 설정</strong>
                </router-link>
              </li>
              <li>
                <router-link :to="`/dark`">
                  <strong>다크모드 설정</strong>
                  <em></em>
                </router-link>
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
  created() {
	//   이거 라우터 비포로 옮기기
    this.$store.dispatch("setMode");
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GetPreferences"]),
    time() {
      return (time) => {
        var ampm = "pm";
        var hour = time.split(":")[0];
        if (hour < 12) {
          ampm = "am";
        } else {
          if (hour !== "12") {
            hour = parseInt(hour) - 12;
          }
        }
        return ampm + " " + String(hour) + ":" + time.split(":")[1];
      };
    },
  },
  methods: {
    setPreferences(menu) {
      var classarr = this.$refs[menu].getAttribute("class").split(" ");
      var value = false;
      if (classarr[classarr.length - 1] === "on") {
        value = false;
      } else {
        value = true;
      }
      this.$store.dispatch("setPreferences", {
        menu: menu,
        value: value,
      });
    },
  },
};
</script>

<style>
</style>