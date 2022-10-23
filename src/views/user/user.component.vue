<template>
    <v-app class="height-100x">
        <v-container fluid class="py-0 px-0 height-100vh" style="position: relative;">
            <drawer-component />
            <app-bar-component />
            <v-main class="height-100vh overflow-auto">
                <div class="black white--text lighten-5">
                    <router-view :key="$route.fullPath" />
                </div>
            </v-main>
            <v-fade-transition>
                <v-overlay :value="LoaderSrv.FullScreenLoader" z-index="300">
                    <div class="d-flex flex-column align-center">
                        <v-progress-linear indeterminate color="white" rounded />
                        <h2 v-html="LoaderSrv.FullScreenLoaderMessage" />
                    </div>
                </v-overlay>
            </v-fade-transition>
        </v-container>
    </v-app>
</template>

<script lang="ts" src="./user.component.ts" />
