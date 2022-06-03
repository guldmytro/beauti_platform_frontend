<template>
    <div class="wrapper profile__body">
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