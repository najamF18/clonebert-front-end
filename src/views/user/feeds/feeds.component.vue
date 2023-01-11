<template>
    <v-row class="pa-5">
        <v-col cols="8" class="text-end">
            <v-card elevation="20" class="pa-5 ma-auto" width="80%" color="darkgrey" rounded="lg">
                <v-row>
                    <v-col v-for="(item,idx) in links" :key="idx" @click="ChangeRoute(item.link)" cols="6" class="pa-3 ma-auto cursor-pointer " :class="
                            !!$route.matched.find(x => x.name === item.link)? 'border': 'simple'
                        ">
                        <div class="text-center ">
                            <v-icon :class="
                            !!$route.matched.find(x => x.name === item.link)? 'primarypurple--text': 'white--text'
                        ">{{ item.icon }}</v-icon> <span :class="
                            !!$route.matched.find(x => x.name === item.link)? 'primarypurple--text': 'white--text'
                        ">{{ item.title }}</span>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="ma-auto py-2" color="black" style="width:80%">
                <v-btn color="muted" @click="CoreSrv.OpenModal(model)"> Create Post </v-btn>
            </v-card>
            
<router-view :key="$route.fullPath" />
           
        </v-col>

        <v-col cols="4" class="text-center">
            <FollowersComponent></FollowersComponent>
        </v-col>

        <base-dialog :name="model" width="50%">
            <div class="d-flex justify-space-between mb-3">
                <h3 class="white--text">Create Post</h3>
                <v-btn color="error" icon @click="CoreSrv.CloseModal(model)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
            <div class="my-3">
                <base-textarea outlined hide-details :value.sync="newPost.description"  title="Post Description"></base-textarea>
            </div>
            <div class="my-3">
                <drag-drop-upload-component :file.sync="newPost.media_file" label="Upload Media File"></drag-drop-upload-component>
            </div>
            <div class="text-end my-3">
                <v-btn color="primarypurple" @click="CreatePost()"> Create Post </v-btn>
            </div>
        </base-dialog>
    </v-row>
</template>


<style lang="scss" scoped>
.border{
    border-bottom: 5px solid #8f5fe8;  
    border-radius: 5px;
}
.simple:hover{
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}
</style>


<script lang="ts" src="./feeds.component.ts" />