import axios from 'axios';
import { profilservices } from '../services/profilservices';

const Axios = axios.create({
    baseURL: 'http://localhost:8000'
});

Axios.interceptors.request.use(request => {

    if(profilservices.isLogged()){
        request.headers.Authorization = 'Bearer '+profilservices.getToken()
    }

    return request
})

Axios.interceptors.request.use(request => {

    if(profilservices.getToken()){
        request.headers.Authorization = 'Bearer '+profilservices.getToken()
    }

    return request
})

// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status === 401){
        profilservices.logout()
        window.location = '/reservation'
    }else{
        return Promise.reject(error)
    }
})

export default Axios;
