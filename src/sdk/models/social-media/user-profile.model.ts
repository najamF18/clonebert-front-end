export class UserProfileModel {
    public id:string| null = null;
    public user: UserModel | null = null;
    public profile_pic: string | null = null;
    public location: string | null = null;

    constructor(data?: Partial<UserProfileModel>) {
        Object.assign(this, data);
    }
}

export class UserModel{

    public id:string| null = null;
    public email: string | null = null;
    public username: string | null = null;

    constructor(data?: Partial<UserModel>) {
        Object.assign(this, data);
    }
}
