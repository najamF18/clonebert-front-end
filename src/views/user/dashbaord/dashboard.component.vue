<template>
    <div class="black white--text lighten-5 ">
        <v-row class="pa-5 pb-0">
            <v-col cols="12">
                <v-alert icon="mdi-alert-circle" prominent text class="link--text lighten-2">
                    <h5>CLONEBERT DISCLAIMER</h5>
                    <span class="caption"
                        >Past performance is not necessarily a guide to future performance. An investor may get back less than the amount invested. Understand
                        the risks and potential losses of investing, consult a certified financial advisor if you have questions.</span
                    >
                </v-alert>
            </v-col>
        </v-row>
        <v-row class="px-5 mt-0">
            <v-col cols="12" md="3" v-for="card in 4" :key="card">
                <base-card class=" rounded darkgrey">
                    <v-row class="pa-6 align-center">
                        <v-col cols="8" >
                                <span class="white--text ma-auto pa-0  font-weight-bold title">$12.34</span>
                            <span class="success--text align-self-center ml-1 font-weight-bold">+3.5%</span>
                            <h4 class="muted--text font-weight-light ">Potential Growth</h4>
                        </v-col>
                         <v-col cols="3">
                            <v-sheet :max-width="256" color="rgba(0, 210, 91, 0.11)"  class="d-flex justify-center rounded " height="40" width="40">
                            <v-icon class="d-flex align-center" small color="green"> mdi-arrow-top-right </v-icon>
                        </v-sheet>
                        </v-col>
                    </v-row>
                </base-card>
            </v-col>
        </v-row>

        <v-row class="px-5 mt-0">
            <v-col cols="12" md="4">
                  <base-card class=" rounded darkgrey">
                    <transaction-chart  :container-style="{height: '200px'}"/>
                <base-card class=" mx-5 rounded darkblue">
                    <v-row class="pa-4 align-center">
                        <v-col cols="8" >
                                <span class="white--text ma-auto pa-0  font-weight-bold ">Transfer to Paypal</span>
                            <h4 class="muted--text font-weight-light ">Potential Growth</h4>
                        </v-col>
                         <v-col cols="4">
                            <span class="white--text ma-auto pa-0  font-weight-bold ">$12.34</span>
                        </v-col>
                    </v-row>
                </base-card>
                 <base-card class="mx-5 my-3 rounded darkblue">
                    <v-row class="pa-4 align-center">
                        <v-col cols="8" >
                                <span class="white--text ma-auto pa-0  font-weight-bold ">Transfer to Paypal</span>
                            <h4 class="muted--text font-weight-light ">Potential Growth</h4>
                        </v-col>
                         <v-col cols="4">
                            <span class="white--text ma-auto pa-0  font-weight-bold ">$12.34</span>
                        </v-col>
                    </v-row>
                </base-card>
        </base-card>
            </v-col>
        </v-row>
       
    </div>
</template>

<script lang="ts" src="./dashboard.component.ts" />
