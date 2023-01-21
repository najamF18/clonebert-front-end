<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      bottom left offset-y nudge-bottom="20" min-width="500" nudge-left="10" flat transition="slide-y-reverse-transition" rounded="lg"
    >
      <template v-slot:activator="{ on, attrs }">
      
        <v-btn
        v-bind="attrs"
          v-on="on" icon>
           <v-badge
        :content="SocialMediaSrv.totalNotification.value"
        :value="SocialMediaSrv.totalNotification.value"
        color="red"
        overlap
      >
        <v-icon>mdi-bell</v-icon>
      </v-badge>
                
            </v-btn>
      </template>

      <v-card color="darkgrey">

        <v-list color="darkgrey" >
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title class="title">Notifications</v-list-item-title>
            </v-list-item-content>

            <!-- <v-list-item-action>
              <v-btn
            color="primary"
            text
            @click="menu = false"
          >
            Read all
          </v-btn>
            </v-list-item-action> -->
          </v-list-item>
        </v-list>
         <v-divider dark class="mx-3"></v-divider>
        <v-list color="darkgrey" v-if="SocialMediaSrv.notifications.value.length>0">
          <v-list-item class="simple " v-for="(item) in SocialMediaSrv.notifications.value"  :key="item.id">
             <div class="d-flex cursor-pointer flex-grow-1" @click="$router.push({name:'Notification View',params:{id:item.post_id}});ReadNotification(item.id,item.description)">
            <v-list-item-avatar size="60">
              <img
                :src="item.sender.profile_pic"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{item.sender.user.username}}</v-list-item-title>
              <v-list-item-title class="grey--text ">{{item.description}}</v-list-item-title>
              <v-list-item-subtitle class="grey--text ">{{$helpers.getTimeAgo(item.timestamp)}}</v-list-item-subtitle>
            </v-list-item-content>
            </div>

            <v-list-item-action v-if="!item.isRead">
              <v-btn
                :class="'white--text'"
                icon
                @click="ReadNotification(item.id,item.description)"
              >
                <v-icon>mdi-check-all</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-list color="darkgrey "  v-else>
           
            <div  class="text-center darkgrey white--text pa-5">No Notifications</div>
        </v-list>

        <v-divider></v-divider>


      </v-card>
    </v-menu>
  </div>
</template>
<style lang="scss" scoped>
.border{
    border-bottom: 5px solid #8f5fe8;  
    border-radius: 5px;
}
.simple:hover{
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}
</style>


<script lang="ts" src="./notification-box.component.ts" />