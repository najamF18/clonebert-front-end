import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi} from '@/sdk';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import Component from 'vue-class-component';

@Component
export default class ChangePasswordComponent extends VueWrapper {
    changePasswordData = new ChangePasswordModel();

    public changePassword() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .changePassword(this.changePasswordData)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'Password changed successfully!');
                    this.changePasswordData = new ChangePasswordModel();
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
