import {ServiceClass} from '@/decorators';
import {AnyObject} from '@/globals';
import {ForgotPasswordPasswordModel, LoginModel, SessionModel, SignupModel, UserProfileModel} from '@/sdk/models';
import {ChangeEmailModel} from '@/sdk/models/authentication/change-email.model';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import {SettingsChangePasswordModel} from '@/sdk/models/authentication/settings-change-password.model';
import {BaseApi} from '../base.api';

@ServiceClass()
export class SocialMediaApi extends BaseApi {
    public getAllUsers() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/all-users-view/`);
    }
    public addComment(postId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/comment-post-view/${postId}/`);
    }

    public getProfile() {
        return this.GET_Request<Array<UserProfileModel>>(`${this.ApiUrl}/social-media/user-profile-view/`);
    }

    public UpdateProfile(userId: string,data:FormData) {
        
        return this.PUT_Request<any>(`${this.ApiUrl}/social-media/user-profile-update-view/${userId}/`, data);
    }
    public getFeed() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/feed-view/`);
    }

    public followUser(followerId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/follow-user-view/${followerId}/`);
    }

    public getFollowers(followerId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/followed-by-view/`);
    }

    public likePost(postId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/like-post-view/${postId}/`);
    }

    public getNotificationsList() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/notification-list-view/`);
    }

    public ReadNotification(notificationId: string) {
        const data = {
            isRead: true,
            description: 'string',
            sender: 0,
            receiver: 0
        };

        return this.PUT_Request<any>(`${this.ApiUrl}/social-media/notification-view/${notificationId}/`, data);
    }

    public getPosts() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/post-view/`);
    }

    public CreatePost(data:FormData) {
        
        return this.POST_Request<any>(`${this.ApiUrl}/social-media/post-view/`, data);
    }

    public SharePost(postId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/share-post-view/${postId}/`);
    }

    public timelinePosts(postId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/timeline-view/`);
    }
    public UpdatePost(postId: string) {
        const data = {
            media_file: 'string',
            title: 'string',
            description: 'string'
        };
        return this.PUT_Request<any>(`${this.ApiUrl}/social-media/share-post-view/${postId}/`,data);
    }
}
