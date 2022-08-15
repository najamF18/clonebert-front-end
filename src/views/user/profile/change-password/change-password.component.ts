import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi} from '@/sdk';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import {SettingsChangePasswordModel} from '@/sdk/models/authentication/settings-change-password.model';
import Component from 'vue-class-component';

@Component
export default class ChangePasswordComponent extends VueWrapper {
    changePasswordData = new SettingsChangePasswordModel();
    confirmPassword: string = '';

    public changePassword() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .changePassword(this.changePasswordData)
            .subscribe(
                res => {
                    if (res.status) {
                        this.AlertSrv.show('success', 'Password changed successfully!');
                        this.changePasswordData = new SettingsChangePasswordModel();
                        this.confirmPassword = '';
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
