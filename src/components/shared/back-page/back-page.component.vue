<template>
    <div>
        <div @click="$router.go(-1)" class="d-flex text-start muted--text cursor-pointer" style="width:min-content">
            <v-icon color="muted">
                mdi-arrow-left-thin
            </v-icon>
            <p>
                Back
            </p>
        </div>
    </div>
</template>
<script src="./back-page.component.ts" lang="ts" />
