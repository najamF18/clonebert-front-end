import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {TransactionsApi, TransactionService} from '@/sdk';
import {ApiResponseModel} from '@/sdk/models/common/api-response.model';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
        DrawerComponent
    }
})
export default class DashboardComponent extends VueWrapper {
    public TransactionSrv = new TransactionService();
    public transactionApi = new TransactionsApi();
    public gainsHoldings = 0;
    public gainsTransactions = 0;
    public holdings = [];
    mounted() {
        this.TransactionSrv.getHoldingsData();
        this.TransactionSrv.Holdings.subscribe(res => {
            this.holdings = res;
            console.log('Holdings', this.holdings);
        });
        this.getGainsHoldings();
        this.getGainsTransactions();
    }

    public getGainsHoldings() {
        this.LoaderSrv.showFullScreenLoader();
        this.transactionApi
            .GainsHoldings()
            .subscribe(
                res => {
                    const response = res as any;
                    this.gainsHoldings = response.gains;
                },
                err => {}
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
    public getGainsTransactions() {
        this.LoaderSrv.showFullScreenLoader();
        this.transactionApi
            .GainsTransactions()
            .subscribe(
                res => {
                    const response = res as any;
                    this.gainsTransactions = response.gains;
                },
                err => {}
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}
