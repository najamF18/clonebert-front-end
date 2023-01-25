
import { UserSession } from '@/sdk';

<template>
    <v-card width="80%" color="black" class="ma-auto">
        <div class="my-2" v-for="(items, idx) in socialMediaSrv.timelinePosts" :key="idx" :id="'post-' + items.id">
            <div v-if="items.creator.user.id != UserSession.Session.uid">
                <v-card color="darkgrey" rounded="lg" elevation="20" class="ma-auto pa-3" width="600">
                    <h4 class="text-start font-weight-light grey--text px-5 pt-3 mb-1">You shared this post.</h4>
                    <v-divider dark class="mx-2"></v-divider>
                    <v-list color="darkgrey" class="px-2" :rounded="true">
                    
                        <v-list-item class="grow">
                            <v-list-item-avatar size="60">
                                <img :src="items.post_shares.find(i => i.shared_by.user.id == UserSession.Session.uid ).shared_by.profile_pic" alt="John" />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white--text text-start align-center">{{ UserSession.Session.username }}</v-list-item-title>
                                 <v-list-item-subtitle class="grey--text text-start">{{ $helpers.getTimeAgo(items.post_shares.find(i => i.shared_by.user.id == UserSession.Session.uid ).timestamp) }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <div >

                      <post-card @showPost="handleShowPost($event)"  class="cursor-pointer" :item="items" :likes="items.post_likes" />
                    </div>
                </v-card>
            </div>

            <post-card v-else :item="items" :likes="items.post_likes" />
            
        </div>
    </v-card>
</template>

<script lang="ts" src="./timeline.component.ts" />