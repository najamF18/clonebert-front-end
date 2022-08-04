<template>
    <div>
        <v-row class="pa-5">
            <v-col cols="12" md="3" v-for="card in 4" :key="card">
                <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
                    <h2 class="white--text">
                        $12.34
                    </h2>
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" src="./dashboard.component.ts" />
