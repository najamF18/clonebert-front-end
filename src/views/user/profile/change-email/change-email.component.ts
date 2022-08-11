import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi} from '@/sdk';
import {ChangeEmailModel} from '@/sdk/models/authentication/change-email.model';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import Component from 'vue-class-component';

@Component
export default class ChangeEmailComponent extends VueWrapper {
    changeEmailData = new ChangeEmailModel();
    changeEmailConfirm: string = '';

    public changeEmail() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .changeEmail(this.changeEmailData)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'Email changed successfully!');
                    this.changeEmailData = new ChangeEmailModel();
                    this.UserSession.clear();
                    this.$router.push({name: 'Login'});
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
