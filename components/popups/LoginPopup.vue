<template>
    <Transition name="fade">
        <div class="popup popup__enter" v-show="loginPopup">
            <div class="popup__content">
                <button class="close__popup" @click="closeLoginPopup" aria-label="закрыть модальное окно"></button>
                <h2 class="popup__title">
                    Вход в личный кабинет
                </h2>
                <form method="post" class="popup__form" @submit.prevent="login">
                    <div class="popup__group">
                        <label for="login-username" class="popup__label">
                            Логин
                        </label>
                        <input id="login-username" type="text" name="username" class="popup__input" required v-model="email">
                    </div>
                    <div class="popup__group">
                        <label for="login-password" class="popup__label">
                            Пароль
                        </label>
                        <input id="login-password" type="password" name="password" class="popup__input" required v-model="password">
                    </div> 
                    <div class="popup__row">
                        <div class="popup__check">
                            <input class="remember" type="checkbox" name="remember" id="login-remember" checked> 
                            <label for="login-remember">
                                Запомнить меня
                            </label>
                        </div>
                        <a href="#" @click.prevent class="popup__forget">
                            Забыли пароль?
                        </a>
                    </div>
                    <button :disabled="disabledForm" class="popup__btn btn" type="submit">
                        {{ submitText }}
                    </button>
                    <button class="popup__btn popup__btn_register" type="button">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { UsePopupStore } from '@/stores/PopupStore';
    import { UseAuthStore } from '@/stores/AuthStore';
    
    const popupStore = UsePopupStore();
    const authStore = UseAuthStore();

    const { loginPopup } = storeToRefs(popupStore);

    function closeLoginPopup() {
        popupStore.closeLoginPopup();
        setTimeout(resetForm, 300);
    }


    const disabledForm = ref(false);
    const submitText = ref('Вход');
    const email = ref('');
    const password = ref('');
    
    function getCredentials() {
        return {
            username: email.value,
            password: password.value
        };
    }

    async function login() {
        disabledForm.value = true;
        submitText.value = 'Подождите...';
        const auth = await authStore.authenticate(getCredentials());

        if (auth.status === 200) { // we logged in
            closeLoginPopup();
        } else {

        }
    }

    function resetForm() {
        disabledForm.value = false;
        submitText.value = 'Вход';
        email.value = '';
        password.value = '';
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>