<template>
    <v-card color="darkgrey" rounded="lg" elevation="20" class="ma-auto" width="500">
        <v-divider></v-divider>
        <v-list color="darkgrey" class="px-2" rounded="lg">
            <v-list-item class="grow">
                <v-list-item-avatar size="60">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text text-start">John Leider</v-list-item-title>
                    <v-list-item-subtitle class="grey--text text-start">4 hours ago</v-list-item-subtitle>
                </v-list-item-content>

                <v-row align="center" justify="end">
                    <v-btn class="white--text" icon>
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                    <!-- <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span> -->
                </v-row>
            </v-list-item>
        </v-list>

        <v-avatar size="500" rounded="xl"  >
            <img class="pa-5" style="border-radius:30px" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <v-divider dark class="mx-2"></v-divider>

        <v-card-actions>
      <v-list-item class="grow">
          <v-btn class="white--text mr-1" icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
          <span class="subheading mr-2">256</span>
          
          <v-btn class="white--text mr-1" icon>
                        <v-icon>mdi-chat</v-icon>
                    </v-btn>
          <span class="subheading mr-2">256</span>

        <v-row
          align="center"
          justify="end"
        >
          <v-btn class="white--text mr-1" icon>
                        <v-icon>mdi-share</v-icon>
                    </v-btn>
          
        </v-row>
      </v-list-item>
    </v-card-actions>


    </v-card>
</template>
<script lang="ts" src="./post-card.component.ts" />