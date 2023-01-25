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
        if(this.$route.hash =='#following'){
            this.isFollowers = false;
            this.isFollowing = true;
        }
        this.socialMediaSrv.allUsers =[];
        this.socialMediaSrv.getFollowers();
        this.socialMediaSrv.getFollowing();
    }

    UnFollowUser(id: string) {
        new SocialMediaApi().followUser(id).subscribe(res => {
            console.log('follow', res);
               this.socialMediaSrv.getFollowers();
               this.socialMediaSrv.getFollowing();
               this.socialMediaSrv.getFeeds();
               this.socialMediaSrv.getTimelinePosts();
            
        });
    }

    FollowUser(id: string) {
        new SocialMediaApi().followUser(id).subscribe(res => {
            console.log('follow', res);
            this.socialMediaSrv.getFollowers();
            this.socialMediaSrv.getFollowing();
            this.socialMediaSrv.getFeeds();
            this.socialMediaSrv.getTimelinePosts();
        });
    }

    public UnBlockUser(id: string) {
        this.LoaderSrv.showFullScreenLoader('Loading...');
        new SocialMediaApi()
            .blockUser(id)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'User Blocked Successfully');
                    this.socialMediaSrv.getFollowers();
                    this.socialMediaSrv.getBlockUser();
                    this.socialMediaSrv.getFeeds();
                    this.socialMediaSrv.getTimelinePosts();
                },
                err => {
                    this.AlertSrv.show('error', err.message);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }

  
}
