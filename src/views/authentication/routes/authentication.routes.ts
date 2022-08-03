import {RouteConfig} from 'vue-router';
import ForgotPasswordComponent from '../forgot-password/forgot-Password.component';
import LoginComponent from '../login/login.component';
import LoginSignupLayoutComponent from '../loginsignup/login-signup-layout.component';
import LogoutComponent from '../logout/logout.component';
import SignupComponent from '../signup/signup.component';

export const AuthenticationRoutes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'LoginSignupLayout',
        redirect: '/login',
        component: LoginSignupLayoutComponent,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: LoginComponent
            },
            {
                path: '/sign-up',
                name: 'Signup',
                component: SignupComponent,
                meta: {
                    title: 'Sign Up for Free Today!',
                    description:
                        'Sign up for a free MHParks.com account and begin evolving how you accomplish your goals in the mobile home park industry today!'
                }
            }
        ]
    }
];
