<template>
    <header class="header__main">
        <div class="container">
            <div class="d-flex align-items-center">
                <NuxtLink to="/" class="logo">
                    <picture>
                        <source srcset="../assets/images/logo_new.webp" type="image/webp">
                        <img src="../assets/images/logo_new.png" width="106" height="29" loading="lazy" alt="Logo">
                    </picture>
                </NuxtLink>
                <nav class="menu">
                    <button class="menu__button">
                        <svg width="37" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.497 8.95a3.573 3.573 0 0 1-3.562-3.562 3.573 3.573 0 0 1 3.562-3.563A3.573 3.573 0 0 1 9.06 5.388 3.573 3.573 0 0 1 5.497 8.95zm13.003 0a3.573 3.573 0 0 1-3.563-3.562A3.573 3.573 0 0 1 18.5 1.825a3.573 3.573 0 0 1 3.563 3.563A3.573 3.573 0 0 1 18.5 8.95zm13.003 0a3.573 3.573 0 0 1-3.562-3.562 3.573 3.573 0 0 1 3.562-3.563 3.573 3.573 0 0 1 3.563 3.563 3.573 3.573 0 0 1-3.563 3.562zM5.497 21.063A3.573 3.573 0 0 1 1.935 17.5a3.573 3.573 0 0 1 3.562-3.563A3.573 3.573 0 0 1 9.06 17.5a3.573 3.573 0 0 1-3.563 3.563zm13.003 0a3.573 3.573 0 0 1-3.563-3.563 3.573 3.573 0 0 1 3.563-3.563 3.573 3.573 0 0 1 3.563 3.563 3.573 3.573 0 0 1-3.563 3.563zm13.003 0a3.573 3.573 0 0 1-3.562-3.563 3.573 3.573 0 0 1 3.562-3.563 3.573 3.573 0 0 1 3.563 3.563 3.573 3.573 0 0 1-3.563 3.563zM5.497 33.175a3.573 3.573 0 0 1-3.562-3.563 3.573 3.573 0 0 1 3.562-3.562 3.573 3.573 0 0 1 3.563 3.562 3.573 3.573 0 0 1-3.563 3.563zm13.003 0a3.573 3.573 0 0 1-3.563-3.563A3.573 3.573 0 0 1 18.5 26.05a3.573 3.573 0 0 1 3.563 3.562 3.573 3.573 0 0 1-3.563 3.563zm13.003 0a3.573 3.573 0 0 1-3.562-3.563 3.573 3.573 0 0 1 3.562-3.562 3.573 3.573 0 0 1 3.563 3.562 3.573 3.573 0 0 1-3.563 3.563z"
                                stroke="#C586BD" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Категории
                    </button>
                    <ul class="menu__list ">
                        <li class="menu__item">
                            <a href="">
                                Бровист

                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">


                                Визажист
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Депиляция
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Косметолог
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Лешмейкер
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Массаж
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Ногтевой сервис
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Парикмахер
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Пирсинг
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Стилист
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Тату
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Татуаж
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Фотография
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Обучение
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="">

                                Другое
                            </a>
                        </li>
                    </ul>

                </nav>

                <div class="search">
                    <button class="search__open"></button>
                    <button class="search__close"></button>
                    <form action="" class="search__form">
                        <input type="text" placeholder="Поиск" class="search__input">
                        <button class="search__btn"></button>
                    </form>
                </div>

                <div class="icon d-flex align-items-center header-controls">
                    <button class="icon__btn icon__btn_heart">
                    </button>
                    <button class="icon__btn icon__btn_bell">
                        <span>2</span>
                    </button>
                    <button class="icon__btn icon__btn_enter" @click="openLoginPopup">Войти</button>
                </div>

            </div>
        </div>
    </header>
</template>

<script setup>
    import { UsePopupStore } from '@/stores/PopupStore';
    const popupStore = UsePopupStore();
    
    function openLoginPopup() {
        popupStore.openLoginPopup();
    }
</script>
