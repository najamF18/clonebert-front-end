<template>
    <!-- <div class="rounded-xl height-20 darkgrey"> -->
    <v-sheet :max-width="256" class="d-flex  justify-center rounded-circle secondarygrey" height="30" width="30">
        <v-icon class="d-flex align-center" small :color="color"> mdi-{{ iconName }} </v-icon>
    </v-sheet>
    <!-- </div> -->
</template>

<script lang="ts" src="./base-icon.component.ts" />
