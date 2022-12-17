export class UserProfileModel {
    public id:string| null = null;
    public user: string | null = null;
    public profile_pic: string | null = null;
    public location: string | null = null;

    constructor(data?: Partial<UserProfileModel>) {
        Object.assign(this, data);
    }
}
