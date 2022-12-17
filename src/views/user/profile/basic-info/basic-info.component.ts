import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi, LoaderService, SocialMediaService, UserProfileModel} from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import {ChangeEmailModel} from '@/sdk/models/authentication/change-email.model';
import Component from 'vue-class-component';
import UploadProfilePictureComponent from './../../../../components/shared/upload-profile-picture/upload-profile-picture.component';

@Component({
    components: {
        UploadProfilePictureComponent
    }
})
export default class BasicInfoComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public userProfile = new UserProfileModel();

    mounted() {
        this.getUserProfile();
    }
    getUserProfile() {
        new LoaderService().showFullScreenLoader('Loading...');
        new SocialMediaApi()
            .getProfile()
            .subscribe(
                res => {
                    console.log(res);
                    this.userProfile=res[0];
                    console.log(this.userProfile);
                },
                err => {
                    console.log(err);
                }
            )
            .add(() => {
                new LoaderService().hideFullScreenLoader();
            });
    }

    // public changeEmail() {
    //     this.LoaderSrv.showFullScreenLoader();
    //     new AccountsApi()
    //         .changeEmail(this.changeEmailData)
    //         .subscribe(
    //             res => {
    //                 this.AlertSrv.show('success', 'Email changed successfully!');
    //                 this.changeEmailData = new ChangeEmailModel();
    //                 this.UserSession.clear();
    //                 this.$router.push({name: 'Login'});
    //             },
    //             err => {
    //                 this.AlertSrv.show('error', err.message);
    //             }
    //         )
    //         .add(() => {
    //             this.LoaderSrv.hideFullScreenLoader();
    //         });
    // }
}
