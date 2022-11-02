import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { TransactionsApi } from '@/sdk';
import { TransactionModel } from '@/sdk/models/user/transaction.model';
import DrawerComponent from '@/views/drawer/drawer.component';
import { BehaviorSubject } from 'rxjs';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
        DrawerComponent
    }
})
export default class HoldingComponent extends VueWrapper {
    public TransactionApi = new TransactionsApi();
    public HoldingsData =new BehaviorSubject<any>([]);;
    public IsLoginCoinBase = true;
    public FetchTransaction = {
        status: false,
        loading: false,
    }
    public HoldingsHeaders = [
          {
            text: 'Symbol',
            align: 'start',
            value: 'name',
            width:'110'
          },
          { text: 'Currency', value: 'currency',width:'110' },
          { text: '# Of Shares', value: 'num_shares',width:'130' },
          { text: 'Book Price', value: 'book_price',width:'120' },
          { text: 'Book Value', value: 'book_value',width:'120' },
          { text: 'Market Price', value: 'market_price',width:'130'},
          { text: 'Market Value', value: 'market_value',width:'130' },
          { text: 'Position', value: 'position',width:'110' },
          { text: 'Gains/Loss', value: 'gains',width:'120' },
        ];

          

    mounted(){
        this.getHoldings();
        
        
    }

    getHoldings(){
        this.LoaderSrv.showFullScreenLoader("Loading...");
        this.TransactionApi.HoldingsList()
            .subscribe(
            res => {
                    console.log("Holding List",res);
                    this.HoldingsData.next(res);
                     this.IsLoginCoinBase=true;
                     this.LoaderSrv.hideFullScreenLoader();
                },
                err => {
                    this.IsLoginCoinBase=false;
                    this.LoaderSrv.hideFullScreenLoader();
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

    LoadTransactions(){
        this.FetchTransaction.loading = true;
        this.TransactionApi.FetchTransaction()
        .subscribe(
            res => {
                this.FetchTransaction.status = true;
                this.FetchTransaction.loading = false;
                this.getHoldings();
                console.log(res);
                },
                err => {
                   console.log(err);
                   this.FetchTransaction.loading = false;
                }
            );
    }

    
      }

