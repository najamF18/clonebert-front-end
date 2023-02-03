import NotificationBox from '@/components/core/notificationBox/notification-box.component';
import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AccountsApi, HoldingModel, LoaderService, SocialMediaService, UserProfileModel, UserSession, ViewUserModel} from '@/sdk';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import { TransactionModel } from '@/sdk/models/user/transaction.model';
import { UsersService } from '@/sdk/services/users/users.service';
import Component from 'vue-class-component';
@Component({
    components: {
        NotificationBox
    }
})
export default class UserDashboardComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public user = new ViewUserModel();
    public tabs = null;
    public defaultsSort = true;
    public transactionData = new Array<TransactionModel>();
    public holdingData = new Array<HoldingModel>();
    public follow_list = [];
    public followed_by_list = [];
    public pieChartData = [];
    public gains_holdings = 0;
    public gains_transactions = 0;
    public pie_data = [];
    public isError = false;
    public openLink = {
        Dashboard: true,
        feeds: false,
        holdings: false,
        transaction: false,
        following: false,
        follower: false
    };
    public UserSrv = new UsersService();

    public Links = [
        {
            Icon: 'speedometer',
            Title: 'Dashboard',
            Color: 'primarypurple',
            Method: this.openDashboard,
            IsOpen: this.openLink.Dashboard
        },
        {
            Icon: 'playlist-play',
            Title: 'Feed',
            Color: 'orange',
            Method: this.openFeeds,
            IsOpen: this.openLink.feeds
        },
        {
            Icon: 'table-large',
            Title: 'Transactions',
            Color: 'red',
            Method: this.openTransaction,
            IsOpen: this.openLink.transaction
        },
        {
            Icon: 'table-large',
            Title: 'Holdings',
            Color: 'green',
            Method: this.openHoldings,
            IsOpen: this.openLink.holdings
        }
    ];

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
        this.UserSrv.getUserProfile();
        if (this.$route.params.id) {
            this.getUserDashboard();
        }
    }

    // get User() {
    //     this.user = this.socialMediaSrv.allUsers.find(item => item.id == this.$route.params.id)!;
    //     return this.user;
    // }

    getUserDashboard() {
        this.socialMediaSrv.getFollowing();
        this.LoaderSrv.showFullScreenLoader('Loading...');
        new SocialMediaApi()
            .getUserDashboard(this.$route.params.id)
            .subscribe(
                res => {
                    console.log(res);
                    this.isError = false;
                    this.transactionData = res.transactions;
                    this.holdingData = res.holdings;
                    this.gains_holdings = res.gains_holdings;
                    this.gains_transactions = res.gains_transactions;
                    this.pieChartData = res.pie_data;
                },
                err => {
                    this.isError = true;
                }
            )
            .add(() => this.LoaderSrv.hideFullScreenLoader());
        new SocialMediaApi().getUserById(this.$route.params.id).subscribe(res => {
            console.log(res);
            this.user = res;
        });
        this.socialMediaSrv.getUserFeeds(this.$route.params.id);
        this.getViewUserFollowList();
    }

    getViewUserFollowList() {
        new SocialMediaApi().getViewUserFollowing(this.$route.params.id).subscribe(res => {
            console.log(res);
            this.follow_list = res.follows;
        });
        new SocialMediaApi().getViewUserFollower(this.$route.params.id).subscribe(res => {
            console.log(res);
            this.followed_by_list = res.followed_by;
        });
    }

    getDateTime(val: any) {
        const date = new Date(val);

        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});
    }

    formatVal(val: any) {
        return Math.abs(val) < 0.01 ? val.toPrecision(2) : val.toFixed(2);
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
    getVal(val: any) {
        return val.toString().replace('-', '');
    }

    get num() {
        return this.$vuetify.breakpoint.width == 375;
    }

    openDashboard() {
        this.openLink = {
            Dashboard: true,
            feeds: false,
            transaction: false,
            holdings: false,
            follower: false,
            following: false
        };
    }
    openFeeds() {
        this.openLink = {
            Dashboard: false,
            feeds: true,
            transaction: false,
            holdings: false,
            follower: false,
            following: false
        };
    }
    openTransaction() {
        this.openLink = {
            Dashboard: false,
            feeds: false,
            transaction: true,
            holdings: false,
            follower: false,
            following: false
        };
    }
    openHoldings() {
        this.openLink = {
            Dashboard: false,
            feeds: false,
            transaction: false,
            holdings: true,
            follower: false,
            following: false
        };
    }
    openFollowers() {
        this.openLink = {
            Dashboard: false,
            feeds: false,
            transaction: false,
            holdings: false,
            follower: true,
            following: false
        };
    }
    openFollowing() {
        this.openLink = {
            Dashboard: false,
            feeds: false,
            transaction: false,
            holdings: false,
            follower: false,
            following: true
        };
    }

    FollowUser(id: string) {
        new SocialMediaApi().followUser(id).subscribe(res => {
            console.log('follow', res);
            this.socialMediaSrv.getFollowers();
            this.socialMediaSrv.getFollowing();
            this.getUserDashboard();
        });
    }

    BlockUser(id: any) {
        this.LoaderSrv.showFullScreenLoader('Loading...');
        new SocialMediaApi()
            .blockUser(id)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'User Blocked Successfully');
                    this.socialMediaSrv.getBlockUser();
                    this.getUserDashboard();
                },
                err => {
                    this.AlertSrv.show('error', err.message);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }

    ViewUser(id: string) {
        window.location.replace(`/user-profile/${id}`);
    }

    public logout() {
        this.LoaderSrv.showFullScreenLoader('Logging out...');
        new AccountsApi().logout().subscribe(
            res => {
                new UserSession().clear();
                this.$router.push({name: 'Login'});
                this.LoaderSrv.hideFullScreenLoader();
            },
            err => {
                this.AlertSrv.show('error', err.message);
                this.LoaderSrv.hideFullScreenLoader();
            }
        );
    }
}
