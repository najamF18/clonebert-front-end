<template>
    <validation-provider :rules="rules" v-slot="{errors}" :vid="vid" class="mb-3" tag="div">
        <div v-if="!!$attrs.label">
            <span class="error--text" v-if="rules.includes('required')">
                *
            </span>
            <span class="grey--text text--darken-1" :class="{'error--text': errors.length}">
                {{ $attrs.label }}
            </span>
        </div>
        <div id="editor-boundaries" class="border-a-1 p-relative" :class="{'border-error': errors.length}" ref="boundaries">
            <vue-editor
                :auto-height="false"
                height="300"
                :editorOptions="options"
                :editor-toolbar="toolbarOptions"
                :value="value"
                :disabled="$attrs.disabled"
                @input="$emit('update:value', $event)"
            />
        </div>
        <div class="mt-1">
            <v-slide-y-transition hide-on-leave>
                <span v-if="errors.length" class="v-messages error--text">
                    {{ errors[0] }}
                </span>
            </v-slide-y-transition>
        </div>
    </validation-provider>
</template>

<style>
.ql-editor {
    min-height: 100px !important;
}
</style>

<script lang="ts" src="./wysiwyg-editor.component.ts" />
