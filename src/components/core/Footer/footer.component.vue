<template>
    <footer class="black">
        <div class="d-flex align-center justify-space-between pa-3 px-7" style="height:60px">
            <span class="muted--text d-block text-center text-sm-left d-sm-inline-block">Copyright © Clonebert 2022</span>
            <span class=" float-sm-right d-block mt-1 mt-sm-0 text-left"><a class="secondary--text" @click="$router.push({name: 'About'})">About</a></span>
            <span class="float-sm-right d-block mt-1 mt-sm-0 text-left"
                ><a class="secondary--text" @click="$router.push({name: 'Terms and Conditions'})">Terms & Conditions</a></span
            >
            <span class="float-sm-right d-block mt-1 mt-sm-0 text-left"><a class="secondary--text" @click="$router.push({name: 'Privacy'})">Privacy</a></span>
        </div>
    </footer>
</template>

<script lang="ts" src="./footer.component.ts" />
