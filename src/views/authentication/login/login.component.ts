import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {LoaderService, LoginModel, ResetPasswordModel} from '@/sdk';
import {AccountsApi} from '@/sdk/api-services';
import {ApiAuth, UserSession} from '@/sdk/core';
import {AlertService} from '@/sdk';
import BaseFormComponent from '@/components/vuetify/Form/base-form';
import ForgotPasswordComponent from '../forgot-password/forgot-Password.component';

@Component({
    components: {
        ForgotPasswordComponent
    }
})
export default class LoginComponent extends VueWrapper {
    public login = new LoginModel();
    public resetPassword = new ResetPasswordModel();
    $refs!: {
        baseform: BaseFormComponent;
    };

    public loginError: string = '';
    public show1: boolean = false;

    private RelayState: string | null = null;
    private SAMLRequest: string | null = null;

    private support_login: string | null = null;

    public created() {
        // console.log(this.$route.query);
        this.RelayState = this.$route.query['RelayState'] as string;
        this.SAMLRequest = this.$route.query['SAMLRequest'] as string;

        this.support_login = this.$route.query['support_login'] as string;

        console.log(this.$route.query);
    }

    private afterLogin() {
        this.CoreSrv.dialog.manageUser = false;
        this.emptyForm();
        this.login = new LoginModel();
        setTimeout(() => {
            window.location.href = '/user/dashboard';
        }, 500);
    }

    // public Login() {
    //     new LoaderService().showFullScreenLoader('Logging in...');

    //     new AccountsApi()
    //         .Login(this.login)
    //         .subscribe(
    //             ({Data, Message, Status}) => {
    //                 if (Data && Status) {
    //                     new UserSession()._session.next(Data);
    //                     new UserSession().save();

    //                     if (this.support_login === 'true') {
    //                         this.LoaderSrv.showFullScreenLoader();

    //                         new AccountsApi()
    //                             .RemoteLogin()
    //                             .subscribe(
    //                                 remoteLoginRes => {
    //                                     if (remoteLoginRes.Status && remoteLoginRes.Data) {
    //                                         window.location.href = remoteLoginRes.Data;
    //                                     } else {
    //                                         this.AlertSrv.show('error', 'Unable to remotely login user to support.mhparks.com. Please try agian later.').then(
    //                                             () => {
    //                                                 this.afterLogin();
    //                                             }
    //                                         );
    //                                     }
    //                                 },
    //                                 err => {
    //                                     this.AlertSrv.show('error', 'Unable to remotely login user to support.mhparks.com. Please try agian later.').then(
    //                                         () => {
    //                                             this.afterLogin();
    //                                         }
    //                                     );
    //                                 }
    //                             )
    //                             .add(() => {
    //                                 this.LoaderSrv.hideFullScreenLoader();
    //                             });
    //                     } else {
    //                         // this.$router.push('/user/dashboard');
    //                         window.location.href = '/user/dashboard';
    //                     }
    //                 } else {
    //                     this.loginError = Message!;
    //                 }
    //             },
    //             error => {
    //                 this.loginError = error.Message;
    //                 if (error.StatusCode === 400) {
    //                     this.$router.push({name: 'Cancelled Membership', query: {email: this.login.Email}});
    //                 }
    //             }
    //         )
    //         .add(() => {
    //             new LoaderService().hideFullScreenLoader();
    //         });
    // }

    // public ResetPassword() {
    //     new LoaderService().showFullScreenLoader();

    //     new AccountsApi()
    //         .ResetPassword(this.resetPassword)
    //         .subscribe(({Data, Status, Message}) => {
    //             if (Data && Status) {
    //                 this.CoreSrv.dialog.loginsignupPage = false;
    //                 new AlertService().show('success', `${Message}!` ?? '');
    //                 this.resetPassword = new ResetPasswordModel();
    //                 this.emptyForm();
    //             } else {
    //                 new AlertService().show('error', Message ?? '');
    //             }
    //         })
    //         .add(() => {
    //             new LoaderService().hideFullScreenLoader();
    //         });
    // }

    get notShowable() {
        return this.$vuetify.breakpoint.name == 'xs';
    }
    public emptyForm() {
        this.$nextTick(() => {
            if (this.$refs?.baseform) {
                this.$refs.baseform.reset();
            }
        });
    }

    public Cancel() {
        this.CoreSrv.dialog.loginsignupPage = false;
        // this.emptyForm();
        // this.login = new LoginModel();
        this.loginError = '';
    }

    NavigateToDashboard() {}
}
