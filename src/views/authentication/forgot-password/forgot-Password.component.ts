import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi, LoginModel, ResetPasswordModel} from '@/sdk';
import {LoaderService} from '@/sdk/services';
import {Component} from 'vue-property-decorator';
import {AlertService} from '@/sdk';
import BaseFormComponent from '@/components/vuetify/Form/base-form';

@Component
export default class ForgotPasswordComponent extends VueWrapper {
    public forgotPasswordData = new ResetPasswordModel();

    public ForgotPassword() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .forgotPassword(this.forgotPasswordData)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'An email has sent to your email address to reset your password.');
                },
                err => {
                    this.AlertSrv.show('error', err.email || 'Something went wrong!');
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}
