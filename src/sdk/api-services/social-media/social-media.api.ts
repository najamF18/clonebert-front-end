import {ServiceClass} from '@/decorators';
import {AnyObject} from '@/globals';
import { UserSession } from '@/sdk/core';
import {CommentModel, ForgotPasswordPasswordModel, LoginModel, NotificationModel, PostModel, SessionModel, SignupModel, UserProfileModel} from '@/sdk/models';
import {ChangeEmailModel} from '@/sdk/models/authentication/change-email.model';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import {SettingsChangePasswordModel} from '@/sdk/models/authentication/settings-change-password.model';
import { FollowerModel, FollowingModel } from '@/sdk/models/social-media/follower-model';
import {BaseApi} from '../base.api';

@ServiceClass()
export class SocialMediaApi extends BaseApi {
    public getAllUsers() {
        return this.GET_Request<Array<UserProfileModel>>(`${this.ApiUrl}/social-media/all-users-view/`);
    }
    public addComment(postId: string, content: string) {
        const data = {
            content: content
        };
        return this.POST_Request<any>(`${this.ApiUrl}/social-media/comment-post-view/${postId}/`, data);
    }

    public getProfile() {
        return this.GET_Request<Array<UserProfileModel>>(`${this.ApiUrl}/social-media/user-profile-view/`);
    }

    public UpdateProfile(userId: string, data: FormData) {
        return this.PUT_Request<any>(`${this.ApiUrl}/social-media/user-profile-update-view/${userId}/`, data);
    }

    public UpdatePrivacy(userId: string, data: FormData) {
        return this.PATCH_Request<any>(`${this.ApiUrl}/social-media/user-profile-update-view/${userId}/`, data);
    }

    public getFeed() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/feed-view/`);
    }

    public followUser(followerId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/follow-user-view/${followerId}/`);
    }

    public getFollowers() {
        return this.GET_Request<FollowerModel>(`${this.ApiUrl}/social-media/followed-by-view/`);
    }

    public getFollowing() {
        return this.GET_Request<FollowingModel>(`${this.ApiUrl}/social-media/follow-list-view/`);
    }

    public likePost(postId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/like-post-view/${postId}/`);
    }

    public getNotificationsList() {
        return this.GET_Request<Array<NotificationModel>>(`${this.ApiUrl}/social-media/notification-list-view/`);
    }

    public ReadNotification(notificationId: string, des: string) {
        const data = {
            isRead: true,
            description: des
        };

        return this.PUT_Request<any>(`${this.ApiUrl}/social-media/notification-view/${notificationId}/`, data);
    }

    public ReadAllNotifications() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/read-notifications-view/`);
    }

    public getPosts() {
        return this.GET_Request<Array<PostModel>>(`${this.ApiUrl}/social-media/post-view/`);
    }

    public CreatePost(data: FormData) {
        return this.POST_Request<any>(`${this.ApiUrl}/social-media/post-view/`, data);
    }

    public SharePost(postId: string, description: string) {
        const data = {
            description: description
        };
        return this.POST_Request<any>(`${this.ApiUrl}/social-media/share-post-view/${postId}/`, data);
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
        return this.PUT_Request<any>(`${this.ApiUrl}/social-media/share-post-view/${postId}/`, data);
    }

    public getCommentsById(postId: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/comment-by-post/${postId}/`);
    }

    public getTimeline() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/timeline-view/`);
    }

    public getBlockUsers() {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/block-list-view/`);
    }
    public blockUser(id: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/block-user-view/${id}/`);
    }
    public removeFollower(id: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/remove-follower-view/${id}/`);
    }

    public searchUser(username: string) {
        const data = {
            username: username
        };
        return this.POST_Request<Array<UserProfileModel>>(`${this.ApiUrl}/social-media/search-user/`, data);
    }

    public searchPost(text: string) {
        const data = {
            text: text
        };
        return this.POST_Request<any>(`${this.ApiUrl}/social-media/search-post/`, data);
    }

    public getUserDashboard(user_id: string) {
        const c = new UserSession()._session.value;
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/user-dashboard/${user_id}?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }

    public getUserTimeline(user_id: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/user-timeline/${user_id}`);
    }
    public getPostById(id: string) {
        return this.GET_Request<PostModel>(`${this.ApiUrl}/social-media/post-update-view/${id}/`);
    }

    public getSharedPostById(id: string) {
        return this.GET_Request<PostModel>(`${this.ApiUrl}/social-media/post-get-view/${id}/`);
    }

    public getUserById(id: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/user-profile-retrieve-view/${id}/`);
    }

    public getViewUserFollowing(id: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/user-follow-list-view/${id}/`);
    }

    public getViewUserFollower(id: string) {
        return this.GET_Request<any>(`${this.ApiUrl}/social-media/user-followed-by-view/${id}/`);
    }
}
