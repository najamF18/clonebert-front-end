<template>
    <base-text-field
        :label="$attrs.label"
        v-bind="$attrs"
        ref="search"
        :value="Search$.value"
        clearable
        @click:clear="Search$.next(null)"
        hide-details
        @input="Search$.next($event)"
        :loading="LoaderSrv.SearchLoader"
        :modify-page="false"
    />
</template>

<script lang="ts" src="./search.component.ts" />
