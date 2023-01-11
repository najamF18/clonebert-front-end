<template>
    <div class="pa-2">
      <v-alert
      dense
      v-if="!IsLoginCoinBase"
      type="error"
      class="white--text"
    >
      Your Api Keys are not <strong>Set</strong> or <strong>Invalid </strong>. 
    </v-alert>
    <v-row :class="{'d-none':!IsLoginCoinBase}">
        <v-col cols="auto" class="ml-auto my-2" >
            <div class="text-center">
            <v-btn
            small
            :loading="FetchTransaction.loading"
      color="darkgrey"
      class="my-2 white--text"
      @click="LoadTransactions()"
    >
    <v-icon
        right
        dark
        class="mr-2"
      >
        mdi-cached
      </v-icon>
      Load Transactions
      
      </v-btn>
      <h6 v-if="FetchTransaction.status" class="font-weight-light ">Transactions Loaded</h6>
            </div>
        </v-col>
    </v-row>
        <base-card class=" my-1 rounded darkgrey"
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
                            <v-chip  v-if="item.gains" :color="getColor(item.gains)" dark label>
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
    </div>
</template>

<script lang="ts" src="./holdings.component.ts" />


