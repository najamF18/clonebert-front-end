<template>
     <v-card width="80%" color="black" class="ma-auto">
          <div class="my-2" v-for="(items,idx) in SocialMediaSrv.posts.value" :key="idx">
              
          <post-card :item="items"></post-card>
     </div>
     </v-card>
     
</template>

<script lang="ts" src="./posts.component.ts" />