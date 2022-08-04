export class ChangePasswordModel {
    public old_password: string | null = null;
    public new_password: string | null = null;

    constructor(data?: Partial<ChangePasswordModel>) {
        Object.assign(this, data);
    }
}
