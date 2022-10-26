<template>
    <v-row class=" ma-0">
        <v-col cols="12" md="3">
            <div class="pt-3">
                <navigation-card-component class="white" titleOne="Profile Setting" :navigation-links="NavigationLinks" />
            </div>
        </v-col>
        <v-col cols="12" :md="!!NavigationLinks.length ? 9 : 12">
            <router-view :key="$route.fullPath" />
        </v-col>
        <!-- <v-col cols="12" md="8">
            <router-view />
        </v-col> -->
    </v-row>
</template>
<script lang="ts" src="./profile.component.ts" />
