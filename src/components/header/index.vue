<script setup>
    import logoUrl from '@/assets/logo.jpg';
    import logoTitleUrl from '@/assets/logo-title.webp';
</script>
<template>
    <v-app-bar color="#f4b754">
        <img :src="logoUrl" class="app-bar-logo pl-3" alt="Company logo" >
        <img :src="logoTitleUrl" class="app-bar-logo pl-3" alt="Company logo" >
        <v-container class="d--flex align-center gap-4">
            <router-link to="/" class="mx-2 text-white">Home</router-link>
            <router-link to="/team" class="mx-2 text-white">Team</router-link>
        </v-container>
    </v-app-bar>
</template>

<style scoped>
    .app-bar-logo {
        height: 58px;
        width: auto;
        max-width: 103px;
        display: block;
    }
</style>