import { PSearch, PUdate } from '../api/index.js';

//system 모드이면 무슨 light 인지 dark 인지 감지
const whatcolor = {
    fetch(color) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            color = "dark";
        } else {
            color = "light";
        }

        return color;

    }
}
export default {
    setMode({ state, commit }) {
        // 배포용
        if (process.env.NODE_ENV !== 'development') {
            //엘라스틱에서 사용자 설정값 가져와라
            return PSearch()
                .then(response => {
                    console.log(response.data);
                    state.preferences =response.data;
                    commit("SettingCreated", response.data);
                    if (response.data.mode === "system") {
                        console.log(response.data);
                        state.preferences = response.data;
                        state.systemcolor = whatcolor.fetch(response.data.mode);
                        commit("Color", { color: state.systemcolor })
                    }

                });

        }
        // 개발용 
        else {
            console.log(state.preferences)
            if (state.preferences.mode === "system") {
                state.systemcolor = whatcolor.fetch(state.preferences.mode);
                commit("Color", { color: state.systemcolor })
            }
        }
    },
    setPreferences({ state,commit }, { menu, value, setting }) {
        // 배포용
        if (process.env.NODE_ENV !== 'development') {
            // 여기!!!!!! 유저마다 환경설정 엘라스틱에 넣어줘야 한다!!!!!!!!!!!!!!!!!!!!!!
            var query = {};
            if (menu === "etiquette") {
                if (
                    typeof setting == "undefined" ||
                    typeof setting == undefined ||
                    setting == null ||
                    setting == ""
                ) {
                    state.preferences[menu].use = value;
                } else {
                    state.preferences[menu][setting] = value;
                }
            } else if (menu === "alarm" || menu === "font") {
                state.preferences[menu][setting] = value;
            } else {
                state.preferences[menu] = value;
            }
            query.setting = {};
            query.setting[menu] = state.preferences[menu];
            return PUdate(query)
                .then(response => {
                    console.log("update",response.data)
                });
        }//개발용
        else {
            commit("Preferences", { menu: menu, value: value, setting: setting })
        }
    },

}