<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <base-form @submit="changeEmail">
                <v-row align-content="center">
                    <v-col cols="12" offset-md="3" md="6">
                        <div class="mb-3">
                            <base-text-field label="Email" hide-details :value.sync="changeEmailData.new_email" />
                        </div>

                        <div class="mt-5">
                            <base-btn class="white black--text" block type="submit">
                                Change Email
                            </base-btn>
                        </div>
                    </v-col>
                </v-row>
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./change-email.component.ts" />
