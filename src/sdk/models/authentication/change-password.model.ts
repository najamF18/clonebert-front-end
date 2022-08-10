export class ChangePasswordModel {
    public password: string | null = null;
    public token: string | null = null;

    constructor(data?: Partial<ChangePasswordModel>) {
        Object.assign(this, data);
    }
}
