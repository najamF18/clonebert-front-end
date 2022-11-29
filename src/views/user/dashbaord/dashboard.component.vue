<template>
    <div class="black white--text lighten-5">
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
            <v-col cols="12" md="3">
                <base-increase-decrease-component title="Current holdings" :showButton="true" :gains="gainsHoldings" />
            </v-col>
            <v-col cols="12" md="3">
                <base-increase-decrease-component title="Past Holdings" :gains="gainsTransactions" />
            </v-col>
        </v-row>
        <v-row class="px-5 mt-0">
            <v-col cols="12" md="3" v-for="(data, id) in holdings" :key="id">
                <base-card class="rounded darkgrey">
                    <v-row class="pa-6 align-center">
                        <v-col cols="8">
                            <!-- <h4 class="muted--text font-weight-light ">Holdings</h4> -->
                            <span class="white--text ma-auto pa-0 font-weight-bold">{{ data.name }}</span>
                            <span class="align-self-center ml-1 font-weight-bold" :class="data.gains > 0 ? 'success--text' : 'error--text'"
                                >{{ data.gains.toFixed(2) }}%</span
                            >
                            <!-- <h4 class="muted--text font-weight-light ">Date: {{ new Date().toLocaleDateString() }}</h4> -->
                        </v-col>
                        <v-col cols="3">
                            <v-sheet
                                :max-width="256"
                                :color="data.gains > 0 ? 'rgba(0, 210, 91, 0.11)' : 'rgba(252, 66, 74, 0.3)'"
                                class="d-flex justify-center rounded"
                                height="40"
                                width="40"
                            >
                                <v-icon v-if="data.gains > 0" class="d-flex align-center" small color="green"> mdi-arrow-top-right </v-icon>
                                <v-icon v-else class="d-flex align-center" small color="red"> mdi-arrow-bottom-left </v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                <base-btn small tile class="left-top-rounded left-bottom-rounded white black--text ">
                                    1D
                                </base-btn>
                                <base-btn small tile class="black--text white mx-2">
                                    1Y
                                </base-btn>
                                <base-btn small tile class="right-top-rounded right-bottom-rounded black--text white">
                                    Max
                                </base-btn>
                            </div>
                        </v-col>
                    </v-row>
                </base-card>
            </v-col>
        </v-row>

        <v-row class="px-5 mt-2">
            <v-col cols="12" md="4">
                <base-card class="rounded darkgrey">
                    <transaction-chart :container-style="{height: '420px'}" />
                    <!-- <base-card class=" mx-5 rounded darkblue">
                    <v-row class="pa-4 align-center">
                        <v-col cols="8" >
                                <span class="white--text ma-auto pa-0  font-weight-bold ">Transfer to Paypal</span>
                            <h4 class="muted--text font-weight-light ">Potential Growth</h4>
                        </v-col>
                         <v-col cols="4">
                            <span class="white--text ma-auto pa-0  font-weight-bold ">$12.34</span>
                        </v-col>
                    </v-row>
                </base-card> -->
                    <!-- <base-card class="mx-5 my-3 rounded darkblue">
                    <v-row class="pa-4 align-center mx-0">
                        <v-col cols="8" >
                                <span class="white--text ma-auto pa-0  font-weight-bold ">Transfer to Paypal</span>
                            <h4 class="muted--text font-weight-light ">Potential Growth</h4>
                        </v-col>
                         <v-col cols="4">
                            <span class="white--text ma-auto pa-0  font-weight-bold ">$12.34</span>
                        </v-col>
                    </v-row>
                </base-card> -->
                </base-card>
            </v-col>
            <!-- <v-col cols="12" md="8">
                <base-card class="rounded darkgrey">
                    <area-widget :container-style="{height: '400px'}"></area-widget>
                </base-card>
            </v-col> -->
            <!-- <v-col cols="12" md="12">
                <base-card class="rounded darkgrey">
                    <line-widget :container-style="{height: '400px'}"></line-widget>
                </base-card>

                
            </v-col> -->
            <v-col cols="12" md="8">
                <base-card class="rounded darkgrey">
                    <trading-view></trading-view>
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" src="./dashboard.component.ts" />
<style lang="scss" scoped>
.left-top-rounded {
    border-start-start-radius: 20px;
}
.left-bottom-rounded {
    border-end-start-radius: 20px;
}
.right-top-rounded {
    border-start-end-radius: 20px;
}
.right-bottom-rounded {
    border-end-end-radius: 20px;
}
</style>
