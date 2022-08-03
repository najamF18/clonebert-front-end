<template>
    <validation-provider :rules="rules" v-slot="{errors}" :vid="vid">
        <template v-if="!!$attrs.label">
            <div class="white--text mb-2">
                <span class="error--text" v-if="rules.includes('required')">*</span>
                {{ $attrs.label }}
            </div>
        </template>
        <v-text-field
            :error-messages="getErrorMessage(errors)"
            v-bind="$attrs"
            dense
            label=""
            v-mask="mask"
            v-on="$listeners"
            :value="value"
            @input="$emit('update:value', $event ? $event : null)"
            @blur="onBlur"
            flat
            solo
            dark
            background-color="lightgrey"
            @keydown="onKeyDown"
        >
            <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
        </v-text-field>
        <template v-if="errors.length">
            <p class="error--text ma-0">
                {{ errors[0] }}
            </p>
        </template>
    </validation-provider>
</template>

<script lang="ts" src="./base-text-field.ts" />
