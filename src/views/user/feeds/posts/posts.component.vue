<template>
     <div>
          <div class="my-2" v-for="(items,idx) in SocialMediaSrv.posts.value" :key="idx">
              
          <post-card :item="items"></post-card>
     </div>
     </div>
     
</template>

<script lang="ts" src="./posts.component.ts" />