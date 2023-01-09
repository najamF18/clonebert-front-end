import { UserProfileModel } from "./user-profile.model";

export class FollowerModel {
    public followed_by: Array<UserProfileModel> | null = null;

    constructor(data?: Partial<FollowerModel>) {
        Object.assign(this, data);
    }
}

export class FollowingModel {
    public follows: Array<UserProfileModel> | null = null;

    constructor(data?: Partial<FollowerModel>) {
        Object.assign(this, data);
    }
}
