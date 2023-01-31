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
        <base-card class="my-1 rounded darkgrey">
            <h3 class="pa-3 white--text">Past Transactions </h3>
            <v-row>
                <v-col cols="12">
                    <v-data-table sort-by="created_at" :sort-desc="defaultsSort"  :headers="TransactionsHeaders" :items="TransactionsData.value" :items-per-page="5" class="elevation-1 theme--dark">
                        <template v-slot:[`item.created_at`]="{item}">
                            {{ getDateTime(item.created_at) }}
                        </template>

                        <template v-slot:[`item.position`]="{item}">
                            {{ isNumber(item.position) ? formatVal(item.position) : item.position }}
                        </template>

                        <template v-slot:[`item.book_price`]="{item}">
                            {{getVal(formatVal(item.book_price)) }}
                        </template>

                        <template v-slot:[`item.book_value`]="{item}">
                            {{getVal(formatVal(item.book_value)) }}
                        </template>

                       

                        
                        <template v-slot:[`item.gains`]="{item}">
                            
                            <v-chip v-if="!!item.gains" :color="getColor(item.gains)" dark label>
                           {{ item.gains ? formatVal(item.gains)  : item.gains }}
                           </v-chip>
                           <div v-else> N/A</div>
                        </template>

                        <template v-slot:[`item.native_amount.amount`]="{item}">
                            {{ formatVal(item.native_amount.amount)  }}
                        </template>

                        <template v-slot:[`item.amount.amount`]="{item}">
                            {{ getVal(item.amount.amount)  }}
                        </template>

                        <template v-slot:[`item.market_value`]="{item}">
                            {{ getVal(formatVal(item.market_value))  }}
                        </template>
                        <template v-slot:[`item.market_price`]="{item}">
                            {{ getVal(formatVal(item.market_price))  }}
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./transaction.component.ts" />


