import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi} from '@/sdk';
import Component from 'vue-class-component';

@Component
export default class DisableAccountComponent extends VueWrapper {
    public disableAccount() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .disableAccount()
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'Account disabled successfully!');
                    this.UserSession.clear();
                    this.$router.push({name: 'Login'});
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
