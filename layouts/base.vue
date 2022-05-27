<template>
    <div class="wrapper">
        <div class="content">
            <TheHeader />
            <main>
                <slot />
            </main>
        </div>
        <TheFooter />
        <PopupsLoginPopup />
    </div>
</template>