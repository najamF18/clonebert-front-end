export class SessionModel {
    // public Email: string | null = null;
    public email: string | null = null;
    public uid: number | null = null;
    public username: string | null = null;
    public token: string | null = null;
    public api_key: string|null = null;
    public api_secret: string|null = null;
    public profile_pic: string | null = null;
    public location: string | null = null;
    // public DisclaimerAccepted: boolean | string | null = null;
    // public UserId: string | null = null;
    // public UserName: string | null = null;
    // public SessionLogId: string | null = null;

    constructor(data?: Partial<SessionModel>) {
        Object.assign(this, data);
    }
}
