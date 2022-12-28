import { UserProfileModel } from "./user-profile.model";

export class PostModel {
           public id: string | null = null;
           public post_comments: Array<CommentModel> | null = null;
           public post_likes: Array<LikeModel> | null = null;
           public post_shares: Array<ShareModel> | null = null;
           public creator: UserProfileModel | null = null;
           public media_file: string | null = null;
           public title: string | null = null;
           public description: string | null = null;
           public timestamp: string | null = null;

           constructor(data?: Partial<PostModel>) {
               Object.assign(this, data);
           }
       }


export class CommentModel {
           public id: string | null = null;
           public comment_by: UserProfileModel | null = null;
           public content:string| null = null;
           public timestamp:string| null = null;
           public post_id: string | null = null;

           constructor(data?: Partial<CommentModel>) {
               Object.assign(this, data);
           }
       }

export class LikeModel {
    public id: string | null = null;
    public liker: UserProfileModel | null = null;
    public post_id: string | null = null;

    constructor(data?: Partial<LikeModel>) {
        Object.assign(this, data);
    }
}

export class ShareModel {
    public id: string | null = null;
    public email: string | null = null;
    public username: string | null = null;

    constructor(data?: Partial<ShareModel>) {
        Object.assign(this, data);
    }
}
