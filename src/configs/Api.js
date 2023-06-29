import axios from "axios"

import cookies from "react-cookies"

export let endpoints = {


    "quan": "/quan/",
    "phuong": (quanId) => `/quan/${quanId}/phuong/`,
    "dontuyensinh": "/dontuyensinh/",
    "trinhdo": "/trinhdo/",
    "truong": (quanId) => `/quan/${quanId}/truong/`,
    "chonlop": '/dangkyhoc/',




}
export const authApi = () => {
    return axios.create({
        baseURL: "http://quan271001.pythonanywhere.com/",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}


export default axios.create({
    baseURL: "http://quan271001.pythonanywhere.com/"

})