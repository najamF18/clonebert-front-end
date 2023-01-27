<template>
    <v-container>
    <v-row>
        <v-col cols="12" class="text-end">
            <v-card elevation="20" class="pa-3 ma-auto" width="60%"   color="darkgrey" rounded="lg">
                <v-row>
                    <v-col
                        cols="12"
                        class="px-1 py-3 ma-auto cursor-pointer"
                        :class="isFollowers ? 'border' : 'simple'"
                        v-if="isFollowers"
                    >
                        <div class="text-center">
                            <v-icon size="20" class="mr-1" :class="isFollowers ? 'primarypurple--text' : 'white--text'">mdi-account-heart</v-icon>
                            <span :class="isFollowers ? 'primarypurple--text' : 'white--text'">Followers</span>
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        class="px-1 py-3 ma-auto cursor-pointer"
                        :class="isFollowing ? 'border' : 'simple'"
                        v-if="isFollowing"
                    >
                        <div class="text-center">
                            <v-icon size="20" class="mr-1" :class="isFollowing ? 'primarypurple--text' : 'white--text'">mdi-account-multiple-check</v-icon>
                            <span :class="isFollowing ? 'primarypurple--text' : 'white--text'">Following</span>
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        class="px-1 py-3 ma-auto cursor-pointer"
                        :class="isUsers ? 'border' : 'simple'"
                        v-if="isUsers"
                    >
                        <div class="text-center">
                            <v-icon size="20" class="mr-1" :class="isUsers ? 'primarypurple--text' : 'white--text'">mdi-account-group</v-icon>
                            <span :class="isUsers ? 'primarypurple--text' : 'white--text'">All Users</span>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
            <v-card elevation="20" class="pa-3 ma-auto" width="60%" color="black" rounded="lg">
            <div v-if="isFollowers">
                <div v-if="socialMediaSrv.myFollowers.value.followed_by.length > 0">
                    <div class="d-flex justify-space-between py-2 white--text">
                        <h3>{{ socialMediaSrv.myFollowers.value.followed_by.length }} Followers</h3>
                    </div>
                    <v-divider dark class=""></v-divider>
                    <v-list color="darkgrey " class="my-2" rounded="lg">
                        <v-list-item class="grow card" v-for="item in socialMediaSrv.myFollowers.value.followed_by" :key="item.id">
                            <div class="d-flex cursor-pointer flex-grow-1" @click="$router.push({name: 'User Profile View', params: {id: item.id}})">
                                <v-list-item-avatar size="60">
                                    <img :src="item.profile_pic ? item.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title class="white--text text-start">{{ item.user.username }}</v-list-item-title>
                                   
                                </v-list-item-content>
                            </div>

                            <v-row align="center" justify="end">
                                <div class="d-flex align-center pa-1" @click="RemoveFollower(item.id)">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="white--text" icon v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-minus</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>unfollow {{ item.user.username }}</span>
                                    </v-tooltip>
                                </div>
                                <div class="d-flex align-center pa-1" @click="UnBlockUser(item.id)">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="red--text" icon v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-off</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>block {{ item.user.username }}</span>
                                    </v-tooltip>
                                </div>
                               
                            </v-row>
                        </v-list-item>
                    </v-list>
                </div>
                <div v-else>
                    <div class="d-flex justify-center py-2">
                        <h4 class="font-weight-light white--text">No followers</h4>
                    </div>
                </div>
            </div>

            <!-- <div v-if="isUsers">
                <div class="d-flex justify-space-between py-2 white--text">
                    <h3> All Users</h3>
                </div>
                <v-divider dark class=""></v-divider>
                <base-text-field
                    placeholder="Search"
                    :value.sync="socialMediaSrv.username"
                    hide-details
                    @input="socialMediaSrv.Search()"
                    @keypress.enter="socialMediaSrv.searchUsers()"
                    append-icon="mdi-magnify"
                    outlined
                ></base-text-field>
                <div v-if="socialMediaSrv.allUsers.length > 0">
                    <v-list color="darkgrey " class="my-2" rounded="lg">
                        <v-list-item class="grow card" v-for="item in socialMediaSrv.allUsers" :key="item.id">
                            <div class="d-flex cursor-pointer flex-grow-1" @click="$router.push({name: 'User Profile View', params: {id: item.id}})">
                                <v-list-item-avatar size="60">
                                    <img :src="item.profile_pic ? item.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title class="white--text text-start">{{ item.user.username }}</v-list-item-title>
                                   
                                </v-list-item-content>
                            </div>

                            <v-row align="center" justify="end">
                                <div
                                    class="d-flex align-center pa-1"
                                    v-if="
                                        !socialMediaSrv.myFollowing.value.follows.find(data => {
                                            return data.user.id === item.user.id;
                                        })
                                    "
                                >
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="white--text" icon @click="FollowUser(item.id)" v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-heart</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>follow {{ item.user.username }}</span>
                                    </v-tooltip>
                                </div>
                                <div class="d-flex align-center pa-1" v-else>
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="white--text" icon @click="UnFollowUser(item.id)" v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-remove</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Unfollow {{ item.user.username }}</span>
                                    </v-tooltip>
                                </div>
                                  

                            </v-row>
                        </v-list-item>
                    </v-list>
                </div>
                <div v-else>
                    <div class="d-flex justify-center py-2">
                        <h4 class="font-weight-light white--text">No Users</h4>
                    </div>
                </div>
            </div> -->
            <div v-if="isFollowing">
                <div v-if="socialMediaSrv.myFollowing.value.follows.length > 0">
                    <div class="d-flex justify-space-between py-2 white--text">
                        <h3>{{ socialMediaSrv.myFollowing.value.follows.length }} Following</h3>
                    </div>
                    <v-divider dark class=""></v-divider>
                    <v-list color="darkgrey " class="my-2" rounded="lg">
                        <v-list-item class="grow card" v-for="item in socialMediaSrv.myFollowing.value.follows" :key="item.id">
                            <div class="d-flex cursor-pointer flex-grow-1" @click="$router.push({name: 'User Profile View', params: {id: item.id}})">
                                <v-list-item-avatar size="60">
                                    <img :src="item.profile_pic ? item.profile_pic : 'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title class="white--text text-start">{{ item.user.username }}</v-list-item-title>
                                    <!-- <v-list-item-subtitle class="grey--text text-start">4 hours ago</v-list-item-subtitle> -->
                                </v-list-item-content>
                            </div>

                            <v-row align="center" justify="end">
                                <div class="d-flex align-center pa-1">
                                      <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn :ref="item.id" class="white--text" icon @click="UnFollowUser(item.id)" v-on="on" v-bind="attrs">
                                        <v-icon>mdi-account-minus</v-icon>
                                    </v-btn>
                                        </template>
                                        <span>unfollow {{ item.user.username }}</span>
                                    </v-tooltip>
                                    
                                </div>
                                 <div class="d-flex align-center pa-1" @click="UnBlockUser(item.id)">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="red--text" icon v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-off</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>block {{ item.user.username }}</span>
                                    </v-tooltip>
                                </div>

                            </v-row>
                        </v-list-item>
                    </v-list>
                </div>
                <div v-else>
                    <div class="d-flex justify-center py-2">
                        <h4 class="font-weight-light white--text">No following</h4>
                    </div>
                </div>
            </div>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>
<style lang="scss" scoped>
.border {
    border-bottom: 5px solid #8f5fe8;
    border-radius: 5px;
}
.simple:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}

.card:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
.v-list-item {
    border-radius: 10px;
}
.v-list--rounded {
    border-radius: 10px;
}
</style>


<script lang="ts" src="./followers.component.ts" />