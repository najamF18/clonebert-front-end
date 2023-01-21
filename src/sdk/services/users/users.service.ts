import {ServiceClass} from '@/decorators';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import { UserProfileModel } from '@/sdk/models';
import {BehaviorSubject} from 'rxjs';
import {DataOptions} from 'vuetify';
import {LoaderService} from '../shared/loader.service';

@ServiceClass()
export class UsersService {
    public userProfile = new UserProfileModel();
    public image = '';
    
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
}
