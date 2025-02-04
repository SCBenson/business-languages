<template>
    <v-sheet class="hero-section" height="100vh">
        <v-container class="h-100 d-flex align-center">
            <div class="text-center w-100">
                <h1 class="text-h1 text-white font-weight-bold">Online Language Learning for Business Success</h1>
                <h2 class="text-h2 text-white">Join a vibrant community!</h2>
                <v-btn>Contact Us</v-btn>
            </div>
        </v-container>
    </v-sheet>
</template>

<script setup></script>
<style scoped>
.hero-section{
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('@/assets/hero_placeholder.webp');
    background-size: cover;
    background-position: center;
    width: 100%;
}
</style>
