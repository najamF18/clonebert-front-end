<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <v-row align-content="center">
                <v-col cols="12" offset-md="3" md="6">
                    <h3 class="white--text">
                        Are your sure you want to disable your account?
                    </h3>

                    <div class="mt-5">
                        <base-btn dark @click="disableAccount" class="error " block>
                            Disable Account
                        </base-btn>
                    </div>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>
<script lang="ts" src="./disable-account.component.ts" />
