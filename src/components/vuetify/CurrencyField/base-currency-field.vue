<template>
    <validation-provider :rules="rules" v-slot="{errors}" :vid="vid">
        <v-text-field
            :error-messages="getErrorMessage(errors)"
            v-bind="$attrs"
            dense
            v-mask="mask"
            v-on="$listeners"
            :value="currency"
            color="primary"
            @input="currency = $event ? $event : null"
            @blur="onBlur"
            outlined
        >
            <template v-slot:label v-if="!!$attrs.label">
                <span class="error--text" v-if="rules.includes('required')">*</span>
                {{ $attrs.label }}
            </template>
            <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
        </v-text-field>
    </validation-provider>
</template>

<script lang="ts" src="./base-currency-field.ts" />
