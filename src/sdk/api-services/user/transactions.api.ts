import {ServiceClass} from '@/decorators';
import {UserSession} from '@/sdk/core';
import {BaseApi} from '../base.api';
import {HoldingModel} from './../../models/user/holdings.model';

@ServiceClass()
export class TransactionsApi extends BaseApi {
    public HoldingsList() {
        const c = new UserSession()._session.value;
        return this.GET_Request<any>(`${this.ApiUrl}/coinbase/list-holdings?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }
    public GainsHoldings() {
        const c = new UserSession()._session.value;
        return this.GET_Request<any>(`${this.ApiUrl}/coinbase/gains-holdings?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }
    public TransactionsList() {
        const c = new UserSession()._session.value;
        return this.GET_Request<Array<any>>(`${this.ApiUrl}/coinbase/list-transactions?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }
    public GainsTransactions() {
        const c = new UserSession()._session.value;
        return this.GET_Request<Array<any>>(`${this.ApiUrl}/coinbase/gains-transactions?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }

    public PieChart() {
        const c = new UserSession()._session.value;
        return this.GET_Request<Array<any>>(`${this.ApiUrl}/coinbase/pie-chart-data?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }

    public FetchTransaction() {
        const c = new UserSession()._session.value;
        return this.GET_Request<string>(`${this.ApiUrl}/coinbase/fetch-transactions?api_key=${c?.api_key}&api_secret=${c?.api_secret}`);
    }

    public VerifyApi(api_key: any, api_secret: any) {
        console.log('inside verify', api_key, api_secret);
        return this.GET_Request<string>(`${this.ApiUrl}/coinbase/fetch-transactions?api_key=${api_key}&api_secret=${api_secret}`);
    }
}
