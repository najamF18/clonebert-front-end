import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { SocialMediaService } from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import Component from 'vue-class-component';

@Component
export default class BlockedUsersComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();


    public mounted() {
       this.socialMediaSrv.getBlockUser();
    }

    public UnBlockUser(id:string) {
        this.LoaderSrv.showFullScreenLoader("Loading...");
        new SocialMediaApi()
            .blockUser(id)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'User Unblocked Successfully');
                    this.socialMediaSrv.getBlockUser();
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
