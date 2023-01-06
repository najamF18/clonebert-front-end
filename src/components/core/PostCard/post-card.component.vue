<template>
    <v-card color="darkgrey" rounded="lg" elevation="20" class="ma-auto" width="600">
        <v-divider></v-divider>
        
        <v-list color="darkgrey" class="px-2" :rounded=true>
            <v-list-item class="grow">
                <v-list-item-avatar size="60">
                    <img :src="$attrs.item.creator.profile_pic ? $attrs.item.creator.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text text-start">{{ $attrs.item.creator.user.username }}</v-list-item-title>
                    <v-list-item-subtitle class="grey--text text-start">{{ $helpers.getTimeAgo($attrs.item.timestamp) }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-row align="center" justify="end">
                    <v-btn class="white--text" icon>
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                    <!-- <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span> -->
                </v-row>
            </v-list-item>
        </v-list>

        <v-row class="px-5 ma-0">
            <span class="description text-start">{{ $attrs.item.title }}</span>
        </v-row>

        <v-row class="px-5 ma-0">
            <span class="description text-start">{{ $attrs.item.description }}</span>
        </v-row>

        <v-avatar v-if="$helpers.isImageUrl($attrs.item.media_file)" size="100%" class="text-center py-2" tile>
            <img
                :src="$attrs.item.media_file ? $attrs.item.media_file : 'https://cdn.vuetifyjs.com/images/john.jpg'"
                alt="John"
            />
        </v-avatar>

        <!-- <v-avatar v-if="$helpers.isVideoUrl($attrs.item.media_file)" size="500" tile> -->
        <!-- <video  v-if="$helpers.isVideoUrl($attrs.item.media_file)" class="pa-5 mt-2 " style="background-color: black;" width="500px" height="500px" controls > -->
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
        <!-- </v-avatar> -->

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
                <span class="subheading mr-2">{{ $attrs.item.post_likes.length+val }}</span>

                <v-btn @click="commentBox = !commentBox" class="white--text mr-1" icon>
                    <v-icon>mdi-chat</v-icon>
                </v-btn>
                <span class="subheading mr-2">{{ $attrs.item.post_comments.length }}</span>

                <v-row align="center" justify="end">
                    <v-btn class="white--text mr-1" icon @click="SharePost($attrs.item.id)">
                        <v-icon>mdi-share</v-icon>
                    </v-btn>
                </v-row>
            </v-list-item>
        </v-card-actions>

        <CommentBoxComponent v-if="commentBox" :postId="$attrs.item.id"></CommentBoxComponent>
    </v-card>
</template>
<style lang="scss" scoped>
.description {
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    color: #e4e6eb;
}
</style>
<script lang="ts" src="./post-card.component.ts" />