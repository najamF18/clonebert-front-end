<template>
<v-row class="pa-5 ">
    <v-col cols="8" class="text-end">
        <v-btn color="muted" @click="CoreSrv.OpenModal(model)">
            Create Post
        </v-btn>
    <post-card></post-card>
    </v-col>

    <v-col cols="4" class="text-center">
        <h1>Followers</h1>
    </v-col>

    <base-dialog :name="model" width="50%" >
    <div class="d-flex justify-space-between mb-3">
        <h3 class="white--text">Create Post</h3>
        <v-btn color="error" icon @click="CoreSrv.CloseModal(model)">
        <v-icon>mdi-close</v-icon>
        </v-btn>
    </div>
    <div class="my-3">
        <base-text-field label="Post Title" :value.sync="newPost.title"  autofocus outlined hide-details></base-text-field>
    </div>
    <div class="my-3">
        <base-textarea outlined hide-details :value.sync="newPost.description" title="Post Description"></base-textarea>
    </div>
    <div class="my-3">
        <drag-drop-upload-component :file.sync="newPost.media_file" label="Upload Media File"></drag-drop-upload-component>
    </div>
    <div class="text-end my-3">
        <v-btn color="primarypurple" @click="CreatePost()">
            Create Post
        </v-btn>
    </div>
    
    
</base-dialog>
  
</v-row>
  
</template>





<script lang="ts" src="./feeds.component.ts" />