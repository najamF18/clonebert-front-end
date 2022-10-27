<template>
    <div class="pa-5">
      <v-alert
      dense
      v-if="!IsLoginCoinBase"
      type="error"
      class="white--text"
    >
      Please verify through <strong>CoinBase</strong>  to use this service  
    </v-alert>
        <base-card class="rounded darkgrey"
            ><h3 class="pa-3 white--text">Holdings List</h3>
            <v-row>
                <v-col cols="12">
                    <v-data-table :headers="HoldingsHeaders" :items="HoldingsData.value" :items-per-page="5" class="theme--dark">
                        <template v-slot:[`item.book_price`]="{item}">
                            {{ item.book_price.toFixed(2) }}
                        </template>
                        <template v-slot:[`item.book_value`]="{item}">
                            {{ item.book_value.toFixed(2) }}
                        </template>
                        <template v-slot:[`item.market_value`]="{item}">
                            {{ item.market_value.toFixed(2) }}
                        </template>
                        <template v-slot:[`item.market_price`]="{item}">
                            {{ item.market_price.toFixed(2) }}
                        </template>
                        <template v-slot:[`item.gains`]="{item}">
                            <v-chip :color="getColor(item.gains)" dark label>
                                {{ item.gains.toFixed(2) }}
                            </v-chip>
                        </template>
                        <template v-slot:[`item.position`]="{item}">
                            {{ isNumber(item.position) ? item.position.toFixed(2) : item.position }}
                        </template>
                    </v-data-table>
                </v-col> </v-row
            >'
        </base-card>
        <base-card class="my-3 rounded darkgrey">
            <h3 class="pa-3 white--text">Transactions List</h3>
            <v-row>
                <v-col cols="12">
                    <v-data-table :headers="TransactionsHeaders" :items="TransactionsData.value" :items-per-page="5" class="elevation-1 theme--dark">
                        <template v-slot:[`item.created_at`]="{item}">
                            {{ item.created_at.slice(0, 10) }}
                        </template>

                        <template v-slot:[`item.position`]="{item}">
                            {{ isNumber(item.position) ? item.position.toFixed(2) : item.position }}
                        </template>

                        <template v-slot:[`item.book_price`]="{item}">
                            {{ item.book_price.toFixed(2) }}
                        </template>

                        
                        <template v-slot:[`item.gains`]="{item}">
                            
                            <v-chip :color="getColor(item.gains)" dark label>
                           {{ item.gains ? item.gains.toFixed(2) : item.gains }}
                           </v-chip>
                        </template>

                        <template v-slot:[`item.native_amount.amount`]="{item}">
                            {{ item.native_amount.amount.toFixed(2) }}
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./transaction.component.ts" />


