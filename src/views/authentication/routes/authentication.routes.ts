import {RouteConfig} from 'vue-router';
import AboutComponent from '../about/about.component';
import ForgotPasswordComponent from '../forgot-password/forgot-Password.component';
import LoginComponent from '../login/login.component';
import LoginSignupLayoutComponent from '../loginsignup/login-signup-layout.component';
import LogoutComponent from '../logout/logout.component';
import PrivacyComponent from '../privacy/privacy.component';
import SignupComponent from '../signup/signup.component';
import TermsAndConditionsComponent from '../terms-and-conditions/terms-and-conditions.component';

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
                component: SignupComponent
            },
            {
                path: '/forgot-password',
                name: 'Forgot Password',
                component: ForgotPasswordComponent
            },
            {
                path: '/about',
                name: 'About',
                component: AboutComponent
            },
            {
                path: '/privacy',
                name: 'Privacy',
                component: PrivacyComponent
            },
            {
                path: '/terms-and-conditions',
                name: 'Terms and Conditions',
                component: TermsAndConditionsComponent
            }
        ]
    }
];
