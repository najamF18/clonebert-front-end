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
                            {{ formatVal(item.book_price) }}
                        </template>
                        <template v-slot:[`item.book_value`]="{item}">
                            {{ formatVal(item.book_value) }}
                        </template>
                        <template v-slot:[`item.market_value`]="{item}">
                            {{ formatVal(item.market_value) }}
                        </template>
                        <template v-slot:[`item.market_price`]="{item}">
                            {{ formatVal(item.market_price) }}
                        </template>
                        <template v-slot:[`item.gains`]="{item}">
                            <v-chip  v-if="item.gains" :color="getColor(item.gains)" dark label>
                                {{ formatVal(item.gains) }}
                            </v-chip>
                        </template>
                        <template v-slot:[`item.position`]="{item}">
                            {{ isNumber(item.position) ? formatVal(item.position) : item.position }}
                        </template>
                    </v-data-table>
                </v-col> </v-row
            >
        </base-card>
    </div>
</template>

<script lang="ts" src="./holdings.component.ts" />


