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
    public image = '';
    public isProfileChanged=false;

    mounted() {
        this.getUserProfile();
    }
    public uploadImage(event: any) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                this.image = (e.target as any).result;
            };
            reader.readAsDataURL(input.files[0]);
        }
        this.userProfile.profile_pic = input.files[0];
        this.isProfileChanged = true;
    }
    getUserProfile() {
        new LoaderService().showFullScreenLoader('Loading...');
        new SocialMediaApi()
            .getProfile()
            .subscribe(
                res => {
                    console.log(res);
                    this.userProfile = res[0];
                    console.log(this.userProfile);
                    this.image = this.userProfile.profile_pic!;
                },
                err => {
                    console.log(err);
                }
            )
            .add(() => {
                new LoaderService().hideFullScreenLoader();
            });
    }

    public UpdateProfile() {
        this.LoaderSrv.showFullScreenLoader();
        const fd = new FormData();
        if(this.isProfileChanged){
             fd.append('profile_pic', this.userProfile.profile_pic!);
        }
       
        fd.append('location',this.userProfile.location!);
        new SocialMediaApi().UpdateProfile(this.userProfile?.id!,fd)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'Profile updated successfully!');
                    this.getUserProfile();
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
