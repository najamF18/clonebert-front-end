import { SocialMediaService, UserSession } from '@/sdk';
import { CoreService } from '@/services/core.service';
import Component from 'vue-class-component';
import VueWrapper from '../Vue/vue.wrapper';
import NotificationBox from './../notificationBox/notification-box.component';
import { SocialMediaApi } from './../../../sdk/api-services/social-media/social-media.api';

@Component({
    components: {
        NotificationBox
    }
})
export default class AppBarComponent extends VueWrapper {
    public CoreSrv = new CoreService();
    public socialMediaSrv = new SocialMediaService();

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
                    this.socialMediaSrv.getFollowing();
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
