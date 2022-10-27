import VueWrapper from '@/components/core/Vue/vue.wrapper';
import Component from 'vue-class-component';

@Component
export default class ManagePortfolioComponent extends VueWrapper {

    public CoinBaseAuthLink = 'https://www.coinbase.com/oauth/authorize?client_id=12fd638644c4eb81e698c802e836c0e3bb85fbd3d313ab73de8a9d7fce2c2f25&redirect_uri=https%3A%2F%2Fclonebert.herokuapp.com%2Fcoinbase%2Fcallback&response_type=code&scope=wallet%3Auser%3Aread+wallet%3Aaccounts%3Aread+wallet%3Atransactions%3Aread';
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
