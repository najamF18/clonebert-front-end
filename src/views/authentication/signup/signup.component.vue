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
            <h3 style="font-size:1.5rem; font-weight:500" class=" white--text text-left mb-3">Sign Up</h3>
            <base-form @submit="signup" #default="{invalid}">
                <div class="mb-3">
                    <base-text-field label="Username" hide-details :value.sync="signupData.username" />
                </div>
                <div class="mb-3">
                    <base-text-field label="Email" hide-details :value.sync="signupData.email" />
                </div>
                <div class="mb-3">
                    <base-text-field label="Password" vid="Password" type="password" hide-details :value.sync="signupData.password" />
                </div>
                <div>
                    <base-text-field
                        label="Confirm Password"
                        rules="confirmed:Password"
                        type="password"
                        hide-details
                        :value.sync="signupData.confirmPassword"
                    />
                </div>
                <div class="d-flex justify-space-between align-center mt-3">
                    <div>
                        <base-checkbox class="mt-0" label="">
                            <template #label>
                                <div class="muted--text">
                                    Remember me
                                </div>
                            </template>
                        </base-checkbox>
                    </div>
                    <div>
                        <p @click="$router.push({name: 'Forgot Password'})" class="cursor-pointer btnprimary--text font-weight-medium">
                            Forgot Password
                        </p>
                    </div>
                </div>
                <div class="mt-3">
                    <base-btn dark :disabled="invalid" type="submit" class="white black--text" block>
                        SIGN UP
                    </base-btn>
                </div>
                <div class="mt-3 text-center">
                    <p class="white--text">Already have an Account?<a @click="$router.push({name: 'Login'})"> Sign In</a></p>
                </div>
                <div class="mt-3 text-center">
                    <p class="white--text">By creating an account you are accepting our <a href="#"> Terms & Conditions</a></p>
                </div>
            </base-form>
        </base-card>
        <forgot-password-component />
    </div>
</template>

<script lang="ts" src="./signup.component.ts" />
