import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {LoaderService, LoginModel} from '@/sdk';
import {AccountsApi} from '@/sdk/api-services';
import {ApiAuth, UserSession} from '@/sdk/core';
import {ShowableRoute} from '@/globals';

@Component
export default class DrawerComponent extends VueWrapper {
    public MainLinks: Array<ShowableRoute> = [];

    public created() {
        this.MainLinks = this.$helpers.getShowableRoutes('User') ?? [];

        // console.log(this.MainLinks);
    }

    public items = [
        {
            title: 'Profile',
            icon: 'mdi-account',
            // name: 'Profile',
            link: '/user/profile',
            availableTo: 'Everyone',
            method: () => {}
        },

        {
            title: 'Logout',
            icon: 'mdi-logout',

            link: '',
            availableTo: 'Everyone',
            method: this.logout
        }
    ];

    public logout() {
        this.LoaderSrv.showFullScreenLoader();
        new UserSession().clear();
        this.$router.push({name: 'Login'});
        this.LoaderSrv.hideFullScreenLoader();
    }

    get num() {
        return this.$vuetify.breakpoint.width == 375;
    }
}
