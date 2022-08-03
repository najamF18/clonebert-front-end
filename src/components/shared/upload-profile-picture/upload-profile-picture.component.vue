<template>
    <div>
        <v-card>
            <v-card-title class="primary--text">
                {{ $attrs.title ? $attrs.title : 'Upload Profile Image' }}
            </v-card-title>
            <cropper
                ref="cropperRef"
                class="cropper"
                :src="image"
                :stencil-props="{
                    movable: true
                }"
                stencilComponent="circle-stencil"
                backgroundClass="background-cropper"
            />
            <v-card-actions>
                <div class="d-flex justify-space-between py-3 width-100">
                    <div>
                        <base-btn color="secondary" @click="$refs.file.click()">
                            Select image
                        </base-btn>
                        <base-btn class="mx-2" :disabled="!image" color="primary" @click="$emit('update')">
                            Upload image
                        </base-btn>
                    </div>
                    <base-btn color="error" @click="remove" v-if="IsMediaExists">
                        Remove Picture
                    </base-btn>
                    <base-btn color="body" @click="close">Cancel</base-btn>
                </div>
                <input class="d-none" type="file" ref="file" @change="uploadImage($event)" accept="image/*" />
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts" src="./upload-profile-picture.component.ts" />

<style lang="scss">
.cropper {
    overflow-x: hidden;
}
.background-cropper {
    background: white;
}
</style>
