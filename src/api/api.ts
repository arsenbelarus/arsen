import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
})


export const userApi = {
    post (success: boolean) {
        return axiosInstance.post("", {success})
    },
}