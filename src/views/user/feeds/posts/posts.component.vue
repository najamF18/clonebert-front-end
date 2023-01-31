<template>
     <div>
          
          <v-card width="80%" color="black" class="ma-auto">
              
          <div class="my-2" v-for="(items,idx) in SocialMediaSrv.feeds" :key="idx">
          <share-post-card @showPost="handleShowPost" v-if="items.post_id" :item="items"/>
          <post-card @showPost="handleShowPost"  :item="items" :likes="items.post_likes"></post-card>
     </div>
     </v-card>
     </div>
     
     
</template>

<script lang="ts" src="./posts.component.ts" />