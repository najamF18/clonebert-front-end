<template>
    <base-card class="rounded darkgrey">
        <v-row class="pa-6 align-center">
            <v-col cols="8">
                <h4 class="muted--text font-weight-light ">{{ title }}</h4>
                <span class="align-self-center ml-1 font-weight-bold" :class="gains > 0 ? 'success--text' : 'error--text'">{{ gains.toFixed(2) }}%</span>
                <h4 class="muted--text font-weight-light ">Date: {{ new Date().toLocaleDateString() }}</h4>
            </v-col>
            <v-col cols="3">
                <v-sheet
                    :max-width="256"
                    :color="gains > 0 ? 'rgba(0, 210, 91, 0.11)' : 'rgba(252, 66, 74, 0.3)'"
                    class="d-flex justify-center rounded"
                    height="40"
                    width="40"
                >
                    <v-icon v-if="gains > 0" class="d-flex align-center" small color="green"> mdi-arrow-top-right </v-icon>
                    <v-icon v-else class="d-flex align-center" small color="red"> mdi-arrow-bottom-left </v-icon>
                </v-sheet>
            </v-col>
        </v-row>
    </base-card>
</template>
<script lang="ts" src="./base-increase-decrease.component.ts" />
