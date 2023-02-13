import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {AccountsApi, SignupModel} from '@/sdk';

@Component
export default class SignupComponent extends VueWrapper {
    // Properties
    public signupData = new SignupModel();
    public error: boolean = false;
    public errorMessage: string = '';

    public accountAPi = new AccountsApi();

    public $refs!: {
        baseForm: any;
    };

    public signup() {
        this.LoaderSrv.showFullScreenLoader();
        this.accountAPi
            .signup(this.signupData)
            .subscribe(
                ({status, data, message}) => {
                    if (status) {
                        this.AlertSrv.show('success', 'Sign up Successful. A verification email has sent to your email address');
                        this.signupData = new SignupModel();
                        this.$refs.baseForm.reset();
                        this.$router.push({name:'Login',params:{msg:'Please verify your email address'}})
                    }
                },
                err => {
                    if (err.email) {
                        this.AlertSrv.show('error', err.email);
                    }
                    if (err.username) {
                        this.AlertSrv.show('error', err.username);
                    }
                    if (err.message) {
                        this.AlertSrv.show('error', err.message);
                    }
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }

    public SearchInput(username: string) {
        const name = {username};
        this.signupData.username = username;
        this.accountAPi.validateUserName(name).subscribe(
            res => {
                this.error = false;
            },
            err => {
                this.error = true;
                this.errorMessage = err.message;
            }
        );
        // if (!this.UsersSrv.Filter.Query || this.UsersSrv.Filter.Query?.length >= 3) {
        //     this.UsersSrv.Filter.PageNo = 1;
        //     this.UsersSrv.getAll();
        // }
    }
}
