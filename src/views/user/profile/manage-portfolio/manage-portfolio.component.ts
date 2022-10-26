import VueWrapper from '@/components/core/Vue/vue.wrapper';
import Component from 'vue-class-component';

@Component
export default class ManagePortfolioComponent extends VueWrapper {

    public privacySwitch:boolean = true
    // public mounted() {
    //     this.currentEmail = this.UserSession.Session?.email!;
    //     console.log(this.UserSession.Session?.email);
    // }

    // public changeEmail() {
    //     this.LoaderSrv.showFullScreenLoader();
    //     new AccountsApi()
    //         .changeEmail(this.changeEmailData)
    //         .subscribe(
    //             res => {
    //                 this.AlertSrv.show('success', 'Email changed successfully!');
    //                 this.changeEmailData = new ChangeEmailModel();
    //                 this.UserSession.clear();
    //                 this.$router.push({name: 'Login'});
    //             },
    //             err => {
    //                 this.AlertSrv.show('error', err.message);
    //             }
    //         )
    //         .add(() => {
    //             this.LoaderSrv.hideFullScreenLoader();
    //         });
    // }
}
