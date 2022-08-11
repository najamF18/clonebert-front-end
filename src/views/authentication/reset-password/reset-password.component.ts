import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi} from '@/sdk';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import axios, {AxiosRequestConfig} from 'axios';
import Component from 'vue-class-component';

@Component
export default class ResetPasswordComponent extends VueWrapper {
    public changePassword = new ChangePasswordModel();
    public confirmPassword: string = '';
    public options: AxiosRequestConfig = {
        method: 'POST',
        url: 'https://clonebert.herokuapp.com/auth/change-password',
        headers: {ccept: 'application/json', 'Content-Type': 'application/json;charset=UTF-8', Authorization: this.$route.query?.token},
        data: this.changePassword
    };

    public async resetPassword() {
        this.LoaderSrv.showFullScreenLoader();
        if (this.$route.query.token) {
            this.changePassword.token = this.$route.query.token as any;
            new AccountsApi()
                .resetPassword(this.changePassword)
                .subscribe(
                    res => {
                        this.AlertSrv.show('success', 'Password changed successfully!');
                    },
                    err => {
                        this.AlertSrv.show('error', err.password[0]);
                    }
                )
                .add(() => {
                    this.LoaderSrv.hideFullScreenLoader();
                });
        }
    }
}
