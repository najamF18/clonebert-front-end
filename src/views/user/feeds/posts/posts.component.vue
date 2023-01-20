<template>
     <div>
          
          <v-card width="80%" color="black" class="ma-auto">
              
          <div class="my-2" v-for="(items,idx) in SocialMediaSrv.feeds.value" :key="idx">
              
          <post-card :item="items" :likes="items.post_likes"></post-card>
     </div>
     </v-card>
     </div>
     
     
</template>

<script lang="ts" src="./posts.component.ts" />