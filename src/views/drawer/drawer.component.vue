<template>
    <v-navigation-drawer :width="300" mobile-breakpoint="991" app color="darkgrey" mini-variant-width="60" :mini-variant.sync="CoreSrv.Drawer.Mini">
        <div class="d-flex white  darkgrey" :class="[{' pt-1': !CoreSrv.Drawer.Mini}, {'px-1': CoreSrv.Drawer.Mini}]">
            <v-avatar tile min-width="55" width="300" height="80">
                <v-img height="50" contain class="transparent cursor-pointer" width="50" src="/images/logo.svg" />
            </v-avatar>
        </div>
        <div class="d-flex justify-end px-3">
            <v-menu dark min-width="180" bottom offset-y transition="slide-y-reverse-transition">
                <template #activator="{ on, attrs }">
                    <div class="d-flex align-center pa-1 " v-bind="attrs" v-on="on">
                        <v-icon size="30" color="accent">
                            mdi-dots-vertical
                        </v-icon>
                    </div>
                </template>
                <v-list dense nav>
                    <v-list-item v-for="(item, i) in items" :key="i" link @click="item.method()" :to="item.link">
                        <v-list-item-icon class="mr-3">
                            <v-icon v-text="item.icon" color="grey"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="cursor-pointer white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <div :class="{'pb-16': num}">
            <v-list nav class="pa-0 pr-6 rounded-0" :class="[{'pb-16': num}]">
                <v-list-item
                    v-for="(link, i) in MainLinks"
                    :key="i"
                    :to="{name: link.Name}"
                    class="mt-3 d-flex align-end mx-0  "
                    :class="{
                        'rounded-0 py-1': !CoreSrv.Drawer.Mini
                    }"
                >
                    <v-list-item-icon>
                        <!-- <v-icon size="25">{{ link.Icon }}</v-icon> -->
                        <base-icon :color="link.Color" :icon-name="link.Icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class=" white--text subtitle-2 font-weight-medium  ml-0 ">
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
