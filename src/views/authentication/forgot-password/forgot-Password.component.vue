<template>
    <div class="d-flex justify-center py-7">
        <base-card class="pa-10 px-15 rounded darkgrey" flat max-width="600px">
            <div class="d-flex justify-space-between align-center">
                <div>
                    <h1 class="white--text" style="font-size:2.19rem; font-weight:650">| CLONEBERT</h1>
                    <h4 class="white--text font-weight-medium">follow the experts</h4>
                </div>
                <div class="ml-5 pa-3">
                    <v-img src="images/rocket.png" width="65%" />
                </div>
            </div>
            <br /><br />
            <h4 style="font-size:1.5rem; font-weight:500" class=" white--text text-left mb-3">Forgot Password</h4>
            <base-form #default="{invalid}" @submit="ForgotPassword">
                <div class="mb-3">
                    <base-text-field label="Email" hide-details :value.sync="forgotPasswordData.email" />
                </div>

                <div class="mt-3">
                    <base-btn dark :disabled="invalid" type="submit" class="white black--text" block>
                        RESET
                    </base-btn>
                </div>
                <div class="mt-3 text-center">
                    <p class="white--text">Already have an Account?<a @click="$router.push({name: 'Login'})"> Sign In</a></p>
                </div>
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./forgot-Password.component.ts" />
