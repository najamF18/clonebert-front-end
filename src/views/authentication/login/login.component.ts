import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {LoaderService, LoginModel} from '@/sdk';
import {AccountsApi} from '@/sdk/api-services';
import {ApiAuth, UserSession} from '@/sdk/core';
import {AlertService} from '@/sdk';
import BaseFormComponent from '@/components/vuetify/Form/base-form';
import ForgotPasswordComponent from '../forgot-password/forgot-Password.component';
import { SocialMediaApi } from './../../../sdk/api-services/social-media/social-media.api';

@Component
export default class LoginComponent extends VueWrapper {
    public loginData = new LoginModel();
    public mounted() {
        if (this.$route.query.verified === 'true') {
            this.AlertSrv.show('success', 'Email verified succesfully!');
        }
    }

    

    public login() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .login(this.loginData)
            .subscribe(
                res => {
                    if (res.data.data.data.token) {
                        new UserSession()._session.next(res.data.data.data);
                        new UserSession().save();
                        
                        this.$router.push({name: 'User'});
                    } else if (res.data.message) {
                        this.AlertSrv.show('success', res.data.message);
                    }
                },
                err => {
                    this.AlertSrv.show('error', err.message);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}
