<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <base-form >
                <v-row align-content="center" >
                    <v-col cols="12" offset-md="3" md="6" align-self="center">
                         <div class="d-flex justify-center align-end height-200">
                        <v-hover v-slot="{hover}">
                            <v-avatar class="cursor-pointer" size="150">
                                <img :src="image" />
                                <v-fade-transition>
                                    <v-overlay v-if="hover" absolute color="secondary">
                                        <v-icon size="40" color="white" @click="$refs.file.click()"> mdi-camera-plus </v-icon>
                                        <input class="d-none" type="file" ref="file" @change="uploadImage($event)" accept="image/*" />
                                    </v-overlay>
                                </v-fade-transition>
                            </v-avatar>
                        </v-hover>
                    </div>
                        <div class="mb-3">
                            <base-text-field label="UserName" hide-details :disabled="true" :value.sync="userProfile.user.username"/>
                        </div>

                        <div class="mb-3">
                            <base-text-field label="Email" hide-details :disabled="true" :value.sync="userProfile.user.email"/>
                        </div>

                        <div class="mb-3">
                            <base-text-field label="Location" hide-details :value.sync="userProfile.location" />
                        </div>

                        <div class="mt-5">
                            <base-btn dark class="white black--text" block @click="UpdateProfile()"> Update Profile </base-btn>
                        </div>
                    </v-col>
                </v-row>
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./basic-info.component.ts" />
