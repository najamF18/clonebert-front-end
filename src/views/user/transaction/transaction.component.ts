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
    public HoldingsData =new BehaviorSubject<any>([]);;
    public TransactionsData =new BehaviorSubject<any>([]);;
    public IsLoginCoinBase = false;
    public HoldingsHeaders = [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
            width:'110'
          },
          { text: 'Book Price', value: 'book_price',width:'110' },
          { text: 'Book Value', value: 'book_value',width:'110' },
          { text: 'Market Price', value: 'market_price',width:'120'},
          { text: 'Market Value', value: 'market_value',width:'130' },
          { text: 'Gains/Loss', value: 'gains',width:'110' },
          { text: 'Shares', value: 'num_shares' },
          { text: 'Currency', value: 'currency',width:'110' },
          { text: 'Position', value: 'position',width:'110' },
        ];

          public TransactionsHeaders = [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'amount.currency',
           width:'110'
          },
          { text: 'Price', value: 'native_amount.amount',width:'110' },
          { text: 'Market Price', value: 'market_price',width:'110' },
          { text: 'Book Price', value: 'book_price',width:'110' },
          { text: 'Transaction Date', value: 'created_at',width:'130' },
          { text: 'Position', value: 'position',width:'110' },
          { text: 'Gains/Losses', value: 'gains',width:'110' },
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

    getHoldings(){
        this.TransactionApi.HoldingsList()
            .subscribe(
            res => {
                    console.log("Holding List",res);
                    this.HoldingsData.next(res);

                     this.IsLoginCoinBase=true;
                },
                err => {
                    this.IsLoginCoinBase=false;
                }
            );
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

    
      }

