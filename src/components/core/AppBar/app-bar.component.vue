<template>
    <div>
        <v-app-bar color="darkgrey" app clipped dark>
            <v-app-bar-nav-icon v-if="CoreSrv.Drawer.MobileScreen  == true" @click="CoreSrv.Drawer.Mode = !CoreSrv.Drawer.Mode" color="muted"></v-app-bar-nav-icon>
            <v-app-bar-nav-icon v-if="CoreSrv.Drawer.MobileScreen  == false" @click="CoreSrv.Drawer.Mini = !CoreSrv.Drawer.Mini" color="muted"></v-app-bar-nav-icon>
           <!-- <v-text-field class="white--text ml-2" placeholde
            r="Search" outlined dense hide-details /> -->
             <v-menu
             nudge-bottom="50"
             bottom
             
             :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
         <v-responsive class="ma-0 pa-0" :width="`2rem`">
            <base-text-field
                     placeholder="Search"
                     :value.sync="socialMediaSrv.username"
                     hide-details
                     @input="socialMediaSrv.Search()"
                     @keypress.enter="socialMediaSrv.searchUsers()"
                     v-on="on"
                     @click="on"
                     v-bind="attrs"
                      clearable
                     append-icon="mdi-magnify"
                     outlined
                     dense
                    full-width="true"
                 ></base-text-field>
</v-responsive>
      </template>

    <div v-if="socialMediaSrv.allUsers.length > 0">
                    <v-list color="darkgrey " class="my-2" rounded="lg">
                        <v-list-item class="grow card" v-for="item in socialMediaSrv.allUsers" :key="item.id">
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
                                                <v-icon>mdi-account-plus</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>follow </span>
                                    </v-tooltip>
                                </div>
                                <div class="d-flex align-center pa-1" v-else>
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="white--text" icon @click="UnFollowUser(item.id)" v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-minus</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>unfollow </span>
                                    </v-tooltip>
                                </div>

                                <div class="d-flex align-center pa-1" @click="UnBlockUser(item.id)">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn class="red--text" icon v-on="on" v-bind="attrs">
                                                <v-icon>mdi-account-off</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>block </span>
                                    </v-tooltip>
                                </div>

                                <!-- <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span> -->
                            </v-row>
                        </v-list-item>
                    </v-list>
                </div>
                <div v-else>
                    <div class="d-flex justify-center py-2 darkgrey rounded-lg">
                        <h4 class="font-weight-light white--text">No Users</h4>
                    </div>
                </div>
    </v-menu>
          
            <v-spacer></v-spacer>

            <v-btn v-if="!CoreSrv.IsApiLinked" @click="$router.push({name:'Manage Portfolio'})" color="warning" elevation="2" small>
                <v-icon left> mdi-plus </v-icon>
                Import Portfolio
            </v-btn>
            <v-btn v-else @click="$router.push({name:'Manage Portfolio'})" color="primarypurple" elevation="2" small>
               
                Update Portfolio
            </v-btn>
                <v-divider inset class="ml-2" vertical></v-divider>
            
            
            <NotificationBox></NotificationBox>

            

            <!-- <v-menu left bottom>
                <template v-slot:activator="{on, attrs}">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        </v-app-bar>
    </div>
</template>
<style lang="scss" scoped>
.card:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
<script lang="ts" src="./app-bar.component.ts" />
