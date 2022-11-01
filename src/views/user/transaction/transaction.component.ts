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
    public TransactionsData =new BehaviorSubject<any>([]);
    public IsLoginCoinBase = true;
    public defaultsSort = true;
    public FetchTransaction = {
        status: false,
        loading: false,
    }

          public TransactionsHeaders = [
          {
            text: 'Symbol',
            align: 'start',
            value: 'amount.currency',
           width:'110'
          },
          { text: 'Book Value', value: 'native_amount.amount',width:'120' },
          { text: 'Book Price', value: 'book_price',width:'120' },
          { text: 'Market Value', value: 'market_value',width:'130' },
          { text: 'Market Price', value: 'market_price',width:'130' },
          { text: '# of Shares', value: 'amount.amount',width:'120' },
          { text: 'Currency', value: 'native_amount.currency',width:'110' },
          { text: 'Transaction Date', value: 'created_at',width:'180' },
          { text: 'Gains/Losses', value: 'gains',width:'130' },
          { text: 'Action', value: 'action',width:'110' },
        ];

    mounted(){
        this.getTransactions();
        
    }

    getTransactions(){
        this.LoaderSrv.showFullScreenLoader("Loading...");
        this.TransactionApi.TransactionsList()
            .subscribe(
                res => {
                    console.log("transactions List",res);
                    this.TransactionsData.next(res);
                    this.IsLoginCoinBase=true;
                    
                },
                err => {
                    this.IsLoginCoinBase=false;
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
                
            });
    }


    getColor(val:any){
        if(val > 0) {
            return 'rgba(0, 210, 91, 0.3)'
        }else{
            return 'rgba(252, 66, 74, 0.3)'
        }  
    }

    isNumber(val:any){
        if(isNaN(val)) return false;
        return true;
    }

    LoadTransactions(){
        this.FetchTransaction.loading = true;
        this.TransactionApi.FetchTransaction()
        .subscribe(
            res => {
                this.FetchTransaction.status = true;
                this.FetchTransaction.loading = false;
                this.getTransactions();
                console.log(res);
                },
                err => {
                   console.log(err);
                   this.FetchTransaction.loading = false;
                }
            );
    }

    getDateTime(val:any){
        const date = new Date(val);

        return date.toLocaleDateString() +' '+ date.toLocaleTimeString(navigator.language, {hour: '2-digit',minute:'2-digit'});
    }

    
      }

