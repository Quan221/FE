import axios from "axios"

import cookies from "react-cookies"

export let endpoints = {

    
    "quan" : "/quan/",
    "phuong": (quanId) => `/quan/${quanId}/phuong/`,
    "product": "/products/",



}
export const authApi = () => {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}


export default axios.create({
    baseURL: "http://127.0.0.1:8000/"

})