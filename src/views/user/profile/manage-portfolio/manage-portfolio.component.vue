<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <v-row>
                <v-col cols="12">
                    
                    <v-sheet outlined elevation="5" class="pa-2  my-2 white--text flex row justify-space-between  darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">CoinBase</p>
                        <v-btn href="https://www.coinbase.com/oauth/authorize?client_id=12fd638644c4eb81e698c802e836c0e3bb85fbd3d313ab73de8a9d7fce2c2f25&redirect_uri=https%3A%2F%2Fclonebert.herokuapp.com%2Fcoinbase%2Fcallback&response_type=code&scope=wallet%3Auser%3Aread+wallet%3Aaccounts%3Aread+wallet%3Atransactions%3Aread" class="ma-2" outlined color="blue"><v-icon small class="mr-1">mdi-weather-sunny</v-icon> Sign In with Coinbase </v-btn>
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
