<template >
    <v-sheet class="hero-section" height="100vh">
        <v-container class="h-100 d-flex align-center px-16">
            <div class="text-center w-100">
                <h1 class="mb-3 text-h1 text-white font-weight-bold">Online Language Learning for Business Success</h1>
                <h2 class="text-h2 text-white">Join a vibrant community!</h2>
                <v-btn
                    color="rgb(255, 244, 123)"
                    size="x-large"
                    rounded="xl"
                    class="font-weight-bold mt-16"
                >Contact Us</v-btn>
            </div>
        </v-container>
    </v-sheet>
    <v-container class="px-16">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <div class="text-center"><h1 class="text-h2 font-weight-bold text-black">Our Latest...</h1></div>
                <v-responsive height="800" aspect-ratio="16/9">
                    <iframe
                        width="100%"
                        height="100%"
                        :src="'https://www.youtube.com/embed/adXj8sz4ozU?si=8SHRWN0HZz767e9u'"
                        title="Youtube Video Player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </v-responsive>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="px-16">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card color="#f4b754" class="pa-6">
                    <v-form align="center" class="custom-color">
                        <h1 class="font-weight-bold">Leave us a message...</h1>
                        <v-row justify="center">
                            <v-col cols="12" md="8">
                                <v-text-field label = "First Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="8">
                                <v-text-field label = "Last Name"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="12" md="8">
                                <v-text-field label="E-Mail"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="12" md="8">
                                <v-textarea label="Please write your message here...(max 500 characters)"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
        </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="px-16">
        <v-row justify="center">
            <v-col align="center" cols="12" md="8">
                <v-card color="#f4b754" class="pa-6">
                    <v-row>
                        <v-col>
                            <v-card>
                                <v-row>
                                    <v-col>
                                        <h1 class="custom-color">Opening Hours</h1>
                                    </v-col>
                                    
                                </v-row>
                                
                                <v-row>
                                    <v-col  align="space-around">
                                        <p>Visit Us: </p>
                                        <p>example</p>
                                    </v-col>
                                    
                                </v-row>
                                
                                <v-row>
                                    <p></p>
                                </v-row>
                                
                                <v-row>
                                    <p></p>

                                </v-row>
                            </v-card>
                            
                        </v-col>
                        <v-col><iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5299.62989237724!2d10.849799!3d48.38329100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ebcdc0a913c13%3A0xc251e675dd293f06!2sDr.-D%C3%BCrrwanger-Stra%C3%9Fe%2015F%2C%2086156%20Augsburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1715632174435!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe></v-col>
                    </v-row>
                    
                </v-card>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup></script>
<style scoped>
.hero-section{
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('@/assets/hero_placeholder.webp');
    background-size: cover;
    background-position: center;
    width: 100%;
}
.custom-color{
    color: #112A46 !important;
}
</style>
