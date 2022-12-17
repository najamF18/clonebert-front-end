<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <base-form >
                <v-row align-content="center" >
                    <v-col cols="12" offset-md="3" md="6" align-self="center">
                        <div class="mb-3 mx-auto">
                            <v-avatar width="150" height="150" class="ma-auto">
                                <img :src="userProfile.profile_pic" alt="John" />
                            </v-avatar>
                        </div>
                        <div class="mb-3">
                            <base-text-field label="UserName" hide-details disable="true" :value.sync="userProfile.user"/>
                        </div>

                        <div class="mb-3">
                            <base-text-field label="Location" hide-details :value.sync="userProfile.location" />
                        </div>

                        <div class="mt-5">
                            <base-btn dark class="white black--text" block type="submit"> Update Profile </base-btn>
                        </div>
                    </v-col>
                </v-row>
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./basic-info.component.ts" />
