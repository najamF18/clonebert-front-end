<template>
    <base-card class="rounded darkgrey">
        <v-row class="pa-6 align-center">
            <v-col cols="8">
                <h4 class="muted--text font-weight-light white--text">{{ title }}</h4>
                <span class="align-self-center ml-1 font-weight-bold" :class="gains > 0 ? 'success--text' : 'error--text'">{{ gains.toFixed(2) }}%</span>
                <!-- <h4 class="muted--text font-weight-light ">Date: {{ new Date().toLocaleDateString() }}</h4> -->
            </v-col>
            <v-col cols="3">
                <v-sheet
                    :max-width="256"
                    :color="gains > 0 ? 'rgba(0, 210, 91, 0.11)' : 'rgba(252, 66, 74, 0.3)'"
                    class="d-flex justify-center rounded"
                    height="40"
                    width="40"
                >
                    <v-icon v-if="gains > 0" class="d-flex align-center" small color="green"> mdi-arrow-top-right </v-icon>
                    <v-icon v-else class="d-flex align-center" small color="red"> mdi-arrow-bottom-left </v-icon>
                </v-sheet>
            </v-col>
            <v-col cols="12" v-if="$attrs.showButton">
                <div>
                    <base-btn small tile class="left-top-rounded left-bottom-rounded white black--text ">
                        1D
                    </base-btn>
                    <base-btn small tile class="black--text white mx-2">
                        1Y
                    </base-btn>
                    <base-btn small tile class="right-top-rounded right-bottom-rounded black--text white">
                        Max
                    </base-btn>
                </div>
            </v-col>
        </v-row>
    </base-card>
</template>
<script lang="ts" src="./base-increase-decrease.component.ts" />
<style lang="scss" scoped>
.left-top-rounded {
    border-start-start-radius: 20px;
}
.left-bottom-rounded {
    border-end-start-radius: 20px;
}
.right-top-rounded {
    border-start-end-radius: 20px;
}
.right-bottom-rounded {
    border-end-end-radius: 20px;
}
</style>
