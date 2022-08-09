import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {LoaderService, LoginModel, ResetPasswordModel} from '@/sdk';
import {AccountsApi} from '@/sdk/api-services';
import {ApiAuth, UserSession} from '@/sdk/core';
import {AlertService} from '@/sdk';
import BaseFormComponent from '@/components/vuetify/Form/base-form';
import ForgotPasswordComponent from '../forgot-password/forgot-Password.component';

@Component
export default class LoginComponent extends VueWrapper {
    public loginData = new LoginModel();

    public login() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .login(this.loginData)
            .subscribe(
                res => {
                    new UserSession()._session.next(res.data.data.data);
                    new UserSession().save();
                    this.$router.push({name: 'User'});
                },
                err => {
                    this.AlertSrv.show('error', 'Something went wrong!');
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}
