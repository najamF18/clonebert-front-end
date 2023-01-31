<template>
    <v-card  color="darkgrey" rounded="lg" elevation="20" class="ma-auto pa-3" width="600">
                    <h4 class="text-start font-weight-light grey--text px-5 pt-3 mb-1">You shared this post.</h4>
                    <v-divider dark class="mx-2"></v-divider>
                    <v-list color="darkgrey" class="px-2" :rounded="true">
                    
                        <v-list-item class="grow" @click="$router.push({name: 'User Profile View', params: {id: item.shared_by.id}})">
                            <v-list-item-avatar size="60">
                                <img :src="item.shared_by.profile_pic" alt="John" />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title class="white--text text-start align-center">{{ item.shared_by.user.username}}</v-list-item-title>
                                 <v-list-item-subtitle class="grey--text text-start">{{ $helpers.getTimeAgo(item.timestamp) }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-row class="px-5 ma-0">
            <span class="description text-start">{{ item.description }}</span>
        </v-row>
                    <div class="border-card rounded-lg">

                     <v-card color="darkgrey" rounded="lg" elevation="20" class="ma-auto border-card" width="600">
        
        <v-list  color="darkgrey" class="px-2" :rounded=true>
            <v-list-item class="grow" @click="$router.push({name: 'User Profile View', params: {id: item.post_id.creator.id}})">
                <v-list-item-avatar size="60">
                    <img :src="item.post_id.creator.profile_pic" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text text-start">{{item.post_id.creator.user.username }}</v-list-item-title>
                    <v-list-item-subtitle class="grey--text text-start">{{ $helpers.getTimeAgo(item.post_id.timestamp) }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

       

        <v-row class="px-5 ma-0 pb-2">
            <span class="description text-start">{{ item.post_id.description }}</span>
        </v-row>

        <v-avatar v-if="$helpers.isImageUrl(item.post_id.media_file)"  @click="handlePost(item.post_id.id)" size="100%" class="text-center cursor-pointer pb-2" tile>
            <img
                :src="item.post_id.media_file"
                alt="John"
            />
        </v-avatar>
        <video
            
            controls
            preload="auto"
            width="500"
            height="300"
            @click="handlePost(item.post_id.id)"
            class="cursor-pointer"
            v-if="$helpers.isVideoUrl(item.post_id.media_file)"
        >
            <source
                :src="item.post_id.media_file"
            />
        </video>

    </v-card>
                    </div>
                </v-card>
    
</template>
<style lang="scss" scoped>
.description {
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    color: #e4e6eb;
}
.border-card{
    border: 1px solid gray;
}
</style>
<script lang="ts" src="./share-post-card.component.ts" />