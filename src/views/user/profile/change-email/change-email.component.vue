<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <base-form @submit="changeEmail" #default="{invalid}">
                <v-row align-content="center">
                    <v-col cols="12" offset-md="3" md="6">
                        <div class="mb-3">
                            <base-text-field label="Email" :disabled="true" hide-details vid="Email" :value.sync="currentEmail" />
                        </div>

                        <div class="mb-3">
                            <base-text-field label="New Email" hide-details vid="Email" :value.sync="changeEmailData.new_email" />
                        </div>
                        <div class="">
                            <base-text-field label="Confirm Email" rules="confirmed:Email" hide-details :value.sync="changeEmailConfirm" />
                        </div>
                        <p class="mt-0 error--text font-italic">
                            Your account will be disabled untill you verify your email.
                        </p>

                        <div class="mt-5">
                            <base-btn :disabled="invalid" dark class="white black--text" block type="submit">
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
