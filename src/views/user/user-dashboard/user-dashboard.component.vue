<template>
    <v-container class="black">
        <back-page></back-page>
        <v-row align-content="center">
            <v-col cols="12" md="3" align-self="center">
                <base-card class="pa-10 mt-3 darkgrey elevation-4 rounded-lg">
                    <div class="d-flex justify-center align-end height-200">
                        <v-avatar class="cursor-pointer" size="150">
                            <img :src="user.profile_pic" />
                        </v-avatar>
                    </div>
                    <div class="mt-5">
                        <div class="mb-2 white--text">
                            <v-icon small color="secondary "> mdi-at </v-icon>
                            <span class="subtitle font-weight-bold ml-1">{{ user.user.username }}</span>
                        </div>
                        <div class="mb-2 white--text">
                            <v-icon small color="secondary "> mdi-face-agent </v-icon>
                            <span class="subtitle font-weight-light ml-1">{{ user.description }}</span>
                        </div>
                        <div class="mb-2 white--text">
                            <v-icon small color="secondary"> mdi-map-marker-radius </v-icon>
                            <span class="subtitle font-weight-light ml-1">{{ user.location }}</span>
                        </div>
                    </div>
                </base-card>

                <base-card class="pa-2 mt-3 darkgrey elevation-4 rounded-lg">
                    <v-tabs v-model="tabs" fixed-tabs vertical color="darkgrey">
                        <v-tabs-slider color="primarypurple"></v-tabs-slider>
                        <v-tab href="#mobile-tabs-5-1" class="white--text darkgrey">
                            <span>Transactions</span>
                        </v-tab>

                        <v-tab href="#mobile-tabs-5-2" class="white--text darkgrey">
                            <span>Holdings</span>
                        </v-tab>
                    </v-tabs>
                </base-card>
            </v-col>

            <v-col cols="12" md="9">
                <base-card class="pa-10 mt-3 darkgrey elevation-4 rounded-lg">
                    <v-tabs-items v-model="tabs" class="darkgrey">
                        <v-tab-item value="mobile-tabs-5-1" class="darkgrey">
                            <div v-if="!isError">
                                <h3 class="pa-3 white--text">Transactions</h3>
                                <v-row>
                                    <v-col cols="12">
                                       <v-data-table sort-by="created_at" :sort-desc="defaultsSort"  :headers="TransactionsHeaders" :items="transactionData" :items-per-page="5" class="elevation-1 theme--dark">
                        <template v-slot:[`item.created_at`]="{item}">
                            {{ getDateTime(item.created_at) }}
                        </template>

                        <!-- <template v-slot:[`item.position`]="{item}">
                            {{ isNumber(item.position) ? item.position.toFixed(2) : item.position }}
                        </template> -->

                        <template v-slot:[`item.book_price`]="{item}">
                            {{getVal(item.book_price.toPrecision(2)) }}
                        </template>

                        <template v-slot:[`item.book_value`]="{item}">
                            {{getVal(item.book_value.toPrecision(2)) }}
                        </template>

                        
                        <template v-slot:[`item.gains`]="{item}">
                            
                            <v-chip v-if="!!item.gains" :color="getColor(item.gains)" dark label>
                           {{ item.gains ? item.gains.toPrecision(2)  : item.gains }}
                           </v-chip>
                           <div v-else> N/A</div>
                        </template>

                        <template v-slot:[`item.native_amount.amount`]="{item}">
                            {{ item.native_amount.amount.toPrecision(2)  }}
                        </template>

                        <template v-slot:[`item.amount.amount`]="{item}">
                            {{ getVal(item.amount.amount)  }}
                        </template>

                        <template v-slot:[`item.market_value`]="{item}">
                            {{ getVal(item.market_value.toPrecision(2))  }}
                        </template>
                        <template v-slot:[`item.market_price`]="{item}">
                            {{ getVal(item.market_price.toPrecision(2))  }}
                        </template>
                    </v-data-table>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else>
                                <v-alert dense outlined type="error" color="error"> You need to follow {{ user.user.username }} to see trading data </v-alert>
                            </div>
                        </v-tab-item>
                        <v-tab-item value="mobile-tabs-5-2" class="darkgrey">
                            <div v-if="!isError">
                                <h3 class="pa-3 white--text">Holdings List</h3>
                                <v-row>
                                    <v-col cols="12">
                                        <v-data-table :headers="HoldingsHeaders" :items="holdingData" :items-per-page="5" class="theme--dark">
                                            <template v-slot:[`item.book_price`]="{item}">
                                                {{ item.book_price.toPrecision(2)  }}
                                            </template>
                                            <template v-slot:[`item.book_value`]="{item}">
                                                {{ item.book_value.toPrecision(2) }}
                                            </template>
                                            <template v-slot:[`item.market_value`]="{item}">
                                                {{ item.market_value.toPrecision(2) }}
                                            </template>
                                            <template v-slot:[`item.market_price`]="{item}">
                                                {{ item.market_price.toPrecision(2)  }}
                                            </template>
                                            <template v-slot:[`item.gains`]="{item}">
                                                <v-chip v-if="item.gains" :color="getColor(item.gains)" dark label>
                                                    {{ item.gains.toPrecision(2)  }}
                                                </v-chip>
                                            </template>
                                            <template v-slot:[`item.position`]="{item}">
                                                {{ isNumber(item.position) ? item.position.toPrecision(2)  : item.position }}
                                            </template>
                                        </v-data-table>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else>
                                <v-alert dense outlined type="error" color="error"> You need to follow {{ user.user.username }} to see trading data </v-alert>
                            </div>
                        </v-tab-item>
                    </v-tabs-items>
                </base-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./user-dashboard.component.ts" />
