export default {
    SettingCreated(state,data){
        state.preferences = data;

    },
    Color(state, { color }) {
        console.log(color, "color");
        state.systemcolor = color;
    },
    Preferences(state, { menu, value, setting }) {
        if (process.env.NODE_ENV !== 'development') {

        }
        else {
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
        }



        console.log(state.preferences[menu]);
        console.log(state.preferences);


    }

}