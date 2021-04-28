import axios from 'axios';
// 환경설정 검색
function PSearch() {
    console.log("검색안하나?")
    return axios({
        method: 'get',
        url: `/psearch`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// 환경설정 update
function PUdate(data) {
    return axios({
        method: 'post',
        url: `/pupdate`,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    PSearch,
    PUdate
}