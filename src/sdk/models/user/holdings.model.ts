export class HoldingModel {
    public name: string | null = null;
    public book_price: string | null = null;
    public market_price: string | null = null;
    public position: string | null = null;
    public market_value: string | null = null;
    public gains: string | null = null;
    public num_shares: number | null = null;
    public currency: string | null = null;
    public book_value: number| null = null;

    constructor(data?: Partial<HoldingModel>) {
        Object.assign(this, data);
    }
}
