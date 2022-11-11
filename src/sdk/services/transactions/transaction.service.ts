import {ServiceClass} from '@/decorators';
import { TransactionsApi } from '@/sdk/api-services';
import {BehaviorSubject} from 'rxjs';
import {DataOptions} from 'vuetify';
import {LoaderService} from '../shared/loader.service';

@ServiceClass()
export class TransactionService {
    public LoadingSrv = new LoaderService();
    public Holdings = new BehaviorSubject<any>([]);
    public Transactions = new BehaviorSubject<any>([]);
    public PieCharrData = new BehaviorSubject<any>([]);
    public TransactionApi = new TransactionsApi();

    getHoldingsData() {
        this.LoadingSrv.showFullScreenLoader("Loading...");
        this.TransactionApi.HoldingsList()
            .subscribe(
                res => {
                    console.log(res);
                    this.Holdings.next(res);
                },
                err => {
                    console.log(err);
                }
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    } 

     getPieChartData() {
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.TransactionApi.PieChart()
            .subscribe(
                res => {
                    console.log(res);
                    this.PieCharrData.next(res);
                },
                err => {
                    console.log(err);
                }
            )
            .add(() => {
                   this.LoadingSrv.hideFullScreenLoader();
            });
    }

    getTransactionsData(){
        this.LoadingSrv.showFullScreenLoader('Loading...');
        this.TransactionApi.TransactionsList()
            .subscribe(
                res => {
                    console.log(res);
                    this.Transactions.next(res);
                },
                err => {
                    console.log(err);
                }
            )
            .add(() => {
                this.LoadingSrv.hideFullScreenLoader();
            });
    }
}
