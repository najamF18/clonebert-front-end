import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi, LoaderService, SocialMediaService, UserProfileModel} from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import {ChangeEmailModel} from '@/sdk/models/authentication/change-email.model';
import { UsersService } from '@/sdk/services/users/users.service';
import Component from 'vue-class-component';
import UploadProfilePictureComponent from './../../../../components/shared/upload-profile-picture/upload-profile-picture.component';

@Component({
    components: {
        UploadProfilePictureComponent
    }
})
export default class BasicInfoComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public UserSrv = new UsersService();
    public isProfileChanged=false;
    public profile_pic:any =null;

    mounted() {
        this.UserSrv.getUserProfile();
    }
    public uploadImage(event: any) {
        const input = event.target;
        if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.UserSrv.image = (e.target as any).result;
                };
                reader.readAsDataURL(input.files[0]);
                this.profile_pic = input.files[0];
                this.isProfileChanged = true;
            }
        
    }
   

    public UpdateProfile() {
        this.LoaderSrv.showFullScreenLoader();
        const fd = new FormData();
        if(this.isProfileChanged){
             fd.append('profile_pic', this.profile_pic!);
        }
       
        fd.append('location', this.UserSrv.userProfile.location!);
        fd.append('description', this.UserSrv.userProfile.description!);
        fd.append('privacy',this.UserSrv.userProfile.privacy as unknown as string);
        new SocialMediaApi()
            .UpdateProfile(this.UserSrv.userProfile?.id!, fd)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'Profile updated successfully!');
                    this.UserSrv.getUserProfile();
                    console.log(res);
                },
                err => {
                    this.AlertSrv.show('error', err.profile_pic[0]);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}
