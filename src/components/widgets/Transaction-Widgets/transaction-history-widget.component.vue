<template>
    <div>
        <div class="px-6 mt-3">
            <h3 class="white--text">Current Holdings</h3>
        </div>
        <base-chart v-bind="$attrs" :options="option" />
        <slot />
    </div>
</template>

<script src="./transaction-history-widget.component.ts" lang="ts" />