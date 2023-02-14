import {RouteConfig} from 'vue-router';
import TransactionComponent from '../transaction/transaction.component';
import DashboardComponent from '../dashbaord/dashboard.component';
import ChangeEmailComponent from '../profile/change-email/change-email.component';
import ChangePasswordComponent from '../profile/change-password/change-password.component';
import DisableAccountComponent from '../profile/disable-account/disable-account.component';
import ProfileComponent from '../profile/profile.component';
import UserComponent from '../user.component';
import FeedComponent from '../feeds/feeds.component';
import AnalyticsComponent from '../analytics/analytics.component';
import ChangePrivacyComponent from './../profile/privacy/privacy.component';
import ManagePortfolioComponent from '../profile/manage-portfolio/manage-portfolio.component';
import BlockedUsersComponent from '../profile/blocked-users/blocked-users.component';
import HoldingComponent from './../profile/holdings/holdings.component';
import BasicInfoComponent from '../profile/basic-info/basic-info.component';
import PostsComponent from './../feeds/posts/posts.component';
import TimelineComponent from '../feeds/timeline/timeline.component';
import UserTimelineViewComponent from '../user-timeline-view/user-time-line.component';
import NotificationViewComponent from '../notification-view/notification-view.component';
import UserDashboardComponent from '../user-dashboard/user-dashboard.component';
import FollowersComponent from '../feeds/followers/followers.component';
import PostViewComponent from '../post-view/post-view.component';

export const UserRoutes: Array<RouteConfig> = [
           {
               path: '/user/:name',
               name: 'User',
               component: UserComponent,
               redirect: '/user/:name/dashboard',
               children: [
                   {
                       path: 'dashboard',
                       name: 'Dashboard',
                       component: DashboardComponent,
                       meta: {
                           showable: true,
                           icon: 'speedometer',
                           color: 'primarypurple',
                           sequence: 1,
                           title: 'Dashboard'
                       }
                   },
                   {
                       path: 'feeds',
                       name: 'Feeds',
                       component: FeedComponent,
                       redirect: 'feeds/posts',
                       meta: {
                           showable: true,
                           icon: 'playlist-play',
                           color: 'orange',
                           sequence: 1,
                           title: 'Feeds'
                       },
                       children: [
                           {
                               path: 'posts',
                               name: 'Posts',
                               component: PostsComponent
                           },
                           {
                               path: 'timeline',
                               name: 'Timeline',
                               component: TimelineComponent
                           }
                       ]
                   },

                   {
                       path: 'transaction',
                       name: 'Transaction',
                       component: TransactionComponent,
                       meta: {
                           showable: true,
                           icon: 'table-large',
                           color: 'red',
                           sequence: 1,
                           title: 'Transactions'
                       }
                   },
                   {
                       path: 'holdings',
                       name: 'Holdings',
                       component: HoldingComponent,
                       meta: {
                           showable: true,
                           icon: 'table-large',
                           color: 'green',
                           sequence: 1,
                           title: 'Holdings'
                       }
                   },
                   {
                       path: 'notification/:id?',
                       name: 'Notification View',
                       component: NotificationViewComponent,
                       meta: {
                           showable: false,
                           icon: 'table-large',
                           color: 'green',
                           sequence: 1,
                           title: 'Notification View'
                       }
                   },
                   {
                       path: 'post/:id?',
                       name: 'Post View',
                       component: PostViewComponent,
                       meta: {
                           showable: false,
                           icon: 'table-large',
                           color: 'green',
                           sequence: 1,
                           title: 'Notification View'
                       }
                   },
                   {
                       path: 'followers',
                       name: 'Followers View',
                       component: FollowersComponent,
                       meta: {
                           showable: false,
                           icon: 'table-large',
                           color: 'green',
                           sequence: 1,
                           title: 'Notification View'
                       }
                   },
                   //    {
                   //        path: 'user-profile/:id?',
                   //        name: 'User Profile View',
                   //        component: UserDashboardComponent,
                   //        meta: {
                   //            showable: false,
                   //            icon: 'table-large',
                   //            color: 'green',
                   //            sequence: 1,
                   //            title: 'User Profile View'
                   //        }
                   //    },
                   {
                       path: 'profile',
                       name: 'Profile',
                       redirect: 'profile/my-profile',
                       component: ProfileComponent,
                       meta: {
                           showable: true,
                           icon: 'cog',
                           color: 'blue',
                           sequence: 1,
                           title: 'Setting'
                       },
                       children: [
                           {
                               path: 'my-profile',
                               name: 'My Profile',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-account-outline',
                                   sequence: 1,
                                   position: 1,
                                   metaTitle: 'My Profile'
                               },
                               component: BasicInfoComponent
                           },

                           {
                               path: 'manage-portfolio',
                               name: 'Manage Portfolio',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-book-cog-outline',
                                   sequence: 1,
                                   position: 1,
                                   metaTitle: 'Portfolio'
                               },
                               component: ManagePortfolioComponent
                           },

                           {
                               path: 'change-privacy',
                               name: 'Change Privacy',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-eye-off-outline',
                                   sequence: 2,
                                   position: 1,
                                   metaTitle: 'Privacy'
                               },
                               component: ChangePrivacyComponent
                           },

                           {
                               path: 'change-password',
                               name: 'Change Password',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-lock-outline',
                                   sequence: 3,
                                   position: 1,
                                   metaTitle: 'Change Password'
                               },
                               component: ChangePasswordComponent
                           },
                           {
                               path: 'change-email',
                               name: 'Change Email',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-email-outline',
                                   sequence: 4,
                                   position: 1,
                                   metaTitle: 'Change Email'
                               },
                               component: ChangeEmailComponent
                           },
                           {
                               path: 'blocked-users',
                               name: 'Blocked Users',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-account-lock-outline',
                                   sequence: 5,
                                   position: 1,
                                   metaTitle: 'Blocked Users'
                               },
                               component: BlockedUsersComponent
                           },
                           {
                               path: 'disable-account',
                               name: 'Disable Account',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-account-cancel-outline',
                                   sequence: 6,
                                   position: 1,
                                   metaTitle: 'Disable Account'
                               },
                               component: DisableAccountComponent
                           }
                       ]
                   },
                   {
                       path: 'profile',
                       name: 'Profile',
                       redirect: 'profile/my-profile',
                       component: ProfileComponent,
                       children: [
                           {
                               path: 'my-profile',
                               name: 'My Profile',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-account-outline',
                                   sequence: 1,
                                   position: 1,
                                   metaTitle: 'My Profile'
                               },
                               component: BasicInfoComponent
                           },

                           {
                               path: 'manage-portfolio',
                               name: 'Manage Portfolio',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-book-cog-outline',
                                   sequence: 1,
                                   position: 1,
                                   metaTitle: 'Portfolio'
                               },
                               component: ManagePortfolioComponent
                           },

                           {
                               path: 'change-privacy',
                               name: 'Change Privacy',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-eye-off-outline',
                                   sequence: 2,
                                   position: 1,
                                   metaTitle: 'Privacy'
                               },
                               component: ChangePrivacyComponent
                           },

                           {
                               path: 'change-password',
                               name: 'Change Password',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-lock-outline',
                                   sequence: 3,
                                   position: 1,
                                   metaTitle: 'Change Password'
                               },
                               component: ChangePasswordComponent
                           },
                           {
                               path: 'change-email',
                               name: 'Change Email',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-email-outline',
                                   sequence: 4,
                                   position: 1,
                                   metaTitle: 'Change Email'
                               },
                               component: ChangeEmailComponent
                           },
                           {
                               path: 'blocked-users',
                               name: 'Blocked Users',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-account-lock-outline',
                                   sequence: 5,
                                   position: 1,
                                   metaTitle: 'Blocked Users'
                               },
                               component: BlockedUsersComponent
                           },
                           {
                               path: 'disable-account',
                               name: 'Disable Account',
                               meta: {
                                   showable: true,
                                   icon: 'mdi-account-cancel-outline',
                                   sequence: 6,
                                   position: 1,
                                   metaTitle: 'Disable Account'
                               },
                               component: DisableAccountComponent
                           }
                       ]
                   },
                   {
                       path: 'user-timeline',
                       name: 'User-Timeline',
                       component: AnalyticsComponent
                   }
               ]
           },
           {
               path: '/user-profile/:id?',
               name: 'User Profile View',
               component: UserDashboardComponent,
               meta: {
                   showable: false,
                   icon: 'table-large',
                   color: 'green',
                   sequence: 1,
                   title: 'User Profile View'
               }
           }
       ];
