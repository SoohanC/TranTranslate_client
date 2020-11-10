import axios from "axios"

const api = axios.create({
    baseURL:"https://api.trantranslate.com/api",
    headers: {'Access-Control-Allow-Origin': '*',}
})

export const serverAPI = {
    checkStatus: ()=> api.get("/status"),
}

export const translateAPI = {
    translate: (data)=> api.post("/kakao/translate",data),
    multiTrans: (data)=> api.post("/kakao/multi-trans",data),
    transToKor: (data)=> api.post("/kakao/trans-to-kor",data)
}