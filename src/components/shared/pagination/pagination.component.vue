<template>
    <div class="base-pagination d-flex justify-start">
        <v-pagination
            :value="filter.PageNo"
            :length="filter.TotalPages"
            :total-visible="filter.TotalVisible"
            v-bind="$attrs"
            @input="setCurrentPage"
            :class="$attrs.classes"
        />
    </div>
</template>

<script lang="ts" src="./pagination.component.ts" />

<style lang="scss">
.base-pagination {
    width: 100%;
    button {
        outline: none !important;
    }
}
.custom {
    width: auto;
    margin-left: auto;
}

.custom .v-pagination__navigation {
    height: 34px !important;
    width: 34px !important;
}

.custom .v-pagination__navigation .v-icon {
    font-size: 20px !important;
}

.custom .v-pagination__item {
    height: 34px !important;
    min-width: 34px !important;
    font-size: 1rem !important;
}
</style>
