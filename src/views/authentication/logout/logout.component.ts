import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { AccountsApi, ApiAuth } from '@/sdk';
import { Component } from 'vue-property-decorator';

@Component
export default class LogoutComponent extends VueWrapper {
    // created() {
    //     new AccountsApi()
    //         .Logout(new ApiAuth().SessionValue?.SessionLogId!)
    //         .subscribe(
    //             res => {
    //                 new ApiAuth().clear();
    //                 this.GotoLogin();
    //             },
    //             err => {
    //                 new ApiAuth().clear();
    //                 this.GotoLogin();
    //             }
    //         );
    // }
    // GotoLogin() {
    //     this.$router.push({ name: 'Login' });
    // }
}
