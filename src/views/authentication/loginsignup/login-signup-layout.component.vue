<template>
    <div>
        <v-img :src="$vuetify.breakpoint.mdAndUp ? 'images/Login_bg.jpg' : ''" class="px-6">
            <v-row>
                <v-col cols="12" md="4">
                    <router-view />
                </v-col>
            </v-row>
        </v-img>
    </div>
</template>

<script lang="ts" src="./login-signup-layout.component.ts" />
