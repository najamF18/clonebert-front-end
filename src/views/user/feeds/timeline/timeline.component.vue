
import { UserSession } from '@/sdk';

<template>
    <v-card width="80%" color="black" class="ma-auto">
        <div class="my-2" v-for="(items, idx) in socialMediaSrv.timelinePosts" :key="idx" :id="'post-' + items.id">
            
                <share-post-card @showPost="handleShowPost" v-if="items.post_id" :item="items" />
            <post-card v-else :item="items" :likes="items.post_likes" />
            
        </div>
    </v-card>
</template>

<script lang="ts" src="./timeline.component.ts" />