import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {AuthenticationRoutes} from '@/views/authentication/routes/authentication.routes';
import {ApiAuth, UserSession} from '@/sdk';

import goTo from 'vuetify/lib/services/goto';
import VueMeta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(VueMeta);

export const routes: Array<RouteConfig> = [...AuthenticationRoutes];

const UserSessionSrv = new UserSession();

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo: any = 0;

        if (to.hash) {
            scrollTo = to.hash;
        } else if (savedPosition) {
            scrollTo = savedPosition.y;
        }

        return goTo(scrollTo);
    },
    routes
});

router.beforeEach((to, from, next) => {
    // Get current user from cookie.
    const isUserLoggedIn = UserSessionSrv.isUserAuthenticated;
    // new ApiAuth().SessionValue && !!new ApiAuth().SessionValue!.UserId;

    const isNonAuthRoute = ['Login', 'Signup', 'Forgot Password', 'Resend Email', 'Cancelled Membership'].includes(to.name!);
    const parentRouteNames = routes.map(route => {
        return route.name;
    });
    const childRoutes: any = [];

    function findingRouteNames(routes: Array<RouteConfig>) {
        routes.forEach(route => {
            if ('children' in route) {
                findingRouteNames(route.children!);
            } else {
                childRoutes.push(route.name);
            }
        });
    }
    findingRouteNames(routes);

    const allRouteNames = [...parentRouteNames, ...childRoutes];
    const isRouteExist = allRouteNames.includes(to.name);

    // if (!isRouteExist) {
    //     console.log(allRouteNames);

    //     next({name: 'Page Not Found'});
    // } else
    // Perform Authentication

    // console.log('route exists: ', isRouteExist);
    // if (!isRouteExist) {
    //     next({name: 'Page Not Found'});
    // } else
    if (!isUserLoggedIn && isNonAuthRoute) {
        next();
    } else if (isUserLoggedIn && isNonAuthRoute) {
        next({name: 'Home', query: {...to.query, redirect_reason: 'UNAUTHORIZIED'}});
    } else if (!isUserLoggedIn && !isNonAuthRoute) {
        next({name: 'Home', query: {redirect_reason: 'UNAUTHORIZIED'}});
    } else {
        next();
    }

    setTimeout(() => {
        const main = document.getElementsByTagName('main');
        if (main && main[0]) {
            main[0].scrollTo(0, 0);
        }
    }, 100);
});

export default router;
