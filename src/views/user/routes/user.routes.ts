import {RouteConfig} from 'vue-router';
import DashboardComponent from '../dashbaord/dashboard.component';
import ChangeEmailComponent from '../profile/change-email/change-email.component';
import ChangePasswordComponent from '../profile/change-password/change-password.component';
import DisableAccountComponent from '../profile/disable-account/disable-account.component';
import ProfileComponent from '../profile/profile.component';
import UserComponent from '../user.component';

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
                path: 'profile',
                name: 'Profile',
                redirect: 'profile/change-password',
                component: ProfileComponent,
                children: [
                    // {
                    //     path: 'my-profile',
                    //     name: 'My Profile',
                    //     meta: {
                    //         showable: true,
                    //         icon: 'mdi-account-outline',
                    //         sequence: 1,
                    //         position: 1,
                    //         metaTitle: 'My Profile'
                    //     },
                    //     component: UserPersonalInfoComponent
                    // },
                    {
                        path: 'change-password',
                        name: 'Change Password',
                        meta: {
                            showable: true,
                            icon: 'mdi-lock-outline',
                            sequence: 1,
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
                            sequence: 2,
                            position: 1,
                            metaTitle: 'Change Email'
                        },
                        component: ChangeEmailComponent
                    },
                    {
                        path: 'disable-account',
                        name: 'Disable Account',
                        meta: {
                            showable: true,
                            icon: 'mdi-account-cancel-outline',
                            sequence: 3,
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
