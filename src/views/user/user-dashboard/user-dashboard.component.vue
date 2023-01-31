<template>
    <!-- <v-container class="black"> -->
        <v-container fluid class="py-0 px-0 height-100vh" style="position: relative;">
            <v-main class="height-100x overflow-auto">
                 <v-app-bar color="darkgrey" app clipped dark>
            <v-app-bar-nav-icon v-if="CoreSrv.Drawer.MobileScreen  == true" @click="CoreSrv.Drawer.Mode = !CoreSrv.Drawer.Mode" color="muted"></v-app-bar-nav-icon>
            <v-app-bar-nav-icon v-if="CoreSrv.Drawer.MobileScreen  == false" @click="CoreSrv.Drawer.Mini = !CoreSrv.Drawer.Mini" color="muted"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
              <v-divider inset class="ml-2" vertical></v-divider>
            <NotificationBox></NotificationBox>
            </v-app-bar>
                <v-navigation-drawer :width="250" v-model="CoreSrv.Drawer.Mode" mobile-breakpoint="991" app color="darkgrey" mini-variant-width="60" :mini-variant="CoreSrv.Drawer.Mini ? true : false">
        <div class="d-flex white darkgrey" :class="[{' pt-1': !CoreSrv.Drawer.Mini}, {'px-1': CoreSrv.Drawer.Mini}]">
            <v-avatar v-if="!CoreSrv.Drawer.Mini" tile min-width="55" width="200" @click="$router.push({name:'Dashboard'})" height="70">
                <v-img height="40" contain class="transparent cursor-pointer" width="50" src="/images/logo.svg" />
            </v-avatar>
            <v-avatar v-else tile min-width="55" width="200" @click="$router.push({name:'Dashboard'})" height="70">
                <v-img height="40" contain class="transparent cursor-pointer" width="50" src="/images/logo-mini.svg" />
            </v-avatar>
            
        </div>
        <div :class="[{' ml-3': !CoreSrv.Drawer.Mini}, {'ml-1': CoreSrv.Drawer.Mini}]">
            <v-avatar :size="CoreSrv.Drawer.Mini ? 49 : 100">
                <img :src="user.profile_pic?user.profile_pic:'https://cdn.vuetifyjs.com/images/john.jpg'" alt="John" />
            </v-avatar>
        </div>
        
        
        <div v-if="!CoreSrv.Drawer.Mini" class="d-flex justify-space-between pa-3">

            <div v-if="!!user.user.username " class="flex my-1 ml-3 row">
                <v-icon small color="secondary "> mdi-at </v-icon>
                <h5 class="white--text ml-1 mt-1">{{ user.user.username  }}</h5>
            </div>
           
        </div>

        <div v-if="!CoreSrv.Drawer.Mini">
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-map-marker-radius </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">{{ user.location }}</h6>
            </div>
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-calendar </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">Joined Oct. 25, 2022</h6>
            </div>
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-run </v-icon>
                <h6 class="muted--text ml-1 mt-1 mr-2 font-italic caption cursor-pointer" >Following: <a  href="#"> {{ followed_by_list.length }}</a></h6>
                <v-icon small color="secondary "> mdi-run </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption cursor-pointer" >Follower: <a  href="#"> {{ follow_list.length}}</a> </h6>
            </div>
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-face-agent </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">{{ user.description  }}</h6>
            </div>

            <div v-if="$route.params.id == UserSrv.userProfile.id">

            </div>
             <div v-else class="flex my-3 ml-2 row" >
                <v-tooltip top  v-if="!socialMediaSrv.blockedUser.find(x => x.id == user.id)">
                                        <template v-slot:activator="{on, attrs}">
                                             <v-btn small icon v-on="on" v-bind="attrs" color="error" class="mx-1"   @click="BlockUser(user.id)">
                            <v-icon size="25" class="mr-1">mdi-account-remove</v-icon>
                        </v-btn>
                                        </template>
                                        <span>block</span>
                                    </v-tooltip>


                                    <v-tooltip top v-else>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn  small v-on="on" v-bind="attrs"  icon color="success" class="mx-1"     @click="BlockUser(user.id)">
                            <v-icon size="25" class="mr-1">mdi-account-minus</v-icon> 
                        </v-btn>
                                        </template>
                                        <span>unblock</span>
                                    </v-tooltip>


                                    


               
                       
                        <div v-if="socialMediaSrv.myFollowing.value" class="ml-1">
                        <v-tooltip top  v-if="!!socialMediaSrv.myFollowing.value.follows.find(x => x.id == user.id)">
                                        <template v-slot:activator="{on, attrs}">
                                           <v-btn small  icon color="primarypurple" v-on="on" v-bind="attrs" class="mx-1"      @click="FollowUser(user.id)">
                            <v-icon size="25" class="mr-1">mdi-account-minus</v-icon>
                        </v-btn>
                                        </template>
                                        <span>unfollow</span>
                                    </v-tooltip>


                                    <v-tooltip top v-else>
                                        <template v-slot:activator="{on, attrs}">
                                              <v-btn small icon color="primarypurple" class="mx-1" v-on="on" v-bind="attrs"    @click="FollowUser(user.id)">
                            <v-icon size="25" class="mr-1">mdi-account-plus</v-icon>
                        </v-btn>
                                        </template>
                                        <span>follow</span>
                                    </v-tooltip>
                       
                        </div>
            </div>
            
        </div>

        <div :class="{'pb-16': num}">
            <v-list shaped nav class="pa-0 pr-7 mt-5 rounded-0" :class="[{'pb-16': num}]">

                <v-list-item
                    @click="openDashboard()"
                    class="d-flex align-end mx-0"
                    :class="[
                        {
                            'rounded-0 ': !CoreSrv.Drawer.Mini,
                        },
                        {'ml-5': CoreSrv.Drawer.Mini},
                        {'select': openLink.Dashboard && !CoreSrv.Drawer.Mini},
                    ]"
                >
                    <v-list-item-icon class="mr-2 my-0 align-self-center">
                        <base-icon color="primarypurple" icon-name="speedometer" />
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text subtitle-2 font-weight-medium ml-0">
                            Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                      @click="openFeeds()"
                    class="d-flex align-end mx-0"
                    :class="[
                        {
                            'rounded-0 ': !CoreSrv.Drawer.Mini,
                        },
                        {'ml-5': CoreSrv.Drawer.Mini},
                        {'select': openLink.feeds && !CoreSrv.Drawer.Mini},
                    ]"
                >
                    <v-list-item-icon class="mr-2 my-0 align-self-center">
                        <base-icon color="orange" icon-name="playlist-play" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text subtitle-2 font-weight-medium ml-0">
                            Feeds
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                      @click="openTransaction()"
                    class="d-flex align-end mx-0"
                    :class="[
                        {
                            'rounded-0 ': !CoreSrv.Drawer.Mini,
                        },
                        {'ml-5': CoreSrv.Drawer.Mini},
                        {'select': openLink.transaction && !CoreSrv.Drawer.Mini},
                    ]"
                >
                    <v-list-item-icon class="mr-2 my-0 align-self-center">
                        <base-icon color="red" icon-name="table-large" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text subtitle-2 font-weight-medium ml-0">
                            Transactions
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                      @click="openHoldings()"
                    class="d-flex align-end mx-0"
                    :class="[
                        {
                            'rounded-0 ': !CoreSrv.Drawer.Mini,
                        },
                        {'ml-5': CoreSrv.Drawer.Mini},
                        {'select': openLink.holdings && !CoreSrv.Drawer.Mini},
                    ]"
                >
                    <v-list-item-icon class="mr-2 my-0 align-self-center">
                        <base-icon color="green" icon-name="table-large" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text subtitle-2 font-weight-medium ml-0">
                            Holdings
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
        
    </v-navigation-drawer>
                <div class="black white--text lighten-5 " style="minHeight:100vh">
                    
        <div class="py-5" :class="[{'px-2':$vuetify.breakpoint.smAndDown},{'px-10':$vuetify.breakpoint.mdAndUp}]">
                    <back-page></back-page>
        <v-row align-content="center">
           

            <v-col cols="12">

                <base-card v-if="openLink.Dashboard" class="pa-5 mt-3 darkgrey elevation-4 rounded-lg">
                <div>
                 <v-row class="px-5 mt-0">
            <v-col cols="12" md="4">
                <base-increase-decrease-component title="Current holdings" :showButton="true" :gains="gains_holdings" />
            </v-col>
            <v-col cols="12" md="4">
                <base-increase-decrease-component title="Past Holdings" :gains="gains_transactions" />
            </v-col>
        </v-row>
                    <v-row class="px-5 mt-2">
            <v-col cols="12" md="4">
                <base-card v-if="pieChartData.length > 0" class="rounded darkgrey">
                    <user-transaction-chart :PieChartData="pieChartData" :container-style="{height: '420px'}" />
                </base-card>

                <base-card v-else class="rounded darkgrey">
                    <user-transaction-chart  :container-style="{height: '420px'}" />
                </base-card>
            </v-col>
            
            <v-col cols="12" md="8">
                <base-card class="rounded darkgrey">
                    <trading-view></trading-view>
                </base-card>
            </v-col>
        </v-row>
                </div>
            </base-card>

            
            <div v-if="openLink.feeds">
                <div v-if="socialMediaSrv.userTimelineError">
                    <base-card class="pa-5 mt-3 darkgrey elevation-4 rounded-lg">
                     <v-alert dense outlined type="error" color="error"> You need to follow {{ user.user.username }} to see view feeds </v-alert>
                     </base-card>
                </div>
                <div class="pa-5  black  elevation-4 rounded-lg" v-else>
                
                 <v-card width="80%"  class="ma-auto mt-5 black">
              <v-row>
                    <v-col
                        cols="12"
                        class="px-1 py-3 mb-5 ma-auto darkgrey  rounded-lg cursor-pointer "
                        
                    >
                        <div class="text-center">
                            <v-icon size="20" class="mr-1 primarypurple--text">mdi-view-dashboard</v-icon>
                            <span class="primarypurple--text">Posts</span>
                        </div>
                    </v-col>
                    </v-row>
                    <div v-if="socialMediaSrv.userFeeds.length > 0">
                        <div  class="my-2" v-for="(items,idx) in socialMediaSrv.userFeeds" :key="idx">
                           
                        <share-user-post-card v-if="items.post_id" :item="items"/>
                        <user-post-card v-else :item="items" :likes="items.post_likes"></user-post-card>
                   </div>

                    </div>
                    <div v-else class="text-center mt-3 white--text">
                        No Posts 
                    </div>
     </v-card>
     </div>
            </div>


                <base-card v-if="openLink.transaction" class="pa-5 mt-3 darkgrey elevation-4 rounded-lg">
                   
                            <div v-if="!isError">
                                <h3 class="pa-3 white--text">Transactions</h3>
                                <v-row>
                                    <v-col cols="12">
                                       <v-data-table sort-by="created_at" :sort-desc="defaultsSort"  :headers="TransactionsHeaders" :items="transactionData" :items-per-page="5" class="elevation-1 theme--dark">
                        <template v-slot:[`item.created_at`]="{item}">
                            {{ getDateTime(item.created_at) }}
                        </template>

                        <template v-slot:[`item.position`]="{item}">
                            {{ isNumber(item.position) ? item.position.toPrecision(3) : item.position }}
                        </template>

                        <template v-slot:[`item.book_price`]="{item}">
                            {{getVal(item.book_price.toPrecision(2)) }}
                        </template>

                        <template v-slot:[`item.book_value`]="{item}">
                            {{getVal(item.book_value.toPrecision(2)) }}
                        </template>

                        
                        <template v-slot:[`item.gains`]="{item}">
                            
                            <v-chip v-if="!!item.gains" :color="getColor(item.gains)" dark label>
                           {{ item.gains ? item.gains.toPrecision(2)  : item.gains }}
                           </v-chip>
                           <div v-else> N/A</div>
                        </template>

                        <template v-slot:[`item.native_amount.amount`]="{item}">
                            {{ item.native_amount.amount.toPrecision(2)  }}
                        </template>

                        <template v-slot:[`item.amount.amount`]="{item}">
                            {{ getVal(item.amount.amount)  }}
                        </template>

                        <template v-slot:[`item.market_value`]="{item}">
                            {{ getVal(item.market_value.toPrecision(2))  }}
                        </template>
                        <template v-slot:[`item.market_price`]="{item}">
                            {{ getVal(item.market_price.toPrecision(2))  }}
                        </template>
                    </v-data-table>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else>
                                <div v-if="CoreSrv.IsApiLinked">
                                    <v-alert dense outlined type="error" color="error"> You need to follow {{ user.user.username }} to see trading data </v-alert>
                                </div>
                                <div v-else>
                                    <v-alert dense outlined type="error" color="error"> Your Api Keys are not <strong>Set</strong> or <strong>Invalid </strong>.  </v-alert>
                                </div>
                            </div>
                        </base-card>


                        <base-card v-if="openLink.holdings" class="pa-5 mt-3 darkgrey elevation-4 rounded-lg">
                        
                            <div v-if="!isError">
                                <h3 class="pa-3 white--text">Holdings List</h3>
                                <v-row>
                                    <v-col cols="12">
                                        <v-data-table :headers="HoldingsHeaders" :items="holdingData" :items-per-page="5" class="theme--dark">
                                            <template v-slot:[`item.book_price`]="{item}">
                                                {{ item.book_price.toPrecision(2)  }}
                                            </template>
                                            <template v-slot:[`item.book_value`]="{item}">
                                                {{ item.book_value.toPrecision(2) }}
                                            </template>
                                            <template v-slot:[`item.market_value`]="{item}">
                                                {{ item.market_value.toPrecision(2) }}
                                            </template>
                                            <template v-slot:[`item.market_price`]="{item}">
                                                {{ item.market_price.toPrecision(2)  }}
                                            </template>
                                            <template v-slot:[`item.gains`]="{item}">
                                                <v-chip v-if="item.gains" :color="getColor(item.gains)" dark label>
                                                    {{ item.gains.toPrecision(2)  }}
                                                </v-chip>
                                            </template>
                                            <template v-slot:[`item.position`]="{item}">
                                                {{ isNumber(item.position) ? item.position.toPrecision(2)  : item.position }}
                                            </template>
                                        </v-data-table>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else>
                                <div v-if="CoreSrv.IsApiLinked">
                                    <v-alert dense outlined type="error" color="error"> You need to follow {{ user.user.username }} to see trading data </v-alert>
                                </div>
                                <div v-else>
                                    <v-alert dense outlined type="error" color="error"> Your Api Keys are not <strong>Set</strong> or <strong>Invalid </strong>.  </v-alert>
                                </div>
                            </div>
                </base-card>
            </v-col>
        </v-row>
        </div>
                </div>
            </v-main>
        
    </v-container>
</template>
<style lan="scss" scoped>
.select {
    background-color: rgba(255, 255, 255, 0.1);
}
.border {
    border-bottom: 5px solid #8f5fe8;
    border-radius: 5px;
}
</style>
<script lang="ts" src="./user-dashboard.component.ts" />
