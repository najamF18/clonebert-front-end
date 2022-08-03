import {AnyObject} from 'chart.js/types/basic';
import Vue from 'vue';

export const filters = {
    strTrueFalse: Vue.filter('strTrueFalse', (value: string | null) => {
        console.log(value);
        if (value === 'True') {
            return true;
        }
        return false;
    }),
    getValueOf: Vue.filter('getValueOf', (obj: AnyObject, keyName: string, nullMessage: string | null) => {
        if (obj && !!obj[keyName]) {
            return obj[keyName];
        }
        return nullMessage;
    }),
    numberWithCommas: Vue.filter('numberWithCommas', (x: number) => {
        // return x != null && new RegExp(/^-?\d*\.?\d+$/).test(`${x}`) ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x;
        if (x != null) {
            const v = x.toString().split('.');
            // if (v.length === 1 && !this.once) {
            //     v[1] = '00';
            //     this.once = true;
            // }
            v[0] = v[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return v.join('.');
        }
        return x;
    }),

    contactConditional: Vue.filter('contactConditional', (x: string | null, str: string | null, str1: string | null) => {
        return x != null ? `${x} ${str}` : `${str1}`;
    }),

    toCurrency: Vue.filter('toCurrency', (x: number) => {
        if (isNaN(+x)) {
            return x;
        }

        return `$${(Math.trunc(+x * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    })
};
