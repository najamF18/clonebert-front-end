import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { SocialMediaService } from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';

import {Component} from 'vue-property-decorator';

@Component
export default class FollowersComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public isFollowers = true;
    public isUsers = false;
    public isFollowing = false;
    public isLoading = false;
    mounted() {
        this.socialMediaSrv.getFollowers();
        this.socialMediaSrv.getUsers();
        this.socialMediaSrv.getFollowing();
    }

    UnFollowUser(id: string) {
        new SocialMediaApi().followUser(id).subscribe(res => {
            console.log('follow', res);
                this.socialMediaSrv.getFollowers();
                this.socialMediaSrv.getUsers();
                this.socialMediaSrv.getFollowing();
        });
    }

    FollowUser(id: string) {
        new SocialMediaApi().followUser(id).subscribe(res => {
            console.log('follow', res);
            this.socialMediaSrv.getFollowers();
            this.socialMediaSrv.getUsers();
            this.socialMediaSrv.getFollowing();
        });
    }
}
