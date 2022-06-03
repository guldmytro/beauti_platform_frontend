import { defineStore } from 'pinia';
import * as tokens from '@/utills/tokens';

export const UseAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            isAuthenticated: false,
            user: null,
        }
    },
    actions: {
        async authenticate(credentials, rememberMe) {
            const { $requests } = useNuxtApp();
            const { request } = $requests();
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }, 
                    body: JSON.stringify(credentials)
                };
                const respose = await request('/token/', options);
                tokens.setTokens(respose?.access, respose?.refresh, rememberMe);
                this.isAuthenticated = true;
                return { 'status': 200 };

            } catch(e) {
                const error = {
                    'status': e.message
                };
                if (e.message == 401) {
                    error['message'] = 'Вы указали неверный логин или пароль.'
                } else {
                    error['message'] = 'На сайте произошла ошибка. Попробуйте позже.'
                }
                return error;
            }  
        },
        async setUser() {
            if (this.isAuthenticated && this.user) {
                return;
            }
            const { $requests } = useNuxtApp();
            const requests = $requests();
            const userID = tokens.getUserID();
            if (!userID) {
                return;
            }
            try {
                const responce = await requests.requestWithToken(`/users/${userID}/`, {
                    method: 'GET'
                });
                this.user = {};
                this.user.userName = responce?.username;
                this.isAuthenticated = true;
                console.log(responce);
                return {status: 200, message: responce?.username};
            } catch(e) {
                return e;
            }
        },
        resetUserData() {
            this.isAuthenticated = false;
            this.user = null
        }
    }
});