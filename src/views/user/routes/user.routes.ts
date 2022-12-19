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

export const UserRoutes: Array<RouteConfig> = [
           {
               path: '/user',
               name: 'User',
               component: UserComponent,
               redirect: '/user/dashboard',
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
                       meta: {
                           showable: true,
                           icon: 'playlist-play',
                           color: 'orange',
                           sequence: 1,
                           title: 'Activity Feed'
                       }
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
                       path: 'analytics',
                       name: 'Analytics',
                       component: AnalyticsComponent,
                       meta: {
                           showable: true,
                           icon: 'chart-bar',
                           color: 'blue',
                           sequence: 1,
                           title: 'Analytics'
                       }
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
                           // {
                           //     path: 'my-company',
                           //     name: 'My Company',
                           //     meta: {
                           //         showable: true,
                           //         icon: 'mdi-domain',
                           //         sequence: 3,
                           //         position: 1,
                           //         metaTitle: 'My Company'
                           //     },
                           //     component: MyCompanyComponent
                           // },
                           // {
                           //     path: 'email-notifications',
                           //     name: 'Email Notifications',
                           //     meta: {
                           //         showable: true,
                           //         icon: 'mdi-bell-outline',
                           //         sequence: 4,
                           //         position: 1,
                           //         metaTitle: 'Email Notifications'
                           //     },
                           //     component: EmailNotificationsComponent
                           // },
                           // {
                           //     path: 'my-quick-links',
                           //     name: 'My Quick Links',
                           //     meta: {
                           //         showable: true,
                           //         icon: 'mdi-link',
                           //         sequence: 5,
                           //         position: 1,
                           //         metaTitle: 'My Quick Links'
                           //     },
                           //     component: MyQuickLinksComponent
                           // },
                           // {
                           //     path: 'social-media',
                           //     name: 'Social Media',
                           //     meta: {
                           //         showable: true,
                           //         icon: 'mdi-facebook',
                           //         sequence: 6,
                           //         position: 1,
                           //         metaTitle: 'Social Media'
                           //     },
                           //     component: SocialMediaComponent
                           // },
                           // {
                           //     path: 'billing-and-plans',
                           //     name: 'Billing & Plans',
                           //     meta: {
                           //         title: 'Billing & Plans',
                           //         showable: true,
                           //         icon: 'mdi-credit-card-outline',
                           //         sequence: 7,
                           //         position: 1,
                           //         metaTitle: 'Billing & Plans'
                           //     },
                           //     component: BillingAndAccountComponent
                           // }
                       ]
                   }
               ]
           }
       ];
