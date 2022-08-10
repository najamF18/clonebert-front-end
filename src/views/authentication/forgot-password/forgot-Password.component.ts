import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi, ForgotPasswordPasswordModel} from '@/sdk';
import {Component} from 'vue-property-decorator';

@Component
export default class ForgotPasswordComponent extends VueWrapper {
    public forgotPasswordData = new ForgotPasswordPasswordModel();

    public ForgotPassword() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .forgotPassword(this.forgotPasswordData)
            .subscribe(res => {
                this.AlertSrv.show('success', 'An email has sent to your email address to reset your password.');
            })
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
                this.forgotPasswordData = new ForgotPasswordPasswordModel();
            });
    }
}
