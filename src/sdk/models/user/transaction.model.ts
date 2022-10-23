export class TransactionModel {
    public book_price: string | null = null;
    public market_price: string | null = null;
    public position: string | null = null;
    public market_value: string | null = null;
    public gains: string | null = null;
    public currency: string | null = null;
    public id: string|null = null;
    public created_at: string|null = null;
    public description: string|null = null;
    public hide_native_amount: boolean|null = null;
    public instant_exchange: boolean|null = null;
    public off_chain_status: string|null = null;
    public resource: string|null = null;
    public resource_path: string|null = null;
    public status:string|null = null;
    public type: string|null = null;
    public updated_at:string|null = null;
    public amount:AmountModel|null = null;
    public details:DetailsModel|null = null;
    public coinbase_user:CoinBaseModel|null = null;
    public native_amount:NativeAmountModel|null = null;
    public network:NetworkModel|null = null;
    public trade:TradeModel|null = null;
    public sell:SellModel|null = null;

    constructor(data?: Partial<TransactionModel>) {
        Object.assign(this, data);
    }
}









export class AmountModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<AmountModel>) {
        Object.assign(this, data);
    }
    }

export class DetailsModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<DetailsModel>) {
        Object.assign(this, data);
    }
    }
    export class CoinBaseModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<CoinBaseModel>) {
        Object.assign(this, data);
    }
    }

       export class NativeAmountModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<NativeAmountModel>) {
        Object.assign(this, data);
    }
    }
         export class NetworkModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<NetworkModel>) {
        Object.assign(this, data);
    }
    }
         export class TradeModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<TradeModel>) {
        Object.assign(this, data);
    }
    }
         export class SellModel{
        public id:number| null = null;
        public amount:number|null = null;
        public currency:string| null = null;

        constructor(data?: Partial<SellModel>) {
        Object.assign(this, data);
    }
    }