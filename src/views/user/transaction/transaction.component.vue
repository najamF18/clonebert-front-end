<template>
    <div class="pa-5">
        <h2 class="pb-3">Holdings List</h2>
             <v-row>
                <v-col cols="12">
                     <v-data-table
    :headers="HoldingsHeaders"
    :items="HoldingsData.value"
    :items-per-page="5"
    class="elevation-1 theme--dark"
  ></v-data-table>
                </v-col>
               
            </v-row>
            <h2 class="py-3">Transactions List</h2>
            <v-row>
                <v-col cols="12">
                     <v-data-table
    :headers="TransactionsHeaders"
    :items="TransactionsData.value"
    :items-per-page="5"
    class="elevation-1 theme--dark"
  >
  
<template v-slot:[`item.created_at`]="{item}">
                {{ item.created_at.slice(0, 10) }}
            </template>
</v-data-table>
                </v-col>
               
            </v-row>
    </div>
</template>

<script lang="ts" src="./transaction.component.ts" />


