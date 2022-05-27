<template>
    <Transition name="fade">
        <div class="popup popup__enter" v-show="loginPopup">
            <div class="popup__content">
                <button class="close__popup" @click="closeLoginPopup" aria-label="закрыть модальное окно"></button>
                <h2 class="popup__title">
                    Вход в личный кабинет
                </h2>
                <FormsLoginForm @close-popup="closeLoginPopup" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { UsePopupStore } from '@/stores/PopupStore';
    
    const popupStore = UsePopupStore();
    const { loginPopup } = storeToRefs(popupStore);

    function closeLoginPopup() {
        loginPopup.value = false;
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