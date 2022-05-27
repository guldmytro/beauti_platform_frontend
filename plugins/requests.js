import * as tokens from '@/utills/tokens';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            requests() { 
                return {
                    request(url, options={}) {
                        const API_URL = useRuntimeConfig().API_URL;
                        return fetch(API_URL + url, options).then(response => {
                            if (response.status === 200) {
                                return response.json();
                            }
                            throw new Error(response.status);
                        });
                    },
                    requestWithToken(url, options={}, recLevel=0) {
                        const API_URL = useRuntimeConfig().API_URL;
                        let accessToken = tokens.getAccessToken();
                        if (options.headers === undefined) {
                            options.headers = {};
                        }
                        if (accessToken !== null) {
                            options.headers.Authorization = `Bearer ${accessToken}`;
                        }
                        return fetch(API_URL + url, options).then(async responce => {
                            if (responce.status === 200) {
                                return responce.json();
                            }
                            if (responce.status === 401) {
                                if (recLevel > 0) {
                                    throw {code: 401, message: 'Access and Refresh token failed'};
                                }
                                let refreshToken = tokens.getRefreshToken();
                                if (refreshToken !== null) {
                                    let refreshRes = await fetch(API_URL + '/token/refresh/', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({'refresh': refreshToken})
                                    });
                                    if (refreshRes.status === 200) {
                                        const refJSON = await refreshRes.json();
                                        tokens.setTokens(refJSON.access, refJSON.refresh, true);
                                        console.log(this);
                                        return await this.requestWithToken(url, options, recLevel + 1);
                                    }
                                    throw {code: 401, message: 'Refresh token expire'};
                                }
                                throw {code: 401, message: 'No Refresh token'};
                            }
                        });
                    }
                }
            },
        }
    }
})