<template>
    <v-dialog :value="ConfirmService.ConfirmMode" class="muted" :max-width="width" persistent>
        <v-card class="border-a-2 border-primary round-10 darkgrey">
            <div class="pa-3 text-center">
                <span class="headline white--text">{{ ConfirmService.Title }}</span>
            </div>
            <v-card-text class="text-center pb-3 white--text" v-html="ConfirmService.Detail" />
            <v-card-actions class="pt-0 pb-4 d-flex justify-center">
                <v-btn small color="accent1" @click="ConfirmService.close(false)">{{ ConfirmService.Options.CancelText }}</v-btn>
                <v-btn color="primarypurple" small @click="ConfirmService.close(true)">
                    {{ ConfirmService.Options.ConfirmText }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" src="./confirm.component.ts" />
