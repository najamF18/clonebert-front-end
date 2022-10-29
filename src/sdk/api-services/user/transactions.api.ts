import {ServiceClass} from '@/decorators';
import { UserSession } from '@/sdk/core';
import {BaseApi} from '../base.api';
import { HoldingModel } from './../../models/user/holdings.model';

@ServiceClass()
export class TransactionsApi extends BaseApi {
 
    public HoldingsList() {
        const c  = new UserSession()._session.value;
        return this.GET_Request<any>(`${this.ApiUrl}/coinbase/list-holdings?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }
    public TransactionsList() {
        const c  = new UserSession()._session.value;
        return this.GET_Request<Array<any>>(`${this.ApiUrl}/coinbase/list-transactions?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }
    public FetchTransaction() {
        return this.GET_Request<string>(`${this.ApiUrl}/coinbase/fetch-transactions/`);
    }
   
}
