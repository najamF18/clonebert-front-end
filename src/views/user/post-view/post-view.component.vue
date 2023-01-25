<template>
    <v-container class="black">

    
  <v-card width="70%" color="black" class="ma-auto">
    <back-page></back-page>
          <div class="mt-2">
          <post-card :item="post" :likes="post.post_likes" >
          </post-card>
     </div>
     </v-card>
     </v-container>
</template>

<script lang="ts" src="./post-view.component.ts" />