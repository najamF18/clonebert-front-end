<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
        <base-form v-if="!IsApiAdded" @submit="SubmitKeys" #default="{invalid}">
        <v-row align-content="center">
                    <v-col cols="12" offset-md="3" md="6">
                        <div class="mb-3">
                            <base-text-field type="text" rules="required" label="Enter Api Key" hide-details :value.sync="ApiKey" />
                        </div><div class="mb-3">
                            <base-text-field type="text" rules="required" label="Enter Api Secret" hide-details :value.sync="ApiSecret" />
                        </div>

                        <div class="mt-5">
                            <base-btn :disabled="invalid"  dark class="white black--text" block type="submit">
                                Submit Keys
                            </base-btn>
                        </div>
                    </v-col>
                </v-row>
                </base-form>
            <v-row v-else>
                <v-col cols="12">
                    <v-sheet outlined elevation="5" class="pa-2  my-2 white--text flex row justify-space-between  darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">CoinBase</p>
                        <v-btn @click="RemoveKeys()" class="ma-2" outlined color="blue"><v-icon small class="mr-1">mdi-weather-sunny</v-icon> Unlink Coinbase </v-btn>
                    </v-sheet>
                    <!-- <v-sheet outlined elevation="5" class="pa-2  my-2 white--text flex row justify-space-between  darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">Questrades</p>
                        <v-btn class="ma-2" outlined color="success"><v-icon small class="mr-1">mdi-triangle-outline</v-icon> Questrade </v-btn>
                    </v-sheet>
                    <v-sheet outlined elevation="5" class="pa-2  my-2 white--text flex row justify-space-between  darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">Binance</p>
                        <v-btn class="ma-2" outlined color="yellow"><v-icon small class="mr-1">mdi-diamond</v-icon> Binance </v-btn>
                    </v-sheet>
                    <v-sheet outlined elevation="5" class="pa-2 my-2 white--text flex row justify-space-between  darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">Wallet Address</p>
                        <base-text-field hide-details vid="Email" />
                        
                    </v-sheet> -->
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./manage-portfolio.component.ts" />
