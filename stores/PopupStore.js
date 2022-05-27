import { defineStore } from 'pinia';

export const UsePopupStore = defineStore('PopupStore', {
    state: () => {
        return {
            loginPopup: false
        }
    },
    actions: {
        openLoginPopup() {
            this.loginPopup = true;
        },
        closeLoginPopup() {
            this.loginPopup = false;
        }
    }
});