import VueWrapper from '@/components/core/Vue/vue.wrapper';
import Component from 'vue-class-component';
import { UsersService } from '@/sdk/services/users/users.service';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';

@Component
export default class ChangePrivacyComponent extends VueWrapper {
    public userSrv = new UsersService();
    public mounted() {
        this.userSrv.getUserProfile();
    }

    public UpdateProfile() {
        this.LoaderSrv.showFullScreenLoader();
        const fd = new FormData();

        fd.append('privacy', (this.userSrv.userProfile.privacy as unknown) as string);
        new SocialMediaApi()
            .UpdatePrivacy(this.userSrv.userProfile?.id!, fd)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'Privacy updated successfully!');
                    this.userSrv.getUserProfile();
                    console.log(res);
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
