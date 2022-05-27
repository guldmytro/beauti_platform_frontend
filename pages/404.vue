<template>
    <NuxtLayout name="base">
        <Head>
            <Title>404. Страница не найдена</Title>
        </Head>
        <div class="container page-not-found">
            <h1>404. Страница не найдена</h1>
            <p>Попробуйте воспользоваться поиском, или перейти на <NuxtLink to="/">главную</NuxtLink>.</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
useHead({
    titleTemplate: '%s - Miridam'
});
</script>
