
import { UserSession } from '@/sdk';

<template>
  <v-card width="80%" color="black" class="ma-auto">
          <div class="my-2" v-for="(items,idx) in socialMediaSrv.timelinePosts" :key="idx">
              
          <post-card :item="items" :likes="items.post_likes">
            
            <template v-if="items.creator.user.id != UserSession.Session.uid" #share>
              <div>
            <h4 class="text-start font-weight-light grey--text px-5 pt-3 mb-1" >You shared this post.</h4>
         <v-divider dark class="mx-2"></v-divider>
        </div>
            </template>
          </post-card>
     </div>
     </v-card>
  <!-- <v-card elevation="20" class="pt-5 ma-auto" width="80%" color="black"   rounded="lg">
    <v-toolbar flat dense color="darkgrey" >

      <v-toolbar-title class="white--text">Your TimeLine</v-toolbar-title>

      <v-spacer></v-spacer>


      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider color="primarypurple"></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primarypurple--text"
          >
           
            <span>Posts</span>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primarypurple--text"
          >
            <span>Shared Post</span>
          </v-tab>

        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs" >
      <v-tab-item
        value="mobile-tabs-5-1"
        style="background-color:black"
      >
          <div class="my-2" style="background-color:black" v-for="(items,idx) in socialMediaSrv.createdPosts" :key="idx">
              
          
     </div>
      </v-tab-item>
      <v-tab-item
        value="mobile-tabs-5-2"
        style="background-color:black"
      >
          <div class="my-2" style="background-color:black" v-for="(items,idx) in socialMediaSrv.createdPosts" :key="idx">
              
          <post-card :item="items" :likes="items.post_likes"></post-card>
     </div>
      </v-tab-item>
    </v-tabs-items>
  </v-card> -->
</template>

<script lang="ts" src="./timeline.component.ts" />