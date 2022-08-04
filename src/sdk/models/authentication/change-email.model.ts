export class ChangeEmailModel {
    public new_email: string | null = null;

    constructor(data?: Partial<ChangeEmailModel>) {
        Object.assign(this, data);
    }
}
