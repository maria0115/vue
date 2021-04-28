export default {
    FetchNews({state,commit}, data) {
        // console.log(data);
        state.news = data;
    },
    FetchUser(state, data) {
        state.user = data.data;
    },
    FetchItems(state, data) {
        state.items = data.data;
    },
    FetchAsk(state, data) {
        state.ask = data.data;
    },
    FetchJobs(state, data) {
        state.jobs = data;
    },
}