<template>
    <div>
        <div class="px-6 mt-3 d-flex justify-space-between">
            <h3 class="white--text">Area Chart</h3>
             <v-btn-toggle
          v-model="toggle_exclusive"
          mandatory
          class="darkgrey"
        >
          <v-btn text small color="white">
            1D
          </v-btn>
          <v-btn text small color="white">
            7D
          </v-btn>
          <v-btn text small color="white">
            1M
          </v-btn>
          <v-btn text small color="white">
            1Y
          </v-btn>
        </v-btn-toggle>
        </div>
        <base-chart v-bind="$attrs" :options="option" />
        <slot />
    </div>
</template>

<script src="./area-widget.component.ts" lang="ts" />