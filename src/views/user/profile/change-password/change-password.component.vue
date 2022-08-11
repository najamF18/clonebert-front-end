<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <base-form @submit="changePassword" #default="{invalid}">
                <v-row align-content="center">
                    <v-col cols="12" offset-md="3" md="6">
                        <div class="mb-3">
                            <base-text-field type="password" label="Old Password" hide-details :value.sync="changePasswordData.old_password" />
                        </div>
                        <div>
                            <base-text-field type="password" label="New Password" vid="Password" hide-details :value.sync="changePasswordData.new_password" />
                        </div>
                        <div>
                            <base-text-field type="password" label="Confirm Password" rules="confirmed:Password" hide-details :value.sync="confirmPassword" />
                        </div>

                        <div class="mt-5">
                            <base-btn :disabled="invalid" dark class="white black--text" block type="submit">
                                Change Password
                            </base-btn>
                        </div>
                    </v-col>
                </v-row>
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./change-password.component.ts" />
