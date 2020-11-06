import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:5000/api",
    headers: {'Access-Control-Allow-Origin': '*',}
})

export const serverAPI = {
    checkStatus: ()=> api.get("/status"),
}

export const translateAPI = {
    translate: (data)=> api.post("/translate",data),
    multiTrans: (data)=> api.post("/multiTrans",data),
    transToKor: (data)=> api.post("/trans-to-kor",data)
}