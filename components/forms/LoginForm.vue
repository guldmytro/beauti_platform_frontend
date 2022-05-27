<template>
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
                <input class="remember" type="checkbox" name="remember" id="login-remember" v-model="rememberMe"> 
                <label for="login-remember">
                    Запомнить меня
                </label>
            </div>
            <a href="#" @click.prevent class="popup__forget">
                Забыли пароль?
            </a>
        </div>
        <p v-if="loginError" class="login-error">{{ loginError }}</p>
        <button :disabled="disabledForm" class="popup__btn btn" type="submit">
            Вход
        </button>
        <button class="popup__btn popup__btn_register" type="button">
            Зарегистрироваться
        </button>
    </form>
</template>

<script setup>
    import { UsePopupStore } from '@/stores/PopupStore';
    import { UseAuthStore } from '@/stores/AuthStore';
    const authStore = UseAuthStore();

    const loginError = ref('');
    
    const disabledForm = ref(false);
    const email = ref('');
    const password = ref('');
    const rememberMe = ref(true);
    
    function getCredentials() {
        return {
            username: email.value,
            password: password.value,
        };
    }

    async function login() {
        disabledForm.value = true;
        loginError.value = false;
        const auth = await authStore.authenticate(getCredentials(), rememberMe.value);
        if (auth.status === 200) { // we logged in
            await authStore.setUserName();
            UsePopupStore().loginPopup = false;
            resetForm();
        } else {
            loginError.value = auth.message;
            disabledForm.value = false;
        }
    }

    function resetForm() {
        email.value = '';
        password.value = '';
        disabledForm.value = false;
    }

</script>