<template>
    <div>
        <v-divider dark class=""></v-divider>
        <div class="text-center pa-5" v-if="isLoading">
            <v-progress-circular :size="50" color="muted" indeterminate></v-progress-circular>
        </div>
        <div v-else>
            <v-list color="darkgrey " class="my-2" :rounded="true">
                <span v-for="item in commentData" :key="item.id">
                    <div class="d-flex pa-2 ma-2 justify-center align-center card" style="width: 40%">
                        <v-avatar size="30">
                            <img :src="item.comment_by.profile_pic ? item.comment_by.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                        </v-avatar>
                        <div class="ml-2">
                            <v-list-item-title class="white--text text-start caption pa-0 ma-0">{{ item.comment_by.user.username }}</v-list-item-title>
                            <v-list-item-subtitle class="white--text text-start pa-0 ma-0">{{ item.content }}</v-list-item-subtitle>
                            <v-list-item-subtitle class="grey--text text-start caption pa-0 ma-0">{{
                                $helpers.getTimeAgo(item.timestamp)
                            }}</v-list-item-subtitle>
                        </div>
                        <v-row align="center" justify="end">
                            <v-btn class="white--text mr-2" icon small>
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </v-row>
                    </div>
                </span>
            </v-list>

            <v-divider></v-divider>
            <v-row>
                <v-col class="mx-2">
                    <base-text-field
                        placeholder="Add Comment"
                        solo
                        @keydown.enter="comment?AddComment() :''"
                        hide-details
                        background-color="darkgrey"
                        :value.sync="comment"
                        
                    >
                        <template v-slot:append>
                            <v-progress-circular v-if="isCommenting" :size="25" color="muted" indeterminate></v-progress-circular>
                            <v-btn :disabled="comment?false:true" v-else class="white--text mr-2" icon small @click="AddComment()">
                                <v-icon>mdi-send</v-icon>
                            </v-btn>
                        </template>
                    </base-text-field>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;

    .v-list-item {
        border-radius: 10px;
    }
    .v-list--rounded {
        border-radius: 10px;
    }
}
</style>
<script lang="ts" src="./comment-box.component.ts" />