import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi, HoldingModel, LoaderService, SocialMediaService, UserProfileModel} from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import { TransactionModel } from '@/sdk/models/user/transaction.model';
import { UsersService } from '@/sdk/services/users/users.service';
import Component from 'vue-class-component';
@Component
export default class UserDashboardComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public user = new UserProfileModel();
    public tabs = null;
    public defaultsSort = true;
    public transactionData = new Array<TransactionModel>();
    public holdingData = new Array<HoldingModel>();
    public isError = false;
    // public UserSrv = new UsersService();

    public TransactionsHeaders = [
        {text: 'Transaction Date', value: 'created_at', width: '180'},
        {text: 'Action', value: 'action', width: '110'},
        {text: 'Symbol', align: 'start', value: 'amount.currency', width: '110'},
        {text: 'Currency', value: 'native_amount.currency', width: '110'},
        {text: '# of Shares', value: 'amount.amount', width: '120'},
        {text: 'Book Price', value: 'book_price', width: '120'},
        {text: 'Book Value', value: 'book_value', width: '120'},
        {text: 'Market Price', value: 'market_price', width: '130'},
        {text: 'Market Value', value: 'market_value', width: '130'},
        {text: 'Position', value: 'position', width: '110'},
        {text: 'Gains/Losses', value: 'gains', width: '130'}
    ];

    public HoldingsHeaders = [
        {
            text: 'Symbol',
            align: 'start',
            value: 'name',
            width: '110'
        },
        {text: 'Currency', value: 'currency', width: '110'},
        {text: '# Of Shares', value: 'num_shares', width: '130'},
        {text: 'Book Price', value: 'book_price', width: '120'},
        {text: 'Book Value', value: 'book_value', width: '120'},
        {text: 'Market Price', value: 'market_price', width: '130'},
        {text: 'Market Value', value: 'market_value', width: '130'},
        {text: 'Position', value: 'position', width: '110'},
        {text: 'Gains/Loss', value: 'gains', width: '120'}
    ];

    mounted() {
        if (this.$route.params.id) {
            this.LoaderSrv.showFullScreenLoader("Loading...");
            new SocialMediaApi().getUserDashboard(this.$route.params.id).subscribe(res => {
                console.log(res);
                this.isError = false;
                this.transactionData = res.transactions;
                this.holdingData = res.holdings;
            },err =>{
                this.isError= true;
            }).add(() => this.LoaderSrv.hideFullScreenLoader());
            new SocialMediaApi().getUserById(this.$route.params.id).subscribe(res => {
                console.log(res);
                this.user =res;
            });
        }
    }

    // get User() {
    //     this.user = this.socialMediaSrv.allUsers.find(item => item.id == this.$route.params.id)!;
    //     return this.user;
    // }

    getDateTime(val: any) {
        const date = new Date(val);

        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});
    }

    getColor(val: any) {
        if (val > 0) {
            return 'rgba(0, 210, 91, 0.3)';
        } else {
            return 'rgba(252, 66, 74, 0.3)';
        }
    }

    isNumber(val: any) {
        if (isNaN(val)) return false;
        return true;
    }
}