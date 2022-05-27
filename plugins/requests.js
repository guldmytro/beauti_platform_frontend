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
                    }
                }
            },
        }
    }
})