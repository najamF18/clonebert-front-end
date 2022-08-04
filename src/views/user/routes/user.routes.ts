import {RouteConfig} from 'vue-router';
import DashboardComponent from '../dashbaord/dashboard.component';
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
                    icon: 'mdi-view-dashboard-outline',
                    sequence: 1,
                    title: 'Dashboard'
                }
            }
        ]
    }
];
