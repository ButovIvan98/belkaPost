import * as axios from "axios";
import Cookies from 'js-cookie';
const instance = axios.create({
    baseURL:'http://192.168.3.105/api/v1/',
    Authorization:Cookies.get('authToken')

});

export const userAPI={
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
            return response.data;
        })},
    getMe(){
        return instance.get(`auth/me`).then(response=>{
            return response.data;
        })},
    deleteFollowed(id){
        return  instance.delete(`follow/${id}`).then(response=>{
            return response.data;
        })},
    postFollowed(id){
        return  instance.post(`follow/${id}`).then(response=>{
            return response.data;
        })},
    getProfileData(id){
        return instance.get(`profile/` + id)
    }
};
export const ProfileAPI = {
    putStatus(status){
        return instance.post('profile/status', {status:status})
    },
    getStatus(userID){
        return  instance.get(`profile/status/`+ userID)
    }
};
//Регистрация + авторизация
export const RegistrationAPI = {
    putRegistration(surname,name,middleName,phone,email,password){
        return instance.post('user/auth/logout', {middle:surname, first:name, last:middleName, password:password, email:email, phone:phone}).then()
    },
    putAthorization(email,password){
        return instance.post('user/auth/login',{email:email,password:password})
    }
    // putAthorization(email,password){
    //     return instance.get('user/auth/logout')
    // }
};
//Калькуляция и добавление груза
export const CalculateAPI = {
    addСargo(width,height,length,weight,quantity,comment,type){
        return instance.post('express/cargo/create',{width, height, length, weight, quantity, comment, type}).then();
    }
}