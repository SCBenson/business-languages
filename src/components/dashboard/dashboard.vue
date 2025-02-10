<template>
    <v-app>
        <v-layout class="rounded rounded-md">
            <v-navigation-drawer permanent class="dashboard">
            <v-list >
                <v-list-item 
                    title="Dashboard"
                    class="text-center font-weight-bold">
                </v-list-item>
                <v-list-item 
                title="Latest News"
                @click="handleClick(News)"
                >
                </v-list-item>
                <v-list-item 
                title="My Profile"
                @click="handleClick(Profile)"
                >
                </v-list-item>
                <v-list-item 
                title="My Purchases"
                @click="handleClick(Purchases)"
                >
                </v-list-item>
                <v-list-item 
                title="Store"
                @click="handleClick(Store)"
                >
                </v-list-item>
            </v-list>
            </v-navigation-drawer>


            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <component :is="currentComponent"></component>
            </v-main>
        </v-layout>
    </v-app>
  
</template>
<script setup>
import {shallowRef} from 'vue';
import Profile from '@/components/dashboard/profile.vue';
import Purchases from '@/components/dashboard/purchases.vue';
import Store from '@/components/dashboard/store.vue';
import News from '@/components/dashboard/news.vue';
const currentComponent = shallowRef(Profile);
const handleClick = (component) => {
  currentComponent.value = component;
};
</script>
<style scoped>
.dashboard{
    height: 100vh;
}
</style>