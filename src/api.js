import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:5000/api",
    headers: {'Access-Control-Allow-Origin': '*',}
})

export const translateAPI = {
    translate: (data)=> api.post("/translate",data),
    multiTrans: (data)=> api.post("/multiTrans",data)
}