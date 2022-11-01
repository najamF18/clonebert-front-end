<template>
    <v-navigation-drawer :width="250" mobile-breakpoint="991" app color="darkgrey" mini-variant-width="60" :mini-variant.sync="CoreSrv.Drawer.Mini">
        <div class="d-flex white darkgrey" :class="[{' pt-1': !CoreSrv.Drawer.Mini}, {'px-1': CoreSrv.Drawer.Mini}]">
            <v-avatar v-if="!CoreSrv.Drawer.Mini" tile min-width="55" width="200" height="70">
                <v-img height="40" contain class="transparent cursor-pointer" width="50" src="/images/logo.svg" />
            </v-avatar>
            <v-avatar v-else tile min-width="55" width="200" height="70">
                <v-img height="40" contain class="transparent cursor-pointer" width="50" src="/images/logo-mini.svg" />
            </v-avatar>
            
        </div>
        <div :class="[{' ml-3': !CoreSrv.Drawer.Mini}, {'ml-1': CoreSrv.Drawer.Mini}]">
            <v-avatar :size="CoreSrv.Drawer.Mini ? 49 : 100">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
        </div>
        <div v-if="!CoreSrv.Drawer.Mini && CoreSrv.IsApiLinked" class="ml-3 ">
            <v-avatar  tile min-width="20" width="30" height="30">
                <v-img height="40" contain class="transparent cursor-pointer" width="50" src="/images/badge.svg" />
            </v-avatar>
        </div>
        
        <div v-if="!CoreSrv.Drawer.Mini" class="d-flex justify-space-between pa-3">
            <div class="flex my-1 ml-3 row">
                <v-icon small color="secondary "> mdi-at </v-icon>
                <h5 class="white--text ml-1 mt-1">Name</h5>
            </div>
            <v-menu dark min-width="180" bottom offset-y transition="slide-y-reverse-transition">
                <template #activator="{on, attrs}">
                    <div class="d-flex align-center pa-1" v-bind="attrs" v-on="on">
                        <v-icon size="20" color="accent"> mdi-dots-vertical </v-icon>
                    </div>
                </template>
                <v-list color="darkgrey" dense dark nav>
                    <v-list-item v-for="(item, i) in items" :key="i" link @click="item.method()" :to="item.link">
                        <v-list-item-icon class="mr-2">
                            <base-icon color="grey" :icon-name="item.icon" />
                        </v-list-item-icon>
                        <v-list-item-title class="cursor-pointer white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <div v-if="!CoreSrv.Drawer.Mini">
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-map-marker-radius </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">Moonbound</h6>
            </div>
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-calendar </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">Joined Oct. 25, 2022</h6>
            </div>
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-run </v-icon>
                <h6 class="muted--text ml-1 mt-1 mr-2 font-italic caption">Following: <a href="#">0</a></h6>
                <v-icon small color="secondary "> mdi-run </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">Follower: <a href="#">0</a></h6>
            </div>
            <div class="flex my-2 ml-3 row">
                <v-icon small color="secondary "> mdi-face-agent </v-icon>
                <h6 class="muted--text ml-1 mt-1 font-italic caption">Hello fellow Cloners! 👋</h6>
            </div>
        </div>

        <div :class="{'pb-16': num}">
            <v-list shaped nav class="pa-0 pr-7 mt-5 rounded-0" :class="[{'pb-16': num}]">
                <v-list-item
                    v-for="(link, i) in MainLinks"
                    :key="i"
                    :to="{name: link.Name}"
                    class="d-flex align-end mx-0"
                    :class="[
                        {
                            'rounded-0 ': !CoreSrv.Drawer.Mini,
                        },
                        {'ml-5': CoreSrv.Drawer.Mini},
                    ]"
                >
                    <v-list-item-icon class="mr-2 my-0 align-self-center">
                        <!-- <v-icon size="25">{{ link.Icon }}</v-icon> -->
                        <base-icon :color="link.Color" :icon-name="link.Icon" />
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text subtitle-2 font-weight-medium ml-0">
                            {{ link.Title }}
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-chip-group mandatory color="white" v-if="link.Chip">
                        <v-chip class="height-25 px-3 mt-1 caption" label :color="link.Color">
                            {{ link.Chip }}
                        </v-chip>
                    </v-chip-group>
                </v-list-item>
            </v-list>
        </div>

        <template #append>
            <div class="px-2 mb-3">
                <v-btn v-if="CoreSrv.Drawer.Mini" @click="logout"  class="secondary" fab dark small >
                    <v-icon dark> mdi-logout </v-icon>
                </v-btn>
                <base-btn v-else @click="logout" block class="secondary"> Logout </base-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<style scoped>
.list:hover {
    color: white;
    background-color: #0f1015;
}
</style>

<script lang="ts" src="./drawer.component.ts" />
