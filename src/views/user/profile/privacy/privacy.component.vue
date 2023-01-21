<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <v-row>
                <v-col cols="12">
                    <v-alert dense outlined type="info" color="white">
                        If enabled, only users that follow you can view your profile
                    </v-alert>
                    <div class="mb-3 white--text flex row mx-auto">
                        <p class="align-self-center mr-3 font-weight-regular">Change Privacy Status</p>
                        <v-switch color="success" v-model="userSrv.userProfile.privacy" @change="UpdateProfile()" inset></v-switch>
                    </div>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./privacy.component.ts" />
