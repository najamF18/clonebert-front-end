<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <v-row>
              <h4 class="white--text">Blocked User List</h4>
                <v-col cols="12">
                    <v-sheet outlined elevation="5" class="pa-2 my-2 white--text flex row justify-space-between darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">User List xyz</p>
                        <v-btn icon color="success">
                            <v-icon>mdi-account-minus</v-icon>
                        </v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./blocked-users.component.ts" />
