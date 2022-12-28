import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { SocialMediaService } from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';

import {Component} from 'vue-property-decorator';

@Component
export default class FollowersComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    mounted() {
        this.socialMediaSrv.getFollowers();
    }

    UnFollowUser(){
        // new SocialMediaApi().u
    }
}
