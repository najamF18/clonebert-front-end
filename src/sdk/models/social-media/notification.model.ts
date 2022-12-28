import { UserProfileModel } from "./user-profile.model";

export class NotificationModel {
           public id: string | null = null;
           public description: string | null = null;
           public isRead: string | null = null;
           public sender: UserProfileModel | null = null;
           public receiver: UserProfileModel | null = null;
           public timestamp: string | null = null;

           constructor(data?: Partial<NotificationModel>) {
               Object.assign(this, data);
           }
       }
