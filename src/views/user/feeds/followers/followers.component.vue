<template>
    <div>
        <div class="d-flex justify-space-between">
            <h3>Followers ({{ socialMediaSrv.myFollowers.value.followed_by.length }})</h3>
            <v-btn class="white--text" icon>
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
        </div>
        <v-divider dark class=""></v-divider>
    <v-list color="darkgrey " class="my-2" rounded="lg">
          <v-list-item class="grow card" v-for="item in socialMediaSrv.myFollowers.value.followed_by" :key="item.id">
                <v-list-item-avatar size="60">
                    <img :src="item.profile_pic?item.profile_pic:'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text text-start">{{ item.user.username }}</v-list-item-title>
                    <!-- <v-list-item-subtitle class="grey--text text-start">4 hours ago</v-list-item-subtitle> -->
                </v-list-item-content>



                <v-row align="center" justify="end">
                    <v-menu dark min-width="180"  bottom left offset-y transition="slide-y-reverse-transition">
                <template #activator="{on, attrs}">
                    <div class="d-flex align-center pa-1" v-bind="attrs" v-on="on">
                        <v-btn class="white--text" icon>
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                    </div>
                </template>
                <v-list color="darkgrey" dense dark nav>
                    <v-list-item  link  @click="UnFollowUser()">
                        <v-list-item-icon class="mr-2">
                            <base-icon color="grey" icon-name="account-remove" />
                        </v-list-item-icon>
                        <v-list-item-title class="cursor-pointer white--text">Unfollow {{ item.user.username }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
                    
                    <!-- <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span> -->
                </v-row>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>
         </div>

</template>
<style lang="scss" scoped>
.card:hover{
    background-color: rgba(255, 255, 255, 0.1);
    
.v-list-item{
border-radius: 10px;
}
.v-list--rounded{
    border-radius: 10px;
}
}

</style>

<script lang="ts" src="./followers.component.ts" />