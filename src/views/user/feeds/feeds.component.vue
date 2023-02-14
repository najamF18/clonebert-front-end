<template>
    <v-container>
    <v-row class="pa-5">
        <v-col cols="12" class="text-end">
            <v-card elevation="20" class="pa-3 ma-auto"  max-width="600" color="darkgrey" rounded="lg">
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
            <v-card class="ma-auto py-2" color="black" width="600">
                <div class="d-flex justify-space-between align-center">
                    <base-text-field placeholder="Search" :value.sync="SocialMediaSrv.text" hide-details @input="SocialMediaSrv.SearchP()" @keypress.enter="SocialMediaSrv.searchPosts()"  append-icon="mdi-magnify" outlined ></base-text-field>
                <v-btn color="muted white--text px-8" @click="CoreSrv.OpenModal(model)"> Post </v-btn>
                </div>
                 
            </v-card>
<router-view :key="$route.fullPath" />
            

           
        </v-col>

        <!-- <v-col cols="4" class="text-center">
            <FollowersComponent></FollowersComponent>
        </v-col> -->

        <base-dialog :name="model" width="50%" >
            <div class="d-flex justify-space-between mb-3">
                <h3 class="white--text">Create Post</h3>
                <v-btn color="error" icon @click="CoreSrv.CloseModal(model);Close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
            <div class="my-3">
                <v-textarea dark flat solo-inverted row-height="40" rules="max:999"   background-color="darkgrey" style="color:white"   v-model="description" hide-details  placeholder="What's happening "></v-textarea>
            </div>
            <div v-if="image">
                <base-card class="text-end px-2 darkgrey elevation-0">
               <v-btn color="error" icon @click="RemoveImage()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-avatar tile size="100%">
                    <v-img :src="image" contain max-width="500" max-height="500" />
                </v-avatar>
            </base-card>
            </div>
            <!-- <div class="my-3">
                <drag-drop-upload-component :file.sync="media_file" label="Upload Media File"></drag-drop-upload-component>
            </div> -->
            <div class="d-flex align-center  justify-space-between my-3">
                <v-btn color="primarypurple" icon @click="$refs.fileInput.click()" ><v-icon>mdi-camera</v-icon></v-btn>
                 <input type="file" class="d-none" accept="image/*" ref="fileInput" @change="uploadImage"/>
                 <div class="align-center">
                    <span v-if="description" class="mx-3" :class="[{'white--text':count<999},{'red--text':count>998}]">{{ count }} / 999</span>
                    <span v-else class="white--text mx-3">0 / 999</span>
                     <v-btn color="primarypurple white--text px-8" :disabled="count>998" @click="CreatePost()"> Post </v-btn>
                 </div>
            </div>
        </base-dialog>
    </v-row>
    </v-container>
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