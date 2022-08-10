export class ForgotPasswordPasswordModel {
    public email: string | null = null;

    constructor(data?: Partial<ForgotPasswordPasswordModel>) {
        Object.assign(this, data);
    }
}
