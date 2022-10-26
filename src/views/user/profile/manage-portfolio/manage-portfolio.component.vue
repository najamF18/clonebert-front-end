<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <v-row>
                <v-col cols="12">
                    
                    <v-sheet outlined elevation="5" class="pa-2  my-2 white--text flex row justify-space-between  darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">ETrade</p>
                        <v-btn class="ma-2" outlined color="blue"><v-icon small class="mr-1">mdi-weather-sunny</v-icon> E*Trade </v-btn>
                    </v-sheet>
                    <v-sheet outlined elevation="5" class="pa-2  my-2 white--text flex row justify-space-between  darkgrey">
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
                        
                    </v-sheet>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./manage-portfolio.component.ts" />
