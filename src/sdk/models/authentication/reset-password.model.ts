export class ResetPasswordModel {
    public email: string | null = null;

    constructor(data?: Partial<ResetPasswordModel>) {
        Object.assign(this, data);
    }
}
