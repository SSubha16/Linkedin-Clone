import axios from "axios";


export const BASE_URL = "https://linkedin-clone-46vj.onrender.com"


export const clientServer = axios.create({
    baseURL: BASE_URL
})