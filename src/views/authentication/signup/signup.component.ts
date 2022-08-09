import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {AccountsApi, SignupModel} from '@/sdk';

@Component
export default class SignupComponent extends VueWrapper {
    // Properties
    public signupData = new SignupModel();

    public signup() {
        this.LoaderSrv.showFullScreenLoader();
        new AccountsApi()
            .signup(this.signupData)
            .subscribe(
                ({status, data, message}) => {
                    if (status) {
                        this.AlertSrv.show('success', 'Sign up Successful');
                        this.signupData = new SignupModel();
                    }
                },
                err => {
                    if (err.email) {
                        this.AlertSrv.show('error', err.email);
                    }
                    if (err.username) {
                        this.AlertSrv.show('error', err.username);
                    }
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}
