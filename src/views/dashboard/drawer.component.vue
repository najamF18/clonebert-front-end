<template>
    <v-navigation-drawer
        v-model="CoreSrv.Drawer.Mode"
        :width="300"
        mobile-breakpoint="991"
        app
        color="darkgrey"
        mini-variant-width="60"
        :mini-variant.sync="CoreSrv.Drawer.Mini"
    >
        <div class="d-flex white px-1 darkgrey" :class="[{'px-2 pt-6': !CoreSrv.Drawer.Mini}, {'px-1': CoreSrv.Drawer.Mini}]">
            <v-avatar tile min-width="55" width="300" height="80">
                <v-img height="80" contain class="transparent cursor-pointer" width="80" src="/images/rocket.png" />
            </v-avatar>
        </div>
        <div :class="{'pb-16': num}">
            <v-list nav class="pa-0 pr-6 rounded-0" :class="[{'pb-16': num}]">
                <v-list-item
                    v-for="(link, i) in MainLinks"
                    :key="i"
                    :to="{name: link.Name}"
                    class="mt-3 d-flex align-end mx-0 list white--text"
                    :class="{
                        'rounded-0 py-1': !CoreSrv.Drawer.Mini
                    }"
                >
                    <v-list-item-icon>
                        <v-icon size="25">{{ link.Icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text subtitle-2 font-weight-medium  ml-0 ">
                            {{ link.Title }}
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-chip-group mandatory color="white" v-if="link.Chip">
                        <v-chip class="height-25  px-3 mt-1 caption" label :color="link.Color">
                            {{ link.Chip }}
                        </v-chip>
                    </v-chip-group>
                </v-list-item>
            </v-list>
        </div>
        <template #append>
            <div class="px-2 mb-3">
                <base-btn @click="logout" block class="secondary">
                    Logout
                </base-btn>
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
