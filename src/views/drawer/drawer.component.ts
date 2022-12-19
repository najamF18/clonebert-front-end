import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {LoaderService, LoginModel, UserProfileModel} from '@/sdk';
import {AccountsApi} from '@/sdk/api-services';
import {ApiAuth, UserSession} from '@/sdk/core';
import {ShowableRoute} from '@/globals';
import { CoreService } from '@/services/core.service';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';

@Component
export default class DrawerComponent extends VueWrapper {
    public MainLinks: Array<ShowableRoute> = [];
    public CoreSrv = new CoreService();
    public userProfile = new UserProfileModel();

    public created() {
        this.MainLinks = this.$helpers.getShowableRoutes('User') ?? [];

        // console.log(this.MainLinks);
    }
    mounted() {
        this.getUserProfile();
    }

    getUserProfile() {
        new SocialMediaApi().getProfile().subscribe(res => {
            this.userProfile = res[0];
        });
    }

    public items = [
        {
            title: 'Profile',
            icon: 'contacts',
            // name: 'Profile',
            link: '/user/profile',
            availableTo: 'Everyone',
            method: () => {}
        },

        {
            title: 'Logout',
            icon: 'logout',

            link: '',
            availableTo: 'Everyone',
            method: this.logout
        }
    ];

    public logout() {
        this.LoaderSrv.showFullScreenLoader('Logging out...');
        new AccountsApi().logout().subscribe(
            res => {
                console.log('Holding List', res);
                new UserSession().clear();
                this.$router.push({name: 'Login'});
                this.LoaderSrv.hideFullScreenLoader();
            },
            err => {
                this.AlertSrv.show('error', err.message);
                this.LoaderSrv.hideFullScreenLoader();
            }
        );
    }

    get num() {
        return this.$vuetify.breakpoint.width == 375;
    }
}
