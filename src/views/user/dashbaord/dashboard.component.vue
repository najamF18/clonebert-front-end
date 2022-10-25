<template>
    <div class="black white--text lighten-5 height-100vh">
        <v-row class="pa-5 pb-0">
            <v-col cols="12">
            
            <v-alert
      icon="mdi-alert-circle"
      prominent
      text
      class="link--text lighten-2"
      
    >
    <h5>CLONEBERT DISCLAIMER</h5>
      <span class="caption">Past performance is not necessarily a guide to future performance. An investor may get back less than the amount invested. Understand the risks and potential losses of investing, consult a certified financial advisor if you have questions.</span>
    </v-alert>
    </v-col>
        </v-row>
        <v-row class="px-5 mt-0">
            <v-col cols="12" md="3" v-for="card in 4" :key="card">
                <base-card class="pa-5 px-15 rounded darkgrey">
                    <h2 class="white--text">
                        $12.34 
                    </h2>
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" src="./dashboard.component.ts" />
