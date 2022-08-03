import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {AccountsApi, SignupModel} from '@/sdk';
import {AlertService, LoaderService} from '@/sdk/services';
import {CoreService} from '@/services/core.service';
import BaseFormComponent from '@/components/vuetify/Form/base-form';
import {SignupService} from '@/sdk/services/signup/signup.service';
import {PageHitsType} from '@/globals';

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
                    this.AlertSrv.show('success', res.message);
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
