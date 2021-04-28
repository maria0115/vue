import { News, User, Jobs, Ask, Items } from "../api/index.js";
export default {
    GetNews({ commit }) {
        return News()
            .then((response) => commit('FetchNews', response.data))
            .catch((error) => console.log(error));
    },
    GetUser({ commit }, name) {
        return User(name)
            .then((response) => commit('FetchUser', response))
            .catch((error) => console.log(error));
    },
    GetItems({ commit }, id) {
        return Items(id)
            .then((response) => commit('FetchItems', response))
            .catch((error) => console.log(error));
    },
    GetAsk({ commit }) {
        return Ask()
            .then((response) => commit('FetchAsk', response))
            .catch((error) => console.log(error));
    },
    GetJobs({ commit }) {
        return Jobs()
            .then((response) => commit('FetchJobs', response.data))
            .catch((error) => console.log(error));
    },
}