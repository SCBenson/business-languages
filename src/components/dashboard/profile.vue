<template>
    <v-main class="ma-0 pa-0">
        
        <v-card>
            <h1>Profile Information</h1>

            <v-form>
                <v-row>
                    <v-col class="text-center d-flex align-center justify-center">
                        <p>First Name: </p>
                    </v-col>
                    
                    <v-col>

                        <v-text-field
                        width="350"
                        disabled
                        readonly
                        variant="outlined"
                        class="mx-auto"

                        > Sean
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col class="text-center d-flex align-center justify-center">
                        <p>Last Name: </p>
                    </v-col>
                    
                    <v-col>

                        <v-text-field
                        width="350"
                        disabled
                        readonly
                        variant="outlined"
                        class="mx-auto"
                        > Benson
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col class="text-center d-flex align-center justify-center">
                        <p>Date of Birth: </p>
                    </v-col>

                    <v-col>

                        <v-text-field
                        width="350"
                        disabled
                        readonly
                        variant="outlined"
                        class="mx-auto"
                        > 04/01/1998
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col></v-col>
                    <v-col class="text-center">
                        <v-btn
                        color="green">Edit</v-btn>
                    </v-col>
                </v-row>
                
            </v-form>


        </v-card>
    </v-main>
</template>
<script setup>
</script>