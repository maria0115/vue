import axios from 'axios';

const url = {
    news: 'https://api.hnpwa.com/v0/news/1.json',
    ask: 'https://api.hnpwa.com/v0/ask/1.json',
    jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
    user: 'https://api.hnpwa.com/v0/user/',
    item: 'https://api.hnpwa.com/v0/item/',
    items: 'https://api.hnpwa.com/v0/',
}

function News() {
    return axios.get(url.news);
}
function Ask() {
    return axios.get(url.ask);
}
function Jobs() {
    return axios.get(url.jobs);
}
function User(name) {
    console.log(`${url.user}${name}.json`)
    return axios.get(`${url.user}${name}.json`);
}
function Item(id) {
    console.log(`${url.item}${id}.json`)
    return axios.get(`${url.item}${id}.json`);
}
function Items(name) {
    console.log(`${url.items}${name}/1.json`)
    return axios.get(`${url.items}${name}/1.json`);
}


export {
    News,
    User,
    Ask,
    Jobs,
    Items,
    Item
}