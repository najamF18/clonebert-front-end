<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      bottom left offset-y nudge-bottom="20" nudge-left="10" flat transition="slide-y-reverse-transition" rounded="lg"
    >
      <template v-slot:activator="{ on, attrs }">
       
        <v-btn
        v-bind="attrs"
          v-on="on" icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
      </template>

      <v-card color="darkgrey">

        <v-list color="darkgrey">
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title class="title">Notifications</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
            color="primary"
            text
            @click="menu = false"
          >
            Read all
          </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
         <v-divider></v-divider>
        <v-list color="darkgrey">
          <v-list-item>
            <v-list-item-avatar size="60">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="white--text">John Leider</v-list-item-title>
              <v-list-item-title class="grey--text ">John Leider share your post.</v-list-item-title>
              <v-list-item-subtitle class="grey--text ">4 hours ago</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'blue--text' : 'white--text'"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-check-all</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>


      </v-card>
    </v-menu>
  </div>
</template>



<script lang="ts" src="./notification-box.component.ts" />