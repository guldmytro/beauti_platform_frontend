import { defineStore } from 'pinia';
import * as tokens from '@/utills/tokens';

export const UseAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            isAuthenticated: false,
        }
    },
    actions: {
        async authenticate(credentials) {
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
                tokens.setTokens(respose?.access, respose?.refresh);
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
        }
    }
});