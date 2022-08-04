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
                res => {
                    this.AlertSrv.show('success', 'Signed up succssfully!');
                    this.signupData = new SignupModel();
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
