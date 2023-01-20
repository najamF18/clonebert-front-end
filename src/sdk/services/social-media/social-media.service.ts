import {ServiceClass} from '@/decorators';
import {SocialMediaApi} from '@/sdk/api-services/social-media/social-media.api';
import {NotificationModel, PostModel, SignupModel, UserProfileModel} from '@/sdk/models';
import {FollowerModel, FollowingModel} from '@/sdk/models/social-media/follower-model';
import {BehaviorSubject} from 'rxjs';
import {LoaderService} from '../shared/loader.service';

@ServiceClass()
export class SocialMediaService {
    public socialMediaApi = new SocialMediaApi();
    public LoadingSrv = new LoaderService();
    public posts = new BehaviorSubject(Array<PostModel>());
    public feeds = new BehaviorSubject(Array<PostModel>());
    public myFollowers = new BehaviorSubject(new FollowerModel());
    public myFollowing = new BehaviorSubject(new FollowingModel());
    public allUsers = new Array<UserProfileModel>();
    public notifications = new BehaviorSubject(Array<NotificationModel>());
    public totalNotification = new BehaviorSubject(0);
    public timelinePosts = new Array<PostModel>();
    public blockedUser: Array<UserProfileModel> = [];
    public username: string | null = null;
    public text: string | null = null;

    getPosts() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.socialMediaApi
            .getPosts()
            .subscribe(
                res => {
                    console.log(res);
                    this.posts.next(res);
                },
                err => {}
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getFollowers() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.socialMediaApi
            .getFollowers()
            .subscribe(
                res => {
                    console.log('Followers', res);
                    this.myFollowers.next(res);
                },
                err => {}
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getFollowing() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.socialMediaApi
            .getFollowing()
            .subscribe(
                res => {
                    console.log('Followers', res);
                    this.myFollowing.next(res);
                },
                err => {}
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getUsers() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.socialMediaApi
            .getAllUsers()
            .subscribe(
                res => {
                    console.log('Users', res);
                    this.allUsers = res;
                },
                err => {}
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getNotifications() {
        new SocialMediaApi().getNotificationsList().subscribe(
            res => {
                console.log(res);
                this.notifications.next(res);
                this.totalNotification.next(this.notifications.value.length);
            },
            err => {
                console.log(err);
            }
        );
    }

    getTimelinePosts() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        new SocialMediaApi()
            .getTimeline()
            .subscribe(res => {
                console.log(res);
                this.timelinePosts = res.posts_created;
                this.timelinePosts = this.timelinePosts.concat(...this.timelinePosts, res.posts_shared);
                this.timelinePosts.sort((a, b) => Number(new Date(a.timestamp!)) - Number(new Date(b.timestamp!))).reverse();
                console.log('my time', this.timelinePosts);
            })
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getFeeds() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.socialMediaApi
            .getFeed()
            .subscribe(
                res => {
                    console.log(res);
                    this.feeds.next(res);
                },
                err => {}
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getBlockUser() {
        new SocialMediaApi().getBlockUsers().subscribe(res => {
            console.log(res.blocks);
            this.blockedUser = res.blocks;
        });
    }

    searchUsers() {
        this.LoadingSrv.showFullScreenLoader('loading');
        new SocialMediaApi()
            .searchUser(this.username!)
            .subscribe(res => {
                this.allUsers = res.data.users;
                console.log(res, 'searchUsers', this.allUsers);
            })
            .add(() => this.LoadingSrv.hideFullScreenLoader());
    }

    searchPosts() {
        this.LoadingSrv.showFullScreenLoader('loading');
        new SocialMediaApi()
            .searchPost(this.text!)
            .subscribe(res => {
                this.feeds.next(res.data.posts);
                this.timelinePosts= res.data.posts;
                console.log(res, 'searchPosts');
            })
            .add(() => this.LoadingSrv.hideFullScreenLoader());
    }
    public Search() {
        console.log(this.username);
        if (!this.username) {
          this.getUsers();
        }
        if (this.username!.length >= 3) {
            this.searchUsers();
            // this.username = null;
        }
    }

    public SearchP() {
        console.log(this.text);
        if (!this.text) {
            this.getFeeds();
            this.getTimelinePosts();
        }
        if (this.text!.length >= 3) {
            this.searchPosts();
            // this.username = null;
        }
    }
}
