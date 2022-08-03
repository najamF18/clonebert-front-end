<template>
    <v-checkbox v-bind="$attrs" v-on="$listeners" hide-details :value="value" :input-value="inputValue" @change="$emit('update:inputValue', $event)">
        <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
    </v-checkbox>
</template>

<script lang="ts" src="./base-checkbox.ts" />
