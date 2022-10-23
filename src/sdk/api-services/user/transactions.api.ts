import {ServiceClass} from '@/decorators';
import {BaseApi} from '../base.api';
import { HoldingModel } from './../../models/user/holdings.model';

@ServiceClass()
export class TransactionsApi extends BaseApi {
 
    public HoldingsList() {
        return this.GET_Request<any>(`${this.ApiUrl}/coinbase/list-holdings/`);
    }
    public TransactionsList() {
        return this.GET_Request<Array<any>>(`${this.ApiUrl}/coinbase/list-transactions/`);
    }
   
}
