<template>
    <div>
        <base-card class="pa-10 mt-3 px-15 rounded darkgrey">
            <v-row>
              <h4 class="white--text">Blocked User List</h4>
                <v-col v-if="socialMediaSrv.blockedUser.length >0" cols="12">
                    <v-sheet v-for="(item,idx) in socialMediaSrv.blockedUser" :key="idx" outlined elevation="5" class="pa-2 my-2 white--text flex row justify-space-between darkgrey">
                        <p class="align-self-center mr-3 font-weight-regular">{{ item.user.username }}</p>
                        <v-btn small color="success" outlined   @click="UnBlockUser(item.id)">
                            <v-icon class="mr-1">mdi-account-minus</v-icon> Unblock
                        </v-btn>
                    </v-sheet>
                </v-col>
                <v-col v-else cols="12">
                        <p class="text-center mr-3 grey--text font-weight-regular">No blocked user</p>
                </v-col>
            </v-row>
        </base-card>
    </div>
</template>

<script lang="ts" src="./blocked-users.component.ts" />
