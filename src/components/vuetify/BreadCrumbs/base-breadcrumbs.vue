<template>
    <v-breadcrumbs v-bind="$attrs" large :items="items" v-on="$listeners">
        <template #divider>
            <v-icon size="25">mdi-chevron-right</v-icon>
        </template>

        <v-breadcrumbs-item v-if="item.name" v-on="$listeners" :to="{name: item.name}" :disabled="item.disabled" slot="item" slot-scope="{item}" :exact="true">
            <h4 class="font-weight-medium  d-flex align-center">{{ item.title }}</h4>
        </v-breadcrumbs-item>
        <v-breadcrumbs-item v-else v-on="$listeners" class="cursor-pointer" slot="item" slot-scope="{item}" :disabled="item.disabled" :exact="true">
            <h4 class="font-weight-regular grey--text d-flex align-center">{{ item.title }}</h4>
        </v-breadcrumbs-item>
    </v-breadcrumbs>
</template>

<script lang="ts" src="./base-breadcrumbs.ts" />
