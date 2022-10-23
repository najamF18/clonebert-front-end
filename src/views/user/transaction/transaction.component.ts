import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { TransactionsApi } from '@/sdk';
import { TransactionModel } from '@/sdk/models/user/transaction.model';
import DrawerComponent from '@/views/drawer/drawer.component';
import { BehaviorSubject } from 'rxjs';
import {Component} from 'vue-property-decorator';
import { HoldingModel } from './../../../sdk/models/user/holdings.model';

@Component({
    components: {
        DrawerComponent
    }
})
export default class TransactionComponent extends VueWrapper {
    public TransactionApi = new TransactionsApi();
    public HoldingsData =new BehaviorSubject<Array<HoldingModel>>([]);;
    public TransactionsData =new BehaviorSubject<Array<TransactionModel>>([]);;
    public HoldingsHeaders = [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
            width:'3em'
          },
          { text: 'Book Price', value: 'book_price' },
          { text: 'Book Value', value: 'book_value' },
          { text: 'Market Price', value: 'market_price' },
          { text: 'Market Value', value: 'market_value' },
          { text: 'Gains', value: 'gains' },
          { text: 'Shares', value: 'num_shares' },
          { text: 'Currency', value: 'currency' },
          { text: 'Position', value: 'position' },
        ];

          public TransactionsHeaders = [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'amount.currency',
            width:'3em'
          },
          { text: 'Price', value: 'native_amount.amount' },
          { text: 'Market Price', value: 'market_price' },
          { text: 'Book Price', value: 'book_price' },
          { text: 'Transaction Date', value: 'created_at' },
          { text: 'Position', value: 'position' },
          { text: 'Gains/Losses', value: 'gains' },
        ];

    mounted(){
        this.LoaderSrv.showFullScreenLoader("Loading...");
        this.getTransactions();
        this.getHoldings();
        
        
    }


    getTransactions(){
        this.TransactionApi.TransactionsList()
            .subscribe(
                res => {
                    console.log("transactions List",res);
                    this.TransactionsData.next(res);
                    
                },
                err => {
                    this.AlertSrv.show('error', err.message);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }

    getHoldings(){
        this.TransactionApi.HoldingsList()
            .subscribe(
            res => {
                    console.log("Holding List",res);
                    this.HoldingsData.next(res);

                    console.log("holding",this.HoldingsData.value);
                },
                err => {
                    this.AlertSrv.show('error', err.message);
                }
            );
    }

    
      }

