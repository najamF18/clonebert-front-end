<template>
    <div>
        <v-app-bar color="darkgrey" app clipped dark>
            <v-app-bar-nav-icon @click="CoreSrv.Drawer.Mini = !CoreSrv.Drawer.Mini" color="muted"></v-app-bar-nav-icon>
            <v-text-field class="white--text ml-2" placeholder="Search" outlined dense hide-details />
            <v-spacer></v-spacer>

            <v-btn v-if="!CoreSrv.IsApiLinked" to="/user/profile/manage-portfolio" color="warning" elevation="2" small>
                <v-icon left> mdi-plus </v-icon>
                Import Portfolio
            </v-btn>
            <v-btn v-else to="/user/profile/manage-portfolio" color="primarypurple" elevation="2" small>
               
                Update Portfolio
            </v-btn>
                <v-divider inset class="ml-2" vertical></v-divider>
            
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

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
<script lang="ts" src="./app-bar.component.ts" />
