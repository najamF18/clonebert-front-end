<template>
    <v-card color="darkgrey" rounded="lg" elevation="20" class="ma-auto" width="600">
        
        <!-- <slot name="share" /> -->
        
        
        <v-list  color="darkgrey rounded-lg" class="px-2" :rounded=true>
            <v-list-item class="grow">
                <v-list-item-avatar size="60">
                    <img :src="$attrs.item.creator.profile_pic ? $attrs.item.creator.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text text-start">{{ $attrs.item.creator.user.username }}</v-list-item-title>
                    <v-list-item-subtitle class="grey--text text-start">{{ $helpers.getTimeAgo($attrs.item.timestamp) }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

       

        <v-row class="px-5 ma-0">
            <span class="description text-start">{{ $attrs.item.description }}</span>
        </v-row>

        <v-avatar v-if="$helpers.isImageUrl($attrs.item.media_file)" size="100%" class="text-center py-2" tile>
            <img
                :src="$attrs.item.media_file ? $attrs.item.media_file : 'https://cdn.vuetifyjs.com/images/john.jpg'"
                alt="John"
            />
        </v-avatar>
        <video
            
            controls
            preload="auto"
            width="500"
            height="300"
            
            v-if="$helpers.isVideoUrl($attrs.item.media_file)"
        >
            <source
                :src="$attrs.item.media_file"
            />
        </video>

        <v-divider dark class="mx-2"></v-divider>
        
        <v-card-actions>
            <v-list-item class="grow">
                <v-btn v-if="IsLikedByMe" class="red--text mr-1" icon  @click="LikePost($attrs.item.id)">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn v-else class="white--text mr-1" icon  @click="LikePost($attrs.item.id)">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <!-- <span class="subheading mr-2">{{ $attrs.item.post_likes.length }}</span> -->
                <span class="subheading mr-2">{{ postLikes}}</span>

                <v-btn @click="commentBox = !commentBox" class="white--text mr-1" icon>
                    <v-icon>mdi-chat</v-icon>
                </v-btn>
                <span class="subheading mr-2">{{ $attrs.item.post_comments.length }}</span>

                <v-row align="center" justify="end">
                    <v-btn class="white--text mr-1" icon @click="CoreSrv.OpenModal(`model-${$attrs.item.id}`)">
                        <v-icon>mdi-share</v-icon>
                    </v-btn>
                    <span class="subheading mr-2">{{ $attrs.item.post_shares.length}}</span>
                </v-row>
            </v-list-item>
        </v-card-actions>
        <CommentBoxComponent v-if="commentBox" :postId="$attrs.item.id"></CommentBoxComponent>

        <base-dialog :retain-focus="false" :name="`model-${$attrs.item.id}`" width="50%">
            <div class="d-flex justify-space-between mb-3">
                <h3 class="white--text">Share Post</h3>
                <v-btn color="error" icon @click="CoreSrv.CloseModal(`model-${$attrs.item.id}`)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
            <div class="my-3">
                <base-textarea outlined hide-details :rows="1" :value.sync="description"  title="Add Description"></base-textarea>
            </div>
            <div class="my-3 border-card rounded-lg">
                <v-card color="darkgrey" rounded="lg" elevation="20" class="ma-auto" width="600">
        
        <!-- <slot name="share" /> -->
        
        
        <v-list  color="darkgrey" class="px-2" :rounded=true>
            <v-list-item class="grow">
                <v-list-item-avatar size="60">
                    <img :src="$attrs.item.creator.profile_pic ? $attrs.item.creator.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text text-start">{{ $attrs.item.creator.user.username }}</v-list-item-title>
                    <v-list-item-subtitle class="grey--text text-start">{{ $helpers.getTimeAgo($attrs.item.timestamp) }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

       

        <v-row class="px-5 ma-0 pb-2">
            <span class="description text-start">{{ $attrs.item.description }}</span>
        </v-row>

        <v-avatar v-if="$helpers.isImageUrl($attrs.item.media_file)" size="100%" class="text-center pb-2" tile>
            <img
                :src="$attrs.item.media_file ? $attrs.item.media_file : 'https://cdn.vuetifyjs.com/images/john.jpg'"
                alt="John"
            />
        </v-avatar>
        <video
            
            controls
            preload="auto"
            width="500"
            height="300"
            
            v-if="$helpers.isVideoUrl($attrs.item.media_file)"
        >
            <source
                :src="$attrs.item.media_file"
            />
        </video>
        </v-card>
            </div>
            <div class="text-end my-3">
                <v-btn color="primarypurple white--text px-8" @click="SharePost($attrs.item.id)"> Share </v-btn>
            </div>
        </base-dialog>
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
<script lang="ts" src="./post-card.component.ts" />