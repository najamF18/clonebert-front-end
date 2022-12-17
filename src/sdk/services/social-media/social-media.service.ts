import {ServiceClass} from '@/decorators';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import {SignupModel, UserProfileModel} from '@/sdk/models';
import {BehaviorSubject} from 'rxjs';
import { LoaderService } from '../shared/loader.service';

@ServiceClass()
export class SocialMediaService {
    public socialMediaApi = new SocialMediaApi();
    public LoadingSrv = new LoaderService();
    // public userProfile = new BehaviorSubject(new UserProfileModel());


    
}
