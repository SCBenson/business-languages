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
                        :disabled="!isEditing"
                        :readonly="!isEditing"
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
                        :disabled="!isEditing"
                        :readonly="!isEditing"
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
                        :disabled="!isEditing"
                        :readonly="!isEditing"
                        variant="outlined"
                        class="mx-auto"
                        > 04/01/1998
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col class="text-center d-flex align-center justify-center">
                        <p>Languages Spoken: </p>
                    </v-col>

                    <v-col>
                        <v-text-field
                        width="350"
                        :disabled="!isEditing"
                        :readonly="!isEditing"
                        variant="outlined"
                        class="mx-auto"
                        > English Spanish
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col></v-col>
                    <v-col class="d-flex text-center justify-center">
                        <v-btn
                        color="blue"
                        v-if="!isEditing"
                        class="mx-2"
                        @click="startEditing"
                        >Edit
                    </v-btn>
                    <v-btn
                    color="green"
                    v-if="isEditing"
                    class="mx-2">Save</v-btn>
                    <v-btn 
                    color="red"
                    v-if="isEditing"
                    class="mx-2"
                    @click="cancelEditing"
                    >
                    Cancel</v-btn>
                    </v-col>
                </v-row>
                
            </v-form>


        </v-card>
    </v-main>
</template>
<script setup>
import { DB } from "@/firebase/config.js";
import { ref, reactive } from "vue"
const isEditing = ref(false);

const formData = reactive({
    firstName: "",
    lastName: "",
    birthDate: "",
    languages: [],
    avatarPath: "",
})

const startEditing = () => {
    isEditing.value = true;
}

const cancelEditing = () => {
    isEditing.value = false;
}


</script>