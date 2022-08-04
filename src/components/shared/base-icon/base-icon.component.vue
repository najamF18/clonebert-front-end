<template>
    <!-- <div class="rounded-xl height-20 darkgrey"> -->
    <v-sheet
        :max-width="256"
        class="d-flex pb-1 align-center justify-center rounded-circle mx-auto transition-swing secondarygrey"
        elevation="12"
        height="40"
        width="40"
    >
        <v-icon :color="color"> mdi-{{ iconName }} </v-icon>
    </v-sheet>
    <!-- </div> -->
</template>

<script lang="ts" src="./base-icon.component.ts" />
